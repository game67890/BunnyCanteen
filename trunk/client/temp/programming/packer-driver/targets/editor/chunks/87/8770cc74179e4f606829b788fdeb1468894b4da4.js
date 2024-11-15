System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, TableRadishAwardRank, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  _export("TableRadishAwardRank", void 0);

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

      _cclegacy._RF.push({}, "0a406TePdZLE6drG8IJ0lyd", "TableRadishAwardRank", undefined);

      _export("TableRadishAwardRank", TableRadishAwardRank = class TableRadishAwardRank {
        constructor() {
          this.data = void 0;

          /** 编号【KEY】 */
          this.id = 0;
        }

        init(id) {
          var table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(TableRadishAwardRank.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 最低名次 */
        get minrank() {
          return this.data.minrank;
        }
        /** 最高名次 */


        get maxrank() {
          return this.data.maxrank;
        }
        /** 奖励比例 */


        get awardpercent() {
          return this.data.awardpercent;
        }

      });

      TableRadishAwardRank.TableName = "RadishAwardRank";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8770cc74179e4f606829b788fdeb1468894b4da4.js.map