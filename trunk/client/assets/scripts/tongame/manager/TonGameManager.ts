
import { director, Node } from "cc";
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { GameEvent } from "../../framework/common/config/GameEvent";
import { EncryptUtil } from "../../../../extensions/oops-plugin-framework/assets/core/utils/EncryptUtil";

import { TonTimerManager } from "./TonTimerManager";
import { BoardMgr } from "./BoardManager";
import { UtilMgr } from "./UtilManager";
import { HeChengMgr } from "../hecheng/HeChengManager";
import { HeChengComponent } from "../hecheng/HeChengComponent";
import { RoleMgr } from "../role/RoleManager";
import { LiWuMgr } from "../liwu/LiWuManager";
import { GuideMgr } from "../hecheng/GuideManager";
import { ProtocolMgr } from "./ProtocolManager";
import { WebSocketMgr } from "./WebSocketManager";
import { HttpReturn } from "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest";

import { TableIngredients } from "../../framework/common/table/TableIngredients";
import { AcceleratedBuffMgr } from "../acceleratedbuff/AcceleratedBuffManager";
import GameUtils from "../../../resources/libs/utils/utils";
import { FeedMgr } from "../feed/FeedManager";
import { AcceleratedBuffMain } from "../acceleratedbuff/AcceleratedBuffMain";
import { ShopMgr } from "../shop/ShopManager";

const GAME_STORE_KEY = "ton_game";
const GAME_Board_KEY = "ton_board";
const DAILY_REWARD_DATA = "dailyRewardData";

const USER_UniqueID = "uniqueID";

const GAME_DEFAULT_TUZICOIN = 10000n;

export enum AutoTypeEnum {
    NoBuy,                  //没有购买自动功能
    HasBuyAndOpen,          //已经购买自动功能，并且开启自动
    HasBuyButClose,         //已经购买自动功能，但是关闭自动
}

export class TonGameManager {
    // 是否静音
    public IsMute : boolean = false;
    // 当前播放的BGM
    public CurBGM = 0;

    private IsEnglish : boolean = true;
    //是否是telegram的用户
    public IsTelegramUser : boolean = false;

    public TGHash : string = "";
    public TelegramReferrer : string = "";

    /** 数据版本号 */
    public DataVersionNum : bigint = 0n;

    /** 用户 */
    public UserId : string = "";

    /** 用户名字 */
    public UserName : string = "";

    /** 餐厅等级 */
    public CanTingLevel : number = 1;

    /** 兔子币 */
    public TuZiCoin : bigint = 0n;

    /** 萝卜币 */
    public CarrotCoin : number = 0;

    /** 餐厅收益(每秒获得的兔子币数量) */
    public CanTingGain : number = 0;

    /** 餐厅收益的加成百分比 0.3为30% （通过从商城购买兔子添加） */
    public AddtionGain : number = 0;

    /** 餐厅收益的加成百分比 0.3为30% （通过加速功能添加包括免费领取，直接购买和分享领取） */
    public AcceAddtionGain_1 : number = 0;

    /** 每秒额外获得的兔子币 （通过加速功能添加包括免费领取，直接购买和分享领取） */
    public AcceAddtionGain_2 : number = 0;

    /** 当前装备的兔子 */
    public CurRabbitId : number = 0;
    public CurRabbitAnimation : string = null;

    /** 当前已购买的兔子 */
    public RabbitIdList: any[] = [];

    /** 累计获得兔子币 */
    public TuZiTotalCoin : bigint = 0n;

    /** 累积获得萝卜币 */
    public CarrotTotalCoin : number = 0;

    /** 上次回收获得的兔子币的值 */
    public LastRecoverTuziCoin : number = 0;

    /** 餐厅经验 */
    public CanTingExp : number = 0;

    /** 商店购买的礼盒数量 */
    public GiftNum : number = 0;

    /** 自动类型 */
    public AutoType:AutoTypeEnum = AutoTypeEnum.NoBuy;

    //上次存盘时间戳
    private LastSavedTimestamp : number = 0;

    public ramdonToken : string = "";
    public TgBotToken : string = "";

    //玩家兔子币的段位
    public rankConfId : number = 1;
    //玩家兔子币榜的排名
    public tuZiCoinRankIds : number = 0;


    private persist: Node = null!
    static timerMgr: TonTimerManager;

    private save_data: any = {};
    private save_data_local: any = {};
    private _key: string | null = null;
    private _iv: string | null = null;

    public totaltimes : number = 0;

    private _tsIngredients = new TableIngredients();

    public init() {
        BoardMgr.setDataDefault();
        this.initKey(oops.config.game.localDataKey, oops.config.game.localDataIv);
        this.persist = new Node("TonGameManagerNode");
        director.addPersistRootNode(this.persist);

        var completeLogin = (ret: HttpReturn) => {
            if (ret.isSucc)
            {
                let Func = UtilMgr.parseMapString(ret.res.func);
                if (Func[1] && Func[1] > 0)
                {
                    this.AutoType = AutoTypeEnum.HasBuyButClose;
                }
                else
                {
                    this.AutoType = AutoTypeEnum.NoBuy;
                }

                this.UserName = ret.res.userName;
                this.ramdonToken = ret.res.ramdonToken;
                this.LastSavedTimestamp = ret.res.serverTimeStamp/1000;
                oops.timer.setServerTime(ret.res.serverTimeStamp);

                TonGameMgr.updateCarrotCoin(ret.res.carrotCoin);
                TonGameMgr.rankConfId = ret.res.rankConfId;
                TonGameMgr.tuZiCoinRankIds = ret.res.tuZiCoinRankIds;
                oops.message.dispatchEvent(GameEvent.LoginSuccess);
                TonGameManager.timerMgr = this.persist.addComponent(TonTimerManager)!;
                oops.message.on(GameEvent.UpdateBoardGrid, this.onUpdateData, this);
                oops.message.on(GameEvent.Save, this.onUpdateData, this);

                TonGameMgr.onLogin(ret.res);
                //建立websocket 连接
                WebSocketMgr.connectWebSocket(this.UserId);

                this.getTgBotToken();
                UtilMgr.keepScreenAwake();
            }
        }

        //获取唯一账号id
        if (!this.IsTelegramUser)
        {
            this.UserId = this.getOrCreateUniqueID();
            this.UserName = "User_"+ this.UserId.substring(0, 8);
            oops.storage.setUser(this.UserId);
        }

        const data: { [key: string]: any } = {};
        data.userID = this.UserId;
        data.channel = 1;
        data.token = "e10adc3949ba59abbe56e057f20f883e";
        /* 分享者Id */
        data.inviter = TonGameMgr.TelegramReferrer;

        const param = JSON.stringify(data);

        //oops.gui.toast("userid: " + data.userID + "\ninviterID:" + data.inviter, true);

        ProtocolMgr.sendLogin(completeLogin, param);
    }

    private onUpdateData(event: string, args: any) {
        switch (event) {
            case GameEvent.UpdateBoardGrid:
                this.updateCanTingGain();
                break;
            case GameEvent.Save:
                this.save();
                break;
        }
    }

    public onLogin(serverData)
    {
        this.load(serverData);
    }

    //更新餐厅收益
    public updateCanTingGain()
    {
        let canTingGain = 0;
        for (let index = 0; index < BoardMgr.board.length; index++) {
            const cell = BoardMgr.board[index];
            if (cell.SuCaiId > 0)
            {
                this._tsIngredients.init(cell.SuCaiId);
                canTingGain = canTingGain + this._tsIngredients.getmoney;
            }
        }
        if (canTingGain > this.CanTingGain)
        {
            const HechengGUI = oops.gui.get(UIID.MainUI);
            if (HechengGUI) {
                const HechengCom = HechengGUI.getComponent(HeChengComponent);
                if (HechengCom) {
                    HechengCom.ShowCanTingGainNum();
                }
            }
        }
        this.CanTingGain = canTingGain;
        oops.message.dispatchEvent(GameEvent.UpdateBaseData);
    }

    public GetSuCaiLevel(suCaiId) : number {
        this._tsIngredients.init(suCaiId);
        return this._tsIngredients.level;
    }

    // 获取实际餐厅收益 速率*(1+速率加成) 
    public GetRealCanTingGain() {
        return Math.floor((this.CanTingGain+this.AcceAddtionGain_2)*(1+this.AddtionGain+this.AcceAddtionGain_1)+0.5);
    }

    //每1秒执行一次
    public OnOneSecondUpdate() {
        let tempgain = AcceleratedBuffMgr.OfflineAccelerateGain(1);
        this.updateRabbitCoin(this.TuZiCoin + BigInt(tempgain));

        AcceleratedBuffMgr.UpdateAccelerateTime();
        FeedMgr.UpdateNextFreeDishTime();

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

    //每2秒执行一次
    public OnTwoSecondUpdate() {
        HeChengMgr.OnHandleAuto();
    }

    //每5秒执行一次
    public OnFiveSecondUpdate() {
        oops.message.dispatchEvent(GameEvent.UpdateTuziCoin);
        this.save();
        
        LiWuMgr.UpdateLiWu();
        GuideMgr.UpdateGuide();

        RoleMgr.UpdateVisitors();
    }
    
    //每10秒执行一次
    public OnTenSecondUpdate() {
        WebSocketMgr.sendPing();

    }

    //每60秒执行一次
    public OnSixtySecondUpdate() {
        
    }

    initKey(key: string, iv: string) {
        this._key = EncryptUtil.md5(key);
        this._iv = EncryptUtil.md5(iv);
    }

    private generateUUID() {
        const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
        return pattern.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    private getOrCreateUniqueID() {
        let uniqueID = oops.storage.get(USER_UniqueID);
        if (!uniqueID || uniqueID == "") {
            uniqueID = this.generateUUID();
            oops.storage.set(USER_UniqueID, uniqueID);
        }
        return uniqueID;
    }

    public save() {
        this.DataVersionNum = this.DataVersionNum + BigInt(1);
        this.save_data.DataVersionNum = this.DataVersionNum.toString();
        this.save_data.CanTingLevel = this.CanTingLevel;
        this.save_data.TuZiCoin = this.TuZiCoin.toString();
        this.save_data.CanTingGain = this.CanTingGain;
        this.save_data.CanTingExp = this.CanTingExp;
        this.save_data.GiftNum = this.GiftNum;
        this.save_data.AddtionGain = this.AddtionGain;
        this.save_data.CurRabbitId = this.CurRabbitId;
        this.save_data.RabbitIdList = this.RabbitIdList;
        this.save_data.GetFreeBuffTimeStamp = AcceleratedBuffMgr.GetFreeBuffTimeStamp;
        this.save_data.IsGetFreeBuff = AcceleratedBuffMgr.IsGetFreeBuff;
        this.save_data.GetShareBuffTimeStamp = AcceleratedBuffMgr.GetShareBuffTimeStamp;
        this.save_data.IsGetShareBuff = AcceleratedBuffMgr.IsGetShareBuff;
        this.save_data.AcceleratedList_1 = AcceleratedBuffMgr.AcceleratedList_1;
        this.save_data.AcceleratedList_2 = AcceleratedBuffMgr.AcceleratedList_2;
        this.save_data.FreeDishId = FeedMgr.FreeDishId;
        this.save_data.NextFreeDishTime = FeedMgr.NextFreeDishTime;
        this.save_data.HechengMaxLevel = FeedMgr.HechengMaxLevel;
        this.save_data.ExtDishPrice = FeedMgr.ExtDishPrice;
        this.save_data.LastRecoverTuziCoin = TonGameMgr.LastRecoverTuziCoin

        const currentTimestampInSeconds: number = Math.floor(oops.timer.getServerTime() / 1000);
        this.save_data.LastSavedTimestamp = currentTimestampInSeconds;

        this.saveToServer(this.save_data);

        oops.storage.set(GAME_STORE_KEY, this.save_data);
        BoardMgr.save();
    }

    saveToServer(value: any) {
        try {
            value = JSON.stringify(value);
        }
        catch (e) {
            return;
        }

        var completeSave = (ret: HttpReturn) => {
            console.log(ret.res);
        }

        const data: { [key: string]: any } = {};
        data.userID = this.UserId;
        data.carrotCoin = this.CarrotCoin;
        data.baseData = value;
        data.boardData = BoardMgr.getBoardListString();
        data.token = "e10adc3949ba59abbe56e057f20f883e";

        const param = JSON.stringify(data);
        ProtocolMgr.sendSave(completeSave, param);
    }

    load(serverData) {
        this.loadFromServer(serverData);
    }

    loadFromServer(serverData) {
        if (serverData)
        {
            if (serverData.userID == this.UserId)
            {
                try {
                    this.save_data = JSON.parse(serverData.baseData);
                    this.setData();
                    BoardMgr.load(serverData);
                    this.loadFromLocal();
                } catch (e) {
                    this.clearLocalData();
                    this.setDataDefault();
                    BoardMgr.load(serverData);
                }   
            }
            else
            {
                this.setDataDefault();
            }
        }
        else
        {
            this.setDataDefault();
        }
    }

    clearLocalData()
    {
        oops.storage.remove(DAILY_REWARD_DATA);
        oops.storage.remove(GAME_Board_KEY);
        oops.storage.remove(GAME_STORE_KEY);
    }

    loadFromLocal(){
        this.save_data_local = oops.storage.getJson(GAME_STORE_KEY);
        if (this.save_data_local) {
           if (this.save_data_local.DataVersionNum > this.save_data.DataVersionNum)
           {
                this.save_data = this.save_data_local;
                this.setData();
                BoardMgr.loadFromLocal();
           }
        }
    }

    private setData() {
        this.DataVersionNum = BigInt(this.save_data.DataVersionNum);
        this.CanTingLevel = this.save_data.CanTingLevel;
        this.TuZiCoin = BigInt(this.save_data.TuZiCoin);
        this.CanTingGain = this.save_data.CanTingGain;
        this.CanTingExp = this.save_data.CanTingExp;
        this.GiftNum = this.save_data.GiftNum;
        this.AddtionGain = this.save_data.AddtionGain;
        if (!this.save_data.AddtionGain) {
            this.AddtionGain = 0;
        }
        this.CurRabbitId = this.save_data.CurRabbitId;
        if (!this.save_data.CurRabbitId) {
            this.CurRabbitId = 0;
            this.CurRabbitId = null;
        } else {
            this.CurRabbitAnimation = ShopMgr.GetRandomAnimation(this.save_data.CurRabbitId);
        }
        this.RabbitIdList = this.save_data.RabbitIdList;
        if (!this.save_data.RabbitIdList) {
            this.RabbitIdList = [];
        }

        AcceleratedBuffMgr.IsGetFreeBuff = this.save_data.IsGetFreeBuff;
        if (!this.save_data.IsGetFreeBuff) {
            AcceleratedBuffMgr.IsGetFreeBuff = false;
        }
        AcceleratedBuffMgr.GetFreeBuffTimeStamp = this.save_data.GetFreeBuffTimeStamp;
        if (!this.save_data.GetFreeBuffTimeStamp) {
            AcceleratedBuffMgr.GetFreeBuffTimeStamp = 0;
        }
        AcceleratedBuffMgr.IsGetShareBuff = this.save_data.IsGetShareBuff;
        if (!this.save_data.IsGetShareBuff) {
            AcceleratedBuffMgr.IsGetShareBuff = false;
        }
        AcceleratedBuffMgr.GetShareBuffTimeStamp = this.save_data.GetShareBuffTimeStamp;
        if (!this.save_data.GetShareBuffTimeStamp) {
            AcceleratedBuffMgr.GetShareBuffTimeStamp = 0;
        }
        AcceleratedBuffMgr.AcceleratedList_1 = this.save_data.AcceleratedList_1;
        if (!this.save_data.AcceleratedList_1) {
            AcceleratedBuffMgr.AcceleratedList_1 = [];
        }
        AcceleratedBuffMgr.AcceleratedList_2 = this.save_data.AcceleratedList_2;
        if (!this.save_data.AcceleratedList_2) {
            AcceleratedBuffMgr.AcceleratedList_2 = [];
        }

        FeedMgr.FreeDishId = this.save_data.FreeDishId;
        if (!this.save_data.FreeDishId) {
            FeedMgr.FreeDishId = 0;
        }
        FeedMgr.NextFreeDishTime = this.save_data.NextFreeDishTime;
        if (!this.save_data.NextFreeDishTime) {
            FeedMgr.NextFreeDishTime = 0;
        }
        FeedMgr.HechengMaxLevel = this.save_data.HechengMaxLevel;
        if (!this.save_data.HechengMaxLevel) {
            FeedMgr.HechengMaxLevel = [];
        }
        FeedMgr.ExtDishPrice = this.save_data.ExtDishPrice;
        if (!this.save_data.ExtDishPrice) {
            FeedMgr.ExtDishPrice = [];
        }

        this.LastRecoverTuziCoin = this.save_data.LastRecoverTuziCoin;
        if (!this.save_data.LastRecoverTuziCoin) {
            this.LastRecoverTuziCoin = 0;
        }

        if (this.save_data.LastSavedTimestamp)
        {
            this.LastSavedTimestamp = this.save_data.LastSavedTimestamp;
        }

        
        if (AcceleratedBuffMgr.IsGetFreeBuff) {
            let newdate = new Date(AcceleratedBuffMgr.GetFreeBuffTimeStamp);
            let istoday = GameUtils.isToday(newdate);
            if (!istoday) {
                AcceleratedBuffMgr.IsGetFreeBuff = false;
                AcceleratedBuffMgr.GetFreeBuffTimeStamp = 0;
            }
        }
        if (AcceleratedBuffMgr.IsGetShareBuff) {
            let newdate = new Date(AcceleratedBuffMgr.GetShareBuffTimeStamp);
            let istoday = GameUtils.isToday(newdate);
            if (!istoday) {
                AcceleratedBuffMgr.IsGetShareBuff = false;
                AcceleratedBuffMgr.GetShareBuffTimeStamp = 0;
            }
        }
        
        //计算离线收益
        const currentTimestampInSeconds: number = Math.floor(oops.timer.getServerTime() / 1000);
        let lixianTime = currentTimestampInSeconds - this.LastSavedTimestamp;
        let usetime = lixianTime;
        if (lixianTime > 14400)
        {
            //最多可累计4小时
            usetime = 14400;
        }

        FeedMgr.RefreshData(usetime);

        // let lixianShouyi = this.GetRealCanTingGain() * usetime;
        let lixianShouyi = AcceleratedBuffMgr.OfflineAccelerateGain(usetime);
        if (lixianShouyi > 0)
        {
            this.updateRabbitCoin(this.TuZiCoin + BigInt(lixianShouyi));

            // 打开游戏主界面
            let params: any = {};
            params.LixianTime = lixianTime;
            params.LixianShouyi = lixianShouyi;
            oops.gui.open(UIID.MainUI, params);
        }
        else
        {
            // 打开游戏主界面
            let params: any = {};
            params.LixianTime = 0;
            params.LixianShouyi = 0;
            oops.gui.open(UIID.MainUI, params);
        }
    }

    private setDataDefault() {
        this.save_data = {};
        //初始餐厅等级
        this.CanTingLevel = 1;
        //初始兔子币
        this.TuZiCoin = GAME_DEFAULT_TUZICOIN;

        this.CanTingExp = 0;
        this.GiftNum = 0;
        this.AddtionGain = 0;
        this.CurRabbitId = 0;
        this.RabbitIdList = [];

        this.LastSavedTimestamp = 0;
        // 打开游戏主界面
        let params: any = {};
        params.LixianTime = 0;
        params.LixianShouyi = 0;
        oops.gui.open(UIID.MainUI);
    }

    public updateRabbitCoin(value:bigint) {
        if (value > this.TuZiTotalCoin) {
            this.TuZiTotalCoin = value;
        }
        this.TuZiCoin = value;
    }

    public updateCarrotCoin(value:number) {
        if (value > this.CarrotTotalCoin) {
            this.CarrotTotalCoin = value;
        }
        this.CarrotCoin = value;
        oops.message.dispatchEvent(GameEvent.UpdateCarrotCoin);
    }

    public modifyGiftNum(value:number) {
        this.GiftNum = this.GiftNum + value;
    }

    //检测是否0点
    private checkMidnight(): boolean {
        const now = oops.timer.getServerDate();
        const hours = now.getHours();
        const minutes = now.getMinutes();
    
        // 如果当前时间是 00:00
        return hours === 0 && minutes === 0;
    }

    private getTgBotToken() {
        var completeTgBotToken = (ret: HttpReturn) => {
            if (ret.isSucc)
            {
                this.TgBotToken = ret.res;
            }
        }

        ProtocolMgr.sendGetTgBotToken(completeTgBotToken, "");
    }

    public switchLanguage()
    {
        if (this.IsEnglish) {
            this.IsEnglish = false;
            oops.language.setLanguage("zh", () => { });
        }
        else {
            this.IsEnglish = true;
            oops.language.setLanguage("en", () => { });
        }
    }

}

export var TonGameMgr = new TonGameManager();