import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { ProtocolMgr } from "../manager/ProtocolManager";
import { HttpReturn } from "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest";


import { TonGameMgr } from "../manager/TonGameManager";
import { PaymentComponent } from "./PaymentComponent";
import { UtilMgr } from "../manager/UtilManager";


export class DataItem {
    //单价
    price: number = 0;
    //萝卜币
    carrotcoin: number = 0;
    //礼盒
    gift: number = 0;
    //体力
    strength : number = 0;
    //支付类型
    paytype: number = 0;
    //库存数量
    left: number = 0;
    imageUrl: string;
    //商品ID
    ID: number = 0;
    //商品名称
    name: string;
    //折扣描述1
    discountdesc1: string;
    //折扣描述2
    discountdesc2: string;
}

export class PaymentManager {
    public shopItemList: any = null;

    //拉起支付界面
    public OpenPaymentUI() {
        oops.gui.open(UIID.PaymentUI);
    }

    public GetPaymentData(callback?: Function){
        var completeShop = (ret: HttpReturn) => {
            if (ret.isSucc)
            {
                let shopItemList = JSON.parse(ret.res.shopGoods);
                PaymentMgr.shopItemList = shopItemList;
                if (callback)
                {
                    callback();
                }
            }
        }
        const data: { [key: string]: any } = {};
        data.userID = TonGameMgr.UserId;
        data.shopID = 1;

        const param = JSON.stringify(data);
        ProtocolMgr.sendChargeShop(completeShop, param);
    }

    public getShopItem(GoodID:number) : DataItem {
        for (const key in this.shopItemList) {
            if (this.shopItemList.hasOwnProperty(key)) {
                let value = this.shopItemList[key];
                if (value.ID == GoodID)
                {
                    return value;
                }
            }
        }
        return null;
    }

    
    public modifyShopItem(GoodID:number, LeftChange:number) : boolean {
        for (const key in PaymentMgr.shopItemList) {
            if (PaymentMgr.shopItemList.hasOwnProperty(key)) {
                let value = PaymentMgr.shopItemList[key];
                if (value.ID == GoodID)
                {
                    PaymentMgr.shopItemList[key].left = PaymentMgr.shopItemList[key].left + LeftChange;
                    return true;
                }
            }
        }
        return false;
    }

    public ProcessPay(protocol)
    {
        if (protocol.carrotCoin)
        {
            if (protocol.carrotCoin > TonGameMgr.CarrotCoin) {
                UtilMgr.PlaySoundEffect(20);    // 充值成功播放音效
            }
            TonGameMgr.updateCarrotCoin(protocol.carrotCoin);
        }
        let item = this.getShopItem(protocol.GoodID);
        if (item.gift > 0)
        {
            TonGameMgr.modifyGiftNum(item.gift);
        }

        if (this.modifyShopItem(protocol.GoodID, protocol.LeftChange))
        {
            const PaymentGUI = oops.gui.get(UIID.PaymentUI);
            if (PaymentGUI)
            {
                const PaymentCom = PaymentGUI.getComponent(PaymentComponent);
                if (PaymentCom)
                {
                    PaymentCom.refreshGridList();
                }
            }
        }
    }

} 

export var PaymentMgr = new PaymentManager();