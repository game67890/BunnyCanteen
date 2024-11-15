import {_decorator, Label, Sprite, math, SpriteFrame, Node} from 'cc';
import {IVirtualGridListItem} from "../../../resources/libs/virtual_grid_list/interface";
import { TaskMgr } from "./TaskManager";
import { AchievementItemVirtualGridList } from "./AchievementItemVirtualGridList";
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UtilMgr } from "../manager/UtilManager";
import { TonGameMgr } from '../manager/TonGameManager';

const {ccclass, property} = _decorator;

@ccclass('AchievementListItem')
export class AchievementListItem extends IVirtualGridListItem {
    @property(Sprite)
    achievementIcon: Sprite = null;

    @property(Label)
    achievementName: Label = null;

    @property(Label)
    achievementTips: Label = null;

    @property(Label)
    jindu: Label = null;

    @property(Label)
    jinduCoin: Label = null;
    @property(Sprite)
    jinduCoinImage: Sprite = null;

    @property(AchievementItemVirtualGridList)
    protected achievementItemGridList: AchievementItemVirtualGridList = null;

    private _achievementItemDataList: any[] = [];

    private ShowAchievementItemList(AchievementType: number) {
        let AchievementCellList = TaskMgr.GetAchievementItemCellList(AchievementType);
        for (const id in AchievementCellList) {
            let AchievementData = AchievementCellList[id];
            let ServerData = JSON.parse(TaskMgr.ServerAchievementList[AchievementData.id]);
            AchievementData.isFinished = ServerData.isFinished;
            AchievementData.progress = ServerData.progress;
            this._achievementItemDataList.push(AchievementData);
        }

        this.initAchievementItemGridList();
    }

    initAchievementItemGridList() {
        /*  paddingTop: 列表距离上边缘距离 默认为0
        paddingBottom: 列表距离下边缘距离 默认为0
        spacingX: 列间距 默认为3
        spacingY: 行间距 默认为3
        columnNum: 列数 默认为0，自动适配容器宽度
        useVirtualLayout: 是否启用虚拟列表 默认为true
        emptyTip: 没有数据显示提示
        cacheImage: 是否缓存列表中加载过的图片，控件回收后，图片缓存将被全部释放。
     */
        if (this.achievementItemGridList) {
            this.achievementItemGridList.clearList();
            this.achievementItemGridList.initGridList({
                paddingTop: 10,
                paddingBottom: 10,
                spacingX: 10,
                spacingY: 5,
                columnNum: 1,
                useVirtualLayout: true,
                emptyTip: '',
                cacheImage: true
            });

            this.achievementItemGridList.appendItemsToDisplayList(this._achievementItemDataList);
        }
    }

    public updateItem(data: any, itemIndex: number): void {
        this._itemIndex = itemIndex;
        this._data = data;

        UtilMgr.SetImage(this.achievementIcon, data.achieveicon);
        this.achievementName.string = oops.language.getLangByID(this._data.achievename);
        this.achievementTips.string = oops.language.getLangByID(this._data.achievetips);
        let progress = this.data.progress;
        if (this._data.achievetype == 4)
        {//兔子币
            this.jinduCoin.node.active = true;
            this.jinduCoinImage.node.active = true;
            UtilMgr.SetImage(this.jinduCoinImage, "textures/UI/main/main;tuzibi");
            this.jindu.node.active = false;
            progress = TonGameMgr.GetRealCanTingGain();
        }
        else if (this._data.achievetype == 5)
        {//萝卜币
            this.jinduCoin.node.active = true;
            this.jinduCoinImage.node.active = true;
            UtilMgr.SetImage(this.jinduCoinImage, "textures/UI/main/main;luobobi");
            this.jindu.node.active = false;
        }
        else
        {
            this.jinduCoin.node.active = false;
            this.jinduCoinImage.node.active = false;
            this.jindu.node.active = true;
        }
        this.jindu.string = progress.toString();
        this.jinduCoin.string = progress.toString();

        this.achievementItemGridList.clearList();
        this.ShowAchievementItemList(this._data.achievetype);
    }

    onDestroy() {
        super.onDestroy();
    }
}
