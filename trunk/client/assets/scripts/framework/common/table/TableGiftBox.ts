
import { JsonUtil } from "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil";

export class TableGiftBox {
    static TableName: string = "GiftBox";

    private data: any;

    init(id: number) {
        var table = JsonUtil.get(TableGiftBox.TableName);
        this.data = table[id];
        this.id = id;
    }

    /** 餐厅等级【KEY】 */
    id: number = 0;

    /** 间隔时间 */
    get time(): number {
        return this.data.time;
    }
    /** 每日上限 */
    get numlimit(): number {
        return this.data.numlimit;
    }
    /** 素材等级 */
    get foodlevel1(): any {
        return this.data.foodlevel1;
    }
    /** 素材概率 */
    get probably1(): any {
        return this.data.probably1;
    }
}
    