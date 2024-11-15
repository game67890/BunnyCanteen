System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, oops, GameEvent, HeChengMgr, TableIngredients, UtilMgr, BoardCell, TouchItem, BoardManager, _crd, GAME_Board_KEY, GAME_GRID_SIZE, BoardMgr;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../framework/common/config/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeChengMgr(extras) {
    _reporterNs.report("HeChengMgr", "../hecheng/HeChengManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableIngredients(extras) {
    _reporterNs.report("TableIngredients", "../../framework/common/table/TableIngredients", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "./UtilManager", _context.meta, extras);
  }

  _export({
    BoardCell: void 0,
    TouchItem: void 0,
    BoardManager: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      GameEvent = _unresolved_3.GameEvent;
    }, function (_unresolved_4) {
      HeChengMgr = _unresolved_4.HeChengMgr;
    }, function (_unresolved_5) {
      TableIngredients = _unresolved_5.TableIngredients;
    }, function (_unresolved_6) {
      UtilMgr = _unresolved_6.UtilMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "610f2bGeqROXbjDPovIVm7y", "BoardManager", undefined);

      GAME_Board_KEY = "ton_board";

      _export("GAME_GRID_SIZE", GAME_GRID_SIZE = 4); // 棋盘的大小


      _export("BoardCell", BoardCell = class BoardCell {
        constructor(row, col, SuCaiId, IsLiWu) {
          this.SuCaiId = 0;
          this.Position = void 0;
          this.IsLiWu = false;
          this.IsLiWuFlying = false;
          this.SuCaiId = SuCaiId;
          this.Position = {
            row,
            col
          };
          this.IsLiWu = IsLiWu;
          this.IsLiWuFlying = false;
        }

      });

      _export("TouchItem", TouchItem = class TouchItem {
        constructor(src, dest) {
          this.SrcIndex = 0;
          this.DestIndex = 0;
          this.SrcIndex = src;
          this.DestIndex = dest;
        }

      });

      _export("BoardManager", BoardManager = class BoardManager {
        constructor() {
          this.board = [];
          this.save_data = {};
          this.touchItemList = [];
          this.InDragIndex = 0;
          this.IsHuiShou = false;
          this._tsIngredients = new (_crd && TableIngredients === void 0 ? (_reportPossibleCrUseOfTableIngredients({
            error: Error()
          }), TableIngredients) : TableIngredients)();

          this.customSort = (a, b) => {
            if (a.SuCaiId > 0 && b.SuCaiId > 0) {
              this._tsIngredients.init(a.SuCaiId);

              let aLevel = this._tsIngredients.level;

              this._tsIngredients.init(b.SuCaiId);

              let bLevel = this._tsIngredients.level;

              if (aLevel !== bLevel) {
                return bLevel - aLevel;
              }

              return a.SuCaiId - b.SuCaiId;
            } else {
              return b.SuCaiId - a.SuCaiId;
            }
          };
        }

        addTouchItem(SrcIndex, DestIndex) {
          this.touchItemList.push(new TouchItem(SrcIndex, DestIndex));
        }

        removeTouchItem(SrcIndex, DestIndex) {
          for (let index = 0; index < this.touchItemList.length; index++) {
            const item = this.touchItemList[index];

            if (item.SrcIndex == SrcIndex && item.DestIndex == DestIndex) {
              this.touchItemList.splice(index, 1); // 删除当前元素

              break;
            }
          }
        }

        getTouchItem(SrcIndex) {
          for (let index = this.touchItemList.length - 1; index >= 0; --index) {
            const item = this.touchItemList[index];

            if (item.SrcIndex == SrcIndex) {
              return item.DestIndex;
            }
          }

          return -1;
        } //找到空余格子，添加素材


        addGrid(SuCaiId) {
          for (let index = 0; index < this.board.length; index++) {
            const cell = this.board[index];

            if (cell.SuCaiId == 0 && !cell.IsLiWu) {
              cell.SuCaiId = SuCaiId;
              return true;
            }
          }

          return false;
        } //是否还有空位置


        isHasEmptyGrid() {
          for (let index = 0; index < this.board.length; index++) {
            const cell = this.board[index];

            if (cell.SuCaiId == 0 && !cell.IsLiWu) {
              return true;
            }
          }

          return false;
        } //是否有素材


        isHasSuCai() {
          for (let index = 0; index < this.board.length; index++) {
            const cell = this.board[index];

            if (cell.SuCaiId > 0) {
              return true;
            }
          }

          return false;
        }

        GetUniqueSuCaiList() {
          let uniqueIds = new Set(); // 用于跟踪已经选过的 id

          let SuCaiList = [];

          for (let index = 0; index < this.board.length; index++) {
            const cell = this.board[index]; // 如果该元素的 id 没有被选过，添加到结果中

            if (cell.SuCaiId > 0 && !uniqueIds.has(cell.SuCaiId)) {
              uniqueIds.add(cell.SuCaiId);
              SuCaiList.push(cell);
            }
          }

          return SuCaiList;
        }

        //排序
        sortGrid() {
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

        getBoardListString() {
          return JSON.stringify(this.board);
        }

        save() {
          const boardJson = JSON.stringify(this.board);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).storage.set(GAME_Board_KEY, boardJson);
        }

        load(serverData) {
          this.loadFromServer(serverData);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).OnGridContract, this.onUpdateData, this);
        }

        loadFromServer(serverData) {
          this.setDataDefault();

          if (serverData) {
            try {
              this.save_data = JSON.parse(serverData.boardData);
              this.setData();
            } catch (e) {
              this.setDataDefault();
            }
          } else {
            this.setDataDefault();
          }

          if (this.board.length <= 0) {
            this.setDataDefault();
          }
        }

        loadFromLocal() {
          this.save_data = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).storage.getJson(GAME_Board_KEY);

          if (this.save_data) {
            try {
              this.setData();
            } catch (e) {}
          }
        }

        setData() {
          console.log('setData 1\n');
          this.board = [];
          this.board = this.save_data.map(cell => new BoardCell(cell.Position.row, cell.Position.col, cell.SuCaiId, cell.IsLiWu));
          console.log('setData 2\n'); //每次登陆排序

          this.sortGrid();
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateBoardGrid);
          console.log('setData 3\n');
        } //新号初始化


        setDataDefault() {
          this.save_data = {};
          this.board = [];

          for (let row = 0; row < GAME_GRID_SIZE; row++) {
            for (let col = 0; col < GAME_GRID_SIZE; col++) {
              this.board.push(new BoardCell(row, col, 0, false));
            }
          }
        }

        onUpdateData(event, args) {
          switch (event) {
            case (_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).OnGridContract:
              this.OnGridContract(args);
              break;
          }
        } //格子碰撞


        OnGridContract(args) {
          let DestIndex = args.DestIndex;
          let SrcIndex = args.SrcIndex;

          if (this.board && this.board[DestIndex] && this.board[SrcIndex]) {
            if (this.board[DestIndex].SuCaiId > 0 && this.board[SrcIndex].SuCaiId > 0) {
              if (this.board[DestIndex].SuCaiId == this.board[SrcIndex].SuCaiId) {
                //相同素材进行合成操作
                (_crd && HeChengMgr === void 0 ? (_reportPossibleCrUseOfHeChengMgr({
                  error: Error()
                }), HeChengMgr) : HeChengMgr).HandleHecheng(SrcIndex, DestIndex);
              } else {
                //不同素材进行交换操作
                this.SwapGrid(DestIndex, SrcIndex);
              }
            } else {
              if (!this.board[DestIndex].IsLiWu && !this.board[SrcIndex].IsLiWu) {
                //如果格子上有礼物不能交换
                //进行交换操作
                this.SwapGrid(DestIndex, SrcIndex);
              }
            }
          }
        }

        SwapGrid(DestIndex, SrcIndex) {
          let TempASuCaiId = this.board[DestIndex].SuCaiId;
          let TempBSuCaiId = this.board[SrcIndex].SuCaiId;
          this.board[DestIndex].SuCaiId = TempBSuCaiId;
          this.board[SrcIndex].SuCaiId = TempASuCaiId;
          let TempAIsLiwu = this.board[DestIndex].IsLiWu;
          let TempBIsLiwu = this.board[SrcIndex].IsLiWu;
          this.board[DestIndex].IsLiWu = TempBIsLiwu;
          this.board[SrcIndex].IsLiWu = TempAIsLiwu;
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(15);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateBoardGrid);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).Save);
        }

      });

      _export("BoardMgr", BoardMgr = new BoardManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=781b0f336b814b9721f838b433b22cd67d3db6dc.js.map