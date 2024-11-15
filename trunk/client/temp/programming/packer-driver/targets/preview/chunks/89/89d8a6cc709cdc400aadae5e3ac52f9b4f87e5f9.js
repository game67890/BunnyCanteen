System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, TimeUtil, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  _export("TimeUtil", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c2070jsq0FDcaTrFhyA8yzm", "TimeUtils", undefined);

      /** 时间工具 */
      _export("TimeUtil", TimeUtil = class TimeUtil {
        /**
         * 间隔天数
         * @param time1 开始时间
         * @param time2 结束时间
         * @returns 
         */
        static daysBetween(time1, time2) {
          if (time2 == undefined) {
            time2 = +new Date();
          }

          var startDate = new Date(time1).toLocaleDateString();
          var endDate = new Date(time2).toLocaleDateString();
          var startTime = new Date(startDate).getTime();
          var endTime = new Date(endDate).getTime();
          return Math.abs(startTime - endTime) / (1000 * 60 * 60 * 24);
        }
        /** 间隔秒数，时间顺序无要求，最后会获取绝对值 */


        static secsBetween(time1, time2) {
          var dates = Math.abs(time2 - time1) / 1000;
          dates = Math.floor(dates) + 1;
          return dates;
        }
        /**
         * 代码休眠时间
         * @param ms 毫秒
         */


        static sleep(ms) {
          return _asyncToGenerator(function* () {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve();
              }, ms);
            });
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=89d8a6cc709cdc400aadae5e3ac52f9b4f87e5f9.js.map