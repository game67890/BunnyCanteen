System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Timer, TonGameMgr, TonTimerManager, _crd, TonTimerMgr;

  function _reportPossibleCrUseOfTimer(extras) {
    _reporterNs.report("Timer", "../../../../extensions/oops-plugin-framework/assets/core/common/timer/Timer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonGameMgr(extras) {
    _reporterNs.report("TonGameMgr", "./TonGameManager", _context.meta, extras);
  }

  _export("TonTimerManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      Timer = _unresolved_2.Timer;
    }, function (_unresolved_3) {
      TonGameMgr = _unresolved_3.TonGameMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "84d211wAsJDubibwGqfk6kM", "TonTimerManager", undefined);

      __checkObsolete__(['Component', 'game']);

      /** TonGame 时间管理 */
      _export("TonTimerManager", TonTimerManager = class TonTimerManager extends Component {
        constructor() {
          super(...arguments);
          this.OneSecondTimer = new (_crd && Timer === void 0 ? (_reportPossibleCrUseOfTimer({
            error: Error()
          }), Timer) : Timer)(1);
          this.TwoSecondTimer = new (_crd && Timer === void 0 ? (_reportPossibleCrUseOfTimer({
            error: Error()
          }), Timer) : Timer)(2);
          this.FiveSecondTimer = new (_crd && Timer === void 0 ? (_reportPossibleCrUseOfTimer({
            error: Error()
          }), Timer) : Timer)(5);
          this.TenSecondTimer = new (_crd && Timer === void 0 ? (_reportPossibleCrUseOfTimer({
            error: Error()
          }), Timer) : Timer)(10);
          this.SixtySecondTimer = new (_crd && Timer === void 0 ? (_reportPossibleCrUseOfTimer({
            error: Error()
          }), Timer) : Timer)(60);
        }

        update(dt) {
          if (this.OneSecondTimer.update(dt)) {
            (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).OnOneSecondUpdate();
          }

          if (this.TwoSecondTimer.update(dt)) {
            (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).OnTwoSecondUpdate();
          }

          if (this.FiveSecondTimer.update(dt)) {
            (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).OnFiveSecondUpdate();
          }

          if (this.TenSecondTimer.update(dt)) {
            (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).OnTenSecondUpdate();
          }

          if (this.SixtySecondTimer.update(dt)) {
            (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).OnSixtySecondUpdate();
          }
        }

        pad(num) {
          return num < 10 ? '0' + num : num.toString();
        } // 倒计时 单位秒


        TimeToString(lasttime) {
          var hours = Math.floor(lasttime / 3600);
          var minutes = Math.floor((lasttime - hours * 3600) / 60);
          var seconds = lasttime % 60;
          return this.pad(hours) + ":" + this.pad(minutes) + ":" + this.pad(seconds);
        }

      });

      _export("TonTimerMgr", TonTimerMgr = new TonTimerManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1ef4713e30704015349992f783a0eaaeea6c47c4.js.map