
import { JsonUtil } from "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil";

export class TablePay {
    static TableName: string = "Pay";

    private data: any;

    init(id: number) {
        var table = JsonUtil.get(TablePay.TableName);
        this.data = table[id];
        this.id = id;
    }

    /** 档位id【KEY】 */
    id: number = 0;

    /** 档位名称 */
    get name(): string {
        return this.data.name;
    }
    /** 价格 */
    get price(): number {
        return this.data.price;
    }
    /** 商品图标 */
    get picture(): string {
        return this.data.picture;
    }
    /** 折扣标签 */
    get discount(): string {
        return this.data.discount;
    }
    /** 获得萝卜币 */
    get carrotcoin(): number {
        return this.data.carrotcoin;
    }
    /** 获得礼盒数量 */
    get gift(): number {
        return this.data.gift;
    }
    /** 获得体力 */
    get strength(): number {
        return this.data.strength;
    }
    /** 刷新类型 */
    get refresh(): number {
        return this.data.refresh;
    }
    /** 刷新次数 */
    get refreshnum(): number {
        return this.data.refreshnum;
    }
    /** 支付类型 */
    get paytype(): number {
        return this.data.paytype;
    }
    /** 折扣描述1 */
    get discountdesc1(): string {
        return this.data.discountdesc1;
    }
    /** 折扣描述2 */
    get discountdesc2(): string {
        return this.data.discountdesc2;
    }
}
    