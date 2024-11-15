System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, TableRoleLevelUp, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  _export("TableRoleLevelUp", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      JsonUtil = _unresolved_2.JsonUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a36813bBhpEEaAa8sXcM4BN", "TableRoleLevelUp", undefined);

      _export("TableRoleLevelUp", TableRoleLevelUp = class TableRoleLevelUp {
        constructor() {
          this.data = void 0;

          /** 编号【KEY】 */
          this.id = 0;
        }

        init(id) {
          var table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(TableRoleLevelUp.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 升级所需经验 */
        get needexp() {
          return this.data.needexp;
        }
        /** 升级增加生命 */


        get hp() {
          return this.data.hp;
        }

      });

      TableRoleLevelUp.TableName = "RoleLevelUp";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4d20660c11e6e4205ea6ea118e48afd475308a28.js.map