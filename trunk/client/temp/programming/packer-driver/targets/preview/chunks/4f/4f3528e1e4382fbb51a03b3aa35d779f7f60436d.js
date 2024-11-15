System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, TableOtherParameter, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  _export("TableOtherParameter", void 0);

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

      _cclegacy._RF.push({}, "0b46aalwX5Ny5dyG8gAmo5+", "TableOtherParameter", undefined);

      _export("TableOtherParameter", TableOtherParameter = class TableOtherParameter {
        constructor() {
          this.data = void 0;

          /** 编号【KEY】 */
          this.id = 0;
        }

        init(id) {
          var table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(TableOtherParameter.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 参数值 */
        get parameter() {
          return this.data.parameter;
        }

      });

      TableOtherParameter.TableName = "OtherParameter";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4f3528e1e4382fbb51a03b3aa35d779f7f60436d.js.map