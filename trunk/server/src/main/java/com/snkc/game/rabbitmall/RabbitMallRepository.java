package com.snkc.game.rabbitmall;

import com.snkc.game.rabbitmall.modlel.RabbitMallUserData;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RabbitMallRepository extends MongoRepository<RabbitMallUserData, String> {
    //public void onUserLogin(String id, String name, String email, String password);

}
