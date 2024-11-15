package com.snkc.game.buybuff;

import com.snkc.data.DataManager;
import com.snkc.game.buybuff.modlel.BuyBuffData;
import com.snkc.game.buybuff.modlel.BuyBuffUserData;
import com.snkc.game.rabbitmall.requestbean.CBuy;
import com.snkc.game.rabbitmall.responsebean.SBuy;
import com.snkc.lock.UserLockService;
import com.snkc.model.User;
import com.snkc.repository.LoginRepository;
import com.snkc.serverjsonbean.Accelerate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;

/**
 * 买兔子币加速的buff
 */

@RestController
@CrossOrigin
@RequestMapping("/buybuff")
public class BuyBuffController {
    Logger logger = LoggerFactory.getLogger(BuyBuffController.class);

    @Autowired
    DataManager dataManager;
    @Autowired
    UserLockService userLockService;
    @Autowired
    LoginRepository loginRepo;
    @Autowired
    BuyBuffService buyBuffService;

    /**
     * @return
     */

    //@PostMapping("/cbuy")
    public SBuy cbuy(@RequestAttribute("userID") String userID, @RequestBody CBuy cBuy) throws IOException {
        final Map<Integer, Accelerate> shoptMap = dataManager.getCfgFile(Accelerate.class);

        int confId = Integer.parseInt(cBuy.confId());

        final Accelerate shop = shoptMap.get(confId);

        if (shop == null) {
            logger.error("找不到商品" + confId);
            return new SBuy(cBuy.confId());
        }

        if (shop.cost() != 3) {
            return new SBuy(cBuy.confId());
        }

        int price = shop.costnum();

        long uniqueKey = userLockService.tryLock(userID);
        try {
            if (uniqueKey > 0) {

                //扣胡萝卜币
                User user = loginRepo.findUserById(userID);
                if (user == null) {
                    return new SBuy(cBuy.confId());
                }
                final int carrotCoin = user.getCarrotCoin();
                if (carrotCoin < price) {
                    return new SBuy(cBuy.confId());
                }
                user.subCarrotCoin(price);
                loginRepo.save(user);
            }
        } finally {
            userLockService.release(userID, uniqueKey);

            return new SBuy(cBuy.confId());
        }
    }


    @PostMapping("/cbuy")
    public SBuy cbuyv2(@RequestAttribute("userID") String userID, @RequestBody CBuy cBuy) throws IOException {
        final Map<Integer, Accelerate> shoptMap = dataManager.getCfgFile(Accelerate.class);

        int confId = Integer.parseInt(cBuy.confId());

        final Accelerate shop = shoptMap.get(confId);

        if (shop == null) {
            logger.error("找不到商品" + confId);
            return new SBuy("-1");
        }


        int price = shop.costnum();

        final BuyBuffUserData data = this.buyBuffService.getData(userID);

        long now = System.currentTimeMillis();

        /**
         * 刷新类型
         * 作者:
         * 1-每日0点（UTC +0）刷新，每日限购一次
         * 2-不限次，不限购
         */

        /**
         * 1-免费
         * 2-分享获取
         * 3-萝卜币购买
         */
        switch (shop.cost()) {
            case 1:


                break;
            case 2:
                break;
            case 3:

                long uniqueKey = userLockService.tryLock(userID);
                try {
                    if (uniqueKey > 0) {

                        //扣胡萝卜币
                        User user = loginRepo.findUserById(userID);
                        if (user == null) {
                            logger.error("找不到用户" + userID);
                            return new SBuy("-1");
                        }
                        final int carrotCoin = user.getCarrotCoin();
                        if (carrotCoin < price) {
                            logger.error("用户" + userID + "萝卜币不足 carrotCoin " + carrotCoin + " price" + price);
                            return new SBuy("-1");
                        }
                        user.subCarrotCoin(price);
                        loginRepo.save(user);
                    }
                } finally {
                    userLockService.release(userID, uniqueKey);


                }


                break;

        }

        if (data.getBuffDetialList().isEmpty()) {
            // 一个还没有买
            BuyBuffData buyBuffData = new BuyBuffData(confId, now + shop.time() * 1000, now);
            data.getBuffDetialList().add(buyBuffData);
        } else {
            BuyBuffData lastData = data.getBuffDetialList().get(data.getBuffDetialList().size() - 1);
            BuyBuffData buyBuffData = new BuyBuffData(confId, lastData.getEndTime() + shop.time() * 1000, now);
            data.getBuffDetialList().add(buyBuffData);
        }

        this.buyBuffService.save(data);
        return new SBuy(cBuy.confId());
    }


}
