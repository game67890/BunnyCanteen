System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, TableGiftBox, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  _export("TableGiftBox", void 0);

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

      _cclegacy._RF.push({}, "069ebcBFp5HNKgiZgzAhwge", "TableGiftBox", undefined);

      _export("TableGiftBox", TableGiftBox = class TableGiftBox {
        constructor() {
          this.data = void 0;

          /** 餐厅等级【KEY】 */
          this.id = 0;
        }

        init(id) {
          var table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(TableGiftBox.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 间隔时间 */
        get time() {
          return this.data.time;
        }
        /** 每日上限 */


        get numlimit() {
          return this.data.numlimit;
        }
        /** 素材等级 */


        get foodlevel1() {
          return this.data.foodlevel1;
        }
        /** 素材概率 */


        get probably1() {
          return this.data.probably1;
        }

      });

      TableGiftBox.TableName = "GiftBox";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=37961e2f37060f7d9598f36404a32cdc2313cab0.js.map