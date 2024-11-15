System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, TableTask, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  _export("TableTask", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      JsonUtil = _unresolved_2.JsonUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "debd0BufaROoLsLa6I2SwL3", "TableTask", undefined);

      _export("TableTask", TableTask = class TableTask {
        constructor() {
          this.data = void 0;

          /** 任务ID【KEY】 */
          this.id = 0;
        }

        init(id) {
          var table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(TableTask.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 任务分组 */
        get taskgroup() {
          return this.data.taskgroup;
        }
        /** 任务类型 */


        get tasktype() {
          return this.data.tasktype;
        }
        /** 任务参数 */


        get taskpara() {
          return this.data.taskpara;
        }
        /** 任务图标 */


        get taskicon() {
          return this.data.taskicon;
        }
        /** 任务描述 */


        get tasktips() {
          return this.data.tasktips;
        }
        /** 奖励数量 */


        get carrotcoinnum() {
          return this.data.carrotcoinnum;
        }
        /** 是否每日刷新 */


        get refresh() {
          return this.data.refresh;
        }

      });

      TableTask.TableName = "Task";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=36461245b84d534c5a58f2c5de92a7e98371a904.js.map