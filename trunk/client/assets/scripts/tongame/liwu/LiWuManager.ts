import { _decorator, Component, Node, EventTouch, Vec3, Sprite, Vec2, UITransform, view, tween, math } from 'cc';

import { UtilMgr } from "../manager/UtilManager";
import { HeChengComponent } from "../hecheng/HeChengComponent";
import { HeChengMgr } from '../hecheng/HeChengManager';
import { GridComponent } from "../hecheng/GridComponent";
import { BoardMgr} from '../manager/BoardManager';
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { JsonUtil } from "../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil";

import { TonGameMgr } from "../manager/TonGameManager";
import { LayerType } from "../../../../extensions/oops-plugin-framework/assets/core/gui/layer/LayerManager";
import { GameEvent } from "../../framework/common/config/GameEvent";

import { TableGiftBox } from "../../framework/common/table/TableGiftBox";
import { TableIngredients } from "../../framework/common/table/TableIngredients";

const DAILY_REWARD_DATA = "dailyRewardData";

export class LiwuInfo {
    IsFlying : boolean = false;
    LiwuNode : Node = null;
    constructor(node:Node) {
        this.LiwuNode = node;
      }
}

export class LiWuManager {
    public LiwuList: LiwuInfo[] = [];

    private _tsGiftBox = new TableGiftBox();
    private LiWuPassTime : number = 0;

    //每5秒执行一次
    public UpdateLiWu() {
        this.LiWuPassTime = this.LiWuPassTime + 5;
        const HechengGUI = oops.gui.get(UIID.MainUI);
        if (HechengGUI) 
        {
            if (!oops.gui.hasUI(LayerType.PopUp) && !oops.gui.hasUI(LayerType.Dialog))
            {
                this._tsGiftBox.init(TonGameMgr.CanTingLevel);
                if (this.LiWuPassTime > this._tsGiftBox.time)
                {
                    this.LiWuPassTime = 0;
                    this.getDailyLiWu(this._tsGiftBox.numlimit);
                }
            }
        }
    }

    /* 生成礼物 */
    private GenLiWu() :boolean {
        const HechengGUI = oops.gui.get(UIID.MainUI);
        if (HechengGUI) 
        {
            const HechengCom = HechengGUI.getComponent(HeChengComponent);
            if (HechengCom && BoardMgr.isHasEmptyGrid()) 
            {
                let LiwuIdList : number[] = [];
                for (let index = 0; index < BoardMgr.board.length; index++) {
                    const cell = BoardMgr.board[index];
                    if (cell.SuCaiId == 0 && !cell.IsLiWu)
                    {
                        LiwuIdList.push(index);
                    }
                }
                let LiwuIndex = UtilMgr.getRandomNumber(LiwuIdList);
                let gridNode = HechengCom.getGridNode(LiwuIndex);
                if (gridNode)
                {
                    let liwu = HechengCom.createLiwu();
                    // 获取屏幕的大小
                    const screenSize = view.getVisibleSize();
                    // 设置节点的位置到屏幕左下角
                    liwu.setPosition(-screenSize.width / 2 + liwu.size.x/2, -screenSize.height / 2 + liwu.size.y/2);
    
                    let liwuInfo = new LiwuInfo(liwu);
                    this.LiwuList.push(liwuInfo);
                    
                    this.FlyToPos(liwuInfo, gridNode, LiwuIndex);
                    return true;
                }
            }
        }
        return false;
    }

    public FlyToPos(liwuInfo:LiwuInfo, gridNode: Node, targetIndex: number) {
        if (liwuInfo && liwuInfo.LiwuNode) {
            let TargetPos = this.getPositionInParent(liwuInfo.LiwuNode, gridNode);
            BoardMgr.board[targetIndex].IsLiWu = true;
            BoardMgr.board[targetIndex].IsLiWuFlying = true;

            let speed = 200;
            let pos = liwuInfo.LiwuNode.position;

            let distance = Vec3.distance(pos, TargetPos);

            const moveDuration = distance/speed;

            tween(liwuInfo.LiwuNode)
                .to(moveDuration, { position: TargetPos })
                .call(() => {
                    BoardMgr.board[targetIndex].IsLiWuFlying = false;
                    liwuInfo.LiwuNode.destroy();
                    oops.message.dispatchEvent(GameEvent.UpdateBaseData);
                    oops.message.dispatchEvent(GameEvent.UpdateBoardGrid);
                    oops.message.dispatchEvent(GameEvent.Save);
                })
                .start();
        }
    }



    public getPositionInParent(liwuNode: Node, GridNode: Node): Vec3 {
        let tablePos = new Vec3(GridNode.position.x, GridNode.position.y);
        
        const worldPos = GridNode.parent.getComponent(UITransform).convertToWorldSpaceAR(tablePos);
        return liwuNode.parent.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
    }
    //打开礼物获得素材
    public openLiwu (index:number) {
        if (BoardMgr.board[index].IsLiWu && !BoardMgr.board[index].IsLiWuFlying)
        {
            let IngredientsId = this.RankdomDishByCanTingLv(TonGameMgr.CanTingLevel);
            if (IngredientsId > 0)
            {
                const HechengGUI = oops.gui.get(UIID.MainUI);
                if (HechengGUI) 
                {
                    const HechengCom = HechengGUI.getComponent(HeChengComponent);
                    if (HechengCom) 
                    {
                        let gridNode = HechengCom.getGridNode(index);
                        if (gridNode)
                        {
                            const gridComponent = gridNode.getComponent(GridComponent);
                            if (gridComponent) 
                            {
                                UtilMgr.addNodeAnimation("animation/libao", gridComponent.LiwuSprite.node, true, false, () => {
                                    UtilMgr.PlaySoundEffect(28);
                                    HeChengMgr.IsAutoOpenLiwu = false;
                                    gridComponent.LiwuSprite.node.active = false;
                                    BoardMgr.board[index].SuCaiId = IngredientsId;
                                    BoardMgr.board[index].IsLiWu = false;
                                    BoardMgr.board[index].IsLiWuFlying = false;
                                    oops.message.dispatchEvent(GameEvent.UpdateBaseData);
                                    oops.message.dispatchEvent(GameEvent.UpdateBoardGrid);
                                    oops.message.dispatchEvent(GameEvent.Save);
                                    UtilMgr.SetImage(gridComponent.LiwuSprite, "textures/UI/baluobo/baluobo;liwu");
                                });
                            }
                        }
                    }
                }

            }
        }
    }

    // 根据餐厅等级随机一个菜品
    public RankdomDishByCanTingLv(level : number) : number {
        let resultIndex = 0;
        this._tsGiftBox.init(level);
        let foodlevel = this._tsGiftBox.foodlevel1;
        let probably = this._tsGiftBox.probably1;
        let totalNum = 0;
        for (let i = 0; i < probably.length; i++) {
            totalNum = totalNum + probably[i];
        }
        let randNum = Math.floor(Math.random() * totalNum);
        totalNum = 0
        for (let i = 0; i < probably.length; i++) {
            totalNum = totalNum + probably[i];
            if (randNum < totalNum)
            {
                resultIndex = i;
                break;
            }
        }
        let resultLevel = foodlevel[resultIndex];
        let resultIngredients : number[] = [];
        let jsonIngredients = JsonUtil.get(TableIngredients.TableName);
        if (jsonIngredients) {
            for (let id in jsonIngredients) {
                let Ingredients = jsonIngredients[id];
                if (Ingredients.level == resultLevel) {
                    resultIngredients.push(Number(id));
                }
            }

            let IngredientsId = UtilMgr.getRandomNumber(resultIngredients);
            return IngredientsId;
        }
        return 0;
    }

    public getTodayDate(): string {
        const today = oops.timer.getServerDate();
        return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    }

    public getDailyLiWu(numlimit:number) {
        const savedData = oops.storage.get(DAILY_REWARD_DATA);
        let data = savedData ? JSON.parse(savedData) : { date: this.getTodayDate(), count: 0 };
    
        // 如果存储的日期不是今天，重置次数
        if (data.date !== this.getTodayDate()) {
            data.date = this.getTodayDate();
            data.count = 0;
        }
    
        // 检查是否达到每日上限
        if (data.count < numlimit) {

            if (this.GenLiWu())
            {
                // 生成礼物
                data.count += 1;
                oops.storage.set(DAILY_REWARD_DATA, JSON.stringify(data));
            }
        }
        else
        {
            if (TonGameMgr.GiftNum > 0)
            {
                if (this.GenLiWu())
                {
                    TonGameMgr.GiftNum -= 1;
                    oops.message.dispatchEvent(GameEvent.Save);
                }
            }
        }
    }
}

export var LiWuMgr = new LiWuManager();