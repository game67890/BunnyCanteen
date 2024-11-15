package com.snkc.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashMap;
import java.util.HashSet;

@Document("PlayerChargeRecord")
public class PlayerChargeRecord {

    @Id
    private String id;
    private HashMap<Integer,Integer> purchageRecord;
    private HashSet<Long> orders;

    public PlayerChargeRecord(String id) {
        super();
        this.id = id;
        this.purchageRecord = new HashMap<>();
        this.orders = new HashSet<>();
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public HashMap<Integer, Integer> getPurchageRecord() {
        return purchageRecord;
    }

    public void setPurchageRecord(HashMap<Integer, Integer> purchageRecord) {
        this.purchageRecord = purchageRecord;
    }

    public HashSet<Long> getOrders() {
        return orders;
    }

    public void setOrders(HashSet<Long> orders) {
        this.orders = orders;
    }

    //获取某个商品的剩余限购次数
    public int leftNum(int goodID,int refreshNum,int refreshType){
        //先不管怎样，都按照不刷新处理
        if (purchageRecord.containsKey(goodID)){
            return  refreshNum - purchageRecord.get(goodID);
        }
        return refreshNum;
    }

    public void updateGoodPurchaseRecord(Integer goodID){
        if (this.purchageRecord.containsKey(goodID)){
            this.purchageRecord.put(goodID,this.purchageRecord.get(goodID) + 1);
        }else {
            this.purchageRecord.put(goodID,1);
        }
    }
}
