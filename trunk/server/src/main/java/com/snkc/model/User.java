package com.snkc.model;

import com.google.gson.JsonObject;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;

@Document("User")
public class User {
    @Id
    private String id;
    private int channelId;
    private String channelUserID;
    private String userName;
    private int accountType; // 0 player, 1 gm
    private int status;//
    private int carrotCoin;
    private long lastSaveTime;//上次保存时间
    private String baseData;//基础数据
    private String boardData;//棋盘数据
    private String inviter;//邀请人
    private HashMap<Integer,Short> func;//功能开放情况 Key-功能ID Value-值
    private String token;//登录token

    public User(String id)
    {
        super();
        this.id = id;
        this.channelId = 0;
        this.channelUserID = id+"";
        this.userName = "";
        this.accountType = 0;
        this.carrotCoin = 0;
        this.status = 0;
        this.baseData = "";
        this.boardData = "";
        this.func = new HashMap<>();
    }

    //初始化玩家信息
    public void initUserInfo(){
        //初始化自动合成功能
        this.func.put(1,(short)0);
        this.lastSaveTime = System.currentTimeMillis();
    }

    public String getId() {
        return id;
    }
    public int getChannelId() {
        return channelId;
    }
    public String getChannelUserID() { return channelUserID; }
    public String getUserName() {
        if (userName.equals("默认名")) {
            return "";
        }
        return userName;
    }

    public int getAccountType() { return accountType; }
    public int getStatus() { return status; }

    public void setId(String id) {
        this.id = id;
    }
    public void setChannelId(int channelId) {
        this.channelId = channelId;
    }
    public void setChannelUserID(String channelUserID) { this.channelUserID = channelUserID; }
    public void setUserName(String userName) { this.userName = userName; }
    public void setAccountType(int accountType) { this.accountType = accountType; }
    public void setStatus(int status) { this.status = status; }

    public long getLastSaveTime() {
        return lastSaveTime;
    }

    public void setLastSaveTime(long lastSaveTime) {
        this.lastSaveTime = lastSaveTime;
    }

    public String getBaseData() {
        return baseData;
    }

    public void setBaseData(String baseData) {
        this.baseData = baseData;
    }

    public String getBoardData() {
        return boardData;
    }

    public void setBoardData(String boardData) {
        this.boardData = boardData;
    }

    public int getCarrotCoin() {
        return carrotCoin;
    }

    public String getInviter() {
        return inviter;
    }

    public void setInviter(String inviter) {
        this.inviter = inviter;
    }

    public HashMap<Integer, Short> getFunc() {
        return func;
    }

    public void setFunc(HashMap<Integer, Short> func) {
        this.func = func;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    //操作萝卜币前务必加锁
    public void addCarrotCoin(int addNum){
        if (addNum < 0){
            return;
        }
        if (carrotCoin + addNum < 0){
            return;
        }

        carrotCoin += addNum;
    }

    //操作萝卜币前务必加锁
    public boolean subCarrotCoin(int subNum){
        if (subNum <= 0){
            return false;
        }
        if (subNum > carrotCoin){
            return false;
        }
        carrotCoin -= subNum;
        return true;
    }

    public void getUserInfo(JsonObject jsonObject){
        jsonObject.addProperty("lastSaveTime",this.lastSaveTime);
        jsonObject.addProperty("baseData",this.baseData);
        jsonObject.addProperty("boardData",this.boardData);
        jsonObject.addProperty("carrotCoin",this.carrotCoin);
        jsonObject.addProperty("func",this.func.toString());
    }



//    public static class NodeStruct {
//        private int row;//所属行
//        private int column;//所属列
//        private int itemID;//当前放置的道具ID 0即为无
//
//        public NodeStruct(int row, int column) {
//            this.row = row;
//            this.column = column;
//            this.itemID = 0;
//        }
//
//        public int getRow() {
//            return row;
//        }
//
//        public int getColumn() {
//            return column;
//        }
//
//        public int getItemID() {
//            return itemID;
//        }
//
//        public void setItemID(int itemID) {
//            this.itemID = itemID;
//        }
//    }
//
//    public static class scoreBean {
//        private int score;//分数
//        private long timeStamp;//时间戳
//
//        public scoreBean(int score) {
//            this.score = score;
//            this.timeStamp = System.currentTimeMillis();
//        }
//
//        public scoreBean(int score, long timeStamp) {
//            this.score = score;
//            this.timeStamp = timeStamp;
//        }
//
//        public int getScore() {
//            return score;
//        }
//
//        public void setScore(int score) {
//            this.score = score;
//        }
//
//        public long getTimeStamp() {
//            return timeStamp;
//        }
//
//        public void setTimeStamp(long timeStamp) {
//            this.timeStamp = timeStamp;
//        }
//    }
}
