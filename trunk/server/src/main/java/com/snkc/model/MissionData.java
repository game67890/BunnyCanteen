package com.snkc.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashMap;

@Document(collection = "missiondata")
public class MissionData {

    @Id
    private String id;//UserID
    private HashMap<Integer,Integer> mission = new HashMap<>();//任务进度
    private HashMap<Integer,Integer> achievement = new HashMap<>();//成就进度
    private HashMap<Integer, Long> keyDataNum = new HashMap<>();//数字型关键数据的储存
    private HashMap<Integer, Long> achieveDataNum = new HashMap<>();//成就关键数据的储存
    private long lastRestTime;//上次重置时间 用于每日刷新


    public MissionData(String id, HashMap<Integer, Integer> mission, HashMap<Integer, Integer> achievement, HashMap<Integer, Long> keyDataNum, HashMap<Integer, Long> achieveDataNum, long lastRestTime) {
        this.id = id;
        this.mission = mission;
        this.achievement = achievement;
        this.keyDataNum = keyDataNum;
        this.achieveDataNum = achieveDataNum;
        this.lastRestTime = lastRestTime;
    }

    public MissionData() {
    }

    public MissionData(String id, long lastRestTime) {
        this.id = id;
        this.lastRestTime = lastRestTime;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public HashMap<Integer, Integer> getMission() {
        return mission;
    }

    public void setMission(HashMap<Integer, Integer> mission) {
        this.mission = mission;
    }

    public HashMap<Integer, Integer> getAchievement() {
        return achievement;
    }

    public void setAchievement(HashMap<Integer, Integer> achievement) {
        this.achievement = achievement;
    }

    public HashMap<Integer, Long> getAchieveDataNum() {
        return achieveDataNum;
    }

    public void setAchieveDataNum(HashMap<Integer, Long> achieveDataNum) {
        this.achieveDataNum = achieveDataNum;
    }

    public HashMap<Integer, Long> getKeyDataNum() {
        return keyDataNum;
    }

    public long getLastRestTime() {
        return lastRestTime;
    }

    public void setLastRestTime(long lastRestTime) {
        this.lastRestTime = lastRestTime;
    }

}
