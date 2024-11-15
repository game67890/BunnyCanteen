
package com.snkc.serverjsonbean;
/**
* 
* @param id 素材id【KEY】
* @param getexp 合成获得餐厅经验
* @param getmoney 每秒收益
* @param recovery 回收获得兔子币
* @param cost1 售价1
* @param cost2 售价2
* @param costup 售价浮动系数
*/
public record Ingredients(
    int id, 
    int getexp, 
    int getmoney, 
    long recovery, 
    long cost1, 
    int cost2, 
    float costup) {
}
    