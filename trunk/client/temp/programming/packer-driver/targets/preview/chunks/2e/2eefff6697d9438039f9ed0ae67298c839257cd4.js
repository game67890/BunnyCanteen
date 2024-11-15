System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DEBUG, EffectSingleCase, ecs, LanguageManager, VM, HttpRequest, NetManager, Config, Logger, RandomManager, oops, _crd, version;

  function _reportPossibleCrUseOfEffectSingleCase(extras) {
    _reporterNs.report("EffectSingleCase", "../libs/animator-effect/EffectSingleCase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfecs(extras) {
    _reporterNs.report("ecs", "../libs/ecs/ECS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfECSRootSystem(extras) {
    _reporterNs.report("ECSRootSystem", "../libs/ecs/ECSSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLanguageManager(extras) {
    _reporterNs.report("LanguageManager", "../libs/gui/language/Language", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVM(extras) {
    _reporterNs.report("VM", "../libs/model-view/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpRequest(extras) {
    _reporterNs.report("HttpRequest", "../libs/network/HttpRequest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetManager(extras) {
    _reporterNs.report("NetManager", "../libs/network/NetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConfig(extras) {
    _reporterNs.report("Config", "../module/config/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./common/audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageManager(extras) {
    _reporterNs.report("MessageManager", "./common/event/MessageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResLoader(extras) {
    _reporterNs.report("ResLoader", "./common/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "./common/log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRandomManager(extras) {
    _reporterNs.report("RandomManager", "./common/random/RandomManager", _context.meta, extras);
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

  _export("oops", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_ccEnv) {
      DEBUG = _ccEnv.DEBUG;
    }, function (_unresolved_2) {
      EffectSingleCase = _unresolved_2.EffectSingleCase;
    }, function (_unresolved_3) {
      ecs = _unresolved_3.ecs;
    }, function (_unresolved_4) {
      LanguageManager = _unresolved_4.LanguageManager;
    }, function (_unresolved_5) {
      VM = _unresolved_5.VM;
    }, function (_unresolved_6) {
      HttpRequest = _unresolved_6.HttpRequest;
    }, function (_unresolved_7) {
      NetManager = _unresolved_7.NetManager;
    }, function (_unresolved_8) {
      Config = _unresolved_8.Config;
    }, function (_unresolved_9) {
      Logger = _unresolved_9.Logger;
    }, function (_unresolved_10) {
      RandomManager = _unresolved_10.RandomManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cbae5wzfSZGzZMuyeAetSfg", "Oops", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-02-11 09:32:47
       * @LastEditors: dgflash
       * @LastEditTime: 2023-08-21 15:19:56
       */


      /** 框架版本号 */
      _export("version", version = "1.2.2");
      /** 框架核心模块访问入口 */


      _export("oops", oops = class oops {}); // 引入oops全局变量以方便调试


      /** ----------核心模块---------- */

      /** 日志管理 */
      oops.log = _crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
        error: Error()
      }), Logger) : Logger;

      /** 游戏配置 */
      oops.config = new (_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
        error: Error()
      }), Config) : Config)();

      /** 本地存储 */
      oops.storage = void 0;

      /** 资源管理 */
      oops.res = void 0;

      /** 全局消息 */
      oops.message = void 0;

      /** 随机工具 */
      oops.random = (_crd && RandomManager === void 0 ? (_reportPossibleCrUseOfRandomManager({
        error: Error()
      }), RandomManager) : RandomManager).instance;

      /** 游戏时间管理 */
      oops.timer = void 0;

      /** 游戏音乐管理 */
      oops.audio = void 0;

      /** 二维界面管理 */
      oops.gui = void 0;

      /** 三维游戏世界管理 */
      oops.game = void 0;

      /** ----------可选模块---------- */

      /** 多语言模块 */
      oops.language = new (_crd && LanguageManager === void 0 ? (_reportPossibleCrUseOfLanguageManager({
        error: Error()
      }), LanguageManager) : LanguageManager)();

      /** HTTP */
      oops.http = new (_crd && HttpRequest === void 0 ? (_reportPossibleCrUseOfHttpRequest({
        error: Error()
      }), HttpRequest) : HttpRequest)();
      // 使用流程文档可参考、简化与服务器对接、使用新版API体验，可进入下面地址获取新版本，替换network目录中的内容(https://store.cocos.com/app/detail/5877)

      /** WebSocket */
      oops.tcp = new (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
        error: Error()
      }), NetManager) : NetManager)();
      // 使用流程文档可参考、简化与服务器对接、使用新版API体验，可进入下面地址获取新版本，替换network目录中的内容(https://store.cocos.com/app/detail/5877)

      /** ECS */
      oops.ecs = new (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).RootSystem();

      /** MVVM */
      oops.mvvm = _crd && VM === void 0 ? (_reportPossibleCrUseOfVM({
        error: Error()
      }), VM) : VM;

      /** 对象池 */
      oops.pool = (_crd && EffectSingleCase === void 0 ? (_reportPossibleCrUseOfEffectSingleCase({
        error: Error()
      }), EffectSingleCase) : EffectSingleCase).instance;

      if (DEBUG) {
        //@ts-ignore
        window.oops = oops;
      }

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2eefff6697d9438039f9ed0ae67298c839257cd4.js.map