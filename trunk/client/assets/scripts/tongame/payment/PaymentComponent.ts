import { _decorator, Component, Node, Sprite, Label, ScrollView, instantiate, UITransform, Prefab, Vec3 } from 'cc';
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { UtilMgr } from "../manager/UtilManager";
import { TonGameMgr } from "../manager/TonGameManager";
import { GameEvent } from "../../framework/common/config/GameEvent";
import { VirtualGridList } from "../../../resources/libs/virtual_grid_list/virtual_grid_list";

import { TablePay } from "../../framework/common/table/TablePay";
import { ProtocolMgr } from "../manager/ProtocolManager";
import { HttpReturn } from "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest";

import { PaymentMgr, DataItem } from "./PaymentManager";

const { ccclass, property } = _decorator;



@ccclass('PaymentComponent')
export class PaymentComponent extends Component {

    @property(Label)
    titleLabel: Label = null;

    @property(Label)
    yueLabel: Label = null;

    @property(Label)
    carrotCoinLabel: Label = null;

    @property(VirtualGridList)
    protected gridList: VirtualGridList = null;


    private _dataList: any[] = [];
    private _tsPay = new TablePay();

    onAdded(params: any): boolean {
        this.titleLabel.string = oops.language.getLangByID("stringres_105");
        this.yueLabel.string = oops.language.getLangByID("stringres_165");
        this.carrotCoinLabel.string = TonGameMgr.CarrotCoin.toString();

        if (PaymentMgr.shopItemList)
        {
            this.showShopList();
            PaymentMgr.GetPaymentData();
        }
        else
        {
            PaymentMgr.GetPaymentData(() => {
                this.showShopList();
            });
        }
        oops.message.on(GameEvent.UpdateCarrotCoin, this.onUpdateData, this);
        return true;
    }

    onDestroy() {
        oops.message.off(GameEvent.UpdateCarrotCoin, this.onUpdateData, this);
    }

    private onUpdateData(event: string, args: any) {
        switch (event) {
            case GameEvent.UpdateCarrotCoin:
                this.updateCarrotCoin();
                break;
        }
    }

    private updateCarrotCoin()
    {
        this.carrotCoinLabel.string = TonGameMgr.CarrotCoin.toString();
    }
    
    private showShopList()
    {
        this._dataList = [];
        for (const key in PaymentMgr.shopItemList) {
            if (PaymentMgr.shopItemList.hasOwnProperty(key)) {
                let value = PaymentMgr.shopItemList[key];
                if (value.left > 0)
                {
                    this._tsPay.init(value.ID);
                    const item: DataItem = {
                        price: value.price,
                        carrotcoin: value.carrotcoin,
                        gift: value.gift,
                        strength : value.strength,
                        paytype: value.paytype,
                        left: value.left,
                        imageUrl: value.imageUrl,
                        ID: value.ID,
                        name: this._tsPay.name,
                        discountdesc1 : this._tsPay.discountdesc1,
                        discountdesc2 : this._tsPay.discountdesc2
                    }
                    this._dataList.push(item);
                }
            }
        }
        this.initGridList();
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
                spacingX: 10,
                spacingY: 5,
                columnNum: 2,
                useVirtualLayout: true,
                emptyTip: '',
                cacheImage: true
            });
            this.gridList.registerSelectOneItemEventHandler(this._onSelectOneItem, this);

            this.gridList.appendItemsToDisplayList(this._dataList);
        }
    }

    _onSelectOneItem(data: any) {
        console.log('_onSelectOneItem');
        var completeBuy = (ret: HttpReturn) => {
            oops.gui.waitClose();
            if (ret.isSucc && ret.res.result)
            {//下单成功
                if (ret.res.Type == "Need_To_Pay")
                {
                    let paramas: any = {};
                    paramas.url = ret.res.webUrl;
                    oops.gui.open(UIID.PaymentWebview, paramas);
                    //TelegramWebApp.Instance.openTelegramLink(ret.res.webUrl);
                    /*
                    if (!TelegramWebApp.Instance.openLink(ret.res.webUrl, { "try_instant_view": true }))
                    {
                        let paramas: any = {};
                        paramas.url = ret.res.webUrl;
                        oops.gui.open(UIID.PaymentWebview, paramas);
                    }
                        */
                }
                else if (ret.res.Type == "Charge_Success")
                {
                    if (PaymentMgr.modifyShopItem(ret.res.GoodID, ret.res.LeftChange))
                    {
                        this.refreshGridList();
                    }
                    let paramas: any = {};
                    paramas.item = PaymentMgr.getShopItem(ret.res.GoodID);
                    oops.gui.open(UIID.PaymentTips, paramas);
                }
            }
        }

        const dataBuy: { [key: string]: any } = {};
        dataBuy.userID = TonGameMgr.UserId;
        dataBuy.goodID = data.ID;

        const param = JSON.stringify(dataBuy);
        ProtocolMgr.sendChargeBuy(completeBuy, param);
        oops.gui.waitOpen();
    }
    
    public refreshGridList() {
        this.gridList.clearList();
        this.showShopList();
    }

    public onClose() {
        UtilMgr.PlaySoundEffect(19);
        oops.gui.remove(UIID.PaymentUI);
    }
}


