System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, Component, ParticleSystem, _decorator, sp, EffectEvent, message, _dec, _class, _crd, ccclass, property, EffectFinishedRelease;

  function _reportPossibleCrUseOfEffectEvent(extras) {
    _reporterNs.report("EffectEvent", "./EffectEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmessage(extras) {
    _reporterNs.report("message", "../../core/common/event/MessageManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Animation = _cc.Animation;
      Component = _cc.Component;
      ParticleSystem = _cc.ParticleSystem;
      _decorator = _cc._decorator;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      EffectEvent = _unresolved_2.EffectEvent;
    }, function (_unresolved_3) {
      message = _unresolved_3.message;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a751fmayL5JMYH0D4uJoK5H", "EffectFinishedRelease", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-08-19 15:36:08
       * @LastEditors: dgflash
       * @LastEditTime: 2023-03-01 18:28:55
       */


      __checkObsolete__(['Animation', 'Component', 'ParticleSystem', '_decorator', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 动画播放完释放特效 - Animation、ParticleSystem */

      _export("EffectFinishedRelease", EffectFinishedRelease = (_dec = ccclass('EffectFinishedRelease'), _dec(_class = class EffectFinishedRelease extends Component {
        constructor() {
          super(...arguments);

          /** 动画最大播放时间 */
          this.maxDuration = 0;
        }

        onEnable() {
          // SPINE动画
          var spine = this.getComponent(sp.Skeleton);

          if (spine) {
            // 播放第一个动画
            var json = spine.skeletonData.skeletonJson.animations;

            for (var name in json) {
              spine.setCompleteListener(this.onRecovery.bind(this));
              spine.setAnimation(0, name, false);
              break;
            }
          } else {
            // COCOS动画
            var anims = this.node.getComponentsInChildren(Animation);

            if (anims.length > 0) {
              anims.forEach(animator => {
                var _animator$defaultClip;

                var aniName = (_animator$defaultClip = animator.defaultClip) == null ? void 0 : _animator$defaultClip.name;

                if (aniName) {
                  var aniState = animator.getState(aniName);

                  if (aniState) {
                    var duration = aniState.duration;
                    this.maxDuration = duration > this.maxDuration ? duration : this.maxDuration;
                  }
                }

                animator.play();
              });
              this.scheduleOnce(this.onRecovery.bind(this), this.maxDuration);
            } // 粒子动画
            else if (ParticleSystem) {
              var particles = this.node.getComponentsInChildren(ParticleSystem);
              particles.forEach(particle => {
                particle.clear();
                particle.stop();
                particle.play();
                var duration = particle.duration;
                this.maxDuration = duration > this.maxDuration ? duration : this.maxDuration;
              });
              this.scheduleOnce(this.onRecovery.bind(this), this.maxDuration);
            }
          }
        }

        onRecovery() {
          if (this.node.parent) (_crd && message === void 0 ? (_reportPossibleCrUseOfmessage({
            error: Error()
          }), message) : message).dispatchEvent((_crd && EffectEvent === void 0 ? (_reportPossibleCrUseOfEffectEvent({
            error: Error()
          }), EffectEvent) : EffectEvent).Put, this.node);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7625c429d9c6987ddb05a19cddc544e82dee4bfc.js.map