System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewParams, _crd;

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "./LayerManager", _context.meta, extras);
  }

  _export("ViewParams", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "82d3a9c71JEkI95d3qscHm8", "Defines", undefined);

      /*
       * @Author: dgflash
       * @Date: 2021-11-18 11:21:32
       * @LastEditors: dgflash
       * @LastEditTime: 2023-01-09 11:52:38
       */
      __checkObsolete__(['Node']);
      /*** 界面回调参数对象定义 */


      /** 本类型仅供gui模块内部使用，请勿在功能逻辑中使用 */
      _export("ViewParams", ViewParams = class ViewParams {
        constructor() {
          /** 界面配置 */
          this.config = null;

          /** 传递给打开界面的参数 */
          this.params = null;

          /** 窗口事件 */
          this.callbacks = null;

          /** 是否在使用状态 */
          this.valid = true;

          /** 界面根节点 */
          this.node = null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=38488a626df816860dc74b36f54b5ef65188d104.js.map