System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, oops, LayerType, GameEvent, TableRestaurantlevel, TableIngredients, TonGameMgr, AutoTypeEnum, StringUtil, LiWuMgr, HeChengComponent, GridComponent, UtilMgr, BoardMgr, JsonUtil, UIID, CarrotMgr, FeedMgr, GuideMgr, HeChengManager, _crd, HeChengMgr;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerType(extras) {
    _reporterNs.report("LayerType", "../../../../extensions/oops-plugin-framework/assets/core/gui/layer/LayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../framework/common/config/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableRestaurantlevel(extras) {
    _reporterNs.report("TableRestaurantlevel", "../../framework/common/table/TableRestaurantlevel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableIngredients(extras) {
    _reporterNs.report("TableIngredients", "../../framework/common/table/TableIngredients", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonGameMgr(extras) {
    _reporterNs.report("TonGameMgr", "../manager/TonGameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoTypeEnum(extras) {
    _reporterNs.report("AutoTypeEnum", "../manager/TonGameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStringUtil(extras) {
    _reporterNs.report("StringUtil", "../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLiWuMgr(extras) {
    _reporterNs.report("LiWuMgr", "../liwu/LiWuManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeChengComponent(extras) {
    _reporterNs.report("HeChengComponent", "./HeChengComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridComponent(extras) {
    _reporterNs.report("GridComponent", "./GridComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoardMgr(extras) {
    _reporterNs.report("BoardMgr", "../manager/BoardManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../framework/common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCarrotMgr(extras) {
    _reporterNs.report("CarrotMgr", "../pullingcarrots/CarrotManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFeedMgr(extras) {
    _reporterNs.report("FeedMgr", "../feed/FeedManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideMgr(extras) {
    _reporterNs.report("GuideMgr", "../hecheng/GuideManager", _context.meta, extras);
  }

  _export("HeChengManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      LayerType = _unresolved_3.LayerType;
    }, function (_unresolved_4) {
      GameEvent = _unresolved_4.GameEvent;
    }, function (_unresolved_5) {
      TableRestaurantlevel = _unresolved_5.TableRestaurantlevel;
    }, function (_unresolved_6) {
      TableIngredients = _unresolved_6.TableIngredients;
    }, function (_unresolved_7) {
      TonGameMgr = _unresolved_7.TonGameMgr;
      AutoTypeEnum = _unresolved_7.AutoTypeEnum;
    }, function (_unresolved_8) {
      StringUtil = _unresolved_8.StringUtil;
    }, function (_unresolved_9) {
      LiWuMgr = _unresolved_9.LiWuMgr;
    }, function (_unresolved_10) {
      HeChengComponent = _unresolved_10.HeChengComponent;
    }, function (_unresolved_11) {
      GridComponent = _unresolved_11.GridComponent;
    }, function (_unresolved_12) {
      UtilMgr = _unresolved_12.UtilMgr;
    }, function (_unresolved_13) {
      BoardMgr = _unresolved_13.BoardMgr;
    }, function (_unresolved_14) {
      JsonUtil = _unresolved_14.JsonUtil;
    }, function (_unresolved_15) {
      UIID = _unresolved_15.UIID;
    }, function (_unresolved_16) {
      CarrotMgr = _unresolved_16.CarrotMgr;
    }, function (_unresolved_17) {
      FeedMgr = _unresolved_17.FeedMgr;
    }, function (_unresolved_18) {
      GuideMgr = _unresolved_18.GuideMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2485bNARw9Lq61bVSx1Z1zY", "HeChengManager", undefined);

      _export("HeChengManager", HeChengManager = class HeChengManager {
        constructor() {
          this._tsRestaurantlevel = new (_crd && TableRestaurantlevel === void 0 ? (_reportPossibleCrUseOfTableRestaurantlevel({
            error: Error()
          }), TableRestaurantlevel) : TableRestaurantlevel)();
          this._tsIngredients = new (_crd && TableIngredients === void 0 ? (_reportPossibleCrUseOfTableIngredients({
            error: Error()
          }), TableIngredients) : TableIngredients)();
          this.IsAutoHechenging = false;
          this.IsPlayHechengingAnim = false;
          this.IsAutoOpenLiwu = false;
          this.GridIsFullTipsTimes = 0;
          this.TuZiCoinTipsTimes = 0;
          this.IsDraging = false;
        }

        /** 回收 */
        onHuiShou() {
          console.log("onHuiShou");
        }
        /** 打开拔萝卜界面 */


        onGotoCarrots() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).CarrotMain);
          (_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
            error: Error()
          }), CarrotMgr) : CarrotMgr).SendOpenPanel(); // ShopMgr.SendAddCarrotCoin(1000000);
        }
        /** 采购 */


        onCaiGou(isAuto) {
          if (!(_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
            error: Error()
          }), BoardMgr) : BoardMgr).isHasEmptyGrid()) {
            //已经放不下更多食材啦，快去合成吧！
            if (isAuto) {
              if (!(_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).gui.hasUI((_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
                error: Error()
              }), LayerType) : LayerType).PopUp) && !(_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).gui.hasUI((_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
                error: Error()
              }), LayerType) : LayerType).Dialog)) {
                if (this.GridIsFullTipsTimes == 0) {
                  this.GridIsFullTipsTimes += 1;
                  (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                    error: Error()
                  }), oops) : oops).gui.toast("stringres_002", true);
                }
              }
            } else {
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).gui.toast("stringres_002", true);
            }

            return;
          }

          this._tsRestaurantlevel.init((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CanTingLevel);

          var Cost = this.GetMakeSucaiCost();

          if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).TuZiCoin < this.GetMakeSucaiCost()) {
            //兔子币不足，无法采购
            if (isAuto) {
              if (!(_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).gui.hasUI((_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
                error: Error()
              }), LayerType) : LayerType).PopUp) && !(_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).gui.hasUI((_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
                error: Error()
              }), LayerType) : LayerType).Dialog)) {
                if (this.TuZiCoinTipsTimes == 0) {
                  this.TuZiCoinTipsTimes += 1;
                  (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                    error: Error()
                  }), oops) : oops).gui.toast("stringres_003", true);
                }
              }
            } else {
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).gui.toast("stringres_003", true);
            }

            return;
          }

          if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).TuZiCoin >= Cost) {
            var IngredientsId = this.GetSucaiIdByCanTingLv((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).CanTingLevel);

            if (IngredientsId > 0 && (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
              error: Error()
            }), BoardMgr) : BoardMgr).addGrid(IngredientsId)) {
              (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).updateRabbitCoin((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).TuZiCoin - BigInt(Cost));

              this._tsIngredients.init(IngredientsId);

              (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
                error: Error()
              }), FeedMgr) : FeedMgr).UpdateExtDishPrice(IngredientsId);
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).UpdateBaseData);
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).UpdateTuziCoin);
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
              this.GridIsFullTipsTimes = 0;
              this.TuZiCoinTipsTimes = 0;
            }
          }
        }

        GetMakeSucaiCost() {
          var IngredientsId = this.GetSucaiIdByCanTingLv((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CanTingLevel);

          if (IngredientsId > 0) {
            this._tsIngredients.init(IngredientsId);

            if ((_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
              error: Error()
            }), FeedMgr) : FeedMgr).ExtDishPrice[IngredientsId]) {
              return Math.floor(this._tsIngredients.cost1 * (1 + (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
                error: Error()
              }), FeedMgr) : FeedMgr).ExtDishPrice[IngredientsId]));
            } else {
              return this._tsIngredients.cost1;
            }
          }

          return 0;
        }

        GetMaxCantingLevel() {
          var MaxCantingLevel = 1;
          var jsonTabel = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get((_crd && TableRestaurantlevel === void 0 ? (_reportPossibleCrUseOfTableRestaurantlevel({
            error: Error()
          }), TableRestaurantlevel) : TableRestaurantlevel).TableName);

          if (jsonTabel) {
            for (var id in jsonTabel) {
              if (Number(id) > MaxCantingLevel) {
                MaxCantingLevel = Number(id);
              }
            }
          }

          return MaxCantingLevel;
        }

        GetSucaiIdByCanTingLv(level) {
          var resultIndex = 0;

          this._tsRestaurantlevel.init(level);

          var foodlevel = this._tsRestaurantlevel.foodlevel;
          var resultLevel = foodlevel;
          var resultIngredients = [];
          var jsonIngredients = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get((_crd && TableIngredients === void 0 ? (_reportPossibleCrUseOfTableIngredients({
            error: Error()
          }), TableIngredients) : TableIngredients).TableName);

          if (jsonIngredients) {
            for (var id in jsonIngredients) {
              var Ingredients = jsonIngredients[id];

              if (Ingredients.level == resultLevel) {
                return Number(id);
              }
            }
          }

          return 0;
        }
        /** 自动 */


        onAuto() {
          if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).AutoType == (_crd && AutoTypeEnum === void 0 ? (_reportPossibleCrUseOfAutoTypeEnum({
            error: Error()
          }), AutoTypeEnum) : AutoTypeEnum).NoBuy) {
            //打开购买界面
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).BuyAutoUI);
          } else if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).AutoType == (_crd && AutoTypeEnum === void 0 ? (_reportPossibleCrUseOfAutoTypeEnum({
            error: Error()
          }), AutoTypeEnum) : AutoTypeEnum).HasBuyAndOpen) {
            (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).AutoType = (_crd && AutoTypeEnum === void 0 ? (_reportPossibleCrUseOfAutoTypeEnum({
              error: Error()
            }), AutoTypeEnum) : AutoTypeEnum).HasBuyButClose;
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.toast("message_25", true);
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).UpdateAutoBtn);
          } else if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).AutoType == (_crd && AutoTypeEnum === void 0 ? (_reportPossibleCrUseOfAutoTypeEnum({
            error: Error()
          }), AutoTypeEnum) : AutoTypeEnum).HasBuyButClose) {
            (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).AutoType = (_crd && AutoTypeEnum === void 0 ? (_reportPossibleCrUseOfAutoTypeEnum({
              error: Error()
            }), AutoTypeEnum) : AutoTypeEnum).HasBuyAndOpen;
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.toast("message_24", true);
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).UpdateAutoBtn);
          }
        }

        OnHandleAuto() {
          //处理自动
          if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).AutoType == (_crd && AutoTypeEnum === void 0 ? (_reportPossibleCrUseOfAutoTypeEnum({
            error: Error()
          }), AutoTypeEnum) : AutoTypeEnum).HasBuyAndOpen) {
            (_crd && GuideMgr === void 0 ? (_reportPossibleCrUseOfGuideMgr({
              error: Error()
            }), GuideMgr) : GuideMgr).ResetGuide();
            if (this.IsAutoHechenging) return;
            if (this.IsAutoOpenLiwu) return;

            if (this.OnAutoHecheng()) {
              console.log("OnAutoHecheng");
            } else {
              if (this.OnAutoOpenLiwu()) {} else {
                //自动采购
                this.onCaiGou(true); //自动回收

                this.OnAutoHuiShou();
              }
            }
          }
        }

        OnAutoHuiShou() {
          this._tsRestaurantlevel.init((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CanTingLevel);

          if (this._tsRestaurantlevel.recoverylevel > 0) {
            for (var index = 0; index < (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
              error: Error()
            }), BoardMgr) : BoardMgr).board.length; index++) {
              var cell = (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                error: Error()
              }), BoardMgr) : BoardMgr).board[index];

              this._tsIngredients.init(cell.SuCaiId);

              if (this._tsIngredients.level <= this._tsRestaurantlevel.recoverylevel) {
                this.HandleHuiShou(index);
              }
            }
          }
        }

        OnAutoHecheng() {
          for (var i = 0; i < (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
            error: Error()
          }), BoardMgr) : BoardMgr).board.length; i++) {
            for (var j = i + 1; j < (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
              error: Error()
            }), BoardMgr) : BoardMgr).board.length; j++) {
              if ((_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                error: Error()
              }), BoardMgr) : BoardMgr).board[i].SuCaiId > 0 && (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                error: Error()
              }), BoardMgr) : BoardMgr).board[i].SuCaiId === (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                error: Error()
              }), BoardMgr) : BoardMgr).board[j].SuCaiId) {
                var NextSuCaiId = this.GetNextLevelSuCaiId((_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                  error: Error()
                }), BoardMgr) : BoardMgr).board[i].SuCaiId);

                if (NextSuCaiId > 0) {
                  //找到可以合成的素材了
                  this.IsAutoHechenging = true;
                  var params = {};
                  params.SrcIndex = i;
                  params.DestIndex = j;
                  (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                    error: Error()
                  }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                    error: Error()
                  }), GameEvent) : GameEvent).OnAutoHecheng, params);
                  return true;
                }
              }
            }
          }

          return false;
        }

        OnAutoOpenLiwu() {
          for (var i = 0; i < (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
            error: Error()
          }), BoardMgr) : BoardMgr).board.length; i++) {
            if ((_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
              error: Error()
            }), BoardMgr) : BoardMgr).board[i].IsLiWu && !(_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
              error: Error()
            }), BoardMgr) : BoardMgr).board[i].IsLiWuFlying) {
              this.IsAutoOpenLiwu = true;
              (_crd && LiWuMgr === void 0 ? (_reportPossibleCrUseOfLiWuMgr({
                error: Error()
              }), LiWuMgr) : LiWuMgr).openLiwu(i);
              return true;
            }
          }

          return false;
        }

        HandleHecheng(srcIndex, destIndex) {
          if ((_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
            error: Error()
          }), BoardMgr) : BoardMgr).board && (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
            error: Error()
          }), BoardMgr) : BoardMgr).board[srcIndex] && (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
            error: Error()
          }), BoardMgr) : BoardMgr).board[destIndex]) {
            var srcSuCaiId = (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
              error: Error()
            }), BoardMgr) : BoardMgr).board[srcIndex].SuCaiId;
            var destSuCaiId = (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
              error: Error()
            }), BoardMgr) : BoardMgr).board[destIndex].SuCaiId;

            if (srcSuCaiId > 0 && destSuCaiId > 0 && srcSuCaiId === destSuCaiId) {
              var NextSuCaiId = this.GetNextLevelSuCaiId(srcSuCaiId);

              if (NextSuCaiId > 0) {
                var HechengGUI = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                  error: Error()
                }), oops) : oops).gui.get((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                  error: Error()
                }), UIID) : UIID).MainUI);

                if (HechengGUI) {
                  var HechengCom = HechengGUI.getComponent(_crd && HeChengComponent === void 0 ? (_reportPossibleCrUseOfHeChengComponent({
                    error: Error()
                  }), HeChengComponent) : HeChengComponent);

                  if (HechengCom) {
                    var gridNode = HechengCom.getGridNode(destIndex);

                    if (gridNode) {
                      var gridComponent = gridNode.getComponent(_crd && GridComponent === void 0 ? (_reportPossibleCrUseOfGridComponent({
                        error: Error()
                      }), GridComponent) : GridComponent);

                      if (gridComponent) {
                        var srcGridNode = HechengCom.getGridNode(srcIndex);

                        if (srcGridNode) {
                          var srcGridComponent = srcGridNode.getComponent(_crd && GridComponent === void 0 ? (_reportPossibleCrUseOfGridComponent({
                            error: Error()
                          }), GridComponent) : GridComponent);

                          if (srcGridComponent) {
                            srcGridComponent.SuCaiSprite.node.active = false;
                          }
                        }

                        (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                          error: Error()
                        }), UtilMgr) : UtilMgr).PlaySoundEffect(29);
                        this.IsPlayHechengingAnim = true;
                        (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                          error: Error()
                        }), UtilMgr) : UtilMgr).addNodeAnimation("animation/hecheng", gridComponent.SuCaiSprite.node, true, false, () => {
                          (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
                            error: Error()
                          }), FeedMgr) : FeedMgr).UpdateHechengMaxLevel(NextSuCaiId);
                          (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                            error: Error()
                          }), BoardMgr) : BoardMgr).board[srcIndex].SuCaiId = 0;
                          (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                            error: Error()
                          }), BoardMgr) : BoardMgr).board[destIndex].SuCaiId = NextSuCaiId;
                          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                            error: Error()
                          }), UtilMgr) : UtilMgr).PlaySoundEffect(16);
                          this.IsAutoHechenging = false;
                          this.IsPlayHechengingAnim = false; //合成加餐厅经验

                          this.AddCanTingExp(NextSuCaiId);
                          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                            error: Error()
                          }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                            error: Error()
                          }), GameEvent) : GameEvent).UpdateBaseData);
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
                        });
                      }
                    }
                  }
                }
              }
            }
          } //处理合成


          return false;
        } //增加餐厅经验


        AddCanTingExp(NextSuCaiId) {
          this._tsIngredients.init(NextSuCaiId);

          (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CanTingExp = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CanTingExp + this._tsIngredients.getexp; //判断是否升级

          this._tsRestaurantlevel.init((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CanTingLevel);

          if (this._tsRestaurantlevel.exp > 0) {
            if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).CanTingExp >= this._tsRestaurantlevel.exp) {
              //餐厅可以升级了
              var nextLevel = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).CanTingLevel + 1;

              if (nextLevel <= this.GetMaxCantingLevel()) {
                (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).CanTingExp = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).CanTingExp - this._tsRestaurantlevel.exp;
                (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).CanTingLevel = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).CanTingLevel + 1;
                (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
                  error: Error()
                }), FeedMgr) : FeedMgr).updateFreeDishId();
                (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                  error: Error()
                }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                  error: Error()
                }), GameEvent) : GameEvent).UpdateBaseData);
                (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                  error: Error()
                }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                  error: Error()
                }), GameEvent) : GameEvent).Save);
                var tips = (_crd && StringUtil === void 0 ? (_reportPossibleCrUseOfStringUtil({
                  error: Error()
                }), StringUtil) : StringUtil).substitute_1((_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                  error: Error()
                }), oops) : oops).language.getLangByID("message_27"), (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).CanTingLevel);
                (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                  error: Error()
                }), oops) : oops).gui.toast(tips, true);
              }
            }
          }
        }

        GetNextLevelSuCaiId(SuCaiId) {
          this._tsIngredients.init(SuCaiId);

          var curSuCaiType = this._tsIngredients.type;
          var nextSuCaiLevel = this._tsIngredients.level + 1;
          var jsonIngredients = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get((_crd && TableIngredients === void 0 ? (_reportPossibleCrUseOfTableIngredients({
            error: Error()
          }), TableIngredients) : TableIngredients).TableName);

          if (jsonIngredients) {
            for (var id in jsonIngredients) {
              var Ingredients = jsonIngredients[id];

              if (Ingredients.type == curSuCaiType && Ingredients.level == nextSuCaiLevel) {
                return Number(id);
              }
            }
          }

          return 0;
        }

        HandleHuiShou(index) {
          if ((_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
            error: Error()
          }), BoardMgr) : BoardMgr).board && (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
            error: Error()
          }), BoardMgr) : BoardMgr).board[index]) {
            var suCaiId = (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
              error: Error()
            }), BoardMgr) : BoardMgr).board[index].SuCaiId;

            if (suCaiId > 0) {
              this._tsIngredients.init(suCaiId);

              (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                error: Error()
              }), BoardMgr) : BoardMgr).board[index].SuCaiId = 0;
              (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).updateRabbitCoin((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).TuZiCoin + BigInt(this._tsIngredients.recovery));
              (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).LastRecoverTuziCoin = this._tsIngredients.recovery;
              (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                error: Error()
              }), UtilMgr) : UtilMgr).PlaySoundEffect(30);
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).UpdateBaseData);
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).UpdateTuziCoin);
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
          }
        }

      });

      _export("HeChengMgr", HeChengMgr = new HeChengManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=43c0203105f4bc08a60455442e62cd2447a75b59.js.map