import { _decorator, Component, Label } from 'cc';
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { Button } from 'cc';
import { UtilMgr } from '../manager/UtilManager';
const { ccclass, property } = _decorator;

@ccclass('CarrotTipsComponent')
export class CarrotTipsComponent extends Component {
    @property(Button)
    CloseBtn: Button;
    @property(Label)
    TitleTxt: Label;
    @property(Label)
    ShowTxt: Label;
    @property(Button)
    SureBtn: Button;
    @property(Label)
    SureBtnTxt: Label;

    start() {

    }
        
    update(deltaTime: number) {
        
    }

    onAdded(params: any): boolean {
        this.SureBtnTxt.string = oops.language.getLangByID("stringres_175");
        if (Number(params) == 1) {
            this.TitleTxt.string = oops.language.getLangByID("stringres_022");
            this.ShowTxt.string = oops.language.getLangByID("stringres_023") + "\n"
                                    + oops.language.getLangByID("stringres_024") + "\n"
                                    + oops.language.getLangByID("stringres_025") + "\n";
        }
        else {
            this.TitleTxt.string = oops.language.getLangByID("stringres_027");
            this.ShowTxt.string = oops.language.getLangByID("stringres_028") + "\n"
                                    + oops.language.getLangByID("stringres_029") + "\n";
        }
        
        return true;
    }

    // 点击关闭按钮
    public onCloseBtnVlick() {
        UtilMgr.PlaySoundEffect(19);
        oops.gui.remove(UIID.CarrotTips);
    }
}


