package com.snkc.repository;

import com.snkc.model.BaLuoBoData;
import com.snkc.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface BaLuoBoRepository extends MongoRepository<BaLuoBoData, String> {
    //public void onUserLogin(String id, String name, String email, String password);
}
