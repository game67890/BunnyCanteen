package com.snkc.game.tizicoincheck;

import com.snkc.data.DataManager;
import com.snkc.game.buybuff.BuyBuffService;
import com.snkc.game.rabbitmall.RabbitMallService;
import com.snkc.serverjsonbean.Ingredients;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.TreeMap;

/**
 * 兔子币的粗校验
 * Created by gaosong
 * 2024/10/21
 */
@Service
public class TiZiCoinCheckService {
    @Autowired
    BuyBuffService buyBuffService;
    @Autowired
    RabbitMallService rabbitMallService;
    @Autowired
    DataManager dataManager;

    /**
     * 服务器记录的兔子币的产出速度
     *
     * @return
     */
    public long getTiZiBiSpeedInServer(String userId, String boardData) throws IOException {
        long total = 0;
        // 棋盘提供的
        long onBord = onBoardSpeed(boardData);
        total += onBord;


        final long tuZiBiSpeed = this.buyBuffService.createTuZiBiSpeed(userId, 2);

        total += tuZiBiSpeed;


        // buff提供的速度的百分
        long buyBufftuZiBiSpeedPercent = this.buyBuffService.createTuZiBiSpeed(userId, 1);

        // 买兔子提供的速度的百分
        long rabbitMallTuZiBiSpeedPercent = this.rabbitMallService.createTuZiBiSpeed(userId);

        total = (long)(total * (1 + (buyBufftuZiBiSpeedPercent + rabbitMallTuZiBiSpeedPercent) / 100.0));
        return total;
        //return 518274;
    }

    /**
     * 棋盘的速度
     *
     * @param boardData
     * @return
     * @throws IOException
     */
    public int onBoardSpeed(String boardData) throws IOException {
        int total = 0;
        final TreeMap<Integer, Ingredients> cfgFile = dataManager.getCfgFile(Ingredients.class);

        final ArrayList<Object> arrayList = dataManager.gson.fromJson(boardData, ArrayList.class);
        if (arrayList == null) {
            return 0;
        }

        for (Object o : arrayList) {
            HashMap<String, Object> map = dataManager.gson.fromJson(o.toString(), HashMap.class);
            com.google.gson.JsonPrimitive jsonPrimitive = (com.google.gson.JsonPrimitive) map.get("SuCaiId");
            if (jsonPrimitive == null) {
                continue;
            }
            int suCaiId = jsonPrimitive.getAsInt();
            final Ingredients ingredients = cfgFile.get(suCaiId);
            if (ingredients == null) {
                continue;
            }

            // 产出兔子币速度
            total += ingredients.getmoney();
        }
        return total;
    }
}
