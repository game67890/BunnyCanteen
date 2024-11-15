package com.snkc.repository;

import com.snkc.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

public interface LoginRepository extends MongoRepository<User, String> {
    //public void onUserLogin(String id, String name, String email, String password);

    @Query("{id:'?0'}")
    public User findUserById(String id);
    @Query(value="{}", fields = "{_id:1, scores:1}")
    public List<CopyScore> findAllCopyScore();
    @Query("{token:'?0'}")
    public Optional<User> findUserByToken(String token);

}
