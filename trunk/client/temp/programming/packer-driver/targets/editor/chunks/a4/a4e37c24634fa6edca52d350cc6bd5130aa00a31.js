System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, resLoader, _class, _crd, ccclass, ResKeeper;

  function _reportPossibleCrUseOfAssetType(extras) {
    _reporterNs.report("AssetType", "./res_loader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCompleteCallback(extras) {
    _reporterNs.report("CompleteCallback", "./res_loader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProgressCallback(extras) {
    _reporterNs.report("ProgressCallback", "./res_loader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "./res_loader", _context.meta, extras);
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
    }, function (_unresolved_2) {
      resLoader = _unresolved_2.resLoader;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3748e37e4RBnZhH8LC+IC13", "res_keeper", undefined);

      __checkObsolete__(['Asset', 'Component', '_decorator']);

      ({
        ccclass
      } = _decorator);

      _export("ResKeeper", ResKeeper = ccclass(_class = class ResKeeper extends Component {
        constructor(...args) {
          super(...args);
          this.resCache = new Set();
        }

        load(...args) {
          // 调用加载接口
          (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
            error: Error()
          }), resLoader) : resLoader).load.apply(_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
            error: Error()
          }), resLoader) : resLoader, args);
        }
        /**
         * 缓存资源
         * @param asset
         */


        cacheAsset(asset) {
          if (!this.resCache.has(asset)) {
            asset.addRef();
            this.resCache.add(asset);
          }
        }
        /**
         * 组件销毁时自动释放所有keep的资源
         */


        onDestroy() {
          this.releaseAssets();
        }
        /**
         * 释放资源，组件销毁时自动调用
         */


        releaseAssets() {
          this.resCache.forEach(element => {
            element.decRef();
          });
          this.resCache.clear();
        }

      }) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a4e37c24634fa6edca52d350cc6bd5130aa00a31.js.map