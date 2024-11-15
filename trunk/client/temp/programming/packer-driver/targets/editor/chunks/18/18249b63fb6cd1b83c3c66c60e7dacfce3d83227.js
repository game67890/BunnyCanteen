System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, TableIngredients, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  _export("TableIngredients", void 0);

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

      _cclegacy._RF.push({}, "179d3n8qYFE6r8VkrL4vAH5", "TableIngredients", undefined);

      _export("TableIngredients", TableIngredients = class TableIngredients {
        constructor() {
          this.data = void 0;

          /** 素材id【KEY】 */
          this.id = 0;
        }

        init(id) {
          var table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(TableIngredients.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 素材名称 */
        get name() {
          return this.data.name;
        }
        /** 系列类型 */


        get type() {
          return this.data.type;
        }
        /** 素材等级 */


        get level() {
          return this.data.level;
        }
        /** 素材图片 */


        get picture() {
          return this.data.picture;
        }
        /** 合成获得餐厅经验 */


        get getexp() {
          return this.data.getexp;
        }
        /** 每秒收益 */


        get getmoney() {
          return this.data.getmoney;
        }
        /** 回收获得兔子币 */


        get recovery() {
          return this.data.recovery;
        }
        /** 售价1 */


        get cost1() {
          return this.data.cost1;
        }
        /** 售价2 */


        get cost2() {
          return this.data.cost2;
        }
        /** 售价浮动系数 */


        get costup() {
          return this.data.costup;
        }

      });

      TableIngredients.TableName = "Ingredients";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=18249b63fb6cd1b83c3c66c60e7dacfce3d83227.js.map