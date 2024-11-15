System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, oops, UIID, ProtocolMgr, TableTask, TableAchievement, JsonUtil, TaskManager, _crd, TaskMgr;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../framework/common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocolMgr(extras) {
    _reporterNs.report("ProtocolMgr", "../manager/ProtocolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpReturn(extras) {
    _reporterNs.report("HttpReturn", "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableTask(extras) {
    _reporterNs.report("TableTask", "../../framework/common/table/TableTask", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableAchievement(extras) {
    _reporterNs.report("TableAchievement", "../../framework/common/table/TableAchievement", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  _export("TaskManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      UIID = _unresolved_3.UIID;
    }, function (_unresolved_4) {
      ProtocolMgr = _unresolved_4.ProtocolMgr;
    }, function (_unresolved_5) {
      TableTask = _unresolved_5.TableTask;
    }, function (_unresolved_6) {
      TableAchievement = _unresolved_6.TableAchievement;
    }, function (_unresolved_7) {
      JsonUtil = _unresolved_7.JsonUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d9ad4ldJTpEQICPV3rtAjCd", "TaskManager", undefined);

      _export("TaskManager", TaskManager = class TaskManager {
        constructor() {
          this._tsTask = new (_crd && TableTask === void 0 ? (_reportPossibleCrUseOfTableTask({
            error: Error()
          }), TableTask) : TableTask)();
          this._tsAchievement = new (_crd && TableAchievement === void 0 ? (_reportPossibleCrUseOfTableAchievement({
            error: Error()
          }), TableAchievement) : TableAchievement)();
          this.ServerTaskList = null;
          this.ServerAchievementList = null;
          this.TaskCellList = [];
          this.AchievementCellList = [];
        }

        OpenTaskUI() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).Task);
        }

        GetTaskData(callback) {
          var completeLogin = ret => {
            console.log(ret.res);

            if (ret.isSucc && ret.res.result) {
              if (callback) {
                callback(ret.res);
              }
            }
          };

          (_crd && ProtocolMgr === void 0 ? (_reportPossibleCrUseOfProtocolMgr({
            error: Error()
          }), ProtocolMgr) : ProtocolMgr).sendTaskPanel(completeLogin, "");
        }

        modifyTaskData(TaskID, IsFinished) {
          for (var key in TaskMgr.ServerTaskList) {
            if (TaskMgr.ServerTaskList.hasOwnProperty(key)) {
              var value = TaskMgr.ServerTaskList[key];
              var valueObject = JSON.parse(value);

              if (valueObject.ID == TaskID) {
                valueObject.isFinished = IsFinished;
                TaskMgr.ServerTaskList[key] = JSON.stringify(valueObject);
                return true;
              }
            }
          }

          return false;
        }

        modifyAchievementData(AchievementID, IsFinished) {
          for (var key in TaskMgr.ServerAchievementList) {
            if (TaskMgr.ServerAchievementList.hasOwnProperty(key)) {
              var value = TaskMgr.ServerAchievementList[key];
              var valueObject = JSON.parse(value);

              if (valueObject.ID == AchievementID) {
                valueObject.isFinished = IsFinished;
                TaskMgr.ServerAchievementList[key] = JSON.stringify(valueObject);
                return true;
              }
            }
          }

          return false;
        }

        canGetAchievementReward(AchievementID) {
          for (var key in TaskMgr.ServerAchievementList) {
            if (TaskMgr.ServerAchievementList.hasOwnProperty(key)) {
              var value = TaskMgr.ServerAchievementList[key];
              var valueObject = JSON.parse(value);

              if (valueObject.ID == AchievementID) {
                if (valueObject.isFinished) {
                  return false;
                } else {
                  this._tsAchievement.init(AchievementID);

                  if (valueObject.progress >= this._tsAchievement.condition) {
                    return true;
                  } else {
                    return false;
                  }
                }
              }
            }
          }

          return false;
        }

        IsHasTaskType(TaskType) {
          var jsonTable = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get((_crd && TableTask === void 0 ? (_reportPossibleCrUseOfTableTask({
            error: Error()
          }), TableTask) : TableTask).TableName);

          if (jsonTable) {
            for (var id in jsonTable) {
              var task = jsonTable[id];

              if (task.tasktype == TaskType) {
                return true;
              }
            }
          }

          return false;
        }

        GetTaskCelllist() {
          this.TaskCellList = [];
          var jsonTable = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get((_crd && TableTask === void 0 ? (_reportPossibleCrUseOfTableTask({
            error: Error()
          }), TableTask) : TableTask).TableName);

          if (jsonTable) {
            for (var id in jsonTable) {
              var task = jsonTable[id];
              task.id = Number(id);
              this.TaskCellList.push(task);
            }
          }

          return this.TaskCellList;
        }

        GetAchievementCellList() {
          this.AchievementCellList = [];
          var jsonTable = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get((_crd && TableAchievement === void 0 ? (_reportPossibleCrUseOfTableAchievement({
            error: Error()
          }), TableAchievement) : TableAchievement).TableName);

          if (jsonTable) {
            var AchievementType = 0;

            for (var id in jsonTable) {
              var Achievement = jsonTable[id];

              if (AchievementType != Achievement.achievetype) {
                AchievementType = Achievement.achievetype;
                Achievement.id = Number(id);
                this.AchievementCellList.push(Achievement);
              }
            }
          }

          return this.AchievementCellList;
        }

        GetAchievementItemCellList(AchievementType) {
          this.AchievementCellList = [];
          var jsonTable = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get((_crd && TableAchievement === void 0 ? (_reportPossibleCrUseOfTableAchievement({
            error: Error()
          }), TableAchievement) : TableAchievement).TableName);

          if (jsonTable) {
            for (var id in jsonTable) {
              var Achievement = jsonTable[id];

              if (AchievementType == Achievement.achievetype) {
                Achievement.id = Number(id);
                this.AchievementCellList.push(Achievement);
              }
            }
          }

          return this.AchievementCellList;
        }

      });

      _export("TaskMgr", TaskMgr = new TaskManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ff0daba192528d984781abdfd6ae8f0422528a8c.js.map