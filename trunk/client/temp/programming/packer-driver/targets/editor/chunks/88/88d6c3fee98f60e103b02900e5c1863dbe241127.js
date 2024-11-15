System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, _decorator, Component, Label, oops, UIID, GameEvent, TonGameMgr, StringUtil, Button, Widget, CarrotMgr, TableOtherParameter, color, ShopMgr, PaymentMgr, UtilMgr, AcceleratedBuffMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, CarrotComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../framework/common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../framework/common/config/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonGameMgr(extras) {
    _reporterNs.report("TonGameMgr", "../manager/TonGameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStringUtil(extras) {
    _reporterNs.report("StringUtil", "../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCarrotMgr(extras) {
    _reporterNs.report("CarrotMgr", "./CarrotManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableOtherParameter(extras) {
    _reporterNs.report("TableOtherParameter", "../../framework/common/table/TableOtherParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopMgr(extras) {
    _reporterNs.report("ShopMgr", "../shop/ShopManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPaymentMgr(extras) {
    _reporterNs.report("PaymentMgr", "../payment/PaymentManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAcceleratedBuffMgr(extras) {
    _reporterNs.report("AcceleratedBuffMgr", "../acceleratedbuff/AcceleratedBuffManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Animation = _cc.Animation;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Button = _cc.Button;
      Widget = _cc.Widget;
      color = _cc.color;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      UIID = _unresolved_3.UIID;
    }, function (_unresolved_4) {
      GameEvent = _unresolved_4.GameEvent;
    }, function (_unresolved_5) {
      TonGameMgr = _unresolved_5.TonGameMgr;
    }, function (_unresolved_6) {
      StringUtil = _unresolved_6.StringUtil;
    }, function (_unresolved_7) {
      CarrotMgr = _unresolved_7.CarrotMgr;
    }, function (_unresolved_8) {
      TableOtherParameter = _unresolved_8.TableOtherParameter;
    }, function (_unresolved_9) {
      ShopMgr = _unresolved_9.ShopMgr;
    }, function (_unresolved_10) {
      PaymentMgr = _unresolved_10.PaymentMgr;
    }, function (_unresolved_11) {
      UtilMgr = _unresolved_11.UtilMgr;
    }, function (_unresolved_12) {
      AcceleratedBuffMgr = _unresolved_12.AcceleratedBuffMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bb6beJkEbJKyJkSzBCiDmGY", "CarrotComponent", undefined);

      __checkObsolete__(['Animation', 'AnimationClip', '_decorator', 'Component', 'Node', 'Sprite', 'Label']);

      __checkObsolete__(['Button']);

      __checkObsolete__(['Widget']);

      __checkObsolete__(['color']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CarrotComponent", CarrotComponent = (_dec = ccclass('CarrotComponent'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Label), _dec5 = property(Button), _dec6 = property(Label), _dec7 = property(Widget), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Button), _dec11 = property(Button), _dec12 = property(Label), _dec13 = property(Button), _dec(_class = (_class2 = class CarrotComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "CloseBtn", _descriptor, this);

          _initializerDefineProperty(this, "TipsBtn", _descriptor2, this);

          _initializerDefineProperty(this, "RankTxt", _descriptor3, this);

          _initializerDefineProperty(this, "RankBtn", _descriptor4, this);

          _initializerDefineProperty(this, "RabbitCoinNum", _descriptor5, this);

          _initializerDefineProperty(this, "ShovelIcon", _descriptor6, this);

          // CarrotIcon: Widget;
          _initializerDefineProperty(this, "CarrotCoinNum", _descriptor7, this);

          _initializerDefineProperty(this, "NeedCarrotCoinNum", _descriptor8, this);

          _initializerDefineProperty(this, "AddBtn", _descriptor9, this);

          _initializerDefineProperty(this, "StartBtn", _descriptor10, this);

          _initializerDefineProperty(this, "StartBtnTxt", _descriptor11, this);

          _initializerDefineProperty(this, "AutoBtn", _descriptor12, this);

          this.ispulling = false;
          this._updateTimer = 0;
          this.animationtime = 5.9;
          this.tablereward = new (_crd && TableOtherParameter === void 0 ? (_reportPossibleCrUseOfTableOtherParameter({
            error: Error()
          }), TableOtherParameter) : TableOtherParameter)();
          this.neednum = 0;
          this.animCtrl = {};
        }

        start() {}

        update(deltaTime) {
          if (this.ispulling) {
            this._updateTimer += deltaTime;

            if (this._updateTimer >= this.animationtime) {
              if ((_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
                error: Error()
              }), CarrotMgr) : CarrotMgr).LeftTimes > 0) {
                (_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
                  error: Error()
                }), CarrotMgr) : CarrotMgr).LeftTimes = (_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
                  error: Error()
                }), CarrotMgr) : CarrotMgr).LeftTimes - 1;
              }

              (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                error: Error()
              }), UtilMgr) : UtilMgr).StopSoundEffect();
              this._updateTimer = 0;
              this.ispulling = false;
              (_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
                error: Error()
              }), CarrotMgr) : CarrotMgr).SendBaLuoBo(1);
            }
          }
        }

        onAdded(params) {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).StopBgMusic();
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlayBgMusic(24);
          this.init();
          this.addEvent();
          return true;
        }

        init() {
          this.StartBtnTxt.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_178");
          this.tablereward.init(1);
          this.neednum = Number(this.tablereward.parameter);
          this.NeedCarrotCoinNum.string = "/" + this.neednum.toString();
          this.animCtrl = this.ShovelIcon.getComponent(Animation);
          this.updateBaseData();
          this.updateTuziCoin();
        }

        onDestroy() {
          this.removeEvent();
        }
        /** 添加全局消息事件 */


        addEvent() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateBaseData, this.onUpdateData, this);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).OnMyRankChange, this.onUpdateData, this);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateTuziCoin, this.onUpdateData, this);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateCarrotCoin, this.onUpdateData, this);
        }
        /** 移除全局消息事件 */


        removeEvent() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateBaseData, this.onUpdateData, this);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).OnMyRankChange, this.onUpdateData, this);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateTuziCoin, this.onUpdateData, this);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateCarrotCoin, this.onUpdateData, this);
        }

        onUpdateData(event, args) {
          switch (event) {
            case (_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).UpdateBaseData:
              this.updateBaseData();
              break;

            case (_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).OnMyRankChange:
              this.updateBaseData();
              break;

            case (_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).UpdateTuziCoin:
              this.updateTuziCoin();
              break;

            case (_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).UpdateCarrotCoin:
              this.updateCarrotCoin();
              break;
          }
        }

        updateBaseData() {
          this.CarrotCoinNum.string = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CarrotCoin.toString();

          if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CarrotCoin >= this.neednum) {
            this.CarrotCoinNum.color = color(85, 5, 5);
          } else {
            this.CarrotCoinNum.color = color(255, 0, 0);
          }

          if ((_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
            error: Error()
          }), CarrotMgr) : CarrotMgr).CurrentCarrotRank > 0) {
            this.RankTxt.string = (_crd && StringUtil === void 0 ? (_reportPossibleCrUseOfStringUtil({
              error: Error()
            }), StringUtil) : StringUtil).substitute_1((_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).language.getLangByID("stringres_026"), (_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
              error: Error()
            }), CarrotMgr) : CarrotMgr).CurrentCarrotRank, (_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
              error: Error()
            }), CarrotMgr) : CarrotMgr).CurrentCarrotWeight.toString() + "kg");
          } else {
            this.RankTxt.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).language.getLangByID("stringres_021");
          }
        }

        updateTuziCoin() {
          this.RabbitCoinNum.string = (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).formatNumber((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).TuZiCoin);
        }

        updateCarrotCoin() {
          this.CarrotCoinNum.string = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CarrotCoin.toString();
        } // 点击关闭按钮


        onCloseBtnVlick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(19);
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).StopBgMusic();

          if ((_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).isAccelerating()) {
            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).PlayBgMusic(23);
          } else {
            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).PlayBgMusic(22);
          }

          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.remove((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).CarrotMain);
        } // 点击tips按钮


        onTipsBtnClick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).CarrotTips, 1);
        } // 点击排行榜按钮


        onRankBtnClick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          (_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
            error: Error()
          }), CarrotMgr) : CarrotMgr).SendOpenRankPanel();
        } // 点击GM按钮


        onGMBtnClick() {
          (_crd && ShopMgr === void 0 ? (_reportPossibleCrUseOfShopMgr({
            error: Error()
          }), ShopMgr) : ShopMgr).SendAddCarrotCoin(500);
        } // 点击自动按钮


        onAutoBtnClick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).CarrotAuto);
        } // 点击开始按钮


        onStartBtnClick() {
          if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CarrotCoin < this.neednum) {
            // 当前萝卜币数量不足
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.toast("message_07", true);
            return;
          }

          (_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
            error: Error()
          }), CarrotMgr) : CarrotMgr).LeftTimes = 1;
          this.StartPulling();
        } // 点击加号按钮


        onAddBtnClick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          (_crd && PaymentMgr === void 0 ? (_reportPossibleCrUseOfPaymentMgr({
            error: Error()
          }), PaymentMgr) : PaymentMgr).OpenPaymentUI();
        }

        StartPulling() {
          if ((_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
            error: Error()
          }), CarrotMgr) : CarrotMgr).LeftTimes > 0 && this.ispulling == false) {
            this.ispulling = true;
            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).PlaySoundEffect(1);
            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).addNodeAnimation("animation/baluobo", this.ShovelIcon.node);
            this.animCtrl = this.ShovelIcon.getComponent(Animation);

            if (this.animCtrl) {
              this.animationtime = this.animCtrl.defaultClip.duration / this.animCtrl.defaultClip.speed;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "CloseBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "TipsBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "RankTxt", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "RankBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "RabbitCoinNum", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ShovelIcon", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "CarrotCoinNum", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "NeedCarrotCoinNum", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "AddBtn", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "StartBtn", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "StartBtnTxt", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "AutoBtn", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=88d6c3fee98f60e103b02900e5c1863dbe241127.js.map