System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ecs, _dec, _class, _crd, AccountModelComp;

  function _reportPossibleCrUseOfecs(extras) {
    _reporterNs.report("ecs", "../../../../../extensions/oops-plugin-framework/assets/libs/ecs/ECS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRole(extras) {
    _reporterNs.report("Role", "../../role/Role", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ecs = _unresolved_2.ecs;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "48e3172BRZA+ZLehWBTVmsA", "AccountModelComp", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-11-12 10:02:31
       * @LastEditors: dgflash
       * @LastEditTime: 2022-07-25 17:03:45
       */


      /** 
       * 游戏帐号数据 
       */
      _export("AccountModelComp", AccountModelComp = (_dec = (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).register('AccountModel'), _dec(_class = class AccountModelComp extends (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).Comp {
        constructor(...args) {
          super(...args);

          /** 资源列表 */
          this.currency = {};

          /** 角色对象 */
          this.role = null;
        }

        reset() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4acab49c3a399c5be407106b09556c213841620d.js.map