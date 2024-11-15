System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _class2, _crd, ccclass, property, TonConnectUi;

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

        async init(manifestUrl, tonWallet, language) {
          this.tonWallet = tonWallet;
          this._tgConnect = await new Promise((resolve, reject) => {
            // if (sys.platform === sys.Platform.MOBILE_BROWSER || sys.platform === sys.Platform.DESKTOP_BROWSER) {
            const script = document.createElement("script");
            script.src = "https://unpkg.com/@tonconnect/ui@2.0.9/dist/tonconnect-ui.min.js";
            script.async = true;

            script.onload = () => {
              const intervalId = setInterval(() => {
                if (window.TON_CONNECT_UI) {
                  console.log("loading telegram web app sdk success!");
                  const tonConnect = new window['TON_CONNECT_UI'].TonConnectUI({
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

          if (this._tgConnect) {
            return Promise.resolve({
              success: true
            });
          } else {
            return Promise.resolve({
              success: false
            });
          }
        }

        subscribeWallet(updateConnect) {
          console.log("subscribe wallet");
          updateConnect();

          if (this._tgConnect) {
            const unsubscribeModal = this._tgConnect.onStatusChange(state => {
              console.log("model state changed! : ", state);
              updateConnect();
            });

            const unsubscribeConnectUI = this._tgConnect.onStatusChange(info => {
              console.log("wallet info status changed : ", info);
              updateConnect();
            });
          }
        }

        async openModal() {
          if (!this._tgConnect) return;
          console.log("open modal", await this._tgConnect.getWallets());

          if (this._tgConnect.connected) {
            this._tgConnect.disconnect();
          } else {
            this._tgConnect.openModal();
          }
        }

        createPayload() {
          return '';
        }

        async sendTransaction(args) {
          if (!this._tgConnect || this._tgConnect.connected == false) {
            console.error('ton connect not connected');
            throw new Error('ton connect not connected');
          }

          const transaction = {
            validUntil: Math.floor(Date.now() / 1000) + 120,
            // 120 sec
            messages: [{
              address: this.tonWallet,
              amount: args.amount,
              payload: args.payload // just for instance. Replace with your transaction payload or remove

            }]
          };

          try {
            const result = await this._tgConnect.sendTransaction(transaction);

            if (args.callBack) {
              args.callBack({
                success: true,
                result: result
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
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4b330d441b3d0137e85688e560fe6fd85f2675a8.js.map