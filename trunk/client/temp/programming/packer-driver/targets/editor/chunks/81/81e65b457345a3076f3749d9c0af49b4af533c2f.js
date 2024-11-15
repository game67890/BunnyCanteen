System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, NetConfig, _crd, netConfig;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "de66cfdp+NPdoTql8TK/EPP", "NetConfig", undefined);

      /*
       * @Date: 2021-08-12 09:33:37
       * @LastEditors: dgflash
       * @LastEditTime: 2022-01-24 15:15:30
       */

      /** 网络配置 */
      NetConfig = class NetConfig {
        constructor() {
          this.gameIp = "192.168.1.150";
          this.gamePort = "9587";
          this.dbid = void 0;
          this.sdkUid = void 0;
          this.serverId = void 0;
          this.sessionKey = void 0;
          this.channelid = void 0;
        }

      };

      _export("netConfig", netConfig = new NetConfig());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=81e65b457345a3076f3749d9c0af49b4af533c2f.js.map