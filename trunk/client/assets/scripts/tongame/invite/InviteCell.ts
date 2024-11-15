import { _decorator, Component, Node, Label } from 'cc';
import {IVirtualGridListItem} from "../../../resources/libs/virtual_grid_list/interface";
import { Sprite } from 'cc';
import { HttpReturn } from '../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest';
import { TonGameMgr } from '../manager/TonGameManager';
import { oops } from '../../../../extensions/oops-plugin-framework/assets/core/Oops';
import { UtilMgr } from '../manager/UtilManager';
import { Size } from 'cc';
import { UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('InviteCell')
export class InviteCell extends IVirtualGridListItem {
    @property(Sprite)
    HeadIcon: Sprite;
    @property(Sprite)
    defaultHead: Sprite;
    @property(Label)
    Name: Label;

    /** 点击触发选择事件 */
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
        let str = ""
        if (data.username && data.username != "") {
            str = data.username;
        } else {
            str = "User_"+ data.userid.substring(0, 8);
        }
        this.Name.string = str;
        this.Name.updateRenderData(true);
        if (this.Name.getComponent(UITransform).contentSize.x > 233) {
            this.Name.string = "";
            let temstr = ""
            for (let i=0; i<str.length; i++) {
                let curstr = temstr;
                temstr = temstr + str[i];
                this.Name.string = temstr;
                this.Name.updateRenderData(true);
                if (this.Name.getComponent(UITransform).contentSize.x > 233) {
                    this.Name.string = curstr + "...";
                    break;
                }
            }
        }
        
        this.defaultHead.node.active = true;
        this.HeadIcon.node.active = false;
        UtilMgr.ShowUserHead(this.data.userid, this.HeadIcon, this.defaultHead);

        this.updateSelectionStatus();
    }

    updateSelectionStatus() {

    }

    onDestroy() {
        super.onDestroy();
    }
}


