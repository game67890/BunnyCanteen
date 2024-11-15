import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { UtilMgr } from "../manager/UtilManager";

const { ccclass, property } = _decorator;

@ccclass('AutoTipsComponent')
export class AutoTipsComponent extends Component {

    @property(Label)
    AutoText1: Label;
    @property(Label)
    AutoText2: Label;

    @property(Label)
    BtnText: Label;

    onAdded(params: any): boolean {
        this.AutoText1.string = oops.language.getLangByID("stringres_149");
        this.AutoText2.string = oops.language.getLangByID("stringres_020");
        
        this.BtnText.string = oops.language.getLangByID("stringres_009");
        return true;
    }

    public onClose() {
        UtilMgr.PlaySoundEffect(19);
        oops.gui.remove(UIID.BuyAutoUITips);
    }
}


