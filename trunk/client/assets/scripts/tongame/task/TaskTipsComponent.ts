import { _decorator, Component, Node, Sprite, Label, ScrollView, instantiate, UITransform, Prefab, Vec3, Texture2D } from 'cc';
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { UtilMgr } from "../manager/UtilManager";
import { StringUtil } from "../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil";
import { TableAchievement } from "../../framework/common/table/TableAchievement";

const { ccclass, property } = _decorator;



@ccclass('TaskTipsComponent')
export class TaskTipsComponent extends Component {

    @property(Sprite)
    icon: Sprite = null;

    @property(Label)
    tipsText: Label = null;

    private _tsAchievement = new TableAchievement();

    onAdded(params: any): boolean {
        this._tsAchievement.init(params.id);
        UtilMgr.SetImage(this.icon, this._tsAchievement.icon);
        this.tipsText.string = StringUtil.substitute_1(oops.language.getLangByID("stringres_202"), oops.language.getLangByID(this._tsAchievement.achievetips), oops.language.getLangByID(this._tsAchievement.tips));
        return true;
    }


    public onClose() {
        UtilMgr.PlaySoundEffect(19);
        oops.gui.remove(UIID.TaskTips);
    }
}


