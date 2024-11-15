
package com.snkc.serverjsonbean;
/**
* 
* @param id 餐厅等级【KEY】
* @param coststrength 采购消耗体力
* @param costmoney 采购基础消耗
* @param moneychange 采购涨幅
* @param recoverylevel 回收素材等级
*/
public record Restaurantlevel(
    int id, 
    int coststrength, 
    long costmoney, 
    float moneychange, 
    int recoverylevel) {
}
    