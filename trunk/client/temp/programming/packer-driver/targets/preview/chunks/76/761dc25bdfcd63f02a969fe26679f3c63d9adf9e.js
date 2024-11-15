System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, TableRadishAwardWeight, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  _export("TableRadishAwardWeight", void 0);

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

      _cclegacy._RF.push({}, "741472RmfFHl6MGj+0XcmMx", "TableRadishAwardWeight", undefined);

      _export("TableRadishAwardWeight", TableRadishAwardWeight = class TableRadishAwardWeight {
        constructor() {
          this.data = void 0;

          /** 编号【KEY】 */
          this.id = 0;
        }

        init(id) {
          var table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(TableRadishAwardWeight.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 萝卜名称 */
        get radishname() {
          return this.data.radishname;
        }
        /** 萝卜重量 */


        get radishweight() {
          return this.data.radishweight;
        }
        /** 随机权重 */


        get randweight() {
          return this.data.randweight;
        }

      });

      TableRadishAwardWeight.TableName = "RadishAwardWeight";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=761dc25bdfcd63f02a969fe26679f3c63d9adf9e.js.map