package com.snkc.event.eventImpl;

import org.springframework.context.ApplicationEvent;

public class CarrotCoinAddEvent extends ApplicationEvent {

    public String userID;
    public String reason;
    public int addNum;

    public CarrotCoinAddEvent(String userID, String reason, int addNum) {
        super(userID);
        this.userID = userID;
        this.reason = reason;
        this.addNum = addNum;
    }

    public String getUserID() {
        return userID;
    }

    public String getReason() {
        return reason;
    }

    public int getAddNum() {
        return addNum;
    }
}
