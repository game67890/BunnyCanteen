System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Asset, assetManager, js, resources, ResLoader, _crd, resLoader;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
          var pathsOut = paths;
          var typeOut = type;
          var onProgressOut = onProgress;
          var onCompleteOut = onComplete;

          if (onComplete === undefined) {
            var isValidType = js.isChildClassOf(type, Asset);

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

          var finalComplete = (error, resource, urls) => {
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
              var bundle = assetManager.bundles.get(args.bundle);
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
          var args;

          if (typeof paths === "string" || paths instanceof Array) {
            args = this.parseLoadResArgs(paths, type, onProgress, onComplete);
            args.bundle = bundleName;
          } else {
            args = this.parseLoadResArgs(bundleName, paths, type, onProgress);
          }

          this.loadByArgs(args);
        }

        loadDir(bundleName, dir, type, onProgress, onComplete) {
          var args;

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


        asyncLoad(bundleName, paths, type) {
          return _asyncToGenerator(function* () {
            try {
              var result = yield new Promise((resolve, reject) => {
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
          })();
        }

      });

      _export("resLoader", resLoader = new ResLoader());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fbccd8ce833d39ad10d1ee4fc8342709c64f01fb.js.map