package com.snkc.game.rabbitmall;

import com.snkc.data.DataManager;
import com.snkc.game.rabbitmall.modlel.RabbitMallUserData;
import com.snkc.game.rabbitmall.requestbean.CBuy;
import com.snkc.game.rabbitmall.responsebean.SBuy;
import com.snkc.lock.UserLockService;
import com.snkc.model.User;
import com.snkc.repository.LoginRepository;
import com.snkc.serverjsonbean.Shop;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;

/**
 * 兔子商城
 */

@RestController
@CrossOrigin
@RequestMapping("/rabbitmall")
public class RabbitMallController {
    Logger logger = LoggerFactory.getLogger(RabbitMallController.class);

    @Autowired
    DataManager dataManager;
    @Autowired
    UserLockService userLockService;
    @Autowired
    LoginRepository loginRepo;
    @Autowired
    RabbitMallService rabbitMallService;

    /**
     * @return
     */

    @PostMapping("/cbuy")
    public SBuy cbuy(@RequestAttribute("userID") String userID, @RequestBody CBuy cBuy) throws IOException {
        final Map<Integer, Shop> shoptMap = dataManager.getCfgFile(Shop.class);

        int confId = Integer.parseInt(cBuy.confId());

        final Shop shop = shoptMap.get(confId);

        if (shop == null) {
            logger.error("找不到商品" + confId);
            return new SBuy(cBuy.confId());
        }

        int price = shop.price();


        User user = loginRepo.findUserById(userID);
        if (user == null) {
            logger.error("找不到用户" + userID);
            return new SBuy("-1");
        }


        switch (shop.paytype()) {
            case 1:
                // 兔子币
                break;
            case 2:
                // 萝卜币
                long uniqueKey = userLockService.tryLock(userID);
                try {
                    if (uniqueKey > 0) {

                        //扣胡萝卜币

                        final int carrotCoin = user.getCarrotCoin();
                        if (carrotCoin < price) {
                            logger.error("用户" + userID + "萝卜币不足 carrotCoin " + carrotCoin + " price" + price);
                            return new SBuy(cBuy.confId());
                        }
                        user.subCarrotCoin(price);
                        loginRepo.save(user);
                    }
                } finally {
                    userLockService.release(userID, uniqueKey);
                }

                break;

        }
        final RabbitMallUserData data = rabbitMallService.getData(userID);
        data.getRabbitIds().add(confId);
        this.rabbitMallService.save(data);

        return new SBuy(cBuy.confId());
    }

}
