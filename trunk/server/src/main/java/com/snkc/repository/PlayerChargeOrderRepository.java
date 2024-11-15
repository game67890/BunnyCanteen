package com.snkc.repository;

import com.snkc.model.PlayerChargeOrder;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PlayerChargeOrderRepository extends MongoRepository<PlayerChargeOrder, String> {

}
