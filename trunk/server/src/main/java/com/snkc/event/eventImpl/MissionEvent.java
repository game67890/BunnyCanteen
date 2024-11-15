package com.snkc.event.eventImpl;

public class MissionEvent extends GameSinglePlayerEvent{

    public static  int MISSION_TYPE_FOLLOW = 1;//加入官方频道
    public static  int MISSION_TYPE_BOT = 2;//使用官方机器人
    public static  int MISSION_TYPE_BROWSE = 3;//浏览官方频道
    public static  int MISSION_TYPE_LOGIN_DAILY = 4;//每日登录
    public static  int MISSION_TYPE_CHARGE_DAILY = 5;//每日充值

    public MissionEvent(String userID, int eventType, String message) {
        super(userID, eventType, message);
    }

}
