package com.snkc.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashMap;
import java.util.HashSet;

@Document("InviteRecord")
public class InviteRecord {
    @Id
    private String id;//玩家ID
    private HashSet<String> invitee;//邀请的玩家
    private HashMap<String,Integer> inviteeRank;//邀请玩家的历史最高段位

    public InviteRecord(String id, HashSet<String> invitee, HashMap<String, Integer> inviteeRank) {
        this.id = id;
        this.invitee = invitee;
        this.inviteeRank = inviteeRank;
    }

    public String getId() {
        return id;
    }

    public HashSet<String> getInvitee() {
        return invitee;
    }

    public HashMap<String, Integer> getInviteeRank() {
        return inviteeRank;
    }

    //看一下是不是已经邀请过这名玩家了
    public boolean hasInvited(String inviteeUserID){
        if (this.invitee == null){
            return false;
        }
        if (this.invitee.contains(inviteeUserID)){
            return true;
        }
        return true;
    }

    //添加新的被邀请人ID
    public void addNewInvitee(String inviteeUserID){
        this.invitee.add(inviteeUserID);
    }
}
