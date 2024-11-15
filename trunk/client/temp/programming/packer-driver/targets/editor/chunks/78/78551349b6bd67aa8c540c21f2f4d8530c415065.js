System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, tween, easing, HeChengComponent, BoardMgr, oops, UIID, JsonUtil, TonGameMgr, AutoTypeEnum, LayerType, TableIngredients, GuideManager, _crd, GuideMgr;

  function _reportPossibleCrUseOfHeChengComponent(extras) {
    _reporterNs.report("HeChengComponent", "../hecheng/HeChengComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoardMgr(extras) {
    _reporterNs.report("BoardMgr", "../manager/BoardManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoardCell(extras) {
    _reporterNs.report("BoardCell", "../manager/BoardManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../framework/common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonGameMgr(extras) {
    _reporterNs.report("TonGameMgr", "../manager/TonGameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoTypeEnum(extras) {
    _reporterNs.report("AutoTypeEnum", "../manager/TonGameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerType(extras) {
    _reporterNs.report("LayerType", "../../../../extensions/oops-plugin-framework/assets/core/gui/layer/LayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableIngredients(extras) {
    _reporterNs.report("TableIngredients", "../../framework/common/table/TableIngredients", _context.meta, extras);
  }

  _export("GuideManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      easing = _cc.easing;
    }, function (_unresolved_2) {
      HeChengComponent = _unresolved_2.HeChengComponent;
    }, function (_unresolved_3) {
      BoardMgr = _unresolved_3.BoardMgr;
    }, function (_unresolved_4) {
      oops = _unresolved_4.oops;
    }, function (_unresolved_5) {
      UIID = _unresolved_5.UIID;
    }, function (_unresolved_6) {
      JsonUtil = _unresolved_6.JsonUtil;
    }, function (_unresolved_7) {
      TonGameMgr = _unresolved_7.TonGameMgr;
      AutoTypeEnum = _unresolved_7.AutoTypeEnum;
    }, function (_unresolved_8) {
      LayerType = _unresolved_8.LayerType;
    }, function (_unresolved_9) {
      TableIngredients = _unresolved_9.TableIngredients;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "27d09F15+BK+I7/wxr/2kDk", "GuideManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'EventTouch', 'Vec3', 'Sprite', 'Vec2', 'UITransform', 'view', 'tween', 'math', 'easing']);

      _export("GuideManager", GuideManager = class GuideManager {
        constructor() {
          this._tsIngredients = new (_crd && TableIngredients === void 0 ? (_reportPossibleCrUseOfTableIngredients({
            error: Error()
          }), TableIngredients) : TableIngredients)();
          this.GuideNode = null;
          this.GuidePassTime = 0;
          this.IsGuideShow = false;
        }

        //每5秒执行一次
        UpdateGuide() {
          if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).AutoType == (_crd && AutoTypeEnum === void 0 ? (_reportPossibleCrUseOfAutoTypeEnum({
            error: Error()
          }), AutoTypeEnum) : AutoTypeEnum).HasBuyAndOpen) {
            this.ResetGuide();
            return;
          }

          if (this.IsGuideShow) {
            return;
          }

          this.GuidePassTime = this.GuidePassTime + 5;
          const HechengGUI = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.get((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).MainUI);

          if (HechengGUI) {
            if (!(_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.hasUI((_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
              error: Error()
            }), LayerType) : LayerType).PopUp) && !(_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.hasUI((_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
              error: Error()
            }), LayerType) : LayerType).Dialog)) {
              if (this.GuidePassTime >= 10) {
                this.GuidePassTime = 0;
                let randomIndexes = this.GetCanHechengIndex();

                if (randomIndexes.length > 0) {
                  this.ShowGuide(randomIndexes);
                }
              }
            }
          }
        }

        IsMaxLevel(SuCaiId) {
          this._tsIngredients.init(SuCaiId);

          let curSuCaiType = this._tsIngredients.type;
          let nextSuCaiLevel = this._tsIngredients.level + 1;
          let jsonIngredients = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get((_crd && TableIngredients === void 0 ? (_reportPossibleCrUseOfTableIngredients({
            error: Error()
          }), TableIngredients) : TableIngredients).TableName);

          if (jsonIngredients) {
            for (let id in jsonIngredients) {
              let Ingredients = jsonIngredients[id];

              if (Ingredients.type == curSuCaiType && Ingredients.level == nextSuCaiLevel) {
                return false;
              }
            }
          }

          return true;
        }

        ShowGuide(boardIndexed) {
          const HechengGUI = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.get((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).MainUI);

          if (HechengGUI) {
            const HechengCom = HechengGUI.getComponent(_crd && HeChengComponent === void 0 ? (_reportPossibleCrUseOfHeChengComponent({
              error: Error()
            }), HeChengComponent) : HeChengComponent);

            if (HechengCom) {
              if (this.GuideNode == null) {
                this.GuideNode = HechengCom.createGuide();
              }

              if (this.GuideNode) {
                let gridNode = HechengCom.getGridNode(boardIndexed[0]);
                let targetNode = HechengCom.getGridNode(boardIndexed[1]);

                if (gridNode && targetNode) {
                  this.IsGuideShow = true;
                  this.GuideNode.setPosition(gridNode.getPosition());
                  let speed = 100;
                  let distance = Vec3.distance(gridNode.getPosition(), targetNode.getPosition());
                  const moveDuration = distance / speed;
                  const moveTween = tween(this.GuideNode).to(moveDuration, {
                    position: targetNode.getPosition()
                  }, {
                    easing: easing.quadInOut
                  }) // 移动到 B 点
                  .call(() => {
                    // 到达 B 点后，立即将位置重置到 A 点
                    this.GuideNode.position = gridNode.getPosition();
                  }); // 无限循环该移动操作

                  tween(this.GuideNode).repeatForever(moveTween).start();
                }
              }
            }
          }
        }

        getRandomTwoIndexesForDuplicateIds(boardList) {
          const idMap = new Map(); // 过滤掉 id 为 0 的元素并按 id 分组，存储每个元素的下标

          boardList.forEach((item, index) => {
            if (item.SuCaiId !== 0 && !this.IsMaxLevel(item.SuCaiId)) {
              if (!idMap.has(item.SuCaiId)) {
                idMap.set(item.SuCaiId, []);
              }

              idMap.get(item.SuCaiId).push(index);
            }
          });
          const selectedIndexes = []; // 从每个分组中随机选择两个下标

          idMap.forEach(indexes => {
            if (indexes.length > 1) {
              const randomIndexes = []; // 确保随机选出两个不同的下标

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

        GetCanHechengIndex() {
          let selectedIndexes = [];
          selectedIndexes = this.getRandomTwoIndexesForDuplicateIds((_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
            error: Error()
          }), BoardMgr) : BoardMgr).board);

          if (selectedIndexes.length > 0) {
            const randomIndex = Math.floor(Math.random() * selectedIndexes.length);
            return selectedIndexes[randomIndex];
          } else {
            return [];
          }
        }

        ResetGuide() {
          if (this.GuideNode) {
            this.GuideNode.active = false;
            this.GuideNode.destroy();
            this.GuideNode = null;
          }

          this.IsGuideShow = false;
          this.GuidePassTime = 0;
        }

      });

      _export("GuideMgr", GuideMgr = new GuideManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=78551349b6bd67aa8c540c21f2f4d8530c415065.js.map