System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Asset, Director, director, log, assetManager, EDITOR, ResKeeper, AssetManagerEx, _crd, assetManagerEx;

  function _reportPossibleCrUseOfResKeeper(extras) {
    _reporterNs.report("ResKeeper", "./res_keeper", _context.meta, extras);
  }

  _export("AssetManagerEx", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Asset = _cc.Asset;
      Director = _cc.Director;
      director = _cc.director;
      log = _cc.log;
      assetManager = _cc.assetManager;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      ResKeeper = _unresolved_2.ResKeeper;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99199BU/vRHuorO2q4EuO0d", "asset_manager", undefined);

      __checkObsolete__(['Asset', 'Director', 'Scene', 'director', 'log', 'assetManager']);

      _export("AssetManagerEx", AssetManagerEx = class AssetManagerEx {
        /**
         * 获取当前场景的持久节点应用的资源
         */
        getPersistDepends() {
          // director.addPersistRootNode()
          // const persistNodeList = Object.keys(game._persistRootNodes).map(function (x) {
          //     return game._persistRootNodes[x];
          // });
          // return ResUtil.getNodesDepends(persistNodeList);
          return null;
        }
        /**
         * 处理场景切换，分两种情况，一种为根据scene的uuid找到场景的资源，另外一种为根据scene.dependAssets进行缓存
         * @param scene
         */


        onSceneChange(scene) {
          console.log('On Scene Change');
          return;
        } // 为Asset注入引用计数的功能


        static assetInit() {
          console.log('asset init');

          if (!Object.getOwnPropertyDescriptor(Asset.prototype, 'addRef')) {
            Object.defineProperties(Asset.prototype, {
              refDepends: {
                configurable: true,
                writable: true,
                enumerable: false,
                value: false
              },
              refCount: {
                configurable: true,
                writable: true,
                enumerable: false,
                value: 0
              },
              addRef: {
                configurable: true,
                writable: true,
                value: function value() {
                  ++this.refCount;
                  return this;
                }
              },
              decRef: {
                configurable: true,
                writable: true,
                value: function value(autoRelease) {
                  if (autoRelease === void 0) {
                    autoRelease = true;
                  }

                  --this.refCount;

                  if (this.refCount <= 0 && autoRelease) {
                    AssetManagerEx.Instance.releaseAsset(this, false);
                  }

                  return this;
                }
              }
            });
          }
        }

        constructor() {
          this.defaultKeeper = new (_crd && ResKeeper === void 0 ? (_reportPossibleCrUseOfResKeeper({
            error: Error()
          }), ResKeeper) : ResKeeper)();
          this.persistDepends = new Set();
          this.sceneDepends = null;
          this.lastScene = null;

          if (EDITOR) {
            return;
          } // game.once(game.EngineInitedEvent, AssetManagerEx.assetInit);


          director.on(Director.EVENT_BEFORE_SCENE_LAUNCH, scene => {
            this.onSceneChange(scene);
          });
        }

        static get Instance() {
          if (!this.instance) {
            this.instance = new AssetManagerEx();
          }

          return this.instance;
        }

        getKeeper() {
          return this.defaultKeeper;
        }

        getReferenceKey(assetOrUrlOrUuid) {
          if (assetOrUrlOrUuid instanceof Asset && !assetOrUrlOrUuid.uuid) {
            // 远程资源没有_uuid
            if (assetOrUrlOrUuid.nativeUrl) {
              return assetOrUrlOrUuid.nativeUrl;
            }
          } // return loader._getReferenceKey(assetOrUrlOrUuid);

        }
        /**
         * 缓存一个资源
         * @param item 资源的item对象
         * @param add
         */


        cacheItem(item, add) {
          if (add === void 0) {
            add = false;
          }

          if (item) {
            var asset = item.content;

            if (asset instanceof Asset) {
              if (add) {
                asset.addRef();
              }

              if (!asset._nativeDep && item.dependKeys) {
                var depends = item.dependKeys;

                for (var i = 0; i < depends.length; i++) {
                  this.cacheItem(assetManager.dependUtil.getDeps(depends[i]), true);
                } //asset.refDepends = true;

              }
            } else {
              // 原生资源、html元素有可能走到这里，原生资源都是有对应的Asset对应引用的，所以这里可以不处理
              console.log("cacheItem " + item + " is not Asset " + asset);
            }
          } else {
            console.warn("cacheItem error, item is " + item);
          }
        }

        cacheAsset(assetOrUrlOrUuid, add) {
          if (add === void 0) {
            add = false;
          }

          var key = this.getReferenceKey(assetOrUrlOrUuid);

          if (key) {
            var item = assetManagerEx.getReferenceKey(key);

            if (item) {
              this.cacheItem(item, add);
            } else {
              console.warn("cacheAsset error, loader.getItem " + key + " is " + item);
            }
          } else {
            console.warn("cacheAsset error, this.getReferenceKey " + assetOrUrlOrUuid + " return " + key);
          }
        }
        /**
         * 释放一个资源
         * @param item 资源的item对象
         * @param dec
         */


        releaseItem(item, dec) {
          if (dec === void 0) {
            dec = false;
          }

          if (item && item.content) {
            var asset = item.content;
            var res = item.uuid || item.id;

            if (asset instanceof Asset) {
              if (dec) {
                asset.decRef(false);
              }

              if (asset.refCount <= 0) {
                var depends = item.dependKeys;

                if (depends) {
                  for (var i = 0; i < depends.length; i++) {
                    this.releaseItem(assetManager.dependUtil.getDeps(depends[i]), true);
                  }
                }

                assetManager.releaseAsset(res);
                log("assetManager.releaseAsset Asset " + res);
              }
            } else {
              assetManager.releaseAsset(res);
              log("assetManager.releaseAsset " + res + " rawAsset " + asset);
            }
          } else {
            console.warn("releaseItem error, item is " + item);
          }
        }
        /**
         * 释放一个资源（会减少其引用计数）
         * @param assetOrUrlOrUuid
         * @param dec
         */


        releaseAsset(assetOrUrlOrUuid, dec) {
          if (dec === void 0) {
            dec = false;
          }

          var key = this.getReferenceKey(assetOrUrlOrUuid);

          if (key) {
            var item = assetManager.dependUtil.getDeps(key);

            if (item) {
              this.releaseItem(item, dec);
            } else {
              console.warn("releaseAsset error, loader.getItem " + key + " is " + item);
            }
          } else {
            console.warn("releaseAsset error, this.getReferenceKey " + assetOrUrlOrUuid + " return " + key);
          }
        }

      });

      AssetManagerEx.instance = void 0;

      _export("assetManagerEx", assetManagerEx = AssetManagerEx.Instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=54e54758de8c931d908f681cca35d65e59a66e39.js.map