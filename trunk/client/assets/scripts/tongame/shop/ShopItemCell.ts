import { Animation, _decorator, Label, Sprite, Button, Widget} from 'cc';
import {IVirtualGridListItem} from "../../../resources/libs/virtual_grid_list/interface";
import { oops } from '../../../../extensions/oops-plugin-framework/assets/core/Oops';
import { TableShop } from '../../framework/common/table/TableShop';
import { TonGameMgr } from '../manager/TonGameManager';
import { ShopMgr } from './ShopManager';
import { GameEvent } from '../../framework/common/config/GameEvent';
import { UIID } from '../../framework/common/config/GameUIConfig';
import { HeChengComponent } from '../hecheng/HeChengComponent';
import { UtilMgr } from '../manager/UtilManager';
import { PaymentMgr } from '../payment/PaymentManager';
const { ccclass, property } = _decorator;

@ccclass('ShopItemCell')
export class ShopItemCell extends IVirtualGridListItem {
    @property(Label)
    RabbitName: Label;
    @property(Sprite)
    RabbitIcon: Sprite;
    @property(Label)
    ShowTxt: Label;
    @property(Label)
    AdditionEffectTxt: Label;
    @property(Widget)
    LockWnd: Widget;
    @property(Sprite)
    CostCarrotIcon: Sprite;
    @property(Sprite)
    CostRabbitIcon: Sprite;
    @property(Label)
    PriceTxt: Label;
    @property(Sprite)
    TuijianIcon: Sprite;

    @property(Button)
    BuyBtn: Button;
    @property(Button)
    ChangeBtn: Button;
    @property(Label)
    ChangeBtnTxt: Label;
    @property(Label)
    InUseTxt: Label;

    private curconfigid : number = null;
    private tablerecord = new TableShop();
    private state : boolean = true;
    private animCtrl:any = {};
    private animation:string = null;

    /** 点击触发选择事件 */
    onSelect() {
        console.log('select _' + this.itemIndex);

        this.updateSelectionStatus();
    }

    onUnselect() {
        console.log('unselect _' + this.itemIndex);

        this.updateSelectionStatus();
    }

    onDataChanged() {
        const data = this.data;
        this.tablerecord.init(data.configid);
        if (!this.tablerecord) {
            return;
        }

        // 兔子名称
        this.RabbitName.string = oops.language.getLangByID(this.tablerecord.name);
        // 兔子造型图标
        this.animCtrl = this.RabbitIcon.getComponent(Animation);
        if (this.animation == null || this.curconfigid == null || this.curconfigid != data.configid) {
            this.curconfigid = data.configid;
            this.animation = ShopMgr.GetRandomAnimation(data.configid)
        }
        UtilMgr.addNodeAnimation(this.animation, this.RabbitIcon.node, true, true);

        // 加成收益
        this.ShowTxt.string = oops.language.getLangByID("stringres_197");
        this.AdditionEffectTxt.string = this.tablerecord.effect.toString() + "%";

        // 锁头图标
        if (this.tablerecord.unlocktype == 1) {     
            this.state = (TonGameMgr.CanTingLevel < this.tablerecord.unlockpara)
        }
        else if (this.tablerecord.unlocktype == 2) {
            this.state = (TonGameMgr.TuZiCoin < this.tablerecord.unlockpara);
        } 
        else if (this.tablerecord.unlocktype == 3) {
            this.state = (TonGameMgr.CarrotCoin < this.tablerecord.unlockpara);
        }
        this.LockWnd.node.active = this.state;

        // 按钮显示
        this.BuyBtn.node.active = (ShopMgr.IsHaveRabbitId(data.configid) == false);
        this.ChangeBtn.node.active = (ShopMgr.IsHaveRabbitId(data.configid) && TonGameMgr.CurRabbitId != data.configid);
        this.ChangeBtnTxt.string = oops.language.getLangByID("stringres_195");
        this.InUseTxt.string = oops.language.getLangByID("stringres_196");
        this.InUseTxt.node.active = (TonGameMgr.CurRabbitId == data.configid)

        // 货币图标
        this.CostCarrotIcon.node.active = (this.tablerecord.paytype == 2);
        this.CostRabbitIcon.node.active = (this.tablerecord.paytype == 1);

        // 价格
        if (this.tablerecord.paytype == 1)
        {
            this.PriceTxt.string = UtilMgr.formatNumber(BigInt(this.tablerecord.price));
        }
        else
        {
            this.PriceTxt.string = this.tablerecord.price.toString();
        }

        // 推荐按钮显示
        this.TuijianIcon.node.active = (ShopMgr.IsHaveRabbitId(data.configid) == false && this.state == false);

        this.updateSelectionStatus();
    }

    updateSelectionStatus() {

    }

    onDestroy() {
        super.onDestroy();
    }

    public onBuyBtnClick() {
        if (this.state == true) {
            oops.gui.toast(this.tablerecord.message, true);
            return;
        }
        if (this.tablerecord.paytype == 1) {    // 兔子币支付
            if (TonGameMgr.TuZiCoin < this.tablerecord.price) {
                oops.gui.toast("message_10", true);
                return;
            }
            ShopMgr.SendBuyRabbit(this.data.configid);
        }
        else {     // 萝卜币支付 
            if (TonGameMgr.CarrotCoin < this.tablerecord.price) {
                PaymentMgr.OpenPaymentUI();
                oops.gui.toast("message_07", true);
                return;
            }
            ShopMgr.SendBuyRabbit(this.data.configid);
        }
    }

    public onChangeBtnClick() {
        UtilMgr.PlaySoundEffect(18);
        oops.gui.toast("message_29", true);
        TonGameMgr.CurRabbitId = this.data.configid;
        TonGameMgr.CurRabbitAnimation = ShopMgr.GetRandomAnimation(this.data.configid);
        const HechengGUI = oops.gui.get(UIID.MainUI);
        if (HechengGUI) {
            const HechengCom = HechengGUI.getComponent(HeChengComponent);
            if (HechengCom) {
                HechengCom.RefreshRabbitIcon();
            }
        }
        oops.message.dispatchEvent(GameEvent.OnShopListChange);
    }
}


