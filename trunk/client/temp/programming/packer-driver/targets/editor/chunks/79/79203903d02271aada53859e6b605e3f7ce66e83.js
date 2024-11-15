System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, TableSoundEffects, _crd;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  _export("TableSoundEffects", void 0);

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

      _cclegacy._RF.push({}, "ac8f6tJiZlDmZEp4wvIGssM", "TableSoundEffects", undefined);

      _export("TableSoundEffects", TableSoundEffects = class TableSoundEffects {
        constructor() {
          this.data = void 0;

          /** 音效ID【KEY】 */
          this.id = 0;
        }

        init(id) {
          var table = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get(TableSoundEffects.TableName);
          this.data = table[id];
          this.id = id;
        }

        /** 音效路径 */
        get soundpath() {
          return this.data.soundpath;
        }
        /** 是否循环 */


        get loop() {
          return this.data.loop;
        }
        /** 音效大小 */


        get volume() {
          return this.data.volume;
        }

      });

      TableSoundEffects.TableName = "SoundEffects";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=79203903d02271aada53859e6b605e3f7ce66e83.js.map