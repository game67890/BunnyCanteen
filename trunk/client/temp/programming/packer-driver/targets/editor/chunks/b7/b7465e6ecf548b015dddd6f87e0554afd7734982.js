System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, Component, Label, _decorator, AutoResizeLabelPlugin, DynamicBackgroundPlugin, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Notify;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAutoResizeLabelPlugin(extras) {
    _reporterNs.report("AutoResizeLabelPlugin", "./AutoResizeLabelPlugin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDynamicBackgroundPlugin(extras) {
    _reporterNs.report("DynamicBackgroundPlugin", "./DynamicBackgroundPlugin", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Animation = _cc.Animation;
      Component = _cc.Component;
      Label = _cc.Label;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AutoResizeLabelPlugin = _unresolved_2.AutoResizeLabelPlugin;
    }, function (_unresolved_3) {
      DynamicBackgroundPlugin = _unresolved_3.DynamicBackgroundPlugin;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "01391Mp6X1Gn554rkzavN4K", "Notify", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-04-14 17:08:01
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-02 14:07:13
       */


      __checkObsolete__(['Animation', 'Component', 'Label', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 滚动消息提示组件  */

      _export("Notify", Notify = (_dec = ccclass('Notify'), _dec2 = property(Label), _dec3 = property(Animation), _dec(_class = (_class2 = class Notify extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lab_content", _descriptor, this);

          _initializerDefineProperty(this, "animation", _descriptor2, this);

          /** 提示动画完成 */
          this.onComplete = null;
        }

        onLoad() {
          if (this.animation) this.animation.on(Animation.EventType.FINISHED, this.onFinished, this);
        }

        onFinished() {
          this.node.destroy();
          this.onComplete && this.onComplete();
        }
        /**
         * 显示提示
         * @param msg       文本
         * @param useI18n   设置为 true 时，使用多语言功能 msg 参数为多语言 key
         */


        toast(msg, useI18n) {
          let autoResizeLabel = this.lab_content.getComponent(_crd && AutoResizeLabelPlugin === void 0 ? (_reportPossibleCrUseOfAutoResizeLabelPlugin({
            error: Error()
          }), AutoResizeLabelPlugin) : AutoResizeLabelPlugin);

          if (autoResizeLabel) {
            autoResizeLabel.updateLabelContent(msg);
          } else {
            this.lab_content.string = msg;
          }

          let dynamicBackgroundPlugin = this.lab_content.getComponent(_crd && DynamicBackgroundPlugin === void 0 ? (_reportPossibleCrUseOfDynamicBackgroundPlugin({
            error: Error()
          }), DynamicBackgroundPlugin) : DynamicBackgroundPlugin);

          if (dynamicBackgroundPlugin) {
            dynamicBackgroundPlugin.updateLabelContent();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lab_content", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "animation", [_dec3], {
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
//# sourceMappingURL=b7465e6ecf548b015dddd6f87e0554afd7734982.js.map