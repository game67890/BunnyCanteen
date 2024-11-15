System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Sprite, ProgressBar, oops, UIID, GameEvent, TonGameMgr, AcceleratedBuffMgr, TableAccelerate, TonTimerMgr, Button, Animation, PaymentMgr, UtilMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _crd, ccclass, property, AcceleratedBuffMain;

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

  function _reportPossibleCrUseOfAcceleratedBuffMgr(extras) {
    _reporterNs.report("AcceleratedBuffMgr", "./AcceleratedBuffManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableAccelerate(extras) {
    _reporterNs.report("TableAccelerate", "../../framework/common/table/TableAccelerate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonTimerMgr(extras) {
    _reporterNs.report("TonTimerMgr", "../manager/TonTimerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPaymentMgr(extras) {
    _reporterNs.report("PaymentMgr", "../payment/PaymentManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      ProgressBar = _cc.ProgressBar;
      Button = _cc.Button;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      UIID = _unresolved_3.UIID;
    }, function (_unresolved_4) {
      GameEvent = _unresolved_4.GameEvent;
    }, function (_unresolved_5) {
      TonGameMgr = _unresolved_5.TonGameMgr;
    }, function (_unresolved_6) {
      AcceleratedBuffMgr = _unresolved_6.AcceleratedBuffMgr;
    }, function (_unresolved_7) {
      TableAccelerate = _unresolved_7.TableAccelerate;
    }, function (_unresolved_8) {
      TonTimerMgr = _unresolved_8.TonTimerMgr;
    }, function (_unresolved_9) {
      PaymentMgr = _unresolved_9.PaymentMgr;
    }, function (_unresolved_10) {
      UtilMgr = _unresolved_10.UtilMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f336es7wflP8pZjRF0IYiIR", "AcceleratedBuffMain", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'Sprite', 'Toggle', 'ProgressBar']);

      __checkObsolete__(['Button']);

      __checkObsolete__(['Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AcceleratedBuffMain", AcceleratedBuffMain = (_dec = ccclass('AcceleratedBuffMain'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Sprite), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(ProgressBar), _dec9 = property(Button), _dec10 = property(Button), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Label), _dec(_class = (_class2 = class AcceleratedBuffMain extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "TitleName", _descriptor, this);

          _initializerDefineProperty(this, "CarrotCoinNum", _descriptor2, this);

          _initializerDefineProperty(this, "AccelerateIcon", _descriptor3, this);

          _initializerDefineProperty(this, "CurGain", _descriptor4, this);

          // 当前收益
          _initializerDefineProperty(this, "CurGainRate", _descriptor5, this);

          // 当前加速倍率
          _initializerDefineProperty(this, "LastAccelerateTime", _descriptor6, this);

          // 当前加速buff剩余时间
          _initializerDefineProperty(this, "LastSlider", _descriptor7, this);

          // 当前加速buff剩余时间进度
          _initializerDefineProperty(this, "FreeButton", _descriptor8, this);

          _initializerDefineProperty(this, "ShareButton", _descriptor9, this);

          _initializerDefineProperty(this, "FreeTxt", _descriptor10, this);

          _initializerDefineProperty(this, "ShareTxt", _descriptor11, this);

          _initializerDefineProperty(this, "Showtxt1", _descriptor12, this);

          _initializerDefineProperty(this, "Showtxt2", _descriptor13, this);

          _initializerDefineProperty(this, "Showtxt3", _descriptor14, this);

          _initializerDefineProperty(this, "BuyNum", _descriptor15, this);

          this.tablerecord = new (_crd && TableAccelerate === void 0 ? (_reportPossibleCrUseOfTableAccelerate({
            error: Error()
          }), TableAccelerate) : TableAccelerate)();
          this.ticktime = 0;
          this.animCtrl = {};
        }

        update(deltaTime) {
          this.ticktime = this.ticktime + deltaTime;

          if (this.ticktime < 1) {
            return;
          }

          this.ticktime = 0;
          this.updateShowTimer();
        }

        onAdded(params) {
          this.init();
          this.addEvent();
          return true;
        }

        init() {
          this.TitleName.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_181");
          this.FreeTxt.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_182");
          this.ShareTxt.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_194");
          this.updateBaseData();
          this.RefreshBuffIcon();
          this.tablerecord.init(3);
          this.BuyNum.string = this.tablerecord.costnum.toString();
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
            }), GameEvent) : GameEvent).UpdateCarrotCoin:
              this.updateCarrotCoin();
              break;
          }
        }

        updateBaseData() {
          this.CarrotCoinNum.string = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CarrotCoin.toString();
          this.CurGain.string = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).GetRealCanTingGain().toString() + "/s";
          this.CurGainRate.string = "+" + ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).AcceAddtionGain_1 * 100).toString() + "%";
          this.updateShowTimer();
          this.refreshShowTxt();
        }

        updateCarrotCoin() {
          this.CarrotCoinNum.string = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CarrotCoin.toString();
        }

        updateShowTimer() {
          if ((_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).IsGetFreeBuff) {
            if ((_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
              error: Error()
            }), AcceleratedBuffMgr) : AcceleratedBuffMgr).GetFreeBuffTimeStamp > 0) {
              var date = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).timer.getServerDate();
              var lasttime = 24 * 60 * 60 - (date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds());
              this.Showtxt1.string = (_crd && TonTimerMgr === void 0 ? (_reportPossibleCrUseOfTonTimerMgr({
                error: Error()
              }), TonTimerMgr) : TonTimerMgr).TimeToString(lasttime);

              if (lasttime <= 0) {
                (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
                  error: Error()
                }), AcceleratedBuffMgr) : AcceleratedBuffMgr).IsGetFreeBuff = false;
                (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
                  error: Error()
                }), AcceleratedBuffMgr) : AcceleratedBuffMgr).GetFreeBuffTimeStamp = 0;
                this.tablerecord.init(1);
                this.Showtxt1.string = (this.tablerecord.time / 60).toString() + "min";
                this.FreeButton.interactable = true;
                this.FreeButton.getComponent(Sprite).grayscale = false;
              }
            }
          }

          if ((_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).IsGetShareBuff) {
            if ((_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
              error: Error()
            }), AcceleratedBuffMgr) : AcceleratedBuffMgr).GetShareBuffTimeStamp > 0) {
              var _date = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).timer.getServerDate();

              var _lasttime = 24 * 60 * 60 - (_date.getHours() * 60 * 60 + _date.getMinutes() * 60 + _date.getSeconds());

              this.Showtxt2.string = (_crd && TonTimerMgr === void 0 ? (_reportPossibleCrUseOfTonTimerMgr({
                error: Error()
              }), TonTimerMgr) : TonTimerMgr).TimeToString(_lasttime);

              if (_lasttime <= 0) {
                (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
                  error: Error()
                }), AcceleratedBuffMgr) : AcceleratedBuffMgr).IsGetShareBuff = false;
                (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
                  error: Error()
                }), AcceleratedBuffMgr) : AcceleratedBuffMgr).GetShareBuffTimeStamp = 0;
                this.tablerecord.init(2);
                this.Showtxt2.string = (this.tablerecord.time / 60).toString() + "min";
                this.ShareButton.interactable = true;
                this.ShareButton.getComponent(Sprite).grayscale = false;
              }
            }
          }

          var acceleratetime = (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).AccelerateTime;

          if (acceleratetime > 0) {
            this.LastAccelerateTime.node.active = true;
            this.LastAccelerateTime.string = (_crd && TonTimerMgr === void 0 ? (_reportPossibleCrUseOfTonTimerMgr({
              error: Error()
            }), TonTimerMgr) : TonTimerMgr).TimeToString(acceleratetime);

            if (acceleratetime < 30 * 60) {
              this.LastSlider.progress = 2 / 100;
            } else {
              this.LastSlider.progress = acceleratetime / (24 * 60 * 60);
            }
          } else {
            this.LastAccelerateTime.node.active = false;
            this.LastSlider.progress = 0;
          }
        }

        pad(num) {
          return num < 10 ? '0' + num : num.toString();
        }

        refreshShowTxt() {
          if ((_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).IsGetFreeBuff) {
            this.FreeButton.getComponent(Sprite).grayscale = true;
            this.FreeButton.interactable = false;
          } else {
            this.FreeButton.getComponent(Sprite).grayscale = false;
            this.FreeButton.interactable = true;
            this.tablerecord.init(1);
            this.Showtxt1.string = (this.tablerecord.time / 60).toString() + "min";
          }

          if ((_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).IsGetShareBuff) {
            this.ShareButton.getComponent(Sprite).grayscale = true;
            this.ShareButton.interactable = false;
          } else {
            this.ShareButton.getComponent(Sprite).grayscale = false;
            this.ShareButton.interactable = true;
            this.tablerecord.init(2);
            this.Showtxt2.string = (this.tablerecord.time / 60).toString() + "min";
          }

          this.tablerecord.init(3);
          this.Showtxt3.string = (this.tablerecord.time / 60).toString() + "min";
        }

        RefreshBuffIcon() {
          if ((_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).isAccelerating()) {
            this.animCtrl = this.AccelerateIcon.getComponent(Animation);

            if (!this.animCtrl || !this.animCtrl.defaultClip || !this.animCtrl.getState(this.animCtrl.defaultClip.name) || !this.animCtrl.getState(this.animCtrl.defaultClip.name).isPlaying) {
              (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                error: Error()
              }), UtilMgr) : UtilMgr).addNodeAnimation("animation/jiasu", this.AccelerateIcon.node, true, true);
            }
          } else {
            var animCtrl = this.AccelerateIcon.getComponent(Animation);

            if (animCtrl) {
              animCtrl.stop();
            }
          }
        }

        onCloseBtnClick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(19);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.remove((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).AcceleratedBuffBuyMain);
        }

        onAddBtnClick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          (_crd && PaymentMgr === void 0 ? (_reportPossibleCrUseOfPaymentMgr({
            error: Error()
          }), PaymentMgr) : PaymentMgr).OpenPaymentUI();
        } // 点击免费领取按钮


        onFreeBtnClick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);

          if ((_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).IsGetFreeBuff) {
            return;
          }

          (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).SendBuyBuff(1);
        } // 点击分享按钮


        onShareBtnClick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);

          if ((_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).IsGetShareBuff) {
            return;
          }

          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).share();
          (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).SendBuyBuff(2);
        } // 点击萝卜币购买按钮


        onBuyBtnClick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          this.tablerecord.init(3);

          if (this.tablerecord.costnum > (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CarrotCoin) {
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.toast("message_13", true); // 萝卜币不足！

            return;
          }

          (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).SendBuyBuff(3);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "TitleName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "CarrotCoinNum", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "AccelerateIcon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "CurGain", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "CurGainRate", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "LastAccelerateTime", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "LastSlider", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "FreeButton", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "ShareButton", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "FreeTxt", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "ShareTxt", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Showtxt1", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Showtxt2", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Showtxt3", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "BuyNum", [_dec16], {
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
//# sourceMappingURL=8b6ff736f4dd442a87d9efce85be7d27000b578e.js.map