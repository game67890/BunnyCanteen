System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Sprite, IVirtualGridListItem, UtilMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, CarrotRankCellComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIVirtualGridListItem(extras) {
    _reporterNs.report("IVirtualGridListItem", "../../../resources/libs/virtual_grid_list/interface", _context.meta, extras);
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
      Label = _cc.Label;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      IVirtualGridListItem = _unresolved_2.IVirtualGridListItem;
    }, function (_unresolved_3) {
      UtilMgr = _unresolved_3.UtilMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6c726H3bItIoJCi50gkfHbm", "CarrotRankCellComponent", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CarrotRankCellComponent", CarrotRankCellComponent = (_dec = ccclass('CarrotRankCellComponent'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Sprite), _dec6 = property(Sprite), _dec7 = property(Sprite), _dec8 = property(Sprite), _dec(_class = (_class2 = class CarrotRankCellComponent extends (_crd && IVirtualGridListItem === void 0 ? (_reportPossibleCrUseOfIVirtualGridListItem({
        error: Error()
      }), IVirtualGridListItem) : IVirtualGridListItem) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "RankNum", _descriptor, this);

          _initializerDefineProperty(this, "RoleName", _descriptor2, this);

          _initializerDefineProperty(this, "RoleValue", _descriptor3, this);

          _initializerDefineProperty(this, "HeadIcon", _descriptor4, this);

          _initializerDefineProperty(this, "FirstRankIcon", _descriptor5, this);

          _initializerDefineProperty(this, "SecondRankIcon", _descriptor6, this);

          _initializerDefineProperty(this, "ThirdRankIcon", _descriptor7, this);
        }

        /**
        * 点击触发选择事件
        */
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
          this.RankNum.string = data.rank.toString();
          this.RoleName.string = data.rolename;
          this.RoleValue.string = data.weight.toString() + "kg";
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).ShowUserHead(this.data.userid, this.HeadIcon);
          this.FirstRankIcon.node.active = data.rank == 1;
          this.SecondRankIcon.node.active = data.rank == 2;
          this.ThirdRankIcon.node.active = data.rank == 3;
          this.updateSelectionStatus();
        }

        updateSelectionStatus() {
          /*
          if (true === this.data.select) {
              //this.node.getComponent(Sprite).color = math.color(52, 217, 235);
          } else {
              //this.node.getComponent(Sprite).color = math.color(255, 255, 255);
          }
              */
        }
        /*
        _showImg(spriteFrame: SpriteFrame, uri: string) {
            if (this.data && spriteFrame && uri.replace('_gray', '') == this.data.pic) {
                this.imgItem.getComponent(Sprite).spriteFrame = spriteFrame;
                // this.imgItem.node.getComponent(Sprite).color.a = 255;
            }
        }
            */


        onDestroy() {
          super.onDestroy();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "RankNum", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "RoleName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "RoleValue", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "HeadIcon", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "FirstRankIcon", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "SecondRankIcon", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "ThirdRankIcon", [_dec8], {
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
//# sourceMappingURL=04d45e05d3a8f51140634130d0ae29adf8de4455.js.map