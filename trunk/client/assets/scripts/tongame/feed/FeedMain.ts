import { _decorator, Component, Node, Label } from 'cc';
import { VirtualGridList } from '../../../resources/libs/virtual_grid_list/virtual_grid_list';
import { oops } from '../../../../extensions/oops-plugin-framework/assets/core/Oops';
import { GameEvent } from '../../framework/common/config/GameEvent';
import { TonGameMgr } from '../manager/TonGameManager';
import { PaymentMgr } from '../payment/PaymentManager';
import { UIID } from '../../framework/common/config/GameUIConfig';
import { TableIngredients } from '../../framework/common/table/TableIngredients';
import { JsonUtil } from '../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil';
import { HeChengMgr } from '../hecheng/HeChengManager';
import { UtilMgr } from '../manager/UtilManager';
const { ccclass, property } = _decorator;

class FeedDataItem {
    configid : number = 0;
}


@ccclass('FeedMain')
export class FeedMain extends Component {
    @property(Label)
    TitleName : Label;
    @property(Label)
    RabbitCoinNum : Label;
    @property(Label)
    CarrotCoinNum : Label;

    @property(VirtualGridList)
    protected gridList: VirtualGridList = null;

    private _dataList: any[] = [];

    onAdded(params: any): boolean {
        this.TitleName.string = oops.language.getLangByID("stringres_107");
        this.init();
        this.addEvent();
        var table = JsonUtil.get(TableIngredients.TableName);

        this._dataList = [];
        if (table) {
            for (let id in table) {
                const item: FeedDataItem = {
                    configid: Number(id),
                }
                this._dataList.push(item);
            }
        }
        this._dataList.sort(this.customSort);
        this.initGridList();
        return true;
    }

    customSort = (a: FeedDataItem, b: FeedDataItem): number => {
        if (a.configid > 0 && b.configid > 0) {
            let record = new TableIngredients()
            record.init(a.configid);
            let aLevel = record.level;
            record.init(b.configid);
            let bLevel = record.level;

            return aLevel - bLevel;
        }
        else {
            return a.configid - b.configid;
        }
    };

    private init() {
        this.updateBaseData();
        this.updateTuziCoin();
    }

    onDestroy() {
        this.removeEvent();
    }

    /** 添加全局消息事件 */
    private addEvent() {
        oops.message.on(GameEvent.UpdateBaseData, this.onUpdateData, this);
        oops.message.on(GameEvent.OnShopListChange, this.updategridList, this);
        oops.message.on(GameEvent.UpdateTuziCoin, this.onUpdateData, this);
        oops.message.on(GameEvent.UpdateCarrotCoin, this.onUpdateData, this);
    }

    /** 移除全局消息事件 */
    private removeEvent() {
        oops.message.off(GameEvent.UpdateBaseData, this.onUpdateData, this);
        oops.message.off(GameEvent.OnShopListChange, this.updategridList, this);
        oops.message.off(GameEvent.UpdateTuziCoin, this.onUpdateData, this);
        oops.message.off(GameEvent.UpdateCarrotCoin, this.onUpdateData, this);
    }

    private onUpdateData(event: string, args: any) {
        switch (event) {
            case GameEvent.UpdateBaseData:
                this.updateBaseData();
                break;
            case GameEvent.UpdateTuziCoin:
                this.updateTuziCoin();
                break;
            case GameEvent.UpdateCarrotCoin:
                this.updateCarrotCoin();
                break;
        }
    }

    private updateBaseData() {
        this.CarrotCoinNum.string = TonGameMgr.CarrotCoin.toString();
        this.updategridList();
    }

    private updateTuziCoin()
    {
        this.RabbitCoinNum.string = UtilMgr.formatNumber(TonGameMgr.TuZiCoin);
    }

    private updateCarrotCoin()
    {
        this.CarrotCoinNum.string = TonGameMgr.CarrotCoin.toString();
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
                paddingTop: 10,
                paddingBottom: 10,
                spacingX: 0,
                spacingY: 0,
                columnNum: 1,
                useVirtualLayout: true,
                emptyTip: oops.language.getLangByID("stringres_088"),
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

    public updategridList() {
        this.gridList.refreshItemDisplays();
    }

    // 点击加号按钮
    public onAddBtnClick_1() {
        UtilMgr.PlaySoundEffect(18);
        PaymentMgr.OpenPaymentUI();
    }

    // 点击加号按钮
    public onAddBtnClick_2() {
        UtilMgr.PlaySoundEffect(18);
        HeChengMgr.onGotoCarrots();
    }

    // 点击关闭按钮
    public onCloseBtnClick() {
        UtilMgr.PlaySoundEffect(19);
        oops.gui.remove(UIID.FeedMain);
    }
}


