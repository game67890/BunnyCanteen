System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Asset, assetManager, js, resources, ResLoader, _crd, resLoader;

  function _reportPossibleCrUseOfResLeakChecker(extras) {
    _reporterNs.report("ResLeakChecker", "./res_leak_checker", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Asset = _cc.Asset;
      assetManager = _cc.assetManager;
      js = _cc.js;
      resources = _cc.resources;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6934274r5VKuqksveSSdIA/", "res_loader", undefined);

      __checkObsolete__(['Asset', 'AssetManager', 'assetManager', 'js', 'resources']);

      _export("default", ResLoader = class ResLoader {
        constructor() {
          this.resLeakChecker = null;
        }

        parseLoadResArgs(paths, type, onProgress, onComplete) {
          let pathsOut = paths;
          let typeOut = type;
          let onProgressOut = onProgress;
          let onCompleteOut = onComplete;

          if (onComplete === undefined) {
            const isValidType = js.isChildClassOf(type, Asset);

            if (onProgress) {
              onCompleteOut = onProgress;

              if (isValidType) {
                onProgressOut = null;
              }
            } else if (onProgress === undefined && !isValidType) {
              onCompleteOut = type;
              onProgressOut = null;
              typeOut = null;
            }

            if (onProgress !== undefined && !isValidType) {
              onProgressOut = type;
              typeOut = null;
            }
          }

          let finalComplete = (error, resource, urls) => {
            if (this.resLeakChecker) {
              if (resource instanceof Array) {
                resource.forEach(element => {
                  this.resLeakChecker.traceAsset(element);
                });
              } else {
                this.resLeakChecker.traceAsset(resource);
              }
            }

            if (onCompleteOut) {
              onCompleteOut(error, resource, urls);
            }
          };

          return {
            paths: pathsOut,
            type: typeOut,
            onProgress: onProgressOut,
            onComplete: finalComplete
          };
        }

        loadByBundleAndArgs(bundle, args) {
          if (args.dir) {
            bundle.loadDir(args.paths, args.type, args.onProgress, args.onComplete);
          } else {
            if (typeof args.paths == 'string') {
              bundle.load(args.paths, args.type, args.onProgress, args.onComplete);
            } else {
              bundle.load(args.paths, args.type, args.onProgress, args.onComplete);
            }
          }
        }

        loadByArgs(args) {
          if (args.bundle) {
            if (assetManager.bundles.has(args.bundle)) {
              let bundle = assetManager.bundles.get(args.bundle);
              this.loadByBundleAndArgs(bundle, args);
            } else {
              // 自动加载bundle
              assetManager.loadBundle(args.bundle, (err, bundle) => {
                if (!err) {
                  this.loadByBundleAndArgs(bundle, args);
                }
              });
            }
          } else {
            this.loadByBundleAndArgs(resources, args);
          }
        }

        load(bundleName, paths, type, onProgress, onComplete) {
          let args;

          if (typeof paths === "string" || paths instanceof Array) {
            args = this.parseLoadResArgs(paths, type, onProgress, onComplete);
            args.bundle = bundleName;
          } else {
            args = this.parseLoadResArgs(bundleName, paths, type, onProgress);
          }

          this.loadByArgs(args);
        }

        loadDir(bundleName, dir, type, onProgress, onComplete) {
          let args;

          if (typeof dir === "string") {
            args = this.parseLoadResArgs(dir, type, onProgress, onComplete);
            args.bundle = bundleName;
          } else {
            args = this.parseLoadResArgs(bundleName, dir, type, onProgress);
          }

          args.dir = args.paths;
          this.loadByArgs(args);
        }

        loadRemote(url, options, onComplete) {
          assetManager.loadRemote(url, options, onComplete);
        }
        /**
         * @description 同步调用
         */


        async asyncLoad(bundleName, paths, type) {
          try {
            const result = await new Promise((resolve, reject) => {
              resLoader.load(bundleName, paths, type, (err, data) => {
                if (err) {
                  throw err;
                }

                resolve(data);
              });
              return result;
            });
            return [null, null];
          } catch (err) {
            return [null, err];
          }
        }

      });

      _export("resLoader", resLoader = new ResLoader());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fbccd8ce833d39ad10d1ee4fc8342709c64f01fb.js.map