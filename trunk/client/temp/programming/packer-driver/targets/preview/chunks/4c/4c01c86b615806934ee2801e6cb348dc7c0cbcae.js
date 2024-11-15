System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Logger, oops, GameEvent, NetGameTips, _crd;

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../../../../../extensions/oops-plugin-framework/assets/core/common/log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfINetworkTips(extras) {
    _reporterNs.report("INetworkTips", "../../../../../extensions/oops-plugin-framework/assets/libs/network/NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../config/GameEvent", _context.meta, extras);
  }

  _export("NetGameTips", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Logger = _unresolved_2.Logger;
    }, function (_unresolved_3) {
      oops = _unresolved_3.oops;
    }, function (_unresolved_4) {
      GameEvent = _unresolved_4.GameEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "446e8kFjPpJwq94XGBFl1Tc", "NetGameTips", undefined);
      /*
       * @Date: 2021-08-12 09:33:37
       * @LastEditors: dgflash
       * @LastEditTime: 2022-07-22 18:09:52
       */


      /** 游戏服务器提示 */
      _export("NetGameTips", NetGameTips = class NetGameTips {
        /** 连接提示 */
        connectTips(isShow) {
          if (isShow) {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logNet("游戏服务器正在连接"); //tips.netInstableOpen();
          } else {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logNet("游戏服务器连接成功"); //tips.netInstableClose();

            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).GameServerConnected);
          }
        }
        /** 重连接提示 */


        reconnectTips(isShow) {}
        /** 请求提示 */


        requestTips(isShow) {
          if (isShow) {} else {}
        }
        /** 响应错误码提示 */


        responseErrorCode(code) {
          console.log("游戏服务器错误码", code);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4c01c86b615806934ee2801e6cb348dc7c0cbcae.js.map