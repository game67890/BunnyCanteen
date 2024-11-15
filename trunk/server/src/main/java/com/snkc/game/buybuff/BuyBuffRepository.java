package com.snkc.game.buybuff;

import com.snkc.game.buybuff.modlel.BuyBuffUserData;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BuyBuffRepository extends MongoRepository<BuyBuffUserData, String> {
    //public void onUserLogin(String id, String name, String email, String password);

}
