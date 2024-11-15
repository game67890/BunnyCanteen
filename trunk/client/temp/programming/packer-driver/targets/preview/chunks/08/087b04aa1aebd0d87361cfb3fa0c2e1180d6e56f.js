System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, AudioSource, _decorator, oops, resources, TonGameMgr, _dec, _class, _crd, ccclass, menu, AudioMusic;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonGameMgr(extras) {
    _reporterNs.report("TonGameMgr", "../../../../../../assets/scripts/tongame/manager/TonGameManager", _context.meta, extras);
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
      resources = _cc.resources;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      TonGameMgr = _unresolved_3.TonGameMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5c1f3kqGetBiIv48/CvuaQv", "AudioMusic", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-06-21 12:05:13
       * @LastEditors: dgflash
       * @LastEditTime: 2023-05-16 09:11:30
       */


      __checkObsolete__(['AudioClip', 'AudioSource', '_decorator']);

      __checkObsolete__(['resources']);

      ({
        ccclass,
        menu
      } = _decorator);
      /** 
       * 背景音乐 
       * 1、播放一个新背景音乐时，先加载音乐资源，然后停止正在播放的背景资源同时施放当前背景音乐资源，最后播放新的背景音乐
       */

      _export("AudioMusic", AudioMusic = (_dec = ccclass('AudioMusic'), _dec(_class = class AudioMusic extends AudioSource {
        constructor() {
          super(...arguments);
          this.musics = new Map();

          /** 背景音乐播放完成回调 */
          this.onComplete = null;
          this._progress = 0;
          this._isLoading = false;
          this._bundleName = null;
          // 当前音乐资源包
          this._url = null;
          // 当前播放音乐
          this._bundleName_next = null;
          // 下一个音乐资源包
          this._url_next = null;
        }

        // 下一个播放音乐

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
         * 加载音乐并播放
         * @param url          音乐资源地址
         * @param callback     加载完成回调
         * @param bundleName   资源包名
         */


        load(url, callback, bundleName) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (bundleName == null) bundleName = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.defaultBundleName; // 下一个加载的背景音乐资源

            if (_this._isLoading) {
              _this._bundleName_next = bundleName;
              _this._url_next = url;
              return;
            }

            _this._isLoading = true;
            var data = yield (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.loadAsync(bundleName, url, AudioClip);

            if (data) {
              _this._isLoading = false; // 处理等待加载的背景音乐

              if (_this._url_next != null) {
                // 删除之前加载的音乐资源
                _this.release(); // 加载等待播放的背景音乐


                _this.load(_this._url_next, callback, _this._bundleName_next);

                _this._bundleName_next = _this._url_next = null;
              } else {
                callback && callback();

                _this.playPrepare(bundleName, url, data);
              }
            }
          })();
        }

        load_1(url, isLoop) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (isLoop === void 0) {
              isLoop = true;
            }

            var bundleName = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.defaultBundleName;
            var key = bundleName + ":" + url;

            var call = clip => {
              _this2.stop();

              _this2.clip = null;
              _this2.clip = clip;
              _this2.loop = isLoop;

              if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).IsMute == false) {
                _this2.play();

                if (!_this2.musics.has(key)) {
                  _this2.musics.set(key, clip);
                }
              }
            }; //查找到对应音频则直接获取


            if (_this2.musics.has(key)) {
              var clip = _this2.musics.get(key);

              call(clip);
            } else {
              //查找不到则加载资源
              resources.load(url, AudioClip, (err, clip) => {
                if (err) {
                  console.error("loadAudioClip" + err);
                } else {
                  call(clip);
                }
              });
            }
          })();
        }

        playPrepare(bundleName, url, data) {
          // 正在播放的时候先关闭
          if (this.playing) {
            this.stop();
            console.log("stopmusic : ");
          } // 删除当前正在播放的音乐


          this.release(); // 播放背景音乐

          this.enabled = true;
          this.clip = data;
          this.play();
          console.log("playmusic : ", url); // 记录新的资源包与资源名数据

          this._bundleName = bundleName;
          this._url = url;
        }
        /** cc.Component 生命周期方法，验证背景音乐播放完成逻辑，建议不要主动调用 */


        update(dt) {
          // 背景资源播放完成事件
          if (this.playing == false && this.progress == 0) {
            this.enabled = false;
            this.clip = null;
            this._bundleName = this._url = null;
            this.onComplete && this.onComplete();
          }
        }
        /** 释放当前背景音乐资源 */


        release() {
          if (this._url) {
            this.stop();
            this.clip = null;
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.release(this._url, this._bundleName);
          }

          this._bundleName = this._url = null;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=087b04aa1aebd0d87361cfb3fa0c2e1180d6e56f.js.map