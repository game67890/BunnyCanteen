
import { JsonUtil } from "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil";

export class TablePictureSet {
    static TableName: string = "PictureSet";

    private data: any;

    init(id: number) {
        var table = JsonUtil.get(TablePictureSet.TableName);
        this.data = table[id];
        this.id = id;
    }

    /** 档位id【KEY】 */
    id: number = 0;

    /** 图片说明 */
    get name(): string {
        return this.data.name;
    }
    /** 商品路径 */
    get picture(): string {
        return this.data.picture;
    }
}
    