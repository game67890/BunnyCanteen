package com.snkc.game.buybuff;

import com.snkc.data.DataManager;
import com.snkc.game.buybuff.modlel.BuyBuffData;
import com.snkc.game.buybuff.modlel.BuyBuffUserData;
import com.snkc.serverjsonbean.Accelerate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Map;
import java.util.Optional;

/**
 * Created by gaosong
 * 2024/10/16
 */
@Service
public class BuyBuffService {
    @Autowired
    BuyBuffRepository repo;
    @Autowired
    DataManager dataManager;

    public BuyBuffUserData getData(String userId) {
        final Optional<BuyBuffUserData> byId = repo.findById(userId);
        if (byId.isEmpty()) {
            BuyBuffUserData data = new BuyBuffUserData(userId);
            repo.save(data);
            return data;
        } else {
            return byId.get();
        }
    }

    public boolean save(BuyBuffUserData data) {
        return repo.save(data) != null;
    }

    /**
     * 速度的加
     * 1-百分比加速
     * 2-固定每秒获得
     * 策划要求的是对于相同类的的buff (比如都是百分比) 玩家如果买了2个buff 先加buff1的加成 等buff1时间过了再走buff2的加成
     *
     * @param userID
     * @return
     */
    public int createTuZiBiSpeed(String userID, int typeParam) throws IOException {
        long now = System.currentTimeMillis();

        int speed = 0;
        final BuyBuffUserData data = getData(userID);
        if (data == null) {
            return 0;
        }

        final Map<Integer, Accelerate> shoptMap = dataManager.getCfgFile(Accelerate.class);

        for (BuyBuffData buyBuffData : data.getBuffDetialList()) {

            final Accelerate accelerate = shoptMap.get(buyBuffData.getConfId());
            if (accelerate == null) {
                continue;
            }

            /**
             * 1-百分比加速
             * 2-固定每秒获得
             */
            final int type = accelerate.type();
            if (type == typeParam) {
                // 加速时长 秒
                if (buyBuffData.getEndTime() > now) {
                    // 没有过期
                    speed += accelerate.effect();
                    return speed;
                }

            }
        }
        return speed;
    }

}
