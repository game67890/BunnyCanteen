System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, Vec2, HeChengMgr, _dec, _class, _crd, ccclass, property, FlyComponent;

  function _reportPossibleCrUseOfHeChengMgr(extras) {
    _reporterNs.report("HeChengMgr", "../hecheng/HeChengManager", _context.meta, extras);
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
      Vec3 = _cc.Vec3;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      HeChengMgr = _unresolved_2.HeChengMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2c177WE6IZBWoOpcYajjK4S", "FlyComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'EventTouch', 'Vec3', 'Sprite', 'Vec2', 'UITransform', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FlyComponent", FlyComponent = (_dec = ccclass('FlyComponent'), _dec(_class = class FlyComponent extends Component {
        constructor() {
          super(...arguments);
          this.NodeSpeed = 200;
          this.tempPosVec3 = new Vec3();
          this.FlyFlag = false;
          this.zOrder = void 0;
          this.parentZOrder = void 0;
          this.startPos = new Vec2(0, 0);
          this.srcIndex = 0;
          this.destIndex = 0;
          this.TargetX = 0;
          this.TargetY = 0;
        }

        beginFly(srcIndex, destIndex, targetPosX, targetPosY) {
          this.srcIndex = srcIndex;
          this.destIndex = destIndex;
          this.TargetX = targetPosX;
          this.TargetY = targetPosY;
          this.startPos.set(this.node.position.x, this.node.position.y);
          this.parentZOrder = this.node.parent.getSiblingIndex();
          this.node.parent.setSiblingIndex(1000);
          this.zOrder = this.node.getSiblingIndex();
          this.node.setSiblingIndex(1000);
          this.FlyFlag = true;
        }

        endFly() {
          var p = new Vec3(this.startPos.x, this.startPos.y, 0);
          this.node.setPosition(p);
          this.node.parent.setSiblingIndex(this.parentZOrder);
          this.node.setSiblingIndex(this.zOrder);
          this.FlyFlag = false; //相同素材进行合成操作

          (_crd && HeChengMgr === void 0 ? (_reportPossibleCrUseOfHeChengMgr({
            error: Error()
          }), HeChengMgr) : HeChengMgr).HandleHecheng(this.srcIndex, this.destIndex);
        }

        update(dt) {
          if (!this.FlyFlag) return;
          var targetPos = new Vec3(this.TargetX, this.TargetY, 0);
          var SelfPos = this.node.getPosition();
          var normalizeVec3 = targetPos.subtract(SelfPos).normalize();
          this.tempPosVec3.set(SelfPos.x + normalizeVec3.x * this.NodeSpeed * dt, SelfPos.y + normalizeVec3.y * this.NodeSpeed * dt, SelfPos.z);
          this.node.setPosition(this.tempPosVec3);
          var flyToPos = new Vec3(this.TargetX, this.TargetY, 0);
          var currentPos = this.node.position;
          var threshold = 5;
          var distance = Vec3.distance(currentPos, flyToPos);

          if (distance <= threshold) {
            this.endFly();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=57d97df088a9d713f622bee915a7ed38db028d35.js.map