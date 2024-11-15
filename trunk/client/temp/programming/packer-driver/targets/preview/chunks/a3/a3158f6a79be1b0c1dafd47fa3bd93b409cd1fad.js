System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Sprite, Node, IVirtualGridListItem, UtilMgr, TablePay, oops, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _crd, ccclass, property, PaymentListItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIVirtualGridListItem(extras) {
    _reporterNs.report("IVirtualGridListItem", "../../../resources/libs/virtual_grid_list/interface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTablePay(extras) {
    _reporterNs.report("TablePay", "../../framework/common/table/TablePay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      IVirtualGridListItem = _unresolved_2.IVirtualGridListItem;
    }, function (_unresolved_3) {
      UtilMgr = _unresolved_3.UtilMgr;
    }, function (_unresolved_4) {
      TablePay = _unresolved_4.TablePay;
    }, function (_unresolved_5) {
      oops = _unresolved_5.oops;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0d6942sx39Ht4/XwOXdoDwm", "PaymentListItem", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Sprite', 'math', 'SpriteFrame', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PaymentListItem", PaymentListItem = (_dec = ccclass('PaymentListItem'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Sprite), _dec10 = property(Label), _dec11 = property(Node), _dec12 = property(Sprite), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(Sprite), _dec(_class = (_class2 = class PaymentListItem extends (_crd && IVirtualGridListItem === void 0 ? (_reportPossibleCrUseOfIVirtualGridListItem({
        error: Error()
      }), IVirtualGridListItem) : IVirtualGridListItem) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "background", _descriptor, this);

          _initializerDefineProperty(this, "imgItem", _descriptor2, this);

          _initializerDefineProperty(this, "zhekouDi", _descriptor3, this);

          _initializerDefineProperty(this, "reward1", _descriptor4, this);

          _initializerDefineProperty(this, "rewardIcon1", _descriptor5, this);

          _initializerDefineProperty(this, "rewardText1", _descriptor6, this);

          _initializerDefineProperty(this, "reward2", _descriptor7, this);

          _initializerDefineProperty(this, "rewardIcon2", _descriptor8, this);

          _initializerDefineProperty(this, "rewardText2", _descriptor9, this);

          _initializerDefineProperty(this, "reward3", _descriptor10, this);

          _initializerDefineProperty(this, "rewardIcon3", _descriptor11, this);

          _initializerDefineProperty(this, "rewardText3", _descriptor12, this);

          _initializerDefineProperty(this, "priceLabel", _descriptor13, this);

          _initializerDefineProperty(this, "zhekou1Label", _descriptor14, this);

          _initializerDefineProperty(this, "zhekou2Label", _descriptor15, this);

          _initializerDefineProperty(this, "redPoint", _descriptor16, this);

          this._tsPay = new (_crd && TablePay === void 0 ? (_reportPossibleCrUseOfTablePay({
            error: Error()
          }), TablePay) : TablePay)();
        }

        /**
         * 点击触发选择事件
         */
        onSelect() {
          console.log('select _' + this.itemIndex);
        }

        onUnselect() {
          console.log('unselect _' + this.itemIndex);
        }

        onDataChanged() {
          var data = this.data;
          this.redPoint.node.active = false; //支付类型

          if (data.paytype == 0) {
            //免费
            //this.zhekouDi.active = false;
            this.redPoint.node.active = true;
          } else if (data.paytype == 1) {//AEON 支付
            //this.zhekouDi.active = true;
          } else if (data.paytype == 2) {//Telegram 支付
            //this.zhekouDi.active = true;
          } //库存数量


          if (data.left > 0) {
            this.background.grayscale = false;
          } else {
            //置灰
            this.background.grayscale = true;
          }

          this.reward1.active = false;
          this.reward2.active = false;
          this.reward3.active = false;
          this.priceLabel.string = ""; //萝卜币

          if (data.carrotcoin > 0 && data.gift > 0) {
            this.reward1.active = true;
            this.reward2.active = true;
            this.reward3.active = false;
            this.rewardText1.string = data.carrotcoin;
            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).SetImage(this.rewardIcon1, "textures/UI/main/main;luobobi");
            this.rewardText2.string = data.gift;
            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).SetImage(this.rewardIcon2, "textures/UI/zhifu/zhifu;lihe");
          } else if (data.carrotcoin > 0) {
            this.reward1.active = false;
            this.reward2.active = false;
            this.reward3.active = true;
            this.rewardText3.string = data.carrotcoin;
            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).SetImage(this.rewardIcon3, "textures/UI/main/main;luobobi");
          } else if (data.gift > 0) {
            this.reward1.active = false;
            this.reward2.active = false;
            this.reward3.active = true;
            this.rewardText3.string = data.gift;
            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).SetImage(this.rewardIcon3, "textures/UI/zhifu/zhifu;lihe");
          }

          if (data.price > 0) {
            this.priceLabel.string = "$" + data.price / 100;
          } else {
            this.priceLabel.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).language.getLangByID(data.name);
          }

          if (data.discountdesc1) {
            this.zhekou1Label.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).language.getLangByID(data.discountdesc1);
          }

          if (data.discountdesc2) {
            this.zhekou2Label.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).language.getLangByID(data.discountdesc2);
          }

          this._tsPay.init(data.ID);

          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).SetImage(this.imgItem, this._tsPay.picture);
        }

        onDestroy() {
          super.onDestroy();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "background", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "imgItem", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "zhekouDi", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "reward1", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rewardIcon1", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "rewardText1", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "reward2", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "rewardIcon2", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "rewardText2", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "reward3", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "rewardIcon3", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "rewardText3", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "priceLabel", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "zhekou1Label", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "zhekou2Label", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "redPoint", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a3158f6a79be1b0c1dafd47fa3bd93b409cd1fad.js.map