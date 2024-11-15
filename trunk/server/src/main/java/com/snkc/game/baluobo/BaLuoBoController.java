package com.snkc.game.baluobo;

import com.snkc.data.DataManager;
import com.snkc.game.baluobo.requestbean.Cbaluobo;
import com.snkc.game.baluobo.responsebean.*;
import com.snkc.game.rank.RankService;
import com.snkc.game.rank.modlel.TuZiBiData;
import com.snkc.game.tizicoincheck.TiZiCoinCheckService;
import com.snkc.lock.UserLockService;
import com.snkc.model.BaLuoBoData;
import com.snkc.model.User;
import com.snkc.repository.BaLuoBoRepository;
import com.snkc.repository.LoginRepository;
import com.snkc.serverjsonbean.OtherParameter;
import com.snkc.serverjsonbean.RadishAwardTime;
import com.snkc.serverjsonbean.RadishAwardWeight;
import com.snkc.util.DateValidate;
import com.snkc.util.Misc;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * 拔萝卜功能类
 */

@RestController
@CrossOrigin
@RequestMapping("/baluobo")
public class BaLuoBoController {
    private Logger logger = LoggerFactory.getLogger(BaLuoBoController.class);

    @Autowired
    BaLuoBoRepository baLuoBoRepository;
    @Autowired
    DataManager dataManager;
    List<BaLuoBoData> rank = new ArrayList<>();
    @Autowired
    UserLockService userLockService;
    @Autowired
    LoginRepository loginRepo;
    @Autowired
    TiZiCoinCheckService tiZiCoinCheckService;
    @Autowired
    RankService rankService;
    @Autowired
    BaluoBoService baluoBoService;
    /**
     * 面板
     *
     * @return
     */
    @CrossOrigin
    @PostMapping("/cpanel")
    public Spanel cpanel(@RequestAttribute("userID") String userId) {
        final Optional<BaLuoBoData> byId = baLuoBoRepository.findById(userId);
        if (byId.isEmpty()) {
            BaLuoBoData data = new BaLuoBoData(userId);
            baLuoBoRepository.save(data);
            return new Spanel(-1, 0);
        }

        for (int i = 0; i < this.rank.size(); i++) {
            BaLuoBoData luoBoData = rank.get(i);
            if (luoBoData.getId().equals(userId)) {
                return new Spanel(i + 1, luoBoData.getWeight());
            }
        }
        return new Spanel(-1, 0);

    }

    /**
     * 排行榜面板
     *
     * @return
     */
    @PostMapping("/crankpanel")
    public Srankpanel crankpanel() {
        List<BaLuoBoRankInfo> list = new ArrayList<>();

        for (int i = 0; i < this.rank.size(); i++) {
            list.add(new BaLuoBoRankInfo(i + 1, rank.get(i).getId(),this.loginRepo.findUserById(rank.get(i).getId()).getUserName(), this.rank.get(i).getWeight()));
        }

        return new Srankpanel(list);
    }

    /**
     * 拔萝卜
     *
     * @return
     */

    @PostMapping("/cbaluobo")
    public Sbaluobo cbaluobo(@RequestAttribute("userID") String userID, @RequestBody Cbaluobo p) throws IOException {
        final Map<Integer, RadishAwardWeight> radishAwardWeightMap = dataManager.getCfgFile(RadishAwardWeight.class);

        List<Integer> confIdList = new ArrayList<>();
        List<Integer> randweight = new ArrayList<>();

        for (Integer key : radishAwardWeightMap.keySet()) {
            final RadishAwardWeight radishAwardWeight = radishAwardWeightMap.get(key);
            confIdList.add(key);
            randweight.add(radishAwardWeight.randweight());
        }


        final Map<Integer, OtherParameter> OtherParameterMap = dataManager.getCfgFile(OtherParameter.class);

        OtherParameter costconf = OtherParameterMap.get(1);
        if (costconf == null) {
            return null;
        }

        int cost = Integer.parseInt(costconf.parameter());

        if (cost < 0) {
            return null;
        }




        List<BaLuoBoInfo> dataList = new ArrayList<>();

        for (int i = 0; i < Integer.parseInt(p.times()); i++) {



            long uniqueKey = userLockService.tryLock(userID);
            try {
                if (uniqueKey > 0) {

                    //扣胡萝卜币
                    User user = loginRepo.findUserById(userID);
                    if (user == null) {
                        return null;

                    }
                    final int carrotCoin = user.getCarrotCoin();
                    if (carrotCoin < cost) {
                        return null;

                    }
                    user.subCarrotCoin(cost);
                    loginRepo.save(user);
                }
            } finally {
                userLockService.release(userID, uniqueKey);

            }


            final int probability = Misc.getProbability(randweight);

            // 随机到的重量
            final Integer confId = confIdList.get(probability);
            final Optional<BaLuoBoData> byId = baLuoBoRepository.findById(userID);
            final BaLuoBoData baLuoBoData = byId.get();

            int weight = radishAwardWeightMap.get(confId).radishweight();

            baLuoBoData.setWeight(baLuoBoData.getWeight() + weight);
            baLuoBoRepository.save(baLuoBoData);

            // 去随机分钟
            int randomMinute = getRandomMinute();

            BaLuoBoInfo info = new BaLuoBoInfo(randomMinute, confId);
            dataList.add(info);
        }

        //刷新排行榜
        doRank();

        var user = loginRepo.findUserById(userID);

        long addTuZiBi = 0;
        // 拔萝卜直接获取xxx个兔子币
        long speed = this.tiZiCoinCheckService.getTiZiBiSpeedInServer(user.getId(), user.getBoardData());
        for (BaLuoBoInfo baLuoBoInfo : dataList) {
            int timeMinute = baLuoBoInfo.time();
            addTuZiBi = addTuZiBi + timeMinute * 60 * speed;
            if (timeMinute * 60 * speed < 0) {
                //System.out.println("gsgsgsgsgsgsgsggsgsgsgsgsgsgsgsg");
            }

            //logger.error("addTuZiBi:{} timeMinute:{} speed:{}", addTuZiBi, timeMinute, speed);
        }


        baluoBoService.addData(userID, addTuZiBi);

        final TuZiBiData tuZiBiData = this.rankService.getTuZiBiData(userID);
        tuZiBiData.setBiNumber(tuZiBiData.getBiNumber() + addTuZiBi);

        this.rankService.saveDataToBaseData(tuZiBiData);


        final Spanel cpanel = this.cpanel(userID);

        return new Sbaluobo(dataList, cpanel.idx(), cpanel.weight(), user.getCarrotCoin());
    }

    /**
     * 获得随机的分钟
     *
     * @return
     */
    public int getRandomMinute() throws IOException {
        List<Integer> list1 = new ArrayList<>();
        List<Integer> list2 = new ArrayList<>();
        final Map<Integer, RadishAwardTime> map = dataManager.getCfgFile(RadishAwardTime.class);
        for (Integer key : map.keySet()) {
            final RadishAwardTime conf = map.get(key);
            list1.add(conf.duration());
            list2.add(conf.randweight());
        }

        final int probability = Misc.getProbability(list2);

        return list1.get(probability);

    }

    @PostConstruct
    public void doRank() {
        rank = new ArrayList<>(baLuoBoRepository.findAll(Sort.by(Sort.Direction.DESC, "weight")));

    }
}
