package com.snkc.rest.function;

import com.alibaba.fastjson2.JSONObject;
import com.snkc.data.DataManager;
import com.snkc.lock.UserLockService;
import com.snkc.model.User;
import com.snkc.repository.LoginRepository;
import com.snkc.serverjsonbean.OtherParameter;
import com.snkc.websocket.PaymentWebSocketHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@CrossOrigin
@RequestMapping("/func")
public class FuncController {

    public static int FUC_AUTOCOMPOSE = 1;//功能ID 自动合成

    Logger logger = LoggerFactory.getLogger(FuncController.class);

    @Autowired
    LoginRepository loginRepo;
    @Autowired
    UserLockService userLockService;
    @Autowired
    DataManager dataManager;
    @Autowired
    PaymentWebSocketHandler webSocketHandler;


    @PostMapping(value="/autocompose")
    public ResponseEntity<String> onPanel(@RequestAttribute("userID") String userID) throws IOException {
        JSONObject jsonObject = new JSONObject();
        long uniqueKey = userLockService.tryLock(userID);
        try {
            if (uniqueKey > 0){
                var userById = loginRepo.findById(userID);
                if (userById.isEmpty()){
                    jsonObject.put("result",false);
                    return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(jsonObject.toString());
                }
                User user = userById.get();
                if (user.getFunc().getOrDefault(FUC_AUTOCOMPOSE,(short)0) > 0){
                    jsonObject.put("result",false);
                    return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(jsonObject.toString());
                }
                OtherParameter otherParameter = dataManager.getCfgFile(OtherParameter.class).get(6);
                if (!user.subCarrotCoin(Integer.valueOf(otherParameter.parameter()))){
                    jsonObject.put("result",false);
                    return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(jsonObject.toString());
                }
                user.getFunc().put(FUC_AUTOCOMPOSE,(short)1);
                loginRepo.save(user);
                jsonObject.put("result",true);
                jsonObject.put("carrotCoin",user.getCarrotCoin());
                //告知客户端
                JSONObject notifyJson = new JSONObject();
                notifyJson.put("NotifyType","RabbitCoin_Add");
                notifyJson.put("addNum",-Integer.parseInt(otherParameter.parameter()));
                notifyJson.put("carrotCoin",user.getCarrotCoin());
                webSocketHandler.notifyUser(userID,notifyJson.toString());
            }else {
                logger.error("解锁自动合成时失败 UserID = "+userID);
            }
        }finally {
            userLockService.release(userID,uniqueKey);
        }
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(jsonObject.toString());
    }
}
