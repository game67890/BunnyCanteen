import { _decorator, Component, Node, Label, Prefab, instantiate, Vec3, UITransform } from 'cc';
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { GameEvent } from "../../framework/common/config/GameEvent";
import { TonGameMgr, AutoTypeEnum } from "../manager/TonGameManager";
import { StringUtil } from "../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil";
import { Button } from 'cc';
import { CarrotMgr } from './CarrotManager';
import { Slider } from 'cc';
import { Toggle } from 'cc';
import { CarrotComponent } from './CarrotComponent';
import { TableOtherParameter } from "../../framework/common/table/TableOtherParameter";
import { color } from 'cc';
import { UtilMgr } from '../manager/UtilManager';

const { ccclass, property } = _decorator;

@ccclass('CarrotAutoComponent')
export class CarrotAutoComponent extends Component {
    @property(Button)
    CloseBtn: Button;
    @property(Label)
    TitleName: Label;
    @property(Label)
    JumpTxt: Label;
    @property(Button)
    SubBtn: Button;
    @property(Button)
    AddBtn: Button;
    @property(Label)
    PullTimes: Label;
    @property(Slider)
    PullSlider: Slider;
    @property(Toggle)
    CheckBox: Toggle;
    @property(Label)
    CostCarrotCoinNum: Label;
    @property(Label)
    NeedCostCarrotCoinNum: Label;
    @property(Button)
    StartBtn: Button;
    @property(Label)
    StartBtnTxt: Label;
    private tablereward = new TableOtherParameter();
    private neednum: number = 0;

    private _curPullTimes:number = 0;  //次数

    onAdded(params: any): boolean {
        this.init();
        return true;
    }

    onDestroy() {
        this.removeEvent();
    }

    /** 添加全局消息事件 */
    private addEvent() {
        oops.message.on(GameEvent.UpdateBaseData, this.onUpdateData, this);
        oops.message.on(GameEvent.UpdateCarrotCoin, this.onUpdateData, this);
    }

    /** 移除全局消息事件 */
    private removeEvent() {
        oops.message.off(GameEvent.UpdateBaseData, this.onUpdateData, this);
        oops.message.off(GameEvent.UpdateCarrotCoin, this.onUpdateData, this);
    }

    private onUpdateData(event: string, args: any) {
        switch (event) {
            case GameEvent.UpdateBaseData:
                this.updateBaseData();
                break;
            case GameEvent.UpdateCarrotCoin:
                this.updateCarrotCoin();
                break;
        }
    }

    private updateBaseData() {
        this.CostCarrotCoinNum.string = TonGameMgr.CarrotCoin.toString();
        this.NeedCostCarrotCoinNum.string = "/" + (this.neednum*this._curPullTimes).toString();
        if (TonGameMgr.CarrotCoin >= this.neednum*this._curPullTimes) {
            this.CostCarrotCoinNum.color = color(85, 5, 5);
        }
        else {
            this.CostCarrotCoinNum.color = color(255, 0, 0);
        }
    }

    private updateCarrotCoin()
    {
        this.CostCarrotCoinNum.string = TonGameMgr.CarrotCoin.toString();
    }

    public init() {
        this.TitleName.string = oops.language.getLangByID("stringres_035");
        this.JumpTxt.string = oops.language.getLangByID("stringres_037");
        this.StartBtnTxt.string = oops.language.getLangByID("stringres_178");
        this.tablereward.init(1);
        this.neednum = Number(this.tablereward.parameter)
        this._curPullTimes = 0;
        this.PullSlider.progress = 0;
        this.CheckBox.isChecked = false;
        this.addEvent();
        this.RefreshShowInfo();
    }

    // 点击关闭按钮
    public onCloseBtnClick() {
        UtilMgr.PlaySoundEffect(19);
        oops.gui.remove(UIID.CarrotAuto);
    }

    // 点击开始按钮
    public onStartBtnClick() {
        CarrotMgr.LeftTimes = this._curPullTimes;
        oops.gui.remove(UIID.CarrotAuto);
        CarrotMgr.IsJumpAnim = this.CheckBox.isChecked;
        if (CarrotMgr.LeftTimes <= 0) {
            return;
        }

        if (this.CheckBox.isChecked) {
            CarrotMgr.SendBaLuoBo(CarrotMgr.LeftTimes);
            CarrotMgr.LeftTimes = 0;
        }
        else {
            const CarrotMainUI = oops.gui.get(UIID.CarrotMain);
            if (CarrotMainUI) {
                const CarrotMainCom = CarrotMainUI.getComponent(CarrotComponent);
                if (CarrotMainCom) {
                    CarrotMainCom.StartPulling();
                }
            }
        }
    }

    // 点击加号按钮
    public onAddBtnClick() {
        UtilMgr.PlaySoundEffect(18);
        if ((TonGameMgr.CarrotCoin - this.neednum * this._curPullTimes) < this.neednum) {
            // 当前萝卜币数量不足
            oops.gui.toast("message_07", true);
            return;
        }
        this._curPullTimes = this._curPullTimes + 1;
        this.RefreshShowInfo();
    }

    // 点击减号按钮
    public onSubBtnClick() {
        UtilMgr.PlaySoundEffect(18);
        if (this._curPullTimes <= 0)
        {
            return;
        }
        this._curPullTimes = this._curPullTimes - 1;
        this.RefreshShowInfo();
    }

    public ChangeSlider() {
        let maxnum = Math.floor(TonGameMgr.CarrotCoin/this.neednum);
        // let maxnum = 10;
        if (maxnum <= 0) {
            this._curPullTimes = 0;
			this.RefreshShowInfo();
            return;
        }

        for (let i=0; i<maxnum; i++) {
            if (i/maxnum <= this.PullSlider.progress && (i+1)/maxnum > this.PullSlider.progress) {
                if ((this.PullSlider.progress-i/maxnum) < ((i+1)/maxnum-this.PullSlider.progress)) {
                    this._curPullTimes = i;
                }
                else {
                    this._curPullTimes = i+1;
                }
                break;
            }
        }

        this.RefreshShowInfo();
    }

    // 刷新次数进度以及花费兔子比显示
    public RefreshShowInfo() {
        this.PullTimes.string = StringUtil.substitute_1(oops.language.getLangByID("stringres_036"), this._curPullTimes);
        this.CostCarrotCoinNum.string = TonGameMgr.CarrotCoin.toString();
        this.NeedCostCarrotCoinNum.string = "/" + (this.neednum*this._curPullTimes).toString();
        if (TonGameMgr.CarrotCoin >= this.neednum*this._curPullTimes) {
            this.CostCarrotCoinNum.color = color(85, 5, 5);
        }
        else {
            this.CostCarrotCoinNum.color = color(255, 0, 0);
        }
        if (this._curPullTimes <= 0) {
            this.PullSlider.progress = 0;
        }
        else {
            this.PullSlider.progress = this._curPullTimes/Math.floor(TonGameMgr.CarrotCoin/this.neednum);
            // this.PullSlider.progress = this._curPullTimes/10;
        }
    }

    // 点击Checkbox按钮
    public onCheckboxClick() {
        if (this.CheckBox.isChecked == false) {
            this.CheckBox.isChecked = true;
        }
        else {
            this.CheckBox.isChecked = false;
        }
    }
}


