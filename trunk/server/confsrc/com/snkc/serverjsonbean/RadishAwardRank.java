
package com.snkc.serverjsonbean;
/**
* 
* @param id 编号【KEY】
* @param minrank 最低名次
* @param maxrank 最高名次
* @param awardpercent 奖励比例
*/
public record RadishAwardRank(
    int id, 
    int minrank, 
    int maxrank, 
    String awardpercent) {
}
    