System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, native, Platform, Binding, _crd, AUTO_INCREASE_ID, ERROR_CODE_METHOD_NOT_DEFINED, ERROR_CODE_PARAMS_ERROR, ERROR_CODE_TIMEOUT, ERROR_CODE_UNKNOWN;

  function _reportPossibleCrUseOfPlatform(extras) {
    _reporterNs.report("Platform", "../platform", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
      native = _cc.native;
    }, function (_unresolved_2) {
      Platform = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c4f9bgegu9L+pbeS+rsCZre", "binding", undefined);

      __checkObsolete__(['log', 'native']);

      AUTO_INCREASE_ID = 0;
      ERROR_CODE_METHOD_NOT_DEFINED = -1;
      ERROR_CODE_PARAMS_ERROR = -2;
      ERROR_CODE_TIMEOUT = -3;
      ERROR_CODE_UNKNOWN = -999;

      _export("default", Binding = class Binding {
        constructor() {
          this.DEFAULT_OPTIONS = {
            timeout: 60,
            hasCallback: true,
            onProgress: undefined
          };
          this._options = this.DEFAULT_OPTIONS;
        }

        static get Instance() {
          if (!this.instance) {
            this.instance = new Binding();
          }

          return this.instance;
        }

        static withOptions(options) {
          return this.Instance.withOptions(options);
        }

        static callNativeMethod(methodName, args) {
          return this.Instance.callNativeMethod(methodName, args);
        }

        /**
         * 创建一个临时请求native方法的可选项，包含：
         * 超时时间设置默认60秒，过程回调（若有)
         * @param options Options,
         */
        withOptions(options) {
          const oriProto = Object.getPrototypeOf(this);
          const temp = Object.assign(Object.create(oriProto), this);
          temp._options = Object.assign({}, this.DEFAULT_OPTIONS, options);
          return temp;
        }

        callNativeMethod(methodName, args) {
          console.log(`options:${JSON.stringify(this._options)}, args:${args}`);
          const hasCallback = this._options.hasCallback;
          const hasProgress = this._options.onProgress;
          return new Promise((resolve, reject) => {
            let cbName = '';
            let timeoutId;
            let cbProgressName = '';

            if (hasCallback || hasProgress) {
              // eslint-disable-next-line no-plusplus
              cbName = `_CB${new Date().getTime()}_${AUTO_INCREASE_ID++}`;
              cbProgressName = `${cbName}_p`;
              timeoutId = setTimeout(() => {
                if (window[cbName]) {
                  this.clearCallback(cbName, -1, cbProgressName);
                  reject({
                    code: ERROR_CODE_TIMEOUT,
                    msg: `delete cb name: ${cbName},because of timeout`
                  });
                }
              }, this._options.timeout * 1000);

              window[cbName] = result => {
                console.log('result from native:', JSON.stringify(result));

                if (result) {
                  const code = result.code;
                  const msg = result.msg;
                  const errCode = result.eCode;
                  const data = result.data;

                  if (code == 0) {
                    resolve(data);
                  } else {
                    reject({
                      code: errCode,
                      msg: msg
                    });
                  }
                } else {
                  reject({
                    code: ERROR_CODE_UNKNOWN,
                    msg: 'result is null'
                  });
                }

                this.clearCallback(cbName, timeoutId, cbProgressName);
              };

              window[cbProgressName] = progressData => {
                log('invoke data', JSON.stringify(progressData));

                if (this._options.onProgress && progressData) {
                  const code = progressData.code;
                  const msg = progressData.msg;
                  const errCode = progressData.eCode;
                  const data = progressData.data;

                  if (code == 0) {
                    this._options.onProgress(data);
                  } else {
                    log(`progress error: ${code}, ${errCode},${msg}`);
                  }
                }
              };
            }

            if ((_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).isNative() && (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).isAndroid()) {
              const resultCode = native.reflection.callStaticMethod('utils/binding/Binding', 'execute', '(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)I', methodName, typeof args === 'object' ? JSON.stringify(args) : '', cbName);

              if (resultCode !== 0) {
                switch (resultCode) {
                  case -1:
                    reject({
                      code: ERROR_CODE_METHOD_NOT_DEFINED,
                      msg: `${methodName} not found on Android platform`
                    });
                    break;

                  case -2:
                    reject({
                      code: ERROR_CODE_PARAMS_ERROR,
                      msg: `error! invalid parameters`
                    });
                    break;

                  default:
                    reject({
                      code: resultCode,
                      msg: `error! result code=${resultCode}`
                    });
                    break;
                }

                if (hasCallback) {
                  this.clearCallback(cbName, timeoutId, cbProgressName);
                }
              }
            } else if ((_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).isNative() && (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).isIOS()) {
              const retId = native.reflection.callStaticMethod('Binding', 'executeWithMethodName:args:callback:', methodName, typeof args === 'object' ? JSON.stringify(args) : '', cbName);
            } else {
              const msg = 'no implemented on this platform';
              reject({
                code: ERROR_CODE_METHOD_NOT_DEFINED,
                msg: msg
              });
              this.clearCallback(cbName, timeoutId, cbProgressName);
            }
          });
        }

        clearCallback(cbName, timeoutId = -1, cbProgressName = '') {
          if (cbProgressName && cbProgressName != '') {
            console.log(`delete cbProgressName${cbName}`);
            delete window[cbProgressName];
          }

          if (cbName && cbName != '') {
            console.log(`delete cbName${cbName}`);
            delete window[cbName];
          }

          if (timeoutId >= 0) {
            console.log(`clearTimeout${cbName}`);
            clearTimeout(timeoutId);
          }
        }

      });

      Binding.instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6818d4cecf5ce64313795e3c9b0dbd920df6a151.js.map