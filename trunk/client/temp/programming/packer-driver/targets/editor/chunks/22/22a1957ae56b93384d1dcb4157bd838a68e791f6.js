System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, oops, ecs, GameEvent, AccountNetDataComp, AccountModelComp, _dec, _class, _crd, Account;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfecs(extras) {
    _reporterNs.report("ecs", "../../../../extensions/oops-plugin-framework/assets/libs/ecs/ECS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../common/config/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAccountNetDataComp(extras) {
    _reporterNs.report("AccountNetDataComp", "./bll/AccountNetData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAccountModelComp(extras) {
    _reporterNs.report("AccountModelComp", "./model/AccountModelComp", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      ecs = _unresolved_3.ecs;
    }, function (_unresolved_4) {
      GameEvent = _unresolved_4.GameEvent;
    }, function (_unresolved_5) {
      AccountNetDataComp = _unresolved_5.AccountNetDataComp;
    }, function (_unresolved_6) {
      AccountModelComp = _unresolved_6.AccountModelComp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "33c06qSPa9MRbTUOf1u+7SR", "Account", undefined);

      /**
       * 账号模块
       * 1、连接游戏服务器
       * 2、登录玩家帐号，获取玩家信息
       * 3、断线重连接
       */
      _export("Account", Account = (_dec = (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).register('Account'), _dec(_class = class Account extends (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).Entity {
        constructor(...args) {
          super(...args);
          this.AccountModel = void 0;
          this.AccountNetData = void 0;
        }

        init() {
          this.addComponents(_crd && AccountModelComp === void 0 ? (_reportPossibleCrUseOfAccountModelComp({
            error: Error()
          }), AccountModelComp) : AccountModelComp);
          this.addEvent();
        }

        destroy() {
          this.removeEvent();
          super.destroy();
        }
        /** 添加全局消息事件 */


        addEvent() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GameServerConnected, this.onHandler, this);
        }
        /** 移除全局消息事件 */


        removeEvent() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GameServerConnected, this.onHandler, this);
        }

        onHandler(event, args) {
          switch (event) {
            case (_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).GameServerConnected:
              this.getPlayer();
              break;
          }
        }
        /** 连接游戏服务器 */


        connect() {
          // netChannel.gameCreate();
          // netChannel.gameConnect();
          // 无网状态下测试代码，有网络时会通过触发网络连接成功事件对接后续流程
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).GameServerConnected);
        }
        /** 获取玩家信息 */


        getPlayer() {
          this.add(_crd && AccountNetDataComp === void 0 ? (_reportPossibleCrUseOfAccountNetDataComp({
            error: Error()
          }), AccountNetDataComp) : AccountNetDataComp);
        }

      }) || _class)); // export class EcsAccountSystem extends ecs.System {
      //     constructor() {
      //         super();
      //         this.add(new AccountNetDataSystem());
      //     }
      // }


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=22a1957ae56b93384d1dcb4157bd838a68e791f6.js.map