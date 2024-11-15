System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, Vec2, js, v3, _crd, _DragEvent;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      Vec2 = _cc.Vec2;
      js = _cc.js;
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1a072/udu9MtbdbyL5xB8iR", "NodeDragExt", undefined);

      /** 节点拖拽功能 */
      //@ts-ignore
      __checkObsolete__(['EventTouch', 'Node', 'Vec2', 'js', 'v3']);

      if (!Node.prototype["__$NodeDragExt$__"]) {
        //@ts-ignore
        Node.prototype["__$NodeDragExt$__"] = true;
        _DragEvent = {
          DRAG_START: "drag_start",
          DRAG_MOVE: "drag_move",
          DRAG_END: "drag_end"
        };
        js.mixin(Node, {
          DragEvent: _DragEvent
        }); //----------------   Node 添加 拖拽属性 ----------------

        js.mixin(Node.prototype, {
          _draggable: false,
          _dragging: false,
          _dragTesting: false,
          _dragStartPoint: null,
          initDrag: function () {
            if (this._draggable) {
              this.on(Node.EventType.TOUCH_START, this.onTouchBegin_0, this);
              this.on(Node.EventType.TOUCH_MOVE, this.onTouchMove_0, this);
              this.on(Node.EventType.TOUCH_END, this.onTouchEnd_0, this);
              this.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel_0, this);
            } else {
              this.off(Node.EventType.TOUCH_START, this.onTouchBegin_0, this);
              this.off(Node.EventType.TOUCH_MOVE, this.onTouchMove_0, this);
              this.off(Node.EventType.TOUCH_END, this.onTouchEnd_0, this);
              this.off(Node.EventType.TOUCH_CANCEL, this.onTouchCancel_0, this);
            }
          },
          onTouchBegin_0: function (event) {
            if (this._dragStartPoint == null) {
              this._dragStartPoint = new Vec2();
            } // DEV && console.log(`NodeDragExt -> onTouchBegin_0  ${this.name}`);
            // event.preventSwallow = true;


            let pos = event.getUILocation();

            this._dragStartPoint.set(pos);

            this._dragTesting = true;
          },
          onTouchMove_0: function (event) {
            if (!this._dragging && this._draggable && this._dragTesting) {
              let sensitivity = 10;
              let pos = event.getUILocation();

              if (Math.abs(this._dragStartPoint.x - pos.x) < sensitivity && Math.abs(this._dragStartPoint.y - pos.y) < sensitivity) {
                return;
              } // event.preventSwallow = true;


              this._dragging = true;
              this._dragTesting = false;
              this.emit(Node.DragEvent.DRAG_START, event);
            }

            if (this._dragging) {
              let delta = event.getUIDelta(); // /** 这里除以 世界缩放，在有缩放的时候拖拽不至于很怪 */
              // this.position = this.position.add(v3(delta.x / this.worldScale.x, delta.y / this.worldScale.y, 0));

              this.position = this.position.add(v3(delta.x, delta.y, 0));
              this.emit(Node.DragEvent.DRAG_MOVE, event);
            }
          },
          onTouchEnd_0: function (event) {
            if (this._dragging) {
              this._dragging = false;
              this.emit(Node.DragEvent.DRAG_END, event);
            } // DEV && console.log(`NodeDragExt -> onTouchEnd_0  ${this.name}, _dragging: ${this._dragging}`);

          },
          onTouchCancel_0: function (event) {
            if (this._dragging) {
              this._dragging = false;
              this.emit(Node.DragEvent.DRAG_END, event);
            } // DEV && console.log(`NodeDragExt -> onTouchCancel_0  ${this.name}, _dragging: ${this._dragging}`);

          },
          startDrag: function () {
            // 此节点是否在场景中激活
            if (!this.activeInHierarchy) {
              return;
            }

            this.dragBegin();
          },
          dragBegin: function () {
            this._dragging = true;
            this._dragTesting = true;
            this.on(Node.EventType.TOUCH_MOVE, this.onTouchMove_0, this);
            this.on(Node.EventType.TOUCH_END, this.onTouchEnd_0, this);
            this.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel_0, this);
          },
          dragEnd: function () {
            if (this._dragging) {
              this._dragTesting = false;
              this._dragging = false;
            }
          },
          // 停止拖拽
          stopDrag: function () {
            this.dragEnd();
          },
          // 移除 touch 事件
          removeDragEvent: function () {
            this.off(Node.EventType.TOUCH_START, this.onTouchBegin_0, this);
            this.off(Node.EventType.TOUCH_MOVE, this.onTouchMove_0, this);
            this.off(Node.EventType.TOUCH_END, this.onTouchEnd_0, this);
            this.off(Node.EventType.TOUCH_CANCEL, this.onTouchCancel_0, this);
          }
        }); // 如果 node 设置 node.draggable = true, 则启用 拖拽

        Object.defineProperty(Node.prototype, "draggable", {
          get: function () {
            return this._draggable;
          },
          set: function (value) {
            if (this._draggable != value) {
              this._draggable = value;
              this.initDrag();
            }
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Node.prototype, "dragTesting", {
          get: function () {
            return this._dragTesting;
          },
          set: function (value) {
            if (this._dragTesting != value) {
              this._dragTesting = value;
            }
          },
          enumerable: true,
          configurable: true
        }); //----------------   Node 添加 拖拽属性 ----------------
      }

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d929627d6a05fe4dc8ae26269cd84347d71ca15a.js.map