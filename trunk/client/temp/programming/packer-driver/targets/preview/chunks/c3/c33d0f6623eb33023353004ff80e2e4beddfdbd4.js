System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, sys, _dec, _class, _class2, _crd, ccclass, property, tgLoadPromise, TelegramWebApp;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cb8407D3zdPOIUY4npAWBMx", "telegram-web", undefined);

      __checkObsolete__(['_decorator', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);
      tgLoadPromise = new Promise((resolve, reject) => {
        if (sys.platform === sys.Platform.MOBILE_BROWSER || sys.platform === sys.Platform.DESKTOP_BROWSER) {
          var script = document.createElement("script");
          script.src = "https://telegram.org/js/telegram-web-app.js";
          script.async = true;

          script.onload = () => {
            var intervalId = setInterval(() => {
              if (window.Telegram && window.Telegram.WebApp) {
                resolve(window.Telegram.WebApp);
                clearInterval(intervalId);
              }
            }, 100);
          };

          script.onerror = () => reject(new Error("Unable to load TelegramWebApp SDK, please check logs."));

          document.head.appendChild(script);
        }
      });

      _export("TelegramWebApp", TelegramWebApp = (_dec = ccclass('TelegramWebApp'), _dec(_class = (_class2 = class TelegramWebApp {
        constructor() {
          this._tgWebAppJS = null;
        }

        static get Instance() {
          if (!TelegramWebApp._instance) {
            TelegramWebApp._instance = new TelegramWebApp();
          }

          return TelegramWebApp._instance;
        }

        init() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this._tgWebAppJS = yield tgLoadPromise;

            if (_this._tgWebAppJS) {
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

        openTelegramLink(url) {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return;
          }

          this._tgWebAppJS.openTelegramLink(url);
        }

        share(url, text) {
          var shareUrl = 'https://t.me/share/url?url=' + url + '&' + new URLSearchParams({
            text: text || ''
          }).toString();
          this.openTelegramLink(shareUrl);
        }

        shareToStory(media_url, shareText, widget_link_url, widget_link_name) {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return;
          }

          var widget_link = {
            text: shareText,
            widget_link: {
              url: widget_link_url,
              name: widget_link_name
            }
          };

          this._tgWebAppJS.shareToStory(media_url, widget_link);
        }

        getTelegramWebApp() {
          return this._tgWebAppJS;
        }

        getTelegramWebAppInitData() {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return null;
          }

          return this._tgWebAppJS.initDataUnsafe;
        }

        getTelegramUser() {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return null;
          }

          return this._tgWebAppJS.initDataUnsafe.user;
        }

        getTelegramInitData() {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return null;
          }

          return this._tgWebAppJS.initData;
        }

        openInvoice(url, callback) {
          if (!this._tgWebAppJS) {
            console.error("telegram web app is not inited!");
            return null;
          }

          this._tgWebAppJS.openInvoice(url, callback);
        }

        alert(message) {
          this._tgWebAppJS.showAlert(message);
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c33d0f6623eb33023353004ff80e2e4beddfdbd4.js.map