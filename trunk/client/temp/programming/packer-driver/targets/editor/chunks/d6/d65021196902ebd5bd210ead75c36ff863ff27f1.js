System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, UITransform, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, DynamicBackgroundPlugin;

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
      Label = _cc.Label;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "523abbWsLpEraxJ4bn3Aa28", "DynamicBackgroundPlugin", undefined); // DynamicBackground.ts


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DynamicBackgroundPlugin", DynamicBackgroundPlugin = (_dec = ccclass('DynamicBackgroundPlugin'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = class DynamicBackgroundPlugin extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelNode", _descriptor, this);

          _initializerDefineProperty(this, "backgroundNode", _descriptor2, this);

          _initializerDefineProperty(this, "padding", _descriptor3, this);
        }

        // 背景两侧的边距
        onLoad() {
          this.updateBackgroundHeight();
        } // 更新背景宽度的方法


        updateBackgroundHeight() {
          if (!this.labelNode || !this.backgroundNode) {
            console.warn("请确保Label和Background节点已绑定");
            return;
          } // 获取Label组件


          const labelComponent = this.labelNode.getComponent(Label);

          if (!labelComponent) {
            console.warn("Label节点上没有找到Label组件");
            return;
          } // 强制更新 Label 的渲染数据


          labelComponent.updateRenderData(true); // 获取Label的宽度

          const labelHeigth = this.labelNode.getComponent(UITransform).height; // 设置背景的宽度，加上左右的边距

          this.backgroundNode.getComponent(UITransform).height = labelHeigth + this.padding * 2;
        } // 当Label的内容变化时，可以手动调用此函数


        updateLabelContent() {
          this.updateBackgroundHeight();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "backgroundNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "padding", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 20;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d65021196902ebd5bd210ead75c36ff863ff27f1.js.map