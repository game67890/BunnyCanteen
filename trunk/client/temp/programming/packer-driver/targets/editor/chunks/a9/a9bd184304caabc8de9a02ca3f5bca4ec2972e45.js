System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, AnimationClip, instantiate, Prefab, Size, UITransform, v3, resLoader, ViewUtil, _crd;

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../common/loader/ResLoader", _context.meta, extras);
  }

  _export("ViewUtil", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Animation = _cc.Animation;
      AnimationClip = _cc.AnimationClip;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      Size = _cc.Size;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      resLoader = _unresolved_2.resLoader;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f607cCjAEZHVKVZ/FyRs5bA", "ViewUtil", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-08-16 09:34:56
       * @LastEditors: dgflash
       * @LastEditTime: 2023-01-19 14:52:12
       */


      __checkObsolete__(['Animation', 'AnimationClip', 'EventTouch', 'instantiate', 'Node', 'Prefab', 'Size', 'UITransform', 'v3', 'Vec3']);

      /** 显示对象工具 */
      _export("ViewUtil", ViewUtil = class ViewUtil {
        /**
         * 把Node当前的节点树结构根据Node命名转成一个js对象,重名的组件会覆盖，
         * Node的name不应该包含空格键，否则将跳过
         * @param parent 被遍历的Node组件
         * @param obj    绑定的js对象 (可选)
         */
        static nodeTreeInfoLite(parent, obj) {
          let map = obj || new Map();
          let items = parent.children;

          for (let i = 0; i < items.length; i++) {
            let _node = items[i];

            if (_node.name.indexOf(" ") < 0) {
              map.set(_node.name, _node);
            }

            ViewUtil.nodeTreeInfoLite(_node, map);
          }

          return map;
        }
        /**
         * 正则搜索节点名字,符合条件的节点将会返回
         * @param reg     正则表达式
         * @param parent  要搜索的父节点
         * @param nodes   返回的数组（可选）
         */


        static findNodes(reg, parent, nodes) {
          let ns = nodes || [];
          let items = parent.children;

          for (let i = 0; i < items.length; i++) {
            let _name = items[i].name;

            if (reg.test(_name)) {
              ns.push(items[i]);
            }

            ViewUtil.findNodes(reg, items[i], ns);
          }

          return ns;
        }

        /**
         * 节点之间坐标互转
         * @param a         A节点
         * @param b         B节点
         * @param aPos      A节点空间中的相对位置
         */
        static calculateASpaceToBSpacePos(a, b, aPos) {
          const world = a.getComponent(UITransform).convertToWorldSpaceAR(aPos);
          return b.getComponent(UITransform).convertToNodeSpaceAR(world);
        }
        /**
         * 屏幕转空间坐标
         * @param event 触摸事件
         * @param space 转到此节点的坐标空间
         */


        static calculateScreenPosToSpacePos(event, space) {
          const uil = event.getUILocation();
          const worldPos = v3(uil.x, uil.y);
          return space.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
        }
        /**
         * 显示对象等比缩放
         * @param targetWidth       目标宽
         * @param targetHeight      目标高
         * @param defaultWidth      默认宽
         * @param defaultHeight     默认高
         */


        static uniformScale(targetWidth, targetHeight, defaultWidth, defaultHeight) {
          const widthRatio = defaultWidth / targetWidth;
          const heightRatio = defaultHeight / targetHeight;
          let ratio;
          widthRatio < heightRatio ? ratio = widthRatio : ratio = heightRatio;
          return new Size(Math.floor(targetWidth * ratio), Math.floor(targetHeight * ratio));
        }
        /**
         * 从资源缓存中找到预制资源名并创建一个显示对象（建议使用GameComponent里的同名方法，能自动管理内存施放）
         * @param path 资源路径
         */


        static createPrefabNode(path) {
          const p = (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
            error: Error()
          }), resLoader) : resLoader).get(path, Prefab);
          return instantiate(p);
        }
        /**
         * 加载预制并创建预制节点（建议使用GameComponent里的同名方法，能自动管理内存施放）
         * @param path 资源路径
         */


        static createPrefabNodeAsync(path) {
          return new Promise(async (resolve, reject) => {
            const prefab = await (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).loadAsync(path, Prefab);

            if (prefab) {
              const node = this.createPrefabNode(path);
              resolve(node);
            } else {
              resolve(null);
            }
          });
        }
        /**
         * 添加节点动画
         * @param path              资源路径
         * @param node              目标节点
         * @param onlyOne           是否唯一
         * @param isDefaultClip     是否播放默认动画剪辑
         */


        static addNodeAnimation(path, node, onlyOne = true, isDefaultClip = false) {
          if (!node || !node.isValid) {
            return;
          }

          let anim = node.getComponent(Animation);

          if (anim == null) {
            anim = node.addComponent(Animation);
          }

          const clip = (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
            error: Error()
          }), resLoader) : resLoader).get(path, AnimationClip);

          if (!clip) {
            return;
          }

          if (onlyOne && anim.getState(clip.name) && anim.getState(clip.name).isPlaying) {
            return;
          }

          if (isDefaultClip) {
            anim.defaultClip = clip;
            anim.play();
            return;
          } // 播放完成后恢复播放默认动画


          anim.once(Animation.EventType.FINISHED, () => {
            if (anim.defaultClip) {
              anim.play();
            }
          }, this);

          if (anim.getState(clip.name)) {
            anim.play(clip.name);
            return;
          }

          anim.createState(clip, clip.name);
          anim.play(clip.name);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a9bd184304caabc8de9a02ca3f5bca4ec2972e45.js.map