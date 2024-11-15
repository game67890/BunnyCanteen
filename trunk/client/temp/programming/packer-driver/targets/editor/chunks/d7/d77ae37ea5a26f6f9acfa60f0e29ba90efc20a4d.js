System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, UtilMgr, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, RoleComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

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
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      UtilMgr = _unresolved_2.UtilMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "87c4e8A0+1LKZPWyVjod0rt", "RoleComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'Prefab', 'instantiate', 'view', 'UITransform', 'Sprite', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RoleComponent", RoleComponent = (_dec = ccclass('RoleComponent'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec(_class = (_class2 = class RoleComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "roleSprite", _descriptor, this);

          _initializerDefineProperty(this, "roleMood", _descriptor2, this);

          this.WalkScaleX = 1;
        }

        // 用来设置sprite是否翻转 1为原来的 -1为翻转
        Init() {
          this.roleMood.node.active = false;
        }

        SetWalkScaleX(scale) {
          this.WalkScaleX = scale;
        }

        PlayStandAnim(roleId) {
          this.roleSprite.node.scale_x = 1;
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).addNodeAnimation("animation/fangke/0" + roleId + "/stand", this.roleSprite.node);
        }

        PlayWalkAnim(roleId, isback = false) {
          if (isback) {
            this.roleSprite.node.scale_x = -this.WalkScaleX;
          } else {
            this.roleSprite.node.scale_x = this.WalkScaleX;
          }

          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).addNodeAnimation("animation/fangke/0" + roleId + "/walk", this.roleSprite.node);
        }

        PlaySitAnim(roleId, index, callback) {
          this.roleSprite.node.scale_x = 1;

          if (index == 0) {
            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).addNodeAnimation("animation/fangke/0" + roleId + "/sit11", this.roleSprite.node, true, false, callback);
          } else {
            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).addNodeAnimation("animation/fangke/0" + roleId + "/sit21", this.roleSprite.node, true, false, callback);
          }
        }

        PlaySitIdleAnim(roleId, index) {
          this.roleSprite.node.scale_x = 1;

          if (index == 0) {
            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).addNodeAnimation("animation/fangke/0" + roleId + "/sit12", this.roleSprite.node);
          } else {
            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).addNodeAnimation("animation/fangke/0" + roleId + "/sit22", this.roleSprite.node);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "roleSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "roleMood", [_dec3], {
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
//# sourceMappingURL=d77ae37ea5a26f6f9acfa60f0e29ba90efc20a4d.js.map