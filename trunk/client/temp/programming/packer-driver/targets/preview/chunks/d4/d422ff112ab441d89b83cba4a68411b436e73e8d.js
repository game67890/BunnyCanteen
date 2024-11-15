System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, resources, log, Singleton, GameUtils, MapUtils, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "./singleton", _context.meta, extras);
  }

  _export({
    default: void 0,
    MapUtils: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      resources = _cc.resources;
      log = _cc.log;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1edf9UOUvRBo5AGLPEzXgA3", "utils", undefined);

      __checkObsolete__(['sys', 'view', 'resources', 'Asset', 'log']);

      _export("default", GameUtils = class GameUtils extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton)() {
        constructor() {
          super(...arguments);
          this.clickTime = {};
        }

        /**
         * @description 是否频繁点击
         * @param tag 判断重点的一个id，用于区分不同时机
         * @param duration 少于该时长即认为发生了重复点击（毫秒）
         **/
        isQuickClick(tag, duration) {
          if (!tag) tag = 'normal';
          if (!this.clickTime) this.clickTime = {};
          if (this.clickTime[tag] == undefined) this.clickTime[tag] = 0;
          var gapTime = new Date().getTime() - this.clickTime[tag];
          if (!duration) duration = 500;

          if (gapTime < duration) {
            log(GameUtils.TAG, '请勿重复点击');
            return true;
          }

          this.clickTime[tag] = new Date().getTime();
          return false;
        }
        /**
         * @description 同步调用包装
         * @param promise 需要被调用的异步方法
         */


        static asyncWrap(promise) {
          return _asyncToGenerator(function* () {
            try {
              var data = yield promise;
              return [data, null];
            } catch (err) {
              return [null, err];
            }
          })();
        }
        /**
         * @description 同步加载资源
         * @param {string} url 远程连接
         * @param {Asset} type 资源类型
         */


        static loadAsync(url, type) {
          return new Promise((resolve, reject) => {
            resources.load(url, type, (err, res) => {
              if (!err) {
                resolve(res);
              } else {
                reject('loadAsync url:' + url + ',err:' + err);
              }
            });
          });
        }
        /**
         * @description 快速获取某个数据对象中深层 key 的值
         * @param src 数据对象
         * @param key 要获取值对应的 key，层级通过 # 分割
         */


        static key4property(src, key) {
          if (!src) return undefined;
          var keys = key.split('#');

          for (var i = 0, j = keys.length; i < j; i++) {
            src = src[keys[i]];
            if (typeof src == 'object' && src != null) continue;
            if (i < j - 1) return undefined;
          }

          return src;
        }
        /**
         * 不考虑年、月和时间，只计算两个时间点相差了几天
         * @param start 起始时间
         * @param end 终点时间
         */


        static dayDiff(start, end) {
          return Math.floor((end.getTime() - start.getTime()) / 86400000);
        }
        /**
         * 是否是今天
         * @param date
         */


        static isToday(date) {
          var now = new Date();
          return now.getFullYear() === date.getFullYear() && now.getMonth() === date.getMonth() && now.getDate() === date.getDate();
        }

      });

      GameUtils.TAG = 'GameSceneManager';

      _export("MapUtils", MapUtils = class MapUtils {
        static replacer(_, value) {
          if (value instanceof Map) {
            return {
              dataType: 'Map',
              value: Array.from(value.entries()) // or with spread: value: [...value]

            };
          } else {
            return value;
          }
        }

        static reviver(_, value) {
          if (typeof value === 'object' && value !== null) {
            if (value.dataType === 'Map') {
              return new Map(value.value);
            }
          }

          return value;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d422ff112ab441d89b83cba4a68411b436e73e8d.js.map