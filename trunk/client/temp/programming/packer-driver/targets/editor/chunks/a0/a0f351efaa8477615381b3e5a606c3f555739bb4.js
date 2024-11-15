System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Sprite, Button, IVirtualGridListItem, oops, UtilMgr, PaymentMgr, ProtocolMgr, TaskMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, TaskListItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIVirtualGridListItem(extras) {
    _reporterNs.report("IVirtualGridListItem", "../../../resources/libs/virtual_grid_list/interface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPaymentMgr(extras) {
    _reporterNs.report("PaymentMgr", "../payment/PaymentManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocolMgr(extras) {
    _reporterNs.report("ProtocolMgr", "../manager/ProtocolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskMgr(extras) {
    _reporterNs.report("TaskMgr", "../task/TaskManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpReturn(extras) {
    _reporterNs.report("HttpReturn", "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      Button = _cc.Button;
    }, function (_unresolved_2) {
      IVirtualGridListItem = _unresolved_2.IVirtualGridListItem;
    }, function (_unresolved_3) {
      oops = _unresolved_3.oops;
    }, function (_unresolved_4) {
      UtilMgr = _unresolved_4.UtilMgr;
    }, function (_unresolved_5) {
      PaymentMgr = _unresolved_5.PaymentMgr;
    }, function (_unresolved_6) {
      ProtocolMgr = _unresolved_6.ProtocolMgr;
    }, function (_unresolved_7) {
      TaskMgr = _unresolved_7.TaskMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a02cbccqDFPTpr1fXwz5rJ+", "TaskListItem", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Sprite', 'math', 'SpriteFrame', 'Node', 'Button']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TaskListItem", TaskListItem = (_dec = ccclass('TaskListItem'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Button), _dec6 = property(Label), _dec7 = property(Sprite), _dec(_class = (_class2 = class TaskListItem extends (_crd && IVirtualGridListItem === void 0 ? (_reportPossibleCrUseOfIVirtualGridListItem({
        error: Error()
      }), IVirtualGridListItem) : IVirtualGridListItem) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "taskIcon", _descriptor, this);

          _initializerDefineProperty(this, "taskName", _descriptor2, this);

          _initializerDefineProperty(this, "jiangliNum", _descriptor3, this);

          _initializerDefineProperty(this, "goBtn", _descriptor4, this);

          _initializerDefineProperty(this, "goBtnLabel", _descriptor5, this);

          _initializerDefineProperty(this, "doneImg", _descriptor6, this);
        }

        onDataChanged() {
          const data = this.data;
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).SetImage(this.taskIcon, data.taskicon);
          this.taskName.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID(data.tasktips);
          this.goBtnLabel.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_204");
          this.jiangliNum.string = data.carrotcoinnum.toString();

          if (data.isFinished) {
            this.goBtn.node.active = false;
            this.doneImg.node.active = true;
          } else {
            this.goBtn.node.active = true;
            this.doneImg.node.active = false;
          }
        }

        onClickGo() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          console.log("onClickGo id=" + this.data.id);

          if (this.data.tasktype == 1) {
            //加入官方通知频道
            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).joinChannel();
            const dataParam = {};
            dataParam.missionType = this.data.tasktype;
            const param = JSON.stringify(dataParam);

            var completeMission = ret => {
              if (ret.isSucc && ret.res.result) {
                this.goBtn.node.active = false;
                this.doneImg.node.active = true;
                (_crd && TaskMgr === void 0 ? (_reportPossibleCrUseOfTaskMgr({
                  error: Error()
                }), TaskMgr) : TaskMgr).modifyTaskData(this.data.id, true);
              }
            };

            (_crd && ProtocolMgr === void 0 ? (_reportPossibleCrUseOfProtocolMgr({
              error: Error()
            }), ProtocolMgr) : ProtocolMgr).sendUpdateMission(completeMission, param);
          } else if (this.data.tasktype == 2) {
            //使用官方bot
            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).openBot();
            const dataParam = {};
            dataParam.missionType = this.data.tasktype;
            const param = JSON.stringify(dataParam);

            var completeMission = ret => {
              if (ret.isSucc && ret.res.result) {
                this.goBtn.node.active = false;
                this.doneImg.node.active = true;
                (_crd && TaskMgr === void 0 ? (_reportPossibleCrUseOfTaskMgr({
                  error: Error()
                }), TaskMgr) : TaskMgr).modifyTaskData(this.data.id, true);
              }
            };

            (_crd && ProtocolMgr === void 0 ? (_reportPossibleCrUseOfProtocolMgr({
              error: Error()
            }), ProtocolMgr) : ProtocolMgr).sendUpdateMission(completeMission, param);
          } else if (this.data.tasktype == 3) {
            //浏览官方频道
            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).joinChannel();
            const dataParam = {};
            dataParam.missionType = this.data.tasktype;
            const param = JSON.stringify(dataParam);

            var completeMission = ret => {
              if (ret.isSucc && ret.res.result) {
                this.goBtn.node.active = false;
                this.doneImg.node.active = true;
                (_crd && TaskMgr === void 0 ? (_reportPossibleCrUseOfTaskMgr({
                  error: Error()
                }), TaskMgr) : TaskMgr).modifyTaskData(this.data.id, true);
              }
            };

            (_crd && ProtocolMgr === void 0 ? (_reportPossibleCrUseOfProtocolMgr({
              error: Error()
            }), ProtocolMgr) : ProtocolMgr).sendUpdateMission(completeMission, param);
          } else if (this.data.tasktype == 4) {//日常签到
          } else if (this.data.tasktype == 5) {
            //日常充值
            (_crd && PaymentMgr === void 0 ? (_reportPossibleCrUseOfPaymentMgr({
              error: Error()
            }), PaymentMgr) : PaymentMgr).OpenPaymentUI();
          }
        }

        onDestroy() {
          super.onDestroy();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "taskIcon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "taskName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "jiangliNum", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "goBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "goBtnLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "doneImg", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a0f351efaa8477615381b3e5a606c3f555739bb4.js.map