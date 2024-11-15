System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, Platform, Binding, Router, _crd, TAG;

  function _reportPossibleCrUseOfPlatform(extras) {
    _reporterNs.report("Platform", "../platform", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBinding(extras) {
    _reporterNs.report("Binding", "./binding", _context.meta, extras);
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
    }, function (_unresolved_2) {
      Platform = _unresolved_2.default;
    }, function (_unresolved_3) {
      Binding = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "21b33TF/4dOU7ERBFv6mBEx", "router", undefined);

      __checkObsolete__(['log']);

      TAG = 'Router';
      /**
       * 路由方法，可以注册方法供别的模块,或者是native主动发起调用
       */

      _export("default", Router = class Router {
        constructor() {
          this.methodMap = new Map();
        }

        static callMethod(methodName, args) {
          return this.Instance.callMethod(methodName, args);
        }

        static registerMethod(methodName, callback) {
          return this.Instance.registerMethod(methodName, callback);
        }

        static unRegisterMethod(eventName) {
          return this.Instance.unRegisterMethod(eventName);
        }

        static get Instance() {
          if (!this.instance) {
            this.instance = new Router();
          }

          return this.instance;
        }

        /**
         * 自定义事件处理者
         */
        registerMethod(eventName, callback) {
          this.methodMap.set(eventName, callback);

          window[`binding_router_${eventName}`] = async args => {
            log(TAG, 'called eventName' + eventName);
            return this.callMethod(eventName, args);
          };
        }

        unRegisterMethod(eventName) {
          this.methodMap.delete(eventName);
          delete window[`binding_router_${eventName}`];
        }

        callMethod(methodName, args) {
          const method = this.methodMap.get(methodName);

          if (method) {
            const data = args['data'];
            const exeResult = method.call(this, data); // 如果是在native环境下，则需要把结果返回到native中。

            if ((_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).isNative() && typeof exeResult === 'object') {
              if (exeResult instanceof Promise) {
                exeResult.then(result => {
                  log('start call native from ts');
                  const callbackName = args['@nativeCallbackName'];
                  (_crd && Binding === void 0 ? (_reportPossibleCrUseOfBinding({
                    error: Error()
                  }), Binding) : Binding).withOptions({
                    hasCallback: false
                  }).callNativeMethod(callbackName, result).then(rs => {
                    log('receive:', rs);
                  }).catch(e => {
                    log('exception:', e);
                  });
                });
              } else {
                log('start call native from ts');
                const callbackName = args['@nativeCallbackName'];
                (_crd && Binding === void 0 ? (_reportPossibleCrUseOfBinding({
                  error: Error()
                }), Binding) : Binding).withOptions({
                  hasCallback: false
                }).callNativeMethod(callbackName, exeResult).then(rs => {
                  log('receive:', rs);
                }).catch(e => {
                  log('exception:', e);
                });
              }
            }

            return Promise.resolve(exeResult);
          } else {
            return Promise.reject({
              code: -1,
              msg: `${methodName} not register`
            });
          }
        }

      });

      Router.instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=179e2c34e090cf3a991bd2e7f4934f28ae40f31e.js.map