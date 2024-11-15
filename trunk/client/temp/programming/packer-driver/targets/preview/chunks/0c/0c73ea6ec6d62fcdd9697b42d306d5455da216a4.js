System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ScrollView, v2, NestableScrollViewInner, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, _tempVec2, _tempVec2_1, NestableScrollViewOuter;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfNestableScrollViewInner(extras) {
    _reporterNs.report("NestableScrollViewInner", "./NestableScrollViewInner", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      ScrollView = _cc.ScrollView;
      v2 = _cc.v2;
    }, function (_unresolved_2) {
      NestableScrollViewInner = _unresolved_2.NestableScrollViewInner;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5c32cvgvXZKJ5KRePN7I5zx", "NestableScrollViewOuter", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Sprite', 'math', 'SpriteFrame', 'Node', 'ScrollView', 'EventTouch', 'Event', 'Input', 'v2']);

      ({
        ccclass,
        property
      } = _decorator);
      _tempVec2 = v2();
      _tempVec2_1 = v2();

      _export("NestableScrollViewOuter", NestableScrollViewOuter = (_dec = ccclass('NestableScrollViewOuter'), _dec2 = property(_crd && NestableScrollViewInner === void 0 ? (_reportPossibleCrUseOfNestableScrollViewInner({
        error: Error()
      }), NestableScrollViewInner) : NestableScrollViewInner), _dec(_class = (_class2 = class NestableScrollViewOuter extends ScrollView {
        constructor() {
          super(...arguments);
          this.m_PlanDir = -1;

          _initializerDefineProperty(this, "m_InnerScrollView", _descriptor, this);

          this.m_ScrollingInnerSv = null;
        }
        /*
            //是否为子物体
            //注意，这里递归, 如果child藏的太深, 可能影响效率。其实也还好，只是开始滑动时执行一次。
            _isHisChild(child:Node, undeterminedParent:Node) {
                if (child == undeterminedParent) {
                    return true;
                }
                if (child.parent != null) {
                    if (child.parent == undeterminedParent) {
                        return true;
                    } else {
                        return this._isHisChild(child.parent, undeterminedParent);
                    }
                }
                return false;
            }
        
            //判断Target是否是InnerScrollView的子物体, 如果是，就返回这个InnerScrollView。
            //注意，这里遍历所有InnerScrollView, 如果InnerScrollView数量太多，可能影响效率。其实也还好，只是开始滑动时执行一次。
            _findScrollingInnerSv(target) : NestableScrollViewInner
            {
                if (this.m_InnerScrollView)
                {
                    let isHisChild = this._isHisChild(target, this.m_InnerScrollView.node);
                    if (isHisChild) {
                        return this.m_InnerScrollView;
                    }
                }
                return null;
            }
        
            //检查实际与计划方向的一致性
            isDifferentBetweenSettingAndPlan(sv) {
                if (this.m_PlanDir == 0) {
                    return false;
                }
                if (this.m_PlanDir == 1 && sv.horizontal) {
                    return false;
                }
                if (this.m_PlanDir == -1 && sv.vertical) {
                    return false;
                }
                return true;
            }
        
            //#region 重写cc.ScrollView的方法
            protected _hasNestedViewGroup(event: Event, captureListeners?: Node[]): boolean
            {
                if (event.eventPhase !== Event.CAPTURING_PHASE) return;
                //不阻止out上onTouch事件执行。
                return false;
            }
        
        
            protected _onTouchMoved(event: EventTouch, captureListeners?: Node[]): void
            {
                if (!this.enabledInHierarchy || !this._content) {
                    return;
                }
                if (this._hasNestedViewGroup(event, captureListeners)) {
                    return;
                }
        
                const touch = event.touch!;
                this._handleMoveLogic(touch);
        
                // Do not prevent touch events in inner nodes
                if (!this.cancelInnerEvents) {
                    return;
                }
        
                const deltaMove = touch.getUILocation(_tempVec2);
                deltaMove.subtract(touch.getUIStartLocation(_tempVec2_1));
        
        
                //在滑动时, 设置开始时滑动的方向为计划方向
                //为什么在Outer中做这件事？
                //因为Outer的_onTouchMoved比Inner的早执行, 如果在Inner里做, Outer中就得忽略一帧，体验可能会不好。
                if (this.m_PlanDir == null && deltaMove.length() > 7) {
                    this.m_ScrollingInnerSv = this._findScrollingInnerSv(event.target);
                    if (this.m_ScrollingInnerSv != null) {
                        let contentSize = this.m_ScrollingInnerSv.content.size;
                        let scrollViewSize = this.m_ScrollingInnerSv.node.size;
                        if ((this.m_ScrollingInnerSv.vertical && (contentSize.height > scrollViewSize.height)) || (this.m_ScrollingInnerSv.horizontal && (contentSize.width > scrollViewSize.width))) {
                            this.m_PlanDir = Math.abs(deltaMove.x) > Math.abs(deltaMove.y) ? 1 : -1;
                        } else {
                            this.m_PlanDir = 0;
                        }
                    } else {
                        this.m_PlanDir = 0;
                    }
                }
        
                if (this.content) {
                    if (!this.isDifferentBetweenSettingAndPlan(this)) {
                        this._handleMoveLogic(touch);
                    }
                }
        
                if (!this.cancelInnerEvents) {
                    return;
                }
        
                //只取消会捕获事件的直接子物体(如Button)上的事件
                if (this.m_ScrollingInnerSv == null) {
                    if (deltaMove.length() > 7) {
                        if (!this._touchMoved && event.target !== this.node) {
                            var cancelEvent = new EventTouch(event.getTouches(), event.bubbles, Node.EventType.TOUCH_CANCEL);
                            cancelEvent.type = Node.EventType.TOUCH_CANCEL;
                            cancelEvent.touch = event.touch;
                            cancelEvent.simulate = true;
                            event.target.dispatchEvent(cancelEvent);
                            this._touchMoved = true;
                        }
                    }
                    this._stopPropagationIfTargetIsMe(event);
                }
                
            }
            */


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "m_InnerScrollView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0c73ea6ec6d62fcdd9697b42d306d5455da216a4.js.map