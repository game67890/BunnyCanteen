import { _decorator, Component, Node, Label } from 'cc';
import {IVirtualGridListItem} from "../../../resources/libs/virtual_grid_list/interface";
import { TableInvitedUserRank } from '../../framework/common/table/TableInvitedUserRank';
import { Sprite } from 'cc';
import { UtilMgr } from '../manager/UtilManager';
import { TableRank } from '../../framework/common/table/TableRank';
import { oops } from '../../../../extensions/oops-plugin-framework/assets/core/Oops';
const { ccclass, property } = _decorator;

@ccclass('InviteAwardCell')
export class InviteAwardCell extends IVirtualGridListItem {
    @property(Label)
    Number: Label;
    @property(Label)
    CarrotCoinNum: Label;
    @property(Sprite)
    Icon: Sprite;

    private tablerecord = new TableInvitedUserRank();
    private ranktablerecord = new TableRank();

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
        this.tablerecord.init(data.configid);
        this.ranktablerecord.init(data.configid);

        this.Number.string = oops.language.getLangByID(this.ranktablerecord.rankname);
        this.CarrotCoinNum.string = this.tablerecord.CarrotCoinNum.toString();
        UtilMgr.SetImage(this.Icon, this.ranktablerecord.smallrankicon);

        this.updateSelectionStatus();
    }

    updateSelectionStatus() {

    }

    onDestroy() {
        super.onDestroy();
    }
}


