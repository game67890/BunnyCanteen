import { _decorator, Component, Node, Label } from 'cc';
import { oops } from '../../../../extensions/oops-plugin-framework/assets/core/Oops';
import { UIID } from '../../framework/common/config/GameUIConfig';
import { VirtualGridList } from "../../../resources/libs/virtual_grid_list/virtual_grid_list";
import { TableOtherParameter } from '../../framework/common/table/TableOtherParameter';
import { StringUtil } from '../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil';
import { IniviteMgr } from './InviteManager';
import { UtilMgr } from '../manager/UtilManager';
import { HttpReturn } from "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest";
import { ProtocolMgr } from "../manager/ProtocolManager";

const { ccclass, property } = _decorator;

class InviteItem {
    userid : string = "";
    username : string = "";
}

@ccclass('InviteMain')
export class InviteMain extends Component {
    @property(Label)
    TitleName: Label;
    @property(Label)
    DesTxt: Label;
    @property(Label)
    ShowTxt: Label;
    @property(Label)
    AwardName1: Label;
    @property(Label)
    AwardTxt1: Label;
    @property(Label)
    AwardName2: Label;
    @property(Label)
    AwardTxt2: Label;

    @property(Label)
    LabelTxt1: Label;
    @property(Label)
    LabelTxt2: Label;

    @property(VirtualGridList)
    protected gridList: VirtualGridList = null;
    private _dataList: any[] = [];

    onAdded(params: any): boolean {
        this.TitleName.string = oops.language.getLangByID("stringres_089");
        this.DesTxt.string = oops.language.getLangByID("stringres_183");
        this.ShowTxt.string = oops.language.getLangByID("stringres_090") + "\n"
                                    + oops.language.getLangByID("stringres_091") + "\n"
                                    + oops.language.getLangByID("stringres_092");
        this.AwardName1.string = oops.language.getLangByID("stringres_093");
        this.AwardTxt1.string = oops.language.getLangByID("stringres_094");
        let tablerecord = new TableOtherParameter();
        tablerecord.init(4);
        this.AwardName2.string = oops.language.getLangByID("stringres_095");
        this.AwardTxt2.string = StringUtil.substitute_1(oops.language.getLangByID("stringres_096"), tablerecord.parameter);
        this.LabelTxt1.string = oops.language.getLangByID("stringres_097");
        this.LabelTxt2.string = oops.language.getLangByID("stringres_098");

        if (IniviteMgr.InviteList)
        {
            this.initGridList();
        }
        else
        {
            var completeOpenInvite = (ret: HttpReturn) => {
                console.log(ret.res);
                if (ret.isSucc && ret.res.result)
                {
                    IniviteMgr.InviteList = ret.res.invitee;
                    IniviteMgr.InviteNameList = ret.res.inviteeUserNames;
                    IniviteMgr.IniviteNum = IniviteMgr.InviteList.length;
                    this.initGridList();
                }
            }
            ProtocolMgr.sendOpenInvite(completeOpenInvite, "");
        }
        return true;
    }

    private updategridList() {
        this.gridList.refreshItemDisplays();
    }

    initGridList() {
        this._dataList = [];
        for (let i=0; i<IniviteMgr.InviteList.length; i++) {
            const item: InviteItem = {
                userid: IniviteMgr.InviteList[i],
                username:IniviteMgr.InviteNameList[i],
            }
            this._dataList.push(item);
        }
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
                paddingTop: 10,
                paddingBottom: 10,
                spacingX: 0,
                spacingY: 0,
                columnNum: 1,
                useVirtualLayout: true,
                // emptyTip: oops.language.getLangByID("stringres_088"),
                cacheImage: true
            });

            this.gridList.appendItemsToDisplayList(this._dataList);
        }
    }


    public onOpenInviteActivity() {
        UtilMgr.PlaySoundEffect(18);
        oops.gui.open(UIID.InviteAcivity);
    }

    public onOpenKongtouActivity() {
        UtilMgr.PlaySoundEffect(18);
        let tablerecord = new TableOtherParameter();
        tablerecord.init(4);
        let showstr = StringUtil.substitute_1(oops.language.getLangByID("message_12"), tablerecord.parameter);
        oops.gui.toast(showstr, false);
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
        UtilMgr.copyLinkToClipboard();
    }

    public onCloseBtnClick() {
        UtilMgr.PlaySoundEffect(19);
        oops.gui.remove(UIID.InviteMain);
    }
}


