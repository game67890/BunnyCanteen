System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, oops, TonGameMgr, PaymentMgr, UtilMgr, tips, WebSocketManager, _crd, WebSocketMgr;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonGameMgr(extras) {
    _reporterNs.report("TonGameMgr", "./TonGameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPaymentMgr(extras) {
    _reporterNs.report("PaymentMgr", "../payment/PaymentManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOftips(extras) {
    _reporterNs.report("tips", "../../framework/common/prompt/TipsManager", _context.meta, extras);
  }

  _export("WebSocketManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      TonGameMgr = _unresolved_3.TonGameMgr;
    }, function (_unresolved_4) {
      PaymentMgr = _unresolved_4.PaymentMgr;
    }, function (_unresolved_5) {
      UtilMgr = _unresolved_5.UtilMgr;
    }, function (_unresolved_6) {
      tips = _unresolved_6.tips;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cb0867kFwtIM4i7RBITH8J1", "WebSocketManager", undefined);

      _export("WebSocketManager", WebSocketManager = class WebSocketManager {
        constructor() {
          this.socket = null;
          this.isKicked = false;
        }

        // 使用正则表达式去掉 http:// 或 https://
        removeHttpProtocol(url) {
          return url.replace(/^https?:\/\//, '');
        }

        connectWebSocket(userId) {
          var url = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).http.server + "websocket";

          if ((_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).isHttps(url)) {
            var FinalURL = "wss://" + this.removeHttpProtocol(url);
            this.socket = new WebSocket(FinalURL);
          } else {
            var _FinalURL = "ws://" + this.removeHttpProtocol(url);

            this.socket = new WebSocket(_FinalURL);
          } // 在连接打开前设置自定义的 HTTP 头


          this.socket.onopen = () => {
            console.log("WebSocket connection opened"); //oops.gui.toast("WebSocket connection opened", true);
            // 发送用户 ID 作为初始化的认证信息

            if (this.socket.readyState === WebSocket.OPEN) {
              this.socket.send(JSON.stringify({
                type: "init",
                userId
              }));
            }
          };

          this.socket.onclose = () => {
            console.log("WebSocket connection closed"); //oops.gui.toast("WebSocket connection closed", true);

            setTimeout(() => {
              if (!this.isKicked) {
                this.connectWebSocket((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).UserId);
              }
            }, 5000);
          };

          this.socket.onerror = error => {
            console.error("WebSocket error:", error); //oops.gui.toast("WebSocket error"+error, true);
          };

          this.socket.onmessage = event => {
            var protocol = JSON.parse(event.data); //oops.gui.toast("WebSocket message "+protocol.NotifyType, true);

            this.dispatch(protocol);
          };
        }

        dispatch(protocol) {
          if (protocol.NotifyType == "Charge_Success") {
            //充值成功
            (_crd && PaymentMgr === void 0 ? (_reportPossibleCrUseOfPaymentMgr({
              error: Error()
            }), PaymentMgr) : PaymentMgr).ProcessPay(protocol);
          } else if (protocol.NotifyType == "Invite_New") {
            //邀请成功
            (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).updateCarrotCoin(protocol.carrotCoin);
          } else if (protocol.NotifyType == "Invite_Rank") {
            //被邀请人有人达到了新的段位
            (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).updateCarrotCoin(protocol.carrotCoin);
          } else if (protocol.NotifyType == "Kick") {
            //顶号
            this.isKicked = true;
            (_crd && tips === void 0 ? (_reportPossibleCrUseOftips({
              error: Error()
            }), tips) : tips).confirmTips("", (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).language.getLangByID("message_14"), (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).language.getLangByID("stringres_009"), false);
          } else if (protocol.NotifyType == "RabbitCoin_Add") {
            //修改萝卜币
            (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).updateCarrotCoin(protocol.carrotCoin);
          }
        }

        onDestroy() {
          //oops.gui.toast("WebSocket onDestroy", true);
          if (this.socket) {
            this.socket.close();
            this.socket = null;
          }
        }

        sendPing() {
          if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send("ping");
          }
        }

      });

      _export("WebSocketMgr", WebSocketMgr = new WebSocketManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=02ece50147aa69565b3f730e0f11bc2f16e11b1c.js.map