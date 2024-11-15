
package com.snkc.serverjsonbean;
/**
* 
* @param id 加速权益【KEY】
* @param cost 消耗类型
* @param costnum 消耗货币
* @param time 加速时长
* @param type 加速类型
* @param effect 加速效率
* @param refresh 刷新类型
*/
public record Accelerate(
    int id, 
    int cost, 
    int costnum, 
    int time, 
    int type, 
    int effect, 
    int refresh) {
}
    