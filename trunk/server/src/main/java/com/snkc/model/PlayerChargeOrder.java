package com.snkc.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("PlayerChargeOrder")
public class PlayerChargeOrder {

    @Id
    private String id;
    private String userID;
    private int type;
    private int goodID;
    private long createTime;
    private boolean isFinish;
    private long finishTime;
    private String platOrderID;//平台方orderID


    public PlayerChargeOrder(String id, String userID, int type, int goodID) {
        this.id = id;
        this.userID = userID;
        this.type = type;
        this.goodID = goodID;
    }

    public int getType() {
        return type;
    }

    public String getUserID() {
        return userID;
    }

    public String getId() {
        return id;
    }

    public long getFinishTime() {
        return finishTime;
    }

    public boolean isFinish() {
        return isFinish;
    }

    public int getGoodID() {
        return goodID;
    }

    public long getCreateTime() {
        return createTime;
    }

    public void setFinish(){
        this.isFinish = true;
        this.finishTime = System.currentTimeMillis();
    }

    public String getPlatOrderID() {
        return platOrderID;
    }

    public void setPlatOrderID(String platOrderID) {
        this.platOrderID = platOrderID;
    }
}
