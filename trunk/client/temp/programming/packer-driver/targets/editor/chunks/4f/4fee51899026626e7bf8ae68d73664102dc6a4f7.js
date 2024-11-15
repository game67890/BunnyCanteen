System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, TableAchievement, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  _export("TableAchievement", void 0);

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

      _cclegacy._RF.push({}, "16f7atw4WhN2bOG1ZOAuIA5", "TableAchievement", undefined);

      _export("TableAchievement", TableAchievement = class TableAchievement {
        constructor() {
          this.data = void 0;

          /** 成就ID【KEY】 */
          this.id = 0;
        }

        init(id) {
          var table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(TableAchievement.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 成就名称 */
        get achievename() {
          return this.data.achievename;
        }
        /** 成就图标 */


        get achieveicon() {
          return this.data.achieveicon;
        }
        /** 成就描述 */


        get achievetips() {
          return this.data.achievetips;
        }
        /** 成就类型 */


        get achievetype() {
          return this.data.achievetype;
        }
        /** 条件 */


        get condition() {
          return this.data.condition;
        }
        /** 奖励 */


        get award() {
          return this.data.award;
        }
        /** 奖励数量 */


        get num() {
          return this.data.num;
        }
        /** 描述 */


        get tips() {
          return this.data.tips;
        }
        /** 图标 */


        get icon() {
          return this.data.icon;
        }

      });

      TableAchievement.TableName = "Achievement";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4fee51899026626e7bf8ae68d73664102dc6a4f7.js.map