package com.snkc.game.rank.responsebean;

import java.util.List;

/**
 * Created by gaosong
 * 2024/10/10
 */
public record SRankList(String rankTyppe, String rankConfId, List<RankInfo> list, RankInfo myInfo,long allUserNumber) {
}
