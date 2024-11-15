System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, TablePay, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  _export("TablePay", void 0);

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

      _cclegacy._RF.push({}, "816c6sc+7FPALzpqx/VOUKN", "TablePay", undefined);

      _export("TablePay", TablePay = class TablePay {
        constructor() {
          this.data = void 0;

          /** 档位id【KEY】 */
          this.id = 0;
        }

        init(id) {
          var table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(TablePay.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 档位名称 */
        get name() {
          return this.data.name;
        }
        /** 价格 */


        get price() {
          return this.data.price;
        }
        /** 商品图标 */


        get picture() {
          return this.data.picture;
        }
        /** 折扣标签 */


        get discount() {
          return this.data.discount;
        }
        /** 获得萝卜币 */


        get carrotcoin() {
          return this.data.carrotcoin;
        }
        /** 获得礼盒数量 */


        get gift() {
          return this.data.gift;
        }
        /** 获得体力 */


        get strength() {
          return this.data.strength;
        }
        /** 刷新类型 */


        get refresh() {
          return this.data.refresh;
        }
        /** 刷新次数 */


        get refreshnum() {
          return this.data.refreshnum;
        }
        /** 支付类型 */


        get paytype() {
          return this.data.paytype;
        }
        /** 折扣描述1 */


        get discountdesc1() {
          return this.data.discountdesc1;
        }
        /** 折扣描述2 */


        get discountdesc2() {
          return this.data.discountdesc2;
        }

      });

      TablePay.TableName = "Pay";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a66a14f7ab54a355ac351e7300731d9299d1805a.js.map