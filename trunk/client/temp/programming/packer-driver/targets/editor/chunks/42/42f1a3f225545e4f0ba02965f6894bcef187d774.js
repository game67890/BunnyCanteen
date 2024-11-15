System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, oops, ViewUtil, ModuleUtil, _crd;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUICallbacks(extras) {
    _reporterNs.report("UICallbacks", "../../core/gui/layer/Defines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewUtil(extras) {
    _reporterNs.report("ViewUtil", "../../core/utils/ViewUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfecs(extras) {
    _reporterNs.report("ecs", "../../libs/ecs/ECS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCompType(extras) {
    _reporterNs.report("CompType", "../../libs/ecs/ECSModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCCComp(extras) {
    _reporterNs.report("CCComp", "./CCComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCCVMParentComp(extras) {
    _reporterNs.report("CCVMParentComp", "./CCVMParentComp", _context.meta, extras);
  }

  _export("ModuleUtil", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      ViewUtil = _unresolved_3.ViewUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "52a6cdAO5tGxaeE1TprZ5VK", "ModuleUtil", undefined);

      __checkObsolete__(['Node', '__private']);

      _export("ModuleUtil", ModuleUtil = class ModuleUtil {
        /**
         * 添加界面组件
         * @param ent      模块实体
         * @param ctor     界面逻辑组件
         * @param uiId     界面资源编号
         * @param uiArgs   界面参数
         */
        static addViewUi(ent, ctor, uiId, uiArgs = null) {
          const uic = {
            onAdded: (node, params) => {
              const comp = node.getComponent(ctor);
              ent.add(comp);
            }
          };
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.open(uiId, uiArgs, uic);
        }
        /**
         * 异步添加视图层组件
         * @param ent      模块实体
         * @param ctor     界面逻辑组件
         * @param uiId     界面资源编号
         * @param uiArgs   界面参数
         * @returns 界面节点
         */


        static addViewUiAsync(ent, ctor, uiId, uiArgs = null) {
          return new Promise((resolve, reject) => {
            const uic = {
              onAdded: (node, params) => {
                const comp = node.getComponent(ctor);
                ent.add(comp);
                resolve(node);
              },
              onLoadFailure: () => {
                resolve(null);
              }
            };
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.open(uiId, uiArgs, uic);
          });
        }
        /**
         * 通过资源内存中获取预制上的组件添加到ECS实体中
         * @param ent      模块实体
         * @param ctor     界面逻辑组件
         * @param parent   显示对象父级
         * @param url      显示资源地址
         */


        static addView(ent, ctor, parent, url) {
          const node = (_crd && ViewUtil === void 0 ? (_reportPossibleCrUseOfViewUtil({
            error: Error()
          }), ViewUtil) : ViewUtil).createPrefabNode(url);
          const comp = node.getComponent(ctor);
          ent.add(comp);
          node.parent = parent;
        }
        /**
         * 业务实体上移除界面组件
         * @param ent        模块实体
         * @param ctor       界面逻辑组件
         * @param uiId       界面资源编号
         * @param isDestroy  是否释放界面缓存（默认为释放界面缓存）
         */


        static removeViewUi(ent, ctor, uiId, isDestroy = true) {
          ent.remove(ctor, isDestroy);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.remove(uiId, isDestroy);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=42f1a3f225545e4f0ba02965f6894bcef187d774.js.map