System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ECSMask, ECSModel, ECSEntity, _crd;

  //#region 辅助方法

  /**
   * 实体身上组件有增删操作，广播通知对应的观察者
   * @param entity 实体对象
   * @param componentTypeId 组件类型id
   */

  /**
   * 创建组件对象
   * @param ctor
   */

  /**
   * 销毁实体
   * 
   * 缓存销毁的实体，下次新建实体时会优先从缓存中拿
   * @param entity 
   */
  function broadcastCompAddOrRemove(entity, componentTypeId) {
    var events = (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
      error: Error()
    }), ECSModel) : ECSModel).compAddOrRemove.get(componentTypeId);

    for (var i = events.length - 1; i >= 0; i--) {
      events[i](entity);
    } // 判断是不是删了单例组件


    if ((_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
      error: Error()
    }), ECSModel) : ECSModel).tid2comp.has(componentTypeId)) {
      (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
        error: Error()
      }), ECSModel) : ECSModel).tid2comp.delete(componentTypeId);
    }
  }

  function createComp(ctor) {
    var cct = (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
      error: Error()
    }), ECSModel) : ECSModel).compCtors[ctor.tid];

    if (!cct) {
      throw Error("\u6CA1\u6709\u627E\u5230\u8BE5\u7EC4\u4EF6\u7684\u6784\u9020\u51FD\u6570\uFF0C\u68C0\u67E5" + ctor.compName + "\u662F\u5426\u4E3A\u4E0D\u53EF\u6784\u9020\u7684\u7EC4\u4EF6");
    }

    var comps = (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
      error: Error()
    }), ECSModel) : ECSModel).compPools.get(ctor.tid);
    var component = comps.pop() || new cct();
    return component;
  }

  function destroyEntity(entity) {
    if ((_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
      error: Error()
    }), ECSModel) : ECSModel).eid2Entity.has(entity.eid)) {
      var entitys = (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
        error: Error()
      }), ECSModel) : ECSModel).entityPool.get(entity.name);

      if (entitys == null) {
        entitys = [];
        (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
          error: Error()
        }), ECSModel) : ECSModel).entityPool.set(entity.name, entitys);
      }

      entitys.push(entity);
      (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
        error: Error()
      }), ECSModel) : ECSModel).eid2Entity.delete(entity.eid);
    } else {
      console.warn('试图销毁不存在的实体');
    }
  } //#endregion

  /** ECS实体对象 */


  function _reportPossibleCrUseOfecs(extras) {
    _reporterNs.report("ecs", "./ECS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfECSMask(extras) {
    _reporterNs.report("ECSMask", "./ECSMask", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCompCtor(extras) {
    _reporterNs.report("CompCtor", "./ECSModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCompType(extras) {
    _reporterNs.report("CompType", "./ECSModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfECSModel(extras) {
    _reporterNs.report("ECSModel", "./ECSModel", _context.meta, extras);
  }

  _export("ECSEntity", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ECSMask = _unresolved_2.ECSMask;
    }, function (_unresolved_3) {
      ECSModel = _unresolved_3.ECSModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1fb62WC3PZPvLhjoZQfrREJ", "ECSEntity", undefined);

      _export("ECSEntity", ECSEntity = class ECSEntity {
        constructor() {
          /** 实体唯一标识，不要手动修改 */
          this.eid = -1;

          /** 实体对象名 */
          this.name = "";

          /** 组件过滤数据 */
          this.mask = new (_crd && ECSMask === void 0 ? (_reportPossibleCrUseOfECSMask({
            error: Error()
          }), ECSMask) : ECSMask)();

          /** 当前实体身上附加的组件构造函数 */
          this.compTid2Ctor = new Map();

          /** 配合 entity.remove(Comp, false)， 记录组件实例上的缓存数据，在添加时恢复原数据 */
          this.compTid2Obj = new Map();
          this._parent = null;
          this._children = null;
        }

        /** 父实体 */
        get parent() {
          return this._parent;
        }

        /** 子实体集合 */
        get children() {
          if (this._children == null) {
            this._children = new Map();
          }

          return this._children;
        }
        /**
         * 添加子实体
         * @param entity 被添加的实体对象
         */


        addChild(entity) {
          entity._parent = this;
          this.children.set(entity.eid, entity);
        }
        /**
         * 移除子实体
         * @param entity    被移除的实体对象
         * @param isDestroy 被移除的实体是否释放，默认为释放
         * @returns 
         */


        removeChild(entity, isDestroy) {
          if (isDestroy === void 0) {
            isDestroy = true;
          }

          if (this.children == null) return;
          this.children.delete(entity.eid);
          if (isDestroy) entity.destroy();

          if (this.children.size == 0) {
            this._children = null;
          }
        }
        /**
         * 根据组件类动态创建组件，并通知关心的系统。如果实体存在了这个组件，那么会先删除之前的组件然后添加新的
         * 
         * 注意：不要直接new Component，new来的Component不会从Component的缓存池拿缓存的数据
         * @param componentTypeId   组件类
         * @param isReAdd           true-表示用户指定这个实体可能已经存在了该组件，那么再次add组件的时候会先移除该组件然后再添加一遍。false-表示不重复添加组件
         */


        add(ctor, isReAdd) {
          if (isReAdd === void 0) {
            isReAdd = false;
          }

          if (typeof ctor === 'function') {
            var compTid = ctor.tid;

            if (ctor.tid === -1) {
              throw Error('组件未注册！');
            }

            if (this.compTid2Ctor.has(compTid)) {
              // 判断是否有该组件，如果有则先移除
              if (isReAdd) {
                this.remove(ctor);
              } else {
                console.log("\u5DF2\u7ECF\u5B58\u5728\u7EC4\u4EF6\uFF1A" + ctor.compName); // @ts-ignore

                return this[ctor.compName];
              }
            }

            this.mask.set(compTid);
            var comp;

            if (this.compTid2Obj.has(compTid)) {
              comp = this.compTid2Obj.get(compTid);
              this.compTid2Obj.delete(compTid);
            } else {
              // 创建组件对象
              comp = createComp(ctor);
            } // 将组件对象直接附加到实体对象身上，方便直接获取
            // @ts-ignore


            this[ctor.compName] = comp;
            this.compTid2Ctor.set(compTid, ctor);
            comp.ent = this; // 广播实体添加组件的消息

            broadcastCompAddOrRemove(this, compTid);
            return comp;
          } else {
            var tmpCtor = ctor.constructor;
            var _compTid = tmpCtor.tid; // console.assert(compTid !== -1 || !compTid, '组件未注册！');
            // console.assert(this.compTid2Ctor.has(compTid), '已存在该组件！');

            if (_compTid === -1 || _compTid == null) {
              throw Error('组件未注册');
            }

            if (this.compTid2Ctor.has(_compTid)) {
              throw Error('已经存在该组件');
            }

            this.mask.set(_compTid); //@ts-ignore

            this[tmpCtor.compName] = ctor;
            this.compTid2Ctor.set(_compTid, tmpCtor); //@ts-ignore

            ctor.ent = this; //@ts-ignore

            ctor.canRecycle = false;
            broadcastCompAddOrRemove(this, _compTid);
            return this;
          }
        }
        /**
         * 批量添加组件
         * @param ctors 组件类
         * @returns 
         */


        addComponents() {
          for (var _len = arguments.length, ctors = new Array(_len), _key = 0; _key < _len; _key++) {
            ctors[_key] = arguments[_key];
          }

          for (var _ctor of ctors) {
            this.add(_ctor);
          }

          return this;
        }
        /**
         * 获取一个组件实例
         * @param ctor 组件类
         */


        get(ctor) {
          // @ts-ignore
          return this[ctor.compName];
        }
        /**
         * 组件是否在实体存在内
         * @param ctor 组件类
         */


        has(ctor) {
          if (typeof ctor == "number") {
            return this.mask.has(ctor);
          } else {
            return this.compTid2Ctor.has(ctor.tid);
          }
        }
        /**
         * 从实体上删除指定组件
         * @param ctor      组件构造函数或者组件Tag
         * @param isRecycle 是否回收该组件对象。对于有些组件上有大量数据，当要描述移除组件但是不想清除组件上的数据是可以
         * 设置该参数为false，这样该组件对象会缓存在实体身上，下次重新添加组件时会将该组件对象添加回来，不会重新从组件缓存
         * 池中拿一个组件来用。
         */


        remove(ctor, isRecycle) {
          if (isRecycle === void 0) {
            isRecycle = true;
          }

          var hasComp = false; //@ts-ignore

          var componentTypeId = ctor.tid; //@ts-ignore

          var compName = ctor.compName;

          if (this.mask.has(componentTypeId)) {
            hasComp = true; //@ts-ignore

            var comp = this[ctor.compName]; //@ts-ignore

            comp.ent = null;

            if (isRecycle) {
              comp.reset(); // 回收组件到指定缓存池中

              if (comp.canRecycle) {
                var compPoolsType = (_crd && ECSModel === void 0 ? (_reportPossibleCrUseOfECSModel({
                  error: Error()
                }), ECSModel) : ECSModel).compPools.get(componentTypeId);
                compPoolsType.push(comp);
              }
            } else {
              this.compTid2Obj.set(componentTypeId, comp); // 用于缓存显示对象组件
            }
          } // 删除实体上的组件逻辑


          if (hasComp) {
            //@ts-ignore
            this[compName] = null;
            this.mask.delete(componentTypeId);
            this.compTid2Ctor.delete(componentTypeId);
            broadcastCompAddOrRemove(this, componentTypeId);
          }
        }

        _remove(comp) {
          this.remove(comp, true);
        }
        /** 销毁实体，实体会被回收到实体缓存池中 */


        destroy() {
          // 如果有父模块，则移除父模块上记录的子模块
          if (this._parent) {
            this._parent.removeChild(this, false);

            this._parent = null;
          } // 移除模块上所有子模块


          if (this._children) {
            this._children.forEach(e => {
              this.removeChild(e);
              e.destroy();
            });
          } // 移除实体上所有组件


          this.compTid2Ctor.forEach(this._remove, this);
          destroyEntity(this);
          this.compTid2Obj.clear();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=274666c86abe979afbfb227a8e3bdab65dff4765.js.map