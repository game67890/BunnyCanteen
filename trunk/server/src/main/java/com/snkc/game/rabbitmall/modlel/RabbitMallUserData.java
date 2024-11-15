package com.snkc.game.rabbitmall.modlel;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

/**
 * 有哪些兔子
 */
@Document("RabbitMallUserData")
public class RabbitMallUserData {
    @Id
    private String id;
    private Set<Integer> rabbitIds;
    private int weight;
    public RabbitMallUserData(String id)
    {
        super();
        this.id = id;
        this.rabbitIds = new HashSet<>();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Set<Integer> getRabbitIds() {
        return rabbitIds;
    }

    public void setRabbitIds(Set<Integer> rabbitIds) {
        this.rabbitIds = rabbitIds;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }
}
