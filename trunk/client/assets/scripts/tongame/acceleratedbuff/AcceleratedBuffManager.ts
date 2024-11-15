import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { HttpReturn } from "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest";
import { GameEvent } from "../../framework/common/config/GameEvent";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { TableAccelerate } from "../../framework/common/table/TableAccelerate";
import { HeChengComponent } from "../hecheng/HeChengComponent";
import { ProtocolMgr } from "../manager/ProtocolManager";
import { TonGameMgr } from "../manager/TonGameManager";
import { UtilMgr } from "../manager/UtilManager";
import { AcceleratedBuffMain } from "./AcceleratedBuffMain";

class AcceleratedBuffData {
    acceleratetime : number = 0;
    acceleratevalue : number = 0;
}

export class AcceleratedBuffManager {
    public IsGetFreeBuff = false;   // 是否已领取免费buff
    public GetFreeBuffTimeStamp = 0;// 领取免费buff的时间戳
    public IsGetShareBuff = false;   // 是否已领取分享buff
    public GetShareBuffTimeStamp = 0;// 领取分享buff的时间戳
    public AcceleratedList_1: any[] = [];
    public AcceleratedList_2: any[] = [];

    public AccelerateTime : number = 0;     // 剩余加速时长

        // 用来计算离线时的收益
        public OfflineAccelerateGain(usetime : number) : number{
            let lixiangain = 0;
            for (let i=0; i<usetime; i++) {
                if (this.AcceleratedList_1.length > 0) {
                    const item = this.AcceleratedList_1[0];
                    if (this.AcceleratedList_1[0].acceleratetime > 0) {
                        this.AcceleratedList_1[0].acceleratetime = this.AcceleratedList_1[0].acceleratetime - 1;
                        TonGameMgr.AcceAddtionGain_1 = this.AcceleratedList_1[0].acceleratevalue/100;
                        if (this.AcceleratedList_1[0].acceleratetime <= 0) {
                            TonGameMgr.AcceAddtionGain_1 = 0;
                            this.AcceleratedList_1.splice(0, 1);
                        }
                    }
                }
                else {
                    TonGameMgr.AcceAddtionGain_1 = 0;
                }
        
                if (this.AcceleratedList_2.length > 0) {
                    const item = this.AcceleratedList_2[0];
                    if (this.AcceleratedList_2[0].acceleratetime > 0) {
                        this.AcceleratedList_2[0].acceleratetime = this.AcceleratedList_2[0].acceleratetime - 1;
                        TonGameMgr.AcceAddtionGain_2 = this.AcceleratedList_2[0].acceleratevalue;
                        if (this.AcceleratedList_2[0].acceleratetime <= 0) {
                            TonGameMgr.AcceAddtionGain_2 = 0;
                            this.AcceleratedList_2.splice(0, 1);
                        }
                    }
                }
                else {
                    TonGameMgr.AcceAddtionGain_2 = 0;
                }
                lixiangain = lixiangain + TonGameMgr.GetRealCanTingGain();
            }

            this.AccelerateTime = this.getAccelerateTime();

            oops.message.dispatchEvent(GameEvent.UpdateBaseData);
            return lixiangain;
        }

    // 每秒更新加速信息
    public onUpdataAccelerateInfo() {
        if (this.AcceleratedList_1.length > 0) {
            const item = this.AcceleratedList_1[0];
            if (this.AcceleratedList_1[0].acceleratetime > 0) {
                this.AcceleratedList_1[0].acceleratetime = this.AcceleratedList_1[0].acceleratetime - 1;
                if (TonGameMgr.AcceAddtionGain_1 != this.AcceleratedList_1[0].acceleratevalue/100) {
                    TonGameMgr.AcceAddtionGain_1 = this.AcceleratedList_1[0].acceleratevalue/100;
                    oops.message.dispatchEvent(GameEvent.UpdateBaseData);
                }
                TonGameMgr.AcceAddtionGain_1 = this.AcceleratedList_1[0].acceleratevalue/100;
                if (this.AcceleratedList_1[0].acceleratetime <= 0) {
                    TonGameMgr.AcceAddtionGain_1 = 0;
                    oops.message.dispatchEvent(GameEvent.UpdateBaseData);
                    this.AcceleratedList_1.splice(0, 1);
                }
            }
        }
        else {
            TonGameMgr.AcceAddtionGain_1 = 0;
        }

        if (this.AcceleratedList_2.length > 0) {
            const item = this.AcceleratedList_2[0];
            if (this.AcceleratedList_2[0].acceleratetime > 0) {
                this.AcceleratedList_2[0].acceleratetime = this.AcceleratedList_2[0].acceleratetime - 1;
                if (TonGameMgr.AcceAddtionGain_2 != this.AcceleratedList_2[0].acceleratevalue) {
                    TonGameMgr.AcceAddtionGain_2 = this.AcceleratedList_2[0].acceleratevalue;
                    oops.message.dispatchEvent(GameEvent.UpdateBaseData);
                }
                if (this.AcceleratedList_2[0].acceleratetime <= 0) {
                    TonGameMgr.AcceAddtionGain_2 = 0;
                    oops.message.dispatchEvent(GameEvent.UpdateBaseData);
                    this.AcceleratedList_2.splice(0, 1);
                }
            }
        }
        else {
            TonGameMgr.AcceAddtionGain_2 = 0;
        }

        const HechengGUI = oops.gui.get(UIID.MainUI);
        if (HechengGUI) {
            const HechengCom = HechengGUI.getComponent(HeChengComponent);
            if (HechengCom) {
                HechengCom.RefreshBuffIcon();
            }
        }
        const buffGUI = oops.gui.get(UIID.AcceleratedBuffBuyMain);
        if (buffGUI) {
            const buffCom = buffGUI.getComponent(AcceleratedBuffMain);
            if (buffCom) {
                buffCom.RefreshBuffIcon();
            }
        }

    }

    public UpdateAccelerateTime() {
        if (this.AccelerateTime > 0) {
            if (TonGameMgr.CurBGM == 22 || TonGameMgr.CurBGM == 0) {
                UtilMgr.StopBgMusic();
                UtilMgr.PlayBgMusic(23);
            }
            this.AccelerateTime = this.AccelerateTime - 1;
            if (this.AccelerateTime <= 0) {
                this.AccelerateTime =  0
                if (TonGameMgr.CurBGM == 23 || TonGameMgr.CurBGM == 0) {
                    UtilMgr.StopBgMusic();
                    UtilMgr.PlayBgMusic(22);
                }
            }
        } else {
            if (TonGameMgr.CurBGM == 23 || TonGameMgr.CurBGM == 0) {
                UtilMgr.StopBgMusic();
                UtilMgr.PlayBgMusic(22);
            }
        }
    }

    // 根据配置信息添加一条buff信息
    public addAccelerateInfoById(configid:number) {
        let tablerecord = new TableAccelerate();
        tablerecord.init(configid)
        this.addAccelerateInfo(tablerecord.type, tablerecord.time, tablerecord.effect);
        this.AccelerateTime = this.getAccelerateTime();
    }

    // 添加一条buff信息
    public addAccelerateInfo(acceleratetype:number, time:number, value:number) {
        const item: AcceleratedBuffData = {
            acceleratetime : time,
            acceleratevalue : value,
        }

        if (acceleratetype == 1) {
            this.AcceleratedList_1.push(item);
        }
        else if (acceleratetype == 2) {
            this.AcceleratedList_2.push(item);
        }
        this.AccelerateTime = this.getAccelerateTime();
    }

    // 判断当前是否有加成buff
    public isAccelerating() : boolean {
        for (let i=0; i<this.AcceleratedList_1.length; i++) {
            if (this.AcceleratedList_1[i].acceleratetime > 0) {
                return true;
            }
        }
        for (let i=0; i<this.AcceleratedList_2.length; i++) {
            if (this.AcceleratedList_2[i].acceleratetime > 0) {
                return true;
            }
        }
        return false;
    }

    // 获取剩余加速时间
    public getAccelerateTime() : number {
        let time_1 = 0
        let time_2 = 0
        for (let i=0; i<this.AcceleratedList_1.length; i++) {
            if (this.AcceleratedList_1[i].acceleratetime > 0) {
                time_1 = time_1 + this.AcceleratedList_1[i].acceleratetime;
            }
        }
        for (let i=0; i<this.AcceleratedList_2.length; i++) {
            if (this.AcceleratedList_2[i].acceleratetime > 0) {
                time_2 = time_2 + this.AcceleratedList_2[i].acceleratetime;
            }
        }
        if (time_1 > time_2) {
            return time_1;
        }
        else {
            return time_2;
        }
    }

    public SendBuyBuff(confId:number) {
        var completeCBuyBuff = (ret: HttpReturn) => {
            console.log(ret.res);
            if (ret.isSucc && Number(ret.res.confId)!=-1)
            {
                let tablerecord = new TableAccelerate();
                tablerecord.init(Number(ret.res.confId));
                this.addAccelerateInfoById(confId);
                if (tablerecord.cost == 1) {
                    AcceleratedBuffMgr.IsGetFreeBuff = true;
                    AcceleratedBuffMgr.GetFreeBuffTimeStamp = oops.timer.getServerTime();
                }
                else if (tablerecord.cost == 2) {
                    AcceleratedBuffMgr.IsGetShareBuff = true;
                    AcceleratedBuffMgr.GetShareBuffTimeStamp = oops.timer.getServerTime();
                }
                else if (tablerecord.cost == 3) {
                    TonGameMgr.updateCarrotCoin(TonGameMgr.CarrotCoin - tablerecord.costnum);
                }
                oops.message.dispatchEvent(GameEvent.UpdateBaseData);
                oops.message.dispatchEvent(GameEvent.Save);
            }
        }
    
        const data: { [key: string]: any } = {};
        data.confId = confId.toString();
        data.userID = TonGameMgr.UserId;
        data.token = "e10adc3949ba59abbe56e057f20f883e";
    
        const param = JSON.stringify(data);
        ProtocolMgr.sendcbuybuff(completeCBuyBuff, param);
    }
}

export var AcceleratedBuffMgr = new AcceleratedBuffManager();