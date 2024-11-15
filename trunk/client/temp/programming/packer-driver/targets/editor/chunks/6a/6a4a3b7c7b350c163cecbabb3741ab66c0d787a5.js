System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, oops, UIID, GameEvent, TonGameMgr, StringUtil, Button, CarrotMgr, Slider, Toggle, CarrotComponent, TableOtherParameter, color, UtilMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, CarrotAutoComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../framework/common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../framework/common/config/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonGameMgr(extras) {
    _reporterNs.report("TonGameMgr", "../manager/TonGameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStringUtil(extras) {
    _reporterNs.report("StringUtil", "../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCarrotMgr(extras) {
    _reporterNs.report("CarrotMgr", "./CarrotManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCarrotComponent(extras) {
    _reporterNs.report("CarrotComponent", "./CarrotComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableOtherParameter(extras) {
    _reporterNs.report("TableOtherParameter", "../../framework/common/table/TableOtherParameter", _context.meta, extras);
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
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Button = _cc.Button;
      Slider = _cc.Slider;
      Toggle = _cc.Toggle;
      color = _cc.color;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      UIID = _unresolved_3.UIID;
    }, function (_unresolved_4) {
      GameEvent = _unresolved_4.GameEvent;
    }, function (_unresolved_5) {
      TonGameMgr = _unresolved_5.TonGameMgr;
    }, function (_unresolved_6) {
      StringUtil = _unresolved_6.StringUtil;
    }, function (_unresolved_7) {
      CarrotMgr = _unresolved_7.CarrotMgr;
    }, function (_unresolved_8) {
      CarrotComponent = _unresolved_8.CarrotComponent;
    }, function (_unresolved_9) {
      TableOtherParameter = _unresolved_9.TableOtherParameter;
    }, function (_unresolved_10) {
      UtilMgr = _unresolved_10.UtilMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc66aNIMiFHPIZm/mtIdW6a", "CarrotAutoComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'Prefab', 'instantiate', 'Vec3', 'UITransform']);

      __checkObsolete__(['Button']);

      __checkObsolete__(['Slider']);

      __checkObsolete__(['Toggle']);

      __checkObsolete__(['color']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CarrotAutoComponent", CarrotAutoComponent = (_dec = ccclass('CarrotAutoComponent'), _dec2 = property(Button), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Label), _dec8 = property(Slider), _dec9 = property(Toggle), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Button), _dec13 = property(Label), _dec(_class = (_class2 = class CarrotAutoComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "CloseBtn", _descriptor, this);

          _initializerDefineProperty(this, "TitleName", _descriptor2, this);

          _initializerDefineProperty(this, "JumpTxt", _descriptor3, this);

          _initializerDefineProperty(this, "SubBtn", _descriptor4, this);

          _initializerDefineProperty(this, "AddBtn", _descriptor5, this);

          _initializerDefineProperty(this, "PullTimes", _descriptor6, this);

          _initializerDefineProperty(this, "PullSlider", _descriptor7, this);

          _initializerDefineProperty(this, "CheckBox", _descriptor8, this);

          _initializerDefineProperty(this, "CostCarrotCoinNum", _descriptor9, this);

          _initializerDefineProperty(this, "NeedCostCarrotCoinNum", _descriptor10, this);

          _initializerDefineProperty(this, "StartBtn", _descriptor11, this);

          _initializerDefineProperty(this, "StartBtnTxt", _descriptor12, this);

          this.tablereward = new (_crd && TableOtherParameter === void 0 ? (_reportPossibleCrUseOfTableOtherParameter({
            error: Error()
          }), TableOtherParameter) : TableOtherParameter)();
          this.neednum = 0;
          this._curPullTimes = 0;
        }

        //次数
        onAdded(params) {
          this.init();
          return true;
        }

        onDestroy() {
          this.removeEvent();
        }
        /** 添加全局消息事件 */


        addEvent() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateBaseData, this.onUpdateData, this);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateCarrotCoin, this.onUpdateData, this);
        }
        /** 移除全局消息事件 */


        removeEvent() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateBaseData, this.onUpdateData, this);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateCarrotCoin, this.onUpdateData, this);
        }

        onUpdateData(event, args) {
          switch (event) {
            case (_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).UpdateBaseData:
              this.updateBaseData();
              break;

            case (_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).UpdateCarrotCoin:
              this.updateCarrotCoin();
              break;
          }
        }

        updateBaseData() {
          this.CostCarrotCoinNum.string = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CarrotCoin.toString();
          this.NeedCostCarrotCoinNum.string = "/" + (this.neednum * this._curPullTimes).toString();

          if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CarrotCoin >= this.neednum * this._curPullTimes) {
            this.CostCarrotCoinNum.color = color(85, 5, 5);
          } else {
            this.CostCarrotCoinNum.color = color(255, 0, 0);
          }
        }

        updateCarrotCoin() {
          this.CostCarrotCoinNum.string = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CarrotCoin.toString();
        }

        init() {
          this.TitleName.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_035");
          this.JumpTxt.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_037");
          this.StartBtnTxt.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_178");
          this.tablereward.init(1);
          this.neednum = Number(this.tablereward.parameter);
          this._curPullTimes = 0;
          this.PullSlider.progress = 0;
          this.CheckBox.isChecked = false;
          this.addEvent();
          this.RefreshShowInfo();
        } // 点击关闭按钮


        onCloseBtnClick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(19);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.remove((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).CarrotAuto);
        } // 点击开始按钮


        onStartBtnClick() {
          (_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
            error: Error()
          }), CarrotMgr) : CarrotMgr).LeftTimes = this._curPullTimes;
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.remove((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).CarrotAuto);
          (_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
            error: Error()
          }), CarrotMgr) : CarrotMgr).IsJumpAnim = this.CheckBox.isChecked;

          if ((_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
            error: Error()
          }), CarrotMgr) : CarrotMgr).LeftTimes <= 0) {
            return;
          }

          if (this.CheckBox.isChecked) {
            (_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
              error: Error()
            }), CarrotMgr) : CarrotMgr).SendBaLuoBo((_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
              error: Error()
            }), CarrotMgr) : CarrotMgr).LeftTimes);
            (_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
              error: Error()
            }), CarrotMgr) : CarrotMgr).LeftTimes = 0;
          } else {
            const CarrotMainUI = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.get((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).CarrotMain);

            if (CarrotMainUI) {
              const CarrotMainCom = CarrotMainUI.getComponent(_crd && CarrotComponent === void 0 ? (_reportPossibleCrUseOfCarrotComponent({
                error: Error()
              }), CarrotComponent) : CarrotComponent);

              if (CarrotMainCom) {
                CarrotMainCom.StartPulling();
              }
            }
          }
        } // 点击加号按钮


        onAddBtnClick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);

          if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CarrotCoin - this.neednum * this._curPullTimes < this.neednum) {
            // 当前萝卜币数量不足
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.toast("message_07", true);
            return;
          }

          this._curPullTimes = this._curPullTimes + 1;
          this.RefreshShowInfo();
        } // 点击减号按钮


        onSubBtnClick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);

          if (this._curPullTimes <= 0) {
            return;
          }

          this._curPullTimes = this._curPullTimes - 1;
          this.RefreshShowInfo();
        }

        ChangeSlider() {
          let maxnum = Math.floor((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CarrotCoin / this.neednum); // let maxnum = 10;

          if (maxnum <= 0) {
            this._curPullTimes = 0;
            this.RefreshShowInfo();
            return;
          }

          for (let i = 0; i < maxnum; i++) {
            if (i / maxnum <= this.PullSlider.progress && (i + 1) / maxnum > this.PullSlider.progress) {
              if (this.PullSlider.progress - i / maxnum < (i + 1) / maxnum - this.PullSlider.progress) {
                this._curPullTimes = i;
              } else {
                this._curPullTimes = i + 1;
              }

              break;
            }
          }

          this.RefreshShowInfo();
        } // 刷新次数进度以及花费兔子比显示


        RefreshShowInfo() {
          this.PullTimes.string = (_crd && StringUtil === void 0 ? (_reportPossibleCrUseOfStringUtil({
            error: Error()
          }), StringUtil) : StringUtil).substitute_1((_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_036"), this._curPullTimes);
          this.CostCarrotCoinNum.string = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CarrotCoin.toString();
          this.NeedCostCarrotCoinNum.string = "/" + (this.neednum * this._curPullTimes).toString();

          if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CarrotCoin >= this.neednum * this._curPullTimes) {
            this.CostCarrotCoinNum.color = color(85, 5, 5);
          } else {
            this.CostCarrotCoinNum.color = color(255, 0, 0);
          }

          if (this._curPullTimes <= 0) {
            this.PullSlider.progress = 0;
          } else {
            this.PullSlider.progress = this._curPullTimes / Math.floor((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).CarrotCoin / this.neednum); // this.PullSlider.progress = this._curPullTimes/10;
          }
        } // 点击Checkbox按钮


        onCheckboxClick() {
          if (this.CheckBox.isChecked == false) {
            this.CheckBox.isChecked = true;
          } else {
            this.CheckBox.isChecked = false;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "CloseBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "TitleName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "JumpTxt", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "SubBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "AddBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "PullTimes", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "PullSlider", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "CheckBox", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "CostCarrotCoinNum", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "NeedCostCarrotCoinNum", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "StartBtn", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "StartBtnTxt", [_dec13], {
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
//# sourceMappingURL=6a4a3b7c7b350c163cecbabb3741ab66c0d787a5.js.map