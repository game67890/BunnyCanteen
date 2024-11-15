System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, SpriteFrame, assetManager, Texture2D, ImageCache, _dec, _class, _crd, ccclass, property, RankImageCache;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfImageCache(extras) {
    _reporterNs.report("ImageCache", "../../../resources/libs/virtual_grid_list/image_cache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTexture2DMap(extras) {
    _reporterNs.report("Texture2DMap", "../../../resources/libs/virtual_grid_list/image_cache", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      SpriteFrame = _cc.SpriteFrame;
      assetManager = _cc.assetManager;
      Texture2D = _cc.Texture2D;
    }, function (_unresolved_2) {
      ImageCache = _unresolved_2.ImageCache;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1a6d1zFz7NC9IoynYWqIi42", "RankImageCache", undefined);

      __checkObsolete__(['_decorator', 'Component', 'SpriteFrame', 'error', 'assetManager', 'Sprite', 'Texture2D', 'ImageAsset']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RankImageCache", RankImageCache = (_dec = ccclass('RankImageCache'), _dec(_class = class RankImageCache extends (_crd && ImageCache === void 0 ? (_reportPossibleCrUseOfImageCache({
        error: Error()
      }), ImageCache) : ImageCache) {
        loadSingleImage(uri, callback, imgMap) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (uri) {
              assetManager.loadRemote(uri, (err, imageAsset) => {
                if (err) {
                  console.log("loadRemote err");
                  return;
                }

                console.log("loadRemote ok");
                var spriteFrame = new SpriteFrame();
                var texture = new Texture2D();
                texture.image = imageAsset;
                spriteFrame.texture = texture;

                if (_this._cacheImage) {
                  imgMap.set(uri, spriteFrame);
                }

                if (callback) {
                  callback(spriteFrame, uri);
                }

                return true;
              });
              return false;
            }

            return false;
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=452d9f5aa57912204a44f76c91297fb86dd76d99.js.map