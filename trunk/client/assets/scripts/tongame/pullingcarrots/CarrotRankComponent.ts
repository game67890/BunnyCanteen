import { _decorator, Component, Node, Label, Prefab, instantiate, Vec3, UITransform } from 'cc';
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { GameEvent } from "../../framework/common/config/GameEvent";
import { TonGameMgr } from "../manager/TonGameManager";
import { Button } from 'cc';
import { Widget } from 'cc';
import { CarrotMgr } from './CarrotManager';
import { VirtualGridList } from "../../../resources/libs/virtual_grid_list/virtual_grid_list";
import { UtilMgr } from '../manager/UtilManager';
import { Sprite } from 'cc';
const { ccclass, property } = _decorator;

const _temp_vec3 = new Vec3();

class RankDataItem {
    rank: number = 0;
    rolename: string = "";
    weight: number = 0;
    userid:number = 0;
}

@ccclass('CarrotRankComponent')
export class CarrotRankComponent extends Component {
    @property(Button)
    CloseBtn: Button;
    @property(Button)
    TipsBtn: Button;
    @property(Label)
    RabbitCoinNum: Label;
    @property(Widget)
    NextTimeWnd: Widget;
    @property(Label)
    NoRankTxt: Label;
    @property(Widget)
    MyRankWnd: Widget;
    @property(Button)
    RewardBtn: Button;
    @property(Label)
    RewardBtnTxt: Label;

    @property(Label)
    MyRank: Label;
    @property(Label)
    MyName: Label;
    @property(Label)
    MyWeight: Label;

    @property(Label)
    TitleTxt: Label;

    @property(Sprite)
    HeadIcon: Sprite;
    @property(Sprite)
    defaultHead: Sprite;

    @property(VirtualGridList)
    protected gridList: VirtualGridList = null;

    private _dataList: any[] = [];


    onAdded(params: any): boolean {
        this.NextTimeWnd.node.active = false
        this.NoRankTxt.string = oops.language.getLangByID("stringres_021");
        this.RewardBtnTxt.string = oops.language.getLangByID("stringres_030");
        this.TitleTxt.string = oops.language.getLangByID("stringres_179");

        this.defaultHead.node.active = true;
        UtilMgr.ShowUserHead(TonGameMgr.UserId, this.HeadIcon, this.defaultHead);
        
        this.init();
        this.addEvent();
        this._dataList = [];
        if (params && params.rankitemlist.length > 0) {
            for (let i = 0; i < params.rankitemlist.length; i++) {
                const item: RankDataItem = {
                    rank: params.rankitemlist[i].idx,
                    rolename: params.rankitemlist[i].name,
                    weight: params.rankitemlist[i].weight,
                    userid:params.rankitemlist[i].userID,
                }
                this._dataList.push(item);
            }
            this.initGridList();
        }
        
        return true;
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
                paddingBottom: 10,
                spacingX: 10,
                spacingY: 0,
                columnNum: 1,
                useVirtualLayout: true,
                // emptyTip: oops.language.getLangByID("stringres_088"),
                cacheImage: true
            });
            //this.gridList.registerScrollToBottomEventHandler(this._nextPage, this);
            this.gridList.registerSelectOneItemEventHandler(this._onSelectOneItem, this);

            this.gridList.appendItemsToDisplayList(this._dataList);
        }
    }

    _onSelectOneItem(data: any) {
        console.log('_onSelectOneItem');
    }

    start() {

    }

    private init() {
        this.updateTuziCoin();
        this.RefreshMyRankShow();
    }

    private RefreshMyRankShow() {
        this.NoRankTxt.node.active = (CarrotMgr.CurrentCarrotRank <= 0)
        this.MyRankWnd.node.active = (CarrotMgr.CurrentCarrotRank > 0)
        if (CarrotMgr.CurrentCarrotRank > 0) {
            if (CarrotMgr.CurrentCarrotRank > 999) {
                this.MyRank.string = "999+";
            } else {
                this.MyRank.string = CarrotMgr.CurrentCarrotRank.toString();
            }
            let str = ""
            if (TonGameMgr.UserName && TonGameMgr.UserName != "") {
                str = TonGameMgr.UserName;
            } else {
                str = "User_"+ TonGameMgr.UserId.substring(0, 8);
            }

            this.MyName.string = str;
            this.MyName.updateRenderData(true);
            if (this.MyName.getComponent(UITransform).contentSize.x > 233) {
                this.MyName.string = "";
                let temstr = ""
                for (let i=0; i<str.length; i++) {
                    let curstr = temstr;
                    temstr = temstr + str[i];
                    this.MyName.string = temstr;
                    this.MyName.updateRenderData(true);
                    if (this.MyName.getComponent(UITransform).contentSize.x > 233) {
                        this.MyName.string = curstr + "...";
                        break;
                    }
                }
            }

            this.MyWeight.string = CarrotMgr.CurrentCarrotWeight.toString()+"kg";
        }
    }

    onDestroy() {
        this.removeEvent();
    }

    /** 添加全局消息事件 */
    private addEvent() {
        oops.message.on(GameEvent.UpdateTuziCoin, this.onUpdateData, this);
    }

    /** 移除全局消息事件 */
    private removeEvent() {
        oops.message.off(GameEvent.UpdateTuziCoin, this.onUpdateData, this);
    }

    private onUpdateData(event: string, args: any) {
        switch (event) {
            case GameEvent.UpdateTuziCoin:
                this.updateTuziCoin();
                break;
        }
    }

    private updateTuziCoin() {
        this.RabbitCoinNum.string = UtilMgr.formatNumber(TonGameMgr.TuZiCoin);
    }

    // 点击关闭按钮
    public onCloseBtnClick() {
        UtilMgr.PlaySoundEffect(19);
        oops.gui.remove(UIID.CarrotRank);
    }

    // 点击tips按钮
    public onTipsBtnClick() {
        UtilMgr.PlaySoundEffect(18);
        oops.gui.open(UIID.CarrotTips, 2);
    }

    // 点击报酬按钮
    public onRewardBtnClick() {
        UtilMgr.PlaySoundEffect(18);
        oops.gui.open(UIID.CarrotRankReward);
    }
}


