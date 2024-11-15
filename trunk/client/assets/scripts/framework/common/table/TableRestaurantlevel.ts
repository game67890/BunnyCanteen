
import { JsonUtil } from "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil";

export class TableRestaurantlevel {
    static TableName: string = "Restaurantlevel";

    private data: any;

    init(id: number) {
        var table = JsonUtil.get(TableRestaurantlevel.TableName);
        this.data = table[id];
        this.id = id;
    }

    /** 餐厅等级【KEY】 */
    id: number = 0;

    /** 升级所需经验 */
    get exp(): number {
        return this.data.exp;
    }
    /** 采购素材等级 */
    get foodlevel(): number {
        return this.data.foodlevel;
    }
    /** 采购描述 */
    get buydesc(): string {
        return this.data.buydesc;
    }
    /** 等级图片 */
    get picture(): string {
        return this.data.picture;
    }
    /** 采购消耗体力 */
    get coststrength(): number {
        return this.data.coststrength;
    }
    /** 采购基础消耗 */
    get costmoney(): number {
        return this.data.costmoney;
    }
    /** 采购涨幅 */
    get moneychange(): number {
        return this.data.moneychange;
    }
    /** 回收素材等级 */
    get recoverylevel(): number {
        return this.data.recoverylevel;
    }
}
    