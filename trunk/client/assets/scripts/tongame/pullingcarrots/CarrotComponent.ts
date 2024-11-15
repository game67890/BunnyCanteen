import { Animation, AnimationClip, _decorator, Component, Node, Sprite, Label } from 'cc';
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { GameEvent } from "../../framework/common/config/GameEvent";
import { TonGameMgr } from "../manager/TonGameManager";
import { StringUtil } from "../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil";
import { Button } from 'cc';
import { Widget } from 'cc';
import { CarrotMgr } from './CarrotManager';
import { TableOtherParameter } from '../../framework/common/table/TableOtherParameter';
import { color } from 'cc';
import { ShopMgr } from '../shop/ShopManager';
import { PaymentMgr } from '../payment/PaymentManager';
import { UtilMgr } from '../manager/UtilManager';
import { AcceleratedBuffMgr } from '../acceleratedbuff/AcceleratedBuffManager';
const { ccclass, property } = _decorator;

@ccclass('CarrotComponent')
export class CarrotComponent extends Component {

    @property(Button)
    CloseBtn: Button;
    @property(Button)
    TipsBtn: Button;
    @property(Label)
    RankTxt: Label;
    @property(Button)
    RankBtn: Button;
    @property(Label)
    RabbitCoinNum: Label;

    @property(Widget)
    ShovelIcon: Widget;
    // CarrotIcon: Widget;

    @property(Label)
    CarrotCoinNum: Label;
    @property(Label)
    NeedCarrotCoinNum: Label;
    @property(Button)
    AddBtn: Button;
    @property(Button)
    StartBtn: Button;
    @property(Label)
    StartBtnTxt: Label;
    @property(Button)
    AutoBtn: Button;

    private ispulling:boolean = false;
    private _updateTimer = 0;
    private animationtime = 5.9;
    private tablereward = new TableOtherParameter();
    private neednum: number = 0;
    private animCtrl:any = {};

    start() {

    }

    update(deltaTime: number) {
        if (this.ispulling) {
            this._updateTimer += deltaTime;
            if (this._updateTimer >= this.animationtime) {
                if (CarrotMgr.LeftTimes > 0) {
                    CarrotMgr.LeftTimes = CarrotMgr.LeftTimes - 1
                }
                UtilMgr.StopSoundEffect();
                this._updateTimer = 0;
                this.ispulling = false;
                CarrotMgr.SendBaLuoBo(1);
            }
        }
    }

    onAdded(params: any): boolean {
        UtilMgr.StopBgMusic();
        UtilMgr.PlayBgMusic(24);
        this.init();
        this.addEvent();
        return true;
    }

    private init() {
        this.StartBtnTxt.string = oops.language.getLangByID("stringres_178");
        this.tablereward.init(1);
        this.neednum = Number(this.tablereward.parameter);
        this.NeedCarrotCoinNum.string = "/" + this.neednum.toString();
        this.animCtrl = this.ShovelIcon.getComponent(Animation);
        this.updateBaseData();
        this.updateTuziCoin();
        
    }

    onDestroy() {
        this.removeEvent();
    }

    /** 添加全局消息事件 */
    private addEvent() {
        oops.message.on(GameEvent.UpdateBaseData, this.onUpdateData, this);
        oops.message.on(GameEvent.OnMyRankChange, this.onUpdateData, this);
        oops.message.on(GameEvent.UpdateTuziCoin, this.onUpdateData, this);
        oops.message.on(GameEvent.UpdateCarrotCoin, this.onUpdateData, this);

    }

    /** 移除全局消息事件 */
    private removeEvent() {
        oops.message.off(GameEvent.UpdateBaseData, this.onUpdateData, this);
        oops.message.off(GameEvent.OnMyRankChange, this.onUpdateData, this);
        oops.message.off(GameEvent.UpdateTuziCoin, this.onUpdateData, this);
        oops.message.off(GameEvent.UpdateCarrotCoin, this.onUpdateData, this);
    }

    private onUpdateData(event: string, args: any) {
        switch (event) {
            case GameEvent.UpdateBaseData:
                this.updateBaseData();
                break;
            case GameEvent.OnMyRankChange:
                this.updateBaseData();
                break;
            case GameEvent.UpdateTuziCoin:
                this.updateTuziCoin();
                break;
            case GameEvent.UpdateCarrotCoin:
                this.updateCarrotCoin();
                break;
        }
    }

    private updateBaseData() {

        this.CarrotCoinNum.string = TonGameMgr.CarrotCoin.toString();
        if (TonGameMgr.CarrotCoin >= this.neednum) {
            this.CarrotCoinNum.color = color(85, 5, 5);
        }
        else {
            this.CarrotCoinNum.color = color(255, 0, 0);
        }
        if (CarrotMgr.CurrentCarrotRank > 0)
        {
            this.RankTxt.string = StringUtil.substitute_1(oops.language.getLangByID("stringres_026"), CarrotMgr.CurrentCarrotRank, CarrotMgr.CurrentCarrotWeight.toString()+"kg");
        }
        else
        {
            this.RankTxt.string = oops.language.getLangByID("stringres_021");
        } 
    }

    private updateTuziCoin()
    {
        this.RabbitCoinNum.string = UtilMgr.formatNumber(TonGameMgr.TuZiCoin);
    }

    private updateCarrotCoin()
    {
        this.CarrotCoinNum.string = TonGameMgr.CarrotCoin.toString();
    }

    // 点击关闭按钮
    public onCloseBtnVlick() {
        UtilMgr.PlaySoundEffect(19);
        UtilMgr.StopBgMusic();
        if (AcceleratedBuffMgr.isAccelerating()) {
            UtilMgr.PlayBgMusic(23);
        } else {
            UtilMgr.PlayBgMusic(22);
        }
        oops.gui.remove(UIID.CarrotMain);
    }

    // 点击tips按钮
    public onTipsBtnClick() {
        UtilMgr.PlaySoundEffect(18);
        oops.gui.open(UIID.CarrotTips, 1);
    }

    // 点击排行榜按钮
    public onRankBtnClick() {
        UtilMgr.PlaySoundEffect(18);
        CarrotMgr.SendOpenRankPanel()
    }

    // 点击GM按钮
    public onGMBtnClick() {
        ShopMgr.SendAddCarrotCoin(500);
    }

    // 点击自动按钮
    public onAutoBtnClick() {
        UtilMgr.PlaySoundEffect(18);
        oops.gui.open(UIID.CarrotAuto);
    }

    // 点击开始按钮
    public onStartBtnClick() {
        if (TonGameMgr.CarrotCoin < this.neednum) {
            // 当前萝卜币数量不足
            oops.gui.toast("message_07", true);
            return;
        }

        CarrotMgr.LeftTimes = 1;
        this.StartPulling();
    }

    // 点击加号按钮
    public onAddBtnClick() {
        UtilMgr.PlaySoundEffect(18);
        PaymentMgr.OpenPaymentUI();
    }

    public StartPulling() {
        if (CarrotMgr.LeftTimes > 0 && this.ispulling == false) {
            this.ispulling = true;
            UtilMgr.PlaySoundEffect(1);
            UtilMgr.addNodeAnimation("animation/baluobo", this.ShovelIcon.node)

            this.animCtrl = this.ShovelIcon.getComponent(Animation);
            if (this.animCtrl) {
                this.animationtime = this.animCtrl.defaultClip.duration/this.animCtrl.defaultClip.speed;
            }
        }
    }
}


