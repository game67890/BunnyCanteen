import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { GameEvent } from "../../framework/common/config/GameEvent";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { UtilMgr } from "../manager/UtilManager";
import { TonGameMgr, AutoTypeEnum } from "../manager/TonGameManager";
import { tips } from "../../framework/common/prompt/TipsManager";
import { TableOtherParameter } from "../../framework/common/table/TableOtherParameter";
import { ProtocolMgr } from "../manager/ProtocolManager";
import { HttpReturn } from "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest";
import { PaymentMgr } from '../payment/PaymentManager';
import { StringUtil } from "../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil";

const { ccclass, property } = _decorator;

@ccclass('AutoComponent')
export class AutoComponent extends Component {
    @property(Label)
    Title: Label;
    @property(Label)
    AutoText1: Label;
    @property(Label)
    AutoText2: Label;
    @property(Label)
    AutoText3: Label;
    @property(Label)
    AutoText4: Label;

    @property(Label)
    offText: Label;

    @property(Label)
    timeText: Label;

    @property(Label)
    yuanjia: Label;
    @property(Label)
    xianjia: Label;

    private tableOtherParameter = new TableOtherParameter();

    onAdded(params: any): boolean {
        //自动
        this.Title.string = oops.language.getLangByID("stringres_020");
        this.offText.string = oops.language.getLangByID("stringres_151");
        this.timeText.string = oops.language.getLangByID("stringres_150");

        //自动合成食材
        this.AutoText1.string = oops.language.getLangByID("stringres_011");
        //自动采购
        this.AutoText2.string = oops.language.getLangByID("stringres_012");
        //自动回收低级食材
        this.AutoText3.string = oops.language.getLangByID("stringres_013");
        //自动打开礼盒
        this.AutoText4.string = oops.language.getLangByID("stringres_014");

        this.tableOtherParameter.init(7);
        this.yuanjia.string = this.tableOtherParameter.parameter;
        this.tableOtherParameter.init(6);
        this.xianjia.string = this.tableOtherParameter.parameter;
        return true;
    }

    public onBuyAuto() {
        UtilMgr.PlaySoundEffect(18);

        this.tableOtherParameter.init(6);
        let NeedCarrotCoin =  Number(this.tableOtherParameter.parameter);
        if (TonGameMgr.CarrotCoin >= NeedCarrotCoin)
        {
            let tishi = StringUtil.substitute_1(oops.language.getLangByID("stringres_007"), this.tableOtherParameter.parameter);
            tips.confirm("", tishi,() => {
                var completeAutocompose = (ret: HttpReturn) => {
                    if (ret.isSucc && ret.res.result)
                    {//购买自动成功
                        this.onClose();
                        oops.gui.open(UIID.BuyAutoUITips);
                        TonGameMgr.AutoType = AutoTypeEnum.HasBuyAndOpen;
                        oops.message.dispatchEvent(GameEvent.UpdateAutoBtn);
                    }
                }
                ProtocolMgr.sendAutocompose(completeAutocompose, "");

            }, oops.language.getLangByID("stringres_008"), oops.language.getLangByID("stringres_010"));
        }
        else
        {
            this.onClose();
            //萝卜币不足，弹支付界面
            PaymentMgr.OpenPaymentUI();
        }
    }

    public onClose() {
        UtilMgr.PlaySoundEffect(19);
        oops.gui.remove(UIID.BuyAutoUI);
    }
}


