System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, error, Node, AudioClip, AudioSource, Singleton, resLoader, GameAudioManager, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "./singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "./res/res_loader", _context.meta, extras);
  }

  _export("GameAudioManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
      error = _cc.error;
      Node = _cc.Node;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }, function (_unresolved_3) {
      resLoader = _unresolved_3.resLoader;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f4a45qs40ZA1rXo6PUGTyDQ", "audio_manager", undefined);

      __checkObsolete__(['director', 'error', 'Node', 'AudioClip', 'AudioSource']);

      _export("GameAudioManager", GameAudioManager = class GameAudioManager extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton)() {
        constructor() {
          super();
          this._audioSource = null;
          this._loop = true;
          this._volume = 1;
          this._bgmAudioID = -1;
          this._musicPlayCallback = new Map();
          this._effectPlayCallback = new Map();
          var audioMgr = new Node();
          audioMgr.name = '__audioMgr__'; // director.getScene().addChild(audioMgr);

          director.addPersistRootNode(audioMgr);
          this._audioSource = audioMgr.addComponent(AudioSource);
        }

        get audioSource() {
          return this._audioSource;
        }

        setVolume(volume) {
          this._volume = volume;
          this._audioSource.volume = volume;
        }

        setLoop(loop) {
          this._loop = loop;
          this._audioSource.loop = loop;
        }
        /**
         * 播放背景音乐
         * @param sound 声音源
         * @param volume 音量
         * @param bundleName
         */


        playMusic(sound, volume, bundleName) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (volume === void 0) {
              volume = 1;
            }

            if (bundleName === void 0) {
              bundleName = 'resources';
            }

            _this.stop();

            yield _this.play(sound, {
              volume: volume,
              bundle: bundleName
            });
          })();
        }
        /**
         * 播放音效
         * @param sound 声音源
         * @param volume 音量
         * @param bundleName
         */


        playAudio(sound, volume, bundleName) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (volume === void 0) {
              volume = 1;
            }

            if (bundleName === void 0) {
              bundleName = 'resources';
            }

            yield _this2.playOneShot(sound, volume, bundleName);
          })();
        }
        /**
         * @en
         * play short audio, such as strikes,explosions
         * @zh
         * 播放短音频,比如 打击音效，爆炸音效等
         * @param sound clip or url for the audio
         * @param volume 音量
         * @param bundleName
         */


        playOneShot(sound, volume, bundleName) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (bundleName === void 0) {
              bundleName = 'resources';
            }

            if (sound instanceof AudioClip) {} else {
              var [clip, err] = yield (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                error: Error()
              }), resLoader) : resLoader).asyncLoad(bundleName, sound, AudioClip);

              if (err) {
                error('create audio clip failed, err:' + err);
                return;
              }

              sound = clip;
            }

            var volume_ = volume !== undefined ? volume : _this3._volume;

            _this3._audioSource.playOneShot(sound, volume_);
          })();
        }
        /**
         * @en
         * play long audio, such as the bg music
         * @zh
         * 播放长音频，比如 背景音乐
         * @param sound clip or url for the sound
         * @param options
         * @param stopOther
         */


        play(sound, options, stopOther) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            if (stopOther === void 0) {
              stopOther = true;
            }

            if (sound instanceof AudioClip) {
              _this4._audioSource.clip = sound;
            } else {
              var [clip, err] = yield (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                error: Error()
              }), resLoader) : resLoader).asyncLoad(options.bundle || 'resources', sound, AudioClip);

              if (err) {
                error('create audio clip failed, err:' + err);
                return;
              }

              _this4._audioSource.clip = clip;
            }

            var volume = options && options.volume !== undefined ? options.volume : _this4._volume;
            var loop = options && options.loop !== undefined ? options.loop : _this4._loop;
            _this4._audioSource.volume = volume;
            _this4._audioSource.loop = loop;

            _this4._audioSource.play();
          })();
        }
        /**
         * stop the audio play
         */


        stop() {
          this._audioSource.stop();
        }
        /**
         * pause the audio play
         */


        pause() {
          this._audioSource.pause();
        }
        /**
         * resume the audio play
         */


        resume() {
          this._audioSource.play();
        }

        onEnable() {
          // Register the started event callback
          this.audioSource.node.on(AudioSource.EventType.STARTED, this.onAudioStarted, this); // Register the ended event callback

          this.audioSource.node.on(AudioSource.EventType.ENDED, this.onAudioEnded, this);
        }

        onDisable() {
          this.audioSource.node.off(AudioSource.EventType.STARTED, this.onAudioStarted, this);
          this.audioSource.node.off(AudioSource.EventType.ENDED, this.onAudioEnded, this);
        }

        onAudioStarted() {// TODO...
        }

        onAudioEnded() {// TODO...
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=15e174c67a0ee9a90a45be33cac7448843e43b92.js.map