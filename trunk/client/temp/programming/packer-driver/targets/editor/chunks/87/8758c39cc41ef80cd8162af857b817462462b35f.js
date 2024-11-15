System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, TableRadishAwardTime, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  _export("TableRadishAwardTime", void 0);

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

      _cclegacy._RF.push({}, "b5b9aUIGflJVI9ROuW9hIUP", "TableRadishAwardTime", undefined);

      _export("TableRadishAwardTime", TableRadishAwardTime = class TableRadishAwardTime {
        constructor() {
          this.data = void 0;

          /** 编号【KEY】 */
          this.id = 0;
        }

        init(id) {
          var table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(TableRadishAwardTime.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 奖励时长 */
        get duration() {
          return this.data.duration;
        }
        /** 随机权重 */


        get randweight() {
          return this.data.randweight;
        }

      });

      TableRadishAwardTime.TableName = "RadishAwardTime";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8758c39cc41ef80cd8162af857b817462462b35f.js.map