System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, Vec2, view, _dec, _class, _crd, ccclass, property, LiWuFlyComponent;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      Vec2 = _cc.Vec2;
      view = _cc.view;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "21b32XYLC1PM6xHLwNxdKzQ", "LiWuFlyComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'EventTouch', 'Vec3', 'Sprite', 'Vec2', 'UITransform', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LiWuFlyComponent", LiWuFlyComponent = (_dec = ccclass('LiWuFlyComponent'), _dec(_class = class LiWuFlyComponent extends Component {
        constructor(...args) {
          super(...args);
          this.LiWuCallback = null;
          this.NodeSpeed = 400;
          this.tempPosVec3 = new Vec3();
          this.startPos = new Vec2(0, 0);
          this.zOrder = void 0;
          this.TargetX = 0;
          this.TargetY = 0;
          this.FlyFlag = false;
        }

        beginFly(targetPos, LiWuCallback) {
          this.LiWuCallback = LiWuCallback; // 获取屏幕的大小

          const screenSize = view.getVisibleSize();
          this.startPos.set(this.node.position.x, this.node.position.y);
          this.zOrder = this.node.getSiblingIndex();
          this.node.setSiblingIndex(1001);
          this.TargetX = targetPos.x;
          this.TargetY = targetPos.y;
          this.FlyFlag = true;
        }

        endFly() {
          let p = new Vec3(this.TargetX, this.TargetY, 0);
          this.node.setPosition(p);
          this.node.setSiblingIndex(this.zOrder);
          this.FlyFlag = false;
          this.LiWuCallback();
        }

        update(dt) {
          if (!this.FlyFlag) return;
          let targetPos = new Vec3(this.TargetX, this.TargetY, 0);
          let SelfPos = this.node.getPosition();
          let normalizeVec3 = targetPos.subtract(SelfPos).normalize();
          this.tempPosVec3.set(SelfPos.x + normalizeVec3.x * this.NodeSpeed * dt, SelfPos.y + normalizeVec3.y * this.NodeSpeed * dt, SelfPos.z);
          this.node.setPosition(this.tempPosVec3);
          let flyToPos = new Vec3(this.TargetX, this.TargetY, 0);
          let currentPos = this.node.position;
          let threshold = 5;
          let distance = Vec3.distance(currentPos, flyToPos);

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
//# sourceMappingURL=0e588a7e0ac9dbc58325faed7f619753cd3b06a7.js.map