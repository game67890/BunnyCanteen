import { _decorator, Component, Node, Button, Label } from 'cc';
import { VirtualGridList } from "../../../resources/libs/virtual_grid_list/virtual_grid_list";
import { oops } from '../../../../extensions/oops-plugin-framework/assets/core/Oops';
import { UIID } from '../../framework/common/config/GameUIConfig';
import { HeChengMgr } from '../hecheng/HeChengManager';
import { GameEvent } from '../../framework/common/config/GameEvent';
import { TonGameMgr } from '../manager/TonGameManager';
import { TableShop } from '../../framework/common/table/TableShop';
import { JsonUtil } from '../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil';
import { PaymentMgr } from '../payment/PaymentManager';
import { UtilMgr } from '../manager/UtilManager';

const { ccclass, property } = _decorator;

class ShowDataItem {
    configid : number = 0;
}

@ccclass('ShopMain')
export class ShopMain extends Component {
    @property(Label)
    TitleName : Label;
    @property(Label)
    RabbitCoinNum : Label;
    @property(Label)
    CarrotCoinNum : Label;

    @property(VirtualGridList)
    protected gridList: VirtualGridList = null;

    private _dataList: any[] = [];
    private tablerecord = new TableShop();

    onAdded(params: any): boolean {
        this.init();
        this.addEvent();
        var table = JsonUtil.get(TableShop.TableName);

        this._dataList = [];
        if (table) {
            for (let id in table) {
                this.tablerecord.init(Number(id));
                const item: ShowDataItem = {
                    configid: Number(id),
                }
                this._dataList.push(item);
            }
        }
        this.initGridList();
        return true;
    }

    private init() {
        this.TitleName.string = oops.language.getLangByID("stringres_180");
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

    private updateTuziCoin()
    {
        this.RabbitCoinNum.string = UtilMgr.formatNumber(TonGameMgr.TuZiCoin);
    }

    private updateCarrotCoin()
    {
        this.CarrotCoinNum.string = TonGameMgr.CarrotCoin.toString();
    }

    private updategridList() {
        this.gridList.refreshItemDisplays();
    }

    private updateBaseData() {

        this.CarrotCoinNum.string = TonGameMgr.CarrotCoin.toString();
        this.updategridList();
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

    // 点击加号按钮
    public onAddBtnClick() {
        UtilMgr.PlaySoundEffect(18);
        PaymentMgr.OpenPaymentUI();
    }

    // 点击兔子币加号按钮
    public onTuziAddBtnClick() {
        UtilMgr.PlaySoundEffect(18);
        HeChengMgr.onGotoCarrots();
    }

    // 点击关闭按钮
    public onCloseBtnClick() {
        UtilMgr.PlaySoundEffect(19);
        oops.gui.remove(UIID.ShopMain);
    }
}


