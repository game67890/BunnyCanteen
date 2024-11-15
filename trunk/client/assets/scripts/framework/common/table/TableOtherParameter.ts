
import { JsonUtil } from "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil";

export class TableOtherParameter {
    static TableName: string = "OtherParameter";

    private data: any;

    init(id: number) {
        var table = JsonUtil.get(TableOtherParameter.TableName);
        this.data = table[id];
        this.id = id;
    }

    /** 编号【KEY】 */
    id: number = 0;

    /** 参数值 */
    get parameter(): string {
        return this.data.parameter;
    }
}
    