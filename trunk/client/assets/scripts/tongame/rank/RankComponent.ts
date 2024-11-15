import { _decorator, Component, Node, Sprite, Label, ScrollView, instantiate, UITransform, Prefab, Vec3 } from 'cc';
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { GameEvent } from "../../framework/common/config/GameEvent";
import { StringUtil } from '../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil';
import { RankMgr } from "./RankManager";
import { UtilMgr } from "../manager/UtilManager";
import { HttpReturn } from "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest";
import { TonGameMgr } from "../manager/TonGameManager";
import { RankVirtualGridList } from "./RankVirtualGridList";
import { ProtocolMgr } from "../manager/ProtocolManager";
import { RankTabController } from "./RankTabController";

const { ccclass, property } = _decorator;



@ccclass('RankComponent')
export class RankComponent extends Component {

    @property([Node])
    userHeadImageBacks: Node[] = [];
    @property([Sprite])
    userHeadImages: Sprite[] = [];
    @property([Sprite])
    defaultHead: Sprite[] = [];
    @property(Label)
    allUserNum: Label = null;

   
    @property(Sprite)
    duanweiIcon: Sprite = null;
    @property(Sprite)
    duanweiBackImage: Sprite = null;

    @property(Label)
    duanweiName: Label = null;
    @property(Label)
    duanweiNum: Label = null;

    @property(Label)
    dailyRank: Label = null;
    @property(Label)
    canteenRank: Label = null;

    @property(RankVirtualGridList)
    protected tuziRankGridList: RankVirtualGridList = null;

    @property(RankVirtualGridList)
    protected cantingRankGridList: RankVirtualGridList = null;

    private _tuziRankDataList: any[] = [];
    private _cantingRankDataList: any[] = [];

    
    onAdded(params: any): boolean {
        const rankTabController = this.node.getComponentInChildren(RankTabController);
        if (rankTabController) 
        {
            rankTabController.selectTab(0);
        }

        this.dailyRank.string = oops.language.getLangByID("stringres_086");
        this.canteenRank.string = oops.language.getLangByID("stringres_087");
        this.ShowAllUserNum();

        let RankList = RankMgr.RankData[RankMgr.compositeKey(params.rankType, params.rankConfId)]
        if (RankList) 
        {
            this.ShowRank(params.rankType, params.rankConfId, RankList);
            RankMgr.GetRankData(params.rankType, params.rankConfId);
            RankMgr.GetRankDataBack();
            this.ShowUserHead();
        }
        else
        {
            const data: { [key: string]: any } = {};
            data.rankType = params.rankType;
            data.rankConfId = params.rankConfId;
            const param = JSON.stringify(data);
            var completeRank = (ret: HttpReturn) => {
                if (ret.isSucc && ret.res)
                {
                    RankMgr.allUserNumber = ret.res.allUserNumber;
                    this.ShowAllUserNum();
                    RankMgr.RankData[RankMgr.compositeKey(ret.res.rankTyppe, ret.res.rankConfId)] = ret.res.list;
                    if (ret.res.rankTyppe == '1')
                    {
                        RankMgr.myInfoTuzi = ret.res.myInfo
                    }
                    else if (ret.res.rankTyppe == '2')
                    {
                        RankMgr.myInfoCanting = ret.res.myInfo
                    }
                    this.ShowRank(ret.res.rankTyppe, ret.res.rankConfId, ret.res.list);
                    RankMgr.GetRankDataBack();
                    this.ShowUserHead();
                }
            }
            ProtocolMgr.sendRankList(completeRank, param);
        }
        oops.message.on(GameEvent.SwitchRank, this.onUpdateData, this);
        return true;
    }
    private ShowAllUserNum()
    {
        if (RankMgr.allUserNumber > 0)
        {
            if (RankMgr.allUserNumber > 999)
            {
                this.allUserNum.string = oops.language.getLangByID("stringres_206");
            }
            else
            {
                this.allUserNum.string = RankMgr.allUserNumber.toString();
            }    
        }
    }

    private ShowUserHead() {
        this.userHeadImageBacks.forEach((BackNode, index) => {
            BackNode.active = false;
        });

        let userList = RankMgr.GetUserImageList()
        for (let i = 0; i < userList.length; i++)
        {
            this.userHeadImageBacks[i].active = true;
            UtilMgr.ShowUserHead(userList[i], this.userHeadImages[i], this.defaultHead[i]);
        }
    }

    onDestroy() {
        oops.message.off(GameEvent.SwitchRank, this.onUpdateData, this);
    }

    private onUpdateData(event: string, args: any) {
        switch (event) {
            case GameEvent.SwitchRank:
                this.OnSwitchRank(RankMgr.curRankConfId);
                break;
        }
    }
    private ShowRank(rankType:number, rankConfId: number, rankList:any) 
    {
        if (rankType == 1)
        {//兔子币榜
            let Data = RankMgr.GetRankDataByLevel(rankConfId);
            if (Data)
            {
                UtilMgr.SetImage(this.duanweiIcon, Data.bigrankicon);
                UtilMgr.SetImage(this.duanweiBackImage, Data.rankpic);
                this.duanweiName.string = oops.language.getLangByID(Data.rankname);
                this.duanweiNum.string = StringUtil.substitute_1(oops.language.getLangByID("stringres_184"), Data.lower.toString());
                this.ShowTuziRank(rankConfId, rankList);
            }
        }
        else if (rankType == 2)
        {//餐厅等级榜
            let Data = RankMgr.GetRankDataByLevel(rankConfId);
            if (Data)
            {
                UtilMgr.SetImage(this.duanweiIcon, Data.bigrankicon);
                UtilMgr.SetImage(this.duanweiBackImage, Data.rankpic);
                this.duanweiName.string = oops.language.getLangByID(Data.rankname);
                this.duanweiNum.string = StringUtil.substitute_1(oops.language.getLangByID("stringres_198"), Data.canteenranklower.toString());
                this.ShowCantingRank(rankConfId, rankList);
            }
        }
    }

    private OnSwitchRank(RankConfId:number) {
        let RankList = RankMgr.RankData[RankMgr.compositeKey(RankMgr.curRankType, RankConfId)]
        if (RankList) 
        {
            this.ShowAllUserNum();
            this.ShowRank(RankMgr.curRankType, RankConfId, RankList);
        }
        else
        {
            RankMgr.GetRankData(RankMgr.curRankType, RankConfId);
        }
    }

    private IsRankListHasMyInfo(rankList, myInfo)
    {
        for (const id in rankList) {
            let RankData = rankList[id];
            if (RankData.userId == myInfo.userId)
            {
                return true;
            }
        }
        return false;
    }

    private ShowTuziRank(rankConfId, rankList) {
        if (rankList !== null && rankList !== undefined && Array.isArray(rankList) && rankList.length && rankList.length > 0)
        {
            this._tuziRankDataList = [];
            for (const id in rankList) {
                let RankData = rankList[id];
                this._tuziRankDataList.push(RankData);
            }
            if (RankMgr.myInfoTuzi.rankConfId == rankConfId && this.IsRankListHasMyInfo(rankList, RankMgr.myInfoTuzi))
            {
                RankMgr.myInfoTuzi.userId = TonGameMgr.UserId;
                this._tuziRankDataList.push(RankMgr.myInfoTuzi);
            }
            this.refreshTuziRankGridList();
        }
        else{
            this.refreshTuziRankGridList();
            this.tuziRankGridList.clearList();
        }
    }

    refreshTuziRankGridList() {
        /*  paddingTop: 列表距离上边缘距离 默认为0
        paddingBottom: 列表距离下边缘距离 默认为0
        spacingX: 列间距 默认为3
        spacingY: 行间距 默认为3
        columnNum: 列数 默认为0，自动适配容器宽度
        useVirtualLayout: 是否启用虚拟列表 默认为true
        emptyTip: 没有数据显示提示
        cacheImage: 是否缓存列表中加载过的图片，控件回收后，图片缓存将被全部释放。
     */

        if (this.tuziRankGridList) {
            this.tuziRankGridList.clearList();
            this.tuziRankGridList.initGridList({
                paddingTop: 10,
                paddingBottom: 10,
                spacingX: 10,
                spacingY: 5,
                columnNum: 1,
                useVirtualLayout: true,
                emptyTip: oops.language.getLangByID("stringres_088"),
                cacheImage: true
            });
            this.tuziRankGridList.appendItemsToDisplayList(this._tuziRankDataList);
        }
    }

    private ShowCantingRank(rankConfId, rankList) {
        if (rankList !== null && rankList !== undefined && Array.isArray(rankList) && rankList.length && rankList.length > 0)
        {
            this._cantingRankDataList = [];
            for (const id in rankList) {
                let RankData = rankList[id];
                this._cantingRankDataList.push(RankData);
            }
            if (RankMgr.myInfoCanting.rankConfId == rankConfId && this.IsRankListHasMyInfo(rankList, RankMgr.myInfoCanting))
            {
                RankMgr.myInfoCanting.userId = TonGameMgr.UserId;
                this._tuziRankDataList.push(RankMgr.myInfoCanting);
            }
            this.refreshCantingRankGridList();
        }
        else{
            this.refreshCantingRankGridList();
            this.cantingRankGridList.clearList();
        }

    }

    refreshCantingRankGridList() {
        /*  paddingTop: 列表距离上边缘距离 默认为0
        paddingBottom: 列表距离下边缘距离 默认为0
        spacingX: 列间距 默认为3
        spacingY: 行间距 默认为3
        columnNum: 列数 默认为0，自动适配容器宽度
        useVirtualLayout: 是否启用虚拟列表 默认为true
        emptyTip: 没有数据显示提示
        cacheImage: 是否缓存列表中加载过的图片，控件回收后，图片缓存将被全部释放。
     */

        if (this.cantingRankGridList) {
            this.cantingRankGridList.clearList();
            this.cantingRankGridList.initGridList({
                paddingTop: 10,
                paddingBottom: 10,
                spacingX: 10,
                spacingY: 5,
                columnNum: 1,
                useVirtualLayout: true,
                emptyTip: oops.language.getLangByID("stringres_088"),
                cacheImage: true
            });
            this.cantingRankGridList.appendItemsToDisplayList(this._cantingRankDataList);
        }
    }

    public onLeft() {
        UtilMgr.PlaySoundEffect(25);
        let RankData = RankMgr.GetRankDataByLevel(RankMgr.curRankConfId-1);
        if (RankData)
        {
            RankMgr.curRankConfId = RankMgr.curRankConfId - 1;
            this.OnSwitchRank(RankMgr.curRankConfId);
        }
        else
        {
            RankMgr.curRankConfId = RankMgr.GetMaxRankLevelId();
            this.OnSwitchRank(RankMgr.curRankConfId);
        }
    }

    public onRight() {
        UtilMgr.PlaySoundEffect(25);
        let RankData = RankMgr.GetRankDataByLevel(RankMgr.curRankConfId+1);
        if (RankData)
        {
            RankMgr.curRankConfId = RankMgr.curRankConfId + 1;
            this.OnSwitchRank(RankMgr.curRankConfId);
        }
        else
        {
            RankMgr.curRankConfId = 1;
            this.OnSwitchRank(RankMgr.curRankConfId);
        }
    }

    public onClose() {
        UtilMgr.PlaySoundEffect(19);
        oops.gui.remove(UIID.Rank);
    }

}


