System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, TableAccelerate, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  _export("TableAccelerate", void 0);

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

      _cclegacy._RF.push({}, "d3af9q9i1pKBrWPGsR3zTu3", "TableAccelerate", undefined);

      _export("TableAccelerate", TableAccelerate = class TableAccelerate {
        constructor() {
          this.data = void 0;

          /** 加速权益【KEY】 */
          this.id = 0;
        }

        init(id) {
          var table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(TableAccelerate.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 消耗类型 */
        get cost() {
          return this.data.cost;
        }
        /** 消耗货币 */


        get costnum() {
          return this.data.costnum;
        }
        /** 加速时长 */


        get time() {
          return this.data.time;
        }
        /** 加速类型 */


        get type() {
          return this.data.type;
        }
        /** 加速效率 */


        get effect() {
          return this.data.effect;
        }
        /** 刷新类型 */


        get refresh() {
          return this.data.refresh;
        }

      });

      TableAccelerate.TableName = "Accelerate";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=15d8a5ca25ef196d6177d6e1b0bf547db75302aa.js.map