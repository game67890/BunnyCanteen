package com.snkc.game.rank.repository;

import com.snkc.game.rank.modlel.CanTingLevelData;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CanTingLevelDataRepository extends MongoRepository<CanTingLevelData, String> {
    //public void onUserLogin(String id, String name, String email, String password);

}
