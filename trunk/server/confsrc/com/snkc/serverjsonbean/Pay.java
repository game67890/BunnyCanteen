
package com.snkc.serverjsonbean;
/**
* 
* @param id 档位id【KEY】
* @param name 档位名称
* @param price 价格
* @param picture 商品图标
* @param discount 折扣标签
* @param carrotcoin 获得萝卜币
* @param gift 获得礼盒数量
* @param strength 获得体力
* @param refresh 刷新类型
* @param refreshnum 刷新次数
* @param paytype 支付类型
* @param discountdesc1 折扣描述1
* @param discountdesc2 折扣描述2
*/
public record Pay(
    int id, 
    String name, 
    int price, 
    String picture, 
    String discount, 
    int carrotcoin, 
    int gift, 
    int strength, 
    int refresh, 
    int refreshnum, 
    int paytype, 
    String discountdesc1, 
    String discountdesc2) {
}
    