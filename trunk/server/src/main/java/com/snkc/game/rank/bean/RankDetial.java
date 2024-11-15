package com.snkc.game.rank.bean;

/**
 * Created by gaosong
 * 2024/10/20
 */
public class RankDetial{

    private int idx;
    private String userId;
    private int rankConfId;
    private long param;

    private String userName;

    public RankDetial(int idx, String userId, int rankConfId, long param,String userName) {
        this.idx = idx;
        this.userId = userId;
        this.rankConfId = rankConfId;
        this.param = param;
        this.userName = userName;
    }

    public int getIdx() {
        return idx;
    }

    public void setIdx(int idx) {
        this.idx = idx;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public int getRankConfId() {
        return rankConfId;
    }

    public void setRankConfId(int rankConfId) {
        this.rankConfId = rankConfId;
    }

    public long getParam() {
        return param;
    }

    public void setParam(long param) {
        this.param = param;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
