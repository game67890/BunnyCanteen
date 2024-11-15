package com.snkc.repository;

import com.snkc.model.MissionData;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MissionDataRepository extends MongoRepository<MissionData, String> {
}
