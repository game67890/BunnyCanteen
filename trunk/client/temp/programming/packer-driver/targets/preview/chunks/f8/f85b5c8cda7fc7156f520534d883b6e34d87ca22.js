System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ResUtil, ResLeakChecker, _crd;

  function _reportPossibleCrUseOfResUtil(extras) {
    _reporterNs.report("ResUtil", "./res_util", _context.meta, extras);
  }

  _export("ResLeakChecker", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      ResUtil = _unresolved_2.ResUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4ddb2mjAz1LaaU7UHsyDpGi", "res_leak_checker", undefined);

      __checkObsolete__(['Asset']);

      _export("ResLeakChecker", ResLeakChecker = class ResLeakChecker {
        constructor() {
          this.resFilter = null;
          // 资源过滤回调
          this._checking = false;
          this.traceAssets = new Set();
        }

        /**
         * 检查该资源是否符合过滤条件
         * @param asset
         */
        checkFilter(asset) {
          if (!this._checking) {
            return false;
          }

          if (this.resFilter) {
            return this.resFilter(asset);
          }

          return true;
        }
        /**
         * 对资源进行引用的跟踪
         * @param asset
         */


        traceAsset(asset) {
          if (!asset || !this.checkFilter(asset)) {
            return;
          }

          if (!this.traceAssets.has(asset)) {
            asset.addRef();
            this.traceAssets.add(asset);
            this.extendAsset(asset);
          }
        }
        /**
         * 扩展asset，使其支持引用计数追踪
         * @param asset
         */


        extendAsset(asset) {
          var addRefFunc = asset.addRef;
          var decRefFunc = asset.decRef;
          var traceMap = new Map();
          asset['traceMap'] = traceMap;

          asset.addRef = function () {
            var stack = (_crd && ResUtil === void 0 ? (_reportPossibleCrUseOfResUtil({
              error: Error()
            }), ResUtil) : ResUtil).getCallStack(1);
            var cnt = traceMap.has(stack) ? traceMap.get(stack) + 1 : 1;
            traceMap.set(stack, cnt);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            return addRefFunc.apply(asset, args);
          };

          asset.decRef = function () {
            var stack = (_crd && ResUtil === void 0 ? (_reportPossibleCrUseOfResUtil({
              error: Error()
            }), ResUtil) : ResUtil).getCallStack(1);
            var cnt = traceMap.has(stack) ? traceMap.get(stack) + 1 : 1;
            traceMap.set(stack, cnt);

            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            return decRefFunc.apply(asset, args);
          };

          asset['resetTrace'] = () => {
            asset.addRef = addRefFunc;
            asset.decRef = decRefFunc;
            delete asset['traceMap'];
          };
        }
        /**
         * 还原asset，使其恢复默认的引用计数功能
         * @param asset
         */


        resetAsset(asset) {
          if (asset['resetTrace']) {
            asset['resetTrace']();
          }
        }

        untraceAsset(asset) {
          if (this.traceAssets.has(asset)) {
            this.resetAsset(asset);
            asset.decRef();
            this.traceAssets.delete(asset);
          }
        }

        startCheck() {
          this._checking = true;
        }

        stopCheck() {
          this._checking = false;
        }

        getTraceAssets() {
          return this.traceAssets;
        }

        reset() {
          this.traceAssets.forEach(element => {
            this.resetAsset(element);
            element.decRef();
          });
          this.traceAssets.clear();
        }

        dump() {
          this.traceAssets.forEach(element => {
            var traceMap = element['traceMap'];

            if (traceMap) {
              traceMap.forEach((key, value) => {
                console.log(key + " : " + value + " ");
              });
            }
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f85b5c8cda7fc7156f520534d883b6e34d87ca22.js.map