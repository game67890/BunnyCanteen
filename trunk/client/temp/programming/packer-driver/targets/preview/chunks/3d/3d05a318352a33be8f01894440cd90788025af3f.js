System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, tween, Vec3, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, ButtonScaleEffect;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "79361+vPppPQKqz4ljvgFEb", "ButtonScaleEffect", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ButtonScaleEffect", ButtonScaleEffect = (_dec = ccclass('ButtonScaleEffect'), _dec2 = property(Node), _dec(_class = (_class2 = class ButtonScaleEffect extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "buttonNode", _descriptor, this);

          _initializerDefineProperty(this, "pressScale", _descriptor2, this);

          _initializerDefineProperty(this, "duration", _descriptor3, this);
        }

        start() {
          // 监听按钮按下
          this.buttonNode.on(Node.EventType.TOUCH_START, this.onButtonPress, this); // 监听按钮松开

          this.buttonNode.on(Node.EventType.TOUCH_END, this.onButtonRelease, this);
          this.buttonNode.on(Node.EventType.TOUCH_CANCEL, this.onButtonRelease, this); // 处理触摸取消的情况
        } // 按下时放大


        onButtonPress() {
          tween(this.buttonNode).to(this.duration, {
            scale: new Vec3(this.pressScale, this.pressScale, 1)
          }).start();
        } // 松开时恢复原始大小


        onButtonRelease() {
          tween(this.buttonNode).to(this.duration, {
            scale: new Vec3(1, 1, 1)
          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "buttonNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pressScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.8;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "duration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3d05a318352a33be8f01894440cd90788025af3f.js.map