
import { JsonUtil } from "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil";

export class TableShop {
    static TableName: string = "Shop";

    private data: any;

    init(id: number) {
        var table = JsonUtil.get(TableShop.TableName);
        this.data = table[id];
        this.id = id;
    }

    /** 档位id【KEY】 */
    id: number = 0;

    /** 兔子名称 */
    get name(): string {
        return this.data.name;
    }
    /** 价格 */
    get price(): number {
        return this.data.price;
    }
    /** 支付类型 */
    get paytype(): number {
        return this.data.paytype;
    }
    /** 兔子造型 */
    get rabbitmodel(): string {
        return this.data.rabbitmodel;
    }
    /** 兔子动画 */
    get rabbitanimation(): string {
        return this.data.rabbitanimation;
    }
    /** 兔子动画2 */
    get rabbitanimation2(): string {
        return this.data.rabbitanimation2;
    }
    /** 音效 */
    get sound(): number {
        return this.data.sound;
    }
    /** 加成效率 */
    get effect(): number {
        return this.data.effect;
    }
    /** 购买条件 */
    get unlocktype(): number {
        return this.data.unlocktype;
    }
    /** 条件参数 */
    get unlockpara(): number {
        return this.data.unlockpara;
    }
    /** 提示消息 */
    get message(): string {
        return this.data.message;
    }
}
    