System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, TableRoleJob, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  _export("TableRoleJob", void 0);

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

      _cclegacy._RF.push({}, "6529fOiN09Mma6YUyUQsS7K", "TableRoleJob", undefined);

      _export("TableRoleJob", TableRoleJob = class TableRoleJob {
        constructor() {
          this.data = void 0;

          /** 编号【KEY】 */
          this.id = 0;
        }

        init(id) {
          var table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(TableRoleJob.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 职业名 */
        get armsName() {
          return this.data.armsName;
        }
        /** 武器类型 */


        get weaponType() {
          return this.data.weaponType;
        }
        /** 力量 */


        get power() {
          return this.data.power;
        }
        /** 敏捷 */


        get agile() {
          return this.data.agile;
        }

      });

      TableRoleJob.TableName = "RoleJob";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=95fada0cbd4b26b08e7ba5572ac3c788e148137f.js.map