System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, SpriteFrame, error, GameUtils, ImageCache, _crd;

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../utils/utils", _context.meta, extras);
  }

  _export("ImageCache", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      SpriteFrame = _cc.SpriteFrame;
      error = _cc.error;
    }, function (_unresolved_2) {
      GameUtils = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "906b0W+s4ZMjqILFlIfjT6S", "image_cache", undefined);

      __checkObsolete__(['Component', 'SpriteFrame', 'error']);

      _export("ImageCache", ImageCache = class ImageCache extends Component {
        constructor(...args) {
          super(...args);
          this._imgMap = void 0;
          // 图片缓存
          this._imgLoadingList = void 0;
          // 要加载的图片列表
          this._loadImgDuration = 1;
          // 帧内加载最大时长
          this._imgLoading = false;
          // 图片列表是否在加载中
          this._cacheImage = true;
        }

        // 缓存加载的图片
        set cacheImage(value) {
          this._cacheImage = value;
        }
        /**
         * 获取缓存图片
         * @param {String} key
         * @returns {SpriteFrame} 纹理
         */


        getImage(key) {
          return this._imgMap.get(key);
        }

        clear() {
          this._imgMap && this._imgMap.clear();
          this._imgMap = null;
        }
        /**
         * 添加并等待加载图片
         * @param {String} uri 加载图片地址
         * @param {Function} callback  加载完成回调方法
         */


        loadImage(uri, callback) {
          let list = this._imgLoadingList;
          let imgMap = this._imgMap;

          if (!list) {
            list = this._imgLoadingList = [];
            imgMap = this._imgMap = new Map();
          }

          if (this._cacheImage) {
            const frame = imgMap.get(uri);

            if (frame && callback) {
              callback(frame, uri);
              return;
            }
          }

          list.push({
            uri: uri,
            cb: callback
          });

          if (!this._imgLoading) {
            this._imgLoading = true;
            this.loopLoadImage(list, this._loadImgDuration, imgMap);
          }
        }
        /**
         * 循环排队加载图片列表
         * @param {LoadTaskItemArray} list 要加载的图片列表 [{uri, cb, thisObj}]
         * @param {Number} duration 帧内加载最大时长
         * @param {Texture2DMap} imgMap 图片缓存map
         */


        loopLoadImage(list, duration, imgMap) {
          // 执行之前，先记录开始时间
          const startTime = new Date().getTime();

          while (list.length > 0) {
            let data = list.pop();
            this.loadSingleImage(data.uri, data.cb, imgMap); // 每执行完一段小代码段，都检查一下是否已经超过我们分配的本帧，这些小代码端的最大可执行时间

            if (new Date().getTime() - startTime > duration) {
              // 如果超过了，那么本帧就不在执行，开定时器，让下一帧再执行
              this.scheduleOnce(() => {
                this.loopLoadImage(list, duration, imgMap);
              });
              return;
            }
          }

          this._imgLoading = false;
        }
        /**
         * 加载单张图片
         * @param {String} uri 加载图片地址
         * @param {Function} callback  加载完成回调方法
         * @param {Texture2DMap} imgMap 图片缓存map
         */


        async loadSingleImage(uri, callback, imgMap) {
          const [texture, err] = await (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).asyncWrap((_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
            error: Error()
          }), GameUtils) : GameUtils).loadAsync(uri + '/spriteFrame', SpriteFrame));

          if (err) {
            error('create sprite frame failed, err:' + err);
            return false;
          }

          if (this._cacheImage) {
            imgMap.set(uri, texture);
          }

          if (callback) {
            callback(texture, uri);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=37b975ce737cd82796b7eb143acd728ac4bad8e4.js.map