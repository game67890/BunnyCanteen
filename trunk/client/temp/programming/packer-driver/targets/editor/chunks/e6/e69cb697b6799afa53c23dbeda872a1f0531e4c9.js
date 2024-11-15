System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, oops, UIID, ProtocolMgr, TonGameMgr, PaymentComponent, UtilMgr, DataItem, PaymentManager, _crd, PaymentMgr;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../framework/common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocolMgr(extras) {
    _reporterNs.report("ProtocolMgr", "../manager/ProtocolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpReturn(extras) {
    _reporterNs.report("HttpReturn", "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonGameMgr(extras) {
    _reporterNs.report("TonGameMgr", "../manager/TonGameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPaymentComponent(extras) {
    _reporterNs.report("PaymentComponent", "./PaymentComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  _export({
    DataItem: void 0,
    PaymentManager: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      UIID = _unresolved_3.UIID;
    }, function (_unresolved_4) {
      ProtocolMgr = _unresolved_4.ProtocolMgr;
    }, function (_unresolved_5) {
      TonGameMgr = _unresolved_5.TonGameMgr;
    }, function (_unresolved_6) {
      PaymentComponent = _unresolved_6.PaymentComponent;
    }, function (_unresolved_7) {
      UtilMgr = _unresolved_7.UtilMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fc22aejIERKf5+dGUBnGxSv", "PaymentManager", undefined);

      _export("DataItem", DataItem = class DataItem {
        constructor() {
          //单价
          this.price = 0;
          //萝卜币
          this.carrotcoin = 0;
          //礼盒
          this.gift = 0;
          //体力
          this.strength = 0;
          //支付类型
          this.paytype = 0;
          //库存数量
          this.left = 0;
          this.imageUrl = void 0;
          //商品ID
          this.ID = 0;
          //商品名称
          this.name = void 0;
          //折扣描述1
          this.discountdesc1 = void 0;
          //折扣描述2
          this.discountdesc2 = void 0;
        }

      });

      _export("PaymentManager", PaymentManager = class PaymentManager {
        constructor() {
          this.shopItemList = null;
        }

        //拉起支付界面
        OpenPaymentUI() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).PaymentUI);
        }

        GetPaymentData(callback) {
          var completeShop = ret => {
            if (ret.isSucc) {
              let shopItemList = JSON.parse(ret.res.shopGoods);
              PaymentMgr.shopItemList = shopItemList;

              if (callback) {
                callback();
              }
            }
          };

          const data = {};
          data.userID = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).UserId;
          data.shopID = 1;
          const param = JSON.stringify(data);
          (_crd && ProtocolMgr === void 0 ? (_reportPossibleCrUseOfProtocolMgr({
            error: Error()
          }), ProtocolMgr) : ProtocolMgr).sendChargeShop(completeShop, param);
        }

        getShopItem(GoodID) {
          for (const key in this.shopItemList) {
            if (this.shopItemList.hasOwnProperty(key)) {
              let value = this.shopItemList[key];

              if (value.ID == GoodID) {
                return value;
              }
            }
          }

          return null;
        }

        modifyShopItem(GoodID, LeftChange) {
          for (const key in PaymentMgr.shopItemList) {
            if (PaymentMgr.shopItemList.hasOwnProperty(key)) {
              let value = PaymentMgr.shopItemList[key];

              if (value.ID == GoodID) {
                PaymentMgr.shopItemList[key].left = PaymentMgr.shopItemList[key].left + LeftChange;
                return true;
              }
            }
          }

          return false;
        }

        ProcessPay(protocol) {
          if (protocol.carrotCoin) {
            if (protocol.carrotCoin > (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).CarrotCoin) {
              (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                error: Error()
              }), UtilMgr) : UtilMgr).PlaySoundEffect(20); // 充值成功播放音效
            }

            (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).updateCarrotCoin(protocol.carrotCoin);
          }

          let item = this.getShopItem(protocol.GoodID);

          if (item.gift > 0) {
            (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).modifyGiftNum(item.gift);
          }

          if (this.modifyShopItem(protocol.GoodID, protocol.LeftChange)) {
            const PaymentGUI = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.get((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).PaymentUI);

            if (PaymentGUI) {
              const PaymentCom = PaymentGUI.getComponent(_crd && PaymentComponent === void 0 ? (_reportPossibleCrUseOfPaymentComponent({
                error: Error()
              }), PaymentComponent) : PaymentComponent);

              if (PaymentCom) {
                PaymentCom.refreshGridList();
              }
            }
          }
        }

      });

      _export("PaymentMgr", PaymentMgr = new PaymentManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e69cb697b6799afa53c23dbeda872a1f0531e4c9.js.map