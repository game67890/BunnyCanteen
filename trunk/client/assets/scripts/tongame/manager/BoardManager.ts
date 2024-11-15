import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { GameEvent } from "../../framework/common/config/GameEvent";
import { HeChengMgr } from "../hecheng/HeChengManager";

import { TableIngredients } from "../../framework/common/table/TableIngredients";
import { UtilMgr } from "./UtilManager";


const GAME_Board_KEY = "ton_board";
export const GAME_GRID_SIZE: number = 4; // 棋盘的大小

export class BoardCell {
    SuCaiId: number = 0;
    Position: { row: number, col: number };
    IsLiWu : boolean = false;
    IsLiWuFlying : boolean = false;
  
    constructor(row: number, col: number, SuCaiId: number, IsLiWu: boolean) {
      this.SuCaiId = SuCaiId;
      this.Position = { row, col };
      this.IsLiWu = IsLiWu;
      this.IsLiWuFlying = false;
    }
}

export class TouchItem {
    SrcIndex : number = 0;
    DestIndex : number = 0;

    constructor(src: number, dest: number) {
        this.SrcIndex = src;
        this.DestIndex = dest;
    }
}

  
export class BoardManager {
    public board: BoardCell[] = [];
    private save_data: any = {};

    public touchItemList: TouchItem[] = [];
    
    public InDragIndex : number = 0;
    public IsHuiShou : boolean = false;

    private _tsIngredients = new TableIngredients();

    public addTouchItem (SrcIndex:number, DestIndex:number) {
        console.log("addTouchItem SrcIndex=" + SrcIndex + " DestIndex="+ DestIndex);
        this.touchItemList.push(new TouchItem(SrcIndex, DestIndex));
    }

    public removeTouchItem (SrcIndex:number, DestIndex:number) {
        console.log("1 removeTouchItem SrcIndex=" + SrcIndex + " DestIndex="+ DestIndex);
        for (let index = 0; index < this.touchItemList.length; index++) {
            const item = this.touchItemList[index];
            if (item.SrcIndex == SrcIndex && item.DestIndex == DestIndex)
            {
                console.log("2 removeTouchItem SrcIndex=" + SrcIndex + " DestIndex="+ DestIndex);
                this.touchItemList.splice(index, 1); // 删除当前元素
                //break;
            }
        }
    }

    public getTouchItem (SrcIndex:number) : number {
        console.log("1 getTouchItem SrcIndex=" + SrcIndex);
        for (let index = this.touchItemList.length - 1; index >= 0; --index) {
            const item = this.touchItemList[index];
            if (item.SrcIndex == SrcIndex)
            {
                console.log("2 getTouchItem SrcIndex=" + SrcIndex);
               return item.DestIndex;
            }
        }
        return -1;
    }

    //找到空余格子，添加素材
    public addGrid(SuCaiId: number) : boolean {
        for (let index = 0; index < this.board.length; index++) {
            const cell = this.board[index];
            if (cell.SuCaiId == 0 && !cell.IsLiWu)
            {
                cell.SuCaiId = SuCaiId;
                return true;
            }
        }
        return false;
    }
    //是否还有空位置
    public isHasEmptyGrid() : boolean {
        for (let index = 0; index < this.board.length; index++) {
            const cell = this.board[index];
            if (cell.SuCaiId == 0 && !cell.IsLiWu)
            {
                return true;
            }
        }
        return false;
    }

    //是否有素材
    public isHasSuCai() : boolean {
        for (let index = 0; index < this.board.length; index++) {
            const cell = this.board[index];
            if (cell.SuCaiId > 0)
            {
                return true;
            }
        }
        return false;
    }

    public GetUniqueSuCaiList() : BoardCell[] {
        let uniqueIds = new Set<number>(); // 用于跟踪已经选过的 id
        let SuCaiList: BoardCell[] = [];
        for (let index = 0; index < this.board.length; index++) {
            const cell = this.board[index];
            // 如果该元素的 id 没有被选过，添加到结果中
            if (cell.SuCaiId > 0 && !uniqueIds.has(cell.SuCaiId)) {
                uniqueIds.add(cell.SuCaiId);
                SuCaiList.push(cell);
            }
        }
        return SuCaiList;
    }

    customSort = (a: BoardCell, b: BoardCell): number => {
        if (a.SuCaiId > 0 && b.SuCaiId > 0)
        {
            this._tsIngredients.init(a.SuCaiId);
            let aLevel = this._tsIngredients.level;
            this._tsIngredients.init(b.SuCaiId);
            let bLevel = this._tsIngredients.level;
            if (aLevel !== bLevel) {
              return bLevel - aLevel;
            }
            return a.SuCaiId - b.SuCaiId;
        }
        else
        {
            return b.SuCaiId - a.SuCaiId;
        }
    };

    //排序
    public sortGrid() {
        this.board.sort(this.customSort);
        let index = 0;
        for (let row = 0; row < GAME_GRID_SIZE; row++) {
            for (let col = 0; col < GAME_GRID_SIZE; col++) {
                this.board[index].Position.row = row;
                this.board[index].Position.col = col;
                index++;
            }
        }
    }

    public getBoardListString() : string {
        return JSON.stringify(this.board);
    }

    save() {
        const boardJson = JSON.stringify(this.board);
        oops.storage.set(GAME_Board_KEY, boardJson);
    }

    load(serverData) {
        this.loadFromServer(serverData);
        oops.message.on(GameEvent.OnGridContract, this.onUpdateData, this);
    }

    loadFromServer(serverData) {
        this.setDataDefault();
        if (serverData)
        {
            try {
                this.save_data = JSON.parse(serverData.boardData)
                this.setData();
            } catch (e) {
                this.setDataDefault();
            }
        }
        else
        {
            this.setDataDefault();
        }

        if (this.board.length <= 0)
        {
            this.setDataDefault();
        }
    }

    loadFromLocal() {
        this.save_data = oops.storage.getJson(GAME_Board_KEY);
        if (this.save_data) {
            try {
                this.setData();
            } catch (e) {
            } 
        }
    }

    private setData() {
        console.log('setData 1\n');
        this.board = [];
        this.board = this.save_data.map(
            (cell: any) => new BoardCell(cell.Position.row, cell.Position.col, cell.SuCaiId, cell.IsLiWu)
          );
        console.log('setData 2\n');
        //每次登陆排序
        this.sortGrid();
        oops.message.dispatchEvent(GameEvent.UpdateBoardGrid);
        console.log('setData 3\n');
    }
    
    //新号初始化
    public setDataDefault() {
        this.save_data = {};
        this.board = [];
        for (let row = 0; row < GAME_GRID_SIZE; row++) {
            for (let col = 0; col < GAME_GRID_SIZE; col++) {
                this.board.push(new BoardCell(row, col, 0, false));
            }
        }
    }

    private onUpdateData(event: string, args: any) {
        switch (event) {
            case GameEvent.OnGridContract:
                this.OnGridContract(args);
                break;
        }
    }

    //格子碰撞
    private OnGridContract(args: any)
    {
        let DestIndex = args.DestIndex;
        let SrcIndex = args.SrcIndex;
        if (this.board && this.board[DestIndex] && this.board[SrcIndex])
        {
            if (this.board[DestIndex].SuCaiId > 0 && this.board[SrcIndex].SuCaiId > 0)
            {
                if (this.board[DestIndex].SuCaiId == this.board[SrcIndex].SuCaiId)
                {
                    //相同素材进行合成操作
                    HeChengMgr.HandleHecheng(SrcIndex, DestIndex);
                }
                else
                {
                    //不同素材进行交换操作
                    this.SwapGrid(DestIndex, SrcIndex);
                }
            }
            else
            {
                if (!this.board[DestIndex].IsLiWu && !this.board[SrcIndex].IsLiWu)
                {//如果格子上有礼物不能交换
                    //进行交换操作
                    this.SwapGrid(DestIndex, SrcIndex);
                }
            }
        }
    }

    private SwapGrid(DestIndex:number, SrcIndex:number)
    {
        let TempASuCaiId = this.board[DestIndex].SuCaiId;
        let TempBSuCaiId = this.board[SrcIndex].SuCaiId;
        this.board[DestIndex].SuCaiId = TempBSuCaiId;
        this.board[SrcIndex].SuCaiId = TempASuCaiId;


        let TempAIsLiwu = this.board[DestIndex].IsLiWu;
        let TempBIsLiwu = this.board[SrcIndex].IsLiWu;
        this.board[DestIndex].IsLiWu = TempBIsLiwu;
        this.board[SrcIndex].IsLiWu = TempAIsLiwu;

        UtilMgr.PlaySoundEffect(15);
        oops.message.dispatchEvent(GameEvent.UpdateBoardGrid);
        oops.message.dispatchEvent(GameEvent.Save);
    }
}

export var BoardMgr = new BoardManager();