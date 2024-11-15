
import { JsonUtil } from "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil";

export class TableInvitedUserRank {
    static TableName: string = "InvitedUserRank";

    private data: any;

    init(id: number) {
        var table = JsonUtil.get(TableInvitedUserRank.TableName);
        this.data = table[id];
        this.id = id;
    }

    /** 段位ID【KEY】 */
    id: number = 0;

    /** 萝卜币数量 */
    get CarrotCoinNum(): number {
        return this.data.CarrotCoinNum;
    }
}
    