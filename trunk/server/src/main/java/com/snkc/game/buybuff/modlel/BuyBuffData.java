package com.snkc.game.buybuff.modlel;

/**
 * 买buff的数据
 */
public class BuyBuffData {
    // 策划表的id
    private int confId;
    // buff结束的时间点
    private long endTime;
    // 买的时间
    private long buyTime;

    public BuyBuffData(int confId, long endTime, long buyTime) {
        this.confId = confId;
        this.endTime = endTime;
        this.buyTime = buyTime;
    }

    public int getConfId() {
        return confId;
    }

    public void setConfId(int confId) {
        this.confId = confId;
    }

    public long getEndTime() {
        return endTime;
    }

    public void setEndTime(long endTime) {
        this.endTime = endTime;
    }

    public long getBuyTime() {
        return buyTime;
    }

    public void setBuyTime(long buyTime) {
        this.buyTime = buyTime;
    }
}
