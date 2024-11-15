
import { JsonUtil } from "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil";

export class TableRadishAwardRank {
    static TableName: string = "RadishAwardRank";

    private data: any;

    init(id: number) {
        var table = JsonUtil.get(TableRadishAwardRank.TableName);
        this.data = table[id];
        this.id = id;
    }

    /** 编号【KEY】 */
    id: number = 0;

    /** 最低名次 */
    get minrank(): number {
        return this.data.minrank;
    }
    /** 最高名次 */
    get maxrank(): number {
        return this.data.maxrank;
    }
    /** 奖励比例 */
    get awardpercent(): string {
        return this.data.awardpercent;
    }
}
    