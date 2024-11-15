System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, Font, ImageAsset, JsonAsset, Material, Prefab, Sprite, SpriteFrame, Texture2D, oops, BundleConfig, BundleManager, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBundleConfig(extras) {
    _reporterNs.report("BundleConfig", "./BundleConfig", _context.meta, extras);
  }

  _export("BundleManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioClip = _cc.AudioClip;
      Font = _cc.Font;
      ImageAsset = _cc.ImageAsset;
      JsonAsset = _cc.JsonAsset;
      Material = _cc.Material;
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      BundleConfig = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d46905zQENHvJohGZ5N1hzW", "BundleManager", undefined);

      __checkObsolete__(['Asset', 'AudioClip', 'Font', 'ImageAsset', 'JsonAsset', 'Material', 'Prefab', 'Sprite', 'SpriteFrame', 'Texture2D']);

      /** 资源模块化工具 */
      _export("BundleManager", BundleManager = class BundleManager {
        /**
         * 根据资源类型获得对应文件
         * @param assetType 资源类型
         */
        static getAssetUrl(assetType) {
          var typeUrl = "";

          switch (assetType) {
            case Prefab:
              typeUrl = "prefab";
              break;

            case Material:
              typeUrl = "shader";
              break;

            case AudioClip:
              typeUrl = "sound";
              break;

            case ImageAsset:
            case Texture2D:
            case Sprite:
            case SpriteFrame:
              typeUrl = "texture";
              break;

            case JsonAsset:
              typeUrl = "data";
              break;

            case Font:
              typeUrl = "font";
              break;

            default:
              console.error("没有该资源类型", assetType);
              break;
          }

          return typeUrl;
        }
        /**
         * 加载指定类型资源
         * @param bundleName 外部资源包名
         * @param assetName  目标加载资源名
         */


        static loadAsset(bundleName, assetName, assetType) {
          var str = this.getAssetUrl(assetType); // @ts-ignore

          var url = (_crd && BundleConfig === void 0 ? (_reportPossibleCrUseOfBundleConfig({
            error: Error()
          }), BundleConfig) : BundleConfig).instance.BundleName[bundleName][str][assetName]; // 兼容3.x ,加载 SpriteFrame 路径需要添加后缀

          if (assetType === SpriteFrame) {
            url += "/spriteFrame";
          } else if (assetType === Texture2D) {
            url += "/texture";
          }

          return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve, reject) {
            // @ts-ignore
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.load(bundleName, url, (err, res) => {
              if (!err) {
                // 加载成功
                resolve(res);
              } else {
                //加载失败
                reject(err);
                console.error("\u5916\u90E8\u8D44\u6E90\u5305" + bundleName + "\uFF0C\u8DEF\u5F84" + url + ",\u52A0\u8F7D\u5931\u8D25", err);
              }
            });
          }));
        }
        /**
         * 加载预制体
         * @param bundleName ab包名（模块名）
         * @param assetName 资源名
         */


        static loadPrefab(bundleName, assetName) {
          return this.loadAsset(bundleName, assetName, Prefab);
        }
        /**
         * 加载音频
         * @param bundleName ab包名（模块名）
         * @param assetName 资源名
         */


        static loadAudio(bundleName, assetName) {
          return this.loadAsset(bundleName, assetName, AudioClip);
        }
        /**
         * 加载图片
         * @param bundleName ab包名（模块名）
         * @param assetName 资源名
         */


        static loadTextre(bundleName, assetName) {
          return this.loadAsset(bundleName, assetName, SpriteFrame);
        }
        /**
         * 通过资源相对路径释放资源
         * @param bundleName     ab包名（模块名）
         * @param assetName      资源名
         */


        static release(bundleName, assetName, assetType) {
          var str = this.getAssetUrl(assetType); // @ts-ignore

          var url = (_crd && BundleConfig === void 0 ? (_reportPossibleCrUseOfBundleConfig({
            error: Error()
          }), BundleConfig) : BundleConfig).BundleName[bundleName][str][assetName]; // 兼容3.x ,加载 SpriteFrame 路径需要添加后缀

          if (assetType === SpriteFrame) {
            url += "/spriteFrame";
          } else if (assetType === Texture2D) {
            url += "/texture";
          }

          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.release(url, bundleName);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f321ae18e92defe8ea747ebcc532c0802a2c9323.js.map