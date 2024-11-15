package com.snkc.rest.rank;

import com.snkc.data.DataManager;
import com.snkc.model.*;
import com.snkc.repository.LoginRepository;
import com.snkc.repository.RobotRepo;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.*;

@RestController
@RequestMapping("/rank")
public class RankingController  {

    @PostMapping("/update")
    public RankScoreBack onUpdateScore(@RequestBody RankScore rankScore, @RequestAttribute("userID") String userID)
    {
//        var userOpt = loginRepo.findById(userID);
//        if (!userOpt.isPresent())
//        {
//            return new RankScoreBack();
//        }
//        var userInstance = userOpt.get();
//        var userCurrentScore = userInstance.getScores().get(rankScore.copyID());
//        if (userCurrentScore != null && userCurrentScore.getScore() >= rankScore.score())
//        {
//            return new RankScoreBack();
//        }
//        var copyRanking = getCopyRanking(rankScore.copyID());
//        var reachTime = copyRanking.addCopyScore(userID, rankScore.score());
//
//        userInstance.getScores().put(rankScore.copyID(), new User.scoreBean(rankScore.score(), reachTime));
//        loginRepo.save(userInstance);
        return new RankScoreBack();
    }

    @Value("${app.rank.botnum}")
    private int rankBotNum;
    private Map<Integer, CopyRanking> copyRankings = new HashMap<>();

    @Autowired
    LoginRepository loginRepo;

    @Autowired
    RobotRepo robotRepo;

    Random random = new Random();

    @PostConstruct
    private void onPostConstruct()
    {
//        var userCopyScores = loginRepo.findAllCopyScore();
//        for (var userCopyScore : userCopyScores)
//        {
//            for (var userScoreKV : userCopyScore.getCopyScores().entrySet())
//            {
//                int copyID = userScoreKV.getKey();
//                var score = userScoreKV.getValue();
//                if (!copyRankings.containsKey(copyID))
//                {
//                    copyRankings.put(copyID, new CopyRanking());
//                }
//                var copyRanking = copyRankings.get(copyID);
////                copyRanking.addCopyScore(userCopyScore.getId(), score.getScore(), score.getTimeStamp());
//            }
//        }
//        if (copyRankings.isEmpty())
//        {
//            generateRobots();
//        }
    }
//    private void generateRobots()
//    {
//        var robotNumInDB = robotRepo.count();
//        var needAddRobot = rankBotNum - robotNumInDB;
//        for (int i = 0; i < needAddRobot; i++)
//        {
//            for (int j = 0; j < 20; j++) {
//                var randomRobotID = "BH" + String.format("%08d", random.nextInt(100000000));
//                if (!loginRepo.existsById(randomRobotID) )
//                {
//                    var robotUser = new User(randomRobotID);
////                    robotUser.setHeadIcon(random.nextInt(1, 160));
//                    loginRepo.save(robotUser);
//                    robotRepo.save(new Robot(randomRobotID));
//                    break;
//                }
//            }
//        }
//    }

//    @PostMapping("/get")
//    public RankGetResponse onGetRequest(@RequestAttribute("userID") String userID, @RequestBody RankGet rankGet)
//    {
//        int copyID = rankGet.copyID();
//        var userAround = onGetUserRank(userID, copyID);
//        var topPlayers = onGetTopRank(copyID, userID);
//        return new RankGetResponse(copyID, userAround, topPlayers);
//    }
//    public List<RankUser> onGetUserRank(String userID, int copyID)
//    {
//        var copyRanking = getCopyRanking(copyID);
//        var userOpt = loginRepo.findById(userID);
//        if (!userOpt.isPresent())
//        {
//            return new ArrayList<>();
//        }
//        var copyScore = userOpt.get().getScores().get(copyID);
//        if (copyScore == null)
//        {
//            return new ArrayList<>();
//        }
//        var aroundUsers = copyRanking.getAround(userID, copyScore.getScore(), 1);
//        List<RankUser> ret = new ArrayList<>();
//        for (var aroundUser : aroundUsers)
//        {
//            var aroundUserOpt = loginRepo.findById(aroundUser.userID());
//            if (aroundUserOpt.isPresent())
//            {
//                var aroundUserInstance = aroundUserOpt.get();
//                ret.add(new RankUser(aroundUserInstance.getId(),
//                        aroundUserInstance.getUserName(),
//                        aroundUserInstance.getHeadIcon(),
//                        aroundUser.orderNum(),
//                        aroundUser.score(),
//                        aroundUser.userID().equals(userID)));
//            } else {
//                ret.add(new RankUser(aroundUser.userID(),
//                        "Unknown",
//                        1,
//                        aroundUser.orderNum(),
//                        aroundUser.score(),
//                        aroundUser.userID().equals(userID)));
//            }
//        }
//        return ret;
//    }

//    public List<RankUser> onGetTopRank(int copyID, String userID)
//    {
//        var copyRanking = getCopyRanking(copyID);
//        var topPlayers = copyRanking.getTop(50);
//        List<RankUser> ret = new ArrayList<>();
//        for (var topPlayer : topPlayers)
//        {
//            var topPlayerOpt = loginRepo.findById(topPlayer.userID());
//            if (topPlayerOpt.isPresent())
//            {
//                var topUserInstance = topPlayerOpt.get();
//                ret.add(new RankUser(topUserInstance.getId(),
//                        topUserInstance.getUserName(),
//                        topUserInstance.getHeadIcon(),
//                        topPlayer.orderNum(),
//                        topPlayer.score(),
//                        topPlayer.userID().equals(userID)));
//            } else {
//                ret.add(new RankUser(topPlayer.userID(),
//                        "Unknown",
//                        1,
//                        topPlayer.orderNum(),
//                        topPlayer.score(),
//                        topPlayer.userID().equals(userID)));
//            }
//        }
//        return ret;
//    }
}
