package com.snkc.game.rabbitmall;

import com.snkc.data.DataManager;
import com.snkc.game.buybuff.modlel.BuyBuffData;
import com.snkc.game.buybuff.modlel.BuyBuffUserData;
import com.snkc.game.rabbitmall.modlel.RabbitMallUserData;
import com.snkc.serverjsonbean.Accelerate;
import com.snkc.serverjsonbean.Shop;
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
public class RabbitMallService {
    @Autowired
    RabbitMallRepository repo;
    @Autowired
    DataManager dataManager;
    public RabbitMallUserData getData(String userId) {
        final Optional<RabbitMallUserData> byId = repo.findById(userId);
        if (byId.isEmpty()) {
            RabbitMallUserData data = new RabbitMallUserData(userId);
            repo.save(data);
            return data;
        } else {
            return byId.get();
        }
    }

    public boolean save(RabbitMallUserData data) {
        return repo.save(data) != null;
    }


    public int createTuZiBiSpeed(String userID) throws IOException {

        int speed = 0;
        final RabbitMallUserData data = getData(userID);
        if (data == null) {
            return 0;
        }

        final Map<Integer, Shop> shoptMap = dataManager.getCfgFile(Shop.class);

        for (Integer confId : data.getRabbitIds()) {
            final Shop shop = shoptMap.get(confId);

            if (shop == null) {
                continue;
            }

            /**
             * 百分比加速
             */
            speed+= shop.effect();
        }
        return speed;
    }



}
