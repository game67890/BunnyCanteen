System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, TelegramWebApp, sys, oops, UtilMgr, TonGameMgr, TonManager, _crd, TonMgr;

  function _reportPossibleCrUseOfTelegramWebApp(extras) {
    _reporterNs.report("TelegramWebApp", "../../../cocos-telegram-miniapps/scripts/telegram-web", _context.meta, extras);
  }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonGameMgr(extras) {
    _reporterNs.report("TonGameMgr", "../../tongame/manager/TonGameManager", _context.meta, extras);
  }

  _export("TonManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      TelegramWebApp = _unresolved_2.TelegramWebApp;
    }, function (_unresolved_3) {
      oops = _unresolved_3.oops;
    }, function (_unresolved_4) {
      UtilMgr = _unresolved_4.UtilMgr;
    }, function (_unresolved_5) {
      TonGameMgr = _unresolved_5.TonGameMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "17b30freL9L9bEvsZyOpnWL", "TonManager", undefined);

      __checkObsolete__(['_decorator', 'sys']); //import { GameFi, TonConnectUI, Address, toNano, TonTransferRequest } from '@ton/cocos-sdk';
      //import {TonConnectUi , type Transaction} from '../../cocos-telegram-miniapps/scripts/telegram-ui';


      _export("TonManager", TonManager = class TonManager {
        constructor() {
          this._bTonInit = false;
          //private _cocosGameFi: GameFi;
          this._connectUI = void 0;
          this.serverHost = "https://bunnycanteen.game67890.com";
          //ton 和jetton地址， ton是买东西付款到的地址
          this._config = void 0;
        }

        /** 初始化 */
        init() {
          if (this._bTonInit) return;

          if ((_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).isHttps((_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).http.server)) {
            //初始化Telegram
            try {
              if (sys.platform === sys.Platform.MOBILE_BROWSER) {
                (_crd && TelegramWebApp === void 0 ? (_reportPossibleCrUseOfTelegramWebApp({
                  error: Error()
                }), TelegramWebApp) : TelegramWebApp).Instance.init().then(result => {
                  //console.log("telegram web app init : ", res.success);
                  let TelegramInitData = (_crd && TelegramWebApp === void 0 ? (_reportPossibleCrUseOfTelegramWebApp({
                    error: Error()
                  }), TelegramWebApp) : TelegramWebApp).Instance.getTelegramInitData();
                  console.log("TelegramInitData : ", TelegramInitData);
                  let TelegramInitDataUnsafe = (_crd && TelegramWebApp === void 0 ? (_reportPossibleCrUseOfTelegramWebApp({
                    error: Error()
                  }), TelegramWebApp) : TelegramWebApp).Instance.getTelegramWebAppInitData();

                  if (TelegramInitDataUnsafe && TelegramInitDataUnsafe.user) {
                    console.log("User data from initDataUnsafe:", TelegramInitDataUnsafe.user);
                    (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                      error: Error()
                    }), TonGameMgr) : TonGameMgr).UserId = TelegramInitDataUnsafe.user.id.toString();
                    (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                      error: Error()
                    }), TonGameMgr) : TonGameMgr).UserName = TelegramInitDataUnsafe.user.first_name + TelegramInitDataUnsafe.user.last_name;
                    (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                      error: Error()
                    }), TonGameMgr) : TonGameMgr).TGHash = TelegramInitDataUnsafe.hash;
                    (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                      error: Error()
                    }), TonGameMgr) : TonGameMgr).IsTelegramUser = true;
                    (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                      error: Error()
                    }), TonGameMgr) : TonGameMgr).TelegramReferrer = TelegramInitDataUnsafe["referrer"]; //oops.gui.toast("TelegramInitData: " + TelegramInitDataUnsafe, true);             
                  } else {
                    (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                      error: Error()
                    }), TonGameMgr) : TonGameMgr).IsTelegramUser = false;
                  }

                  (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                    error: Error()
                  }), TonGameMgr) : TonGameMgr).init();
                }).catch(error => {
                  (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                    error: Error()
                  }), TonGameMgr) : TonGameMgr).init();
                });
              } else {
                (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).init();
              }
            } catch (error) {
              (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).init();
            }
          } else {
            (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).init();
          }
        }

      });

      _export("TonMgr", TonMgr = new TonManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=16944a8ab57054754f64681c6952813511656a51.js.map