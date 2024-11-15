System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Asset, instantiate, ResKeeper, ResUtil, _crd;

  function _reportPossibleCrUseOfCompleteCallback(extras) {
    _reporterNs.report("CompleteCallback", "./res_loader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProgressCallback(extras) {
    _reporterNs.report("ProgressCallback", "./res_loader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResKeeper(extras) {
    _reporterNs.report("ResKeeper", "./res_keeper", _context.meta, extras);
  }

  _export("ResUtil", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Asset = _cc.Asset;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      ResKeeper = _unresolved_2.ResKeeper;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b42489ULFVPGatMf1Mr9iOx", "res_util", undefined);

      __checkObsolete__(['Prefab', 'Asset', 'Node', 'instantiate']);

      _export("ResUtil", ResUtil = class ResUtil {
        static load(attachNode) {
          var keeper = ResUtil.getResKeeper(attachNode);

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          keeper.load.apply(keeper, args);
        }
        /**
         * 从目标节点或其父节点递归查找一个资源挂载组件
         * @param attachNode 目标节点
         * @param autoCreate 当目标节点找不到ResKeeper时是否自动创建一个
         */


        static getResKeeper(attachNode, autoCreate) {
          if (attachNode) {
            var ret = attachNode.getComponent(_crd && ResKeeper === void 0 ? (_reportPossibleCrUseOfResKeeper({
              error: Error()
            }), ResKeeper) : ResKeeper);

            if (!ret) {
              if (autoCreate) {
                return attachNode.addComponent(_crd && ResKeeper === void 0 ? (_reportPossibleCrUseOfResKeeper({
                  error: Error()
                }), ResKeeper) : ResKeeper);
              } else {
                return ResUtil.getResKeeper(attachNode.parent, autoCreate);
              }
            }

            return ret;
          } // 返回一个默认的ResKeeper


          return null;
        }
        /**
         * 赋值srcAsset，并使其跟随targetNode自动释放，用法如下
         * mySprite.spriteFrame = AssignWith(otherSpriteFrame, mySpriteNode);
         * @param srcAsset 用于赋值的资源，如cc.SpriteFrame、cc.Texture等等
         * @param targetNode
         * @param autoCreate
         */


        static assignWith(srcAsset, targetNode, autoCreate) {
          var keeper = ResUtil.getResKeeper(targetNode, autoCreate);

          if (keeper && srcAsset instanceof Asset) {
            keeper.cacheAsset(srcAsset);
            return srcAsset;
          } else {
            console.error("assignWith " + srcAsset + " to " + targetNode + " faile");
            return null;
          }
        }
        /**
         * 实例化一个prefab，并带自动释放功能
         * @param prefab 要实例化的预制
         */


        static instantiate(prefab) {
          var node = instantiate(prefab);
          var keeper = ResUtil.getResKeeper(node, true);

          if (keeper) {
            keeper.cacheAsset(prefab);
          }

          return node;
        }
        /**
         * 从字符串中查找第N个字符
         * @param str 目标字符串
         * @param cha 要查找的字符
         * @param num 第N个
         */


        static findCharPos(str, cha, num) {
          var x = str.indexOf(cha);
          var ret = x;

          for (var i = 0; i < num; i++) {
            x = str.indexOf(cha, x + 1);

            if (x != -1) {
              ret = x;
            } else {
              return ret;
            }
          }

          return ret;
        }
        /**
         * 获取当前调用堆栈
         * @param popCount 要弹出的堆栈数量
         */


        static getCallStack(popCount) {
          // 严格模式无法访问 arguments.callee.caller 获取堆栈，只能先用Error的stack
          var ret = new Error().stack;
          var pos = ResUtil.findCharPos(ret, '\n', popCount);

          if (pos > 0) {
            ret = ret.slice(pos);
          }

          return ret;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bf728e9d9455ad9e4ee494aa89b19f1fdc603874.js.map