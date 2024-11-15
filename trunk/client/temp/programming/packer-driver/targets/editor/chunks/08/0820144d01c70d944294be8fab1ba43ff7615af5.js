System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, TablePictureSet, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  _export("TablePictureSet", void 0);

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

      _cclegacy._RF.push({}, "9b581uQuXpLrqMeAgc43KYB", "TablePictureSet", undefined);

      _export("TablePictureSet", TablePictureSet = class TablePictureSet {
        constructor() {
          this.data = void 0;

          /** 档位id【KEY】 */
          this.id = 0;
        }

        init(id) {
          var table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(TablePictureSet.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 图片说明 */
        get name() {
          return this.data.name;
        }
        /** 商品路径 */


        get picture() {
          return this.data.picture;
        }

      });

      TablePictureSet.TableName = "PictureSet";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0820144d01c70d944294be8fab1ba43ff7615af5.js.map