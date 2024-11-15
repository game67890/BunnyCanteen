import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { LayerType } from "../../../../extensions/oops-plugin-framework/assets/core/gui/layer/LayerManager";
import { GameEvent } from "../../framework/common/config/GameEvent";
import { TableRestaurantlevel } from "../../framework/common/table/TableRestaurantlevel";
import { TableIngredients } from "../../framework/common/table/TableIngredients";
import { TonGameMgr, AutoTypeEnum } from "../manager/TonGameManager";
import { StringUtil } from '../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil';
import { LiWuMgr } from "../liwu/LiWuManager";
import { HeChengComponent } from "./HeChengComponent";
import { GridComponent } from "./GridComponent";
import { UtilMgr } from "../manager/UtilManager";
import { BoardMgr } from "../manager/BoardManager";
import { JsonUtil } from "../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { CarrotMgr } from "../pullingcarrots/CarrotManager";
import { FeedMgr } from "../feed/FeedManager";
import { GuideMgr } from "../hecheng/GuideManager";

export class HeChengManager {
    private _tsRestaurantlevel = new TableRestaurantlevel();
    private _tsIngredients = new TableIngredients();

    public IsAutoHechenging : boolean = false;
    public IsPlayHechengingAnim : boolean = false;
    public IsAutoOpenLiwu : boolean = false;
    private GridIsFullTipsTimes: number = 0;
    private TuZiCoinTipsTimes: number = 0;

    public IsDraging : boolean = false;

    /** 回收 */
    public onHuiShou() {
        console.log("onHuiShou");
    }

    /** 打开拔萝卜界面 */
    public onGotoCarrots() {
        oops.gui.open(UIID.CarrotMain);
        CarrotMgr.SendOpenPanel();
        // ShopMgr.SendAddCarrotCoin(1000000);
    }

    /** 采购 */
    public onCaiGou(isAuto:boolean) {
        if (!BoardMgr.isHasEmptyGrid())
        {
            //已经放不下更多食材啦，快去合成吧！
            if (isAuto)
            {
                if (!oops.gui.hasUI(LayerType.PopUp) && !oops.gui.hasUI(LayerType.Dialog))
                {
                    if (this.GridIsFullTipsTimes == 0)
                    {
                        this.GridIsFullTipsTimes += 1;
                        oops.gui.toast("stringres_002", true);
                    }
                    
                }
            }
            else
            {
                oops.gui.toast("stringres_002", true);
            }

            return;
        }
        this._tsRestaurantlevel.init(TonGameMgr.CanTingLevel);
        let Cost = this.GetMakeSucaiCost();
        if (TonGameMgr.TuZiCoin < this.GetMakeSucaiCost())
        {
            //兔子币不足，无法采购
            if (isAuto)
            {
                if (!oops.gui.hasUI(LayerType.PopUp) && !oops.gui.hasUI(LayerType.Dialog))
                {
                    if (this.TuZiCoinTipsTimes == 0)
                    {
                        this.TuZiCoinTipsTimes += 1;
                        oops.gui.toast("stringres_003", true);
                    }
                }
            }
            else
            {
                oops.gui.toast("stringres_003", true);
            }
            
            return;
        }
        
        if (TonGameMgr.TuZiCoin >= Cost)
        {
            let IngredientsId = this.GetSucaiIdByCanTingLv(TonGameMgr.CanTingLevel);
            if (IngredientsId > 0 && BoardMgr.addGrid(IngredientsId))
            {
                TonGameMgr.updateRabbitCoin(TonGameMgr.TuZiCoin - BigInt(Cost));
                this._tsIngredients.init(IngredientsId);
                FeedMgr.UpdateExtDishPrice(IngredientsId);
                oops.message.dispatchEvent(GameEvent.UpdateBaseData);
                oops.message.dispatchEvent(GameEvent.UpdateTuziCoin);
                oops.message.dispatchEvent(GameEvent.UpdateBoardGrid);
                oops.message.dispatchEvent(GameEvent.Save);

                this.GridIsFullTipsTimes = 0;
                this.TuZiCoinTipsTimes = 0;
            }
        }
    }

    public GetMakeSucaiCost():number {
        let IngredientsId = this.GetSucaiIdByCanTingLv(TonGameMgr.CanTingLevel);
        if (IngredientsId > 0)
        {
            this._tsIngredients.init(IngredientsId);
            if (FeedMgr.ExtDishPrice[IngredientsId]) {
                return Math.floor(this._tsIngredients.cost1*(1+FeedMgr.ExtDishPrice[IngredientsId]));
            }
            else
            {
                return this._tsIngredients.cost1;
            }
        }
        return 0;
    }

    public GetMaxCantingLevel() : number {
        let MaxCantingLevel = 1;
        let jsonTabel = JsonUtil.get(TableRestaurantlevel.TableName);
        if (jsonTabel) {
            for (let id in jsonTabel) {
                if (Number(id) > MaxCantingLevel)
                {
                    MaxCantingLevel = Number(id);
                }
            }
        }
        return MaxCantingLevel;
    }

    public GetSucaiIdByCanTingLv(level : number) : number {
        let resultIndex = 0;
        this._tsRestaurantlevel.init(level);
        let foodlevel = this._tsRestaurantlevel.foodlevel;
        let resultLevel = foodlevel;
        let resultIngredients : number[] = [];
        let jsonIngredients = JsonUtil.get(TableIngredients.TableName);
        if (jsonIngredients) {
            for (let id in jsonIngredients) {
                let Ingredients = jsonIngredients[id];
                if (Ingredients.level == resultLevel) {
                    return Number(id);
                }
            }
        }
        return 0;
    }

    /** 自动 */
    public onAuto() {
        if (TonGameMgr.AutoType == AutoTypeEnum.NoBuy)
        {
            //打开购买界面
            oops.gui.open(UIID.BuyAutoUI);
        }
        else if (TonGameMgr.AutoType == AutoTypeEnum.HasBuyAndOpen)
        {
            TonGameMgr.AutoType = AutoTypeEnum.HasBuyButClose;
            oops.gui.toast("message_25", true);
            oops.message.dispatchEvent(GameEvent.UpdateAutoBtn);
        }
        else if (TonGameMgr.AutoType == AutoTypeEnum.HasBuyButClose)
        {
            TonGameMgr.AutoType = AutoTypeEnum.HasBuyAndOpen;
            oops.gui.toast("message_24", true);
            oops.message.dispatchEvent(GameEvent.UpdateAutoBtn);
        }
    }

    public OnHandleAuto()
    {
        //处理自动
        if (TonGameMgr.AutoType == AutoTypeEnum.HasBuyAndOpen)
        {
            GuideMgr.ResetGuide();
            if (this.IsAutoHechenging)
                return;
            if (this.IsAutoOpenLiwu)
                return;
            if (this.OnAutoHecheng())
            {
                console.log("OnAutoHecheng");
            }
            else
            {
                if (this.OnAutoOpenLiwu())
                {

                }
                else
                {
                    //自动采购
                    this.onCaiGou(true);
                    //自动回收
                    this.OnAutoHuiShou();
                }
            }
        }
    }

    public OnAutoHuiShou()
    {
        this._tsRestaurantlevel.init(TonGameMgr.CanTingLevel);
        if (this._tsRestaurantlevel.recoverylevel > 0)
        {
            for (let index = 0; index < BoardMgr.board.length; index++) {
                const cell = BoardMgr.board[index];
                this._tsIngredients.init(cell.SuCaiId);
                if (this._tsIngredients.level <= this._tsRestaurantlevel.recoverylevel)
                {
                    this.HandleHuiShou(index);
                }
            }
        }
    }

    
    public OnAutoHecheng() : boolean
    {
        for (let i = 0; i < BoardMgr.board.length; i++) {
            for (let j = i + 1; j < BoardMgr.board.length; j++) {
                if (BoardMgr.board[i].SuCaiId > 0 && BoardMgr.board[i].SuCaiId === BoardMgr.board[j].SuCaiId) {
                    let NextSuCaiId = this.GetNextLevelSuCaiId(BoardMgr.board[i].SuCaiId);
                    if (NextSuCaiId > 0)
                    {
                        //找到可以合成的素材了
                        this.IsAutoHechenging = true;
                        let params : any = {};
                        params.SrcIndex = i;
                        params.DestIndex = j;
                        oops.message.dispatchEvent(GameEvent.OnAutoHecheng, params);
                        return true;
                    }
                }
            }
        }
        return false;
    }

    public OnAutoOpenLiwu() : boolean
    {
        for (let i = 0; i < BoardMgr.board.length; i++) {
            if (BoardMgr.board[i].IsLiWu && !BoardMgr.board[i].IsLiWuFlying)
            {
                this.IsAutoOpenLiwu = true;
                LiWuMgr.openLiwu(i);
                return true;
            }
        }
        return false;
    }

    public HandleHecheng(srcIndex:number, destIndex:number) :boolean
    {
        if (BoardMgr.board && BoardMgr.board[srcIndex] && BoardMgr.board[destIndex])
        {
            let srcSuCaiId = BoardMgr.board[srcIndex].SuCaiId;
            let destSuCaiId = BoardMgr.board[destIndex].SuCaiId;
            if (srcSuCaiId > 0 && destSuCaiId > 0 && srcSuCaiId === destSuCaiId)
            {
                let NextSuCaiId = this.GetNextLevelSuCaiId(srcSuCaiId);
                if (NextSuCaiId > 0)
                {
                    const HechengGUI = oops.gui.get(UIID.MainUI);
                    if (HechengGUI) 
                    {
                        const HechengCom = HechengGUI.getComponent(HeChengComponent);
                        if (HechengCom) 
                        {
                            let gridNode = HechengCom.getGridNode(destIndex);
                            if (gridNode)
                            {
                                const gridComponent = gridNode.getComponent(GridComponent);
                                if (gridComponent) 
                                {
                                    let srcGridNode = HechengCom.getGridNode(srcIndex);
                                    if (srcGridNode)
                                    {
                                        const srcGridComponent = srcGridNode.getComponent(GridComponent);
                                        if (srcGridComponent) 
                                        {
                                            srcGridComponent.SuCaiSprite.node.active = false;
                                        }
                                    }
                                    UtilMgr.PlaySoundEffect(29);
                                    this.IsPlayHechengingAnim = true;
                                    UtilMgr.addNodeAnimation("animation/hecheng", gridComponent.SuCaiSprite.node, true, false, () => {
                                        FeedMgr.UpdateHechengMaxLevel(NextSuCaiId);
                
                                        BoardMgr.board[srcIndex].SuCaiId = 0;
                                        BoardMgr.board[destIndex].SuCaiId = NextSuCaiId;
                    
                                        UtilMgr.PlaySoundEffect(16);
                                        this.IsAutoHechenging = false;
                                        this.IsPlayHechengingAnim = false;
                                        //合成加餐厅经验
                                        this.AddCanTingExp(NextSuCaiId);
                                        oops.message.dispatchEvent(GameEvent.UpdateBaseData);
                                        oops.message.dispatchEvent(GameEvent.UpdateBoardGrid);
                                        oops.message.dispatchEvent(GameEvent.Save);
                                    });
                                }
                            }
                        }
                    }
                    

                }
            }
        }
        //处理合成
        return false;
    }
    //增加餐厅经验
    public AddCanTingExp(NextSuCaiId:number) {
        this._tsIngredients.init(NextSuCaiId);
        TonGameMgr.CanTingExp = TonGameMgr.CanTingExp + this._tsIngredients.getexp;
        //判断是否升级
        this._tsRestaurantlevel.init(TonGameMgr.CanTingLevel);
        if (this._tsRestaurantlevel.exp > 0)
        {
            if (TonGameMgr.CanTingExp >= this._tsRestaurantlevel.exp)
            {//餐厅可以升级了
                let nextLevel = TonGameMgr.CanTingLevel + 1;
                if (nextLevel <= this.GetMaxCantingLevel())
                {
                    TonGameMgr.CanTingExp = TonGameMgr.CanTingExp - this._tsRestaurantlevel.exp;
                    TonGameMgr.CanTingLevel = TonGameMgr.CanTingLevel + 1;
                    FeedMgr.updateFreeDishId();
                    oops.message.dispatchEvent(GameEvent.UpdateBaseData);
                    oops.message.dispatchEvent(GameEvent.Save);
                    let tips = StringUtil.substitute_1(oops.language.getLangByID("message_27"), TonGameMgr.CanTingLevel);
                    oops.gui.toast(tips, true);

                }      
            }
        }
    }

    public GetNextLevelSuCaiId(SuCaiId:number) : number {
        this._tsIngredients.init(SuCaiId);
        let curSuCaiType = this._tsIngredients.type;
        let nextSuCaiLevel = this._tsIngredients.level+1;

        let jsonIngredients = JsonUtil.get(TableIngredients.TableName);
        if (jsonIngredients) 
        {
            for (let id in jsonIngredients) {
                let Ingredients = jsonIngredients[id];
                if (Ingredients.type == curSuCaiType &&  Ingredients.level == nextSuCaiLevel) 
                {
                    return Number(id);
                }
            }
        }
        return 0;
    }

    public HandleHuiShou(index:number) {
        if (BoardMgr.board && BoardMgr.board[index])
        {
            let suCaiId = BoardMgr.board[index].SuCaiId;
            if (suCaiId > 0)
            {
                this._tsIngredients.init(suCaiId);
                BoardMgr.board[index].SuCaiId = 0;
                TonGameMgr.updateRabbitCoin(TonGameMgr.TuZiCoin + BigInt(this._tsIngredients.recovery));
                TonGameMgr.LastRecoverTuziCoin = this._tsIngredients.recovery;

                UtilMgr.PlaySoundEffect(30);

                oops.message.dispatchEvent(GameEvent.UpdateBaseData);
                oops.message.dispatchEvent(GameEvent.UpdateTuziCoin);
                oops.message.dispatchEvent(GameEvent.UpdateBoardGrid);
                oops.message.dispatchEvent(GameEvent.Save);
            }
        }
    }
}

export var HeChengMgr = new HeChengManager();