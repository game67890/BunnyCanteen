System.register(["__unresolved_0", "cc", "@ton/cocos-sdk", "@tonconnect/ui", "@cocos-labs/web3modal-ethers5", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, GameFi, TonConnectUI, createWeb3Modal, defaultConfig, TonMgr, TonParams, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, TonComponent;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameFi(extras) {
    _reporterNs.report("GameFi", "@ton/cocos-sdk", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonConnectUI(extras) {
    _reporterNs.report("TonConnectUI", "@tonconnect/ui", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateWeb3Modal(extras) {
    _reporterNs.report("createWeb3Modal", "@cocos-labs/web3modal-ethers5", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdefaultConfig(extras) {
    _reporterNs.report("defaultConfig", "@cocos-labs/web3modal-ethers5", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppKit(extras) {
    _reporterNs.report("AppKit", "@cocos-labs/web3modal-ethers5", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWalletClient(extras) {
    _reporterNs.report("WalletClient", "viem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonMgr(extras) {
    _reporterNs.report("TonMgr", "./TonManager", _context.meta, extras);
  }

  _export("TonParams", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
    }, function (_tonCocosSdk) {
      GameFi = _tonCocosSdk.GameFi;
    }, function (_tonconnectUi) {
      TonConnectUI = _tonconnectUi.TonConnectUI;
    }, function (_cocosLabsWeb3modalEthers) {
      createWeb3Modal = _cocosLabsWeb3modalEthers.createWeb3Modal;
      defaultConfig = _cocosLabsWeb3modalEthers.defaultConfig;
    }, function (_unresolved_2) {
      TonMgr = _unresolved_2.TonMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9b19flXgStKaJbTTihmcKbp", "TonComponent", undefined);

      //import {TonConnectUi , type Transaction} from '../cocos-telegram-miniapps/scripts/telegram-ui';
      //import  EventManager , {EventType} from "../framework/manager/EventManager"
      //import { GameFi, TonConnectUI, Address, toNano } from '@ton/cocos-sdk';
      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Input', 'Node', 'Prefab', 'find', 'UITransform', 'EventKeyboard', 'KeyCode', 'input', 'CCInteger', 'PhysicsSystem2D', 'Label', 'Collider2D', 'IPhysics2DContact', 'Contact2DType', 'director']); //import { ToolsView } from './ToolsView';
      //import { WalletView } from './WalletView';


      ({
        ccclass,
        property
      } = _decorator);

      _export("TonParams", TonParams = class TonParams {
        constructor() {
          this.GameFi = void 0;
          this.tonAddress = void 0;
        }

      });

      _export("TonComponent", TonComponent = (_dec = ccclass('TonComponent'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Label
      }), _dec5 = property({
        type: Label
      }), _dec6 = property({
        type: Label
      }), _dec7 = property(Label), _dec8 = property(Label), _dec(_class2 = (_class3 = class TonComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "logLabel", _descriptor, this);

          _initializerDefineProperty(this, "UserIdLabel", _descriptor2, this);

          _initializerDefineProperty(this, "firstNameLabel", _descriptor3, this);

          _initializerDefineProperty(this, "lastNameLabel", _descriptor4, this);

          _initializerDefineProperty(this, "userNameLabel", _descriptor5, this);

          _initializerDefineProperty(this, "connectLabel", _descriptor6, this);

          _initializerDefineProperty(this, "evmConnectLabel", _descriptor7, this);

          this._bTonInit = false;
          this._cocosGameFi = void 0;
          this._connectUI = void 0;
          this._evmConnect = void 0;
          this._evmWalletClient = void 0;
          this.serverHost = "https://bunnycanteen.game67890.com";
          //ton 和jetton地址， ton是买东西付款到的地址
          this._config = void 0;
        }

        onLoad() {
          /*
          if (this._bTonInit) return;
          LogManager.log(`TonGameApp onLoad`);
            //初始化Telegram
          TelegramWebApp.Instance.init().then(res => {
              console.log("telegram web app init : ", res.success);
                let TelegramInitData : string = TelegramWebApp.Instance.getTelegramInitData();
              console.log("TelegramInitData : ", TelegramInitData);
                let TelegramInitDataUnsafe = TelegramWebApp.Instance.getTelegramWebAppInitData();
              if (TelegramInitDataUnsafe && TelegramInitDataUnsafe.user)
              {
                  console.log("User data from initDataUnsafe:", TelegramInitDataUnsafe.user);
                  this.UserIdLabel.string = TelegramInitDataUnsafe.user.id.toString();
                  this.firstNameLabel.string = TelegramInitDataUnsafe.user.first_name;
                  this.lastNameLabel.string = TelegramInitDataUnsafe.user.last_name;
                  //this.userNameLabel.string = TelegramInitDataUnsafe.user.username;
              }
          });
          
            this.loadWallet().then(res => {
              if (!res) {
                  console.error('load wallet failed!')
                  return;
              }
              //this._initTonUI();
          }).catch(err => { console.error(err); });
          */

          /*
                  fetch(`${this.serverHost}/config`, { method: 'GET' }).then(response => {
                      return response.json();
                  }).then(value => {
                      console.log("config : ", value);
                      if (value.ok) {
          
                          const addressConfig = {
                              tonAddress: value.tokenRecipient,
                              jettonAddress: value.jettonMaster
                          } as TonAddressConfig;
                          this.toolView.setTonAddressConfig(addressConfig);
          
                      } else {
                          console.error('request config failed!');
                      }
                  });
                  */
          //this._initEvmConnect();

          /*
          this._initTonConnect();
            this._bTonInit = true;
          */
        } //open the wallet


        loadWallet() {
          var _this = this;

          return _asyncToGenerator(function* () {
            try {
              //   const value =await   fetch(`${config.backendUrl}/config`, {
              //         headers: {
              //             'Content-Type': 'application/json',
              //             'Accept': 'application/json',
              //             "ngrok-skip-browser-warning":"1"
              //         },
              //         method: 'GET'}).then(response => {
              //         return response.json();
              //     })
              var addressConfig = {
                tonAddress: 'UQAXvZY8VLKtPv_z9lO-kc1rfTvqR-LB6aJAe8fnN4eq46Ij',
                jettonAddress: 'EQD_GZls9HhMJGp26xDmSHBNTk7BXBQ5dUAe7Us20hr_-zuo'
              };
              _this._config = addressConfig;
              return true;
            } catch (e) {
              console.error('request config failed!', e);
              return false;
            }
          })();
        }
        /*
            async _initTonUI() {
                TonConnectUi.Instance.init('https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json',this._config.tonAddress, 'en').then(res => {
                    console.log("ton connect ui init : ", res.success);
                    TonConnectUi.Instance.subscribeWallet(()=>{
                        console.log("wallet change");
                        EventManager.instance.emit(EventType.CONNECT_COMPLETE, res.success);
                    })
                })
            }
                */

        /*
            public isConnected(): boolean {
                if (!TonConnectUi.Instance) {
                    console.error("ton ui not inited!");
                    return false;
                }
                return TonConnectUi.Instance.isConnected();
            }
        
            //打开连接钱包的二维码
            public async openModal() {
                if (!TonConnectUi.Instance) return;
                console.log("open modal", this.isConnected());
        
                if (TonConnectUi.Instance.isConnected()) {
                    TonConnectUi.Instance.disconnect();
                } else {
                    TonConnectUi.Instance.openModal();
                }
            }
        */


        onBuyWithTon() {
          /*
          const tonTransferReq: Transaction= {
              amount: "0.01",
          };
           TonConnectUi.Instance.sendTransaction(tonTransferReq);
           */
        }

        _initTonConnect() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var myWalletsList = [{
              name: "Tonkeeper",
              image: "path_to_image/tonkeeper.png",
              deepLink: "tonkeeper://connect",
              universalLink: "https://tonkeeper.com/connect"
            }, {
              name: "Tonhub",
              image: "path_to_image/tonhub.png",
              deepLink: "tonhub://connect",
              universalLink: "https://tonhub.com/connect"
            }];
            var uiconnector = new (_crd && TonConnectUI === void 0 ? (_reportPossibleCrUseOfTonConnectUI({
              error: Error()
            }), TonConnectUI) : TonConnectUI)({
              manifestUrl: 'https://bunnycanteen.game67890.com/FangliangDevTest/tonconnect-manifest.json'
            });
            /*
                    let uiconnector = new TonConnectUI({
                        manifestUrl: 'https://bunnycanteen.game67890.com/FangliangDevTest/tonconnect-manifest.json',
                        walletsList: myWalletsList, // 传入钱包列表
                    });
                    */

            uiconnector.getWallets().then(wallets => {
              console.log(wallets); // 将自动获取的钱包列表传入 UI
              //uiconnector.updateWallets(wallets);
            }).catch(err => {
              console.error('Error fetching wallets:', err);
            }); //let newAddress = Address.parse("UQAXvZY8VLKtPv_z9lO-kc1rfTvqR-LB6aJAe8fnN4eq46Ij").toString({ testOnly: false, bounceable: false });

            _this2._cocosGameFi = yield (_crd && GameFi === void 0 ? (_reportPossibleCrUseOfGameFi({
              error: Error()
            }), GameFi) : GameFi).create({
              merchant: {
                // in-game jetton purchases come to this address
                //jettonAddress: "",
                // in-game TON purchases come to this address
                tonAddress: "UQAXvZY8VLKtPv_z9lO-kc1rfTvqR-LB6aJAe8fnN4eq46Ij"
              },
              connector: uiconnector
            });
            _this2._connectUI = _this2._cocosGameFi.walletConnector;

            var unsubscribeModal = _this2._connectUI.onModalStateChange(state => {
              console.log("model state changed! : ", state);

              _this2.updateConnect();
            });

            var unsubscribeConnectUI = _this2._connectUI.onStatusChange(info => {
              console.log("wallet info status changed : ", info);

              _this2.updateConnect();
            });

            _this2.updateConnect();
          })();
        }

        updateConnect() {
          if (this.isConnected()) {//const address = this._connectUI.account.address;
            //this.connectLabel.string = Address.parseRaw(address).toString({ testOnly: false, bounceable: false });
            //this.connectLabel.string = Address.parseRaw(address).toString({ testOnly: true, bounceable: false }).substring(0, 6) + '...';
          } else {
            this.connectLabel.string = "Connect";
          }
        }

        isConnected() {
          if (!this._connectUI) {
            console.error("ton ui not inited!");
            return false;
          }

          return this._connectUI.connected;
        } //打开连接钱包的二维码


        openModal() {
          return _asyncToGenerator(function* () {
            (_crd && TonMgr === void 0 ? (_reportPossibleCrUseOfTonMgr({
              error: Error()
            }), TonMgr) : TonMgr).openModal();
          })();
        }

        _initEvmConnect() {
          //this.walletView.node.active = false;
          // 1. Get projectId from https://cloud.walletconnect.com
          var projectId = 'a3c5251fe077f63e2fe1931521283512'; // 2. Set chains

          var mainnet = {
            chainId: 1,
            name: 'Ethereum',
            currency: 'ETH',
            explorerUrl: 'https://etherscan.io',
            rpcUrl: 'https://rpc.ankr.com/eth'
          };
          var bnbchain = {
            chainId: 56,
            name: 'BNB Smart Chain Mainnet',
            currency: 'BNB',
            explorerUrl: 'https://bscscan.com/',
            rpcUrl: 'https://bsc-dataseed4.ninicoin.io'
          }; // 3. Create your application's metadata object

          var metadata = {
            name: 'My Website',
            description: 'My Website description',
            url: 'https://mywebsite.com',
            // url must match your domain & subdomain
            icons: ['https://avatars.mywebsite.com/']
          }; // 4. Create Ethers config

          var ethersConfig = (_crd && defaultConfig === void 0 ? (_reportPossibleCrUseOfdefaultConfig({
            error: Error()
          }), defaultConfig) : defaultConfig)({
            /*Required*/
            metadata,

            /*Optional*/
            enableEIP6963: true,
            // true by default
            enableInjected: true,
            // true by default
            defaultChainId: 56
          }); // 5. Create a AppKit instance

          this._evmConnect = (_crd && createWeb3Modal === void 0 ? (_reportPossibleCrUseOfcreateWeb3Modal({
            error: Error()
          }), createWeb3Modal) : createWeb3Modal)({
            ethersConfig,
            chains: [mainnet, bnbchain],
            projectId,
            enableAnalytics: false // Optional - defaults to your Cloud configuration

          });

          this._evmConnect.subscribeEvents(event => {
            this.evmConnectEventHandle(event);
          });
        }

        evmConnectEventHandle(event) {
          return _asyncToGenerator(function* () {
            if (event.data.event == "MODAL_CLOSE" || event.data.event == "CONNECT_SUCCESS") {//await this.updateWalletAddress();
            }
          })();
        }
        /*
            public evmConnect() {
                if (typeof window.ethereum === 'undefined' &&
                    typeof window.okxwallet === 'undefined' &&
                    typeof window.bitkeep === 'undefined'
                ) {
                    globalEvent.emit(GameEvents.WALLET_SHOW);
                    this.walletView.node.active = true;
                    return;
                }
        
                //this.updateWalletAddress()
                this._evmConnect.open({ view: 'Connect' })
                console.log(navigator.userAgent);
            }
        
            private async updateWalletAddress() {
                let provider = window.ethereum! as any
        
                if (typeof window.okxwallet !== 'undefined') {
                    provider = window.okxwallet!;
                }
        
                if (typeof window.bitkeep !== 'undefined' && window.bitkeep.ethereum !== 'undefined') {
                    provider = window.bitkeep!.ethereum;
                }
        
                this._evmWalletClient = createWalletClient({
                    chain: mainnet,
                    transport: custom(provider as any)
                })
                const addresses = await this._evmWalletClient.requestAddresses()
                if (addresses.length > 0) {
                    this.evmConnectLabel.string = addresses[0].slice(-6);
                    await this._evmWalletClient.signMessage({
                        message: "Hello, this is cocos game message.",
                        account: addresses[0]
                    })
        
                } else {
                    this.evmConnectLabel.string = "Connect";
                }
            }
        */


        onShowTools() {//let paramas = new TonParams();
          //paramas.GameFi = this._cocosGameFi;
          //paramas.tonAddress = this._config.tonAddress;
        }

        onBackBtn() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "logLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "UserIdLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "firstNameLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "lastNameLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, "userNameLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class3.prototype, "connectLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class3.prototype, "evmConnectLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class3)) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5ac364504265e0b52707e54af3da13030e004d77.js.map