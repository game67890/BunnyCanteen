System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, CCBoolean, ResolutionPolicy, screen, view, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, FullScreenAdapter;

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
      CCBoolean = _cc.CCBoolean;
      ResolutionPolicy = _cc.ResolutionPolicy;
      screen = _cc.screen;
      view = _cc.view;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e977aEwJr5EtoevN5fUcTJS", "full_screen_adapter", undefined);

      __checkObsolete__(['_decorator', 'Component', 'CCBoolean', 'ResolutionPolicy', 'screen', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", FullScreenAdapter = (_dec = ccclass('full_screen_adapter'), _dec2 = property({
        tooltip: '等比适配开关',
        type: CCBoolean
      }), _dec(_class = (_class2 = class FullScreenAdapter extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "showAll", _descriptor, this);
        }

        // 等比缩放
        onLoad() {
          this.screenAdapter(); //监听窗口大小变化时的回调，每次窗口变化都要自动适配

          screen.on('window-resize', () => {
            this.screenAdapter();
          });
        }
        /**
         * Fit Height 模式：适用于宽大于高的屏幕
         * Fit Width 模式：适用于高大于宽的屏幕
         */


        screenAdapter() {
          if (this.showAll) {
            this.setShowAll();
            return;
          }

          var screenRatio = this.computeScreenRatio();
          var designRatio = this.computeDesignRatio();
          var devicePixelRatio = screen.devicePixelRatio;

          if (screenRatio <= 1) {
            // 屏幕高度大于或等于宽度,即竖屏
            if (screenRatio <= designRatio) {
              this.setFitWidth();
            } else {
              // 此时屏幕比例大于设计比例
              // 为了保证纵向的游戏内容不受影响，应该使用 fitHeight 模式
              this.setFitHeight();
            }
          } else {
            // 屏幕宽度大于高度,即横屏
            this.setFitHeight();
          } // log('screenAdapter', screenRatio, designRatio, devicePixelRatio, view.getResolutionPolicy());

        }
        /**
         * 当前屏幕分辨率比例
         */


        computeScreenRatio() {
          return screen.windowSize.width / screen.windowSize.height;
        }
        /**
         * 设计稿分辨率比例
         */


        computeDesignRatio() {
          var ds = view.getDesignResolutionSize();
          return ds.width / ds.height;
        }
        /**
         * 非等比拉伸
         */


        setExactFit() {
          // view.setResolutionPolicy(ResolutionPolicy.FIXED_HEIGHT);
          view.setDesignResolutionSize(view.getDesignResolutionSize().width, view.getDesignResolutionSize().height, ResolutionPolicy.EXACT_FIT); // console.log('EXACT_FIT', view.getDesignResolutionSize().width, view.getDesignResolutionSize().height);
        }
        /**
         * 等比缩放
         */


        setShowAll() {
          // log('setShowAll: ', view.getDesignResolutionSize().width, view.getDesignResolutionSize().height);
          view.setDesignResolutionSize(view.getDesignResolutionSize().width, view.getDesignResolutionSize().height, ResolutionPolicy.SHOW_ALL); // console.log('SHOW_ALL', view.getDesignResolutionSize().width, view.getDesignResolutionSize().height);
        }
        /**
         * 适应宽度
         */


        setFitWidth() {
          // view.setResolutionPolicy(ResolutionPolicy.FIXED_WIDTH);
          view.setDesignResolutionSize(view.getDesignResolutionSize().width, view.getDesignResolutionSize().height, ResolutionPolicy.FIXED_WIDTH); // console.log('FIXED_WIDTH', view.getDesignResolutionSize().width, view.getDesignResolutionSize().height);
        }
        /**
         * 适应高度
         */


        setFitHeight() {
          // view.setResolutionPolicy(ResolutionPolicy.FIXED_HEIGHT);
          view.setDesignResolutionSize(view.getDesignResolutionSize().width, view.getDesignResolutionSize().height, ResolutionPolicy.FIXED_HEIGHT); // console.log('FIXED_HEIGHT', view.getDesignResolutionSize().width, view.getDesignResolutionSize().height);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "showAll", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=12e86f75c9f5e9ef37e54c7ef190b3edb9dae840.js.map