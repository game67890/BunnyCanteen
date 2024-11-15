System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, Vec3, Timer, Vec3Util, ecs, MoveToSystem, _dec, _class, _dec2, _class3, _crd, MoveToComp, VariableMoveToComponent;

  function _reportPossibleCrUseOfTimer(extras) {
    _reporterNs.report("Timer", "../../../../../../extensions/oops-plugin-framework/assets/core/common/timer/Timer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVec3Util(extras) {
    _reporterNs.report("Vec3Util", "../../../../../../extensions/oops-plugin-framework/assets/core/utils/Vec3Util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfecs(extras) {
    _reporterNs.report("ecs", "../../../../../../extensions/oops-plugin-framework/assets/libs/ecs/ECS", _context.meta, extras);
  }

  _export("MoveToSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Timer = _unresolved_2.Timer;
    }, function (_unresolved_3) {
      Vec3Util = _unresolved_3.Vec3Util;
    }, function (_unresolved_4) {
      ecs = _unresolved_4.ecs;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eb55etQ2s5OdYllNHXAsRg1", "MoveTo", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-08-11 16:41:12
       * @LastEditors: dgflash
       * @LastEditTime: 2023-01-19 15:27:24
       */


      __checkObsolete__(['Node', 'Vec3']);

      /** 向目标移动，移动过程中目标位置变化会自动修正移动目标点，直到未修正前移动到目标点停止 */
      _export("MoveToComp", MoveToComp = (_dec = (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).register('MoveTo'), _dec(_class = class MoveToComp extends (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).Comp {
        constructor() {
          super(...arguments);

          /** 移动节点 */
          this.node = null;

          /** 移动方向 */
          this.velocity = (_crd && Vec3Util === void 0 ? (_reportPossibleCrUseOfVec3Util({
            error: Error()
          }), Vec3Util) : Vec3Util).zero;

          /** 移动速度（每秒移动的像素距离） */
          this.speed = 0;

          /** 目标实体ECS编号、目标位置 */
          this.target = null;

          /** 坐标标（默认本地坐标） */
          this.ns = Node.NodeSpace.LOCAL;

          /** 偏移距离 */
          this.offset = 0;

          /** 偏移向量 */
          this.offsetVector = null;

          /** 移动完成回调 */
          this.onComplete = null;

          /** 距离变化时 */
          this.onChange = null;
        }

        reset() {
          this.ns = Node.NodeSpace.LOCAL;
          this.offset = 0;
          this.target = null;
          this.offsetVector = null;
          this.onComplete = null;
          this.onChange = null;
        }

      }) || _class));

      VariableMoveToComponent = (_dec2 = (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).register('VariableMoveTo'), _dec2(_class3 = class VariableMoveToComponent extends (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).Comp {
        constructor() {
          super(...arguments);

          /** 延时触发器 */
          this.timer = new (_crd && Timer === void 0 ? (_reportPossibleCrUseOfTimer({
            error: Error()
          }), Timer) : Timer)();

          /** 终点备份 */
          this.end = null;

          /** 目标位置 */
          this.target = void 0;
        }

        reset() {
          this.end = null;
          this.timer.reset();
        }

      }) || _class3);
      /** 跟踪移动到目标位置 */

      _export("MoveToSystem", MoveToSystem = class MoveToSystem extends (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).ComblockSystem {
        filter() {
          return (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
            error: Error()
          }), ecs) : ecs).allOf(MoveToComp);
        }

        entityEnter(e) {
          e.add(VariableMoveToComponent);
        }

        entityRemove(e) {
          e.remove(VariableMoveToComponent);
        }

        update(e) {
          var move = e.get(MoveToComp);
          var mtv = e.get(VariableMoveToComponent);
          var end;
          console.assert(move.speed > 0, "移动速度必须要大于零");

          if (move.target instanceof Node) {
            end = move.ns == Node.NodeSpace.WORLD ? move.target.worldPosition : move.target.position;
          } else {
            end = move.target;
          } // 目标移动后，重计算移动方向与移动到目标点的速度


          if (mtv.end == null || !mtv.end.strictEquals(end)) {
            var _move$onChange;

            var target = end.clone();

            if (move.offsetVector) {
              target = target.add(move.offsetVector); // 这里的问题
            } // 移动方向与移动数度


            var start = move.ns == Node.NodeSpace.WORLD ? move.node.worldPosition : move.node.position;
            move.velocity = (_crd && Vec3Util === void 0 ? (_reportPossibleCrUseOfVec3Util({
              error: Error()
            }), Vec3Util) : Vec3Util).sub(target, start).normalize(); // 移动时间与目标偏位置计算

            var distance = Vec3.distance(start, target) - move.offset;
            (_move$onChange = move.onChange) == null || _move$onChange.call(this);

            if (distance - move.offset <= 0) {
              this.exit(e);
            } else {
              mtv.timer.step = distance / move.speed;
              mtv.end = end.clone();
              mtv.target = move.velocity.clone().multiplyScalar(distance).add(start);
            }
          }

          if (move.speed > 0) {
            var trans = (_crd && Vec3Util === void 0 ? (_reportPossibleCrUseOfVec3Util({
              error: Error()
            }), Vec3Util) : Vec3Util).mul(move.velocity, move.speed * this.dt);
            move.node.translate(trans, Node.NodeSpace.LOCAL);
          } // 移动完成事件


          if (mtv.timer.update(this.dt)) {
            if (move.ns == Node.NodeSpace.WORLD) move.node.worldPosition = mtv.target;else move.node.position = mtv.target;
            this.exit(e);
          }
        }

        exit(e) {
          var _move$onComplete;

          var move = e.get(MoveToComp);
          (_move$onComplete = move.onComplete) == null || _move$onComplete.call(this);
          e.remove(VariableMoveToComponent);
          e.remove(MoveToComp);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=96b930877d6489b69fa43c157581c914a8f04a7b.js.map