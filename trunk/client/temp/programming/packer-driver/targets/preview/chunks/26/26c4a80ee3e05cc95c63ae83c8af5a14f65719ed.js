System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, TableInvitedUserRank, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  _export("TableInvitedUserRank", void 0);

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

      _cclegacy._RF.push({}, "0c5e5Eq27hMQbSL8Dtx7+RD", "TableInvitedUserRank", undefined);

      _export("TableInvitedUserRank", TableInvitedUserRank = class TableInvitedUserRank {
        constructor() {
          this.data = void 0;

          /** 段位ID【KEY】 */
          this.id = 0;
        }

        init(id) {
          var table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(TableInvitedUserRank.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 萝卜币数量 */
        get CarrotCoinNum() {
          return this.data.CarrotCoinNum;
        }

      });

      TableInvitedUserRank.TableName = "InvitedUserRank";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=26c4a80ee3e05cc95c63ae83c8af5a14f65719ed.js.map