System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Component, Enum, Node, NodeEventType, tween, Vec2, Vec3, GPWorkFlow, GPWorkFlowNode, GridComponent, BoardMgr, oops, GameEvent, HeChengMgr, UtilMgr, GuideMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, FloatType, DragBackHomeType, EasingString, GPDrag;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGPWorkFlow(extras) {
    _reporterNs.report("GPWorkFlow", "./GPWorkFlow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGPWorkFlowNode(extras) {
    _reporterNs.report("GPWorkFlowNode", "./GPWorkFlow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridComponent(extras) {
    _reporterNs.report("GridComponent", "../hecheng/GridComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoardMgr(extras) {
    _reporterNs.report("BoardMgr", "../manager/BoardManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../framework/common/config/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeChengMgr(extras) {
    _reporterNs.report("HeChengMgr", "../hecheng/HeChengManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideMgr(extras) {
    _reporterNs.report("GuideMgr", "../hecheng/GuideManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCFloat = _cc.CCFloat;
      Component = _cc.Component;
      Enum = _cc.Enum;
      Node = _cc.Node;
      NodeEventType = _cc.NodeEventType;
      tween = _cc.tween;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GPWorkFlow = _unresolved_2.GPWorkFlow;
      GPWorkFlowNode = _unresolved_2.GPWorkFlowNode;
    }, function (_unresolved_3) {
      GridComponent = _unresolved_3.GridComponent;
    }, function (_unresolved_4) {
      BoardMgr = _unresolved_4.BoardMgr;
    }, function (_unresolved_5) {
      oops = _unresolved_5.oops;
    }, function (_unresolved_6) {
      GameEvent = _unresolved_6.GameEvent;
    }, function (_unresolved_7) {
      HeChengMgr = _unresolved_7.HeChengMgr;
    }, function (_unresolved_8) {
      UtilMgr = _unresolved_8.UtilMgr;
    }, function (_unresolved_9) {
      GuideMgr = _unresolved_9.GuideMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e0c41MPZ51N75RTTHKPYHwW", "GPDrag", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'TweenEasing', 'CCFloat', 'CCString', 'Component', 'easing', 'Enum', 'EventTouch', 'isValid', 'Node', 'NodeEventType', 'Tween', 'tween', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FloatType", FloatType = /*#__PURE__*/function (FloatType) {
        FloatType[FloatType["None"] = 0] = "None";
        FloatType[FloatType["MoveToTop"] = 1] = "MoveToTop";
        FloatType[FloatType["MoveToTopLayer"] = 2] = "MoveToTopLayer";
        return FloatType;
      }({}));

      _export("DragBackHomeType", DragBackHomeType = /*#__PURE__*/function (DragBackHomeType) {
        DragBackHomeType[DragBackHomeType["SetPosition"] = 0] = "SetPosition";
        DragBackHomeType[DragBackHomeType["Tween"] = 1] = "Tween";
        return DragBackHomeType;
      }({}));

      _export("EasingString", EasingString = /*#__PURE__*/function (EasingString) {
        EasingString[EasingString["linear"] = 0] = "linear";
        EasingString[EasingString["smooth"] = 1] = "smooth";
        EasingString[EasingString["fade"] = 2] = "fade";
        EasingString[EasingString["constant"] = 3] = "constant";
        EasingString[EasingString["quadIn"] = 4] = "quadIn";
        EasingString[EasingString["quadOut"] = 5] = "quadOut";
        EasingString[EasingString["quadInOut"] = 6] = "quadInOut";
        EasingString[EasingString["quadOutIn"] = 7] = "quadOutIn";
        EasingString[EasingString["cubicIn"] = 8] = "cubicIn";
        EasingString[EasingString["cubicOut"] = 9] = "cubicOut";
        EasingString[EasingString["cubicInOut"] = 10] = "cubicInOut";
        EasingString[EasingString["cubicOutIn"] = 11] = "cubicOutIn";
        EasingString[EasingString["quartIn"] = 12] = "quartIn";
        EasingString[EasingString["quartOut"] = 13] = "quartOut";
        EasingString[EasingString["quartInOut"] = 14] = "quartInOut";
        EasingString[EasingString["quartOutIn"] = 15] = "quartOutIn";
        EasingString[EasingString["quintIn"] = 16] = "quintIn";
        EasingString[EasingString["quintOut"] = 17] = "quintOut";
        EasingString[EasingString["quintInOut"] = 18] = "quintInOut";
        EasingString[EasingString["quintOutIn"] = 19] = "quintOutIn";
        EasingString[EasingString["sineIn"] = 20] = "sineIn";
        EasingString[EasingString["sineOut"] = 21] = "sineOut";
        EasingString[EasingString["sineInOut"] = 22] = "sineInOut";
        EasingString[EasingString["sineOutIn"] = 23] = "sineOutIn";
        EasingString[EasingString["expoIn"] = 24] = "expoIn";
        EasingString[EasingString["expoOut"] = 25] = "expoOut";
        EasingString[EasingString["expoInOut"] = 26] = "expoInOut";
        EasingString[EasingString["expoOutIn"] = 27] = "expoOutIn";
        EasingString[EasingString["circIn"] = 28] = "circIn";
        EasingString[EasingString["circOut"] = 29] = "circOut";
        EasingString[EasingString["circInOut"] = 30] = "circInOut";
        EasingString[EasingString["circOutIn"] = 31] = "circOutIn";
        EasingString[EasingString["elasticIn"] = 32] = "elasticIn";
        EasingString[EasingString["elasticOut"] = 33] = "elasticOut";
        EasingString[EasingString["elasticInOut"] = 34] = "elasticInOut";
        EasingString[EasingString["elasticOutIn"] = 35] = "elasticOutIn";
        EasingString[EasingString["backIn"] = 36] = "backIn";
        EasingString[EasingString["backOut"] = 37] = "backOut";
        EasingString[EasingString["backInOut"] = 38] = "backInOut";
        EasingString[EasingString["backOutIn"] = 39] = "backOutIn";
        EasingString[EasingString["bounceIn"] = 40] = "bounceIn";
        EasingString[EasingString["bounceOut"] = 41] = "bounceOut";
        EasingString[EasingString["bounceInOut"] = 42] = "bounceInOut";
        EasingString[EasingString["bounceOutIn"] = 43] = "bounceOutIn";
        return EasingString;
      }({}));

      _export("GPDrag", GPDrag = (_dec = ccclass('GPDrag'), _dec2 = property({
        tooltip: "触碰点偏移量敏感"
      }), _dec3 = property({
        tooltip: "失败时回到起始位置"
      }), _dec4 = property({
        type: Enum(DragBackHomeType),
        tooltip: "回家的方式",
        visible: function visible() {
          return this.backHomeWhenFailed;
        }
      }), _dec5 = property({
        type: CCFloat,
        visible: function visible() {
          return this.backHomeWhenFailed && this.backHomeType == DragBackHomeType.Tween;
        }
      }), _dec6 = property({
        type: Enum(EasingString),
        tooltip: "缓动类型",
        visible: function visible() {
          return this.backHomeWhenFailed && this.backHomeType == DragBackHomeType.Tween;
        }
      }), _dec7 = property({
        type: Enum(FloatType),
        tooltip: "上浮类型"
      }), _dec8 = property({
        type: Node,
        visible: function visible() {
          return this.floatType == FloatType.MoveToTopLayer; // || this.floatType == FloatType.CopyToTopLayer
        }
      }), _dec9 = property({
        tooltip: "松开后返回原来的层级",
        visible: function visible() {
          return this.floatType != FloatType.None;
        }
      }), _dec(_class = (_class2 = class GPDrag extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "touchOffsetSensitive", _descriptor, this);

          _initializerDefineProperty(this, "backHomeWhenFailed", _descriptor2, this);

          _initializerDefineProperty(this, "backHomeType", _descriptor3, this);

          _initializerDefineProperty(this, "backTweenTime", _descriptor4, this);

          _initializerDefineProperty(this, "backTweenEasing", _descriptor5, this);

          _initializerDefineProperty(this, "floatType", _descriptor6, this);

          _initializerDefineProperty(this, "topLayerNode", _descriptor7, this);

          _initializerDefineProperty(this, "backToOriZ", _descriptor8, this);

          this.srcParent = void 0;
          this.zOrder = void 0;
          this.parentZOrder = void 0;
          this.dragStartPos = new Vec2(0, 0);
          this.dragOffset = new Vec2(0, 0);
          this.succeedCheck = null;
          this.succeedCallback = null;
          this.backTween = void 0;
          this.backHomeWorkFlow = new (_crd && GPWorkFlow === void 0 ? (_reportPossibleCrUseOfGPWorkFlow({
            error: Error()
          }), GPWorkFlow) : GPWorkFlow)();
        }

        start() {
          this.dragStartPos.set(this.node.position.x, this.node.position.y);
          this.node.on(NodeEventType.TOUCH_START, this.OnDragStart, this);
          this.node.on(NodeEventType.TOUCH_MOVE, this.OnDragMove, this);
          this.node.on(NodeEventType.TOUCH_END, this.OnDragEnd, this);
          this.node.on(NodeEventType.TOUCH_CANCEL, this.OnDragEnd, this);
          var moveNode = new (_crd && GPWorkFlowNode === void 0 ? (_reportPossibleCrUseOfGPWorkFlowNode({
            error: Error()
          }), GPWorkFlowNode) : GPWorkFlowNode)();
          this.backHomeWorkFlow.headNode = moveNode;
          var self = this;

          moveNode.OnStart = wfNode => {
            var p = new Vec3(self.dragStartPos.x, self.dragStartPos.y, 0);

            switch (this.backHomeType) {
              case DragBackHomeType.SetPosition:
                self.node.setPosition(p);
                wfNode.done();
                break;

              case DragBackHomeType.Tween:
                self.backTween && self.backTween.stop();
                var easing = EasingString[self.backTweenEasing];
                self.backTween = tween(self.node).to(self.backTweenTime, {
                  position: p
                }, {
                  easing: easing
                }).call(() => {
                  wfNode.done();
                }).start();
                break;
            }
          };

          var arrivedNode = new (_crd && GPWorkFlowNode === void 0 ? (_reportPossibleCrUseOfGPWorkFlowNode({
            error: Error()
          }), GPWorkFlowNode) : GPWorkFlowNode)();
          moveNode.nextNode = arrivedNode;

          arrivedNode.OnStart = wfNode => {
            self.OnArrivedHome();
            wfNode.done();
          };
        }

        OnDragStart(e) {
          if ((_crd && HeChengMgr === void 0 ? (_reportPossibleCrUseOfHeChengMgr({
            error: Error()
          }), HeChengMgr) : HeChengMgr).IsPlayHechengingAnim) {
            return;
          }

          (_crd && GuideMgr === void 0 ? (_reportPossibleCrUseOfGuideMgr({
            error: Error()
          }), GuideMgr) : GuideMgr).ResetGuide();
          var DragGridComponent = this.node.parent.getComponent(_crd && GridComponent === void 0 ? (_reportPossibleCrUseOfGridComponent({
            error: Error()
          }), GridComponent) : GridComponent);

          if (DragGridComponent) {
            (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
              error: Error()
            }), BoardMgr) : BoardMgr).InDragIndex = DragGridComponent.index;

            if ((_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
              error: Error()
            }), BoardMgr) : BoardMgr).board[(_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
              error: Error()
            }), BoardMgr) : BoardMgr).InDragIndex].IsLiWu) {
              (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                error: Error()
              }), UtilMgr) : UtilMgr).PlaySoundEffect(27);
            } else {
              (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                error: Error()
              }), UtilMgr) : UtilMgr).PlaySoundEffect(17);
              (_crd && HeChengMgr === void 0 ? (_reportPossibleCrUseOfHeChengMgr({
                error: Error()
              }), HeChengMgr) : HeChengMgr).IsDraging = true;
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).UpdateHuishouBtn);
              DragGridComponent.ShowSucaiSelect(true);
              var touchPoint = e.getUILocation();
              Vec2.subtract(this.dragOffset, this.dragStartPos, touchPoint);

              switch (this.floatType) {
                case FloatType.MoveToTop:
                  this.parentZOrder = this.node.parent.getSiblingIndex();
                  this.node.parent.setSiblingIndex(1000);
                  this.zOrder = this.node.getSiblingIndex();
                  this.node.setSiblingIndex(1000);
                  break;

                case FloatType.MoveToTopLayer:
                  this.zOrder = this.node.getSiblingIndex();
                  this.srcParent = this.node.parent;
                  this.node.parent = this.topLayerNode;
                  break;
              }
            }
          }
        }

        OnDragMove(e) {
          if ((_crd && HeChengMgr === void 0 ? (_reportPossibleCrUseOfHeChengMgr({
            error: Error()
          }), HeChengMgr) : HeChengMgr).IsDraging) {
            var p = e.getUILocation();
            if (this.touchOffsetSensitive) this.node.setPosition(new Vec3(p.x + this.dragOffset.x, p.y + this.dragOffset.y, 0));else this.node.setPosition(new Vec3(p.x, 0, p.y));
          }
        }

        OnDragEnd(e) {
          (_crd && HeChengMgr === void 0 ? (_reportPossibleCrUseOfHeChengMgr({
            error: Error()
          }), HeChengMgr) : HeChengMgr).IsDraging = false;
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).StopSoundEffect();
          var DragGridComponent = this.node.parent.getComponent(_crd && GridComponent === void 0 ? (_reportPossibleCrUseOfGridComponent({
            error: Error()
          }), GridComponent) : GridComponent);

          if (DragGridComponent) {
            DragGridComponent.ShowSucaiSelect(false);
          }

          if ((_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
            error: Error()
          }), BoardMgr) : BoardMgr).IsHuiShou) {
            (_crd && HeChengMgr === void 0 ? (_reportPossibleCrUseOfHeChengMgr({
              error: Error()
            }), HeChengMgr) : HeChengMgr).HandleHuiShou((_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
              error: Error()
            }), BoardMgr) : BoardMgr).InDragIndex);
          } else {
            var _DragGridComponent = this.node.parent.getComponent(_crd && GridComponent === void 0 ? (_reportPossibleCrUseOfGridComponent({
              error: Error()
            }), GridComponent) : GridComponent);

            if (_DragGridComponent) {
              var destIndex = (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                error: Error()
              }), BoardMgr) : BoardMgr).getTouchItem(_DragGridComponent.index);

              if (destIndex > -1) {
                var params = {};
                params.DestIndex = destIndex;
                params.SrcIndex = _DragGridComponent.index;
                (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                  error: Error()
                }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                  error: Error()
                }), GameEvent) : GameEvent).OnGridContract, params);
              } else {
                console.log("no touchingMap");
              }
            } else {
              console.log("no GridComponent");
            }
          }

          this.backHomeWorkFlow.start();
          (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
            error: Error()
          }), BoardMgr) : BoardMgr).InDragIndex = 0;
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateHuishouBtn);
        }

        OnArrivedHome() {
          if (this.backToOriZ) switch (this.floatType) {
            case FloatType.MoveToTop:
              this.node.setSiblingIndex(this.zOrder);
              this.node.parent.setSiblingIndex(this.parentZOrder);
              break;

            case FloatType.MoveToTopLayer:
              this.node.parent = this.srcParent;
              this.node.setSiblingIndex(this.zOrder);
              break;
          }
        }

        onDestroy() {
          this.node.off(NodeEventType.TOUCH_START, this.OnDragStart, this);
          this.node.off(NodeEventType.TOUCH_MOVE, this.OnDragMove, this);
          this.node.off(NodeEventType.TOUCH_END, this.OnDragEnd, this);
          this.node.off(NodeEventType.TOUCH_CANCEL, this.OnDragEnd, this);
        }

        update(dt) {
          this.backHomeWorkFlow.update(dt);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "touchOffsetSensitive", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "backHomeWhenFailed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "backHomeType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return DragBackHomeType.SetPosition;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "backTweenTime", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "backTweenEasing", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EasingString.linear;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "floatType", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return FloatType.None;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "topLayerNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "backToOriZ", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=de6b9dcd83dcf4c9680a2016195fe07d97a9d09b.js.map