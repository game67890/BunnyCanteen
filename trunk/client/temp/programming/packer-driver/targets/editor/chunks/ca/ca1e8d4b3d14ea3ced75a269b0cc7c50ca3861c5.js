System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, TonGameMgr, ProtocolMgr, TableShop, GameEvent, oops, UIID, HeChengComponent, UtilMgr, ShopManager, _crd, ShopMgr;

  function _reportPossibleCrUseOfHttpReturn(extras) {
    _reporterNs.report("HttpReturn", "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonGameMgr(extras) {
    _reporterNs.report("TonGameMgr", "../manager/TonGameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocolMgr(extras) {
    _reporterNs.report("ProtocolMgr", "../manager/ProtocolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableShop(extras) {
    _reporterNs.report("TableShop", "../../framework/common/table/TableShop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../framework/common/config/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../framework/common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeChengComponent(extras) {
    _reporterNs.report("HeChengComponent", "../hecheng/HeChengComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  _export("ShopManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      TonGameMgr = _unresolved_2.TonGameMgr;
    }, function (_unresolved_3) {
      ProtocolMgr = _unresolved_3.ProtocolMgr;
    }, function (_unresolved_4) {
      TableShop = _unresolved_4.TableShop;
    }, function (_unresolved_5) {
      GameEvent = _unresolved_5.GameEvent;
    }, function (_unresolved_6) {
      oops = _unresolved_6.oops;
    }, function (_unresolved_7) {
      UIID = _unresolved_7.UIID;
    }, function (_unresolved_8) {
      HeChengComponent = _unresolved_8.HeChengComponent;
    }, function (_unresolved_9) {
      UtilMgr = _unresolved_9.UtilMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8e68cpfXxRKsotbViY6Qv55", "ShopManager", undefined);

      _export("ShopManager", ShopManager = class ShopManager {
        constructor() {
          this.tablerecord = new (_crd && TableShop === void 0 ? (_reportPossibleCrUseOfTableShop({
            error: Error()
          }), TableShop) : TableShop)();
          this.AnimationNum = [1, 2];
        }

        IsHaveRabbitId(id) {
          for (let i = 0; i < (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).RabbitIdList.length; i++) {
            if (id == (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).RabbitIdList[i]) {
              return true;
            }
          }

          return false;
        } // 随机一个兔子动画


        GetRandomAnimation(id) {
          this.tablerecord.init(id);

          if (this.tablerecord && this.tablerecord.id && this.tablerecord.id > 0) {
            let index = (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).getRandomNumber(this.AnimationNum);

            if (index == 1) {
              return this.tablerecord.rabbitanimation;
            } else {
              return this.tablerecord.rabbitanimation2;
            }
          }

          return "";
        }

        SendBuyRabbit(confId) {
          var completeCBuy = ret => {
            console.log(ret.res);

            if (ret.isSucc) {
              let tablerecord = new (_crd && TableShop === void 0 ? (_reportPossibleCrUseOfTableShop({
                error: Error()
              }), TableShop) : TableShop)();
              tablerecord.init(Number(ret.res.confId));
              (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).CurRabbitId = Number(ret.res.confId);
              (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).CurRabbitAnimation = ShopMgr.GetRandomAnimation(Number(ret.res.confId));
              (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).AddtionGain = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).AddtionGain + tablerecord.effect / 100;
              (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).RabbitIdList.push(Number(ret.res.confId));

              if (tablerecord.paytype == 1) {
                (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).updateRabbitCoin((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).TuZiCoin - BigInt(tablerecord.price));
              } else if (tablerecord.paytype == 2) {
                (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).updateCarrotCoin((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).CarrotCoin - tablerecord.price);
              }

              (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                error: Error()
              }), UtilMgr) : UtilMgr).PlaySoundEffect(tablerecord.sound);
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).gui.toast("message_28", true);
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
              }), GameEvent) : GameEvent).Save);
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).OnShopListChange);
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
                  HechengCom.RefreshRabbitIcon();
                }
              }
            }
          };

          const data = {};
          data.confId = confId.toString();
          data.userID = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).UserId;
          data.token = "e10adc3949ba59abbe56e057f20f883e";
          const param = JSON.stringify(data);
          (_crd && ProtocolMgr === void 0 ? (_reportPossibleCrUseOfProtocolMgr({
            error: Error()
          }), ProtocolMgr) : ProtocolMgr).sendcbuyrabbit(completeCBuy, param);
        } // 增加萝卜币指令协议


        SendAddCarrotCoin(count) {
          var completeCAddCarrotCoin = ret => {
            console.log(ret.res);

            if (ret.isSucc) {
              (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).updateCarrotCoin((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).CarrotCoin + Number(ret.res.count));
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).UpdateBaseData);
            }
          };

          const data = {};
          data.count = count.toString();
          data.userID = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).UserId;
          data.token = "e10adc3949ba59abbe56e057f20f883e";
          const param = JSON.stringify(data);
          (_crd && ProtocolMgr === void 0 ? (_reportPossibleCrUseOfProtocolMgr({
            error: Error()
          }), ProtocolMgr) : ProtocolMgr).sendaddcarrotcion(completeCAddCarrotCoin, param);
        }

      });

      _export("ShopMgr", ShopMgr = new ShopManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ca1e8d4b3d14ea3ced75a269b0cc7c50ca3861c5.js.map