package com.snkc.event.listener;

import com.alibaba.fastjson2.JSONObject;
import com.snkc.event.eventImpl.AchievementEvent;
import com.snkc.rest.mission.MissionsAndAchievementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class AchievementListener implements ApplicationListener<AchievementEvent> {

    @Autowired
    MissionsAndAchievementService missionsAndAchievementService;

    @Override
    public void onApplicationEvent(AchievementEvent event) {
        //先解析数据
        JSONObject jsonObject = JSONObject.parseObject(event.getMessage());
        int addNum = jsonObject.getIntValue("addNum",0);
        long maxNum = jsonObject.getLongValue("maxNum",0);
        if (addNum >0){
            try {
                missionsAndAchievementService.achievementAddCheck(event.getUserID(),event.getEventType(),addNum);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
        if (maxNum > 0){
            try {
                missionsAndAchievementService.achievementMaxCheck(event.getUserID(),event.getEventType(),maxNum);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
    }
}
