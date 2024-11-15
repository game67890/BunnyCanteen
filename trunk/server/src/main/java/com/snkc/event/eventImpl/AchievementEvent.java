package com.snkc.event.eventImpl;


public class AchievementEvent extends GameSinglePlayerEvent {

    public static  int ACHIEVEMENT_LOGIN_TOTAL = 1;//累计登录天数
    public static  int ACHIEVEMENT_LOGIN_CONTINUAL = 2;//最大连续登录天数
    public static  int ACHIEVEMENT_CHARGE_TOTAL = 3;//累计充值金额
    public static  int MISSION_TYPE_RABBITCOIN_SPEED = 4;//兔子币最大产出速率
    public static  int MISSION_TYPE_CARROTCOIN_MAX = 5;//萝卜币历史最大值


    public AchievementEvent(String userID, int eventType, String message) {
        super(userID, eventType, message);
    }
}