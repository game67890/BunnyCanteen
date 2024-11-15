System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, Label, oops, UIID, UtilMgr, TaskMgr, TaskVirtualGridList, VirtualGridList, TonGameMgr, GameEvent, TaskTabController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, TaskComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../framework/common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskMgr(extras) {
    _reporterNs.report("TaskMgr", "./TaskManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskVirtualGridList(extras) {
    _reporterNs.report("TaskVirtualGridList", "./TaskVirtualGridList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVirtualGridList(extras) {
    _reporterNs.report("VirtualGridList", "../../../resources/libs/virtual_grid_list/virtual_grid_list", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonGameMgr(extras) {
    _reporterNs.report("TonGameMgr", "../manager/TonGameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../framework/common/config/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskTabController(extras) {
    _reporterNs.report("TaskTabController", "./TaskTabController", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      UIID = _unresolved_3.UIID;
    }, function (_unresolved_4) {
      UtilMgr = _unresolved_4.UtilMgr;
    }, function (_unresolved_5) {
      TaskMgr = _unresolved_5.TaskMgr;
    }, function (_unresolved_6) {
      TaskVirtualGridList = _unresolved_6.TaskVirtualGridList;
    }, function (_unresolved_7) {
      VirtualGridList = _unresolved_7.VirtualGridList;
    }, function (_unresolved_8) {
      TonGameMgr = _unresolved_8.TonGameMgr;
    }, function (_unresolved_9) {
      GameEvent = _unresolved_9.GameEvent;
    }, function (_unresolved_10) {
      TaskTabController = _unresolved_10.TaskTabController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e27f8cggmFNzY5gfBk2Gkq2", "TaskComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'Label', 'ScrollView', 'instantiate', 'UITransform', 'Prefab', 'Vec3', 'Texture2D']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TaskComponent", TaskComponent = (_dec = ccclass('TaskComponent'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(_crd && TaskVirtualGridList === void 0 ? (_reportPossibleCrUseOfTaskVirtualGridList({
        error: Error()
      }), TaskVirtualGridList) : TaskVirtualGridList), _dec8 = property(_crd && VirtualGridList === void 0 ? (_reportPossibleCrUseOfVirtualGridList({
        error: Error()
      }), VirtualGridList) : VirtualGridList), _dec(_class = (_class2 = class TaskComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "userHead", _descriptor, this);

          _initializerDefineProperty(this, "userNameLabel", _descriptor2, this);

          _initializerDefineProperty(this, "carrotCoinLabel", _descriptor3, this);

          _initializerDefineProperty(this, "taskLabel", _descriptor4, this);

          _initializerDefineProperty(this, "achievementLabel", _descriptor5, this);

          _initializerDefineProperty(this, "taskGridList", _descriptor6, this);

          _initializerDefineProperty(this, "achievementGridList", _descriptor7, this);

          this._taskDataList = [];
          this._achievementDataList = [];
        }

        onAdded(params) {
          const taskTabController = this.node.getComponentInChildren(_crd && TaskTabController === void 0 ? (_reportPossibleCrUseOfTaskTabController({
            error: Error()
          }), TaskTabController) : TaskTabController);

          if (taskTabController) {
            taskTabController.selectTab(0);
          }

          this.taskLabel.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_115");
          this.achievementLabel.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_116");
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).ShowUserHead((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).UserId, this.userHead);

          if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).UserName) {
            this.userNameLabel.string = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).UserName;
          } else {
            this.userNameLabel.string = "User_" + (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).UserId.substring(0, 8);
          }

          this.carrotCoinLabel.string = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CarrotCoin.toString();

          if ((_crd && TaskMgr === void 0 ? (_reportPossibleCrUseOfTaskMgr({
            error: Error()
          }), TaskMgr) : TaskMgr).ServerTaskList) {
            this.ShowTaskList();
            (_crd && TaskMgr === void 0 ? (_reportPossibleCrUseOfTaskMgr({
              error: Error()
            }), TaskMgr) : TaskMgr).GetTaskData();
          } else {
            (_crd && TaskMgr === void 0 ? (_reportPossibleCrUseOfTaskMgr({
              error: Error()
            }), TaskMgr) : TaskMgr).GetTaskData(res => {
              if (res.userName) {
                this.userNameLabel.string = res.userName;
              } else {
                this.userNameLabel.string = "User_" + (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).UserId.substring(0, 8);
              }

              (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).UserName = res.userName;
              let taskList = JSON.parse(res.mission);
              let achievementList = JSON.parse(res.achievement);
              (_crd && TaskMgr === void 0 ? (_reportPossibleCrUseOfTaskMgr({
                error: Error()
              }), TaskMgr) : TaskMgr).ServerTaskList = taskList;
              (_crd && TaskMgr === void 0 ? (_reportPossibleCrUseOfTaskMgr({
                error: Error()
              }), TaskMgr) : TaskMgr).ServerAchievementList = achievementList;
              this.ShowTaskList();
            });
          }

          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateCarrotCoin, this.onUpdateData, this);
          return true;
        }

        onDestroy() {
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
            }), GameEvent) : GameEvent).UpdateCarrotCoin:
              this.updateCarrotCoin();
              break;
          }
        }

        updateCarrotCoin() {
          this.carrotCoinLabel.string = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CarrotCoin.toString();
        }

        ShowTaskList() {
          this._taskDataList = [];
          let TaskCellList = (_crd && TaskMgr === void 0 ? (_reportPossibleCrUseOfTaskMgr({
            error: Error()
          }), TaskMgr) : TaskMgr).GetTaskCelllist();
          let TaskGroup = 0;

          for (const id in TaskCellList) {
            let TaskData = TaskCellList[id];
            let ServerData = JSON.parse((_crd && TaskMgr === void 0 ? (_reportPossibleCrUseOfTaskMgr({
              error: Error()
            }), TaskMgr) : TaskMgr).ServerTaskList[TaskData.id]);
            TaskData.isFinished = ServerData.isFinished;
            TaskData.progress = ServerData.progress;

            if (TaskGroup != TaskData.taskgroup) {
              TaskGroup = TaskData.taskgroup;
              TaskData.TitleId = TaskGroup;
              let TitleData = JSON.parse(JSON.stringify(TaskData));

              this._taskDataList.push(TitleData);
            }

            TaskData.TitleId = 0;

            this._taskDataList.push(TaskData);
          }

          this.initTaskGridList();
        }

        initTaskGridList() {
          /*  paddingTop: 列表距离上边缘距离 默认为0
          paddingBottom: 列表距离下边缘距离 默认为0
          spacingX: 列间距 默认为3
          spacingY: 行间距 默认为3
          columnNum: 列数 默认为0，自动适配容器宽度
          useVirtualLayout: 是否启用虚拟列表 默认为true
          emptyTip: 没有数据显示提示
          cacheImage: 是否缓存列表中加载过的图片，控件回收后，图片缓存将被全部释放。
          */
          if (this.taskGridList) {
            this.taskGridList.clearList();
            this.taskGridList.initGridList({
              paddingTop: 10,
              paddingBottom: 10,
              spacingX: 10,
              spacingY: 5,
              columnNum: 1,
              useVirtualLayout: true,
              emptyTip: '',
              cacheImage: true
            });
            this.taskGridList.appendItemsToDisplayList(this._taskDataList);
          }
        }

        ShowAchievementList() {
          this._achievementDataList = [];
          let AchievementCellList = (_crd && TaskMgr === void 0 ? (_reportPossibleCrUseOfTaskMgr({
            error: Error()
          }), TaskMgr) : TaskMgr).GetAchievementCellList();

          for (const id in AchievementCellList) {
            let AchievementData = AchievementCellList[id];
            let ServerData = JSON.parse((_crd && TaskMgr === void 0 ? (_reportPossibleCrUseOfTaskMgr({
              error: Error()
            }), TaskMgr) : TaskMgr).ServerAchievementList[AchievementData.id]);
            AchievementData.isFinished = ServerData.isFinished;
            AchievementData.progress = ServerData.progress;

            this._achievementDataList.push(AchievementData);
          }

          this.initAchievementGridList();
        }

        initAchievementGridList() {
          /*  paddingTop: 列表距离上边缘距离 默认为0
          paddingBottom: 列表距离下边缘距离 默认为0
          spacingX: 列间距 默认为3
          spacingY: 行间距 默认为3
          columnNum: 列数 默认为0，自动适配容器宽度
          useVirtualLayout: 是否启用虚拟列表 默认为true
          emptyTip: 没有数据显示提示
          cacheImage: 是否缓存列表中加载过的图片，控件回收后，图片缓存将被全部释放。
          */
          if (this.achievementGridList) {
            this.achievementGridList.clearList();
            this.achievementGridList.initGridList({
              paddingTop: 10,
              paddingBottom: 10,
              spacingX: 10,
              spacingY: 5,
              columnNum: 1,
              useVirtualLayout: true,
              emptyTip: '',
              cacheImage: true
            });
            this.achievementGridList.appendItemsToDisplayList(this._achievementDataList);
          }
        }

        onClose() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(19);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.remove((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).Task);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "userHead", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "userNameLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "carrotCoinLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "taskLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "achievementLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "taskGridList", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "achievementGridList", [_dec8], {
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
//# sourceMappingURL=d05ea815fb736c43c4a287528aee3ecf922979d5.js.map