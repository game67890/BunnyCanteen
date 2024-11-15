System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Game, game, JsonAsset, Node, screen, sys, GameConfig, GameQueryConfig, oops, version, AudioManager, EventMessage, message, resLoader, StorageManager, TimerManager, GameManager, LayerManager, _dec, _dec2, _class, _descriptor, _descriptor2, _crd, property, isInited, Root;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "../module/config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameQueryConfig(extras) {
    _reporterNs.report("GameQueryConfig", "../module/config/GameQueryConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "./Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfversion(extras) {
    _reporterNs.report("version", "./Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./common/audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMessage(extras) {
    _reporterNs.report("EventMessage", "./common/event/EventMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmessage(extras) {
    _reporterNs.report("message", "./common/event/MessageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "./common/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStorageManager(extras) {
    _reporterNs.report("StorageManager", "./common/storage/StorageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTimerManager(extras) {
    _reporterNs.report("TimerManager", "./common/timer/TimerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./game/GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerManager(extras) {
    _reporterNs.report("LayerManager", "./gui/layer/LayerManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      Game = _cc.Game;
      game = _cc.game;
      JsonAsset = _cc.JsonAsset;
      Node = _cc.Node;
      screen = _cc.screen;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      GameConfig = _unresolved_2.GameConfig;
    }, function (_unresolved_3) {
      GameQueryConfig = _unresolved_3.GameQueryConfig;
    }, function (_unresolved_4) {
      oops = _unresolved_4.oops;
      version = _unresolved_4.version;
    }, function (_unresolved_5) {
      AudioManager = _unresolved_5.AudioManager;
    }, function (_unresolved_6) {
      EventMessage = _unresolved_6.EventMessage;
    }, function (_unresolved_7) {
      message = _unresolved_7.message;
    }, function (_unresolved_8) {
      resLoader = _unresolved_8.resLoader;
    }, function (_unresolved_9) {
      StorageManager = _unresolved_9.StorageManager;
    }, function (_unresolved_10) {
      TimerManager = _unresolved_10.TimerManager;
    }, function (_unresolved_11) {
      GameManager = _unresolved_11.GameManager;
    }, function (_unresolved_12) {
      LayerManager = _unresolved_12.LayerManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "90b9cOmlmBCnpCpEpgvdrQr", "Root", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-07-03 16:13:17
       * @LastEditors: dgflash
       * @LastEditTime: 2023-08-28 10:02:57
       */


      __checkObsolete__(['_decorator', 'Component', 'director', 'Game', 'game', 'JsonAsset', 'Node', 'screen', 'sys']);

      ({
        property
      } = _decorator);
      isInited = false;
      /** 框架显示层根节点 */

      _export("Root", Root = (_dec = property({
        type: Node,
        tooltip: "游戏层"
      }), _dec2 = property({
        type: Node,
        tooltip: "界面层"
      }), (_class = class Root extends Component {
        constructor() {
          super(...arguments);

          /** 游戏层节点 */
          _initializerDefineProperty(this, "game", _descriptor, this);

          // 可使用多摄像机自定义二维或三维游戏场景

          /** 界面层节点 */
          _initializerDefineProperty(this, "gui", _descriptor2, this);

          /** 框架常驻节点 */
          this.persist = null;
        }

        onLoad() {
          if (!isInited) {
            isInited = true; // 注：这里是规避cc3.8在编辑器模式下运行时，关闭游戏会两次初始化报错

            console.log("Oops Framework v" + (_crd && version === void 0 ? (_reportPossibleCrUseOfversion({
              error: Error()
            }), version) : version));
            this.enabled = false;
            this.loadConfig().then();
          }
        }

        loadConfig() {
          var _this = this;

          return _asyncToGenerator(function* () {
            // 创建持久根节点
            _this.persist = new Node("OopsFrameworkPersistNode");
            director.addPersistRootNode(_this.persist); // 资源管理模块

            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res = _crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader;
            var config_name = "config";
            var config = yield (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.loadAsync(config_name, JsonAsset);

            if (config) {
              // oops.config.btc = new BuildTimeConstants();
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).config.query = new (_crd && GameQueryConfig === void 0 ? (_reportPossibleCrUseOfGameQueryConfig({
                error: Error()
              }), GameQueryConfig) : GameQueryConfig)();
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).config.game = new (_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
                error: Error()
              }), GameConfig) : GameConfig)(config); // 本地存储模块

              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).storage = new (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
                error: Error()
              }), StorageManager) : StorageManager)();
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).storage.init((_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).config.game.localDataKey, (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).config.game.localDataIv); // 初始化本地存储加密
              // 全局消息

              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).message = _crd && message === void 0 ? (_reportPossibleCrUseOfmessage({
                error: Error()
              }), message) : message; // 创建音频模块

              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).audio = _this.persist.addComponent(_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                error: Error()
              }), AudioManager) : AudioManager);
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).audio.load(); // 创建时间模块

              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).timer = _this.persist.addComponent(_crd && TimerManager === void 0 ? (_reportPossibleCrUseOfTimerManager({
                error: Error()
              }), TimerManager) : TimerManager); // 游戏场景管理

              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).game = new (_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
                error: Error()
              }), GameManager) : GameManager)(_this.game); // 游戏界面管理

              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).gui = new (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
                error: Error()
              }), LayerManager) : LayerManager)(_this.gui); // 网络模块

              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).http.server = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).config.game.httpServer; // Http 服务器地址

              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).http.timeout = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).config.game.httpTimeout; // Http 请求超时时间

              game.frameRate = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).config.game.frameRate; // 初始化每秒传输帧数

              _this.enabled = true;

              _this.init();

              _this.run();

              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).res.release(config_name);
            } else {
              _this.loadConfig().then();
            }
          })();
        }

        update(dt) {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).ecs.execute(dt);
        }
        /** 初始化游戏界面 */


        initGui() {}
        /** 初始化游戏业务模块 */


        initEcsSystem() {}
        /** 加载完引擎配置文件后执行 */


        run() {}

        init() {
          this.initGui();
          this.initEcsSystem();
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).ecs.init(); // 游戏显示事件

          game.on(Game.EVENT_SHOW, this.onShow, this); // 游戏隐藏事件

          game.on(Game.EVENT_HIDE, this.onHide, this); // 添加游戏界面屏幕自适应管理组件
          //this.gui.addComponent(GUI);
          // 游戏尺寸修改事件

          if (!sys.isMobile) {
            screen.on("window-resize", () => {
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).message.dispatchEvent((_crd && EventMessage === void 0 ? (_reportPossibleCrUseOfEventMessage({
                error: Error()
              }), EventMessage) : EventMessage).GAME_RESIZE);
            }, this);
            screen.on("fullscreen-change", () => {
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).message.dispatchEvent((_crd && EventMessage === void 0 ? (_reportPossibleCrUseOfEventMessage({
                error: Error()
              }), EventMessage) : EventMessage).GAME_FULL_SCREEN);
            }, this);
          }

          screen.on("orientation-change", () => {
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).message.dispatchEvent((_crd && EventMessage === void 0 ? (_reportPossibleCrUseOfEventMessage({
              error: Error()
            }), EventMessage) : EventMessage).GAME_ORIENTATION);
          }, this);
        }

        onShow() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).timer.load(); // 处理回到游戏时减去逝去时间

          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).audio.resumeAll(); // 恢复所有暂停的音乐播放

          director.resume(); // 恢复暂停场景的游戏逻辑，如果当前场景没有暂停将没任何事情发生

          game.resume(); // 恢复游戏主循环。包含：游戏逻辑，渲染，事件处理，背景音乐和所有音效

          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.dispatchEvent((_crd && EventMessage === void 0 ? (_reportPossibleCrUseOfEventMessage({
            error: Error()
          }), EventMessage) : EventMessage).GAME_SHOW);
        }

        onHide() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).timer.save(); // 处理切到后台后记录切出时间

          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).audio.pauseAll(); // 暂停所有音乐播放

          director.pause(); // 暂停正在运行的场景，该暂停只会停止游戏逻辑执行，但是不会停止渲染和 UI 响应。 如果想要更彻底得暂停游戏，包含渲染，音频和事件

          game.pause(); // 暂停游戏主循环。包含：游戏逻辑、渲染、输入事件派发（Web 和小游戏平台除外）

          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.dispatchEvent((_crd && EventMessage === void 0 ? (_reportPossibleCrUseOfEventMessage({
            error: Error()
          }), EventMessage) : EventMessage).GAME_HIDE);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "game", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "gui", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class)));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0a94cd8465c7a0335190a6fc5e189f421e6efa41.js.map