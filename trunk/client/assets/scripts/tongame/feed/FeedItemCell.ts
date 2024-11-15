import {_decorator, Label, Sprite, Button, Widget} from 'cc';
import {IVirtualGridListItem} from "../../../resources/libs/virtual_grid_list/interface";
import { TableIngredients } from '../../framework/common/table/TableIngredients';
import { UtilMgr } from '../manager/UtilManager';
import { FeedMgr } from './FeedManager';
import { BoardMgr } from '../manager/BoardManager';
import { oops } from '../../../../extensions/oops-plugin-framework/assets/core/Oops';
import { TonGameMgr } from '../manager/TonGameManager';
import { PaymentMgr } from '../payment/PaymentManager';
import { GameEvent } from '../../framework/common/config/GameEvent';
import { UIID } from '../../framework/common/config/GameUIConfig';
import { HeChengComponent } from '../hecheng/HeChengComponent';
import { TableOtherParameter } from '../../framework/common/table/TableOtherParameter';
import { FeedMain } from './FeedMain';
import { TableRestaurantlevel } from '../../framework/common/table/TableRestaurantlevel';
const { ccclass, property } = _decorator;

@ccclass('FeedItemCell')
export class FeedItemCell extends IVirtualGridListItem {
    @property(Sprite)
    DishIcon: Sprite;
    @property(Label)
    DishLevel: Label;
    @property(Label)
    ShowTxt: Label;
    @property(Label)
    EffectTxt: Label;
    @property(Widget)
    LockWnd: Widget;
    @property(Sprite)
    CostCarrotIcon: Sprite;
    @property(Sprite)
    CostRabbitIcon: Sprite;
    @property(Label)
    PriceTxt: Label;
    @property(Button)
    BuyBtn: Button;
    @property(Button)
    FreeBtn: Button;
    @property(Label)
    FreeBtnTxt: Label;
    @property(Sprite)
    FreeEffect: Sprite;
    @property(Sprite)
    TujianIcon: Sprite;

    private tablerecord = new TableIngredients();
    private lockstate : boolean = true;
    private costtype : number = 0;
    private costnum : number = 0;

    private _tsRestaurantlevel = new TableRestaurantlevel();

    /** 点击触发选择事件 */
    onSelect() {
        this.updateSelectionStatus();
    }

    onUnselect() {
        this.updateSelectionStatus();
    }

    onDataChanged() {
        const data = this.data;
        this.tablerecord.init(data.configid);
        this._tsRestaurantlevel.init(TonGameMgr.CanTingLevel);
        if (!this.tablerecord) {
            return;
        }

        this.FreeBtnTxt.string = oops.language.getLangByID("stringres_182");

        // 菜品造型图标
        UtilMgr.SetImage(this.DishIcon, this.tablerecord.picture);
        // 菜品等级
        this.DishLevel.string = this.tablerecord.level.toString();

        // 菜品收益
        this.ShowTxt.string = oops.language.getLangByID("stringres_114");
        this.EffectTxt.string = "+" + this.tablerecord.getmoney.toString() + "/s";

        let maxlevel = 1;
        if (FeedMgr.HechengMaxLevel[this.tablerecord.type]) {
            maxlevel = FeedMgr.HechengMaxLevel[this.tablerecord.type];
        }

        // 锁头图标
        this.lockstate = (this.tablerecord.level > this._tsRestaurantlevel.foodlevel+2);
        this.LockWnd.node.active = this.lockstate;
        // 大拇指图标
        this.TujianIcon.node.active = (this.tablerecord.level == this._tsRestaurantlevel.foodlevel + 2);

        // 按钮显示
        this.BuyBtn.node.active = (data.configid != FeedMgr.FreeDishId 
            && this.tablerecord.level <= this._tsRestaurantlevel.foodlevel + 2);
        this.FreeBtn.node.active = (data.configid == FeedMgr.FreeDishId);
        if (data.configid == FeedMgr.FreeDishId) {
            UtilMgr.addNodeAnimation("animation/anniuda", this.FreeEffect.node, true, true);
        }

        // 货币图标
        this.CostCarrotIcon.node.active = (this.tablerecord.level == this._tsRestaurantlevel.foodlevel + 1
            || this.tablerecord.level == this._tsRestaurantlevel.foodlevel + 2);
        this.CostRabbitIcon.node.active = (this.tablerecord.level <= this._tsRestaurantlevel.foodlevel);

        if (this.tablerecord.level == this._tsRestaurantlevel.foodlevel + 1
            || this.tablerecord.level == this._tsRestaurantlevel.foodlevel + 2) {
            this.costtype = 1;  // 消耗萝卜币
            this.costnum = this.tablerecord.cost2;
        }
        else if (this.tablerecord.level <= this._tsRestaurantlevel.foodlevel) {
            this.costtype = 2;  // 消耗兔子币
            this.costnum = this.tablerecord.cost1;
        }
        // 价格
        if (FeedMgr.ExtDishPrice[Number(this.data.configid)]) {
            this.costnum = Math.floor(this.costnum*(1+FeedMgr.ExtDishPrice[Number(this.data.configid)]));
        }
        if (this.costtype == 2)
        {
            this.PriceTxt.string = UtilMgr.formatNumber(BigInt(this.costnum));
        }
        else
        {
            this.PriceTxt.string = this.costnum.toString();
        }
        
        this.updateSelectionStatus();
    }

    updateSelectionStatus() {

    }

    onDestroy() {
        super.onDestroy();
    }

    public onBuyBtnClick() {
        UtilMgr.PlaySoundEffect(18);
        if (this.lockstate) {
            return;
        }
        if (!BoardMgr.isHasEmptyGrid())
        {
            oops.gui.toast("message_09", true);     // 空位不足！
            return;
        }

        let tablerecord = new TableIngredients();
        tablerecord.init(this.data.configid);
        if (this.costtype == 1) {
            if (TonGameMgr.CarrotCoin < this.costnum) {
                oops.gui.toast("message_13", true);     // 萝卜币不足！
                PaymentMgr.OpenPaymentUI();
            }
            else {
                FeedMgr.SendBuyDish(this.data.configid, this.costnum);
            }
        }
        else if (this.costtype == 2) {
            if (TonGameMgr.TuZiCoin < this.costnum) {
                oops.gui.toast("message_10", true);     // 兔子币不足！
            }
            else {
                if (BoardMgr.addGrid(this.data.configid))
                {
                    TonGameMgr.updateRabbitCoin(TonGameMgr.TuZiCoin-BigInt(this.costnum));
                    oops.message.dispatchEvent(GameEvent.UpdateTuziCoin);
                    oops.message.dispatchEvent(GameEvent.UpdateBaseData);
                    oops.message.dispatchEvent(GameEvent.UpdateBoardGrid);
                    oops.message.dispatchEvent(GameEvent.Save);
                }

                FeedMgr.UpdateExtDishPrice(Number(this.data.configid));
                const FeedGUI = oops.gui.get(UIID.FeedMain);
                if (FeedGUI) {
                    const FeedCom = FeedGUI.getComponent(FeedMain);
                    if (FeedCom) {
                        FeedCom.updategridList();
                    }
                }
                oops.gui.toast("message_11", true);     // 购买成功！
            }
        }
    }

    public onFreeBtnClick() {
        UtilMgr.PlaySoundEffect(18);
        if (this.lockstate) {
            return;
        }
        if (!BoardMgr.isHasEmptyGrid())
        {
            oops.gui.toast("message_09", true);     // 空位不足！
            return;
        }

        if (BoardMgr.addGrid(this.data.configid))
        {
            oops.message.dispatchEvent(GameEvent.UpdateBaseData);
            oops.message.dispatchEvent(GameEvent.UpdateBoardGrid);
            oops.message.dispatchEvent(GameEvent.Save);
        }
        let tablereward = new TableOtherParameter();
        tablereward.init(3);
        FeedMgr.NextFreeDishTime = Number(tablereward.parameter);
        FeedMgr.FreeDishId = 0;

        const HechengGUI = oops.gui.get(UIID.MainUI);
        if (HechengGUI) {
            const HechengCom = HechengGUI.getComponent(HeChengComponent);
            if (HechengCom) {
                HechengCom.RefreshFeedRed();
            }
        }
        const FeedGUI = oops.gui.get(UIID.FeedMain);
        if (FeedGUI) {
            const FeedCom = FeedGUI.getComponent(FeedMain);
            if (FeedCom) {
                FeedCom.updategridList();
            }
        }

        oops.gui.toast("message_11", true);     // 购买成功！
    }
}
