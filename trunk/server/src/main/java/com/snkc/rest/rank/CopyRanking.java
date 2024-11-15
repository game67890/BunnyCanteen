package com.snkc.rest.rank;

import org.springframework.stereotype.Service;

import java.util.*;

public class CopyRanking {
    //private TreeMap<Integer, String> sort
    private int currentReachTime;
    private record RankCmp(Integer score, Integer reachTime) {}
    private Comparator<RankCmp> rankCmpComparator = Comparator.comparingInt(RankCmp::score).reversed().thenComparingInt(RankCmp::reachTime);
    private static class RankUserRT
    {
        private String userID;
        public String getUserID() {return userID; }
        public void setUserID(String userID) {this.userID = userID;}
        public RankUserRT(String userID)
        {
            this.userID = userID;
        }
    }
    private TreeMap<RankCmp, RankUserRT> rankingDataMap = new TreeMap<>(rankCmpComparator);
    public void addCopyScore(String userID, int score, int reachTime)
    {
        rankingDataMap.put(new RankCmp(score, reachTime), new RankUserRT(userID));
        if (currentReachTime <= reachTime)
        {
            currentReachTime = reachTime + 1;
        }
    }
    public int addCopyScore(String userID, int score)
    {
        rankingDataMap.put(new RankCmp(score, currentReachTime), new RankUserRT(userID));
        return currentReachTime++;
        //addCopyScore(score, currentReachTime++);
    }

    public  record UserRankInfo(String userID, int score, int orderNum) {}

    public List<UserRankInfo> getAround(String userID, int score, int reachTime)
    {
        var userKey = new RankCmp(score, reachTime);
        var findValue = rankingDataMap.get(userKey);
        if (findValue == null)
        {
            return null;
        }
        var userPos = Collections.binarySearch(rankingDataMap.keySet().stream().toList(), userKey, rankCmpComparator);
        List<UserRankInfo> ret = new ArrayList<>();

        var navigableSet = rankingDataMap.navigableKeySet();
        var lowerKey = new RankCmp(score, reachTime);
        for (int i = 0; i < 5; i++)
        {
            lowerKey = navigableSet.lower(lowerKey);
            if (lowerKey == null)
                break;
            var rankUserRT = rankingDataMap.get(lowerKey);
            var userRankInfo = new UserRankInfo(rankUserRT.getUserID(), lowerKey.score(), userPos - i - 1);
            ret.add(userRankInfo);
        }
        ret.add(new UserRankInfo(userID, score, userPos));
        var higherKey = new RankCmp(score, reachTime);
        for (int i = 0; i < 5; i++)
        {
            higherKey = navigableSet.higher(higherKey);
            if (higherKey == null)
                break;
            var rankUserRT = rankingDataMap.get(higherKey);
            var userRankInfo = new UserRankInfo(rankUserRT.getUserID(), higherKey.score(), userPos + i + 1);
            ret.add(userRankInfo);
        }
        return ret;
    }

    public List<UserRankInfo> getTop(int topPlayerNum)
    {
        List<UserRankInfo> ret = new ArrayList<>();

        var it = rankingDataMap.entrySet().iterator();
        for (int i = 0; i < topPlayerNum && it.hasNext(); i++)
        {
            var KV = it.next();
            ret.add(new UserRankInfo(KV.getValue().getUserID(), KV.getKey().score, i + 1));
        }
        return ret;
    }
}
