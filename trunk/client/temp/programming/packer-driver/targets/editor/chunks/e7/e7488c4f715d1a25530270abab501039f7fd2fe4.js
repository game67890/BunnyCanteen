System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Sprite, UITransform, IVirtualGridListItem, oops, UtilMgr, RankMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, RankListItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIVirtualGridListItem(extras) {
    _reporterNs.report("IVirtualGridListItem", "../../../resources/libs/virtual_grid_list/interface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRankMgr(extras) {
    _reporterNs.report("RankMgr", "../rank/RankManager", _context.meta, extras);
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
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      IVirtualGridListItem = _unresolved_2.IVirtualGridListItem;
    }, function (_unresolved_3) {
      oops = _unresolved_3.oops;
    }, function (_unresolved_4) {
      UtilMgr = _unresolved_4.UtilMgr;
    }, function (_unresolved_5) {
      RankMgr = _unresolved_5.RankMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "79bea85uM1AGLBse9jCG0M+", "RankListItem", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Sprite', 'math', 'SpriteFrame', 'Node', 'Button', 'UITransform', 'Size']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RankListItem", RankListItem = (_dec = ccclass('RankListItem'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(Label), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec(_class = (_class2 = class RankListItem extends (_crd && IVirtualGridListItem === void 0 ? (_reportPossibleCrUseOfIVirtualGridListItem({
        error: Error()
      }), IVirtualGridListItem) : IVirtualGridListItem) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "rank1", _descriptor, this);

          _initializerDefineProperty(this, "rank2", _descriptor2, this);

          _initializerDefineProperty(this, "rank3", _descriptor3, this);

          _initializerDefineProperty(this, "rankNum", _descriptor4, this);

          _initializerDefineProperty(this, "headImage", _descriptor5, this);

          _initializerDefineProperty(this, "userName", _descriptor6, this);

          _initializerDefineProperty(this, "valueNum", _descriptor7, this);

          this.nodeWidth = 0;
          this.nodeHeight = 0;
        }

        onDataChanged() {
          if (this.nodeWidth == 0) {
            this.nodeWidth = this.headImage.node.getComponent(UITransform).width; // 获取节点的宽度
          }

          if (this.nodeHeight == 0) {
            this.nodeHeight = this.headImage.node.getComponent(UITransform).height; // 获取节点的高度
          }

          const data = this.data;

          if ((_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
            error: Error()
          }), RankMgr) : RankMgr).curRankType == 1) {
            this.valueNum.string = (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).formatNumber(BigInt(data.param));
          } else {
            this.valueNum.string = data.param;
          }

          if (data.name) {
            this.userName.string = data.name;
          } else {
            this.userName.string = "User_" + data.userId.substring(0, 8);
          }

          if (data.idx == 1) {
            this.rank1.node.active = true;
            this.rank2.node.active = false;
            this.rank3.node.active = false;
            this.rankNum.node.active = false;
          } else if (data.idx == 2) {
            this.rank1.node.active = false;
            this.rank2.node.active = true;
            this.rank3.node.active = false;
            this.rankNum.node.active = false;
          } else if (data.idx == 3) {
            this.rank1.node.active = false;
            this.rank2.node.active = false;
            this.rank3.node.active = true;
            this.rankNum.node.active = false;
          } else {
            this.rank1.node.active = false;
            this.rank2.node.active = false;
            this.rank3.node.active = false;
            this.rankNum.node.active = true;

            if (data.idx == 0) {
              this.rankNum.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).language.getLangByID("stringres_206");
            } else {
              this.rankNum.string = data.idx.toString();
            }
          }

          var completeLogin = (spriteFrame, uri) => {
            if (spriteFrame && this.headImage) {
              this.headImage.node.active = true;
              this.headImage.spriteFrame = spriteFrame; // 获取图片的原始宽高

              let rawSize = spriteFrame._originalSize;
              const originalWidth = rawSize.width;
              const originalHeight = rawSize.height; // 计算缩放比例

              const scaleX = this.nodeWidth / originalWidth;
              const scaleY = this.nodeHeight / originalHeight; // 统一缩放比例以保持纵横比

              const scale = Math.min(scaleX, scaleY); // 设置Sprite的缩放
              //this.headImage.node.setScale(scale, scale);
            }
          };

          let userId = data.userId;
          let url = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).http.server + "getheadimg/" + userId + ".jpg";
          this.loadImage(url, completeLogin);
        }

        onDestroy() {
          super.onDestroy();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rank1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rank2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rank3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rankNum", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "headImage", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "userName", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "valueNum", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e7488c4f715d1a25530270abab501039f7fd2fe4.js.map