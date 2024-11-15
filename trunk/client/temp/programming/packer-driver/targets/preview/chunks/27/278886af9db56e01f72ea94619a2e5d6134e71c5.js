System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, IVirtualGridListItem, TableInvitedUserRank, Sprite, UtilMgr, TableRank, oops, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, InviteAwardCell;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIVirtualGridListItem(extras) {
    _reporterNs.report("IVirtualGridListItem", "../../../resources/libs/virtual_grid_list/interface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableInvitedUserRank(extras) {
    _reporterNs.report("TableInvitedUserRank", "../../framework/common/table/TableInvitedUserRank", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableRank(extras) {
    _reporterNs.report("TableRank", "../../framework/common/table/TableRank", _context.meta, extras);
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
    }, function (_unresolved_2) {
      IVirtualGridListItem = _unresolved_2.IVirtualGridListItem;
    }, function (_unresolved_3) {
      TableInvitedUserRank = _unresolved_3.TableInvitedUserRank;
    }, function (_unresolved_4) {
      UtilMgr = _unresolved_4.UtilMgr;
    }, function (_unresolved_5) {
      TableRank = _unresolved_5.TableRank;
    }, function (_unresolved_6) {
      oops = _unresolved_6.oops;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a1be1uB41VK2apx1FqsCzmp", "InviteAwardCell", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label']);

      __checkObsolete__(['Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("InviteAwardCell", InviteAwardCell = (_dec = ccclass('InviteAwardCell'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Sprite), _dec(_class = (_class2 = class InviteAwardCell extends (_crd && IVirtualGridListItem === void 0 ? (_reportPossibleCrUseOfIVirtualGridListItem({
        error: Error()
      }), IVirtualGridListItem) : IVirtualGridListItem) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "Number", _descriptor, this);

          _initializerDefineProperty(this, "CarrotCoinNum", _descriptor2, this);

          _initializerDefineProperty(this, "Icon", _descriptor3, this);

          this.tablerecord = new (_crd && TableInvitedUserRank === void 0 ? (_reportPossibleCrUseOfTableInvitedUserRank({
            error: Error()
          }), TableInvitedUserRank) : TableInvitedUserRank)();
          this.ranktablerecord = new (_crd && TableRank === void 0 ? (_reportPossibleCrUseOfTableRank({
            error: Error()
          }), TableRank) : TableRank)();
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
          var data = this.data;
          this.tablerecord.init(data.configid);
          this.ranktablerecord.init(data.configid);
          this.Number.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID(this.ranktablerecord.rankname);
          this.CarrotCoinNum.string = this.tablerecord.CarrotCoinNum.toString();
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).SetImage(this.Icon, this.ranktablerecord.smallrankicon);
          this.updateSelectionStatus();
        }

        updateSelectionStatus() {}

        onDestroy() {
          super.onDestroy();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Number", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "CarrotCoinNum", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Icon", [_dec4], {
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
//# sourceMappingURL=278886af9db56e01f72ea94619a2e5d6134e71c5.js.map