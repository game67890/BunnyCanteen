package com.snkc.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

/**
 * getTgBotToken
 * 获取telegram的bot token
 */

@RestController
@CrossOrigin
public class GetTgBotTokenController {
    @Value("${sys.telegrambottoken}")
    String telegrambottoken;

    /**
     * @return
     */

    @PostMapping("/getTgBotToken")
    public String getTgBotToken() throws IOException {
        return telegrambottoken;
    }

}
