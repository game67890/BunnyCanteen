System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, _decorator, oops, EventMessage, TimeUtil, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, menu, LabelTime;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMessage(extras) {
    _reporterNs.report("EventMessage", "../../../core/common/event/EventMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTimeUtil(extras) {
    _reporterNs.report("TimeUtil", "../../../core/utils/TimeUtils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      EventMessage = _unresolved_3.EventMessage;
    }, function (_unresolved_4) {
      TimeUtil = _unresolved_4.TimeUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57786GMN6RPbaAT9b9RmX18", "LabelTime", undefined);

      __checkObsolete__(['Label', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      _export("default", LabelTime = (_dec = ccclass("LabelTime"), _dec2 = menu('ui/label/LabelTime'), _dec3 = property({
        tooltip: "到计时间总时间（单位秒）"
      }), _dec4 = property({
        tooltip: "天数数据格式化"
      }), _dec5 = property({
        tooltip: "时间格式化"
      }), _dec6 = property({
        tooltip: "是否有00"
      }), _dec(_class = _dec2(_class = (_class2 = class LabelTime extends Label {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "countDown", _descriptor, this);

          _initializerDefineProperty(this, "dayFormat", _descriptor2, this);

          _initializerDefineProperty(this, "timeFormat", _descriptor3, this);

          _initializerDefineProperty(this, "zeroize", _descriptor4, this);

          this.backStartTime = 0;
          // 进入后台开始时间
          this.dateDisable = void 0;
          // 时间能否由天数显示
          this.result = void 0;
          // 时间结果字符串

          /** 每秒触发事件 */
          this.onSecond = null;

          /** 倒计时完成事件 */
          this.onComplete = null;
        }

        replace(value) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          return value.replace(/\{(\d+)\}/g, function (m, i) {
            return args[i];
          });
        }
        /** 格式化字符串 */


        format() {
          var c = this.countDown;
          var date = Math.floor(c / 86400);
          c = c - date * 86400;
          var hours = Math.floor(c / 3600);
          c = c - hours * 3600;
          var minutes = Math.floor(c / 60);
          c = c - minutes * 60;
          var seconds = c;
          this.dateDisable = this.dateDisable || false;

          if (date == 0 && hours == 0 && minutes == 0 && seconds == 0) {
            if (this.zeroize) {
              this.result = this.replace(this.timeFormat, "00", "00", "00");
            } else {
              this.result = this.replace(this.timeFormat, "0", "0", "0");
            }
          } else if (date > 0 && !this.dateDisable) {
            var dataFormat = this.dayFormat;
            var index = dataFormat.indexOf("{1}");

            if (hours == 0 && index > -1) {
              dataFormat = dataFormat.substring(0, index - 1);
            }

            var df = dataFormat;

            if (date > 1 && dataFormat.indexOf("days") < 0) {
              df = df.replace("day", "days");
            }

            if (date < 2) {
              df = df.replace("days", "day");
            }

            this.result = this.replace(df, date, hours); // 如果天大于1，则显示 "1 Day..."
          } else {
            hours += date * 24;

            if (this.zeroize) {
              this.result = this.replace(this.timeFormat, this.coverString(hours), this.coverString(minutes), this.coverString(seconds)); // 否则显示 "01:12:24"
            } else {
              this.result = this.replace(this.timeFormat, hours, minutes, seconds);
            }
          }

          this.string = this.result;
        }
        /** 个位数的时间数据将字符串补位 */


        coverString(value) {
          if (value < 10) return "0" + value;
          return value.toString();
        }
        /** 设置时间能否由天数显示 */


        setDateDisable(flag) {
          this.dateDisable = flag;
        }
        /**
         * 设置倒计时时间
         * @param second        倒计时时间（单位秒）
         */


        setTime(second) {
          this.countDown = second; // 倒计时，初始化显示字符串

          this.timing_end();
          this.timing_start();
          this.format();
        }
        /**
         * 设置结束时间戳倒计时
         * @param timeStamp     时间戳
         */


        setTimeStamp(timeStamp) {
          this.countDown = (_crd && TimeUtil === void 0 ? (_reportPossibleCrUseOfTimeUtil({
            error: Error()
          }), TimeUtil) : TimeUtil).secsBetween((_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).timer.getServerTime(), timeStamp);
          this.timing_end();
          this.timing_start();
          this.format();
        }

        start() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.on((_crd && EventMessage === void 0 ? (_reportPossibleCrUseOfEventMessage({
            error: Error()
          }), EventMessage) : EventMessage).GAME_SHOW, this.onGameShow, this);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.on((_crd && EventMessage === void 0 ? (_reportPossibleCrUseOfEventMessage({
            error: Error()
          }), EventMessage) : EventMessage).GAME_HIDE, this.onGameHide, this);
          this.timing_start();
          this.format();
        }

        onDestroy() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.off((_crd && EventMessage === void 0 ? (_reportPossibleCrUseOfEventMessage({
            error: Error()
          }), EventMessage) : EventMessage).GAME_SHOW, this.onGameShow, this);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.off((_crd && EventMessage === void 0 ? (_reportPossibleCrUseOfEventMessage({
            error: Error()
          }), EventMessage) : EventMessage).GAME_HIDE, this.onGameHide, this);
        }

        onGameShow() {
          var interval = Math.floor(((_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).timer.getTime() - (this.backStartTime || (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).timer.getTime())) / 1000);
          this.countDown -= interval;

          if (this.countDown < 0) {
            this.countDown = 0;
            this.onScheduleComplete();
          }
        }

        onGameHide() {
          this.backStartTime = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).timer.getTime();
        }

        onScheduleSecond() {
          this.countDown--;
          this.format();
          if (this.onSecond) this.onSecond(this.node);

          if (this.countDown == 0) {
            this.onScheduleComplete();
          }
        }

        onScheduleComplete() {
          this.timing_end();
          this.format();
          if (this.onComplete) this.onComplete(this.node);
        }
        /** 开始计时 */


        timing_start() {
          this.schedule(this.onScheduleSecond, 1);
        }

        timing_end() {
          this.unscheduleAllCallbacks();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "countDown", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1000;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dayFormat", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "{0} day";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "timeFormat", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "{0}:{1}:{2}";
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "zeroize", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4a6936b4101fa9f682861edf755f3d70e87a74b6.js.map