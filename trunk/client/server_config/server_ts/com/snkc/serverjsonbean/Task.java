
package com.snkc.serverjsonbean;
/**
* 
* @param id 任务ID【KEY】
* @param taskgroup 任务分组
* @param tasktype 任务类型
* @param taskpara 任务参数
* @param carrotcoinnum 奖励数量
* @param refresh 是否每日刷新
*/
public record Task(
    int id, 
    int taskgroup, 
    int tasktype, 
    int taskpara, 
    String carrotcoinnum, 
    int refresh) {
}
    