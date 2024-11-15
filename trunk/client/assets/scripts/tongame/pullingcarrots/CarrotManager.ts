import { JsonUtil } from "../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil";
import { HttpReturn } from "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest";
import { ProtocolMgr } from "../manager/ProtocolManager";
import { TableRadishAwardRank } from "../../framework/common/table/TableRadishAwardRank";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { GameEvent } from "../../framework/common/config/GameEvent";
import { TonGameMgr } from "../manager/TonGameManager";
import { TableOtherParameter } from "../../framework/common/table/TableOtherParameter";

class RewardListData {
    time: number = 0;
    config: number = 0;
    speed:number = 0;
}

export class CarrotManager {
    /** 拔萝卜的当前排名 */
    public CurrentCarrotRank : number = 0;
    /** 拔萝卜的总重量 */
    public CurrentCarrotWeight : number = 0;
    /** 剩余拔萝卜的次数 */
    public LeftTimes : number = 0;
    /** 是否跳过拔萝卜动画 */
    public IsJumpAnim : boolean = false;
    /** 收到的奖励列表 */
    public CarrotRewardList: any[] = [];

    public getCarrotRewardValueByID(Id: string): number {
        let jsonTable = JsonUtil.get(TableRadishAwardRank.TableName);
        if (jsonTable) 
        {
            const record = jsonTable[Id];
            if (record) {
                return record.data;
            }
        }

        return null;
    }

    public SendOpenPanel() {
        var completecpanel = (ret: HttpReturn) => {
            console.log(ret.res);
            if (ret && ret.isSucc) {
                this.CurrentCarrotRank = ret.res.idx;
                this.CurrentCarrotWeight = ret.res.weight;
                oops.message.dispatchEvent(GameEvent.OnMyRankChange);
            }
        }
    
        const data: { [key: string]: any } = {};
        data.userID = TonGameMgr.UserId;
        // data.token = "e10adc3949ba59abbe56e057f20f883e";
    
        const param = JSON.stringify(data);
        ProtocolMgr.sendopenluobopanel(completecpanel, param);
    }

    public SendBaLuoBo(times:number) {
        var completeCBaLuoBo = (ret: HttpReturn) => {
            console.log(ret.res);
            if (ret.isSucc && ret.res && ret.res.list)
            {
                console.log("SendBaLuoBo-------- : ", ret.res);
                for (let i=0; i<ret.res.list.length; i++) {
                    const item: RewardListData = {
                        time: ret.res.list[i].time,
                        config: ret.res.list[i].confId,
                        speed: TonGameMgr.GetRealCanTingGain(),
                    }
                    TonGameMgr.updateRabbitCoin(TonGameMgr.TuZiCoin + BigInt(TonGameMgr.GetRealCanTingGain()*Number(ret.res.list[i].time)*60));                
                    this.CarrotRewardList.push(item);
                }

                this.CurrentCarrotRank = ret.res.idx;
                this.CurrentCarrotWeight = ret.res.weight;
                oops.message.dispatchEvent(GameEvent.OnMyRankChange);
                
                let tablerecord = new TableOtherParameter();
                tablerecord.init(1);
                TonGameMgr.updateCarrotCoin(ret.res.carrotCoin);
                oops.gui.open(UIID.CarrotReward);
                oops.message.dispatchEvent(GameEvent.UpdateBaseData);
                oops.message.dispatchEvent(GameEvent.UpdateTuziCoin);
            }
        }
    
        const data: { [key: string]: any } = {};
        data.times = times.toString();
        data.userID = TonGameMgr.UserId;
        // data.token = "e10adc3949ba59abbe56e057f20f883e";
    
        const param = JSON.stringify(data);
        ProtocolMgr.sendcbaluobo(completeCBaLuoBo, param);
    }

    public SendOpenRankPanel() {
        var completeCRankPanel = (ret: HttpReturn) => {
            console.log(ret.res);
            if (ret.isSucc && ret.res && ret.res.list)
            {
                console.log("SendOpenRankPanel-------- : ", ret.res);
                let paramas: any = {};
                if (ret.res.list.length > 0) {
                    paramas.rankitemlist = ret.res.list;
                }
                oops.gui.open(UIID.CarrotRank, paramas);
            }
        }
    
        const data: { [key: string]: any } = {};
        data.userID = TonGameMgr.UserId;
        // data.token = "e10adc3949ba59abbe56e057f20f883e";
    
        const param = JSON.stringify(data);
        ProtocolMgr.sendcrankpanel(completeCRankPanel, param);
    }
}

export var CarrotMgr = new CarrotManager();
