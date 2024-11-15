
package com.snkc.serverjsonbean;
/**
* 
* @param id 成就ID【KEY】
* @param achievetype 成就类型
* @param condition 条件
* @param award 奖励
* @param num 奖励数量
*/
public record Achievement(
    int id, 
    int achievetype, 
    int condition, 
    int award, 
    int num) {
}
    