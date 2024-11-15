import { _decorator, Component, Label } from 'cc';
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { Button } from 'cc';
import { CarrotComponent } from './CarrotComponent';
import { StringUtil } from "../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil";
import { CarrotMgr } from './CarrotManager';
import { TableRadishAwardWeight } from '../../framework/common/table/TableRadishAwardWeight';
import { TableOtherParameter } from '../../framework/common/table/TableOtherParameter';
import { UtilMgr } from '../manager/UtilManager';

const { ccclass, property } = _decorator;

@ccclass('CarrotRewardComponent')
export class CarrotRewardComponent extends Component {
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

    private CarrotRecord = new TableRadishAwardWeight();
    private updateTime = 0;

    start() {

    }
        
    update(deltaTime: number) {
        if (this.updateTime > 0) {
            this.updateTime = this.updateTime - deltaTime
            if (this.updateTime <= 0) {
                this.updateTime == 0
                if (CarrotMgr.LeftTimes > 0 || CarrotMgr.CarrotRewardList.length > 0) {
                    this.onCloseBtnClick();
                }
            }
        }
    }

    onAdded(params: any): boolean {
        this.TitleTxt.string = oops.language.getLangByID("stringres_031");
        this.SureBtnTxt.string = oops.language.getLangByID("stringres_175");
        this.ShowRewardInfo();
        return true;
    }

    public ShowRewardInfo() {
        UtilMgr.PlaySoundEffect(2);
        let tablerecord = new TableOtherParameter()
        tablerecord.init(2);
        this.updateTime = Number(tablerecord.parameter);

        let List: any[] = [];
        for (let i=0; i<CarrotMgr.CarrotRewardList.length; i++) {
            if (i == 0) {
                this.CarrotRecord.init(Number(CarrotMgr.CarrotRewardList[i].config))
                this.ShowTxt.string = StringUtil.substitute_1(oops.language.getLangByID("stringres_033"),CarrotMgr.CarrotRewardList[i].speed.toString()+"/s", CarrotMgr.CarrotRewardList[i].time) + "\n"
                                + StringUtil.substitute_1(oops.language.getLangByID("stringres_034"), oops.language.getLangByID(this.CarrotRecord.radishname), this.CarrotRecord.radishweight.toString()+"kg") + "\n";
            }
            else
            {
                List.push(CarrotMgr.CarrotRewardList[i]);
            }
        }
        CarrotMgr.CarrotRewardList = List;
    }

    // 点击关闭按钮
    public onCloseBtnClick() {
        UtilMgr.PlaySoundEffect(18);
        if (CarrotMgr.CarrotRewardList.length > 0)
        {
            this.ShowRewardInfo();
            return;
        }
        oops.gui.remove(UIID.CarrotReward);

        const CarrotMainUI = oops.gui.get(UIID.CarrotMain);
        if (CarrotMainUI) {
            const CarrotMainCom = CarrotMainUI.getComponent(CarrotComponent);
            if (CarrotMainCom) {
                CarrotMainCom.StartPulling();
            }
        }
    }
}


