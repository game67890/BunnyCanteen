System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, TableRestaurantlevel, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  _export("TableRestaurantlevel", void 0);

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

      _cclegacy._RF.push({}, "4b02556XjlMfqwNHqcVZQhK", "TableRestaurantlevel", undefined);

      _export("TableRestaurantlevel", TableRestaurantlevel = class TableRestaurantlevel {
        constructor() {
          this.data = void 0;

          /** 餐厅等级【KEY】 */
          this.id = 0;
        }

        init(id) {
          var table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(TableRestaurantlevel.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 升级所需经验 */
        get exp() {
          return this.data.exp;
        }
        /** 采购素材等级 */


        get foodlevel() {
          return this.data.foodlevel;
        }
        /** 采购描述 */


        get buydesc() {
          return this.data.buydesc;
        }
        /** 等级图片 */


        get picture() {
          return this.data.picture;
        }
        /** 采购消耗体力 */


        get coststrength() {
          return this.data.coststrength;
        }
        /** 采购基础消耗 */


        get costmoney() {
          return this.data.costmoney;
        }
        /** 采购涨幅 */


        get moneychange() {
          return this.data.moneychange;
        }
        /** 回收素材等级 */


        get recoverylevel() {
          return this.data.recoverylevel;
        }

      });

      TableRestaurantlevel.TableName = "Restaurantlevel";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ce0ce06d9c857c6378f96723bbeff34e19a63501.js.map