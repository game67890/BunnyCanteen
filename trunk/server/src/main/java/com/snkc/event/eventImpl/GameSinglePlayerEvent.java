package com.snkc.event.eventImpl;

import org.springframework.boot.SpringApplication;
import org.springframework.context.ApplicationEvent;

/**
 *  单人玩家事件
 *  userID 玩家UserID
 *  eventType 事件类型
 */
public class GameSinglePlayerEvent extends ApplicationEvent {

    private String userID;
    private int eventType;
    private String message;

    public GameSinglePlayerEvent(String userID, int eventType, String message) {
        super(userID);
        this.userID = userID;
        this.eventType = eventType;
        this.message = message;
    }

    public String getUserID() {
        return userID;
    }

    public int getEventType() {
        return eventType;
    }

    public String getMessage() {
        return message;
    }
}
