System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _class2, _crd, ccclass, property, TonConnectUi;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6b3cbaU8yxAIIZyc9XfIchH", "telegram-ui", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TonConnectUi", TonConnectUi = (_dec = ccclass('TonConnectUi'), _dec(_class = (_class2 = class TonConnectUi {
        constructor() {
          this.tonWallet = void 0;
          this._tgConnect = null;
        }

        static get Instance() {
          if (!TonConnectUi._instance) {
            TonConnectUi._instance = new TonConnectUi();
          }

          return TonConnectUi._instance;
        }

        isConnected() {
          if (!this._tgConnect) {
            console.error("ton ui not inited!");
            return false;
          }

          return this._tgConnect.connected;
        }

        disconnect() {
          if (!this._tgConnect) {
            console.error("ton ui not inited!");
            return;
          }

          this._tgConnect.disconnect();
        }

        account() {
          if (!this._tgConnect) {
            console.error("ton ui not inited!");
            return null;
          }

          return this._tgConnect.account;
        }

        parseRaw(raw) {
          return raw;
        }

        init(manifestUrl, tonWallet, language) {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.tonWallet = tonWallet;
            _this._tgConnect = yield new Promise((resolve, reject) => {
              // if (sys.platform === sys.Platform.MOBILE_BROWSER || sys.platform === sys.Platform.DESKTOP_BROWSER) {
              var script = document.createElement("script");
              script.src = "https://unpkg.com/@tonconnect/ui@2.0.9/dist/tonconnect-ui.min.js";
              script.async = true;

              script.onload = () => {
                var intervalId = setInterval(() => {
                  if (window.TON_CONNECT_UI) {
                    console.log("loading telegram web app sdk success!");
                    var tonConnect = new window['TON_CONNECT_UI'].TonConnectUI({
                      manifestUrl: manifestUrl
                    });
                    tonConnect.uiOptions = {
                      language: language || 'en'
                    };
                    resolve(tonConnect);
                    clearInterval(intervalId);
                  }
                }, 100);
              };

              script.onerror = () => reject(new Error("Unable to load TelegramWebApp SDK, please check logs."));

              document.head.appendChild(script); // }
            });

            if (_this._tgConnect) {
              return Promise.resolve({
                success: true
              });
            } else {
              return Promise.resolve({
                success: false
              });
            }
          })();
        }

        subscribeWallet(updateConnect) {
          console.log("subscribe wallet");
          updateConnect();

          if (this._tgConnect) {
            var unsubscribeModal = this._tgConnect.onStatusChange(state => {
              console.log("model state changed! : ", state);
              updateConnect();
            });

            var unsubscribeConnectUI = this._tgConnect.onStatusChange(info => {
              console.log("wallet info status changed : ", info);
              updateConnect();
            });
          }
        }

        openModal() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (!_this2._tgConnect) return;
            console.log("open modal", yield _this2._tgConnect.getWallets());

            if (_this2._tgConnect.connected) {
              _this2._tgConnect.disconnect();
            } else {
              _this2._tgConnect.openModal();
            }
          })();
        }

        createPayload() {
          return '';
        }

        sendTransaction(args) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            if (!_this3._tgConnect || _this3._tgConnect.connected == false) {
              console.error('ton connect not connected');
              throw new Error('ton connect not connected');
            }

            var transaction = {
              validUntil: Math.floor(Date.now() / 1000) + 120,
              // 120 sec
              messages: [{
                address: _this3.tonWallet,
                amount: args.amount,
                payload: args.payload // just for instance. Replace with your transaction payload or remove

              }]
            };

            try {
              var _result = yield _this3._tgConnect.sendTransaction(transaction);

              if (args.callBack) {
                args.callBack({
                  success: true,
                  result: _result
                });
              } // you can use signed boc to find the transaction

            } catch (e) {
              console.error(e);

              if (args.callBack) {
                args.callBack({
                  success: false,
                  result: e.message
                });
              }
            }
          })();
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4b330d441b3d0137e85688e560fe6fd85f2675a8.js.map