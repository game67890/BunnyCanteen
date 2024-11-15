
import { JsonUtil } from "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil";

export class TableRadishAwardWeight {
    static TableName: string = "RadishAwardWeight";

    private data: any;

    init(id: number) {
        var table = JsonUtil.get(TableRadishAwardWeight.TableName);
        this.data = table[id];
        this.id = id;
    }

    /** 编号【KEY】 */
    id: number = 0;

    /** 萝卜名称 */
    get radishname(): string {
        return this.data.radishname;
    }
    /** 萝卜重量 */
    get radishweight(): number {
        return this.data.radishweight;
    }
    /** 随机权重 */
    get randweight(): number {
        return this.data.randweight;
    }
}
    