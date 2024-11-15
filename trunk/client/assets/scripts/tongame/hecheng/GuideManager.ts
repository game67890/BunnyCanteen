import { _decorator, Component, Node, EventTouch, Vec3, Sprite, Vec2, UITransform, view, tween, math, easing } from 'cc';

import { HeChengComponent } from "../hecheng/HeChengComponent";
import { BoardMgr, BoardCell} from '../manager/BoardManager';
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { JsonUtil } from "../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil";

import { TonGameMgr,AutoTypeEnum } from "../manager/TonGameManager";
import { LayerType } from "../../../../extensions/oops-plugin-framework/assets/core/gui/layer/LayerManager";
import { TableIngredients } from "../../framework/common/table/TableIngredients";

export class GuideManager {
    private _tsIngredients = new TableIngredients();
    public GuideNode: Node = null;
    private GuidePassTime : number = 0;

    private IsGuideShow : boolean = false;

    //每5秒执行一次
    public UpdateGuide() {
        if (TonGameMgr.AutoType == AutoTypeEnum.HasBuyAndOpen)
        {
            this.ResetGuide();
            return;
        }
        if (this.IsGuideShow)
        {
            return;
        }
        this.GuidePassTime = this.GuidePassTime + 5;
        const HechengGUI = oops.gui.get(UIID.MainUI);
        if (HechengGUI) 
        {
            if (!oops.gui.hasUI(LayerType.PopUp) && !oops.gui.hasUI(LayerType.Dialog))
            {
                if (this.GuidePassTime >= 10)
                {
                    this.GuidePassTime = 0;
                    let randomIndexes = this.GetCanHechengIndex();
                    if (randomIndexes.length > 0)
                    {
                        this.ShowGuide(randomIndexes);
                    }
                }
            }
        }
    }

    public IsMaxLevel(SuCaiId:number) : boolean {
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
                    return false;
                }
            }
        }
        return true;
    }

    private ShowGuide(boardIndexed:number[]) {
        const HechengGUI = oops.gui.get(UIID.MainUI);
        if (HechengGUI) 
        {
            const HechengCom = HechengGUI.getComponent(HeChengComponent);
            if (HechengCom) 
            {
                if (this.GuideNode == null)
                {
                    this.GuideNode = HechengCom.createGuide();
                }

                if (this.GuideNode)
                {
                    let gridNode = HechengCom.getGridNode(boardIndexed[0]);
                    let targetNode = HechengCom.getGridNode(boardIndexed[1]);
                    if (gridNode && targetNode)
                    {
                        this.IsGuideShow = true;
                        this.GuideNode.setPosition(gridNode.getPosition());

                        let speed = 100;
                        let distance = Vec3.distance(gridNode.getPosition(), targetNode.getPosition());
            
                        const moveDuration = distance/speed;

                        const moveTween = tween(this.GuideNode)
                        .to(moveDuration, { position: targetNode.getPosition() }, { easing: easing.quadInOut }) // 移动到 B 点
                        .call(() => {
                            // 到达 B 点后，立即将位置重置到 A 点
                            if (gridNode && gridNode.isValid && this.GuideNode && this.GuideNode.isValid)
                            {
                                this.GuideNode.position = gridNode.getPosition();
                            }         
                        });

                        // 无限循环该移动操作
                        tween(this.GuideNode)
                            .repeatForever(moveTween)
                            .start();
                    }
                }
            }
        }
    }

    private getRandomTwoIndexesForDuplicateIds(boardList: BoardCell[]): number[][] {
        const idMap = new Map<number, number[]>();
    
        // 过滤掉 id 为 0 的元素并按 id 分组，存储每个元素的下标
        boardList.forEach((item, index) => {
            if (item.SuCaiId !== 0 && !this.IsMaxLevel(item.SuCaiId)) {
                if (!idMap.has(item.SuCaiId)) {
                    idMap.set(item.SuCaiId, []);
                }
                idMap.get(item.SuCaiId)!.push(index);
            }
        });
    
        const selectedIndexes: number[][] = [];
    
        // 从每个分组中随机选择两个下标
        idMap.forEach((indexes) => {
            if (indexes.length > 1) {
                const randomIndexes = [];
    
                // 确保随机选出两个不同的下标
                while (randomIndexes.length < 2) {
                    const randomIndex = indexes[Math.floor(Math.random() * indexes.length)];
                    if (!randomIndexes.includes(randomIndex)) {
                        randomIndexes.push(randomIndex);
                    }
                }
    
                selectedIndexes.push(randomIndexes);
            }
        });
    
        return selectedIndexes;
    }
    

    private GetCanHechengIndex():number[] {
        let selectedIndexes: number[][] = [];
        selectedIndexes = this.getRandomTwoIndexesForDuplicateIds(BoardMgr.board);
        if (selectedIndexes.length > 0)
        {
            const randomIndex = Math.floor(Math.random() * selectedIndexes.length);
            return selectedIndexes[randomIndex];
        }
        else
        {
            return [];
        }
    }

    public ResetGuide()
    {
        if (this.GuideNode)
        {
            this.GuideNode.active = false;
            this.GuideNode.destroy();
            this.GuideNode = null;
        }

        this.IsGuideShow = false;
        this.GuidePassTime = 0;
    }
}

export var GuideMgr = new GuideManager();