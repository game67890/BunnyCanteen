System.register(["__unresolved_0", "cc", "@ton/cocos-sdk", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Sprite, _decorator, Component, Address, toNano, TelegramWebApp, TonMgr, UtilMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, TonToolsViewComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAddress(extras) {
    _reporterNs.report("Address", "@ton/cocos-sdk", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameFi(extras) {
    _reporterNs.report("GameFi", "@ton/cocos-sdk", _context.meta, extras);
  }

  function _reportPossibleCrUseOftoNano(extras) {
    _reporterNs.report("toNano", "@ton/cocos-sdk", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonTransferRequest(extras) {
    _reporterNs.report("TonTransferRequest", "@ton/cocos-sdk", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTelegramWebApp(extras) {
    _reporterNs.report("TelegramWebApp", "../../cocos-telegram-miniapps/scripts/telegram-web", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonAddressConfig(extras) {
    _reporterNs.report("TonAddressConfig", "./TonManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonMgr(extras) {
    _reporterNs.report("TonMgr", "./TonManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_tonCocosSdk) {
      Address = _tonCocosSdk.Address;
      toNano = _tonCocosSdk.toNano;
    }, function (_unresolved_2) {
      TelegramWebApp = _unresolved_2.TelegramWebApp;
    }, function (_unresolved_3) {
      TonMgr = _unresolved_3.TonMgr;
    }, function (_unresolved_4) {
      UtilMgr = _unresolved_4.UtilMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cbe4ay3rSVBDoYPGkbxJ18a", "TonToolsViewComponent", undefined);

      __checkObsolete__(['Label']);

      __checkObsolete__(['Sprite']);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      __checkObsolete__(['game']);

      __checkObsolete__(['assetManager', 'SpriteFrame', 'Texture2D']);

      __checkObsolete__(['ImageAsset']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TonToolsViewComponent", TonToolsViewComponent = (_dec = ccclass('TonToolsViewComponent'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec(_class = (_class2 = class TonToolsViewComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "headSp", _descriptor, this);

          _initializerDefineProperty(this, "nameLab", _descriptor2, this);

          _initializerDefineProperty(this, "addressLab", _descriptor3, this);

          _initializerDefineProperty(this, "searchLab", _descriptor4, this);

          _initializerDefineProperty(this, "logLab", _descriptor5, this);

          this._gameFi = void 0;
          this._tonAddressConfig = void 0;
          this.serverHost = "http://127.0.0.1:8888";
          this._tonAddress = void 0;
        }

        onAdded(params) {
          //this._tonAddress = params.tonAddress;
          //this.setGameFi(params.GameFi);
          return true;
        }

        onBuyWithTon() {
          (_crd && TonMgr === void 0 ? (_reportPossibleCrUseOfTonMgr({
            error: Error()
          }), TonMgr) : TonMgr).onBuyWithTon();
        }
        /*
            public onBuyWithTon() {
                const tonTransferReq: Transaction= {
                    amount: "0.01",
                };
                 TonConnectUi.Instance.sendTransaction(tonTransferReq);
            }
                 */


        setGameFi(gamefi) {
          this._gameFi = gamefi;

          if (this._gameFi && this._gameFi.walletConnector.connected) {
            const address = this._gameFi.walletConnector.account.address;
            this.addressLab.string = (_crd && Address === void 0 ? (_reportPossibleCrUseOfAddress({
              error: Error()
            }), Address) : Address).parseRaw(address).toString({
              testOnly: true,
              bounceable: false
            }).substring(0, 6) + '...';
          } else {
            this.addressLab.string = 'Unconnected';
          }

          this.updateTelegramInfo();
        }

        setTonAddressConfig(config) {
          this._tonAddressConfig = config;
        }

        updateTelegramInfo() {
          const userData = (_crd && TelegramWebApp === void 0 ? (_reportPossibleCrUseOfTelegramWebApp({
            error: Error()
          }), TelegramWebApp) : TelegramWebApp).Instance.getTelegramUser();
          console.log("userData : ", userData);

          if (userData) {
            // load username
            if (userData.username) {
              this.nameLab.string = userData.username;
            } else {
              this.nameLab.string = userData.first_name + ' ' + userData.last_name ? userData.last_name : '';
            }
            /*
            // load profile photo
            if (userData.photo_url) {
                const fileExtension = userData.photo_url.split('.').pop().toLowerCase();
                if (fileExtension == 'jpeg' || fileExtension == 'jpg' || fileExtension == 'png') {
                    assetManager.loadRemote<ImageAsset>(userData.photo_url, function (err, imageAsset) {
                        const spriteFrame = new SpriteFrame();
                        const texture = new Texture2D();
                        texture.image = imageAsset;
                        spriteFrame.texture = texture;
                        this.headSp.spriteFrame = spriteFrame;
                    });
                }
            }
                */

          }
        }

        onTransferTon() {
          var _this$_gameFi$walletC;

          //将ton转移到另一个钱包地址
          if (this._gameFi && (_this$_gameFi$walletC = this._gameFi.walletConnector) != null && _this$_gameFi$walletC.connected) {
            const tonTransferReq = {
              to: (_crd && Address === void 0 ? (_reportPossibleCrUseOfAddress({
                error: Error()
              }), Address) : Address).parse(this._tonAddressConfig.tonAddress),
              amount: (_crd && toNano === void 0 ? (_reportPossibleCrUseOftoNano({
                error: Error()
              }), toNano) : toNano)(0.01)
            };

            this._gameFi.transferTon(tonTransferReq);
          }
        }
        /*
            public onBuyWithTon() {
                //使用 TON 在游戏内商店购买
                if (this._gameFi)
                {   
                    this.logLab.string = "BuyWithTon _gameFi 1";
                    const tonTransferReq = {
                        amount: toNano(0.01)
                    } as Omit<TonTransferRequest, "to">;
                    this._gameFi.buyWithTon(tonTransferReq);
                    this.logLab.string = "BuyWithTon _gameFi 2";
                }
                else
                {
                    this.logLab.string = "BuyWithTon _gameFi Is nil";
                }
            }
                */


        onShowJetton() {
          if (this._tonAddressConfig) {
            const jettonMasterAddress = (_crd && Address === void 0 ? (_reportPossibleCrUseOfAddress({
              error: Error()
            }), Address) : Address).parse(this._tonAddressConfig.jettonAddress);

            const show = async function (_gameFi, jettonMasterAddress) {
              //打开 Jetton 合约
              const openJetton = _gameFi.assetsSdk.openJetton(jettonMasterAddress);

              const jettonContent = await openJetton.getContent();
              const message = "jetton name: " + jettonContent.name + "\njetton decimals: " + jettonContent.decimals;
              (_crd && TelegramWebApp === void 0 ? (_reportPossibleCrUseOfTelegramWebApp({
                error: Error()
              }), TelegramWebApp) : TelegramWebApp).Instance.alert(message);
            };

            show(this._gameFi, jettonMasterAddress);
          }
        }

        onGetTelegramUserData() {
          this.updateTelegramInfo();
        }

        onShare() {
          //分享
          let userId = '';
          const userData = (_crd && TelegramWebApp === void 0 ? (_reportPossibleCrUseOfTelegramWebApp({
            error: Error()
          }), TelegramWebApp) : TelegramWebApp).Instance.getTelegramUser();
          console.log("userData : ", userData);

          if (userData) {
            userId = userData.id + '';
          }

          (_crd && TelegramWebApp === void 0 ? (_reportPossibleCrUseOfTelegramWebApp({
            error: Error()
          }), TelegramWebApp) : TelegramWebApp).Instance.share("https://t.me/cocos_demo_bot/game?startapp=ref_code_" + userId, "Invite you to play a very interesting game");
        }

        onShareStory() {
          (_crd && TelegramWebApp === void 0 ? (_reportPossibleCrUseOfTelegramWebApp({
            error: Error()
          }), TelegramWebApp) : TelegramWebApp).Instance.shareToStory(`${this.serverHost}/story.mp4`, "Invite you to play a crazy game", "https://t.me/cocos_demo_bot/game", "click join");
        }

        onBuyWithStars() {
          fetch(`${this.serverHost}/create-stars-invoice`, {
            method: 'POST'
          }).then(response => {
            return response.json();
          }).then(value => {
            console.log("starts invoice : ", value);

            if (value.ok) {
              //开具发票
              (_crd && TelegramWebApp === void 0 ? (_reportPossibleCrUseOfTelegramWebApp({
                error: Error()
              }), TelegramWebApp) : TelegramWebApp).Instance.openInvoice(value.invoiceLink, result => {
                console.log("buy stars : ", result);
              });
            } else {
              console.error('request config failed!');
            }
          });
        }

        onClose() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(19);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "headSp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "addressLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "searchLab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "logLab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ad4bd25d51ae75f741c8785a520f95c181371618.js.map