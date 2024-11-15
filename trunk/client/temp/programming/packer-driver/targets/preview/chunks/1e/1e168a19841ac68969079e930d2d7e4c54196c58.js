System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, DynamicAtlasManager, _decorator, macro, profiler, DEBUG, JSB, oops, Root, ecs, UIConfigData, smc, EcsPositionSystem, Initialize, _dec, _class, _crd, ccclass, property, Main;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoot(extras) {
    _reporterNs.report("Root", "../../../extensions/oops-plugin-framework/assets/core/Root", _context.meta, extras);
  }

  function _reportPossibleCrUseOfecs(extras) {
    _reporterNs.report("ecs", "../../../extensions/oops-plugin-framework/assets/libs/ecs/ECS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfigData(extras) {
    _reporterNs.report("UIConfigData", "./common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsmc(extras) {
    _reporterNs.report("smc", "./common/ecs/SingletonModuleComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEcsPositionSystem(extras) {
    _reporterNs.report("EcsPositionSystem", "./common/ecs/position/EcsPositionSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitialize(extras) {
    _reporterNs.report("Initialize", "./initialize/Initialize", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      DynamicAtlasManager = _cc.DynamicAtlasManager;
      _decorator = _cc._decorator;
      macro = _cc.macro;
      profiler = _cc.profiler;
    }, function (_ccEnv) {
      DEBUG = _ccEnv.DEBUG;
      JSB = _ccEnv.JSB;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      Root = _unresolved_3.Root;
    }, function (_unresolved_4) {
      ecs = _unresolved_4.ecs;
    }, function (_unresolved_5) {
      UIConfigData = _unresolved_5.UIConfigData;
    }, function (_unresolved_6) {
      smc = _unresolved_6.smc;
    }, function (_unresolved_7) {
      EcsPositionSystem = _unresolved_7.EcsPositionSystem;
    }, function (_unresolved_8) {
      Initialize = _unresolved_8.Initialize;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f5b58XNkF9K37ul9Gp+79IK", "Main", undefined);

      __checkObsolete__(['DynamicAtlasManager', '_decorator', 'macro', 'profiler']);

      ({
        ccclass,
        property
      } = _decorator);
      macro.CLEANUP_IMAGE_CACHE = false;
      DynamicAtlasManager.instance.enabled = true;
      DynamicAtlasManager.instance.maxFrameSize = 512;

      _export("Main", Main = (_dec = ccclass('Main'), _dec(_class = class Main extends (_crd && Root === void 0 ? (_reportPossibleCrUseOfRoot({
        error: Error()
      }), Root) : Root) {
        start() {
          if (DEBUG) profiler.showStats();
        }

        run() {
          (_crd && smc === void 0 ? (_reportPossibleCrUseOfsmc({
            error: Error()
          }), smc) : smc).initialize = (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
            error: Error()
          }), ecs) : ecs).getEntity(_crd && Initialize === void 0 ? (_reportPossibleCrUseOfInitialize({
            error: Error()
          }), Initialize) : Initialize);

          if (JSB) {
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.toast("热更新后新程序的提示");
          }
        }

        initGui() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.init(_crd && UIConfigData === void 0 ? (_reportPossibleCrUseOfUIConfigData({
            error: Error()
          }), UIConfigData) : UIConfigData);
        }

        initEcsSystem() {
          return _asyncToGenerator(function* () {
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).ecs.add(new (_crd && EcsPositionSystem === void 0 ? (_reportPossibleCrUseOfEcsPositionSystem({
              error: Error()
            }), EcsPositionSystem) : EcsPositionSystem)()); // oops.ecs.add(new EcsAccountSystem());
            // oops.ecs.add(new EcsRoleSystem());
            // oops.ecs.add(new EcsInitializeSystem());
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1e168a19841ac68969079e930d2d7e4c54196c58.js.map