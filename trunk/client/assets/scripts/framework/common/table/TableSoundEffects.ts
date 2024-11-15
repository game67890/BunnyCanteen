
import { JsonUtil } from "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil";

export class TableSoundEffects {
    static TableName: string = "SoundEffects";

    private data: any;

    init(id: number) {
        var table = JsonUtil.get(TableSoundEffects.TableName);
        this.data = table[id];
        this.id = id;
    }

    /** 音效ID【KEY】 */
    id: number = 0;

    /** 音效路径 */
    get soundpath(): string {
        return this.data.soundpath;
    }
    /** 是否循环 */
    get loop(): number {
        return this.data.loop;
    }
    /** 音效大小 */
    get volume(): number {
        return this.data.volume;
    }
}
    