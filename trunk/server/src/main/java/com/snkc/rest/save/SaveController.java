package com.snkc.rest.save;

import com.alibaba.fastjson2.JSONObject;
import com.google.gson.JsonObject;
import com.snkc.data.DataManager;
import com.snkc.event.eventImpl.AchievementEvent;
import com.snkc.event.publisher.EventPublisher;
import com.snkc.game.baluobo.responsebean.BaluoBoService;
import com.snkc.game.rank.RankService;
import com.snkc.game.rank.modlel.CanTingLevelData;
import com.snkc.game.rank.modlel.TuZiBiData;
import com.snkc.game.rank.repository.CanTingLevelDataRepository;
import com.snkc.game.tizicoincheck.TiZiCoinCheckService;
import com.snkc.model.User;
import com.snkc.repository.LoginRepository;
import com.snkc.security.providers.JwtTokenProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Optional;

/**
 * 保存萝卜币 和 其他客户端数据的接口
 * 萝卜币需要做服务器校验
 */
@RestController
@CrossOrigin
public class SaveController {

    Logger logger = LoggerFactory.getLogger(SaveController.class);

    @Autowired
    JwtTokenProvider jwtTokenProvider;
    @Autowired
    LoginRepository loginRepo;

    // 做排行榜用的
    @Autowired
    CanTingLevelDataRepository canTingLevelDataRepository;

    @Autowired
    RankService rankService;

    @Autowired
    TiZiCoinCheckService tiZiCoinCheckService;
    @Autowired
    DataManager dataManager;
    @Autowired
    BaluoBoService baluoBoService;
    @Autowired
    EventPublisher eventPublisher;

    @PostMapping(value = "/save")
    public ResponseEntity<String> onSave(@RequestBody Save save) {
        var userID = save.userID();
        logger.info("save with id = " + userID);
        if (save.baseData() == null || save.boardData() == null) {
            JsonObject jsonObject = new JsonObject();
            jsonObject.addProperty("result", false);
            jsonObject.addProperty("reason", "NoData");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.APPLICATION_JSON).body(jsonObject.toString());
        }
        if (save.baseData().isEmpty() || save.boardData().isEmpty()) {
            JsonObject jsonObject = new JsonObject();
            jsonObject.addProperty("result", false);
            jsonObject.addProperty("reason", "EmptyData");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.APPLICATION_JSON).body(jsonObject.toString());
        }

        var userById = loginRepo.findById(userID);
        if (!userById.isPresent()) {
            JsonObject jsonObject = new JsonObject();
            jsonObject.addProperty("result", false);
            jsonObject.addProperty("reason", "notLogin");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.APPLICATION_JSON).body(jsonObject.toString());
        }

        User user = userById.get();

        try {
            //当餐厅等级变化的时候 记录下 做餐厅等级排行榜用
            recordCanTingLevel(save);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }


        try {
            // 记录下这个时间段 兔子币的增加量
            final boolean b = recordTuZiBi(save.userID(), save.baseData(), save.boardData());
            if (b == false) {
                logger.error("save 失败 可能是客户端篡改了时间戳 或者兔子币");

                JsonObject jsonObject = new JsonObject();
                jsonObject.addProperty("result", false);
                jsonObject.addProperty("reason", "checiTuZibiFail");
                jsonObject.addProperty("lastSaveTime", userById.get().getLastSaveTime());

                return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(jsonObject.toString());
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        user.setBaseData(save.baseData());
        user.setBoardData(save.boardData());
        user.setLastSaveTime(System.currentTimeMillis());
        loginRepo.save(user);

        JsonObject jsonObject = new JsonObject();
        jsonObject.addProperty("result", true);
        jsonObject.addProperty("reason", "success");
        jsonObject.addProperty("lastSaveTime", userById.get().getLastSaveTime());


        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(jsonObject.toString());
    }

    /**
     * 记录下这个时间段 兔子币的增加量
     * LastSavedTimestamp
     * 兔子币要支持大数
     * @param baseData
     * @return true 校验通过 可以保存 false 不可以
     */
    private boolean recordTuZiBi(String userId, String baseData, String boardData) throws IOException {

        String tuZiCoinServerStr = getDataFromBaseDataString(loginRepo.findUserById(userId).getBaseData(), "TuZiCoin");
        if (tuZiCoinServerStr.equals("")) {
            tuZiCoinServerStr = "10000";
        }

        BigDecimal tuZiCoinServer = new BigDecimal(tuZiCoinServerStr);


        BigDecimal tuZiCoinClient = new BigDecimal(getDataFromBaseDataString(baseData, "TuZiCoin"));
        // 这次发过来的和上一次保存的增加量
        long diff = tuZiCoinClient.subtract(tuZiCoinServer).longValue();

        long DataVersionNumServer = getDataFromBaseData(loginRepo.findUserById(userId).getBaseData(), "DataVersionNum");

        long DataVersionNumClient = getDataFromBaseData(baseData, "DataVersionNum");
        if (DataVersionNumClient - DataVersionNumServer > 3) {
            // 说明服务器离线太久 客户端自己运行了一段时间了
            final TuZiBiData tuZiBiData = this.rankService.getTuZiBiData(userId);
            // 这里记录客户端的变化 服务器只做校验
            tuZiBiData.setBiNumber(tuZiBiData.getBiNumber() + diff);
            this.rankService.saveDataToBaseData(tuZiBiData);

            return true;
        }




        int now = (int) (System.currentTimeMillis() / 1000);
        // 上一次保存的时间戳 秒
        long lastSavedTimestamp = loginRepo.findUserById(userId).getLastSaveTime() / 1000;




        long baluoBo = this.baluoBoService.getData(userId);

        // 回收菜品得到的兔子币
        long LastRecoverTuziCoin = getDataFromBaseData(baseData, "LastRecoverTuziCoin");

        diff -= baluoBo;
        diff -= LastRecoverTuziCoin;

        long timeDiff = now - lastSavedTimestamp;
        if (timeDiff < 5) {
            // 不足5秒按照5秒算
            timeDiff = 5;
        }

        // 下面的棋盘数据 用的客户端发过来 因为服务器对于这个功能一点儿的都没存 凑合凑合吧
        long tuZiBiSpeed = tiZiCoinCheckService.getTiZiBiSpeedInServer(userId, boardData);
        //logger.error("tuZiBiSpeed:{}", tuZiBiSpeed);

        // 服务器算一个值
        long addTiZiCoin = timeDiff * tuZiBiSpeed;

        // 冗余一些
        if (addTiZiCoin * 2 >= diff) {

            final TuZiBiData tuZiBiData = this.rankService.getTuZiBiData(userId);
            // 这里记录客户端的变化 服务器只做校验
            tuZiBiData.setBiNumber(tuZiBiData.getBiNumber() + addTiZiCoin);
            //此处认为兔子币增速也是合乎逻辑的，则也使用该速度更新任务
            JSONObject canTingGainJson = new JSONObject();
            canTingGainJson.put("maxNum",tuZiBiSpeed);
            eventPublisher.publish(new AchievementEvent(userId,AchievementEvent.MISSION_TYPE_RABBITCOIN_SPEED,canTingGainJson.toString()));
            
            this.rankService.saveDataToBaseData(tuZiBiData);

            return true;
        }

        logger.error("userId Check Save Fail....... userId {} tuZiCoinServer {}, tuZiCoinClient {}, diff {} , timeDiff {}, tuZiBiSpeed {}, addTiZiCoin {}, ", userId, tuZiCoinServer, tuZiCoinClient, diff, timeDiff, tuZiBiSpeed, addTiZiCoin);
        return false;
    }


    /**
     * 当餐厅等级变化的时候 记录下 做餐厅等级排行榜用
     *
     * @param save
     */
    private void recordCanTingLevel(Save save) {
        var userId = save.userID();
        int beforeLevel = getCanTingLevelBeforeSave(userId);
        int clientLevel = (int) getDataFromBaseData(save.baseData(), "CanTingLevel");

        if (beforeLevel == 0) {
            return;
        }

        if (clientLevel == beforeLevel) {
            return;
        }

        final Optional<CanTingLevelData> byId = this.canTingLevelDataRepository.findById(userId);
        CanTingLevelData data;
        if (byId.isEmpty()) {
            data = new CanTingLevelData(userId, clientLevel, System.currentTimeMillis());
            this.canTingLevelDataRepository.save(data);
            return;
        } else {
            data = byId.get();
        }

        data.setCanTingLevel(clientLevel);
        data.setTime(System.currentTimeMillis());
        this.canTingLevelDataRepository.save(data);
        return;
    }

    // 在保存之前获得餐厅等级
    public int getCanTingLevelBeforeSave(String userId) {
        final Optional<User> byId = loginRepo.findById(userId);
        if (byId.isEmpty()) {
            return 0;
        }
        String baseData = byId.get().getBaseData();
        int level = (int) getDataFromBaseData(baseData, "CanTingLevel");
        return level;
    }




/*    public int canTingLevelFromString(String baseData) {
        final HashMap<String, Object> o = dataManager.gson.fromJson(baseData, HashMap.class);
        if (o == null) {
            return 0;
        }
        for (String s : o.keySet()) {
            if (s.equals("CanTingLevel")) {
                try {
                    com.google.gson.JsonPrimitive jsonPrimitive = (com.google.gson.JsonPrimitive) o.get(s);
                    return jsonPrimitive.getAsInt();
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }

            }
        }
        return 0;
    }*/

    /**
     * 从客户端的base字符串里找到 目标属性
     *
     * @param baseData
     * @param targetStr
     * @return
     */
    public long getDataFromBaseData(String baseData, String targetStr) {
        final HashMap<String, Object> o = dataManager.gson.fromJson(baseData, HashMap.class);
        if (o == null) {
            return 0;
        }
        for (String s : o.keySet()) {
            if (s.equals(targetStr)) {
                try {
                    com.google.gson.JsonPrimitive jsonPrimitive = (com.google.gson.JsonPrimitive) o.get(s);
                    return jsonPrimitive.getAsLong();
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }

            }
        }
        return 0;
    }


    /**
     * 从客户端的base字符串里找到 目标属性
     *
     * @param baseData
     * @param targetStr
     * @return
     */
    public String getDataFromBaseDataString(String baseData, String targetStr) {
        final HashMap<String, Object> o = dataManager.gson.fromJson(baseData, HashMap.class);
        if (o == null) {
            return "";
        }
        for (String s : o.keySet()) {
            if (s.equals(targetStr)) {
                try {
                    com.google.gson.JsonPrimitive jsonPrimitive = (com.google.gson.JsonPrimitive) o.get(s);
                    return jsonPrimitive.getAsString();
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }

            }
        }
        return "";
    }

    private void achievementCheck(Save save) {
        var userId = save.userID();
        JSONObject baseJson = JSONObject.parseObject(save.baseData());
        JSONObject canTingGainJson = new JSONObject();
        canTingGainJson.put("maxNum",baseJson.getLongValue("CanTingGain",0L));
        eventPublisher.publish(new AchievementEvent(save.userID(),AchievementEvent.MISSION_TYPE_RABBITCOIN_SPEED,canTingGainJson.toString()));
    }

}
