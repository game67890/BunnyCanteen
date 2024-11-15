System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, oops, ecs, netConfig, AccountModelComp, _dec, _class, _dec2, _class2, _crd, AccountNetDataComp, AccountNetDataSystem;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfecs(extras) {
    _reporterNs.report("ecs", "../../../../../extensions/oops-plugin-framework/assets/libs/ecs/ECS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetConfig(extras) {
    _reporterNs.report("netConfig", "../../common/net/NetConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAccount(extras) {
    _reporterNs.report("Account", "../Account", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAccountModelComp(extras) {
    _reporterNs.report("AccountModelComp", "../model/AccountModelComp", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      ecs = _unresolved_3.ecs;
    }, function (_unresolved_4) {
      netConfig = _unresolved_4.netConfig;
    }, function (_unresolved_5) {
      AccountModelComp = _unresolved_5.AccountModelComp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "699d51NeD5NRb69k81G+Znx", "AccountNetData", undefined);

      /*
       * @Author: dgflash
       * @Date: 2021-11-23 15:51:15
       * @LastEditors: dgflash
       * @LastEditTime: 2022-07-25 17:03:54
       */
      __checkObsolete__(['v3']); //import { Role } from "../../role/Role";


      /** 请求玩家游戏数据 */
      _export("AccountNetDataComp", AccountNetDataComp = (_dec = (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).register('AccountNetData'), _dec(_class = class AccountNetDataComp extends (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).Comp {
        reset() {}

      }) || _class));
      /** 请求玩家游戏数据 */


      _export("AccountNetDataSystem", AccountNetDataSystem = (_dec2 = (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).register('Account'), _dec2(_class2 = class AccountNetDataSystem extends (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).ComblockSystem {
        filter() {
          return (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
            error: Error()
          }), ecs) : ecs).allOf(AccountNetDataComp, _crd && AccountModelComp === void 0 ? (_reportPossibleCrUseOfAccountModelComp({
            error: Error()
          }), AccountModelComp) : AccountModelComp);
        }

        entityEnter(e) {
          var params = {
            playerId: (_crd && netConfig === void 0 ? (_reportPossibleCrUseOfnetConfig({
              error: Error()
            }), netConfig) : netConfig).dbid,
            sessionKey: (_crd && netConfig === void 0 ? (_reportPossibleCrUseOfnetConfig({
              error: Error()
            }), netConfig) : netConfig).sessionKey
          };
          var onComplete = {
            target: this,
            callback: data => {// 设置本地存储的用户标识（用于下次登录不输入帐号）
              //this.setLocalStorage(data.id);
              // 创建玩家角色对象
              //this.createRole(e, data);
              // 玩家登录成功事件
              //oops.message.dispatchEvent(GameEvent.LoginSuccess);
            }
          }; // 请求登录游戏获取角色数据
          // netChannel.game.req("LoginAction", "loadPlayer", params, onComplete);
          // 离线测试代码开始

          var data = {
            id: 1,
            name: "Oops",
            power: 10,
            agile: 10,
            physical: 10,
            lv: 1,
            jobId: 1
          };
          onComplete.callback(data); // 离线测试代码结束

          e.remove(AccountNetDataComp);
        }
        /** 创建角色对象（自定义逻辑） */

        /*
        private createRole(e: Account, data: any) {
            var role = ecs.getEntity<Role>(Role);
              // 角色数据
            role.RoleModel.id = data.id;
            role.RoleModel.name = data.name;
              // 角色初始战斗属性
            role.RoleModelBase.power = data.power;
            role.RoleModelBase.agile = data.agile;
            role.RoleModelBase.physical = data.physical;
              // 角色等级数据
            role.upgrade(data.lv);
              // 角色职业数据
            role.RoleModelJob.id = data.jobId;
              // 角色基础属性绑定到界面上显示
            role.RoleModel.vmAdd();
            // 角色等级属性绑定到界面上显示
            role.RoleModelLevel.vmAdd();
            // 角色初始基础属性绑定到界面上显示
            role.RoleModelBase.vmAdd();
              // 角色动画显示对象
            role.load(oops.gui.game, v3(0, -300, 0));
              e.AccountModel.role = role;
        }
            */

        /** 设置本地存储的用户标识 */


        setLocalStorage(uid) {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).storage.setUser(uid);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).storage.set("account", uid);
        }

      }) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1fb9a8c2932e2eb2a08c8b0bed2fdc8456f6a90c.js.map