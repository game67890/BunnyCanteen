package com.snkc.event.listener;

import com.alibaba.fastjson2.JSONObject;
import com.snkc.event.eventImpl.AchievementEvent;
import com.snkc.event.eventImpl.MissionEvent;
import com.snkc.rest.mission.MissionsAndAchievementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class MissionListener implements ApplicationListener<MissionEvent> {

    @Autowired
    MissionsAndAchievementService missionsAndAchievementService;

    @Override
    public void onApplicationEvent(MissionEvent event) {
        //先解析数据
        JSONObject jsonObject = JSONObject.parseObject(event.getMessage());
        int num = jsonObject.getIntValue("addNum",0);
        if (num <= 0){
            return;
        }
        try {
            missionsAndAchievementService.missionCheck(event.getUserID(),event.getEventType(),num);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
