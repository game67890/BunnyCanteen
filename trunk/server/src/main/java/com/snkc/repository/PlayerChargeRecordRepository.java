package com.snkc.repository;

import com.snkc.model.PlayerChargeRecord;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface PlayerChargeRecordRepository extends MongoRepository<PlayerChargeRecord, String> {

    @Query("{id:'?0'}")
    public PlayerChargeRecord findUserChargeRecordById(String id);

}
