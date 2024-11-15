import { _decorator, Component, Node, Sprite, Label, ScrollView, instantiate, UITransform, Prefab, Vec3, Texture2D } from 'cc';
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { UtilMgr } from "../manager/UtilManager";
import { TaskMgr } from "./TaskManager";
import { TaskVirtualGridList } from "./TaskVirtualGridList";
import { VirtualGridList } from "../../../resources/libs/virtual_grid_list/virtual_grid_list";
import { TonGameMgr } from "../manager/TonGameManager";
import { GameEvent } from "../../framework/common/config/GameEvent";
import { TaskTabController } from "./TaskTabController";

const { ccclass, property } = _decorator;



@ccclass('TaskComponent')
export class TaskComponent extends Component {

    @property(Sprite)
    userHead: Sprite = null;

    @property(Sprite)
    defaultHead: Sprite = null;

    @property(Label)
    userNameLabel: Label = null;

    @property(Label)
    carrotCoinLabel: Label = null;

    @property(Label)
    taskLabel: Label = null;

    @property(Label)
    achievementLabel: Label = null;

    @property(TaskVirtualGridList)
    protected taskGridList: TaskVirtualGridList = null;

    @property(VirtualGridList)
    protected achievementGridList: VirtualGridList = null;

    private _taskDataList: any[] = [];
    private _achievementDataList: any[] = [];

    onAdded(params: any): boolean {
        this.defaultHead.node.active = true;
        const taskTabController = this.node.getComponentInChildren(TaskTabController);
        if (taskTabController) 
        {
            taskTabController.selectTab(0);
        }
        this.taskLabel.string = oops.language.getLangByID("stringres_115");
        this.achievementLabel.string = oops.language.getLangByID("stringres_116");
        UtilMgr.ShowUserHead(TonGameMgr.UserId, this.userHead, this.defaultHead);

        if (TonGameMgr.UserName)
        {
            this.userNameLabel.string = TonGameMgr.UserName;
        }
        else
        {
            this.userNameLabel.string = "User_"+ TonGameMgr.UserId.substring(0, 8);
        }
        
        this.carrotCoinLabel.string = TonGameMgr.CarrotCoin.toString();

        if (TaskMgr.ServerTaskList)
        {
            this.ShowTaskList();
            TaskMgr.GetTaskData();
        }
        else
        {
            TaskMgr.GetTaskData((res) => {
                if (res.userName)
                {
                    this.userNameLabel.string = res.userName;
                }
                else
                {
                    this.userNameLabel.string = "User_"+ TonGameMgr.UserId.substring(0, 8);
                }
                TonGameMgr.UserName = res.userName;
                let taskList = JSON.parse(res.mission);
                let achievementList = JSON.parse(res.achievement);
                TaskMgr.ServerTaskList = taskList;
                TaskMgr.ServerAchievementList = achievementList;
                this.ShowTaskList();
            });
        }

        oops.message.on(GameEvent.UpdateCarrotCoin, this.onUpdateData, this);
        return true;
    }

    onDestroy() {
        oops.message.off(GameEvent.UpdateCarrotCoin, this.onUpdateData, this);
    }

    private onUpdateData(event: string, args: any) {
        switch (event) {
            case GameEvent.UpdateCarrotCoin:
                this.updateCarrotCoin();
                break;
        }
    }

    private updateCarrotCoin()
    {
        this.carrotCoinLabel.string = TonGameMgr.CarrotCoin.toString();
    }

    private ShowTaskList() {
        this._taskDataList = [];
        let TaskCellList = TaskMgr.GetTaskCelllist();
        let TaskGroup = 0;
        for (const id in TaskCellList) {
            let TaskData = TaskCellList[id];
            let ServerData = JSON.parse(TaskMgr.ServerTaskList[TaskData.id]);
            TaskData.isFinished = ServerData.isFinished;
            TaskData.progress = ServerData.progress;

            if (TaskGroup != TaskData.taskgroup)
            {
                TaskGroup = TaskData.taskgroup;
                TaskData.TitleId = TaskGroup;
                let TitleData = JSON.parse(JSON.stringify(TaskData));
                this._taskDataList.push(TitleData);
            }
            TaskData.TitleId = 0;
            this._taskDataList.push(TaskData);
        }
        this.initTaskGridList();
    }

    initTaskGridList() {
        /*  paddingTop: 列表距离上边缘距离 默认为0
        paddingBottom: 列表距离下边缘距离 默认为0
        spacingX: 列间距 默认为3
        spacingY: 行间距 默认为3
        columnNum: 列数 默认为0，自动适配容器宽度
        useVirtualLayout: 是否启用虚拟列表 默认为true
        emptyTip: 没有数据显示提示
        cacheImage: 是否缓存列表中加载过的图片，控件回收后，图片缓存将被全部释放。
     */
        if (this.taskGridList) {
            this.taskGridList.clearList();
            this.taskGridList.initGridList({
                paddingTop: 10,
                paddingBottom: 10,
                spacingX: 10,
                spacingY: 5,
                columnNum: 1,
                useVirtualLayout: true,
                emptyTip: '',
                cacheImage: true
            });

            this.taskGridList.appendItemsToDisplayList(this._taskDataList);
        }
    }

    public ShowAchievementList() {
        this._achievementDataList = [];
        let AchievementCellList = TaskMgr.GetAchievementCellList();
        for (const id in AchievementCellList) {
            let AchievementData = AchievementCellList[id];
            let ServerData = JSON.parse(TaskMgr.ServerAchievementList[AchievementData.id]);
            AchievementData.isFinished = ServerData.isFinished;
            AchievementData.progress = ServerData.progress;
            this._achievementDataList.push(AchievementData);
        }
        this.initAchievementGridList();
    }

    initAchievementGridList() {
        /*  paddingTop: 列表距离上边缘距离 默认为0
        paddingBottom: 列表距离下边缘距离 默认为0
        spacingX: 列间距 默认为3
        spacingY: 行间距 默认为3
        columnNum: 列数 默认为0，自动适配容器宽度
        useVirtualLayout: 是否启用虚拟列表 默认为true
        emptyTip: 没有数据显示提示
        cacheImage: 是否缓存列表中加载过的图片，控件回收后，图片缓存将被全部释放。
     */
        if (this.achievementGridList) {
            this.achievementGridList.clearList();
            this.achievementGridList.initGridList({
                paddingTop: 10,
                paddingBottom: 10,
                spacingX: 10,
                spacingY: 5,
                columnNum: 1,
                useVirtualLayout: true,
                emptyTip: '',
                cacheImage: true
            });

            this.achievementGridList.appendItemsToDisplayList(this._achievementDataList);
        }
    }

    public onClose() {
        UtilMgr.PlaySoundEffect(19);
        oops.gui.remove(UIID.Task);
    }
}


