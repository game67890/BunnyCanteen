package com.snkc.game.rank.responsebean;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

/**
 * Created by gaosong
 * 2024/10/20
 */
@Service
public class ScheduledTaskService {

    private static final String Cron = "0 * * * * *"; // 每分钟执行一次

    /*  @Scheduled(cron = Cron)
      public void performTaskUsingCron() {
          System.out.println("Regular task performed using Cron: " + System.currentTimeMillis());
      }

  */
  /*  @Scheduled(fixedRate = 300_1000) // 每300秒执行一次
    public void performTaskUsingFixedRate() {
        System.out.println("Fixed rate task performed: " + System.currentTimeMillis());
    }*/

/*    @Scheduled(fixedDelay = 1000) // 每任务完成后1秒后执行下一次
    public void performTaskUsingFixedDelay() {
        System.out.println("Fixed delay task performed: " + System.currentTimeMillis());
        try {
            Thread.sleep(2000); // 模拟任务耗时
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }*/

}