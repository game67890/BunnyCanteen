System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, Component, NodePool, ParticleSystem, Prefab, sp, message, resLoader, ViewUtil, EffectEvent, EffectFinishedRelease, EffectData, EffectSingleCase, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfmessage(extras) {
    _reporterNs.report("message", "../../core/common/event/MessageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../../core/common/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewUtil(extras) {
    _reporterNs.report("ViewUtil", "../../core/utils/ViewUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectEvent(extras) {
    _reporterNs.report("EffectEvent", "./EffectEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectFinishedRelease(extras) {
    _reporterNs.report("EffectFinishedRelease", "./EffectFinishedRelease", _context.meta, extras);
  }

  _export("EffectSingleCase", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Animation = _cc.Animation;
      Component = _cc.Component;
      NodePool = _cc.NodePool;
      ParticleSystem = _cc.ParticleSystem;
      Prefab = _cc.Prefab;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      message = _unresolved_2.message;
    }, function (_unresolved_3) {
      resLoader = _unresolved_3.resLoader;
    }, function (_unresolved_4) {
      ViewUtil = _unresolved_4.ViewUtil;
    }, function (_unresolved_5) {
      EffectEvent = _unresolved_5.EffectEvent;
    }, function (_unresolved_6) {
      EffectFinishedRelease = _unresolved_6.EffectFinishedRelease;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bf338Z+oYxIUbd4bPREw9Ud", "EffectSingleCase", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-10-12 14:00:43
       * @LastEditors: dgflash
       * @LastEditTime: 2023-03-06 14:40:34
       */


      __checkObsolete__(['Animation', 'Component', 'Node', 'NodePool', 'ParticleSystem', 'Prefab', 'sp', 'Vec3']);

      /** 效果数据 */
      EffectData = class EffectData extends Component {
        constructor() {
          super(...arguments);

          /** 资源路径 */
          this.path = null;
        }

      };
      /** 特效参数 */

      /**
       * 动画特效对象池管理器，加载动画后自动播放，播放完后自动回收到池中
       * 1、支持Spine动画
       * 2、支持Cocos Animation动画
       * 3、支持Cocos ParticleSystem粒子动画
       */
      _export("EffectSingleCase", EffectSingleCase = class EffectSingleCase {
        static get instance() {
          if (this._instance == null) {
            this._instance = new EffectSingleCase();
          }

          return this._instance;
        }

        /** 全局动画播放速度 */
        get speed() {
          return this._speed;
        }

        set speed(value) {
          this._speed = value;
          this.effects_use.forEach((value, key) => {
            this.setSpeed(key);
          });
        }
        /** 对象池集合 */


        constructor() {
          this._speed = 1;
          this.effects = new Map();

          /** 正在使用中的显示对象集合 */
          this.effects_use = new Map();

          /** 对象池中用到的资源 - 这里只管理本对象加载的资源，预加载资源由其它对象自己施放 */
          this.res = new Map();
          (_crd && message === void 0 ? (_reportPossibleCrUseOfmessage({
            error: Error()
          }), message) : message).on((_crd && EffectEvent === void 0 ? (_reportPossibleCrUseOfEffectEvent({
            error: Error()
          }), EffectEvent) : EffectEvent).Put, this.onPut, this);
        }

        onPut(event, node) {
          this.put(node);
        }
        /**
         * 获取指定资源池中对象数量
         * @param path  预制资源路径
         */


        getCount(path) {
          var np = this.effects.get(path);

          if (np) {
            return np.size();
          }

          return 0;
        }
        /**
         * 加载资源并生成节点对象
         * @param path    预制资源路径
         * @param parent  父节点
         * @param params  显示参数
         */


        loadAndShow(path, parent, params) {
          var _this = this;

          return _asyncToGenerator(function* () {
            return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve, reject) {
              var np = _this.effects.get(path);

              if (np == undefined) {
                if (params && params.bundleName) {
                  _this.res.set(path, params.bundleName);

                  yield (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                    error: Error()
                  }), resLoader) : resLoader).loadAsync(params.bundleName, path, Prefab);
                } else {
                  _this.res.set(path, (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                    error: Error()
                  }), resLoader) : resLoader).defaultBundleName);

                  yield (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                    error: Error()
                  }), resLoader) : resLoader).loadAsync(path, Prefab);
                }

                var node = _this.show(path, parent, params);

                resolve(node);
              } else {
                var _node = _this.show(path, parent, params);

                resolve(_node);
              }
            }));
          })();
        }
        /**
         * 显示预制对象
         * @param path    预制资源路径
         * @param parent  父节点
         * @param params  显示参数
         */


        show(path, parent, params) {
          var np = this.effects.get(path);

          if (np == null) {
            np = new NodePool();
            this.effects.set(path, np);
          }

          var node; // 创建池中新显示对象

          if (np.size() == 0) {
            node = (_crd && ViewUtil === void 0 ? (_reportPossibleCrUseOfViewUtil({
              error: Error()
            }), ViewUtil) : ViewUtil).createPrefabNode(path);
            node.addComponent(EffectData).path = path;

            if (params && params.isPlayFinishedRelease) {
              node.addComponent(_crd && EffectFinishedRelease === void 0 ? (_reportPossibleCrUseOfEffectFinishedRelease({
                error: Error()
              }), EffectFinishedRelease) : EffectFinishedRelease);
            }
          } // 池中获取没使用的显示对象
          else {
            node = np.get();
            node.getComponent(_crd && EffectFinishedRelease === void 0 ? (_reportPossibleCrUseOfEffectFinishedRelease({
              error: Error()
            }), EffectFinishedRelease) : EffectFinishedRelease);
          } // 设置动画播放速度


          this.setSpeed(node); // 设置显示对象位置

          if (params && params.pos) node.position = params.pos; // 显示到屏幕上

          if (parent) node.parent = parent; // 记录缓冲池中放出的节点

          this.effects_use.set(node, true);
          return node;
        }
        /**
         * 回收对象
         * @param name  预制对象名称
         * @param node  节点
         */


        put(node) {
          var name = node.getComponent(EffectData).path;
          var np = this.effects.get(name);

          if (np) {
            // 回收使用的节点
            this.effects_use.delete(node); // 回到到池中

            np.put(node);
          }
        }
        /**
         * 清除对象池数据
         * @param path  参数为空时，清除所有对象池数据;指定名时，清楚指定数据
         */


        clear(path) {
          if (path) {
            var np = this.effects.get(path);
            np.clear();
          } else {
            this.effects.forEach(np => {
              np.clear();
            });
            this.effects.clear();
          }
        }
        /**
         * 释放对象池中显示对象的资源内存
         * @param path 资源路径
         */


        release(path) {
          if (path) {
            this.clear(path);
            var bundleName = this.res.get(path);
            (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).release(path, bundleName);
            this.res.delete(path);
          } else {
            // 施放池中对象内存
            this.clear(); // 施放对象资源内存

            this.res.forEach((bundleName, path) => {
              (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                error: Error()
              }), resLoader) : resLoader).release(path, bundleName);
            });
            this.res.clear();
          }
        }
        /** 设置动画速度 */


        setSpeed(node) {
          // SPINE动画
          var spine = node.getComponent(sp.Skeleton);

          if (spine) {
            spine.timeScale = this.speed;
          } else {
            // COCOS动画
            var anims = node.getComponentsInChildren(Animation);

            if (anims.length > 0) {
              anims.forEach(animator => {
                var _animator$defaultClip;

                var aniName = (_animator$defaultClip = animator.defaultClip) == null ? void 0 : _animator$defaultClip.name;

                if (aniName) {
                  var aniState = animator.getState(aniName);

                  if (aniState) {
                    aniState.speed = this.speed;
                  }
                }
              });
            } // 粒子动画
            else if (ParticleSystem) {
              var particles = node.getComponentsInChildren(ParticleSystem);
              particles.forEach(particle => {
                particle.simulationSpeed = this.speed;
              });
            }
          }
        }

      });

      EffectSingleCase._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d74c925f91f9d906c093387e09845a54f88f7515.js.map