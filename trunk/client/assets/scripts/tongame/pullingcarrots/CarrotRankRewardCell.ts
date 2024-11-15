import {_decorator, Label, Sprite} from 'cc';
import {IVirtualGridListItem} from "../../../resources/libs/virtual_grid_list/interface";
import { StringUtil } from '../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil';
import { oops } from '../../../../extensions/oops-plugin-framework/assets/core/Oops';
const { ccclass, property } = _decorator;

@ccclass('CarrotRankRewardCell')
export class CarrotRankRewardCell extends IVirtualGridListItem {
    @property(Label)
    RankTxt: Label;
    @property(Sprite)
    FirstRankIcon: Sprite;
    @property(Sprite)
    SecondRankIcon: Sprite;
    @property(Sprite)
    ThirdRankIcon: Sprite;
    @property(Label)
    ShowTxt: Label;

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
        if (data.maxrank <= 3) {
            this.RankTxt.node.active = false;
        }
        else {
            this.RankTxt.node.active = true;
            this.RankTxt.string = data.maxrank + "~" + data.minirank;
        }

        this.FirstRankIcon.node.active = (Number(data.maxrank) == 1);
        this.SecondRankIcon.node.active = (Number(data.maxrank) == 2);
        this.ThirdRankIcon.node.active = (Number(data.maxrank) == 3);
        
        this.ShowTxt.string = StringUtil.substitute_1(oops.language.getLangByID("stringres_078"), data.showtxt);
    }

    onDestroy() {
        super.onDestroy();
    }
}


