System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, TableShop, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  _export("TableShop", void 0);

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

      _cclegacy._RF.push({}, "9be70hRGPRE3JlElwT1Hb/g", "TableShop", undefined);

      _export("TableShop", TableShop = class TableShop {
        constructor() {
          this.data = void 0;

          /** 档位id【KEY】 */
          this.id = 0;
        }

        init(id) {
          var table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(TableShop.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 兔子名称 */
        get name() {
          return this.data.name;
        }
        /** 价格 */


        get price() {
          return this.data.price;
        }
        /** 支付类型 */


        get paytype() {
          return this.data.paytype;
        }
        /** 兔子造型 */


        get rabbitmodel() {
          return this.data.rabbitmodel;
        }
        /** 兔子动画 */


        get rabbitanimation() {
          return this.data.rabbitanimation;
        }
        /** 兔子动画2 */


        get rabbitanimation2() {
          return this.data.rabbitanimation2;
        }
        /** 音效 */


        get sound() {
          return this.data.sound;
        }
        /** 加成效率 */


        get effect() {
          return this.data.effect;
        }
        /** 购买条件 */


        get unlocktype() {
          return this.data.unlocktype;
        }
        /** 条件参数 */


        get unlockpara() {
          return this.data.unlockpara;
        }
        /** 提示消息 */


        get message() {
          return this.data.message;
        }

      });

      TableShop.TableName = "Shop";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5348b6fc7f1e07fd9cd94f502fb29363398dfda3.js.map