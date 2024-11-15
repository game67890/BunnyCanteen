package com.snkc.game.rank.modlel;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * 玩家兔子币的数据
 * 做排行榜用的
 */
@Document("TuZiBiData")
public class TuZiBiData {
    @Id
    private String id;
    // 币的数字
    private long biNumber;
    // 更新的时间戳 如果是同天上面的数字累加 不是就重置  策划要求 不掉段位
    private long updateTimestamp;
    // rank.xls表的id 就是段位
    private int rankConfId;

    public TuZiBiData(String id, long biNumber, long updateTimestamp, int rankConfId) {
        this.id = id;
        this.biNumber = biNumber;
        this.updateTimestamp = updateTimestamp;
        this.rankConfId = rankConfId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public long getBiNumber() {
        return biNumber;
    }

    public void setBiNumber(long biNumber) {
        this.biNumber = biNumber;
    }

    public long getUpdateTimestamp() {
        return updateTimestamp;
    }

    public void setUpdateTimestamp(long updateTimestamp) {
        this.updateTimestamp = updateTimestamp;
    }

    public int getRankConfId() {
        return rankConfId;
    }

    public void setRankConfId(int rankConfId) {
        this.rankConfId = rankConfId;
    }
}
