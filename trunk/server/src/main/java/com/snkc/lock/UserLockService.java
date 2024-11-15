package com.snkc.lock;

import com.mongodb.client.result.DeleteResult;
import com.snkc.model.Lock;
import com.snkc.repository.LoginRepository;
import com.snkc.rest.charge.OrderIDProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;


@Service
public class UserLockService {

    Logger logger = LoggerFactory.getLogger(UserLockService.class);

    @Autowired
    private MongoTemplate mongoTemplate;
    @Autowired
    private OrderIDProvider orderIDProvider;
    @Autowired LoginRepository loginRepo;

    public long tryLock(String lockName) {
        Query query = new Query();
        query.addCriteria(Criteria.where("lockName").is(lockName));

        long uniqueKey = orderIDProvider.generateId();
        Update update = new Update().setOnInsert("lockName", lockName).
                //失效时间为3S
                        setOnInsert("expireTime", System.currentTimeMillis() + 3000).
                setOnInsert("uniqueKey", uniqueKey);

        FindAndModifyOptions options = new FindAndModifyOptions();
        options.returnNew(true);
        options.upsert(true);

        Lock lock = mongoTemplate.findAndModify(query, update, options, Lock.class);
        boolean locked = (lock != null) && (lock.getUniqueKey() == uniqueKey);

        //拿到一个用过的锁，但是个上锁的且时间过期
        if (!locked) {
            assert lock != null;
            if (lock.getUniqueKey() != uniqueKey) {
                DeleteResult deleteRequest = mongoTemplate.remove(
                        Query.query(Criteria.where("lockName").is(lockName).
                                and("uniqueKey").is(lock.getUniqueKey()).
                                and("expireTime").is(lock.getExpireTime())
                        ), Lock.class);
                //删除成功了？试图再次获取
                if (deleteRequest.getDeletedCount() >= 1){
                   return this.tryLock(lockName);
                }
            }
        }
        return uniqueKey;
    }

    public void release(String key, long uniqueKey) {
        if (uniqueKey <= 0){
            return;
        }
        Query query = Query.query(Criteria.where("lockName").is(key)
                .and("uniqueKey").is(uniqueKey));
        DeleteResult deleted = mongoTemplate.remove(query, Lock.class);
        boolean released = deleted.getDeletedCount() == 1;
        if (released) {
            logger.debug("Remove query successfully affected 1 record for key {} with uniqueKey {}",
                    key, uniqueKey);
        } else if (deleted.getDeletedCount() > 0) {
            logger.error("Unexpected result from release for key {} with uniqueKey {}, released {}",
                    key, uniqueKey, deleted);
        } else {
            logger.error("Remove query did not affect any records for key {} with uniqueKey {}",
                    key, uniqueKey);
        }
    }
}