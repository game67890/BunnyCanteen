System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ecs, MoveToSystem, EcsPositionSystem, _crd;

  function _reportPossibleCrUseOfecs(extras) {
    _reporterNs.report("ecs", "../../../../../../extensions/oops-plugin-framework/assets/libs/ecs/ECS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMoveToSystem(extras) {
    _reporterNs.report("MoveToSystem", "./MoveTo", _context.meta, extras);
  }

  _export("EcsPositionSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ecs = _unresolved_2.ecs;
    }, function (_unresolved_3) {
      MoveToSystem = _unresolved_3.MoveToSystem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b44c4Rrzl9AeaxCJpg32/WA", "EcsPositionSystem", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-08-11 16:41:12
       * @LastEditors: dgflash
       * @LastEditTime: 2022-07-25 17:05:02
       */


      _export("EcsPositionSystem", EcsPositionSystem = class EcsPositionSystem extends (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).System {
        constructor() {
          super();
          this.add(new (_crd && MoveToSystem === void 0 ? (_reportPossibleCrUseOfMoveToSystem({
            error: Error()
          }), MoveToSystem) : MoveToSystem)());
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2ab281936fec98109f27f424762efa8ca2e902f3.js.map