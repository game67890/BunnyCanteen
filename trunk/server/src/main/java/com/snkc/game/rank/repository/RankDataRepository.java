package com.snkc.game.rank.repository;

import com.snkc.game.rank.modlel.RankData;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by gaosong
 * 2024/10/24
 */
public interface RankDataRepository extends MongoRepository<RankData, String> {
    //public void onUserLogin(String id, String name, String email, String password);

}