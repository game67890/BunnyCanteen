package com.snkc.game.rank;

import com.snkc.game.rank.bean.RankDetial;
import com.snkc.game.rank.requestbean.CRankList;
import com.snkc.game.rank.responsebean.RankInfo;
import com.snkc.game.rank.responsebean.SRankList;
import com.snkc.repository.LoginRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

/**
 * 排行
 */

@RestController
@CrossOrigin
@RequestMapping("/paihang")
public class RankController {

    public static int toClientMaxNumber = 100;
    Logger logger = LoggerFactory.getLogger(RankController.class);

    @Autowired
    RankService rankService;
    @Autowired
    LoginRepository loginRepo;
    /**
     * @return
     */

    @PostMapping("/cranklist")
    public SRankList cbuy(@RequestAttribute("userID") String userID, @RequestBody CRankList cRankList) throws IOException {

        int rankTyppe = Integer.parseInt(cRankList.rankType());
        int rankConfId = Integer.parseInt(cRankList.rankConfId());

        final Map<Integer, Map<Integer, List<RankDetial>>> rankTypeMap = this.rankService.getRankTypeMap();

        final Map<Integer, List<RankDetial>> integerListMap = rankTypeMap.get(rankTyppe);


        final List<RankDetial> rankDetials = integerListMap.get(rankConfId);


        RankInfo myRankInfo = rankService.myRankInfo(userID, rankTyppe);

        long allUserNumber = loginRepo.count();
        if (rankDetials == null || rankDetials.size() == 0) {
            // 这个榜上没有数据
            return new SRankList(cRankList.rankType(), cRankList.rankConfId(), Collections.EMPTY_LIST, myRankInfo, allUserNumber);
        }

        List<RankInfo> list = new ArrayList<>();
        for (int i = 1; i <= Math.min(toClientMaxNumber, rankDetials.size()); i++) {
            final RankDetial rankDetial = rankDetials.get(i - 1);
            list.add(new RankInfo(i, rankDetial.getUserName(), rankDetial.getParam(), rankDetial.getUserId(), rankDetial.getRankConfId()));
        }


        return new SRankList(cRankList.rankType(), cRankList.rankConfId(), list, myRankInfo, allUserNumber);
    }




}
