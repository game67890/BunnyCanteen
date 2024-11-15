System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Sprite, Button, Widget, IVirtualGridListItem, TableIngredients, UtilMgr, FeedMgr, BoardMgr, oops, TonGameMgr, PaymentMgr, GameEvent, UIID, HeChengComponent, TableOtherParameter, FeedMain, TableRestaurantlevel, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, FeedItemCell;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIVirtualGridListItem(extras) {
    _reporterNs.report("IVirtualGridListItem", "../../../resources/libs/virtual_grid_list/interface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableIngredients(extras) {
    _reporterNs.report("TableIngredients", "../../framework/common/table/TableIngredients", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFeedMgr(extras) {
    _reporterNs.report("FeedMgr", "./FeedManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoardMgr(extras) {
    _reporterNs.report("BoardMgr", "../manager/BoardManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonGameMgr(extras) {
    _reporterNs.report("TonGameMgr", "../manager/TonGameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPaymentMgr(extras) {
    _reporterNs.report("PaymentMgr", "../payment/PaymentManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../framework/common/config/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../framework/common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeChengComponent(extras) {
    _reporterNs.report("HeChengComponent", "../hecheng/HeChengComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableOtherParameter(extras) {
    _reporterNs.report("TableOtherParameter", "../../framework/common/table/TableOtherParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFeedMain(extras) {
    _reporterNs.report("FeedMain", "./FeedMain", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableRestaurantlevel(extras) {
    _reporterNs.report("TableRestaurantlevel", "../../framework/common/table/TableRestaurantlevel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      Button = _cc.Button;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      IVirtualGridListItem = _unresolved_2.IVirtualGridListItem;
    }, function (_unresolved_3) {
      TableIngredients = _unresolved_3.TableIngredients;
    }, function (_unresolved_4) {
      UtilMgr = _unresolved_4.UtilMgr;
    }, function (_unresolved_5) {
      FeedMgr = _unresolved_5.FeedMgr;
    }, function (_unresolved_6) {
      BoardMgr = _unresolved_6.BoardMgr;
    }, function (_unresolved_7) {
      oops = _unresolved_7.oops;
    }, function (_unresolved_8) {
      TonGameMgr = _unresolved_8.TonGameMgr;
    }, function (_unresolved_9) {
      PaymentMgr = _unresolved_9.PaymentMgr;
    }, function (_unresolved_10) {
      GameEvent = _unresolved_10.GameEvent;
    }, function (_unresolved_11) {
      UIID = _unresolved_11.UIID;
    }, function (_unresolved_12) {
      HeChengComponent = _unresolved_12.HeChengComponent;
    }, function (_unresolved_13) {
      TableOtherParameter = _unresolved_13.TableOtherParameter;
    }, function (_unresolved_14) {
      FeedMain = _unresolved_14.FeedMain;
    }, function (_unresolved_15) {
      TableRestaurantlevel = _unresolved_15.TableRestaurantlevel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0a061yv0FZIEYAN/m3lMG9x", "FeedItemCell", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Sprite', 'Button', 'Widget']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FeedItemCell", FeedItemCell = (_dec = ccclass('FeedItemCell'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Widget), _dec7 = property(Sprite), _dec8 = property(Sprite), _dec9 = property(Label), _dec10 = property(Button), _dec11 = property(Button), _dec12 = property(Label), _dec13 = property(Sprite), _dec14 = property(Sprite), _dec(_class = (_class2 = class FeedItemCell extends (_crd && IVirtualGridListItem === void 0 ? (_reportPossibleCrUseOfIVirtualGridListItem({
        error: Error()
      }), IVirtualGridListItem) : IVirtualGridListItem) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "DishIcon", _descriptor, this);

          _initializerDefineProperty(this, "DishLevel", _descriptor2, this);

          _initializerDefineProperty(this, "ShowTxt", _descriptor3, this);

          _initializerDefineProperty(this, "EffectTxt", _descriptor4, this);

          _initializerDefineProperty(this, "LockWnd", _descriptor5, this);

          _initializerDefineProperty(this, "CostCarrotIcon", _descriptor6, this);

          _initializerDefineProperty(this, "CostRabbitIcon", _descriptor7, this);

          _initializerDefineProperty(this, "PriceTxt", _descriptor8, this);

          _initializerDefineProperty(this, "BuyBtn", _descriptor9, this);

          _initializerDefineProperty(this, "FreeBtn", _descriptor10, this);

          _initializerDefineProperty(this, "FreeBtnTxt", _descriptor11, this);

          _initializerDefineProperty(this, "FreeEffect", _descriptor12, this);

          _initializerDefineProperty(this, "TujianIcon", _descriptor13, this);

          this.tablerecord = new (_crd && TableIngredients === void 0 ? (_reportPossibleCrUseOfTableIngredients({
            error: Error()
          }), TableIngredients) : TableIngredients)();
          this.lockstate = true;
          this.costtype = 0;
          this.costnum = 0;
          this._tsRestaurantlevel = new (_crd && TableRestaurantlevel === void 0 ? (_reportPossibleCrUseOfTableRestaurantlevel({
            error: Error()
          }), TableRestaurantlevel) : TableRestaurantlevel)();
        }

        /** 点击触发选择事件 */
        onSelect() {
          this.updateSelectionStatus();
        }

        onUnselect() {
          this.updateSelectionStatus();
        }

        onDataChanged() {
          var data = this.data;
          this.tablerecord.init(data.configid);

          this._tsRestaurantlevel.init((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CanTingLevel);

          if (!this.tablerecord) {
            return;
          }

          this.FreeBtnTxt.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_182"); // 菜品造型图标

          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).SetImage(this.DishIcon, this.tablerecord.picture); // 菜品等级

          this.DishLevel.string = this.tablerecord.level.toString(); // 菜品收益

          this.ShowTxt.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_114");
          this.EffectTxt.string = "+" + this.tablerecord.getmoney.toString() + "/s";
          var maxlevel = 1;

          if ((_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
            error: Error()
          }), FeedMgr) : FeedMgr).HechengMaxLevel[this.tablerecord.type]) {
            maxlevel = (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
              error: Error()
            }), FeedMgr) : FeedMgr).HechengMaxLevel[this.tablerecord.type];
          } // 锁头图标


          this.lockstate = this.tablerecord.level > this._tsRestaurantlevel.foodlevel + 2;
          this.LockWnd.node.active = this.lockstate; // 大拇指图标

          this.TujianIcon.node.active = this.tablerecord.level == this._tsRestaurantlevel.foodlevel + 2; // 按钮显示

          this.BuyBtn.node.active = data.configid != (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
            error: Error()
          }), FeedMgr) : FeedMgr).FreeDishId && this.tablerecord.level <= this._tsRestaurantlevel.foodlevel + 2;
          this.FreeBtn.node.active = data.configid == (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
            error: Error()
          }), FeedMgr) : FeedMgr).FreeDishId;

          if (data.configid == (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
            error: Error()
          }), FeedMgr) : FeedMgr).FreeDishId) {
            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).addNodeAnimation("animation/anniuda", this.FreeEffect.node, true, true);
          } // 货币图标


          this.CostCarrotIcon.node.active = this.tablerecord.level == this._tsRestaurantlevel.foodlevel + 1 || this.tablerecord.level == this._tsRestaurantlevel.foodlevel + 2;
          this.CostRabbitIcon.node.active = this.tablerecord.level <= this._tsRestaurantlevel.foodlevel;

          if (this.tablerecord.level == this._tsRestaurantlevel.foodlevel + 1 || this.tablerecord.level == this._tsRestaurantlevel.foodlevel + 2) {
            this.costtype = 1; // 消耗萝卜币

            this.costnum = this.tablerecord.cost2;
          } else if (this.tablerecord.level <= this._tsRestaurantlevel.foodlevel) {
            this.costtype = 2; // 消耗兔子币

            this.costnum = this.tablerecord.cost1;
          } // 价格


          if ((_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
            error: Error()
          }), FeedMgr) : FeedMgr).ExtDishPrice[Number(this.data.configid)]) {
            this.costnum = Math.floor(this.costnum * (1 + (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
              error: Error()
            }), FeedMgr) : FeedMgr).ExtDishPrice[Number(this.data.configid)]));
          }

          if (this.costtype == 2) {
            this.PriceTxt.string = (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).formatNumber(BigInt(this.costnum));
          } else {
            this.PriceTxt.string = this.costnum.toString();
          }

          this.updateSelectionStatus();
        }

        updateSelectionStatus() {}

        onDestroy() {
          super.onDestroy();
        }

        onBuyBtnClick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);

          if (this.lockstate) {
            return;
          }

          if (!(_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
            error: Error()
          }), BoardMgr) : BoardMgr).isHasEmptyGrid()) {
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.toast("message_09", true); // 空位不足！

            return;
          }

          var tablerecord = new (_crd && TableIngredients === void 0 ? (_reportPossibleCrUseOfTableIngredients({
            error: Error()
          }), TableIngredients) : TableIngredients)();
          tablerecord.init(this.data.configid);

          if (this.costtype == 1) {
            if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).CarrotCoin < this.costnum) {
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).gui.toast("message_13", true); // 萝卜币不足！

              (_crd && PaymentMgr === void 0 ? (_reportPossibleCrUseOfPaymentMgr({
                error: Error()
              }), PaymentMgr) : PaymentMgr).OpenPaymentUI();
            } else {
              (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
                error: Error()
              }), FeedMgr) : FeedMgr).SendBuyDish(this.data.configid, this.costnum);
            }
          } else if (this.costtype == 2) {
            if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).TuZiCoin < this.costnum) {
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).gui.toast("message_10", true); // 兔子币不足！
            } else {
              if ((_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                error: Error()
              }), BoardMgr) : BoardMgr).addGrid(this.data.configid)) {
                (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).updateRabbitCoin((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).TuZiCoin - BigInt(this.costnum));
                (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                  error: Error()
                }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                  error: Error()
                }), GameEvent) : GameEvent).UpdateTuziCoin);
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

              (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
                error: Error()
              }), FeedMgr) : FeedMgr).UpdateExtDishPrice(Number(this.data.configid));
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
            }
          }
        }

        onFreeBtnClick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);

          if (this.lockstate) {
            return;
          }

          if (!(_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
            error: Error()
          }), BoardMgr) : BoardMgr).isHasEmptyGrid()) {
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.toast("message_09", true); // 空位不足！

            return;
          }

          if ((_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
            error: Error()
          }), BoardMgr) : BoardMgr).addGrid(this.data.configid)) {
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

          var tablereward = new (_crd && TableOtherParameter === void 0 ? (_reportPossibleCrUseOfTableOtherParameter({
            error: Error()
          }), TableOtherParameter) : TableOtherParameter)();
          tablereward.init(3);
          (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
            error: Error()
          }), FeedMgr) : FeedMgr).NextFreeDishTime = Number(tablereward.parameter);
          (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
            error: Error()
          }), FeedMgr) : FeedMgr).FreeDishId = 0;
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
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "DishIcon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "DishLevel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ShowTxt", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "EffectTxt", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "LockWnd", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "CostCarrotIcon", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "CostRabbitIcon", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "PriceTxt", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "BuyBtn", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "FreeBtn", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "FreeBtnTxt", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "FreeEffect", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "TujianIcon", [_dec14], {
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
//# sourceMappingURL=edc97064eca8fad2b3ca30227e766ebbc87800ce.js.map