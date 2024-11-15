package com.snkc.rest.charge;

import org.springframework.stereotype.Component;

@Component
public class OrderIDProvider {
    private final long epoch = 1609459200000L;  // 开始时间戳，可以根据需要修改
    private final long machineIdBits = 10L;  // 机器ID所占位数
    private final long maxMachineId = -1L ^ (-1L << machineIdBits);  // 最大机器ID
    private final long sequenceBits = 12L;  // 序列号所占位数
    private final long machineIdShift = sequenceBits;  // 机器ID左移位数
    private final long timestampShift = sequenceBits + machineIdBits;  // 时间戳左移位数
    private final long sequenceMask = -1L ^ (-1L << sequenceBits);  // 序列号掩码

    private long machineId;
    private long lastTimestamp = -1L;
    private long sequence = 0L;

    public OrderIDProvider() {
        new OrderIDProvider(1);
    }

    public OrderIDProvider(long machineId) {
        if (machineId > maxMachineId || machineId < 0) {
            throw new IllegalArgumentException("Invalid machineId");
        }
        this.machineId = machineId;
    }

    public synchronized long generateId() {
        long currentTimestamp = System.currentTimeMillis();
        if (currentTimestamp < lastTimestamp) {
            throw new RuntimeException("Clock moved backwards");
        }

        if (currentTimestamp == lastTimestamp) {
            sequence = (sequence + 1) & sequenceMask;
            if (sequence == 0) {
                currentTimestamp = waitNextMillis(lastTimestamp);
            }
        } else {
            sequence = 0L;
        }

        lastTimestamp = currentTimestamp;
        return ((currentTimestamp - epoch) << timestampShift)
                | (machineId << machineIdShift)
                | sequence;
    }

    private long waitNextMillis(long lastTimestamp) {
        long currentTimestamp = System.currentTimeMillis();
        while (currentTimestamp <= lastTimestamp) {
            currentTimestamp = System.currentTimeMillis();
        }
        return currentTimestamp;
    }
}
