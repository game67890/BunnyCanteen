package com.snkc.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

/**
 * 拔菠萝的排行数据
 */
@Document("BaLuoBoData")
public class BaLuoBoRankData {
    @Id
    private String id;
    private List<BaLuoBoData> list;
    private int weight;
    public BaLuoBoRankData(String id)
    {
        super();
        this.id = id;
        this.list = new ArrayList<>();
        this.weight = 0;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<BaLuoBoData> getList() {
        return list;
    }

    public void setList(List<BaLuoBoData> list) {
        this.list = list;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }
}
