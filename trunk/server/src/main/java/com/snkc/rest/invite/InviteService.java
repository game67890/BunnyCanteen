package com.snkc.rest.invite;


import com.alibaba.fastjson2.JSONObject;
import com.snkc.data.DataManager;
import com.snkc.lock.UserLockService;
import com.snkc.log.LogUtil;
import com.snkc.model.InviteRecord;
import com.snkc.model.User;
import com.snkc.repository.InviteRecordRepo;
import com.snkc.repository.LoginRepository;
import com.snkc.serverjsonbean.InvitedUserRank;
import com.snkc.serverjsonbean.OtherParameter;
import com.snkc.websocket.PaymentWebSocketHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class InviteService {
    Logger logger = LoggerFactory.getLogger(InviteController.class);

    @Autowired
    UserLockService userLockService;
    @Autowired
    LoginRepository loginRepo;
    @Autowired
    InviteRecordRepo inviteRecordRepo;
    @Autowired
    DataManager dataManager;
    @Autowired
    PaymentWebSocketHandler webSocketHandler;

    //通过邀请方式获得萝卜币
    @Async
    public void addInviterCarrotCoin(String userID){
        long uniqueKey = userLockService.tryLock(userID);
        try {
            if (uniqueKey > 0){
                //加胡萝卜币
                User user = loginRepo.findUserById(userID);
                if (user == null){
                    return;
                }
                OtherParameter otherParameter = dataManager.getCfgFile(OtherParameter.class).get(5);
                if (otherParameter == null){
                    return;
                }
                user.addCarrotCoin(Integer.parseInt(otherParameter.parameter()));
                loginRepo.save(user);
                logger.info("Invite award send out. UserID = "+userID);
            }else {
                logger.error("增加邀请萝卜币时失败 UserID = "+userID);
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        } finally {
            userLockService.release(userID,uniqueKey);
        }
    }

    /**
     * 在被邀请人达到某个段位之后给邀请人发奖励
     * @param inviteeID 被邀请人ID
     * @param invitorID 邀请人ID
     * @param rank 被邀请人达到的Rank
     * @throws IOException
     */
    public void inviteeRankUp(String inviteeID,String invitorID,int rank) throws IOException {
        long uniqueKey = userLockService.tryLock(invitorID);
        try {
            if (uniqueKey > 0){
                User user = loginRepo.findUserById(invitorID);
                if (user == null){
                    return;
                }
                var inviteRecords = inviteRecordRepo.findById(invitorID);
                if (inviteRecords.isEmpty()){
                    return;
                }
                InviteRecord inviteRecord = inviteRecords.get();
                //如果被邀请人没有被登记
                if (!inviteRecord.getInvitee().contains(inviteeID)){
                    return;
                }
                int oldRank = inviteRecord.getInviteeRank().getOrDefault(inviteeID,0);
                if (oldRank >= rank){
                    return;
                }
                int add = 0;
                for (int i = oldRank;i<=rank;i++){
                    InvitedUserRank invitedUserRank = dataManager.getCfgFile(InvitedUserRank.class).get(i);
                    if (invitedUserRank == null){
                        continue;
                    }
                    add += (int) invitedUserRank.CarrotCoinNum();
                }
                if (add <= 0){
                    return;
                }
                user.addCarrotCoin(add);
                inviteRecord.getInviteeRank().put(inviteeID,rank);
                loginRepo.save(user);
                inviteRecordRepo.save(inviteRecord);
                //告知客户端
                JSONObject notifyJson = new JSONObject();
                notifyJson.put("NotifyType","Invite_Rank");
                notifyJson.put("carrotCoin",user.getCarrotCoin());
                webSocketHandler.notifyUser(invitorID,notifyJson.toString());
            }else {
                logger.error("增加邀请段位萝卜币时失败 UserID = "+invitorID);
            }
        } finally {
            userLockService.release(invitorID,uniqueKey);
        }
    }

    //添加被邀请人
    @Async
    public void addInvitee(String inviterID,String inviteeID){
        var inviteRecords = inviteRecordRepo.findById(inviterID);
        if (inviteRecords.isEmpty()){
            return;
        }
        InviteRecord inviteRecord = inviteRecords.get();
        inviteRecord.getInvitee().add(inviteeID);
        inviteRecordRepo.save(inviteRecord);
        LogUtil.doInviteLog(inviterID,inviteeID);
    }
}
