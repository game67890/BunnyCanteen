System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, UITransform, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, AutoResizeLabelPlugin;

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
      Label = _cc.Label;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3e117bWdhVOJYBeh5seh+la", "AutoResizeLabelPlugin", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AutoResizeLabelPlugin", AutoResizeLabelPlugin = (_dec = ccclass('AutoResizeLabelPlugin'), _dec2 = property({
        type: Label
      }), _dec(_class = (_class2 = class AutoResizeLabelPlugin extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "label", _descriptor, this);

          _initializerDefineProperty(this, "padding", _descriptor2, this);
        }

        // 可选的左右边距
        onLoad() {
          this.updateLabelHeight();
        }
        /**
         * 更新Label宽度，使其根据内容适配
         */


        updateLabelHeight() {
          if (!this.label) {
            console.warn("请确保Label节点已绑定");
            return;
          } // 强制更新 Label 的渲染数据


          this.label.updateRenderData(true); // 获取 Label 的实际宽度

          const labelHeight = this.label.node.getComponent(UITransform).height; // 设置 Label 节点宽度，加上左右边距

          this.label.node.getComponent(UITransform).height = labelHeight + this.padding * 2;
        }
        /**
         * 更新Label的文本内容，并调整宽度
         * @param newText 新的文本内容
         */


        updateLabelContent(newText) {
          if (this.label) {
            this.label.string = newText;
            this.updateLabelHeight();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "padding", [property], {
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
//# sourceMappingURL=9b91e00dd30372b81162d7da666808d9287d5a23.js.map