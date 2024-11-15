package com.snkc.repository;

import com.snkc.model.Robot;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RobotRepo extends MongoRepository<Robot, String> {
}
