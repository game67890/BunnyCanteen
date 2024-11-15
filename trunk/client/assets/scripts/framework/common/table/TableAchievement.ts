
import { JsonUtil } from "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil";

export class TableAchievement {
    static TableName: string = "Achievement";

    private data: any;

    init(id: number) {
        var table = JsonUtil.get(TableAchievement.TableName);
        this.data = table[id];
        this.id = id;
    }

    /** 成就ID【KEY】 */
    id: number = 0;

    /** 成就名称 */
    get achievename(): string {
        return this.data.achievename;
    }
    /** 成就图标 */
    get achieveicon(): string {
        return this.data.achieveicon;
    }
    /** 成就描述 */
    get achievetips(): string {
        return this.data.achievetips;
    }
    /** 成就类型 */
    get achievetype(): number {
        return this.data.achievetype;
    }
    /** 条件 */
    get condition(): number {
        return this.data.condition;
    }
    /** 奖励 */
    get award(): number {
        return this.data.award;
    }
    /** 奖励数量 */
    get num(): number {
        return this.data.num;
    }
    /** 描述 */
    get tips(): string {
        return this.data.tips;
    }
    /** 图标 */
    get icon(): string {
        return this.data.icon;
    }
}
    