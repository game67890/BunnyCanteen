System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, _decorator, Label, Sprite, Button, Widget, IVirtualGridListItem, oops, TableShop, TonGameMgr, ShopMgr, GameEvent, UIID, HeChengComponent, UtilMgr, PaymentMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, ShopItemCell;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIVirtualGridListItem(extras) {
    _reporterNs.report("IVirtualGridListItem", "../../../resources/libs/virtual_grid_list/interface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableShop(extras) {
    _reporterNs.report("TableShop", "../../framework/common/table/TableShop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonGameMgr(extras) {
    _reporterNs.report("TonGameMgr", "../manager/TonGameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopMgr(extras) {
    _reporterNs.report("ShopMgr", "./ShopManager", _context.meta, extras);
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

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPaymentMgr(extras) {
    _reporterNs.report("PaymentMgr", "../payment/PaymentManager", _context.meta, extras);
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
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      Button = _cc.Button;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      IVirtualGridListItem = _unresolved_2.IVirtualGridListItem;
    }, function (_unresolved_3) {
      oops = _unresolved_3.oops;
    }, function (_unresolved_4) {
      TableShop = _unresolved_4.TableShop;
    }, function (_unresolved_5) {
      TonGameMgr = _unresolved_5.TonGameMgr;
    }, function (_unresolved_6) {
      ShopMgr = _unresolved_6.ShopMgr;
    }, function (_unresolved_7) {
      GameEvent = _unresolved_7.GameEvent;
    }, function (_unresolved_8) {
      UIID = _unresolved_8.UIID;
    }, function (_unresolved_9) {
      HeChengComponent = _unresolved_9.HeChengComponent;
    }, function (_unresolved_10) {
      UtilMgr = _unresolved_10.UtilMgr;
    }, function (_unresolved_11) {
      PaymentMgr = _unresolved_11.PaymentMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "457366HiTROrZPxoil9x6kG", "ShopItemCell", undefined);

      __checkObsolete__(['Animation', '_decorator', 'Label', 'Sprite', 'Button', 'Widget']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ShopItemCell", ShopItemCell = (_dec = ccclass('ShopItemCell'), _dec2 = property(Label), _dec3 = property(Sprite), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Widget), _dec7 = property(Sprite), _dec8 = property(Sprite), _dec9 = property(Label), _dec10 = property(Sprite), _dec11 = property(Button), _dec12 = property(Button), _dec13 = property(Label), _dec14 = property(Label), _dec(_class = (_class2 = class ShopItemCell extends (_crd && IVirtualGridListItem === void 0 ? (_reportPossibleCrUseOfIVirtualGridListItem({
        error: Error()
      }), IVirtualGridListItem) : IVirtualGridListItem) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "RabbitName", _descriptor, this);

          _initializerDefineProperty(this, "RabbitIcon", _descriptor2, this);

          _initializerDefineProperty(this, "ShowTxt", _descriptor3, this);

          _initializerDefineProperty(this, "AdditionEffectTxt", _descriptor4, this);

          _initializerDefineProperty(this, "LockWnd", _descriptor5, this);

          _initializerDefineProperty(this, "CostCarrotIcon", _descriptor6, this);

          _initializerDefineProperty(this, "CostRabbitIcon", _descriptor7, this);

          _initializerDefineProperty(this, "PriceTxt", _descriptor8, this);

          _initializerDefineProperty(this, "TuijianIcon", _descriptor9, this);

          _initializerDefineProperty(this, "BuyBtn", _descriptor10, this);

          _initializerDefineProperty(this, "ChangeBtn", _descriptor11, this);

          _initializerDefineProperty(this, "ChangeBtnTxt", _descriptor12, this);

          _initializerDefineProperty(this, "InUseTxt", _descriptor13, this);

          this.tablerecord = new (_crd && TableShop === void 0 ? (_reportPossibleCrUseOfTableShop({
            error: Error()
          }), TableShop) : TableShop)();
          this.state = true;
          this.animCtrl = {};
          this.animation = null;
        }

        /** 点击触发选择事件 */
        onSelect() {
          console.log('select _' + this.itemIndex);
          this.updateSelectionStatus();
        }

        onUnselect() {
          console.log('unselect _' + this.itemIndex);
          this.updateSelectionStatus();
        }

        onDataChanged() {
          const data = this.data;
          this.tablerecord.init(data.configid);

          if (!this.tablerecord) {
            return;
          } // 兔子名称


          this.RabbitName.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID(this.tablerecord.name); // 兔子造型图标

          this.animCtrl = this.RabbitIcon.getComponent(Animation);

          if (this.animation == null) {
            this.animation = (_crd && ShopMgr === void 0 ? (_reportPossibleCrUseOfShopMgr({
              error: Error()
            }), ShopMgr) : ShopMgr).GetRandomAnimation(data.configid);
          }

          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).addNodeAnimation(this.animation, this.RabbitIcon.node, true, true); // 加成收益

          this.ShowTxt.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_197");
          this.AdditionEffectTxt.string = this.tablerecord.effect.toString() + "%"; // 锁头图标

          if (this.tablerecord.unlocktype == 1) {
            this.state = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).CanTingLevel < this.tablerecord.unlockpara;
          } else if (this.tablerecord.unlocktype == 2) {
            this.state = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).TuZiCoin < this.tablerecord.unlockpara;
          } else if (this.tablerecord.unlocktype == 3) {
            this.state = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).CarrotCoin < this.tablerecord.unlockpara;
          }

          this.LockWnd.node.active = this.state; // 按钮显示

          this.BuyBtn.node.active = (_crd && ShopMgr === void 0 ? (_reportPossibleCrUseOfShopMgr({
            error: Error()
          }), ShopMgr) : ShopMgr).IsHaveRabbitId(data.configid) == false;
          this.ChangeBtn.node.active = (_crd && ShopMgr === void 0 ? (_reportPossibleCrUseOfShopMgr({
            error: Error()
          }), ShopMgr) : ShopMgr).IsHaveRabbitId(data.configid) && (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CurRabbitId != data.configid;
          this.ChangeBtnTxt.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_195");
          this.InUseTxt.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_196");
          this.InUseTxt.node.active = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CurRabbitId == data.configid; // 货币图标

          this.CostCarrotIcon.node.active = this.tablerecord.paytype == 2;
          this.CostRabbitIcon.node.active = this.tablerecord.paytype == 1; // 价格

          if (this.tablerecord.paytype == 1) {
            this.PriceTxt.string = (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).formatNumber(BigInt(this.tablerecord.price));
          } else {
            this.PriceTxt.string = this.tablerecord.price.toString();
          } // 推荐按钮显示


          this.TuijianIcon.node.active = (_crd && ShopMgr === void 0 ? (_reportPossibleCrUseOfShopMgr({
            error: Error()
          }), ShopMgr) : ShopMgr).IsHaveRabbitId(data.configid) == false && this.state == false;
          this.updateSelectionStatus();
        }

        updateSelectionStatus() {}

        onDestroy() {
          super.onDestroy();
        }

        onBuyBtnClick() {
          if (this.state == true) {
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.toast(this.tablerecord.message, true);
            return;
          }

          if (this.tablerecord.paytype == 1) {
            // 兔子币支付
            if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).TuZiCoin < this.tablerecord.price) {
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).gui.toast("message_10", true);
              return;
            }

            (_crd && ShopMgr === void 0 ? (_reportPossibleCrUseOfShopMgr({
              error: Error()
            }), ShopMgr) : ShopMgr).SendBuyRabbit(this.data.configid);
          } else {
            // 萝卜币支付 
            if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).CarrotCoin < this.tablerecord.price) {
              (_crd && PaymentMgr === void 0 ? (_reportPossibleCrUseOfPaymentMgr({
                error: Error()
              }), PaymentMgr) : PaymentMgr).OpenPaymentUI();
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).gui.toast("message_07", true);
              return;
            }

            (_crd && ShopMgr === void 0 ? (_reportPossibleCrUseOfShopMgr({
              error: Error()
            }), ShopMgr) : ShopMgr).SendBuyRabbit(this.data.configid);
          }
        }

        onChangeBtnClick() {
          if (this.state == true) {
            return;
          }

          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.toast("message_29", true);
          (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CurRabbitId = this.data.configid;
          (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CurRabbitAnimation = (_crd && ShopMgr === void 0 ? (_reportPossibleCrUseOfShopMgr({
            error: Error()
          }), ShopMgr) : ShopMgr).GetRandomAnimation(this.data.configid);
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

          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).OnShopListChange);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "RabbitName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "RabbitIcon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ShowTxt", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "AdditionEffectTxt", [_dec5], {
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
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "TuijianIcon", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "BuyBtn", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "ChangeBtn", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "ChangeBtnTxt", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "InUseTxt", [_dec14], {
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
//# sourceMappingURL=ad0fb5e28cddad87991a972fa78d98ab06d4e069.js.map