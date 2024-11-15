System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, TablePromptWindow, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  _export("TablePromptWindow", void 0);

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

      _cclegacy._RF.push({}, "732e5t9OHNNQZHYEGek1LBL", "TablePromptWindow", undefined);

      _export("TablePromptWindow", TablePromptWindow = class TablePromptWindow {
        constructor() {
          this.data = void 0;

          /** 编号【KEY】 */
          this.id = 0;

          /** 双主键【KEY】 */
          this.id1 = 0;

          /** 双主键【KEY】 */
          this.id2 = 0;
        }

        init(id, id1, id2) {
          var table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(TablePromptWindow.TableName);
          this.data = table[id][id1][id2];
          this.id = id;
          this.id1 = id1;
          this.id2 = id2;
        }

        /** 标题 */
        get title() {
          return this.data.title;
        }
        /** 描述 */


        get describe() {
          return this.data.describe;
        }
        /** 描述 */


        get array() {
          return this.data.array;
        }
        /** 生命 */


        get hp() {
          return this.data.hp;
        }

      });

      TablePromptWindow.TableName = "PromptWindow";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=06b6bf27546df8de29cb90f1c7d1a57c36b22ba8.js.map