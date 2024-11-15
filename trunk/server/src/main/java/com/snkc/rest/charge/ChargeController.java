package com.snkc.rest.charge;

import com.alibaba.fastjson2.JSONObject;
import com.google.gson.JsonObject;
import com.snkc.event.eventImpl.AchievementEvent;
import com.snkc.event.eventImpl.MissionEvent;
import com.snkc.event.publisher.EventPublisher;
import com.snkc.lock.UserLockService;
import com.snkc.log.LogUtil;
import com.snkc.model.PlayerChargeOrder;
import com.snkc.model.PlayerChargeRecord;
import com.snkc.model.User;
import com.snkc.repository.LoginRepository;
import com.snkc.repository.PlayerChargeOrderRepository;
import com.snkc.repository.PlayerChargeRecordRepository;
import com.snkc.rest.invite.InviteService;
import com.snkc.websocket.PaymentWebSocketHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@CrossOrigin
@RequestMapping("/charge")
public class ChargeController {
    Logger logger = LoggerFactory.getLogger(ChargeController.class);

    @Autowired
    LoginRepository loginRepo;
    @Autowired
    PlayerChargeRecordRepository playerChargeRecordRepository;
    @Autowired
    PlayerChargeOrderRepository playerChargeOrderRepository;
    @Autowired
    UserLockService userLockService;

    @Autowired
    ShopConfigProvider shopConfigProvider;
    @Autowired
    OrderIDProvider orderIDProvider;
    @Autowired
    PaymentWebSocketHandler webSocketHandler;
    @Autowired
    EventPublisher eventPublisher;

    @Value("${server.charge.chargeUrl}")
    private String chargeUrl;
    @Value("${server.charge.callbackUrl}")
    private String callBackUrl;

    @PostMapping(value="/shop")
    public ResponseEntity<String> onShop(@RequestBody ChargeShop chargeShop){
        logger.info("shop with id=" + chargeShop.userID());
        //玩家是否真实存在，判断和校验
        var userById = loginRepo.findById(chargeShop.userID());
        if (userById.isEmpty()){
            return failResult("Non_User");
        }
        //查询，无则初始化
        var playerChargeRecord = playerChargeRecordRepository.findUserChargeRecordById(chargeShop.userID());
        if (playerChargeRecord == null){
            playerChargeRecord = new PlayerChargeRecord(chargeShop.userID());
            playerChargeRecordRepository.save(playerChargeRecord);
        }
        JsonObject goods = new JsonObject();
        for (ChargeGood chargeGood : shopConfigProvider.getAllChargeGood()){
            JsonObject goodJson = new JsonObject();
            goodJson.addProperty("price",chargeGood.getPrice());
            goodJson.addProperty("carrotcoin",chargeGood.getCarrotcoin());
            goodJson.addProperty("gift",chargeGood.getGift());
            goodJson.addProperty("strength",chargeGood.getStrength());
            goodJson.addProperty("paytype",chargeGood.getPaytype());
            goodJson.addProperty("left",playerChargeRecord.leftNum(chargeGood.getId(),chargeGood.getRefreshnum(),chargeGood.getRefresh()));
            goodJson.addProperty("imageUrl","empty");
            goodJson.addProperty("ID",chargeGood.getId());
            goods.add(chargeGood.getId()+"",goodJson);
        }
        JsonObject returnJson = new JsonObject();
        returnJson.addProperty("shopID",chargeShop.shopID());
        returnJson.addProperty("shopGoods",goods.toString());
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(returnJson.toString());
    }

    @PostMapping(value="/buy")
    public ResponseEntity<String> onWebhook(@RequestBody Buy buy){
        logger.info("buy " + buy.toString());
        var userById = loginRepo.findById(buy.userID());
        if (userById.isEmpty()){
            return failResult("Non_User");
        }
        var playerChargeRecord = playerChargeRecordRepository.findUserChargeRecordById(buy.userID());
        if (playerChargeRecord == null){
            return failResult("Non_Record");
        }
        ChargeGood chargeGoodConfig = shopConfigProvider.getChargeGoodByID(buy.goodID());
        if (chargeGoodConfig == null){
            return failResult("Invalid_GoodID");
        }
        if (playerChargeRecord.leftNum(chargeGoodConfig.getId(),chargeGoodConfig.getRefreshnum(),chargeGoodConfig.getRefresh()) <= 0){
            return failResult("Purchase_Sum_Limit");
        }
        //这里需要跳过支付，最少支付0.01刀，我们直接发货
        if (chargeGoodConfig.getPrice() <= 0){
            playerChargeRecord.updateGoodPurchaseRecord(chargeGoodConfig.getId());
            playerChargeRecordRepository.save(playerChargeRecord);
            JSONObject notifyJson = new JSONObject();
            notifyJson.put("result",true);
            notifyJson.put("Type","Charge_Success");
            notifyJson.put("GoodID",chargeGoodConfig.getId());
            notifyJson.put("LeftChange",-1);
            LogUtil.doChargeLog(buy.userID(),chargeGoodConfig.getPrice(),chargeGoodConfig.getCarrotcoin(),chargeGoodConfig.getId());
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(notifyJson.toString());
        }
        long newOrderID = orderIDProvider.generateId();
        //创建新订单
        //TODO 这里注意，如果出现时间回调则可能出现重复问题，但时间回调实际应避免发生
        PlayerChargeOrder playerChargeOrder = new PlayerChargeOrder(newOrderID+"",buy.userID(),1,chargeGoodConfig.getId());
        //发起支付请求
        JsonObject requestJson = new JsonObject();
        requestJson.addProperty("appId","C4jgojDaFioby6alJpodAbj6H");
        requestJson.addProperty("callbackURL",callBackUrl);
        requestJson.addProperty("expiredTime",60);
        requestJson.addProperty("merchantOrderNo",newOrderID);
        requestJson.addProperty("orderAmount",((float)chargeGoodConfig.getPrice()) /100);
        requestJson.addProperty("orderModel","ORDER");
        requestJson.addProperty("payCurrency","USD");
        requestJson.addProperty("paymentTokens","USDT,ETH,TON");
        requestJson.addProperty("sign",genSign(buy.userID(),newOrderID,chargeGoodConfig.getPrice()));
        requestJson.addProperty("userId",buy.userID());
        logger.info("发起充值请求 Param as list : "+requestJson);
        //使用RestTemplate发送HTTP请求，处理返回值
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> entity = new HttpEntity<>(requestJson.toString(), headers);

        ResponseEntity<String> response = restTemplate.postForEntity(chargeUrl, entity, String.class);

        JSONObject responseJson = JSONObject.parseObject(response.getBody());
        //报错
        if (responseJson == null || responseJson.getInteger("code") != 0){
            return failResult("Create_Order_Fail");
        }
        JSONObject orderDetail = JSONObject.parseObject(responseJson.getString("model"));

        playerChargeOrder.setPlatOrderID(orderDetail.getString("orderNo"));

        playerChargeOrderRepository.save(playerChargeOrder);

        JsonObject returnJson = new JsonObject();
        returnJson.addProperty("result",true);
        returnJson.addProperty("Type","Need_To_Pay");
        returnJson.addProperty("webUrl",orderDetail.getString("webUrl"));
        logger.info("UserID = "+buy.userID() + " 创建订单 ： "+newOrderID + " GoodID = "+buy.goodID());
        //返回值
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(returnJson.toString());
    }

    @PostMapping(value="/webhook")
    public ResponseEntity<String> onWebhook(@RequestBody String body){
        if (body == null || body.isEmpty()){
            return failResult("No_Reason");
        }
        JSONObject jsonObject = JSONObject.parseObject(body);
        //完成或延时完成都算完成支付，其余的不算
        if (!jsonObject.getString("orderStatus").equals("COMPLETED") && !jsonObject.getString("orderStatus").equals("DELAY_SUCCESS")){
            return failResult("No_Reason");
        }
        String orderID = jsonObject.getString("merchantOrderNo");
        if (orderID == null){
            return failResult("No_Reason");
        }

        var playerChargeOrders = playerChargeOrderRepository.findById(orderID);
        if (playerChargeOrders.isEmpty()){
            return failResult("No_Order");
        }
        PlayerChargeOrder playerChargeOrder = playerChargeOrders.get();

        if (playerChargeOrder.isFinish()){
            return failResult("Finished");
        }
        //订单状态设定
        playerChargeOrder.setFinish();
        playerChargeOrderRepository.save(playerChargeOrder);
        ChargeGood chargeGood = shopConfigProvider.getChargeGoodByID(playerChargeOrder.getGoodID());
        if (chargeGood == null) {
            return failResult("Good_Not_Find");
        }
        //购买记录的处理
        String userID = playerChargeOrder.getUserID();
        long uniqueKey = userLockService.tryLock(userID);
        try {
            if (uniqueKey > 0){
                var playerChargeRecords = playerChargeRecordRepository.findById(userID);
                if (playerChargeRecords.isEmpty()){
                    return failResult("User_Not_Find");
                }
                PlayerChargeRecord playerChargeRecord = playerChargeRecords.get();
                playerChargeRecord.updateGoodPurchaseRecord(playerChargeOrder.getGoodID());
                playerChargeRecordRepository.save(playerChargeRecord);
                //加胡萝卜币
                User user = loginRepo.findUserById(userID);
                if (user == null){
                    return failResult("User_Not_Find");
                }
                user.addCarrotCoin(chargeGood.getCarrotcoin());
                loginRepo.save(user);
                //告知客户端
                JSONObject notifyJson = new JSONObject();
                notifyJson.put("NotifyType","Charge_Success");
                notifyJson.put("GoodID",playerChargeOrder.getGoodID());
                notifyJson.put("LeftChange",-1);
                notifyJson.put("carrotCoin",user.getCarrotCoin());
                webSocketHandler.notifyUser(userID,notifyJson.toString());
                JSONObject chargeJson = new JSONObject();
                chargeJson.put("addNum",chargeGood.getPrice());
                eventPublisher.publish(new MissionEvent(userID,MissionEvent.MISSION_TYPE_CHARGE_DAILY,chargeJson.toString()));
                eventPublisher.publish(new AchievementEvent(userID,AchievementEvent.ACHIEVEMENT_CHARGE_TOTAL,chargeJson.toString()));
                JSONObject carrotcoinJson = new JSONObject();
                carrotcoinJson.put("addNum",chargeGood.getCarrotcoin());
                eventPublisher.publish(new AchievementEvent(userID,AchievementEvent.MISSION_TYPE_CARROTCOIN_MAX,carrotcoinJson.toString()));
                logger.info("User ID "+ userID +" Charge Finish. Current CarrotCoin = " + user.getCarrotCoin());
            }else {
                logger.error("充值时获取锁失败，充值未完成 UserID = "+userID + " OrderID = "+orderID);
            }
        }finally {
            userLockService.release(userID,uniqueKey);
        }
        LogUtil.doChargeLog(userID,chargeGood.getPrice(),chargeGood.getCarrotcoin(),chargeGood.getId());
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body("");
    }

    //生成支付签名,price单位是美分,但都需要转换为0.1U的倍数
    public String genSign(String userID,long orderID,int price){
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("appId=").append("C4jgojDaFioby6alJpodAbj6H").append("&").
                append("merchantOrderNo=").append(orderID).append("&").
                append("orderAmount=").append(((float)price) /100).append("&").
                append("payCurrency=USD&").
                append("paymentTokens=USDT,ETH,TON&").
                //下单账号UserID
                append("userId=").append(userID).append("&").
                append("key=").append("6fRbjojNyba09y7akj4HdfhadSfpoB");
        String result = new SHAUtil().SHA512(stringBuilder.toString());
        return result.toUpperCase();
    }

    //校验不通过时的返回值
    private ResponseEntity<String> failResult(String reason){
        JsonObject jsonObject = new JsonObject();
        jsonObject.addProperty("result",false);
        jsonObject.addProperty("reason",reason);
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(jsonObject.toString());
    }

}
