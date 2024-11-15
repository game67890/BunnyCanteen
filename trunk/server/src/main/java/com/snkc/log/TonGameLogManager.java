package com.snkc.log;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TreeMap;

public class TonGameLogManager {

     private TonGameLogManager(){

     }

     private static TonGameLogManager instance = new TonGameLogManager();

     public static TonGameLogManager getInstance(){
          return instance;
     }

     private static final Logger logger = LoggerFactory.getLogger(TonGameLogManager.class);
     private static final DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

     public static int SERVER_ID = 1;//这里以后可以换成读配置

     public void doLog(String logType, TreeMap<String,Object> params){
          StringBuilder sb = new StringBuilder();
          //基础数据先丢这了
          sb.append(logType).append("|");//日志类型
          sb.append(df.format(new Date())).append("|");//当前时间
          sb.append(System.currentTimeMillis()).append("|");//当前时间戳
          sb.append(SERVER_ID).append("|");//当前服务器ID
          sb.append(params.getOrDefault("userID","").toString()).append("|");//如果有的话，取一下UserID;
          params.remove("userID");//用完了，删掉，没有就没有了

          for (String key : params.keySet()){
               sb.append(params.getOrDefault(key,"").toString()).append("|");
          }
          logger.info(sb.toString());
     }

}
