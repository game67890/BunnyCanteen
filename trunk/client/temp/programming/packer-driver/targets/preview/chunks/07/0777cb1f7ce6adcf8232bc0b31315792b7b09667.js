System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Sprite, IVirtualGridListItem, StringUtil, oops, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, CarrotRankRewardCell;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIVirtualGridListItem(extras) {
    _reporterNs.report("IVirtualGridListItem", "../../../resources/libs/virtual_grid_list/interface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStringUtil(extras) {
    _reporterNs.report("StringUtil", "../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil", _context.meta, extras);
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
      StringUtil = _unresolved_3.StringUtil;
    }, function (_unresolved_4) {
      oops = _unresolved_4.oops;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "140c4hLWpVFopOFPu/eNSJ0", "CarrotRankRewardCell", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CarrotRankRewardCell", CarrotRankRewardCell = (_dec = ccclass('CarrotRankRewardCell'), _dec2 = property(Label), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Label), _dec(_class = (_class2 = class CarrotRankRewardCell extends (_crd && IVirtualGridListItem === void 0 ? (_reportPossibleCrUseOfIVirtualGridListItem({
        error: Error()
      }), IVirtualGridListItem) : IVirtualGridListItem) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "RankTxt", _descriptor, this);

          _initializerDefineProperty(this, "FirstRankIcon", _descriptor2, this);

          _initializerDefineProperty(this, "SecondRankIcon", _descriptor3, this);

          _initializerDefineProperty(this, "ThirdRankIcon", _descriptor4, this);

          _initializerDefineProperty(this, "ShowTxt", _descriptor5, this);
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

          if (data.maxrank <= 3) {
            this.RankTxt.node.active = false;
          } else {
            this.RankTxt.node.active = true;
            this.RankTxt.string = data.maxrank + "~" + data.minirank;
          }

          this.FirstRankIcon.node.active = Number(data.maxrank) == 1;
          this.SecondRankIcon.node.active = Number(data.maxrank) == 2;
          this.ThirdRankIcon.node.active = Number(data.maxrank) == 3;
          this.ShowTxt.string = (_crd && StringUtil === void 0 ? (_reportPossibleCrUseOfStringUtil({
            error: Error()
          }), StringUtil) : StringUtil).substitute_1((_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_078"), data.showtxt);
        }

        onDestroy() {
          super.onDestroy();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "RankTxt", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "FirstRankIcon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "SecondRankIcon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ThirdRankIcon", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ShowTxt", [_dec6], {
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
//# sourceMappingURL=0777cb1f7ce6adcf8232bc0b31315792b7b09667.js.map