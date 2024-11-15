package com.snkc.game.baluobo.responsebean;

import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Created by gaosong
 * 2024/10/22
 */
@Service
public class BaluoBoService {
    // 每次保存间隔的拔萝卜获取的兔子币的数量
    private Map<String, Long> map = new ConcurrentHashMap<>();

    public void addData(String userId, long addTuZiBi) {
        Long aLong = map.get(userId);
        if (aLong == null) {
            aLong = 0l;
            map.put(userId, aLong);
        }

        map.put(userId, map.get(userId) + addTuZiBi);
    }

    public Long getData(String userId) {
        final Long aLong = map.get(userId);
        if (aLong == null) {
            return 0l;
        }
        return map.remove(userId);
    }
}
