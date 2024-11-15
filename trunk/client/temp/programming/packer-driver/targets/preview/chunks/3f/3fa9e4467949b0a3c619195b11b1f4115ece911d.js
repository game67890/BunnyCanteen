System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, TelegramWebApp, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, WalletView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTelegramWebApp(extras) {
    _reporterNs.report("TelegramWebApp", "../../cocos-telegram-miniapps/scripts/telegram-web", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      TelegramWebApp = _unresolved_2.TelegramWebApp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7b9606RnWxKJIXwyqIW2bth", "TonWalletViewComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'UIOpacity', 'tween', 'Vec2', 'UITransform', 'v3', 'View', 'ScrollView']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WalletView", WalletView = (_dec = ccclass('WalletView'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class WalletView extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "background", _descriptor, this);

          _initializerDefineProperty(this, "panel", _descriptor2, this);

          this.backgroundOpacity = null;
          this.panelUITransform = null;
          this.gameUrl = "http://127.0.0.1:8888";
        }

        onLoad() {//globalEvent.on(GameEvents.WALLET_SHOW, this.show, this);
          //globalEvent.on(GameEvents.WALLET_HIDE, this.hide, this);
        }

        onDestroy() {//globalEvent.off(GameEvents.WALLET_SHOW, this.show);
          //globalEvent.off(GameEvents.WALLET_HIDE, this.hide);
        }

        show() {
          this.node.active = true;
        }

        hide() {
          this.node.active = false;
        }

        metamaskConnect() {
          this.openLink("https://metamask.app.link/dapp/" + this.gameUrl);
        }

        bitgetConnect() {
          this.openLink("https://bkcode.vip/?action=dapp&url=" + this.gameUrl);
        }

        okxConnect() {
          this.openLink("https://www.okx.com/download?deeplink=okx://wallet/dapp/url?dappUrl=" + encodeURIComponent(this.gameUrl));
        }

        openLink(url) {
          if ((_crd && TelegramWebApp === void 0 ? (_reportPossibleCrUseOfTelegramWebApp({
            error: Error()
          }), TelegramWebApp) : TelegramWebApp).Instance) {
            (_crd && TelegramWebApp === void 0 ? (_reportPossibleCrUseOfTelegramWebApp({
              error: Error()
            }), TelegramWebApp) : TelegramWebApp).Instance.openTelegramLink(url);
          } else {
            window.open(url, "_blank");
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "background", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "panel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3fa9e4467949b0a3c619195b11b1f4115ece911d.js.map