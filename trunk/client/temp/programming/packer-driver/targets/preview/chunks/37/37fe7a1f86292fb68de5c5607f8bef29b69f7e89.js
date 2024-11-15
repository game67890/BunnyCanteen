System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, AudioSource, _decorator, error, oops, _dec, _class, _crd, ccclass, AudioEffect;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../Oops", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      _decorator = _cc._decorator;
      error = _cc.error;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e52d2ysY1BEbpcT2Cz0Wwss", "AudioEffect", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-09-01 18:00:28
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-02 10:22:36
       */


      __checkObsolete__(['AudioClip', 'AudioSource', '_decorator', 'error']);

      ({
        ccclass
      } = _decorator);
      /**
       * 注：用playOneShot播放的音乐效果，在播放期间暂时没办法即时关闭音乐
       */

      /** 资源加载记录 */

      /** 游戏音效 */
      _export("AudioEffect", AudioEffect = (_dec = ccclass('AudioEffect'), _dec(_class = class AudioEffect extends AudioSource {
        constructor() {
          super(...arguments);
          this.effects = new Map();
          this._progress = 0;
        }

        /** 获取音乐播放进度 */
        get progress() {
          if (this.duration > 0) this._progress = this.currentTime / this.duration;
          return this._progress;
        }
        /**
         * 设置音乐当前播放进度
         * @param value     进度百分比0到1之间
         */


        set progress(value) {
          this._progress = value;
          this.currentTime = value * this.duration;
        }
        /**
         * 加载音效并播放
         * @param url           音效资源地址
         * @param callback      资源加载完成并开始播放回调
         * @param bundleName    资源包名
         */


        load(url, volume, callback, bundleName) {
          if (bundleName == null) bundleName = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.defaultBundleName;
          this.volume = volume; // 资源播放音乐对象

          if (url instanceof AudioClip) {
            this.effects.set(url.uuid, {
              source: true,
              ac: url
            });
            this.playOneShot(url, this.volume);
            console.log("playeffect : ", url, " ", this.volume);
            callback && callback();
          } else {
            var key = bundleName + ":" + url; // 地址加载音乐资源后播放

            if (!this.effects.has(key)) {
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).res.load(bundleName, url, AudioClip, (err, data) => {
                if (err) {
                  error(err);
                  return;
                }

                this.effects.set(key, {
                  source: false,
                  bundle: bundleName,
                  path: url,
                  ac: data
                });
                this.playOneShot(data, this.volume);
                console.log("playeffect : ", url, " ", this.volume);
                callback && callback();
              });
            } // 播放缓存中音效
            else {
              var rr = this.effects.get(key);
              this.playOneShot(rr.ac, this.volume);
              console.log("playeffect : ", url, " ", this.volume);
              callback && callback();
            }
          }
        }
        /** 释放所有已使用过的音效资源 */


        releaseAll() {
          for (var key in this.effects) {
            var rr = this.effects.get(key);

            if (rr.source) {
              this.release(rr.ac);
            } else {
              this.release(rr.path, rr.bundle);
            }
          }

          this.effects.clear();
        }
        /**
         * 释放指定地址音效资源
         * @param url           音效资源地址
         * @param bundleName    资源所在包名
         */


        release(url, bundleName) {
          if (bundleName == null) bundleName = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.defaultBundleName;
          var ac = undefined;

          if (url instanceof AudioClip) {
            ac = url;

            if (this.effects.has(ac.uuid)) {
              this.effects.delete(ac.uuid);
              ac.decRef();
            }
          } else {
            var key = bundleName + ":" + url;
            var rr = this.effects.get(key);

            if (rr) {
              this.effects.delete(key);
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).res.release(rr.path, rr.bundle);
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=37fe7a1f86292fb68de5c5607f8bef29b69f7e89.js.map