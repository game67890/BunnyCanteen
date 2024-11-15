
package com.snkc.serverjsonbean;
/**
* 
* @param id 档位id【KEY】
* @param name 兔子名称
* @param price 价格
* @param paytype 支付类型
* @param rabbitmodel 兔子造型
* @param rabbitanimation 兔子动画
* @param rabbitanimation2 兔子动画2
* @param sound 音效
* @param effect 加成效率
* @param unlocktype 购买条件
* @param unlockpara 条件参数
* @param message 提示消息
*/
public record Shop(
    int id, 
    String name, 
    int price, 
    int paytype, 
    String rabbitmodel, 
    String rabbitanimation, 
    String rabbitanimation2, 
    int sound, 
    int effect, 
    int unlocktype, 
    int unlockpara, 
    String message) {
}
    