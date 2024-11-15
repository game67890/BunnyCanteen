package com.snkc.services;

import com.snkc.util.FileDownloader;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

/**
 * Created by gaosong
 * 2024/10/22
 */
@RestController
//@RequestMapping("/getheadimg")
public class GetHeadImgController {
    static Logger logger = LoggerFactory.getLogger(GetHeadImgController.class);


    //@Value("${sys.headimagefilepath}")
    public static String headimagefilepath = "headimagefilepath";

   /* @Autowired
    TelegramAvatarFetcher telegramAvatarFetcher;
   *//* @RequestMapping(value = "/**", method = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE}, produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity catchAll(HttpServletRequest request, HttpServletResponse response) {
        return routingDelegate.redirect(request, response, "/Graph_Server", DELEGATE_PREFIX);
    }*//*


    @ResponseBody
    @GetMapping(value = "/{userId}", produces = MediaType.IMAGE_JPEG_VALUE)
    public byte[] getImg(HttpServletResponse response, @PathVariable("userId") String userId) {
        //fileId 是自己的业务ID，用来查询相关文件的

        File image = new File(headimagefilepath + "/" + userId + ".jpg");
        FileInputStream inputStream = null;
        try {
            inputStream = new FileInputStream(image);
            int length = inputStream.available();
            byte bytes[] = new byte[length];
            response.setContentLength(length);
            inputStream.read(bytes);
            return bytes;
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }





        return null;
    }

*/

    /**
     * 通用方案（适合任何大小文件），建议采用
     *
     * 边读取+边输出
     * @param response
     * @throws IOException
     */
/*    @GetMapping("/download3")
    public void download3(HttpServletResponse response) throws IOException {
        // 指定要下载的文件
        //File file = ResourceUtils.getFile("classpath:2.zip");
        File file = ResourceUtils.getFile("F:\\5e3db4b9a62b1cec90ea1c68da0c6cf.jpg");
        //文件名编码，防止中文乱码
        String filename = URLEncoder.encode(file.getName(), "UTF-8");
        // 设置响应头信息
        response.setHeader("Content-Disposition", "attachment; filename=\"" + filename + "\"");
        // 内容类型为通用类型，表示二进制数据流
        response.setContentType("application/octet-stream");
        // 循环，边读取边输出，可避免大文件时OOM
        try (InputStream inputStream = new FileInputStream(file); OutputStream os = response.getOutputStream()) {
            byte[] bytes = new byte[1024];
            int readLength;
            while ((readLength = inputStream.read(bytes)) != -1) {
                os.write(bytes, 0, readLength);
            }
        }
    }*/
}