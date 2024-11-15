package com.snkc.util;

/**
 * Created by gaosong
 * 2024/10/23
 */

import com.snkc.services.GetHeadImgController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.client.RestTemplate;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;

@Service
public class FileDownloader {
    static Logger logger = LoggerFactory.getLogger(FileDownloader.class);

    //@Value("${sys.headimagefilepath}")
    private String headimagefilepath = GetHeadImgController.headimagefilepath;

    public void fileDownloader(String url, String fileName) throws IOException {

        // String fileUrl = "https://api.telegram.org/file/bot8003383508:AAHHwOmERFTCzjVCNAyU15wUqKhwyclPZYI/photos/file_2.jpg";
        String fileUrl = url;
        logger.info("fileUrl:{}", fileUrl);

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();

        List<MediaType> acceptableMediaTypes = new ArrayList<>();
        acceptableMediaTypes.add(MediaType.APPLICATION_OCTET_STREAM);
        headers.setAccept(acceptableMediaTypes);

        RequestEntity<Object> requestEntity = new RequestEntity<>(headers, HttpMethod.GET, URI.create(fileUrl));
        ResponseEntity<Resource> responseEntity = restTemplate.exchange(requestEntity, Resource.class);
        Resource resource = responseEntity.getBody();

        File file = new File(headimagefilepath+"/"+fileName);
        Files.createDirectories(file.getParentFile().toPath());

        try (FileOutputStream outputStream = new FileOutputStream(file)) {
            FileCopyUtils.copy(resource.getInputStream(), outputStream);
        }

        logger.info("File {} downloaded successfully!", fileName);

    }
}