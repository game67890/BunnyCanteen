System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, TableRank, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  _export("TableRank", void 0);

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

      _cclegacy._RF.push({}, "8fc8evEuetDEqMYdlD2Qpza", "TableRank", undefined);

      _export("TableRank", TableRank = class TableRank {
        constructor() {
          this.data = void 0;

          /** 排行榜ID【KEY】 */
          this.id = 0;
        }

        init(id) {
          var table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(TableRank.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 段位名称 */
        get rankname() {
          return this.data.rankname;
        }
        /** 段位大图标 */


        get bigrankicon() {
          return this.data.bigrankicon;
        }
        /** 段位小图标 */


        get smallrankicon() {
          return this.data.smallrankicon;
        }
        /** 段位背景 */


        get rankpic() {
          return this.data.rankpic;
        }
        /** 日产量上限 */


        get upper() {
          return this.data.upper;
        }
        /** 日产量下限 */


        get lower() {
          return this.data.lower;
        }
        /** 餐厅等级上限 */


        get canteenupper() {
          return this.data.canteenupper;
        }
        /** 餐厅等级下限 */


        get canteenranklower() {
          return this.data.canteenranklower;
        }

      });

      TableRank.TableName = "Rank";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2d67c8848c10ced946712320157797e83f4361ef.js.map