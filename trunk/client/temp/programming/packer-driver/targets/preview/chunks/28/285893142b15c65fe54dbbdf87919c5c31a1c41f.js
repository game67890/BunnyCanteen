System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, oops, UIID, UtilMgr, TonGameMgr, GameEvent, VirtualGridList, TablePay, ProtocolMgr, PaymentMgr, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, PaymentComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
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

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../framework/common/config/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVirtualGridList(extras) {
    _reporterNs.report("VirtualGridList", "../../../resources/libs/virtual_grid_list/virtual_grid_list", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTablePay(extras) {
    _reporterNs.report("TablePay", "../../framework/common/table/TablePay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocolMgr(extras) {
    _reporterNs.report("ProtocolMgr", "../manager/ProtocolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpReturn(extras) {
    _reporterNs.report("HttpReturn", "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPaymentMgr(extras) {
    _reporterNs.report("PaymentMgr", "./PaymentManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataItem(extras) {
    _reporterNs.report("DataItem", "./PaymentManager", _context.meta, extras);
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
      UIID = _unresolved_3.UIID;
    }, function (_unresolved_4) {
      UtilMgr = _unresolved_4.UtilMgr;
    }, function (_unresolved_5) {
      TonGameMgr = _unresolved_5.TonGameMgr;
    }, function (_unresolved_6) {
      GameEvent = _unresolved_6.GameEvent;
    }, function (_unresolved_7) {
      VirtualGridList = _unresolved_7.VirtualGridList;
    }, function (_unresolved_8) {
      TablePay = _unresolved_8.TablePay;
    }, function (_unresolved_9) {
      ProtocolMgr = _unresolved_9.ProtocolMgr;
    }, function (_unresolved_10) {
      PaymentMgr = _unresolved_10.PaymentMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67c54htZABAOa+pBLvjxEYa", "PaymentComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'Label', 'ScrollView', 'instantiate', 'UITransform', 'Prefab', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PaymentComponent", PaymentComponent = (_dec = ccclass('PaymentComponent'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(_crd && VirtualGridList === void 0 ? (_reportPossibleCrUseOfVirtualGridList({
        error: Error()
      }), VirtualGridList) : VirtualGridList), _dec(_class = (_class2 = class PaymentComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "titleLabel", _descriptor, this);

          _initializerDefineProperty(this, "yueLabel", _descriptor2, this);

          _initializerDefineProperty(this, "carrotCoinLabel", _descriptor3, this);

          _initializerDefineProperty(this, "gridList", _descriptor4, this);

          this._dataList = [];
          this._tsPay = new (_crd && TablePay === void 0 ? (_reportPossibleCrUseOfTablePay({
            error: Error()
          }), TablePay) : TablePay)();
        }

        onAdded(params) {
          this.titleLabel.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_105");
          this.yueLabel.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_165");
          this.carrotCoinLabel.string = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CarrotCoin.toString();

          if ((_crd && PaymentMgr === void 0 ? (_reportPossibleCrUseOfPaymentMgr({
            error: Error()
          }), PaymentMgr) : PaymentMgr).shopItemList) {
            this.showShopList();
            (_crd && PaymentMgr === void 0 ? (_reportPossibleCrUseOfPaymentMgr({
              error: Error()
            }), PaymentMgr) : PaymentMgr).GetPaymentData();
          } else {
            (_crd && PaymentMgr === void 0 ? (_reportPossibleCrUseOfPaymentMgr({
              error: Error()
            }), PaymentMgr) : PaymentMgr).GetPaymentData(() => {
              this.showShopList();
            });
          }

          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateCarrotCoin, this.onUpdateData, this);
          return true;
        }

        onDestroy() {
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
            }), GameEvent) : GameEvent).UpdateCarrotCoin:
              this.updateCarrotCoin();
              break;
          }
        }

        updateCarrotCoin() {
          this.carrotCoinLabel.string = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CarrotCoin.toString();
        }

        showShopList() {
          this._dataList = [];

          for (var _key in (_crd && PaymentMgr === void 0 ? (_reportPossibleCrUseOfPaymentMgr({
            error: Error()
          }), PaymentMgr) : PaymentMgr).shopItemList) {
            if ((_crd && PaymentMgr === void 0 ? (_reportPossibleCrUseOfPaymentMgr({
              error: Error()
            }), PaymentMgr) : PaymentMgr).shopItemList.hasOwnProperty(_key)) {
              var value = (_crd && PaymentMgr === void 0 ? (_reportPossibleCrUseOfPaymentMgr({
                error: Error()
              }), PaymentMgr) : PaymentMgr).shopItemList[_key];

              if (value.left > 0) {
                this._tsPay.init(value.ID);

                var item = {
                  price: value.price,
                  carrotcoin: value.carrotcoin,
                  gift: value.gift,
                  strength: value.strength,
                  paytype: value.paytype,
                  left: value.left,
                  imageUrl: value.imageUrl,
                  ID: value.ID,
                  name: this._tsPay.name,
                  discountdesc1: this._tsPay.discountdesc1,
                  discountdesc2: this._tsPay.discountdesc2
                };

                this._dataList.push(item);
              }
            }
          }

          this.initGridList();
        }

        initGridList() {
          /*  paddingTop: 列表距离上边缘距离 默认为0
          paddingBottom: 列表距离下边缘距离 默认为0
          spacingX: 列间距 默认为3
          spacingY: 行间距 默认为3
          columnNum: 列数 默认为0，自动适配容器宽度
          useVirtualLayout: 是否启用虚拟列表 默认为true
          emptyTip: 没有数据显示提示
          cacheImage: 是否缓存列表中加载过的图片，控件回收后，图片缓存将被全部释放。
          */
          if (this.gridList) {
            this.gridList.clearList();
            this.gridList.initGridList({
              paddingTop: 10,
              paddingBottom: 10,
              spacingX: 10,
              spacingY: 5,
              columnNum: 2,
              useVirtualLayout: true,
              emptyTip: '',
              cacheImage: true
            });
            this.gridList.registerSelectOneItemEventHandler(this._onSelectOneItem, this);
            this.gridList.appendItemsToDisplayList(this._dataList);
          }
        }

        _onSelectOneItem(data) {
          console.log('_onSelectOneItem');

          var completeBuy = ret => {
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.waitClose();

            if (ret.isSucc && ret.res.result) {
              //下单成功
              if (ret.res.Type == "Need_To_Pay") {
                var paramas = {};
                paramas.url = ret.res.webUrl;
                (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                  error: Error()
                }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                  error: Error()
                }), UIID) : UIID).PaymentWebview, paramas); //TelegramWebApp.Instance.openTelegramLink(ret.res.webUrl);

                /*
                if (!TelegramWebApp.Instance.openLink(ret.res.webUrl, { "try_instant_view": true }))
                {
                    let paramas: any = {};
                    paramas.url = ret.res.webUrl;
                    oops.gui.open(UIID.PaymentWebview, paramas);
                }
                    */
              } else if (ret.res.Type == "Charge_Success") {
                if ((_crd && PaymentMgr === void 0 ? (_reportPossibleCrUseOfPaymentMgr({
                  error: Error()
                }), PaymentMgr) : PaymentMgr).modifyShopItem(ret.res.GoodID, ret.res.LeftChange)) {
                  this.refreshGridList();
                }

                var _paramas = {};
                _paramas.item = (_crd && PaymentMgr === void 0 ? (_reportPossibleCrUseOfPaymentMgr({
                  error: Error()
                }), PaymentMgr) : PaymentMgr).getShopItem(ret.res.GoodID);
                (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                  error: Error()
                }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                  error: Error()
                }), UIID) : UIID).PaymentTips, _paramas);
              }
            }
          };

          var dataBuy = {};
          dataBuy.userID = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).UserId;
          dataBuy.goodID = data.ID;
          var param = JSON.stringify(dataBuy);
          (_crd && ProtocolMgr === void 0 ? (_reportPossibleCrUseOfProtocolMgr({
            error: Error()
          }), ProtocolMgr) : ProtocolMgr).sendChargeBuy(completeBuy, param);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.waitOpen();
        }

        refreshGridList() {
          this.gridList.clearList();
          this.showShopList();
        }

        onClose() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(19);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.remove((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).PaymentUI);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "titleLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "yueLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "carrotCoinLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gridList", [_dec5], {
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
//# sourceMappingURL=285893142b15c65fe54dbbdf87919c5c31a1c41f.js.map