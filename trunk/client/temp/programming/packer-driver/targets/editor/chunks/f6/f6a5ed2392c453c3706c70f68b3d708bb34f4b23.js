System.register(["cc", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Canvas, Color, EditBox, Graphics, Label, Layout, Mask, Node, PageView, ProgressBar, RichText, ScrollView, Size, Slider, Sprite, Toggle, UIOpacity, UIRenderer, UITransform, Widget, v3, EDITOR_NOT_IN_PREVIEW, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Canvas = _cc.Canvas;
      Color = _cc.Color;
      EditBox = _cc.EditBox;
      Graphics = _cc.Graphics;
      Label = _cc.Label;
      Layout = _cc.Layout;
      Mask = _cc.Mask;
      Node = _cc.Node;
      PageView = _cc.PageView;
      ProgressBar = _cc.ProgressBar;
      RichText = _cc.RichText;
      ScrollView = _cc.ScrollView;
      Size = _cc.Size;
      Slider = _cc.Slider;
      Sprite = _cc.Sprite;
      Toggle = _cc.Toggle;
      UIOpacity = _cc.UIOpacity;
      UIRenderer = _cc.UIRenderer;
      UITransform = _cc.UITransform;
      Widget = _cc.Widget;
      v3 = _cc.v3;
    }, function (_ccEnv) {
      EDITOR_NOT_IN_PREVIEW = _ccEnv.EDITOR_NOT_IN_PREVIEW;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "493a6vtAsNCi7/drbKHIAaL", "NodeExt", undefined);

      __checkObsolete__(['Button', 'Canvas', 'Color', 'EditBox', 'Graphics', 'Label', 'Layout', 'Mask', 'Node', 'PageView', 'ProgressBar', 'RichText', 'ScrollView', 'Size', 'Slider', 'Sprite', 'Toggle', 'UIOpacity', 'UIRenderer', 'UITransform', 'Widget', 'v3']);

      // ========= 扩展 cc 提示声明 =========

      /** 扩展节点属性 */
      if (!EDITOR_NOT_IN_PREVIEW) {
        Object.defineProperty(Node.prototype, "uiGraphics", {
          get: function () {
            return this.getComponent(Graphics);
          },
          set: function (value) {}
        });
        Object.defineProperty(Node.prototype, "uiLabel", {
          get: function () {
            return this.getComponent(Label);
          },
          set: function (value) {}
        });
        Object.defineProperty(Node.prototype, "uiRichText", {
          get: function () {
            return this.getComponent(RichText);
          },
          set: function (value) {}
        });
        Object.defineProperty(Node.prototype, "uiSprite", {
          get: function () {
            return this.getComponent(Sprite);
          },
          set: function (value) {}
        });
        Object.defineProperty(Node.prototype, "uiButton", {
          get: function () {
            return this.getComponent(Button);
          },
          set: function (value) {}
        });
        Object.defineProperty(Node.prototype, "uiCanvas", {
          get: function () {
            return this.getComponent(Canvas);
          },
          set: function (value) {}
        });
        Object.defineProperty(Node.prototype, "uiEditBox", {
          get: function () {
            return this.getComponent(EditBox);
          },
          set: function (value) {}
        });
        Object.defineProperty(Node.prototype, "uiLayout", {
          get: function () {
            return this.getComponent(Layout);
          },
          set: function (value) {}
        });
        Object.defineProperty(Node.prototype, "uiPageView", {
          get: function () {
            return this.getComponent(PageView);
          },
          set: function (value) {}
        });
        Object.defineProperty(Node.prototype, "uiProgressBar", {
          get: function () {
            return this.getComponent(ProgressBar);
          },
          set: function (value) {}
        });
        Object.defineProperty(Node.prototype, "uiScrollView", {
          get: function () {
            return this.getComponent(ScrollView);
          },
          set: function (value) {}
        });
        Object.defineProperty(Node.prototype, "uiSlider", {
          get: function () {
            return this.getComponent(Slider);
          },
          set: function (value) {}
        });
        Object.defineProperty(Node.prototype, "uiToggle", {
          get: function () {
            return this.getComponent(Toggle);
          },
          set: function (value) {}
        });
        Object.defineProperty(Node.prototype, "uiWidget", {
          get: function () {
            return this.getComponent(Widget);
          },
          set: function (value) {}
        });
        Object.defineProperty(Node.prototype, "uiOpacity", {
          get: function () {
            return this.getComponent(UIOpacity);
          },
          set: function (value) {}
        });
        Object.defineProperty(Node.prototype, "uiTransform", {
          get: function () {
            return this.getComponent(UITransform);
          },
          set: function (value) {}
        });
        Object.defineProperty(Node.prototype, "uiMask", {
          get: function () {
            return this.getComponent(Mask);
          },
          set: function (value) {}
        });
        /** 获取、设置节点的 X 坐标 */

        Object.defineProperty(Node.prototype, "x", {
          get: function () {
            let self = this;
            return self.position.x;
          },
          set: function (value) {
            let self = this;
            self.setPosition(value, self.position.y);
          }
        });
        /** 获取、设置节点的 Y 坐标 */

        Object.defineProperty(Node.prototype, "y", {
          get: function () {
            let self = this;
            return self.position.y;
          },
          set: function (value) {
            let self = this;
            self.setPosition(self.position.x, value);
          }
        });
        /** 获取、设置节点的 Z 坐标 */

        Object.defineProperty(Node.prototype, "z", {
          get: function () {
            let self = this;
            return self.position.z;
          },
          set: function (value) {
            let self = this;
            self.setPosition(self.position.x, self.position.y, value);
          }
        });
        /** 获取、设置节点的宽度 */

        Object.defineProperty(Node.prototype, "w", {
          configurable: true,
          get: function () {
            var _self$getComponent$wi, _self$getComponent;

            let self = this;
            return (_self$getComponent$wi = (_self$getComponent = self.getComponent(UITransform)) == null ? void 0 : _self$getComponent.width) != null ? _self$getComponent$wi : 0;
          },
          set: function (value) {
            let self = this;
            (self.getComponent(UITransform) || self.addComponent(UITransform)).width = value;
          }
        });
        /** 获取、设置节点的高度 */

        Object.defineProperty(Node.prototype, "h", {
          configurable: true,
          get: function () {
            var _self$getComponent$he, _self$getComponent2;

            let self = this;
            return (_self$getComponent$he = (_self$getComponent2 = self.getComponent(UITransform)) == null ? void 0 : _self$getComponent2.height) != null ? _self$getComponent$he : 0;
          },
          set: function (value) {
            let self = this;
            (self.getComponent(UITransform) || self.addComponent(UITransform)).height = value;
          }
        });
        /** 获取、设置节点的尺寸 */

        Object.defineProperty(Node.prototype, "size", {
          get: function () {
            let self = this;
            let uiTransform = self.getComponent(UITransform);
            return new Size(uiTransform.width, uiTransform.height);
          },
          set: function (value) {
            let self = this;
            let uiTransform = self.getComponent(UITransform) || self.addComponent(UITransform);
            uiTransform.width = value.width;
            uiTransform.height = value.height;
          }
        });
        /** 获取、设置节点的透明度 */

        Object.defineProperty(Node.prototype, "opacity", {
          get: function () {
            let self = this;
            let op = self.getComponent(UIOpacity);

            if (op != null) {
              return op.opacity;
            }

            let render = self.getComponent(UIRenderer);

            if (render) {
              return render.color.a;
            }

            return 255;
          },
          set: function (value) {
            let self = this;
            let op = self.getComponent(UIOpacity);

            if (op != null) {
              op.opacity = value;
              return;
            }

            let render = self.getComponent(UIRenderer);

            if (render) {
              // 直接通过 color.a 设置透明度会有bug，没能直接生效，需要激活节点才生效
              // (render.color.a as any) = value;
              // 创建一个颜色缓存对象，避免每次都创建新对象
              if (!this.$__color__) {
                this.$__color__ = new Color(render.color.r, render.color.g, render.color.b, value);
              } else {
                this.$__color__.a = value;
              }

              render.color = this.$__color__; // 设置 color 对象则可以立刻生效
            } else {
              self.addComponent(UIOpacity).opacity = value;
            }
          }
        });
        /** 获取、设置节点的颜色 */

        Object.defineProperty(Node.prototype, "color", {
          get: function () {
            var _self$getComponent3;

            let self = this;
            return (_self$getComponent3 = self.getComponent(UIRenderer)) == null ? void 0 : _self$getComponent3.color;
          },
          set: function (value) {
            let self = this;
            let render = self.getComponent(UIRenderer);
            render && (render.color = value);
          }
        });
        /** 获取、设置节点的 X 缩放系数 */

        Object.defineProperty(Node.prototype, "scale_x", {
          get: function () {
            let self = this;
            return self.scale.x;
          },
          set: function (value) {
            let self = this;
            self.scale = v3(value, self.scale.y, self.scale.z);
          }
        });
        /** 获取、设置节点的 Y 缩放系数 */

        Object.defineProperty(Node.prototype, "scale_y", {
          get: function () {
            let self = this;
            return self.scale.y;
          },
          set: function (value) {
            let self = this;
            self.scale = v3(self.scale.x, value, self.scale.z);
          }
        });
        /** 获取、设置节点的 Z 缩放系数 */

        Object.defineProperty(Node.prototype, "scale_z", {
          get: function () {
            let self = this;
            return self.scale.z;
          },
          set: function (value) {
            let self = this;
            self.scale = v3(self.scale.x, self.scale.y, value);
          }
        });
        /** 获取、设置节点的水平锚点 */

        Object.defineProperty(Node.prototype, "anchor_x", {
          get: function () {
            var _self$getComponent$an, _self$getComponent4;

            let self = this;
            return (_self$getComponent$an = (_self$getComponent4 = self.getComponent(UITransform)) == null ? void 0 : _self$getComponent4.anchorX) != null ? _self$getComponent$an : 0.5;
          },
          set: function (value) {
            let self = this;
            (self.getComponent(UITransform) || self.addComponent(UITransform)).anchorX = value;
          }
        });
        /** 获取、设置节点的垂直锚点 */

        Object.defineProperty(Node.prototype, "anchor_y", {
          get: function () {
            var _self$getComponent$an2, _self$getComponent5;

            let self = this;
            return (_self$getComponent$an2 = (_self$getComponent5 = self.getComponent(UITransform)) == null ? void 0 : _self$getComponent5.anchorY) != null ? _self$getComponent$an2 : 0.5;
          },
          set: function (value) {
            let self = this;
            (self.getComponent(UITransform) || self.addComponent(UITransform)).anchorY = value;
          }
        });
        /** 获取、设置节点的 X 欧拉角 */

        Object.defineProperty(Node.prototype, "angle_x", {
          get: function () {
            let self = this;
            return self.eulerAngles.x;
          },
          set: function (value) {
            let self = this;
            self.setRotationFromEuler(value, self.eulerAngles.y, self.eulerAngles.z);
          }
        });
        /** 获取、设置节点的 Y 欧拉角 */

        Object.defineProperty(Node.prototype, "angle_y", {
          get: function () {
            return this.eulerAngles.y;
          },
          set: function (value) {
            let self = this;
            self.setRotationFromEuler(self.eulerAngles.x, value, self.eulerAngles.z);
          }
        });
        /** 获取、设置节点的 Z 欧拉角 */

        Object.defineProperty(Node.prototype, "angle_z", {
          get: function () {
            return this.eulerAngles.y;
          },
          set: function (value) {
            let self = this;
            self.setRotationFromEuler(self.eulerAngles.x, self.eulerAngles.y, value);
          }
        });
      }

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f6a5ed2392c453c3706c70f68b3d708bb34f4b23.js.map