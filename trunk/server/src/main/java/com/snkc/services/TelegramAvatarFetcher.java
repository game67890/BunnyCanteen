package com.snkc.services;

import com.snkc.data.DataManager;
import com.snkc.repository.LoginRepository;
import com.snkc.rest.save.SaveController;
import com.snkc.util.FileDownloader;
import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

@Service
public class TelegramAvatarFetcher {
    Logger logger = LoggerFactory.getLogger(TelegramAvatarFetcher.class);

    // 替换为你的 Telegram Bot Token 和用户 ID
    @Value("${sys.telegrambottoken}")
    private String telegrambottoken;
    @Autowired
    private FileDownloader fileDownloader;
    @Async
    public void downloadHeadImg(String userId){
        try {
            // 获取用户的头像信息
            String fileId = getUserProfilePhotos(userId);
            if (fileId != null) {
                // 获取文件路径并生成头像 URL
                String avatarUrl = getFileUrl(fileId);
                // 其实应该截取下文件名 先这样吧
                fileDownloader.fileDownloader(avatarUrl, userId + ".jpg");
            } else {
                logger.error("{} 用户没有设置头像.", userId);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    // 获取用户的头像信息
    public String getUserProfilePhotos(String userId) throws Exception {
        String url = "https://api.telegram.org/bot" + telegrambottoken + "/getUserProfilePhotos?user_id=" + userId;
        logger.info("url {}", url);

        // 发送 GET 请求
        HttpURLConnection conn = (HttpURLConnection) new URL(url).openConnection();
        conn.setRequestMethod("GET");

        int responseCode = conn.getResponseCode();
        if (responseCode == HttpURLConnection.HTTP_OK) {
            BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String inputLine;
            StringBuilder response = new StringBuilder();

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();
            logger.info("response {}", response);
/**
 * {"ok":true,"result":{"total_count":1,"photos":[[{"file_id":"AgACAgUAAxUAAWcYWgABS-HDDNPxGBfKOYXLBxXMsAACd8ExGynqiVSrvbqnCqYBvQEAAwIAA2EAAzYE","file_unique_id":"AQADd8ExGynqiVQAAQ","file_size":8406,"width":160,"height":160},{"file_id":"AgACAgUAAxUAAWcYWgABS-HDDNPxGBfKOYXLBxXMsAACd8ExGynqiVSrvbqnCqYBvQEAAwIAA2IAAzYE","file_unique_id":"AQADd8ExGynqiVRn","file_size":21035,"width":320,"height":320},{"file_id":"AgACAgUAAxUAAWcYWgABS-HDDNPxGBfKOYXLBxXMsAACd8ExGynqiVSrvbqnCqYBvQEAAwIAA2MAAzYE","file_unique_id":"AQADd8ExGynqiVQB","file_size":41759,"width":640,"height":640}]]}}
 */
          /*  final HashMap<String, com.google.gson.JsonPrimitive> jsonResponse = dataManager.gson.fromJson(response.toString(), HashMap.class);
            final JsonPrimitive jsonPrimitive = jsonResponse.get("ok");
            if (jsonPrimitive != null) {
                final String asString = jsonPrimitive.getAsString();
                if (asString.equals("true")) {

                }
            }*/

            // 解析响应
            JSONObject jsonResponse = new JSONObject(response.toString());
            if (jsonResponse.getBoolean("ok")) {
                JSONArray photos = jsonResponse.getJSONObject("result").getJSONArray("photos");
                if (photos.length() > 0) {
                    // 获取第一个头像的 file_id
                    return photos.getJSONArray(0).getJSONObject(0).getString("file_id");
                }
            }
        } else {
           logger.error("GET 请求失败，响应代码: " + responseCode);
        }
        return null;
    }

    // 获取文件路径并生成头像 URL
    public String getFileUrl(String fileId) throws Exception {
        String url = "https://api.telegram.org/bot" + telegrambottoken + "/getFile?file_id=" + fileId;

        // 发送 GET 请求
        HttpURLConnection conn = (HttpURLConnection) new URL(url).openConnection();
        conn.setRequestMethod("GET");

        int responseCode = conn.getResponseCode();
        if (responseCode == HttpURLConnection.HTTP_OK) {
            BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String inputLine;
            StringBuilder response = new StringBuilder();

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();
            logger.info(response.toString());

            // 解析响应
            JSONObject jsonResponse = new JSONObject(response.toString());
            if (jsonResponse.getBoolean("ok")) {
                String filePath = jsonResponse.getJSONObject("result").getString("file_path");

                // 构建头像 URL
                return "https://api.telegram.org/file/bot" + telegrambottoken + "/" + filePath;
            }
        } else {
            logger.error("GET 请求失败，响应代码: " + responseCode);
        }
        return null;
    }


}