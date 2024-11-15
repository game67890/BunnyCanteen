System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, NetNode, netConfig, NetNodeGame, _crd;

  function _reportPossibleCrUseOfCallbackObject(extras) {
    _reporterNs.report("CallbackObject", "../../../../../extensions/oops-plugin-framework/assets/libs/network/NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRequestProtocol(extras) {
    _reporterNs.report("IRequestProtocol", "../../../../../extensions/oops-plugin-framework/assets/libs/network/NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetNode(extras) {
    _reporterNs.report("NetNode", "../../../../../extensions/oops-plugin-framework/assets/libs/network/NetNode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetConfig(extras) {
    _reporterNs.report("netConfig", "./NetConfig", _context.meta, extras);
  }

  _export("NetNodeGame", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      NetNode = _unresolved_2.NetNode;
    }, function (_unresolved_3) {
      netConfig = _unresolved_3.netConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bcdefoeZ55NF5b09cJUF6Xi", "NetNodeGame", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-06-02 09:38:48
       * @LastEditors: dgflash
       * @LastEditTime: 2022-06-14 17:52:54
       */


      /** 网络节点扩展 */
      _export("NetNodeGame", NetNodeGame = class NetNodeGame extends (_crd && NetNode === void 0 ? (_reportPossibleCrUseOfNetNode({
        error: Error()
      }), NetNode) : NetNode) {
        constructor(...args) {
          super(...args);
          this.isCompress = false;
        }

        req(action, method, data, rspObject, showTips = true, force = false) {
          let protocol = {
            cmd: action,
            data: JSON.stringify(data),
            isCompress: this.isCompress,
            channelid: (_crd && netConfig === void 0 ? (_reportPossibleCrUseOfnetConfig({
              error: Error()
            }), netConfig) : netConfig).channelid
          };
          return this.request(protocol, rspObject, showTips, force);
        }

        reqUnique(action, method, data, rspObject, showTips = true, force = false) {
          let protocol = {
            cmd: action,
            data: JSON.stringify(data),
            isCompress: this.isCompress,
            channelid: (_crd && netConfig === void 0 ? (_reportPossibleCrUseOfnetConfig({
              error: Error()
            }), netConfig) : netConfig).channelid
          };
          return super.requestUnique(protocol, rspObject, showTips, force);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6e0a53f0cbdd04b402ceb16b77027aba15002391.js.map