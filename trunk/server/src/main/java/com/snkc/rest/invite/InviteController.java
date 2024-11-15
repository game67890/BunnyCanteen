package com.snkc.rest.invite;

import com.alibaba.fastjson2.JSONObject;
import com.snkc.model.InviteRecord;
import com.snkc.repository.InviteRecordRepo;
import com.snkc.repository.LoginRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/invite")
public class InviteController {
    Logger logger = LoggerFactory.getLogger(InviteController.class);

    @Autowired
    LoginRepository loginRepo;

    @Autowired
    InviteRecordRepo inviteRecordRepo;

    @PostMapping(value="/panel")
    public ResponseEntity<String> onPanel(@RequestAttribute("userID")String userID){
        logger.info("open Invite Panel with id=" + userID);
        JSONObject returnJson = new JSONObject();
        //玩家是否真实存在，判断和校验
        var userById = loginRepo.findById(userID);
        if (userById.isEmpty()){
            returnJson.put("result",false);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(returnJson.toString());
        }
        InviteRecord inviteRecord;
        var inviteRecords = inviteRecordRepo.findById(userID);
        if (inviteRecords.isEmpty()){
            inviteRecord = new InviteRecord(userID,new HashSet<>(),new HashMap<>());
            inviteRecordRepo.save(inviteRecord);
        }else {
            inviteRecord = inviteRecords.get();
        }
        returnJson.put("result",true);
        returnJson.put("invitee",inviteRecord.getInvitee());

        List<String> inviteeUserNames = new ArrayList<>();
        for (String s : inviteRecord.getInvitee()) {
            inviteeUserNames.add(loginRepo.findUserById(s).getUserName());
        }

        returnJson.put("inviteeUserNames", inviteeUserNames);

        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(returnJson.toString());
    }




}
