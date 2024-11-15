package com.snkc.repository;

import com.snkc.model.FbAccountBind;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FbAccountBindRepo extends MongoRepository<FbAccountBind, String> {
}
