
import { JsonUtil } from "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil";

export class TableTask {
    static TableName: string = "Task";

    private data: any;

    init(id: number) {
        var table = JsonUtil.get(TableTask.TableName);
        this.data = table[id];
        this.id = id;
    }

    /** 任务ID【KEY】 */
    id: number = 0;

    /** 任务分组 */
    get taskgroup(): number {
        return this.data.taskgroup;
    }
    /** 任务类型 */
    get tasktype(): number {
        return this.data.tasktype;
    }
    /** 任务参数 */
    get taskpara(): number {
        return this.data.taskpara;
    }
    /** 任务图标 */
    get taskicon(): string {
        return this.data.taskicon;
    }
    /** 任务描述 */
    get tasktips(): string {
        return this.data.tasktips;
    }
    /** 奖励数量 */
    get carrotcoinnum(): string {
        return this.data.carrotcoinnum;
    }
    /** 是否每日刷新 */
    get refresh(): number {
        return this.data.refresh;
    }
}
    