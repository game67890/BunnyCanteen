System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, oops, UIID, Button, CarrotComponent, StringUtil, CarrotMgr, TableRadishAwardWeight, TableOtherParameter, UtilMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, CarrotRewardComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../framework/common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCarrotComponent(extras) {
    _reporterNs.report("CarrotComponent", "./CarrotComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStringUtil(extras) {
    _reporterNs.report("StringUtil", "../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCarrotMgr(extras) {
    _reporterNs.report("CarrotMgr", "./CarrotManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableRadishAwardWeight(extras) {
    _reporterNs.report("TableRadishAwardWeight", "../../framework/common/table/TableRadishAwardWeight", _context.meta, extras);
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
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      UIID = _unresolved_3.UIID;
    }, function (_unresolved_4) {
      CarrotComponent = _unresolved_4.CarrotComponent;
    }, function (_unresolved_5) {
      StringUtil = _unresolved_5.StringUtil;
    }, function (_unresolved_6) {
      CarrotMgr = _unresolved_6.CarrotMgr;
    }, function (_unresolved_7) {
      TableRadishAwardWeight = _unresolved_7.TableRadishAwardWeight;
    }, function (_unresolved_8) {
      TableOtherParameter = _unresolved_8.TableOtherParameter;
    }, function (_unresolved_9) {
      UtilMgr = _unresolved_9.UtilMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c1b87hSA21P4b3y1cqvIKTn", "CarrotRewardComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label']);

      __checkObsolete__(['Button']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CarrotRewardComponent", CarrotRewardComponent = (_dec = ccclass('CarrotRewardComponent'), _dec2 = property(Button), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Button), _dec6 = property(Label), _dec(_class = (_class2 = class CarrotRewardComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "CloseBtn", _descriptor, this);

          _initializerDefineProperty(this, "TitleTxt", _descriptor2, this);

          _initializerDefineProperty(this, "ShowTxt", _descriptor3, this);

          _initializerDefineProperty(this, "SureBtn", _descriptor4, this);

          _initializerDefineProperty(this, "SureBtnTxt", _descriptor5, this);

          this.CarrotRecord = new (_crd && TableRadishAwardWeight === void 0 ? (_reportPossibleCrUseOfTableRadishAwardWeight({
            error: Error()
          }), TableRadishAwardWeight) : TableRadishAwardWeight)();
          this.updateTime = 0;
        }

        start() {}

        update(deltaTime) {
          if (this.updateTime > 0) {
            this.updateTime = this.updateTime - deltaTime;

            if (this.updateTime <= 0) {
              this.updateTime == 0;

              if ((_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
                error: Error()
              }), CarrotMgr) : CarrotMgr).LeftTimes > 0 || (_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
                error: Error()
              }), CarrotMgr) : CarrotMgr).CarrotRewardList.length > 0) {
                this.onCloseBtnClick();
              }
            }
          }
        }

        onAdded(params) {
          this.TitleTxt.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_031");
          this.SureBtnTxt.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_175");
          this.ShowRewardInfo();
          return true;
        }

        ShowRewardInfo() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(2);
          let tablerecord = new (_crd && TableOtherParameter === void 0 ? (_reportPossibleCrUseOfTableOtherParameter({
            error: Error()
          }), TableOtherParameter) : TableOtherParameter)();
          tablerecord.init(2);
          this.updateTime = Number(tablerecord.parameter);
          let List = [];

          for (let i = 0; i < (_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
            error: Error()
          }), CarrotMgr) : CarrotMgr).CarrotRewardList.length; i++) {
            if (i == 0) {
              this.CarrotRecord.init(Number((_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
                error: Error()
              }), CarrotMgr) : CarrotMgr).CarrotRewardList[i].config));
              this.ShowTxt.string = (_crd && StringUtil === void 0 ? (_reportPossibleCrUseOfStringUtil({
                error: Error()
              }), StringUtil) : StringUtil).substitute_1((_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).language.getLangByID("stringres_033"), (_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
                error: Error()
              }), CarrotMgr) : CarrotMgr).CarrotRewardList[i].speed.toString() + "/s", (_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
                error: Error()
              }), CarrotMgr) : CarrotMgr).CarrotRewardList[i].time) + "\n" + (_crd && StringUtil === void 0 ? (_reportPossibleCrUseOfStringUtil({
                error: Error()
              }), StringUtil) : StringUtil).substitute_1((_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).language.getLangByID("stringres_034"), (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).language.getLangByID(this.CarrotRecord.radishname), this.CarrotRecord.radishweight.toString() + "kg") + "\n";
            } else {
              List.push((_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
                error: Error()
              }), CarrotMgr) : CarrotMgr).CarrotRewardList[i]);
            }
          }

          (_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
            error: Error()
          }), CarrotMgr) : CarrotMgr).CarrotRewardList = List;
        } // 点击关闭按钮


        onCloseBtnClick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);

          if ((_crd && CarrotMgr === void 0 ? (_reportPossibleCrUseOfCarrotMgr({
            error: Error()
          }), CarrotMgr) : CarrotMgr).CarrotRewardList.length > 0) {
            this.ShowRewardInfo();
            return;
          }

          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.remove((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).CarrotReward);
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "CloseBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "TitleTxt", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ShowTxt", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "SureBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "SureBtnTxt", [_dec6], {
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
//# sourceMappingURL=e684ebf1e81a96a220bf8e321cbb57bce14fe230.js.map