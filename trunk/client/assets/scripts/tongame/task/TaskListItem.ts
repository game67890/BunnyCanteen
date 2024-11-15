import {_decorator, Label, Sprite, math, SpriteFrame, Node, Button} from 'cc';
import {IVirtualGridListItem} from "../../../resources/libs/virtual_grid_list/interface";
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UtilMgr } from "../manager/UtilManager";
import { PaymentMgr } from '../payment/PaymentManager';
import { ProtocolMgr } from "../manager/ProtocolManager";
import { TaskMgr } from "../task/TaskManager";
import { HttpReturn } from "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest";


const {ccclass, property} = _decorator;

@ccclass('TaskListItem')
export class TaskListItem extends IVirtualGridListItem {

    @property(Sprite)
    taskIcon: Sprite = null;

    @property(Label)
    taskName: Label = null;

    @property(Label)
    jiangliNum: Label = null;

    @property(Button)
    goBtn: Button = null;

    @property(Label)
    goBtnLabel: Label = null;

    @property(Sprite)
    doneImg: Sprite = null;


    onDataChanged() {
        const data = this.data;
        UtilMgr.SetImage(this.taskIcon, data.taskicon);
        this.taskName.string = oops.language.getLangByID(data.tasktips);
        this.goBtnLabel.string = oops.language.getLangByID("stringres_204");

        this.jiangliNum.string = data.carrotcoinnum.toString();

        if (data.isFinished)
        {
            this.goBtn.node.active = false;
            this.doneImg.node.active = true;
        }
        else
        {
            this.goBtn.node.active = true;
            this.doneImg.node.active = false;
        }
    }

    onClickGo() {
        UtilMgr.PlaySoundEffect(18);
        console.log("onClickGo id=" + this.data.id);
        if (this.data.tasktype == 1)
        {//加入官方通知频道
            UtilMgr.joinChannel();
            const dataParam: { [key: string]: any } = {};
            dataParam.missionType = this.data.tasktype;
            const param = JSON.stringify(dataParam);
            var completeMission = (ret: HttpReturn) => {
                if (ret.isSucc && ret.res.result)
                {
                    this.goBtn.node.active = false;
                    this.doneImg.node.active = true;
                    TaskMgr.modifyTaskData(this.data.id, true);
                }
            }
            ProtocolMgr.sendUpdateMission(completeMission, param);
        }
        else if (this.data.tasktype == 2)
        {//使用官方bot
            UtilMgr.openBot();
            const dataParam: { [key: string]: any } = {};
            dataParam.missionType = this.data.tasktype;
            const param = JSON.stringify(dataParam);
            var completeMission = (ret: HttpReturn) => {
                if (ret.isSucc && ret.res.result)
                {
                    this.goBtn.node.active = false;
                    this.doneImg.node.active = true;
                    TaskMgr.modifyTaskData(this.data.id, true);
                }
            }
            ProtocolMgr.sendUpdateMission(completeMission, param);
        }
        else if (this.data.tasktype == 3)
        {//浏览官方频道
            UtilMgr.joinChannel();
            const dataParam: { [key: string]: any } = {};
            dataParam.missionType = this.data.tasktype;
            const param = JSON.stringify(dataParam);
            var completeMission = (ret: HttpReturn) => {
                if (ret.isSucc && ret.res.result)
                {
                    this.goBtn.node.active = false;
                    this.doneImg.node.active = true;
                    TaskMgr.modifyTaskData(this.data.id, true);
                }
            }
            ProtocolMgr.sendUpdateMission(completeMission, param);
        }
        else if (this.data.tasktype == 4)
        {//日常签到
    
        }
        else if (this.data.tasktype == 5)
        {//日常充值
            PaymentMgr.OpenPaymentUI();
        }
    }

    onDestroy() {
        super.onDestroy();
    }
}
