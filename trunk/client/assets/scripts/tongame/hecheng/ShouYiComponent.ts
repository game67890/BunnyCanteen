import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { UtilMgr } from "../manager/UtilManager";

const { ccclass, property } = _decorator;

@ccclass('ShouYiComponent')
export class ShouYiComponent extends Component {
    @property(Label)
    Title: Label;
    @property(Label)
    LixianShichangTishi: Label;
    @property(Label)
    LixianShijian: Label;
    @property(Label)
    LixianShouyiTishi: Label;
    @property(Label)
    LixianShouyiNum: Label;


    onAdded(params: any): boolean {
        this.Title.string = oops.language.getLangByID("stringres_015");
        this.LixianShichangTishi.string = oops.language.getLangByID("stringres_005");
        this.LixianShijian.string = UtilMgr.convertSeconds(params.LixianTime);
        this.LixianShouyiTishi.string = oops.language.getLangByID("stringres_006");

        this.LixianShouyiNum.string = UtilMgr.formatNumber(BigInt(params.LixianShouyi));
        return true;
    }

    public onClose() {
        UtilMgr.PlaySoundEffect(19);
        oops.gui.remove(UIID.ShouYiUI);
    }
}


