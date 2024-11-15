import { _decorator, Component, Node, EventTouch, Vec3, Sprite, Vec2, UITransform, view, Animation } from 'cc';
import { UtilMgr } from "../manager/UtilManager";
import { BoardMgr, BoardCell} from '../manager/BoardManager';
import { DiningTableComponent } from "./DiningTableComponent";
import { TableIngredients } from "../../framework/common/table/TableIngredients";


export class DiningTableInfo {
    IsSeat : boolean = false;
    tableNode : Node = null;
    leftChairNode : Node = null;
    leftParentNode : Node = null;
    constructor(node: Node, leftChairNode : Node, leftParentNode : Node) {
        this.tableNode = node;
        this.IsSeat = false;
        this.leftChairNode = leftChairNode;
        this.leftParentNode = leftParentNode;
      }
}

export class DiningTableManager {
    public TableList: DiningTableInfo[] = [];
    private _tsIngredients = new TableIngredients();

    public AddTable(tableNode:Node) {
        const diningTableComponent = tableNode.getComponent(DiningTableComponent);
        if (diningTableComponent) 
        {
            let Table = new DiningTableInfo(tableNode, diningTableComponent.LeftChair, diningTableComponent.LeftChairParent);
            this.ClearFood(tableNode);
            this.TableList.push(Table);
        }

    }

    public ClearFood(tableNode: Node) {
        const diningTableComponent = tableNode.getComponent(DiningTableComponent);
        if (diningTableComponent) 
        {
            let anim = diningTableComponent.DiningEffect.getComponent(Animation);
            if (anim) {
                anim.stop();
            }
            diningTableComponent.DiningEffect.active = false;
            
            for (let index = 0; index < diningTableComponent.DiningFoodList.length; index++) {
                const cell = diningTableComponent.DiningFoodList[index];
                cell.node.active = false;
            }
        }
    }

    //随机找一个空桌子
    public GetRandomEmptyTableIndex() : number {
        let resultTable : number[] = [];
        for (let index = 0; index < this.TableList.length; index++) {
            const table = this.TableList[index];
            if (!table.IsSeat)
            {
                resultTable.push(index);
            }
        }
        if (resultTable.length > 0)
        {
            let EmptyId = UtilMgr.getRandomNumber(resultTable);
            if (!this.TableList[EmptyId].IsSeat)
            {
                return EmptyId;
            }
            else
            {
                return -1;
            }  
        }

        return -1;
    }
    //是否有空桌子
    public IsHasEmptyTable() : boolean {
        for (let index = 0; index < this.TableList.length; index++) {
            const table = this.TableList[index];
            if (!table.IsSeat)
            {
                return true;
            }
        }
        return false;
    }

    //随机取出食材
    public getRandomFood(RoleNum:number): BoardCell[] {
        let SuCaiList = BoardMgr.GetUniqueSuCaiList();
        let result: BoardCell[] = [];
        let uniqueIds = new Set<number>(); // 用于跟踪已经选过的 id
        
        let numOfElements = 0;
        if (RoleNum == 1)
        {
            // 随机生成 1 到 3 之间的数量，最多不能超过数组长度
            const maxElements = Math.min(SuCaiList.length, 3);
            numOfElements = Math.floor(Math.random() * maxElements) + 1;
            if (numOfElements > SuCaiList.length)
            {
                numOfElements = SuCaiList.length;
            }
        }
        else if (RoleNum == 2)
        {
            // 随机生成 3 到 5 之间的数量，最多不能超过数组长度
            const maxElements = Math.min(SuCaiList.length, 5);
            numOfElements = Math.floor(Math.random() * (maxElements - 3 + 1)) + 3;
            if (numOfElements > SuCaiList.length)
            {
                numOfElements = SuCaiList.length;
            }
        }


        while (result.length < numOfElements) {
            let randomIndex = Math.floor(Math.random() * SuCaiList.length);
            let randomElement = SuCaiList[randomIndex];

            // 如果该元素的 id 没有被选过，添加到结果中
            if (randomElement.SuCaiId > 0 && !uniqueIds.has(randomElement.SuCaiId)) {
                uniqueIds.add(randomElement.SuCaiId);
                result.push(randomElement);
            }
        }

        return result;
    }

    //显示食物
    public ShowFood(tableNode: Node, RoleNum: number){
        const diningTableComponent = tableNode.getComponent(DiningTableComponent);
        if (diningTableComponent) 
        {
            this.ClearFood(tableNode);
            diningTableComponent.DiningEffect.active = true;
            setTimeout(() => {
                UtilMgr.addNodeAnimation("animation/chifan", diningTableComponent.DiningEffect);
            }, 1000);
            
            let FoodList = this.getRandomFood(RoleNum);
            for (let index = 0; index < FoodList.length; index++) {
                const food = FoodList[index];
                const cell = diningTableComponent.DiningFoodList[index];
                cell.node.active = true;
                this._tsIngredients.init(food.SuCaiId);
                UtilMgr.SetImage(cell, this._tsIngredients.picture);
            }
        }
    }
} 

export var DiningTableMgr = new DiningTableManager();