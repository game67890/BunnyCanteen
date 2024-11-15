package com.snkc.rest.mission;

import com.alibaba.fastjson2.JSONObject;
import com.snkc.data.DataManager;
import com.snkc.event.eventImpl.AchievementEvent;
import com.snkc.event.eventImpl.CarrotCoinAddEvent;
import com.snkc.event.eventImpl.MissionEvent;
import com.snkc.event.publisher.EventPublisher;
import com.snkc.model.MissionData;
import com.snkc.repository.LoginRepository;
import com.snkc.repository.MissionDataRepository;
import com.snkc.serverjsonbean.Achievement;
import com.snkc.serverjsonbean.Task;
import com.snkc.websocket.PaymentWebSocketHandler;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@Service
public class MissionsAndAchievementService {

    public static int MISSION_TYPE_DAILY = 2;
    private List<Integer> dailyRestMissionID = new ArrayList<>();
    @Autowired
    DataManager dataManager;
    @Autowired
    LoginRepository loginRepo;
    @Autowired
    MissionDataRepository missionDataRepository;
    @Autowired
    PaymentWebSocketHandler webSocketHandler;
    @Autowired
    EventPublisher eventPublisher;

    @PostConstruct
    public void init() throws IOException {
        for (Task task :dataManager.getCfgFile(Task.class).values()){
            if (Integer.valueOf(task.tasktype()) == MISSION_TYPE_DAILY){
                dailyRestMissionID.add(task.id());
            }
        }
    }


    //初始化每日任务记录 如有重置则返回True
    public boolean resetDailyMission(MissionData missionData){
        long now = System.currentTimeMillis();
        if (isInSameDay(missionData.getLastRestTime(),now)){
            return false;
        }
        //初始化每日任务详情
        for (int missionID : dailyRestMissionID){
            missionData.getMission().remove(missionID);
        }
        //每日任务数据清理掉
        missionData.getKeyDataNum().put(MissionEvent.MISSION_TYPE_LOGIN_DAILY,0L);
        missionData.getKeyDataNum().put(MissionEvent.MISSION_TYPE_CHARGE_DAILY,0L);
        //超过一天，那连续登录该断了
        if (getDaysBetween(missionData.getLastRestTime(),now) > 1){
            missionData.getAchieveDataNum().put(AchievementEvent.ACHIEVEMENT_LOGIN_CONTINUAL,0L);
        }
        missionData.setLastRestTime(now);
        return true;
    }

    //看一下两个时间是不是在同一天
    public boolean isInSameDay(long time1,long time2){
        return !(getDaysBetween(time1,time2)>0);
    }

    public long getDaysBetween(long time1,long time2){
        LocalDateTime dateTime1 = LocalDateTime.ofInstant(Instant.ofEpochMilli(time1), ZoneId.systemDefault());
        LocalDateTime dateTime2 = LocalDateTime.ofInstant(Instant.ofEpochMilli(time2), ZoneId.systemDefault());
        return ChronoUnit.DAYS.between(dateTime1,dateTime2);
    }

    public String genMissionsJson(MissionData missionData) throws IOException {
        JSONObject jsonObject = new JSONObject();
        for (Task task :dataManager.getCfgFile(Task.class).values()){
            JSONObject missionJson = new JSONObject();
            missionJson.put("ID",task.id());
            missionJson.put("isFinished",missionData.getMission().getOrDefault(task.id(),0)==1);
            missionJson.put("progress",missionData.getKeyDataNum().getOrDefault(task.tasktype(),0L));
            jsonObject.put(String.valueOf(task.id()),missionJson.toString());
        }
        return jsonObject.toString();
    }

    public String genAchievement(MissionData missionData) throws IOException {
        JSONObject jsonObject = new JSONObject();
        for (Achievement achievement :dataManager.getCfgFile(Achievement.class).values()){
            JSONObject missionJson = new JSONObject();
            missionJson.put("ID",achievement.id());
            missionJson.put("isFinished",missionData.getAchievement().getOrDefault(achievement.id(),0)==1);
            missionJson.put("progress",missionData.getAchieveDataNum().getOrDefault(achievement.achievetype(),0L));
            jsonObject.put(String.valueOf(achievement.id()),missionJson.toString());
        }
        return jsonObject.toString();
    }

    public String genPanelJson(String userID) throws IOException {
        var userById = loginRepo.findById(userID);
        JSONObject jsonObject = new JSONObject();
        if (userById.isEmpty()){
            jsonObject.put("result",false);
            return jsonObject.toString();
        }
        var data = missionDataRepository.findById(userID);
        MissionData missionData;
        if (data.isEmpty()){
            missionData = new MissionData(userID,System.currentTimeMillis());
            missionDataRepository.save(missionData);
        }else {
            missionData = data.get();
        }
        boolean hasReset = resetDailyMission(missionData);
        jsonObject.put("mission",genMissionsJson(missionData));
        jsonObject.put("achievement",genAchievement(missionData));
        jsonObject.put("result",true);
        jsonObject.put("userName",this.loginRepo.findUserById(userID).getUserName());
        if (hasReset){
            missionDataRepository.save(missionData);
        }
        return jsonObject.toString();
    }

    //完成某个成就
    public String achievementFinish(String userID,int achievementID) throws IOException {
        JSONObject jsonObject = new JSONObject();
        var data = missionDataRepository.findById(userID);
        if (data.isEmpty()){
            jsonObject.put("result",false);
            return jsonObject.toString();
        }
        MissionData missionData = data.get();
        if (missionData.getAchievement().getOrDefault(achievementID,0) == 1){
            jsonObject.put("result",false);
            return jsonObject.toString();
        }
        Achievement achievement = dataManager.getCfgFile(Achievement.class).getOrDefault(achievementID,null);
        if (achievement == null){
            jsonObject.put("result",false);
            return jsonObject.toString();
        }
        if (missionData.getAchieveDataNum().getOrDefault(achievement.achievetype(),0L) < achievement.condition()){
            jsonObject.put("result",false);
            return jsonObject.toString();
        }
        missionData.getAchievement().put(achievementID,1);
        missionDataRepository.save(missionData);
        jsonObject.put("result",true);
        jsonObject.put("achievementID",achievementID);
        if (achievement.award() == 1){
            eventPublisher.publish(new CarrotCoinAddEvent(userID,"完成成就 "+achievementID,achievement.num()));
        }
        return jsonObject.toString();
    }


    public void missionCheck(String userID,int missionType,int addNum) throws IOException {
        var data = missionDataRepository.findById(userID);
        if (data.isEmpty()){
            return;
        }
        if (addNum <= 0){
            return;
        }
        MissionData missionData = data.get();
        boolean hasReset = resetDailyMission(missionData);
        //如果没有重置，那代表今天登录过了，登录任务不处理
        if (!hasReset && missionType == MissionEvent.MISSION_TYPE_LOGIN_DAILY){
            return;
        }
        long newNum = missionData.getKeyDataNum().getOrDefault(missionType,0L) + addNum;
        missionData.getKeyDataNum().put(missionType,newNum);
        LinkedList<Integer> finishMission = new LinkedList<>();
        for (Task task :dataManager.getCfgFile(Task.class).values()){
            if (missionData.getMission().getOrDefault(task.id(),0) > 0){
                continue;
            }
            if (task.tasktype() != missionType){
                continue;
            }
            if (task.taskpara() > newNum){
                continue;
            }
            missionData.getMission().put(task.id(),1);
            finishMission.add(task.id());
            if (Integer.parseInt(task.carrotcoinnum()) > 0){
                eventPublisher.publish(new CarrotCoinAddEvent(userID,"完成任务 "+task.id(),Integer.parseInt(task.carrotcoinnum())));
            }
        }
        if (!finishMission.isEmpty()){
            JSONObject notifyJson = new JSONObject();
            notifyJson.put("NotifyType","Mission_Complete");
            notifyJson.put("Missions",finishMission);
            webSocketHandler.notifyUser(userID,notifyJson.toString());
        }
        //在处理每日登录任务时，顺便把登录相关的成就处理了
        if (missionType == MissionEvent.MISSION_TYPE_LOGIN_DAILY){
            missionData.getAchieveDataNum().put(AchievementEvent.ACHIEVEMENT_LOGIN_TOTAL,
                    missionData.getAchieveDataNum().getOrDefault(AchievementEvent.ACHIEVEMENT_LOGIN_TOTAL,0L)+1);
            missionData.getAchieveDataNum().put(AchievementEvent.ACHIEVEMENT_LOGIN_CONTINUAL,
                    missionData.getAchieveDataNum().getOrDefault(AchievementEvent.ACHIEVEMENT_LOGIN_CONTINUAL,0L)+1);
        }
        missionDataRepository.save(missionData);
    }

    //成就 增加值检测
    public void achievementAddCheck(String userID, int achievementType, int addNum) throws IOException {
        var data = missionDataRepository.findById(userID);
        if (data.isEmpty()){
            return;
        }
        if (addNum <= 0){
            return;
        }
        MissionData missionData = data.get();
        boolean hasReset = resetDailyMission(missionData);
        //没有重置则代表今天已经登陆过了，登录相关的不记录
        if (!hasReset && achievementType == AchievementEvent.ACHIEVEMENT_LOGIN_TOTAL){
            return;
        }
        if (!hasReset && achievementType == AchievementEvent.ACHIEVEMENT_LOGIN_CONTINUAL){
            return;
        }
        long newNum = missionData.getAchieveDataNum().getOrDefault(achievementType,0L) + addNum;
        missionData.getAchieveDataNum().put(achievementType,newNum);
        missionDataRepository.save(missionData);
    }

    //成就 最大值检测
    public void achievementMaxCheck(String userID, int achievementType, long maxNum) throws IOException {
        var data = missionDataRepository.findById(userID);
        if (data.isEmpty()){
            return;
        }
        if (maxNum <= 0){
            return;
        }
        MissionData missionData = data.get();
        boolean hasReset = resetDailyMission(missionData);
        //没有重置则代表今天已经登陆过了，登录相关的不记录
        if (!hasReset && achievementType == AchievementEvent.ACHIEVEMENT_LOGIN_TOTAL){
            return;
        }
        if (!hasReset && achievementType == AchievementEvent.ACHIEVEMENT_LOGIN_CONTINUAL){
            return;
        }
        if (missionData.getAchieveDataNum().getOrDefault(achievementType,0L) >= maxNum){
            return;
        }
        missionData.getAchieveDataNum().put(achievementType,maxNum);
        missionDataRepository.save(missionData);
    }

    public String updateMissionProgress(String userID,int missionType){
        JSONObject notifyJson = new JSONObject();
        var data = missionDataRepository.findById(userID);
        if (data.isEmpty()){
            notifyJson.put("result",false);
            return notifyJson.toString();
        }
        if (missionType != MissionEvent.MISSION_TYPE_FOLLOW &&
                missionType != MissionEvent.MISSION_TYPE_BROWSE &&
                missionType != MissionEvent.MISSION_TYPE_BOT){
            notifyJson.put("result",false);
            return notifyJson.toString();
        }
        JSONObject chargeJson = new JSONObject();
        chargeJson.put("addNum",1);
        eventPublisher.publish(new MissionEvent(userID,missionType,chargeJson.toString()));
        notifyJson.put("result",true);
        return notifyJson.toString();
    }

}
