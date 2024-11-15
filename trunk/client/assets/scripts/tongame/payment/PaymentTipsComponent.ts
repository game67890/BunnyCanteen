import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { UtilMgr } from "../manager/UtilManager";
import { TablePay } from "../../framework/common/table/TablePay";

const { ccclass, property } = _decorator;

@ccclass('PaymentTipsComponent')
export class PaymentTipsComponent extends Component {
    @property(Sprite)
    iconImage: Sprite = null;
    @property(Label)
    tishi: Label;
    @property(Sprite)
    itemIcon: Sprite;
    @property(Label)
    itemNum: Label;

    @property(Label)
    okLabel: Label;

    private _tsPay = new TablePay();

    onAdded(params: any): boolean {
        let item = params.item;
        if (item)
        {
            this._tsPay.init(item.ID);
            //this.itemNum.string = 
            this.tishi.string = oops.language.getLangByID("stringres_149");
            this.okLabel.string = oops.language.getLangByID("stringres_009");
        }
        return true;
    }

    public onOK() {
        UtilMgr.PlaySoundEffect(18);
        oops.gui.remove(UIID.PaymentTips);
    }

    public onClose() {
        UtilMgr.PlaySoundEffect(19);
        oops.gui.remove(UIID.PaymentTips);
    }
}


