
import { JsonUtil } from "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil";

export class TableIngredients {
    static TableName: string = "Ingredients";

    private data: any;

    init(id: number) {
        var table = JsonUtil.get(TableIngredients.TableName);
        this.data = table[id];
        this.id = id;
    }

    /** 素材id【KEY】 */
    id: number = 0;

    /** 素材名称 */
    get name(): string {
        return this.data.name;
    }
    /** 系列类型 */
    get type(): number {
        return this.data.type;
    }
    /** 素材等级 */
    get level(): number {
        return this.data.level;
    }
    /** 素材图片 */
    get picture(): string {
        return this.data.picture;
    }
    /** 合成获得餐厅经验 */
    get getexp(): number {
        return this.data.getexp;
    }
    /** 每秒收益 */
    get getmoney(): number {
        return this.data.getmoney;
    }
    /** 回收获得兔子币 */
    get recovery(): number {
        return this.data.recovery;
    }
    /** 售价1 */
    get cost1(): number {
        return this.data.cost1;
    }
    /** 售价2 */
    get cost2(): number {
        return this.data.cost2;
    }
    /** 售价浮动系数 */
    get costup(): number {
        return this.data.costup;
    }
}
    