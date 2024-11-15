
import { JsonUtil } from "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil";

export class TableRadishAwardTime {
    static TableName: string = "RadishAwardTime";

    private data: any;

    init(id: number) {
        var table = JsonUtil.get(TableRadishAwardTime.TableName);
        this.data = table[id];
        this.id = id;
    }

    /** 编号【KEY】 */
    id: number = 0;

    /** 奖励时长 */
    get duration(): number {
        return this.data.duration;
    }
    /** 随机权重 */
    get randweight(): number {
        return this.data.randweight;
    }
}
    