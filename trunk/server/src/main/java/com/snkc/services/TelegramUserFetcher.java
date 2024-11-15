package com.snkc.services;

import com.snkc.model.User;
import com.snkc.repository.LoginRepository;
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

/**
 * 获取telegram用户名
 */
@Service
public class TelegramUserFetcher {
    Logger logger = LoggerFactory.getLogger(TelegramUserFetcher.class);

    @Value("${sys.telegrambottoken}")
    private String telegrambottoken;
    @Autowired
    LoginRepository loginRepo;

    @Async
    public void getTelegramUserName(String userId) {
        final String API_URL = "https://api.telegram.org/bot" + telegrambottoken;

        try {
            String urlString = API_URL + "/getChat?chat_id=" + userId;

            logger.info("getTelegramUserName urlString:{}", urlString);

            URL url = new URL(urlString);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");

            BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            StringBuilder response = new StringBuilder();
            String inputLine;

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();


            logger.info("getTelegramUserName urlString:{} response ", urlString, response.toString());
            // Parse JSON response
            JSONObject jsonResponse = new JSONObject(response.toString());
            if (jsonResponse.getBoolean("ok")) {
                JSONObject result = jsonResponse.getJSONObject("result");


                String first_name = "";
                String last_name = "";
                if (result.has("first_name")) {
                    first_name = result.getString("first_name");
                }

                if (result.has("last_name")) {
                    last_name = result.getString("last_name");
                }

                String userName = first_name + " " + last_name;

                final User userById = this.loginRepo.findUserById(userId);
                userById.setUserName(userName);
                this.loginRepo.save(userById);

            } else {
                logger.error("Error: " + jsonResponse.getString("description"));
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
    }

/*    public static void main(String[] args) {
        Long chatId = 123456789L; // 替换为目标用户的 chat_id
        String username = getTelegramUserName(chatId);
        System.out.println("Username: " + username);
    }*/
}