import { _decorator, Component, Node, Label } from 'cc';
import { oops } from '../../../../extensions/oops-plugin-framework/assets/core/Oops';
import { UIID } from '../../framework/common/config/GameUIConfig';
import { StringUtil } from '../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil';
import { IniviteMgr } from './InviteManager';
import { TableOtherParameter } from '../../framework/common/table/TableOtherParameter';
import { VirtualGridList } from '../../../resources/libs/virtual_grid_list/virtual_grid_list';
import { JsonUtil } from '../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil';
import { TableInvitedUserRank } from '../../framework/common/table/TableInvitedUserRank';
import { UtilMgr } from '../manager/UtilManager';
const { ccclass, property } = _decorator;

class InviteawardDataItem {
    configid : number = 0;
}

@ccclass('Inviteactivity')
export class Inviteactivity extends Component {
    @property(Label)
    TitleName: Label;
    @property(Label)
    ShowTxt1: Label;
    @property(Label)
    ShowTxt_1: Label;
    @property(Label)
    ShowTxt_2: Label;
    @property(Label)
    ShowTxt_3: Label;
    @property(Label)
    ShowTxt2: Label;
    @property(Label)
    ShowTxt3: Label;

    @property(Label)
    BiaotiLabel: Label;
    @property(Label)
    BiaotiLabel_1: Label;
    @property(Label)
    ShengjiLabel: Label;
    @property(Label)
    JiangliLabel: Label;

    @property(VirtualGridList)
    protected gridList: VirtualGridList = null;
    private _dataList: any[] = [];
    private tablerecord = new TableInvitedUserRank();

    onAdded(params: any): boolean {
        this.TitleName.string = oops.language.getLangByID("stringres_108");
        this.ShowTxt1.string = StringUtil.substitute_1(oops.language.getLangByID("stringres_102"), IniviteMgr.IniviteNum);
        this.ShowTxt_1.string = oops.language.getLangByID("stringres_111");
        this.ShowTxt_2.string = oops.language.getLangByID("stringres_112");
        this.ShowTxt_3.string = oops.language.getLangByID("stringres_113");
        let tablerecord = new TableOtherParameter();
        tablerecord.init(5);
        this.ShowTxt2.string = StringUtil.substitute_1(oops.language.getLangByID("stringres_103"), tablerecord.parameter);
        this.ShowTxt3.string = oops.language.getLangByID("stringres_098");

        this.BiaotiLabel.string = oops.language.getLangByID("stringres_101");
        this.BiaotiLabel_1.string = oops.language.getLangByID("stringres_104");
        this.ShengjiLabel.string = oops.language.getLangByID("stringres_176");
        this.JiangliLabel.string = oops.language.getLangByID("stringres_177");

        var table = JsonUtil.get(TableInvitedUserRank.TableName);
        this._dataList = [];
        if (table) {
            for (let id in table) {
                this.tablerecord.init(Number(id));
                const item: InviteawardDataItem = {
                    configid: Number(id),
                }
                this._dataList.push(item);
            }
        }
        this.initGridList();
        return true;
    }

    private updategridList() {
        this.gridList.refreshItemDisplays();
    }

    initGridList() {
        /*  paddingTop: 列表距离上边缘距离 默认为0
        paddingBottom: 列表距离下边缘距离 默认为0
        spacingX: 列间距 默认为3
        spacingY: 行间距 默认为3
        columnNum: 列数 默认为0，自动适配容器宽度
        useVirtualLayout: 是否启用虚拟列表 默认为true
        emptyTip: 没有数据显示提示
        cacheImage: 是否缓存列表中加载过的图片，控件回收后，图片缓存将被全部释放。
     */
        if (this.gridList) {
            this.gridList.clearList();
            this.gridList.initGridList({
                paddingTop: 0,
                paddingBottom: 0,
                spacingX: 0,
                spacingY: 0,
                columnNum: 1,
                useVirtualLayout: true,
                // emptyTip: oops.language.getLangByID("stringres_088"),
                cacheImage: true
            });
            this.gridList.registerSelectOneItemEventHandler(this._onSelectOneItem, this);

            this.gridList.appendItemsToDisplayList(this._dataList);
        }
    }

    _onSelectOneItem(data: any) {
        console.log('_onSelectOneItem');
    }

    // 点击邀请一个朋友按钮
    public onInviteBtnClick() {
        UtilMgr.PlaySoundEffect(18);
        UtilMgr.share();
        oops.gui.toast("message_30", true);     // 分享成功
    }
    // 点击copy按钮
    public onCopyBtnClick() {
        UtilMgr.PlaySoundEffect(18);
        oops.gui.toast("message_26", true);
        UtilMgr.copyLinkToClipboard()
    }

    public onCloseBtnClick() {
        UtilMgr.PlaySoundEffect(19);
        oops.gui.remove(UIID.InviteAcivity);
    }
}


