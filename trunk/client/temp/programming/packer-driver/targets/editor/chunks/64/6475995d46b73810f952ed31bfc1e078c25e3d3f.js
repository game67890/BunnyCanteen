System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, oops, NetProtocolPako, WebSock, netConfig, NetGameTips, NetNodeGame, GameProtocol, NetChannelManager, _crd, NetChannelType, netChannel;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetData(extras) {
    _reporterNs.report("NetData", "../../../../../extensions/oops-plugin-framework/assets/libs/network/NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetProtocolPako(extras) {
    _reporterNs.report("NetProtocolPako", "../../../../../extensions/oops-plugin-framework/assets/libs/network/NetProtocolPako", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebSock(extras) {
    _reporterNs.report("WebSock", "../../../../../extensions/oops-plugin-framework/assets/libs/network/WebSock", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetConfig(extras) {
    _reporterNs.report("netConfig", "./NetConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetGameTips(extras) {
    _reporterNs.report("NetGameTips", "./NetGameTips", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetNodeGame(extras) {
    _reporterNs.report("NetNodeGame", "./NetNodeGame", _context.meta, extras);
  }

  _export("NetChannelManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      NetProtocolPako = _unresolved_3.NetProtocolPako;
    }, function (_unresolved_4) {
      WebSock = _unresolved_4.WebSock;
    }, function (_unresolved_5) {
      netConfig = _unresolved_5.netConfig;
    }, function (_unresolved_6) {
      NetGameTips = _unresolved_6.NetGameTips;
    }, function (_unresolved_7) {
      NetNodeGame = _unresolved_7.NetNodeGame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ac861qhh0NGap/G024bE62U", "NetChannelManager", undefined);
      /*
       * @Date: 2021-08-12 09:33:37
       * @LastEditors: dgflash
       * @LastEditTime: 2022-06-14 17:53:02
       */


      _export("NetChannelType", NetChannelType = /*#__PURE__*/function (NetChannelType) {
        NetChannelType[NetChannelType["Game"] = 0] = "Game";
        return NetChannelType;
      }({}));
      /** 游戏服务器心跳协议 */


      GameProtocol = class GameProtocol extends (_crd && NetProtocolPako === void 0 ? (_reportPossibleCrUseOfNetProtocolPako({
        error: Error()
      }), NetProtocolPako) : NetProtocolPako) {
        /** 心跳协议 */
        getHearbeat() {
          return `{"action":"LoginAction","method":"heart","data":"null","isCompress":false,"channelid":${(_crd && netConfig === void 0 ? (_reportPossibleCrUseOfnetConfig({
            error: Error()
          }), netConfig) : netConfig).channelid},"callback":"LoginAction_heart"}`;
        }

      };

      _export("NetChannelManager", NetChannelManager = class NetChannelManager {
        constructor() {
          this.game = void 0;
        }

        /** 创建游戏服务器 */
        gameCreate() {
          this.game = new (_crd && NetNodeGame === void 0 ? (_reportPossibleCrUseOfNetNodeGame({
            error: Error()
          }), NetNodeGame) : NetNodeGame)(); // 游戏网络事件逻辑统一在 NetGameTips 里写

          this.game.init(new (_crd && WebSock === void 0 ? (_reportPossibleCrUseOfWebSock({
            error: Error()
          }), WebSock) : WebSock)(), new GameProtocol(), new (_crd && NetGameTips === void 0 ? (_reportPossibleCrUseOfNetGameTips({
            error: Error()
          }), NetGameTips) : NetGameTips)());
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).tcp.setNetNode(this.game, NetChannelType.Game);
        }
        /** 连接游戏服务器 */


        gameConnect() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).tcp.connect({
            url: `ws://${(_crd && netConfig === void 0 ? (_reportPossibleCrUseOfnetConfig({
              error: Error()
            }), netConfig) : netConfig).gameIp}:${(_crd && netConfig === void 0 ? (_reportPossibleCrUseOfnetConfig({
              error: Error()
            }), netConfig) : netConfig).gamePort}`,
            autoReconnect: 0 // 手动重连接

          }, NetChannelType.Game);
        }
        /** 断开游戏服务器 */


        gameClose() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).tcp.close(undefined, undefined, NetChannelType.Game);
        }

      });

      _export("netChannel", netChannel = new NetChannelManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6475995d46b73810f952ed31bfc1e078c25e3d3f.js.map