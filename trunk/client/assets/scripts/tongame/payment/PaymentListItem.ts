import {_decorator, Label, Sprite, math, SpriteFrame, Node} from 'cc';
import {IVirtualGridListItem} from "../../../resources/libs/virtual_grid_list/interface";
import { UtilMgr } from "../manager/UtilManager";
import { TablePay } from "../../framework/common/table/TablePay";
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";

const {ccclass, property} = _decorator;

@ccclass('PaymentListItem')
export class PaymentListItem extends IVirtualGridListItem {

    @property(Sprite)
    background: Sprite = null;

    @property(Sprite)
    imgItem: Sprite = null;

    @property(Node)
    zhekouDi: Node = null;

    @property(Node)
    reward1: Node = null;
    @property(Sprite)
    rewardIcon1: Sprite = null;
    @property(Label)
    rewardText1: Label = null;

    @property(Node)
    reward2: Node = null;
    @property(Sprite)
    rewardIcon2: Sprite = null;
    @property(Label)
    rewardText2: Label = null;

    @property(Node)
    reward3: Node = null;
    @property(Sprite)
    rewardIcon3: Sprite = null;
    @property(Label)
    rewardText3: Label = null;

    @property(Label)
    priceLabel: Label = null;

    @property(Label)
    zhekou1Label: Label = null;
    @property(Label)
    zhekou2Label: Label = null;

    @property(Sprite)
    redPoint: Sprite = null;

    private _tsPay = new TablePay();

    /**
     * 点击触发选择事件
     */
    onSelect() {
        console.log('select _' + this.itemIndex);
    }

    onUnselect() {
        console.log('unselect _' + this.itemIndex);
    }

    onDataChanged() {
        const data = this.data;
        this.redPoint.node.active = false;
        //支付类型
        if (data.paytype == 0)
        {//免费
            //this.zhekouDi.active = false;
            this.redPoint.node.active = true;
        }
        else if (data.paytype == 1)
        {//AEON 支付
            //this.zhekouDi.active = true;
        }
        else if (data.paytype == 2)
        {//Telegram 支付
            //this.zhekouDi.active = true;
        }
        //库存数量
        if (data.left > 0)
        {
            this.background.grayscale = false;
        }
        else
        {
            //置灰
            this.background.grayscale = true;
        }
        this.reward1.active = false;
        this.reward2.active = false;
        this.reward3.active = false;

        this.priceLabel.string = "";
        //萝卜币
        if (data.carrotcoin > 0 && data.gift > 0)
        {
            this.reward1.active = true;
            this.reward2.active = true;
            this.reward3.active = false;

            this.rewardText1.string = data.carrotcoin;
            UtilMgr.SetImage(this.rewardIcon1, "textures/UI/main/main;luobobi");
            this.rewardText2.string = data.gift;
            UtilMgr.SetImage(this.rewardIcon2, "textures/UI/zhifu/zhifu;lihe");
        }
        else if (data.carrotcoin > 0)
        {
            this.reward1.active = false;
            this.reward2.active = false;
            this.reward3.active = true;
            this.rewardText3.string = data.carrotcoin;
            UtilMgr.SetImage(this.rewardIcon3, "textures/UI/main/main;luobobi");
        }
        else if (data.gift > 0)
        {
            this.reward1.active = false;
            this.reward2.active = false;
            this.reward3.active = true;
            this.rewardText3.string = data.gift;
            UtilMgr.SetImage(this.rewardIcon3, "textures/UI/zhifu/zhifu;lihe");
        }

        
        if (data.price > 0)
        {
            this.priceLabel.string = "$" + data.price/100;
        }
        else
        {
            this.priceLabel.string = oops.language.getLangByID(data.name);
        }

        if (data.discountdesc1)
        {
            this.zhekou1Label.string = oops.language.getLangByID(data.discountdesc1);
        }
        if (data.discountdesc2)
        {
            this.zhekou2Label.string = oops.language.getLangByID(data.discountdesc2);
        }
        
        this._tsPay.init(data.ID);

        UtilMgr.SetImage(this.imgItem, this._tsPay.picture);
    }

    onDestroy() {
        super.onDestroy();
    }
}
