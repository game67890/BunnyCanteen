package com.snkc.rest.rank;

import com.snkc.model.RankUser;

import java.util.List;

public record RankGetResponse (int copyID, List<RankUser> selfAround, List<RankUser> topPlayer){
}
