System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, oops, JsonUtil, GameEvent, UIID, TableIngredients, TableRestaurantlevel, HeChengComponent, BoardMgr, ProtocolMgr, TonGameMgr, UtilMgr, FeedMain, FeedManager, _crd, FeedMgr;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpReturn(extras) {
    _reporterNs.report("HttpReturn", "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../framework/common/config/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../framework/common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableIngredients(extras) {
    _reporterNs.report("TableIngredients", "../../framework/common/table/TableIngredients", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableRestaurantlevel(extras) {
    _reporterNs.report("TableRestaurantlevel", "../../framework/common/table/TableRestaurantlevel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeChengComponent(extras) {
    _reporterNs.report("HeChengComponent", "../hecheng/HeChengComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoardMgr(extras) {
    _reporterNs.report("BoardMgr", "../manager/BoardManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocolMgr(extras) {
    _reporterNs.report("ProtocolMgr", "../manager/ProtocolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonGameMgr(extras) {
    _reporterNs.report("TonGameMgr", "../manager/TonGameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFeedMain(extras) {
    _reporterNs.report("FeedMain", "./FeedMain", _context.meta, extras);
  }

  _export("FeedManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      JsonUtil = _unresolved_3.JsonUtil;
    }, function (_unresolved_4) {
      GameEvent = _unresolved_4.GameEvent;
    }, function (_unresolved_5) {
      UIID = _unresolved_5.UIID;
    }, function (_unresolved_6) {
      TableIngredients = _unresolved_6.TableIngredients;
    }, function (_unresolved_7) {
      TableRestaurantlevel = _unresolved_7.TableRestaurantlevel;
    }, function (_unresolved_8) {
      HeChengComponent = _unresolved_8.HeChengComponent;
    }, function (_unresolved_9) {
      BoardMgr = _unresolved_9.BoardMgr;
    }, function (_unresolved_10) {
      ProtocolMgr = _unresolved_10.ProtocolMgr;
    }, function (_unresolved_11) {
      TonGameMgr = _unresolved_11.TonGameMgr;
    }, function (_unresolved_12) {
      UtilMgr = _unresolved_12.UtilMgr;
    }, function (_unresolved_13) {
      FeedMain = _unresolved_13.FeedMain;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "689ccle7rpCJblB52vA6fCy", "FeedManager", undefined);

      _export("FeedManager", FeedManager = class FeedManager {
        constructor() {
          this.tablerecord = new (_crd && TableIngredients === void 0 ? (_reportPossibleCrUseOfTableIngredients({
            error: Error()
          }), TableIngredients) : TableIngredients)();
          this.NextFreeDishTime = 0;
          // 距离下一次领取免费菜品的剩余时间
          this.FreeDishId = 0;
          // 免费菜品id
          this.HechengMaxLevel = [];
          // 合成菜品的最大等级
          this.ExtDishPrice = [];
        }

        // 记录菜品的价格涨幅
        UpdateExtDishPrice(configId) {
          this.tablerecord.init(configId);

          if (FeedMgr.ExtDishPrice[configId]) {
            FeedMgr.ExtDishPrice[configId] = FeedMgr.ExtDishPrice[configId] + this.tablerecord.costup;
          } else {
            FeedMgr.ExtDishPrice[configId] = this.tablerecord.costup;
          }
        } // 更新合成菜品的最大等级


        UpdateHechengMaxLevel(sucaiid) {
          var tablerecord = new (_crd && TableIngredients === void 0 ? (_reportPossibleCrUseOfTableIngredients({
            error: Error()
          }), TableIngredients) : TableIngredients)();
          tablerecord.init(sucaiid);

          if (FeedMgr.HechengMaxLevel[tablerecord.type]) {
            if (tablerecord.level > FeedMgr.HechengMaxLevel[tablerecord.type]) {
              FeedMgr.HechengMaxLevel[tablerecord.type] = tablerecord.level;
            }
          } else {
            FeedMgr.HechengMaxLevel[tablerecord.type] = tablerecord.level;
          }
        }

        updateFreeDishId() {
          if (this.FreeDishId <= 0 && this.NextFreeDishTime <= 0) {
            this.FreeDishId = this.GetFreeDishId();
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
                HechengCom.RefreshFeedRed();
              }
            }
          }
        }

        RefreshData(usetime) {
          if (this.FreeDishId <= 100) {
            if (usetime >= this.NextFreeDishTime) {
              this.NextFreeDishTime = 0;
              this.FreeDishId = this.GetFreeDishId();
            }
          }
        }

        GetFreeDishId() {
          var randomlist = [];
          var tablerecord = new (_crd && TableIngredients === void 0 ? (_reportPossibleCrUseOfTableIngredients({
            error: Error()
          }), TableIngredients) : TableIngredients)();
          var tablerest = new (_crd && TableRestaurantlevel === void 0 ? (_reportPossibleCrUseOfTableRestaurantlevel({
            error: Error()
          }), TableRestaurantlevel) : TableRestaurantlevel)();
          var jsonIngredients = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get((_crd && TableIngredients === void 0 ? (_reportPossibleCrUseOfTableIngredients({
            error: Error()
          }), TableIngredients) : TableIngredients).TableName);
          tablerest.init((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CanTingLevel);

          if (jsonIngredients) {
            for (var configid in jsonIngredients) {
              var Ingredients = jsonIngredients[configid];

              if (Ingredients.level == tablerest.foodlevel + 2 - 5) {
                tablerecord.init(Number(configid));

                if (tablerecord && tablerecord.id && tablerecord.id > 0) {
                  randomlist.push(tablerecord.id);
                }
              }
            }
          }

          if (randomlist.length > 0) {
            return (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).getRandomNumber(randomlist);
          } else {
            return 0;
          }
        }

        UpdateNextFreeDishTime() {
          if (this.NextFreeDishTime > 0) {
            this.NextFreeDishTime = this.NextFreeDishTime - 1;

            if (this.NextFreeDishTime <= 0) {
              this.NextFreeDishTime = 0;
              this.FreeDishId = this.GetFreeDishId();
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
                  HechengCom.RefreshFeedRed();
                }
              }
            }
          }
        }

        SendBuyDish(confId, count) {
          var completeCBuyDish = ret => {
            console.log(ret.res);

            if (ret.isSucc) {
              var tablerecord = new (_crd && TableIngredients === void 0 ? (_reportPossibleCrUseOfTableIngredients({
                error: Error()
              }), TableIngredients) : TableIngredients)();
              tablerecord.init(Number(ret.res.confId));

              if ((_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                error: Error()
              }), BoardMgr) : BoardMgr).addGrid(Number(ret.res.confId))) {
                (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).updateCarrotCoin((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).CarrotCoin - Number(ret.res.count));
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
              }

              var FeedGUI = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).gui.get((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                error: Error()
              }), UIID) : UIID).FeedMain);

              if (FeedGUI) {
                var FeedCom = FeedGUI.getComponent(_crd && FeedMain === void 0 ? (_reportPossibleCrUseOfFeedMain({
                  error: Error()
                }), FeedMain) : FeedMain);

                if (FeedCom) {
                  FeedCom.updategridList();
                }
              }

              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).gui.toast("message_11", true); // 购买成功！

              FeedMgr.UpdateExtDishPrice(Number(ret.res.confId));
            }
          };

          var data = {};
          data.confId = confId.toString();
          data.count = count.toString();
          data.userID = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).UserId;
          data.token = "e10adc3949ba59abbe56e057f20f883e";
          var param = JSON.stringify(data);
          (_crd && ProtocolMgr === void 0 ? (_reportPossibleCrUseOfProtocolMgr({
            error: Error()
          }), ProtocolMgr) : ProtocolMgr).sendcbuydish(completeCBuyDish, param);
        }

      });

      _export("FeedMgr", FeedMgr = new FeedManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d44ecda99545b5016ea2cbc2f3649301700e3056.js.map