package com.snkc.repository;

import com.snkc.model.GoogleIAPPurchase;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GoogleIAPPurchaseRepo extends MongoRepository<GoogleIAPPurchase, String> {
}
