package com.snkc.game.rank.modlel;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashSet;
import java.util.Set;

/**
 * 餐厅等级
 */
@Document("CanTingLevelData")
public class CanTingLevelData {
    @Id
    private String id;
    private int canTingLevel;
    private long time;
    // 达到过的段位
    private Set<Integer> ownRankConfIds;

    public CanTingLevelData(String id, int canTingLevel, long time) {
        this.id = id;
        this.canTingLevel = canTingLevel;
        this.time = time;
        this.ownRankConfIds = new HashSet<>();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getCanTingLevel() {
        return canTingLevel;
    }

    public void setCanTingLevel(int canTingLevel) {
        this.canTingLevel = canTingLevel;
    }

    public long getTime() {
        return time;
    }

    public void setTime(long time) {
        this.time = time;
    }

    public Set<Integer> getOwnRankConfIds() {
        return ownRankConfIds;
    }

    public void setOwnRankConfIds(Set<Integer> ownRankConfIds) {
        this.ownRankConfIds = ownRankConfIds;
    }
}
