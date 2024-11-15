package com.snkc.game.rank.repository;

import com.snkc.game.rank.modlel.TuZiBiData;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TuZiBiDataRepository extends MongoRepository<TuZiBiData, String> {
    //public void onUserLogin(String id, String name, String email, String password);

}
