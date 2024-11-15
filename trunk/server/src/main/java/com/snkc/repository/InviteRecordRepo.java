package com.snkc.repository;

import com.snkc.model.InviteRecord;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface InviteRecordRepo extends MongoRepository<InviteRecord, String> {
}
