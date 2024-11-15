System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, UtilMgr, BoardMgr, DiningTableComponent, TableIngredients, DiningTableInfo, DiningTableManager, _crd, DiningTableMgr;

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoardMgr(extras) {
    _reporterNs.report("BoardMgr", "../manager/BoardManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoardCell(extras) {
    _reporterNs.report("BoardCell", "../manager/BoardManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDiningTableComponent(extras) {
    _reporterNs.report("DiningTableComponent", "./DiningTableComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableIngredients(extras) {
    _reporterNs.report("TableIngredients", "../../framework/common/table/TableIngredients", _context.meta, extras);
  }

  _export({
    DiningTableInfo: void 0,
    DiningTableManager: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      UtilMgr = _unresolved_2.UtilMgr;
    }, function (_unresolved_3) {
      BoardMgr = _unresolved_3.BoardMgr;
    }, function (_unresolved_4) {
      DiningTableComponent = _unresolved_4.DiningTableComponent;
    }, function (_unresolved_5) {
      TableIngredients = _unresolved_5.TableIngredients;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6824cbTT79GZIMowmk3jgsD", "DiningTableManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'EventTouch', 'Vec3', 'Sprite', 'Vec2', 'UITransform', 'view', 'Animation']);

      _export("DiningTableInfo", DiningTableInfo = class DiningTableInfo {
        constructor(node, leftChairNode, leftParentNode) {
          this.IsSeat = false;
          this.tableNode = null;
          this.leftChairNode = null;
          this.leftParentNode = null;
          this.tableNode = node;
          this.IsSeat = false;
          this.leftChairNode = leftChairNode;
          this.leftParentNode = leftParentNode;
        }

      });

      _export("DiningTableManager", DiningTableManager = class DiningTableManager {
        constructor() {
          this.TableList = [];
          this._tsIngredients = new (_crd && TableIngredients === void 0 ? (_reportPossibleCrUseOfTableIngredients({
            error: Error()
          }), TableIngredients) : TableIngredients)();
        }

        AddTable(tableNode) {
          const diningTableComponent = tableNode.getComponent(_crd && DiningTableComponent === void 0 ? (_reportPossibleCrUseOfDiningTableComponent({
            error: Error()
          }), DiningTableComponent) : DiningTableComponent);

          if (diningTableComponent) {
            let Table = new DiningTableInfo(tableNode, diningTableComponent.LeftChair, diningTableComponent.LeftChairParent);
            this.ClearFood(tableNode);
            this.TableList.push(Table);
          }
        }

        ClearFood(tableNode) {
          const diningTableComponent = tableNode.getComponent(_crd && DiningTableComponent === void 0 ? (_reportPossibleCrUseOfDiningTableComponent({
            error: Error()
          }), DiningTableComponent) : DiningTableComponent);

          if (diningTableComponent) {
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
        } //随机找一个空桌子


        GetRandomEmptyTableIndex() {
          let resultTable = [];

          for (let index = 0; index < this.TableList.length; index++) {
            const table = this.TableList[index];

            if (!table.IsSeat) {
              resultTable.push(index);
            }
          }

          if (resultTable.length > 0) {
            let EmptyId = (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).getRandomNumber(resultTable);

            if (!this.TableList[EmptyId].IsSeat) {
              return EmptyId;
            } else {
              return -1;
            }
          }

          return -1;
        } //是否有空桌子


        IsHasEmptyTable() {
          for (let index = 0; index < this.TableList.length; index++) {
            const table = this.TableList[index];

            if (!table.IsSeat) {
              return true;
            }
          }

          return false;
        } //随机取出食材


        getRandomFood(RoleNum) {
          let SuCaiList = (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
            error: Error()
          }), BoardMgr) : BoardMgr).GetUniqueSuCaiList();
          let result = [];
          let uniqueIds = new Set(); // 用于跟踪已经选过的 id

          let numOfElements = 0;

          if (RoleNum == 1) {
            // 随机生成 1 到 3 之间的数量，最多不能超过数组长度
            const maxElements = Math.min(SuCaiList.length, 3);
            numOfElements = Math.floor(Math.random() * maxElements) + 1;

            if (numOfElements > SuCaiList.length) {
              numOfElements = SuCaiList.length;
            }
          } else if (RoleNum == 2) {
            // 随机生成 3 到 5 之间的数量，最多不能超过数组长度
            const maxElements = Math.min(SuCaiList.length, 5);
            numOfElements = Math.floor(Math.random() * (maxElements - 3 + 1)) + 3;

            if (numOfElements > SuCaiList.length) {
              numOfElements = SuCaiList.length;
            }
          }

          while (result.length < numOfElements) {
            let randomIndex = Math.floor(Math.random() * SuCaiList.length);
            let randomElement = SuCaiList[randomIndex]; // 如果该元素的 id 没有被选过，添加到结果中

            if (randomElement.SuCaiId > 0 && !uniqueIds.has(randomElement.SuCaiId)) {
              uniqueIds.add(randomElement.SuCaiId);
              result.push(randomElement);
            }
          }

          return result;
        } //显示食物


        ShowFood(tableNode, RoleNum) {
          const diningTableComponent = tableNode.getComponent(_crd && DiningTableComponent === void 0 ? (_reportPossibleCrUseOfDiningTableComponent({
            error: Error()
          }), DiningTableComponent) : DiningTableComponent);

          if (diningTableComponent) {
            this.ClearFood(tableNode);
            diningTableComponent.DiningEffect.active = true;
            setTimeout(() => {
              (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                error: Error()
              }), UtilMgr) : UtilMgr).addNodeAnimation("animation/chifan", diningTableComponent.DiningEffect);
            }, 1000);
            let FoodList = this.getRandomFood(RoleNum);

            for (let index = 0; index < FoodList.length; index++) {
              const food = FoodList[index];
              const cell = diningTableComponent.DiningFoodList[index];
              cell.node.active = true;

              this._tsIngredients.init(food.SuCaiId);

              (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                error: Error()
              }), UtilMgr) : UtilMgr).SetImage(cell, this._tsIngredients.picture);
            }
          }
        }

      });

      _export("DiningTableMgr", DiningTableMgr = new DiningTableManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0cda3fa688d4277f50bbe8f25c10b9390bda50ae.js.map