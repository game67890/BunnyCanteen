package com.snkc.game.rank;

import com.alibaba.fastjson2.JSON;
import com.alibaba.fastjson2.TypeReference;
import com.snkc.data.DataManager;
import com.snkc.game.rank.bean.RankDetial;
import com.snkc.game.rank.modlel.CanTingLevelData;
import com.snkc.game.rank.modlel.RankData;
import com.snkc.game.rank.modlel.TuZiBiData;
import com.snkc.game.rank.repository.CanTingLevelDataRepository;
import com.snkc.game.rank.repository.RankDataRepository;
import com.snkc.game.rank.repository.TuZiBiDataRepository;
import com.snkc.game.rank.responsebean.RankInfo;
import com.snkc.game.tizicoincheck.TiZiCoinCheckService;
import com.snkc.model.User;
import com.snkc.repository.LoginRepository;
import com.snkc.rest.invite.InviteService;
import com.snkc.serverjsonbean.Rank;
import com.snkc.util.DateValidate;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;

/**
 * Created by gaosong
 * 2024/10/16
 */
@Service
public class RankService {

    // 最大离线收益 4个小时
    private static final long Max_Offline_Time = 4 * DateValidate.hourMills / 1000;
    private Logger logger = LoggerFactory.getLogger(RankService.class);

    private static final String RANK_DATA_KEY = "rank_data";

    @Autowired
    CanTingLevelDataRepository canTingLevelDataRepository;
    @Autowired
    TuZiBiDataRepository tuZiBiDataRepository;
    @Autowired
    RankDataRepository rankDataRepository;
    @Autowired
    DataManager dataManager;
    @Autowired
    LoginRepository loginRepo;
    @Autowired
    InviteService inviteService;
    @Autowired
    TiZiCoinCheckService tiZiCoinCheckService;
    // k 1    1 兔子币榜  2 餐厅等级榜  k2  rank.xls表的id(段位)
    private Map<Integer, Map<Integer, List<RankDetial>>> rankTypeMap = new HashMap<>();

    // 单个玩家的数据 排行榜下面要显示自己在多少名
    public Map<String, Map<Integer, RankDetial>> singleUserData = new HashMap<>();


    //@Scheduled(fixedRate = 300_1000) // 每300秒执行一次
    //@Scheduled(fixedRate = 1000) // 每300秒执行一次
    @Scheduled(cron = "55 59 23 ? * *") // 每天算一次排行榜
    public void performTaskUsingFixedRate() throws IOException {
        logger.info("do ranktask");
        Map<Integer, Map<Integer, List<RankDetial>>> rankTypeMapTmp = new HashMap<>();
        // 先做餐厅等级榜
        doCanTingDengji(rankTypeMapTmp);

        // 兔子币榜帮
        doTuZiBiBang(rankTypeMapTmp);

        rankTypeMap = rankTypeMapTmp;

        // 清理下所以人每日获取兔子币的值
        clearTuZiBiDaily();

        // 排序过的结果入库起服的时候用
        String json = JSON.toJSONString(rankTypeMap);


        final Optional<RankData> rank = this.rankDataRepository.findById(RANK_DATA_KEY);
        RankData rankData;
        if (rank.isEmpty()) {
            rankData = new RankData(RANK_DATA_KEY, json);
        } else {
            rankData = rank.get();
        }

        rankData.setString(json);
        this.rankDataRepository.save(rankData);
    }

    @PostConstruct
    public void loadDataFromDB() {
        final Optional<RankData> rank = this.rankDataRepository.findById(RANK_DATA_KEY);
        RankData rankData;
        if (rank.isEmpty()) {
            String json = JSON.toJSONString(Collections.emptyMap());
            rankData = new RankData(RANK_DATA_KEY, json);

        } else {
            rankData = rank.get();
        }
        final Map<Integer, Map<Integer, List<RankDetial>>> map = JSON.parseObject(rankData.getString(), new TypeReference<Map<Integer, Map<Integer, List<RankDetial>>>>() {
        });
        rankTypeMap.putAll(map);
    }

    private void clearTuZiBiDaily() throws IOException {
        // 保证是一个明天的是时间
        long now = System.currentTimeMillis() + 5 * DateValidate.minuteMills;
        List<TuZiBiData> all = checkAllDataCrossDay();
        for (TuZiBiData tuZiBiData : all) {
            tuZiBiData.setBiNumber(0);
            tuZiBiData.setUpdateTimestamp(now);
        }
        this.saveDataToBaseDatanBatch(all);
    }


    public void doTuZiBiBang(Map<Integer, Map<Integer, List<RankDetial>>> rankTypeMap) throws IOException {
        // 先做餐厅等级榜
        final TreeMap<Integer, Rank> cfgFile = dataManager.getCfgFile(Rank.class);
        // 初始化缓存的数据
        Map<Integer, List<RankDetial>> integerListMap = rankTypeMap.get(1);
        if (integerListMap == null) {
            integerListMap = new HashMap<>();
            rankTypeMap.put(1, integerListMap);
        }

        for (Integer confId : cfgFile.keySet()) {
            List<RankDetial> rankDetials = integerListMap.get(confId);
            if (rankDetials == null) {
                rankDetials = new ArrayList<>();
                integerListMap.put(confId, rankDetials);
            }
        }


        // 先处理所有人隔天刷新的问题 因为是日获取榜
        List<TuZiBiData> all = checkAllDataCrossDay();

        // 策划要求是到了弄个段位以后 就不下来了

/*        for (TuZiBiData data : all) {
            if (data.getRankConfId() == 0) {
                // 没有段位记录的人根据他们的兔子币 放到合适的段位集合里
                doNoRankIdData(data, cfgFile, integerListMap);

            } else {
                // 记录段位的放到各自的list里

                final List<RankDetial> rankDetials = integerListMap.get(data.getRankConfId());
                if (rankDetials == null) {
                    // 不应该没有吧
                    continue;
                }

                rankDetials.add(new RankDetial(0, data.getId(), data.getRankConfId(), data.getBiNumber(), this.loginRepo.findUserById(data.getId()).getUserName()));
            }
        }*/

        for (TuZiBiData data : all) {
            doRankIdData(data, cfgFile, integerListMap);
        }


        Map<Integer, List<RankDetial>> integerListMapSort = new HashMap<>(integerListMap);
        // 排序下
        for (Integer confId : integerListMapSort.keySet()) {
            final List<RankDetial> rankDetials = integerListMapSort.get(confId);
            Collections.sort(rankDetials, (o1, o2) -> {
                if (o1.getParam() > o2.getParam()) {
                    return -1;
                }
                return 1;
            });

            integerListMap.put(confId, rankDetials);
        }


        for (Integer confId : integerListMap.keySet()) {

            final List<RankDetial> rankDetials = integerListMap.get(confId);
            for (int i = 0; i < rankDetials.size(); i++) {
                final RankDetial rankDetial = rankDetials.get(i);
                rankDetial.setIdx(i + 1);

                Map<Integer, RankDetial> integerRankDetialMap = this.singleUserData.get(rankDetial.getUserId());
                if (integerRankDetialMap == null) {
                    integerRankDetialMap = new HashMap<>();
                    this.singleUserData.put(rankDetial.getUserId(), integerRankDetialMap);
                }

                integerRankDetialMap.put(1, rankDetial);

            }
        }
    }


    /**
     * 没有段位记录的人根据他们的兔子币 放到合适的段位集合里
     *
     *
     * @param data
     * @param cfgFile
     * @param integerListMap
     */
    public void doRankIdData(TuZiBiData data, TreeMap<Integer, Rank> cfgFile, Map<Integer, List<RankDetial>> integerListMap) {
        // 升段位 变成true
        boolean flg = false;
        // 没有档位和升档 走这里
        for (Integer confId : cfgFile.keySet()) {
            // 要升到这个段位就不下去了
            if (confId < data.getRankConfId()) {
                continue;
            }

            final Rank rank = cfgFile.get(confId);

            List<RankDetial> rankDetials = integerListMap.get(confId);

            if (rank.upper() >= data.getBiNumber() && data.getBiNumber() >= rank.lower()) {
                data.setRankConfId(confId);
                this.tuZiBiDataRepository.save(data);
                rankDetials.add(new RankDetial(0, data.getId(), confId, data.getBiNumber(), this.loginRepo.findUserById(data.getId()).getUserName()));

                flg = true;

                break;
            }
        }
        if (!flg) {
            // 没有升段位 放到自己原来的段位
            List<RankDetial> rankDetials = integerListMap.get(data.getRankConfId());
            rankDetials.add(new RankDetial(0, data.getId(), data.getRankConfId(), data.getBiNumber(), this.loginRepo.findUserById(data.getId()).getUserName()));
        }



    }


    public List<TuZiBiData> checkAllDataCrossDay() throws IOException {
        long now = System.currentTimeMillis();
        final List<TuZiBiData> all = new ArrayList<>(this.tuZiBiDataRepository.findAll());
        for (TuZiBiData tuZiBiData : all) {
            if (!DateValidate.inTheSameDay(tuZiBiData.getUpdateTimestamp(), now)) {
                // 不是同天
                tuZiBiData.setBiNumber(0);
                tuZiBiData.setUpdateTimestamp(now);
                this.tuZiBiDataRepository.save(tuZiBiData);
            }


            // 算下离线收益
            final long lastSaveTime = loginRepo.findUserById(tuZiBiData.getId()).getLastSaveTime();
            long offlineTime = now - lastSaveTime;

            // 换成秒
            offlineTime /= 1000;
            offlineTime = Math.min(offlineTime, Max_Offline_Time);

            long tuZiBiSpeed = tiZiCoinCheckService.getTiZiBiSpeedInServer(tuZiBiData.getId(), loginRepo.findUserById(tuZiBiData.getId()).getBoardData());

            tuZiBiData.setBiNumber(tuZiBiData.getBiNumber() + offlineTime * tuZiBiSpeed);
        }


        return all;
    }


    /**
     * 把记录的所以玩家的餐厅等级拿出来排序 再按照段位分开
     */
    public List<CanTingLevelData> canTingLevelAllUser() {

        List<CanTingLevelData> list = new ArrayList<>(this.canTingLevelDataRepository.findAll());

        Collections.sort(list, (o1, o2) -> {
            if (o1.getCanTingLevel() > o2.getCanTingLevel()) {
                return -1;
            }
            if (o1.getTime() < o2.getTime()) {
                return -1;
            }
            return 1;
        });
        return list;
    }


    public void doCanTingDengji(Map<Integer, Map<Integer, List<RankDetial>>> rankTypeMap) throws IOException {
        // 先做餐厅等级榜
        final TreeMap<Integer, Rank> cfgFile = dataManager.getCfgFile(Rank.class);

        // 总的榜
        List<CanTingLevelData> list = canTingLevelAllUser();


        // 再按照段位拆开
        Map<Integer, List<RankDetial>> integerListMap = rankTypeMap.get(2);
        if (integerListMap == null) {
            integerListMap = new HashMap<>();
            rankTypeMap.put(2, integerListMap);
        }


        // 初始化缓存的数据
        for (Integer confId : cfgFile.keySet()) {
            List<RankDetial> rankDetials = integerListMap.get(confId);
            if (rankDetials == null) {
                rankDetials = new ArrayList<>();
                integerListMap.put(confId, rankDetials);
            }
        }


        /**
         * canteenupper	canteenranklower
         * int	int
         * server	server
         * client	client
         * 3	0
         * 6	4
         * 7	7
         * 8	8
         * 100	9
         */
        for (CanTingLevelData canTingLevelData : list) {
            for (Integer confId : cfgFile.keySet()) {

                final Rank rank = cfgFile.get(confId);

                List<RankDetial> rankDetials = integerListMap.get(confId);

                if (rank.canteenupper() >= canTingLevelData.getCanTingLevel() && canTingLevelData.getCanTingLevel() >= rank.canteenranklower()) {
                    rankDetials.add(new RankDetial(0, canTingLevelData.getId(), confId, canTingLevelData.getCanTingLevel(), this.loginRepo.findUserById(canTingLevelData.getId()).getUserName()));
                    break;
                }
            }
        }


        for (Integer confId : integerListMap.keySet()) {

            final List<RankDetial> rankDetials = integerListMap.get(confId);
            for (int i = 0; i < rankDetials.size(); i++) {
                final RankDetial rankDetial = rankDetials.get(i);
                rankDetial.setIdx(i + 1);

                Map<Integer, RankDetial> integerRankDetialMap = this.singleUserData.get(rankDetial.getUserId());
                if (integerRankDetialMap == null) {
                    integerRankDetialMap = new HashMap<>();
                    this.singleUserData.put(rankDetial.getUserId(), integerRankDetialMap);
                }

                integerRankDetialMap.put(2, rankDetial);

                // 第一次达到这个段位 掉一下其他模块的代码

                final Optional<CanTingLevelData> byId = this.canTingLevelDataRepository.findById(rankDetial.getUserId());
                if (byId.isPresent()) {
                    final CanTingLevelData canTingLevelData = byId.get();
                    if (!canTingLevelData.getOwnRankConfIds().contains(confId)) {
                        canTingLevelData.getOwnRankConfIds().add(confId);
                        this.canTingLevelDataRepository.save(canTingLevelData);
                        // 首次达到某个段位的时候 给邀请我来的人发
                        whenReachingAcertainRankForTheFirstTime(canTingLevelData.getId(), confId);


                    }
                }


            }
        }

    }


    /**
     * 首次达到某个段位的时候 给邀请我来的人发
     *
     * @param userId
     * @param rankConfId
     * @throws IOException
     */
    public void whenReachingAcertainRankForTheFirstTime(String userId, int rankConfId) throws IOException {
        final User userById = this.loginRepo.findUserById(userId);
        String inviter = userById.getInviter();
        if (inviter != null && !inviter.equals("")) {
            inviteService.inviteeRankUp(userId, inviter, rankConfId);
        }
    }

    public Map<Integer, Map<Integer, List<RankDetial>>> getRankTypeMap() {
        return rankTypeMap;
    }


    /**
     * 获取排行用的类 同时处理跨天
     *
     * @param userId
     * @return
     */
    public TuZiBiData getTuZiBiData(String userId) {
        TuZiBiData data;
        long now = System.currentTimeMillis();
        final Optional<TuZiBiData> byId = tuZiBiDataRepository.findById(userId);
        if (byId.isEmpty()) {
            data = new TuZiBiData(userId, 0, now, 0);
            tuZiBiDataRepository.save(data);
            return data;
        } else {
            data = byId.get();
            if (!DateValidate.inTheSameDay(data.getUpdateTimestamp(), now)) {
                data.setBiNumber(0);
                data.setUpdateTimestamp(now);
                tuZiBiDataRepository.save(data);
            }
            return data;
        }
    }

    public void saveDataToBaseData(TuZiBiData data) {
        this.tuZiBiDataRepository.save(data);
    }

    public void saveDataToBaseDatanBatch(List<TuZiBiData> data) {
        this.tuZiBiDataRepository.saveAll(data);
    }

    public RankInfo myRankInfo(String userID, int rankTyppe) {

        final Map<Integer, RankDetial> integerRankDetialMap = singleUserData.get(userID);
        if (integerRankDetialMap != null) {
            final RankDetial rankDetial = integerRankDetialMap.get(rankTyppe);
            if (rankDetial != null) {
                return new RankInfo(rankDetial.getIdx(), this.loginRepo.findUserById(userID).getUserName(), rankDetial.getParam(), rankDetial.getUserId(), rankDetial.getRankConfId());
            }
        }

        // 新号没有段位 发1段位
        return new RankInfo(0, this.loginRepo.findUserById(userID).getUserName(), 0, userID, 1);
    }
}