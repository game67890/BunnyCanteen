System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, VirtualGridList, oops, UIID, HeChengMgr, GameEvent, TonGameMgr, TableShop, JsonUtil, PaymentMgr, UtilMgr, ShowDataItem, _dec, _dec2, _dec3, _dec4, _dec5, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, ShopMain;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVirtualGridList(extras) {
    _reporterNs.report("VirtualGridList", "../../../resources/libs/virtual_grid_list/virtual_grid_list", _context.meta, extras);
  }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../framework/common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeChengMgr(extras) {
    _reporterNs.report("HeChengMgr", "../hecheng/HeChengManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../framework/common/config/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonGameMgr(extras) {
    _reporterNs.report("TonGameMgr", "../manager/TonGameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableShop(extras) {
    _reporterNs.report("TableShop", "../../framework/common/table/TableShop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
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
    }, function (_unresolved_2) {
      VirtualGridList = _unresolved_2.VirtualGridList;
    }, function (_unresolved_3) {
      oops = _unresolved_3.oops;
    }, function (_unresolved_4) {
      UIID = _unresolved_4.UIID;
    }, function (_unresolved_5) {
      HeChengMgr = _unresolved_5.HeChengMgr;
    }, function (_unresolved_6) {
      GameEvent = _unresolved_6.GameEvent;
    }, function (_unresolved_7) {
      TonGameMgr = _unresolved_7.TonGameMgr;
    }, function (_unresolved_8) {
      TableShop = _unresolved_8.TableShop;
    }, function (_unresolved_9) {
      JsonUtil = _unresolved_9.JsonUtil;
    }, function (_unresolved_10) {
      PaymentMgr = _unresolved_10.PaymentMgr;
    }, function (_unresolved_11) {
      UtilMgr = _unresolved_11.UtilMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0b109qL4gVB+qlpaZh3vIJ+", "ShopMain", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Button', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);
      ShowDataItem = class ShowDataItem {
        constructor() {
          this.configid = 0;
        }

      };

      _export("ShopMain", ShopMain = (_dec = ccclass('ShopMain'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(_crd && VirtualGridList === void 0 ? (_reportPossibleCrUseOfVirtualGridList({
        error: Error()
      }), VirtualGridList) : VirtualGridList), _dec(_class2 = (_class3 = class ShopMain extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "TitleName", _descriptor, this);

          _initializerDefineProperty(this, "RabbitCoinNum", _descriptor2, this);

          _initializerDefineProperty(this, "CarrotCoinNum", _descriptor3, this);

          _initializerDefineProperty(this, "gridList", _descriptor4, this);

          this._dataList = [];
          this.tablerecord = new (_crd && TableShop === void 0 ? (_reportPossibleCrUseOfTableShop({
            error: Error()
          }), TableShop) : TableShop)();
        }

        onAdded(params) {
          this.init();
          this.addEvent();
          var table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get((_crd && TableShop === void 0 ? (_reportPossibleCrUseOfTableShop({
            error: Error()
          }), TableShop) : TableShop).TableName);
          this._dataList = [];

          if (table) {
            for (var id in table) {
              this.tablerecord.init(Number(id));
              var item = {
                configid: Number(id)
              };

              this._dataList.push(item);
            }
          }

          this.initGridList();
          return true;
        }

        init() {
          this.TitleName.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_180");
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
          }), GameEvent) : GameEvent).OnShopListChange, this.updategridList, this);
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
          }), GameEvent) : GameEvent).OnShopListChange, this.updategridList, this);
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
        }

        updategridList() {
          this.gridList.refreshItemDisplays();
        }

        updateBaseData() {
          this.CarrotCoinNum.string = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CarrotCoin.toString();
          this.updategridList();
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
              spacingX: 0,
              spacingY: 0,
              columnNum: 1,
              useVirtualLayout: true,
              emptyTip: (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).language.getLangByID("stringres_088"),
              cacheImage: true
            }); //this.gridList.registerScrollToBottomEventHandler(this._nextPage, this);

            this.gridList.registerSelectOneItemEventHandler(this._onSelectOneItem, this);
            this.gridList.appendItemsToDisplayList(this._dataList);
          }
        }

        _onSelectOneItem(data) {
          console.log('_onSelectOneItem');
        } // 点击加号按钮


        onAddBtnClick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          (_crd && PaymentMgr === void 0 ? (_reportPossibleCrUseOfPaymentMgr({
            error: Error()
          }), PaymentMgr) : PaymentMgr).OpenPaymentUI();
        } // 点击兔子币加号按钮


        onTuziAddBtnClick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          (_crd && HeChengMgr === void 0 ? (_reportPossibleCrUseOfHeChengMgr({
            error: Error()
          }), HeChengMgr) : HeChengMgr).onGotoCarrots();
        } // 点击关闭按钮


        onCloseBtnClick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(19);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.remove((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).ShopMain);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "TitleName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "RabbitCoinNum", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "CarrotCoinNum", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "gridList", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class3)) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fe894d0b50f1bafc5b570c10a202b4877f6db8bf.js.map