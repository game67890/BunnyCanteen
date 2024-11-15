System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, Label, oops, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, CommonPromptTips;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8cd5ahhf6tKZoi/9c/6hS+L", "CommonPromptTips", undefined);

      __checkObsolete__(['Component', '_decorator', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 公共提示窗口 */

      _export("CommonPromptTips", CommonPromptTips = (_dec = ccclass("CommonPrompt"), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = class CommonPromptTips extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "title", _descriptor, this);

          _initializerDefineProperty(this, "content", _descriptor2, this);

          _initializerDefineProperty(this, "okWord", _descriptor3, this);

          this.config = {};
        }

        /**
         * 
         * 
         * @param params 参数 
         * {
         *     title:      标题
         *     content:    内容
         *     okWord:     ok按钮上的文字
         *     okFunc:     确认时执行的方法
         *     needOk:     是否显示OK按钮
         * }
         */
        onAdded(params) {
          this.config = params || {};
          this.setTitle();
          this.setContent();
          this.setBtnOkLabel();
          this.node.active = true;
          return true;
        }

        setTitle() {
          this.title.string = this.config.title;
        }

        setContent() {
          this.content.string = this.config.content;
        }

        setBtnOkLabel() {
          this.okWord.string = this.config.okWord;
          this.okWord.node.parent.active = this.config.needOk || false;
        }

        onOk() {
          if (typeof this.config.okFunc == "function") {
            this.config.okFunc();
          }

          this.close();
        }

        onClose() {
          if (typeof this.config.closeFunc == "function") {
            this.config.closeFunc();
          }

          this.close();
        }

        close() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.removeByNode(this.node);
        }

        onDestroy() {
          this.config = null;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "okWord", [_dec4], {
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
//# sourceMappingURL=c2a993a1b03c861f6c9b57031b13cf81f6114a03.js.map