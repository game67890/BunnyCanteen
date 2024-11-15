System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Vec3, oops, UIID, Button, VirtualGridList, TableRadishAwardRank, UtilMgr, RankRewardDataItem, _dec, _dec2, _dec3, _dec4, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, _temp_vec3, CarrotRankRewardComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../framework/common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVirtualGridList(extras) {
    _reporterNs.report("VirtualGridList", "../../../resources/libs/virtual_grid_list/virtual_grid_list", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableRadishAwardRank(extras) {
    _reporterNs.report("TableRadishAwardRank", "../../framework/common/table/TableRadishAwardRank", _context.meta, extras);
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
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      UIID = _unresolved_3.UIID;
    }, function (_unresolved_4) {
      VirtualGridList = _unresolved_4.VirtualGridList;
    }, function (_unresolved_5) {
      TableRadishAwardRank = _unresolved_5.TableRadishAwardRank;
    }, function (_unresolved_6) {
      UtilMgr = _unresolved_6.UtilMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "436c26M8gBMGJIP9DUyc92c", "CarrotRankRewardComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'Prefab', 'instantiate', 'Vec3', 'UITransform']);

      __checkObsolete__(['Button']);

      ({
        ccclass,
        property
      } = _decorator);
      _temp_vec3 = new Vec3();
      RankRewardDataItem = class RankRewardDataItem {
        constructor() {
          this.minirank = 0;
          this.maxrank = 0;
          this.showtxt = "";
        }

      };

      _export("CarrotRankRewardComponent", CarrotRankRewardComponent = (_dec = ccclass('CarrotRankRewardComponent'), _dec2 = property(Button), _dec3 = property(Label), _dec4 = property(_crd && VirtualGridList === void 0 ? (_reportPossibleCrUseOfVirtualGridList({
        error: Error()
      }), VirtualGridList) : VirtualGridList), _dec(_class2 = (_class3 = class CarrotRankRewardComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "CloseBtn", _descriptor, this);

          _initializerDefineProperty(this, "TitleName", _descriptor2, this);

          _initializerDefineProperty(this, "gridList", _descriptor3, this);

          this._dataList = [];
          this.tablereward = new (_crd && TableRadishAwardRank === void 0 ? (_reportPossibleCrUseOfTableRadishAwardRank({
            error: Error()
          }), TableRadishAwardRank) : TableRadishAwardRank)();
        }

        onAdded(params) {
          this.TitleName.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_030");

          for (var i = 0; i < 5; ++i) {
            this.tablereward.init(i + 1);
            var item = {
              minirank: this.tablereward.minrank,
              maxrank: this.tablereward.maxrank,
              showtxt: Math.floor(Number(this.tablereward.awardpercent) * 100).toString() + "%"
            };

            this._dataList.push(item);
          }

          this.initGridList();
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
        } // 点击关闭按钮


        onCloseBtnClick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(19);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.remove((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).CarrotRankReward);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "CloseBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "TitleName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "gridList", [_dec4], {
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
//# sourceMappingURL=d0344f4ada6985f10e5d07b59408df2ffea39a04.js.map