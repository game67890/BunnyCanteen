
import { JsonUtil } from "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil";

export class TableAccelerate {
    static TableName: string = "Accelerate";

    private data: any;

    init(id: number) {
        var table = JsonUtil.get(TableAccelerate.TableName);
        this.data = table[id];
        this.id = id;
    }

    /** 加速权益【KEY】 */
    id: number = 0;

    /** 消耗类型 */
    get cost(): number {
        return this.data.cost;
    }
    /** 消耗货币 */
    get costnum(): number {
        return this.data.costnum;
    }
    /** 加速时长 */
    get time(): number {
        return this.data.time;
    }
    /** 加速类型 */
    get type(): number {
        return this.data.type;
    }
    /** 加速效率 */
    get effect(): number {
        return this.data.effect;
    }
    /** 刷新类型 */
    get refresh(): number {
        return this.data.refresh;
    }
}
    