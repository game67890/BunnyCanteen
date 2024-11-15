import { Animation, AnimationClip, _decorator, Component, Node, Label, Prefab, instantiate, Vec3, Vec2, view, ResolutionPolicy, tween} from 'cc';
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { GameEvent } from "../../framework/common/config/GameEvent";
import { TonGameMgr, AutoTypeEnum } from "../manager/TonGameManager";
import { HeChengMgr } from "./HeChengManager";
import { UtilMgr } from "../manager/UtilManager";
import { BoardMgr, GAME_GRID_SIZE } from "../manager/BoardManager";
import { GridComponent } from "./GridComponent";
import { FlyComponent } from "../contact/FlyComponent";
import { DiningTableMgr } from "../diningtable/DiningTableManager";

import { Button } from 'cc';
import { UITransform } from 'cc';
import { Sprite } from 'cc';
import { TableShop } from '../../framework/common/table/TableShop';

import { PaymentMgr } from "../payment/PaymentManager";
import { RankMgr } from "../rank/RankManager";
import { TaskMgr } from "../task/TaskManager";
import { RoleComponent } from "../role/RoleComponent";

import { AcceleratedBuffMgr } from '../acceleratedbuff/AcceleratedBuffManager';
import { FeedMgr } from '../feed/FeedManager';
import { IniviteMgr } from '../invite/InviteManager';
import { TableRestaurantlevel } from "../../framework/common/table/TableRestaurantlevel";
import { TableIngredients } from "../../framework/common/table/TableIngredients";
import { TableOtherParameter } from '../../framework/common/table/TableOtherParameter';

const { ccclass, property } = _decorator;

const startX = -224;
const startY = 152; 
const gridSpacing = 0; // 格子间距

const tableStartX = -160;
const tableStartY = 185; 
const tableSpacing = 0; // 格子间距


@ccclass('HeChengComponent')
export class HeChengComponent extends Component {
    
    /** 充值 */
    @property(Label)
    PayLabel: Label;

    /** 任务 */
    @property(Label)
    TaskLabel: Label;

    /** 制作 */
    @property(Label)
    MakeLabel: Label;

    /** 制作需要消耗的兔子币 */
    @property(Label)
    MakeNeedTuziCoin: Label;

    /** 制作生成的素材等级 */
    @property(Sprite)
    MakeSucaiImage: Sprite;

    /** 菜场 */
    @property(Label)
    FoodMarketLabel: Label;

    /** 邀请 */
    @property(Label)
    InviteLabel: Label;

    /** 购买 */
    @property(Label)
    BuyLabel: Label;

    /** 拔萝卜 */
    @property(Label)
    BaluoboLabel: Label;

    /** 餐厅等级背景图片 */
    @property(Sprite)
    CanTingLevelBack: Sprite;

    /** 餐厅等级 */
    @property(Label)
    CanTingLevel: Label;

    /** 兔子币 */
    @property(Label)
    TuZiCoin: Label;

    /** 兔子币图标 */
    @property(Sprite)
    TuZiCoinImage: Sprite;

    /** 餐厅收益 */
    @property(Label)
    CanTingGain: Label;

    /** 棋盘格子的预制体 */
    @property(Prefab)
    gridPrefab: Prefab = null; 

    /** 棋盘的父窗口 */
    @property(Node)
    gridParentNode: Node = null;

    /** 引导的预制体 */
    @property(Prefab)
    guidePrefab: Prefab = null; 

    /** 桌子的预制体 */
    @property(Prefab)
    tablePrefab: Prefab = null; 
    
    /** 桌子的父窗口 */
    @property(Node)
    tableParentNode: Node = null; 

    /** 角色的预制体 */
    @property(Prefab)
    rolePrefab: Prefab = null;

    /** 角色的父窗口 */
    @property(Node)
    roleParentNode: Node = null;

    /** 礼物的预制体 */
    @property(Prefab)
    liwuPrefab: Prefab = null;
    
    /** 礼物的父窗口 */
    @property(Node)
    liwuParentNode: Node = null; 

    /** 兔子币的预制体 */
    @property(Prefab)
    tuziCoinPrefab: Prefab = null;
        
    /** 礼物的父窗口 */
    @property(Node)
    tuziCoinParentNode: Node = null; 

    /** 拔萝卜按钮 */
    @property(Button)
    PullCarrotsBtn: Button;

    /** 兔子icon */
    @property(Sprite)
    RabbitIcon : Sprite;
    /** 加速icon */
    @property(Sprite)
    buffIcon : Sprite;
    /** 加速红点icon */
    @property(Sprite)
    buffRedIcon : Sprite;
    /** 喂食按钮红点icon */
    @property(Sprite)
    FeedRedIcon : Sprite;
    /** 静音按钮icon */
    @property(Sprite)
    MuteBtnIcon : Sprite;

    /** 排行榜段位图标 */
    @property(Sprite)
    rankIcon : Sprite;
    /** 排行榜排名 */
    @property(Label)
    rankNum: Label;

    /** 自动按钮(静态按钮不带动画)*/
    @property(Node)
    autoBtnDefault: Node;

    /** 自动按钮(带动画) */
    @property(Node)
    autoBtnEffect: Node;
    /** 自动按钮(播放动画的控件) */
    @property(Node)
    autoEffect: Node;

    /** 正常的底框 */
    @property(Node)
    normalBottom: Node;

    /** 回收的底框 */
    @property(Node)
    huishouBottom: Node;

    /** 回收的文字 */
    @property(Label)
    huishouText: Label;

    private board: Node[] = [];

    private gridWidth = 150; // 格子宽
    private gridHeight = 100; // 格子高

    private tableWidth = 200; // 桌子宽
    private tableHeight = 150; // 桌子高

    private _tsRestaurantlevel = new TableRestaurantlevel();
    private _tsIngredients = new TableIngredients();
    private tableOtherParameter = new TableOtherParameter();
    private tableShop = new TableShop();

    private tuziCoinCount : number = 10;

    start() {
    }

    update(deltaTime: number) {
        
    }

    onAdded(params: any): boolean {
        UtilMgr.onAudioCompleteCallback();
        this.init();
        this.addEvent();
        this.createGrid();
        this.createTable();

        if (params.LixianShouyi > 0)
        {
            // 打开收益主界面
            oops.gui.open(UIID.ShouYiUI, params);
        }
        setTimeout(() => {
            this.preLoadPrefab();
        }, 5000);
        
        return true;
    }
    private preLoadPrefab()
    {
        oops.gui.preLoad(UIID.PaymentUI);
        oops.gui.preLoad(UIID.Task);
        oops.gui.preLoad(UIID.Rank);
        oops.gui.preLoad(UIID.CarrotMain);
        oops.gui.preLoad(UIID.CarrotRank);
        oops.gui.preLoad(UIID.ShopMain);
        oops.gui.preLoad(UIID.AcceleratedBuffBuyMain);
        oops.gui.preLoad(UIID.FeedMain);
        oops.gui.preLoad(UIID.InviteMain);
        oops.gui.preLoad(UIID.InviteAcivity);
        oops.gui.preLoad(UIID.BuyAutoUI);
    }

    private init() {
        this.updateBaseData();
        this.updateTuziCoin();
        this.updateRankData();
        this.RefreshRabbitIcon();
        this.RefreshBuffIcon();
        this.RefreshFeedRed();
        this.RefreshMuteBtn();
        this.RefreshAutoBtn();
    }

    onDestroy() {
        UtilMgr.StopBgMusic();
        this.removeEvent();
    }

    /** 添加全局消息事件 */
    private addEvent() {
        oops.message.on(GameEvent.UpdateBaseData, this.onUpdateData, this);
        oops.message.on(GameEvent.UpdateTuziCoin, this.onUpdateData, this);
        oops.message.on(GameEvent.UpdateBoardGrid, this.onUpdateData, this);
        oops.message.on(GameEvent.OnAutoHecheng, this.onUpdateData, this);
        oops.message.on(GameEvent.UpdateAutoBtn, this.onUpdateData, this);
        oops.message.on(GameEvent.UpdateHuishouBtn, this.onUpdateData, this);
    }

    /** 移除全局消息事件 */
    private removeEvent() {
        oops.message.off(GameEvent.UpdateBaseData, this.onUpdateData, this);
        oops.message.off(GameEvent.UpdateTuziCoin, this.onUpdateData, this);
        oops.message.off(GameEvent.UpdateBoardGrid, this.onUpdateData, this);
        oops.message.off(GameEvent.OnAutoHecheng, this.onUpdateData, this);
        oops.message.off(GameEvent.UpdateAutoBtn, this.onUpdateData, this);
        oops.message.off(GameEvent.UpdateHuishouBtn, this.onUpdateData, this);
    }

    private onUpdateData(event: string, args: any) {
        switch (event) {
            case GameEvent.UpdateBaseData:
                this.updateBaseData();
                break;
            case GameEvent.UpdateTuziCoin:
                this.updateTuziCoin();
                break;
            case GameEvent.UpdateBoardGrid:
                this.updateGrid();
                break;
            case GameEvent.OnAutoHecheng:
                this.onAutoHecheng(args);
                break;
            case GameEvent.UpdateAutoBtn:
                this.RefreshAutoBtn();
                break;
            case GameEvent.UpdateHuishouBtn:
                this.RefreshHuishouBtn();
                break;
        }
    }

    private updateBaseData() {
        this.PayLabel.string = oops.language.getLangByID("stringres_105");
        this.TaskLabel.string = oops.language.getLangByID("stringres_106");
        this.MakeLabel.string = oops.language.getLangByID("stringres_001");
        this.FoodMarketLabel.string = oops.language.getLangByID("stringres_107");
        this.InviteLabel.string = oops.language.getLangByID("stringres_108");
        //this.AutoLabel.string = oops.language.getLangByID("stringres_020");
        this.BuyLabel.string = oops.language.getLangByID("stringres_109");
        this.BaluoboLabel.string = oops.language.getLangByID("stringres_110");
        
        this.CanTingLevel.string = TonGameMgr.CanTingLevel.toString();
        this.CanTingGain.string = TonGameMgr.GetRealCanTingGain().toString() + "/s";

        this._tsRestaurantlevel.init(TonGameMgr.CanTingLevel);
        UtilMgr.SetImage(this.CanTingLevelBack, this._tsRestaurantlevel.picture);

        let NeedCoin = HeChengMgr.GetMakeSucaiCost();
        this.MakeNeedTuziCoin.string = UtilMgr.formatNumber(BigInt(NeedCoin));
        let IngredientsId = HeChengMgr.GetSucaiIdByCanTingLv(TonGameMgr.CanTingLevel);
        if (IngredientsId > 0)
        {
            this._tsIngredients.init(IngredientsId);
            UtilMgr.SetImage(this.MakeSucaiImage, this._tsIngredients.picture);
        }
    }

    private updateTuziCoin() {
        this.TuZiCoin.string = UtilMgr.formatNumber(TonGameMgr.TuZiCoin);
    }

    private updateRankData() {
        let RankData = RankMgr.GetRankDataByLevel(TonGameMgr.rankConfId);
        if (RankData)
        {
            UtilMgr.SetImage(this.rankIcon, RankData.smallrankicon);
            if (TonGameMgr.tuZiCoinRankIds > 0)
            {
                if (TonGameMgr.tuZiCoinRankIds == 1)
                {
                    this.rankNum.string = "1st";
                }
                else if (TonGameMgr.tuZiCoinRankIds == 2)
                {
                    this.rankNum.string = "2nd";
                }
                else if (TonGameMgr.tuZiCoinRankIds == 3)
                {
                    this.rankNum.string = "3rd";
                }
                else
                {
                    this.rankNum.string = TonGameMgr.tuZiCoinRankIds + "th";
                }
            }
            else
            {
                this.rankNum.string = oops.language.getLangByID("stringres_206");
            }
        }
    }

    public RefreshRabbitIcon() {
        if (TonGameMgr.CurRabbitId <= 0) {
            this.tableOtherParameter.init(8);
            UtilMgr.addNodeAnimation(this.tableOtherParameter.parameter, this.RabbitIcon.node);
        }
        else {
            this.tableShop.init(TonGameMgr.CurRabbitId);
            // 兔子造型图标
            UtilMgr.addNodeAnimation(TonGameMgr.CurRabbitAnimation, this.RabbitIcon.node);
        }
    }

    public RefreshBuffIcon() {
        this.buffRedIcon.node.active = (!AcceleratedBuffMgr.IsGetFreeBuff);
        let animCtrl = this.buffIcon.getComponent(Animation);
        if (AcceleratedBuffMgr.isAccelerating()) {
            this.buffIcon.node.active = true;
            if (!animCtrl || !animCtrl.defaultClip || !animCtrl.getState(animCtrl.defaultClip.name) || !animCtrl.getState(animCtrl.defaultClip.name).isPlaying) {
                UtilMgr.addNodeAnimation("animation/jiasu", this.buffIcon.node, true, true);
            }
        }
        else {
            this.buffIcon.node.active = false;
            if (animCtrl) {
                animCtrl.stop();
            }
        }
    }

    public RefreshFeedRed() {
        this.FeedRedIcon.node.active = (FeedMgr.FreeDishId > 0);
    }

    public RefreshMuteBtn() {
        if (!TonGameMgr.IsMute) {
            this.tableOtherParameter.init(10);
            
        } else {
            this.tableOtherParameter.init(11);
        }
        UtilMgr.SetImage(this.MuteBtnIcon, this.tableOtherParameter.parameter)
    }

    public RefreshAutoBtn()
    {
        if (TonGameMgr.AutoType == AutoTypeEnum.NoBuy)
        {
            this.autoBtnDefault.active = true;
            this.autoBtnEffect.active = false;
        }
        else if (TonGameMgr.AutoType == AutoTypeEnum.HasBuyAndOpen)
        {
            this.autoBtnDefault.active = false;
            this.autoBtnEffect.active = true;
            UtilMgr.addNodeAnimation("animation/zidong", this.autoEffect);
        }
        else if (TonGameMgr.AutoType == AutoTypeEnum.HasBuyButClose)
        {
            this.autoBtnDefault.active = true;
            this.autoBtnEffect.active = false;
        }
    }

    public RefreshHuishouBtn()
    {
        if (HeChengMgr.IsDraging)
        {
            this.normalBottom.active = false;
            this.huishouBottom.active = true;
            this.huishouText.string = oops.language.getLangByID("stringres_203");
        }
        else
        {
            this.normalBottom.active = true;
            this.huishouBottom.active = false;
        }
    }

    /** 回收 */
    private onHuiShou() {
        UtilMgr.PlaySoundEffect(18);
        HeChengMgr.onHuiShou();
    }
    //排行榜
    private onRank() {
        UtilMgr.PlaySoundEffect(18);
        RankMgr.OpenRankUI();
    }

    /** 充值 */
    private onChongZhi() {
        UtilMgr.PlaySoundEffect(18);
        PaymentMgr.OpenPaymentUI();
    }

    /** 任务 */
    private onTask() {
        UtilMgr.PlaySoundEffect(18);
        TaskMgr.OpenTaskUI();
    }

    /** 采购 */
    private onCaiGou() {
        UtilMgr.PlaySoundEffect(21);
        HeChengMgr.onCaiGou(false);
    }

    /** 自动 */
    private onAuto() {
        UtilMgr.PlaySoundEffect(18);
        HeChengMgr.onAuto();
    }

    /** 拔萝卜 */
    private onPullCarrots() {
        UtilMgr.PlaySoundEffect(18);
        HeChengMgr.onGotoCarrots();
    }

    /** 打开商店 */
    private onShopOpen() {
        UtilMgr.PlaySoundEffect(18);
        oops.gui.open(UIID.ShopMain);
    }

    /** 打开加速界面 */
    private onOpenAccelerate() {
        UtilMgr.PlaySoundEffect(18);
        oops.gui.open(UIID.AcceleratedBuffBuyMain);
    }

    /** 打开喂食界面 */
    private onOpenFeedMain() {
        UtilMgr.PlaySoundEffect(18);
        oops.gui.open(UIID.FeedMain);
    }

    /** 打开邀请界面 */
    private onOpenInviteMain() {
        UtilMgr.PlaySoundEffect(18);
        IniviteMgr.onOpenInviteMain();
    }

    /** 点击静音按钮 */
    private onMuteBtnClick() {
        UtilMgr.PlaySoundEffect(18);
        TonGameMgr.IsMute = (!TonGameMgr.IsMute);
        this.RefreshMuteBtn();
        oops.audio.switchEffect = (!TonGameMgr.IsMute);
        oops.audio.switchMusic = (!TonGameMgr.IsMute);
        if (!TonGameMgr.IsMute) {
            if (AcceleratedBuffMgr.isAccelerating()) {
                UtilMgr.PlayBgMusic(23);
            } else {
                UtilMgr.PlayBgMusic(22);
            }
        }
    }

    createGrid() {
        let gridUITransform = this.gridPrefab.data.getComponent(UITransform);
        if (gridUITransform)
        {
            this.gridWidth = gridUITransform.width;
            this.gridHeight = gridUITransform.height;
        }
        for (let row = 0; row < GAME_GRID_SIZE; row++) {
            for (let col = 0; col < GAME_GRID_SIZE; col++) {
                const grid = instantiate(this.gridPrefab);
                grid.parent = this.gridParentNode;
                grid.setPosition(startX + col * (this.gridWidth + gridSpacing), startY - row * (this.gridHeight + gridSpacing)); // 计算格子位置
                const gridComponent = grid.getComponent(GridComponent);
                if (gridComponent) 
                {
                    gridComponent.setVisible(false);
                }
                this.board.push(grid);
            }
        }
        this.updateGrid();
    }

    public getGridNode(index): Node {
        if (index >= 0 && index < this.board.length)
        {
            return this.board[index];
        }
        return null;
    }

    updateGrid() {
        for (let index = 0; index < this.board.length; index++) {
            const cell = this.board[index];
            if (BoardMgr.board && BoardMgr.board[index])
            {
                const gridComponent = cell.getComponent(GridComponent);
                if (gridComponent) 
                {
                    gridComponent.index = index;
                    if (BoardMgr.board[index].SuCaiId > 0)
                    {
                        gridComponent.setVisible(true);
                        gridComponent.setLiwuVisible(false);
                        gridComponent.setLevel(TonGameMgr.GetSuCaiLevel(BoardMgr.board[index].SuCaiId));
                    }
                    else
                    {
                        gridComponent.setVisible(false);
                        if (BoardMgr.board[index].IsLiWu && !BoardMgr.board[index].IsLiWuFlying)
                        {
                            gridComponent.setLiwuVisible(true);
                        }
                        else
                        {
                            gridComponent.setLiwuVisible(false);
                        }
                    }
                }
            }
        }
    }

    private onAutoHecheng(args: any) {
        let SrcIndex = args.SrcIndex;
        let DestIndex = args.DestIndex;
        if (this.board && this.board[SrcIndex] && this.board[DestIndex])
        {
            const srcCell = this.board[SrcIndex];
            const gridFlyComponent = srcCell.getComponentInChildren(FlyComponent);
            if (gridFlyComponent) 
            {
                console.log("Fly src=" + SrcIndex + " dest=" + DestIndex);
                //BoardMgr.InDragIndex = SrcIndex;
                let srcCol = Math.floor(SrcIndex % 4);
                let destCol = Math.floor(DestIndex % 4);
                let srcRow = Math.floor(SrcIndex / 4);
                let destRow = Math.floor(DestIndex / 4);
                let TargetX = (destCol - srcCol) * (this.gridWidth + gridSpacing);
                let TargetY = (srcRow - destRow) * (this.gridHeight + gridSpacing);
                gridFlyComponent.beginFly(SrcIndex, DestIndex, TargetX, TargetY);
            }
        }
    }

    public createRole() : Node {
        const role = instantiate(this.rolePrefab);
        role.parent = this.roleParentNode;
        const halfRoleHeight = role.getComponent(UITransform).height / 2;
        role.setPosition(50, -halfRoleHeight);

        const roleComponent = role.getComponent(RoleComponent);
        if (roleComponent) 
        {
            roleComponent.Init();
        }
        return role;
    }

    createTable() {
        let tableUITransform = this.tablePrefab.data.getComponent(UITransform);
        if (tableUITransform)
        {
            this.tableWidth = tableUITransform.width;
            this.tableHeight = tableUITransform.height;
        }
        for (let row = 0; row < 2; row++) {
            for (let col = 0; col < 2; col++) {
                const table = instantiate(this.tablePrefab);
                table.parent = this.tableParentNode;
                table.setPosition(tableStartX + col * (this.tableWidth + tableSpacing), tableStartY - row * (this.tableHeight)); // 计算格子位置
                DiningTableMgr.AddTable(table);
            }
        }
    }

    public createLiwu() : Node {
        const liwu = instantiate(this.liwuPrefab);
        liwu.parent = this.liwuParentNode;
        //liwu.setSiblingIndex(1);
        return liwu;
    }

    public createTuziCoin(RoleNode:Node) {
        for (let i = 0; i < this.tuziCoinCount; i++) {
            // 实例化金币
            const coin = instantiate(this.tuziCoinPrefab);
            coin.parent = this.tuziCoinParentNode;

            // 设置初始位置
            coin.setPosition(RoleNode.getPosition());

            // 添加一个随机偏移，使金币生成位置有一定范围
            const offset = new Vec3(
                (Math.random() - 0.5) * 100,
                (Math.random() - 0.5) * 100,
                0
            );
            const randomStartPosition = RoleNode.getPosition().add(offset);
            coin.setPosition(randomStartPosition);

            // 创建飞行动画
            tween(coin)
                .to(1.2, { position: this.getPositionInParent(coin) }, { easing: 'sineOut' })
                .call(() => {
                    // 到达目标位置后销毁金币
                    coin.destroy();
                })
                .start();
        }

        setTimeout(() => {
            UtilMgr.PlaySoundEffect(3);
        }, 1000);
    }

    public getPositionInParent(CoinNode: Node): Vec3 {
        let TuziCoinPos = this.TuZiCoinImage.node.getPosition();
        const worldPos = this.TuZiCoinImage.node.parent.getComponent(UITransform).convertToWorldSpaceAR(TuziCoinPos);
        return CoinNode.parent.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
    }

    public ShowCanTingGainNum()
    {
        let originalScale = new Vec3(1, 1, 1);
        let TempScale = new Vec3(1, 1, 1);
        const scaleUp = TempScale.multiplyScalar(1.2); // 放大20%
        // 使用 tween 动画实现放大和缩小效果
        tween(this.CanTingGain.node)
            .to(0.2, { scale: scaleUp })   // 放大到1.2倍，持续0.2秒
            .to(0.2, { scale: originalScale }) // 缩小回原始比例，持续0.2秒
            .start();
    }

    public createGuide() : Node {
        const guide = instantiate(this.guidePrefab);
        guide.parent = this.gridParentNode;
        return guide;
    }

    public ShowSucaiSelect(isShow:boolean, curIndex:number) {
        if (isShow)
        {
            let SuCaiId = BoardMgr.board[curIndex].SuCaiId;
            if (SuCaiId > 0)
            {
                for (let index = 0; index < this.board.length; index++) {
                    const cell = this.board[index];
                    if (BoardMgr.board && BoardMgr.board[index] && curIndex != index && BoardMgr.board[index].SuCaiId == SuCaiId)
                    {
                        const gridComponent = cell.getComponent(GridComponent);
                        if (gridComponent) 
                        {
                            gridComponent.setSelectVisible(true);
                        }
                    }
                }
            }
        }
        else
        {
            for (let index = 0; index < this.board.length; index++) {
                const cell = this.board[index];
                if (BoardMgr.board && BoardMgr.board[index])
                {
                    const gridComponent = cell.getComponent(GridComponent);
                    if (gridComponent) 
                    {
                        gridComponent.setSelectVisible(false);
                    }
                }
            }
        }
    }
}


