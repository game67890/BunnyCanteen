package com.snkc.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

/**
 * 拔菠萝的个人数据
 */
@Document("BaLuoBoData")
public class BaLuoBoData {
    @Id
    private String id;
    private int rankIds;
    private int weight;
    public BaLuoBoData(String id)
    {
        super();
        this.id = id;
        this.rankIds = -1;
        this.weight = 0;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getRankIds() {
        return rankIds;
    }

    public void setRankIds(int rankIds) {
        this.rankIds = rankIds;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }
}
