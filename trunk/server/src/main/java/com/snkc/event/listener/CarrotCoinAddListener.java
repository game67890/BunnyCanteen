package com.snkc.event.listener;


import com.alibaba.fastjson2.JSONObject;
import com.snkc.event.eventImpl.AchievementEvent;
import com.snkc.event.eventImpl.CarrotCoinAddEvent;
import com.snkc.event.publisher.EventPublisher;
import com.snkc.lock.UserLockService;
import com.snkc.log.LogUtil;
import com.snkc.model.User;
import com.snkc.repository.LoginRepository;
import com.snkc.websocket.PaymentWebSocketHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

@Component
public class CarrotCoinAddListener implements ApplicationListener<CarrotCoinAddEvent> {

    @Autowired
    LoginRepository loginRepo;
    @Autowired
    UserLockService userLockService;
    @Autowired
    PaymentWebSocketHandler webSocketHandler;
    @Autowired
    EventPublisher eventPublisher;

    Logger logger = LoggerFactory.getLogger(CarrotCoinAddListener.class);

    @Override
    @Async
    public void onApplicationEvent(CarrotCoinAddEvent event) {

        String userID = event.getUserID();
        long uniqueKey = userLockService.tryLock(userID);
        try {
            if (uniqueKey > 0){
                //加胡萝卜币
                User user = loginRepo.findUserById(userID);
                if (user == null){
                    return;
                }
                user.addCarrotCoin(event.addNum);
                loginRepo.save(user);
                //告知客户端
                JSONObject notifyJson = new JSONObject();
                notifyJson.put("NotifyType","RabbitCoin_Add");
                notifyJson.put("addNum",event.addNum);
                notifyJson.put("carrotCoin",user.getCarrotCoin());
                webSocketHandler.notifyUser(userID,notifyJson.toString());

                JSONObject carrotcoinJson = new JSONObject();
                carrotcoinJson.put("addNum",event.addNum);
                eventPublisher.publish(new AchievementEvent(userID,AchievementEvent.MISSION_TYPE_CARROTCOIN_MAX,carrotcoinJson.toString()));
                logger.info("User ID "+ userID +" Add CarrotCoin Finish. Add Sum = "+ event.addNum +" Current CarrotCoin = " + user.getCarrotCoin());
                LogUtil.doCarrotCoinAddLog(userID,event.reason,event.addNum,user.getCarrotCoin());
            }else {
                logger.error("添加萝卜币时失败，未完成 UserID = "+userID + " AddSum = "+event.addNum);
            }
        }finally {
            userLockService.release(userID,uniqueKey);
        }
    }

}
