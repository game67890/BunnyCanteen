package com.snkc.game.buybuff.modlel;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.*;

/**
 * 买buff的数据
 */
@Document("BuyBuffUserData")
public class BuyBuffUserData {
    @Id
    private String id;
    private List<BuyBuffData> buffDetialList;

    private int weight;
    public BuyBuffUserData(String id)
    {
        super();
        this.id = id;
        this.buffDetialList = new ArrayList<>();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<BuyBuffData> getBuffDetialList() {
        return buffDetialList;
    }

    public void setBuffDetialList(List<BuyBuffData> buffDetialList) {
        this.buffDetialList = buffDetialList;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }
}
