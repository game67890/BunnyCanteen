System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, view, Platform, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
      view = _cc.view;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3c502EGz4pF+7mcXrxHD2TZ", "platform", undefined);

      __checkObsolete__(['sys', 'view']);

      _export("default", Platform = class Platform {
        /**
         * @description 是否是平板的屏幕，仅根据屏幕高宽比判断，不适合用于确定是否真的平板
         */
        static isPadScreen() {
          var screenWidth = view.getVisibleSize().width;
          var screenHeight = view.getVisibleSize().height;
          var ratio = 1.69;
          return !(screenWidth > screenHeight && screenWidth >= ratio * screenHeight) && !(screenHeight > screenWidth && screenHeight >= ratio * screenWidth);
        }
        /**
         * 是否浏览器
         */


        static isBrowser() {
          return sys.isBrowser;
        }
        /**
         * 是否移动端
         */


        static isMobile() {
          return sys.isMobile;
        }
        /**
         * 是否原生
         */


        static isNative() {
          return sys.isNative;
        }
        /**
         * 是否安卓
         */


        static isAndroid() {
          return sys.isNative && sys.os == sys.OS.ANDROID;
        }
        /**
         * 是否苹果
         */


        static isIOS() {
          return sys.isNative && sys.os == sys.OS.IOS;
        }
        /**
         * 是否微信小游戏
         */


        static isWxGame() {
          return sys.platform === sys.Platform.WECHAT_GAME;
        }
        /**
         * 是否抖音小游戏
         */


        static isDyGame() {
          return sys.platform === sys.Platform.BYTEDANCE_MINI_GAME;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=90ac317309e84d4127da5000c4c446ea7cd32ba8.js.map