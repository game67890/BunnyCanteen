
import { HttpReturn } from '../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest';
import { TonGameMgr } from '../manager/TonGameManager';
import { ProtocolMgr } from '../manager/ProtocolManager';
import { TableShop } from '../../framework/common/table/TableShop';
import { GameEvent } from '../../framework/common/config/GameEvent';
import { oops } from '../../../../extensions/oops-plugin-framework/assets/core/Oops';
import { UIID } from '../../framework/common/config/GameUIConfig';
import { HeChengComponent } from '../hecheng/HeChengComponent';
import { UtilMgr } from '../manager/UtilManager';

export class ShopManager {
    private tablerecord = new TableShop();
    private AnimationNum : number[] = [1, 2];

    public IsHaveRabbitId(id:number) :boolean {
        for (let i=0; i<TonGameMgr.RabbitIdList.length; i++) {
            if (id == TonGameMgr.RabbitIdList[i]) {
                return true;
            }
        }
        return false;
    }

    // 随机一个兔子动画
    public GetRandomAnimation(id:number) {
        this.tablerecord.init(id);
        if (this.tablerecord && this.tablerecord.id && this.tablerecord.id > 0) {
            let index = UtilMgr.getRandomNumber(this.AnimationNum);
            if (index == 1) {
                return this.tablerecord.rabbitanimation;
            } else {
                return this.tablerecord.rabbitanimation2;
            }
        }
        

        return "";
    }

    public SendBuyRabbit(confId:number) {
        var completeCBuy = (ret: HttpReturn) => {
            console.log(ret.res);
            if (ret.isSucc)
            {
                let tablerecord = new TableShop();
                tablerecord.init(Number(ret.res.confId));
                TonGameMgr.CurRabbitId = Number(ret.res.confId);
                TonGameMgr.CurRabbitAnimation = ShopMgr.GetRandomAnimation(Number(ret.res.confId));
                TonGameMgr.AddtionGain = TonGameMgr.AddtionGain + tablerecord.effect/100;
                TonGameMgr.RabbitIdList.push(Number(ret.res.confId));
                if (tablerecord.paytype == 1) {
                    TonGameMgr.updateRabbitCoin(TonGameMgr.TuZiCoin - BigInt(tablerecord.price));
                }
                else if (tablerecord.paytype == 2) {
                    TonGameMgr.updateCarrotCoin(TonGameMgr.CarrotCoin - tablerecord.price);
                }
                UtilMgr.PlaySoundEffect(tablerecord.sound);
                oops.gui.toast("message_28", true);
                oops.message.dispatchEvent(GameEvent.UpdateBaseData);
                oops.message.dispatchEvent(GameEvent.UpdateTuziCoin);
                oops.message.dispatchEvent(GameEvent.Save);
                oops.message.dispatchEvent(GameEvent.OnShopListChange);

                const HechengGUI = oops.gui.get(UIID.MainUI);
                if (HechengGUI) {
                    const HechengCom = HechengGUI.getComponent(HeChengComponent);
                    if (HechengCom) {
                        HechengCom.RefreshRabbitIcon();
                    }
                }
            }
        }
    
        const data: { [key: string]: any } = {};
        data.confId = confId.toString();
        data.userID = TonGameMgr.UserId;
        data.token = "e10adc3949ba59abbe56e057f20f883e";
    
        const param = JSON.stringify(data);
        ProtocolMgr.sendcbuyrabbit(completeCBuy, param);
    }

    // 增加萝卜币指令协议
    public SendAddCarrotCoin(count:number) {
        var completeCAddCarrotCoin = (ret: HttpReturn) => {
            console.log(ret.res);
            if (ret.isSucc) {
                TonGameMgr.updateCarrotCoin(TonGameMgr.CarrotCoin+Number(ret.res.count))
                oops.message.dispatchEvent(GameEvent.UpdateBaseData);
            }
        }
    
        const data: { [key: string]: any } = {};
        data.count = count.toString();
        data.userID = TonGameMgr.UserId;
        data.token = "e10adc3949ba59abbe56e057f20f883e";
        const param = JSON.stringify(data);
        ProtocolMgr.sendaddcarrotcion(completeCAddCarrotCoin, param);
    }
       
}

export var ShopMgr = new ShopManager();
