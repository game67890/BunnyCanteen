
package com.snkc.serverjsonbean;
/**
* 
* @param id 排行榜ID【KEY】
* @param upper 日产量上限
* @param lower 日产量下限
* @param canteenupper 餐厅等级上限
* @param canteenranklower 餐厅等级下限
*/
public record Rank(
    int id, 
    float upper, 
    float lower, 
    int canteenupper, 
    int canteenranklower) {
}
    