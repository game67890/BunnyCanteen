import {_decorator, Label, Sprite, math, SpriteFrame, Node} from 'cc';
import {IVirtualGridListItem} from "../../../resources/libs/virtual_grid_list/interface";
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { UtilMgr } from "../manager/UtilManager";
import { ProtocolMgr } from "../manager/ProtocolManager";
import { TaskMgr } from "../task/TaskManager";
import { HttpReturn } from "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest";

const {ccclass, property} = _decorator;

@ccclass('AchievementItemListItem')
export class AchievementItemListItem extends IVirtualGridListItem {
    @property(Label)
    jiangli: Label = null;

    @property(Label)
    miaoshu: Label = null;

    @property(Sprite)
    iconBack: Sprite = null;
    @property(Sprite)
    icon: Sprite = null;
    @property(Sprite)
    geted: Sprite = null;

    @property(Sprite)
    redPoint: Sprite = null;

    onDataChanged() {
        const data = this.data;
        this.jiangli.string = data.num.toString();
        this.miaoshu.string = oops.language.getLangByID(data.tips);

        if (data.isFinished)
        {
            this.iconBack.grayscale = true;
            this.icon.grayscale = true;
            this.geted.node.active = true;
            this.redPoint.node.active = false;
        }
        else
        {
            this.iconBack.grayscale = false;
            this.icon.grayscale = false;
            this.geted.node.active = false;
            if (TaskMgr.canGetAchievementReward(data.id))
            {
                this.redPoint.node.active = true;
            }
            else
            {
                this.redPoint.node.active = false;
            }
        }
        UtilMgr.SetImage(this.icon, data.icon);
    }

    onSelect() {
        UtilMgr.PlaySoundEffect(18);
        if (!this.data.isFinished)
        {
            const data: { [key: string]: any } = {};
            data.achievementID = this.data.id;
            const param = JSON.stringify(data);
            var completeAchievement = (ret: HttpReturn) => {
                if (ret.isSucc && ret.res.result)
                {
                    this.iconBack.grayscale = true;
                    this.icon.grayscale = true;
                    this.geted.node.active = true;
                    this.redPoint.node.active = false;
                    TaskMgr.modifyAchievementData(this.data.id, true);

                    let params: any = {};
                    params.id = this.data.id;
                    oops.gui.open(UIID.TaskTips, params);
                }
            }
            ProtocolMgr.sendFinishAchievement(completeAchievement, param);
        }
    }

    onDestroy() {
        super.onDestroy();
    }
}
