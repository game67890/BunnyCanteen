import { _decorator, Component, Node, Label, Sprite, Toggle, ProgressBar } from 'cc';
import { oops } from '../../../../extensions/oops-plugin-framework/assets/core/Oops';
import { UIID } from '../../framework/common/config/GameUIConfig';
import { GameEvent } from '../../framework/common/config/GameEvent';
import { TonGameMgr } from '../manager/TonGameManager';
import { AcceleratedBuffMgr } from './AcceleratedBuffManager';
import { TableAccelerate } from '../../framework/common/table/TableAccelerate';
import { TonTimerMgr } from '../manager/TonTimerManager';
import { Button } from 'cc';
import { Animation } from 'cc';
import { PaymentMgr } from '../payment/PaymentManager';
import { UtilMgr } from '../manager/UtilManager';
const { ccclass, property } = _decorator;

@ccclass('AcceleratedBuffMain')
export class AcceleratedBuffMain extends Component {
    @property(Label)
    TitleName : Label;
    @property(Label)
    CarrotCoinNum : Label;
    @property(Sprite)
    AccelerateIcon : Sprite;
    @property(Label)
    CurGain : Label;            // 当前收益
    @property(Label)
    CurGainRate : Label;        // 当前加速倍率
    @property(Label)
    LastAccelerateTime : Label; // 当前加速buff剩余时间
    @property(ProgressBar)
    LastSlider : ProgressBar; // 当前加速buff剩余时间进度

    @property(Button)
    FreeButton : Button;  
    @property(Button)
    ShareButton : Button; 
    
    @property(Label)
    FreeTxt : Label;  
    @property(Label)
    ShareTxt : Label;  

    @property(Label)
    Showtxt1 : Label;  
    @property(Label)
    Showtxt2 : Label;  
    @property(Label)
    Showtxt3 : Label;  

    @property(Label)
    BuyNum : Label;  

    private tablerecord = new TableAccelerate();
    private ticktime : number = 0;
    private animCtrl:any = {};

    update(deltaTime: number) {
        this.ticktime = this.ticktime + deltaTime;
        if (this.ticktime < 1) {
            return;
        }
        this.ticktime = 0;

        this.updateShowTimer();
    }

    onAdded(params: any): boolean {
        this.init();
        this.addEvent();
        return true;
    }

    private init() {
        this.TitleName.string = oops.language.getLangByID("stringres_181");
        this.FreeTxt.string = oops.language.getLangByID("stringres_182");
        this.ShareTxt.string = oops.language.getLangByID("stringres_194");
        this.updateBaseData();
        this.RefreshBuffIcon();
        this.tablerecord.init(3);
        this.BuyNum.string = this.tablerecord.costnum.toString();
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
        this.CarrotCoinNum.string = TonGameMgr.CarrotCoin.toString();
        this.CurGain.string = TonGameMgr.GetRealCanTingGain().toString() + "/s";
        this.CurGainRate.string = "+" + (TonGameMgr.AcceAddtionGain_1*100).toString() + "%";
        this.updateShowTimer();
        this.refreshShowTxt();
    }

    private updateCarrotCoin()
    {
        this.CarrotCoinNum.string = TonGameMgr.CarrotCoin.toString();
    }

    public updateShowTimer() {
        if (AcceleratedBuffMgr.IsGetFreeBuff) {
            if (AcceleratedBuffMgr.GetFreeBuffTimeStamp > 0) {
                let date = oops.timer.getServerDate();
                let lasttime = 24*60*60-(date.getHours()*60*60+date.getMinutes()*60+date.getSeconds());
                this.Showtxt1.string = TonTimerMgr.TimeToString(lasttime);
                if (lasttime <= 0) {
                    AcceleratedBuffMgr.IsGetFreeBuff = false;
                    AcceleratedBuffMgr.GetFreeBuffTimeStamp = 0;
                    this.tablerecord.init(1);
                    this.Showtxt1.string = (this.tablerecord.time/60).toString()+"min";
                    this.FreeButton.interactable = true;
                    this.FreeButton.getComponent(Sprite).grayscale = false
                }
            }
        }

        if (AcceleratedBuffMgr.IsGetShareBuff) {
            if (AcceleratedBuffMgr.GetShareBuffTimeStamp > 0) {
                let date = oops.timer.getServerDate();
                let lasttime = 24*60*60-(date.getHours()*60*60+date.getMinutes()*60+date.getSeconds());
                this.Showtxt2.string = TonTimerMgr.TimeToString(lasttime);
                if (lasttime <= 0 ) {
                    AcceleratedBuffMgr.IsGetShareBuff = false;
                    AcceleratedBuffMgr.GetShareBuffTimeStamp = 0;
                    this.tablerecord.init(2);
                    this.Showtxt2.string = (this.tablerecord.time/60).toString()+"min";
                    this.ShareButton.interactable = true;
                    this.ShareButton.getComponent(Sprite).grayscale = false
                }
            }
        }

        let acceleratetime = AcceleratedBuffMgr.AccelerateTime;
        if (acceleratetime > 0) {
            this.LastAccelerateTime.node.active = true;
            this.LastAccelerateTime.string = TonTimerMgr.TimeToString(acceleratetime);
            if (acceleratetime < 30*60) {
                this.LastSlider.progress = 2/100;
            } else {
                this.LastSlider.progress = acceleratetime/(24*60*60);
            }
            
        }
        else {
            this.LastAccelerateTime.node.active = false;
            this.LastSlider.progress = 0;
        }
    }

    pad(num: number) {
        return num < 10 ? '0' + num : num.toString();
    }

    private refreshShowTxt() {
        if (AcceleratedBuffMgr.IsGetFreeBuff) {
            this.FreeButton.getComponent(Sprite).grayscale = true
            this.FreeButton.interactable = false;
        }
        else {
            this.FreeButton.getComponent(Sprite).grayscale = false
            this.FreeButton.interactable = true;
            this.tablerecord.init(1);
            this.Showtxt1.string = (this.tablerecord.time/60).toString()+"min";
        }

        if (AcceleratedBuffMgr.IsGetShareBuff) {
            this.ShareButton.getComponent(Sprite).grayscale = true
            this.ShareButton.interactable = false;
        }
        else {
            this.ShareButton.getComponent(Sprite).grayscale = false
            this.ShareButton.interactable = true;
            this.tablerecord.init(2);
            this.Showtxt2.string = (this.tablerecord.time/60).toString()+"min";
        }

        this.tablerecord.init(3);
        this.Showtxt3.string = (this.tablerecord.time/60).toString()+"min";
    }

    public RefreshBuffIcon() {
        if (AcceleratedBuffMgr.isAccelerating()) {
            this.animCtrl = this.AccelerateIcon.getComponent(Animation);
            if (!this.animCtrl || !this.animCtrl.defaultClip || !this.animCtrl.getState(this.animCtrl.defaultClip.name) || !this.animCtrl.getState(this.animCtrl.defaultClip.name).isPlaying) {
                UtilMgr.addNodeAnimation("animation/jiasu", this.AccelerateIcon.node, true, true);
            }
        }
        else {
            let animCtrl = this.AccelerateIcon.getComponent(Animation);
            if (animCtrl) {
                animCtrl.stop();
            }
        }
    }

    public onCloseBtnClick() {
        UtilMgr.PlaySoundEffect(19);
        oops.gui.remove(UIID.AcceleratedBuffBuyMain);
    }

    public onAddBtnClick() {
        UtilMgr.PlaySoundEffect(18);
        PaymentMgr.OpenPaymentUI();
    }

    // 点击免费领取按钮
    public onFreeBtnClick() {
        UtilMgr.PlaySoundEffect(18);
        if (AcceleratedBuffMgr.IsGetFreeBuff) {
            return;
        }

        AcceleratedBuffMgr.SendBuyBuff(1);
    }

    // 点击分享按钮
    public onShareBtnClick() {
        UtilMgr.PlaySoundEffect(18);
        if (AcceleratedBuffMgr.IsGetShareBuff) {
            return;
        }

        UtilMgr.share();
        AcceleratedBuffMgr.SendBuyBuff(2);
    }

    // 点击萝卜币购买按钮
    public onBuyBtnClick() {
        UtilMgr.PlaySoundEffect(18);
        this.tablerecord.init(3); 
        if (this.tablerecord.costnum > TonGameMgr.CarrotCoin) {
            oops.gui.toast("message_13", true);     // 萝卜币不足！
            return;
        }

        AcceleratedBuffMgr.SendBuyBuff(3);
    } 
}
