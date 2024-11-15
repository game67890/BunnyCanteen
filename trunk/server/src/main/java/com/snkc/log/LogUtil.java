package com.snkc.log;

import org.springframework.stereotype.Component;

import java.util.TreeMap;

@Component
public class LogUtil {

    public static void doShutDownLog(){
        TreeMap<String,Object> parm = new TreeMap<>();
        TonGameLogManager.getInstance().doLog("Ton_Server_Shutdown",parm);
    }

    public static void doLoginLog(String userID){
        TreeMap<String,Object> parm = new TreeMap<>();
        parm.put("userID",userID);
        TonGameLogManager.getInstance().doLog("Ton_LoginIn",parm);
    }

    public static void doRegLog(String userID){
        TreeMap<String,Object> parm = new TreeMap<>();
        parm.put("userID",userID);
        TonGameLogManager.getInstance().doLog("Ton_Reg",parm);
    }

    public static void doChargeLog(String userID,int price,int carrotCoin,int gear){
        TreeMap<String,Object> parm = new TreeMap<>();
        parm.put("userID",userID);
        parm.put("price",price);
        parm.put("carrotCoin",carrotCoin);
        parm.put("gear",gear);
        TonGameLogManager.getInstance().doLog("Ton_Charge",parm);
    }

    public static void doCarrotCoinAddLog(String userID,String reason,int addSum,int total){
        TreeMap<String,Object> parm = new TreeMap<>();
        parm.put("userID",userID);
        parm.put("addSum",addSum);
        parm.put("carrotCoin",total);
        parm.put("reason",reason);
        TonGameLogManager.getInstance().doLog("Ton_CarrotCoin_Add",parm);
    }

    public static void doInviteLog(String inviterID,String inviteeID){
        TreeMap<String,Object> parm = new TreeMap<>();
        parm.put("inviterID",inviterID);
        parm.put("inviteeID",inviteeID);
        TonGameLogManager.getInstance().doLog("Ton_Inviter",parm);
    }

}
