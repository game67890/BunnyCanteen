import {_decorator, Label, Sprite} from 'cc';
import {IVirtualGridListItem} from "../../../resources/libs/virtual_grid_list/interface";
import { UtilMgr } from '../manager/UtilManager';
import { UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CarrotRankCellComponent')
export class CarrotRankCellComponent extends IVirtualGridListItem {
    @property(Label)
    RankNum: Label;
    @property(Label)
    RoleName: Label;
    @property(Label)
    RoleValue: Label;

    @property(Sprite)
    HeadIcon: Sprite;
    @property(Sprite)
    defaultHead: Sprite;

    @property(Sprite)
    FirstRankIcon: Sprite;
    @property(Sprite)
    SecondRankIcon: Sprite;
    @property(Sprite)
    ThirdRankIcon: Sprite;

     /**
     * 点击触发选择事件
     */
     onSelect() {
        console.log('select _' + this.itemIndex);

        this.updateSelectionStatus();
    }

    onUnselect() {
        console.log('unselect _' + this.itemIndex);

        this.updateSelectionStatus();
    }

    onDataChanged() {
        const data = this.data;

        if (data.rank > 999) {
            this.RankNum.string = "999+";
        } else {
            this.RankNum.string = data.rank.toString();
        }

        let str = ""
        if (data.rolename && data.rolename != "") {
            str = data.rolename;
        } else {
            str = "User_"+ data.userid.substring(0, 8);
        }
        this.RoleName.string = str;
        this.RoleName.updateRenderData(true);
        if (this.RoleName.getComponent(UITransform).contentSize.x > 233) {
            this.RoleName.string = "";
            let temstr = ""
            for (let i=0; i<str.length; i++) {
                let curstr = temstr;
                temstr = temstr + str[i];
                this.RoleName.string = temstr;
                this.RoleName.updateRenderData(true);
                if (this.RoleName.getComponent(UITransform).contentSize.x > 233) {
                    this.RoleName.string = curstr + "...";
                    break;
                }
            }
        }

        this.RoleValue.string = data.weight.toString()+"kg";

        this.defaultHead.node.active = true;
        this.HeadIcon.node.active = false;
        UtilMgr.ShowUserHead(this.data.userid, this.HeadIcon, this.defaultHead);

        this.FirstRankIcon.node.active = (data.rank == 1)
        this.SecondRankIcon.node.active = (data.rank == 2)
        this.ThirdRankIcon.node.active = (data.rank == 3)

        this.updateSelectionStatus();
    }

    updateSelectionStatus() {
        /*
        if (true === this.data.select) {
            //this.node.getComponent(Sprite).color = math.color(52, 217, 235);
        } else {
            //this.node.getComponent(Sprite).color = math.color(255, 255, 255);
        }
            */
    }

    /*
    _showImg(spriteFrame: SpriteFrame, uri: string) {
        if (this.data && spriteFrame && uri.replace('_gray', '') == this.data.pic) {
            this.imgItem.getComponent(Sprite).spriteFrame = spriteFrame;
            // this.imgItem.node.getComponent(Sprite).color.a = 255;
        }
    }
        */

    onDestroy() {
        super.onDestroy();
    }
}


