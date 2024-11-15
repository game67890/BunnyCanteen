System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Vec3, oops, UIID, GameEvent, TonGameMgr, Button, Widget, CarrotMgr, VirtualGridList, UtilMgr, Sprite, RankDataItem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, _temp_vec3, CarrotRankComponent;

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

  function _reportPossibleCrUseOfCarrotMgr(extras) {
    _reporterNs.report("CarrotMgr", "./CarrotManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVirtualGridList(extras) {
    _reporterNs.report("VirtualGridList", "../../../resources/libs/virtual_grid_list/virtual_grid_list", _context.meta, extras);
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
      Vec3 = _cc.Vec3;
      Button = _cc.Button;
      Widget = _cc.Widget;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      UIID = _unresolved_3.UIID;
    }, function (_unresolved_4) {
      GameEvent = _unresolved_4.GameEvent;
    }, function (_unresolved_5) {
      TonGameMgr = _unresolved_5.TonGameMgr;
    }, function (_unresolved_6) {
      CarrotMgr = _unresolved_6.CarrotMgr;
    }, function (_unresolved_7) {
      VirtualGridList = _unresolved_7.VirtualGridList;
    }, function (_unresolved_8) {
      UtilMgr = _unresolved_8.UtilMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7dcff6RIzBC8KmKVzw94JK5", "CarrotRankComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'Prefab', 'instantiate', 'Vec3', 'UITransform']);

      __checkObsolete__(['Button']);

      __checkObsolete__(['Widget']);

      __checkObsolete__(['Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      _temp_vec3 = new Vec3();
      RankDataItem = class RankDataItem {
        constructor() {
          this.rank = 0;
          this.rolename = "";
          this.weight = 0;
          this.userid = 0;
        }

      };

      _export("CarrotRankComponent", CarrotRankComponent = (_dec = ccclass('CarrotRankComponent'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Label), _dec5 = property(Widget), _dec6 = property(Label), _dec7 = property(Widget), _dec8 = property(Button), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Sprite), _dec15 = property(_crd && VirtualGridList === void 0 ? (_reportPossibleCrUseOfVirtualGridList({
        error: Error()
      }), VirtualGridList) : VirtualGridList), _dec(_class2 = (_class3 = class CarrotRankComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "CloseBtn", _descriptor, this);

          _initializerDefineProperty(this, "TipsBtn", _descriptor2, this);

          _initializerDefineProperty(this, "RabbitCoinNum", _descriptor3, this);

          _initializerDefineProperty(this, "NextTimeWnd", _descriptor4, this);

          _initializerDefineProperty(this, "NoRankTxt", _descriptor5, this);

          _initializerDefineProperty(this, "MyRankWnd", _descriptor6, this);

          _initializerDefineProperty(this, "RewardBtn", _descriptor7, this);

          _initializerDefineProperty(this, "RewardBtnTxt", _descriptor8, this);

          _initializerDefineProperty(this, "MyRank", _descriptor9, this);

          _initializerDefineProperty(this, "MyName", _descriptor10, this);

          _initializerDefineProperty(this, "MyWeight", _descriptor11, this);

          _initializerDefineProperty(this, "TitleTxt", _descriptor12, this);

          _initializerDefineProperty(this, "HeadIcon", _descriptor13, this);

          _initializerDefineProperty(this, "gridList", _descriptor14, this);

          this._dataList = [];
        }

        onAdded(params) {
          this.NextTimeWnd.node.active = false;
          this.NoRankTxt.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_021");
          this.RewardBtnTxt.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_030");
          this.TitleTxt.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_179");
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).SetImage(this.HeadIcon, "textures/UI/main/main;touxiang");
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).ShowUserHead((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).UserId, this.HeadIcon);
          this.init();
          this.addEvent();
          this._dataList = [];

          if (params && params.rankitemlist.length > 0) {
            for (var i = 0; i < params.rankitemlist.length; i++) {
              var item = {
                rank: params.rankitemlist[i].idx,
                rolename: params.rankitemlist[i].name,
                weight: params.rankitemlist[i].weight,
                userid: params.rankitemlist[i].userID
              };

              this._dataList.push(item);
            }

            this.initGridList();
          }

          return true;
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
              paddingTop: 0,
              paddingBottom: 10,
              spacingX: 10,
              spacingY: 0,
              columnNum: 1,
              useVirtualLayout: true,
              // emptyTip: oops.language.getLangByID("stringres_088"),
              cacheImage: true
            }); //this.gridList.registerScrollToBottomEventHandler(this._nextPage, this);

            this.gridList.registerSelectOneItemEventHandler(this._onSelectOneItem, this);
            this.gridList.appendItemsToDisplayList(this._dataList);
          }
        }

        _onSelectOneItem(data) {
          console.log('_onSelectOneItem');
        }

        start() {}

        init() {
          this.updateTuziCoin();
          this.RefreshMyRankShow();
        }

        RefreshMyRankShow() {
          this.NoRankTxt.node.active = (_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
            error: Error()
          }), CarrotMgr) : CarrotMgr).CurrentCarrotRank <= 0;
          this.MyRankWnd.node.active = (_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
            error: Error()
          }), CarrotMgr) : CarrotMgr).CurrentCarrotRank > 0;

          if ((_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
            error: Error()
          }), CarrotMgr) : CarrotMgr).CurrentCarrotRank > 0) {
            this.MyRank.string = (_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
              error: Error()
            }), CarrotMgr) : CarrotMgr).CurrentCarrotRank.toString();
            this.MyName.string = "";
            this.MyWeight.string = (_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
              error: Error()
            }), CarrotMgr) : CarrotMgr).CurrentCarrotWeight.toString() + "kg";
          }
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
          }), GameEvent) : GameEvent).UpdateTuziCoin, this.onUpdateData, this);
        }
        /** 移除全局消息事件 */


        removeEvent() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateTuziCoin, this.onUpdateData, this);
        }

        onUpdateData(event, args) {
          switch (event) {
            case (_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).UpdateTuziCoin:
              this.updateTuziCoin();
              break;
          }
        }

        updateTuziCoin() {
          this.RabbitCoinNum.string = (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).formatNumber((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).TuZiCoin);
        } // 点击关闭按钮


        onCloseBtnClick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(19);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.remove((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).CarrotRank);
        } // 点击tips按钮


        onTipsBtnClick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).CarrotTips, 2);
        } // 点击报酬按钮


        onRewardBtnClick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).CarrotRankReward);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "CloseBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "TipsBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "RabbitCoinNum", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "NextTimeWnd", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, "NoRankTxt", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class3.prototype, "MyRankWnd", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class3.prototype, "RewardBtn", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class3.prototype, "RewardBtnTxt", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class3.prototype, "MyRank", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class3.prototype, "MyName", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class3.prototype, "MyWeight", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class3.prototype, "TitleTxt", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class3.prototype, "HeadIcon", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class3.prototype, "gridList", [_dec15], {
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
//# sourceMappingURL=5ca5ecb54894f57ae11e1c042ac0bc4f2fb55b3e.js.map