System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, oops, GameEvent, UIID, UtilMgr, TonGameMgr, AutoTypeEnum, tips, TableOtherParameter, ProtocolMgr, PaymentMgr, StringUtil, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, AutoComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../framework/common/config/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../framework/common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonGameMgr(extras) {
    _reporterNs.report("TonGameMgr", "../manager/TonGameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoTypeEnum(extras) {
    _reporterNs.report("AutoTypeEnum", "../manager/TonGameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOftips(extras) {
    _reporterNs.report("tips", "../../framework/common/prompt/TipsManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableOtherParameter(extras) {
    _reporterNs.report("TableOtherParameter", "../../framework/common/table/TableOtherParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocolMgr(extras) {
    _reporterNs.report("ProtocolMgr", "../manager/ProtocolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpReturn(extras) {
    _reporterNs.report("HttpReturn", "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPaymentMgr(extras) {
    _reporterNs.report("PaymentMgr", "../payment/PaymentManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStringUtil(extras) {
    _reporterNs.report("StringUtil", "../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      GameEvent = _unresolved_3.GameEvent;
    }, function (_unresolved_4) {
      UIID = _unresolved_4.UIID;
    }, function (_unresolved_5) {
      UtilMgr = _unresolved_5.UtilMgr;
    }, function (_unresolved_6) {
      TonGameMgr = _unresolved_6.TonGameMgr;
      AutoTypeEnum = _unresolved_6.AutoTypeEnum;
    }, function (_unresolved_7) {
      tips = _unresolved_7.tips;
    }, function (_unresolved_8) {
      TableOtherParameter = _unresolved_8.TableOtherParameter;
    }, function (_unresolved_9) {
      ProtocolMgr = _unresolved_9.ProtocolMgr;
    }, function (_unresolved_10) {
      PaymentMgr = _unresolved_10.PaymentMgr;
    }, function (_unresolved_11) {
      StringUtil = _unresolved_11.StringUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c50a9MFoU1IEIhkEPxJfKO8", "AutoComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AutoComponent", AutoComponent = (_dec = ccclass('AutoComponent'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec(_class = (_class2 = class AutoComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Title", _descriptor, this);

          _initializerDefineProperty(this, "AutoText1", _descriptor2, this);

          _initializerDefineProperty(this, "AutoText2", _descriptor3, this);

          _initializerDefineProperty(this, "AutoText3", _descriptor4, this);

          _initializerDefineProperty(this, "AutoText4", _descriptor5, this);

          _initializerDefineProperty(this, "offText", _descriptor6, this);

          _initializerDefineProperty(this, "timeText", _descriptor7, this);

          _initializerDefineProperty(this, "yuanjia", _descriptor8, this);

          _initializerDefineProperty(this, "xianjia", _descriptor9, this);

          this.tableOtherParameter = new (_crd && TableOtherParameter === void 0 ? (_reportPossibleCrUseOfTableOtherParameter({
            error: Error()
          }), TableOtherParameter) : TableOtherParameter)();
        }

        onAdded(params) {
          //自动
          this.Title.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_020");
          this.offText.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_151");
          this.timeText.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_150"); //自动合成食材

          this.AutoText1.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_011"); //自动采购

          this.AutoText2.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_012"); //自动回收低级食材

          this.AutoText3.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_013"); //自动打开礼盒

          this.AutoText4.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_014");
          this.tableOtherParameter.init(7);
          this.yuanjia.string = this.tableOtherParameter.parameter;
          this.tableOtherParameter.init(6);
          this.xianjia.string = this.tableOtherParameter.parameter;
          return true;
        }

        onBuyAuto() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          this.tableOtherParameter.init(6);
          let NeedCarrotCoin = Number(this.tableOtherParameter.parameter);

          if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CarrotCoin >= NeedCarrotCoin) {
            let tishi = (_crd && StringUtil === void 0 ? (_reportPossibleCrUseOfStringUtil({
              error: Error()
            }), StringUtil) : StringUtil).substitute_1((_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).language.getLangByID("stringres_007"), this.tableOtherParameter.parameter);
            (_crd && tips === void 0 ? (_reportPossibleCrUseOftips({
              error: Error()
            }), tips) : tips).confirm("", tishi, () => {
              var completeAutocompose = ret => {
                if (ret.isSucc && ret.res.result) {
                  //购买自动成功
                  this.onClose();
                  (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                    error: Error()
                  }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                    error: Error()
                  }), UIID) : UIID).BuyAutoUITips);
                  (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                    error: Error()
                  }), TonGameMgr) : TonGameMgr).AutoType = (_crd && AutoTypeEnum === void 0 ? (_reportPossibleCrUseOfAutoTypeEnum({
                    error: Error()
                  }), AutoTypeEnum) : AutoTypeEnum).HasBuyAndOpen;
                  (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                    error: Error()
                  }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                    error: Error()
                  }), GameEvent) : GameEvent).UpdateAutoBtn);
                }
              };

              (_crd && ProtocolMgr === void 0 ? (_reportPossibleCrUseOfProtocolMgr({
                error: Error()
              }), ProtocolMgr) : ProtocolMgr).sendAutocompose(completeAutocompose, "");
            }, (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).language.getLangByID("stringres_008"), (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).language.getLangByID("stringres_010"));
          } else {
            this.onClose(); //萝卜币不足，弹支付界面

            (_crd && PaymentMgr === void 0 ? (_reportPossibleCrUseOfPaymentMgr({
              error: Error()
            }), PaymentMgr) : PaymentMgr).OpenPaymentUI();
          }
        }

        onClose() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(19);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.remove((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).BuyAutoUI);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Title", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "AutoText1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "AutoText2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "AutoText3", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "AutoText4", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "offText", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "timeText", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "yuanjia", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "xianjia", [_dec10], {
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
//# sourceMappingURL=db74e9ae57cffed7311c3390378bb9c4c9a5eb5d.js.map