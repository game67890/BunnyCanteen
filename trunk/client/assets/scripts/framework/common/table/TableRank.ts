
import { JsonUtil } from "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil";

export class TableRank {
    static TableName: string = "Rank";

    private data: any;

    init(id: number) {
        var table = JsonUtil.get(TableRank.TableName);
        this.data = table[id];
        this.id = id;
    }

    /** 排行榜ID【KEY】 */
    id: number = 0;

    /** 段位名称 */
    get rankname(): string {
        return this.data.rankname;
    }
    /** 段位大图标 */
    get bigrankicon(): string {
        return this.data.bigrankicon;
    }
    /** 段位小图标 */
    get smallrankicon(): string {
        return this.data.smallrankicon;
    }
    /** 段位背景 */
    get rankpic(): string {
        return this.data.rankpic;
    }
    /** 日产量上限 */
    get upper(): number {
        return this.data.upper;
    }
    /** 日产量下限 */
    get lower(): number {
        return this.data.lower;
    }
    /** 餐厅等级上限 */
    get canteenupper(): number {
        return this.data.canteenupper;
    }
    /** 餐厅等级下限 */
    get canteenranklower(): number {
        return this.data.canteenranklower;
    }
}
    