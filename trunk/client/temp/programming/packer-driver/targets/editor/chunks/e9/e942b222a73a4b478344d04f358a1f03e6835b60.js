System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, view, BoardMgr, _dec, _class, _crd, ccclass, property, LiWuComponent;

  function _reportPossibleCrUseOfBoardMgr(extras) {
    _reporterNs.report("BoardMgr", "../manager/BoardManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      view = _cc.view;
    }, function (_unresolved_2) {
      BoardMgr = _unresolved_2.BoardMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a1ee0vNio9PRJmQXZntvEEH", "LiWuComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'Prefab', 'instantiate', 'view', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LiWuComponent", LiWuComponent = (_dec = ccclass('LiWuComponent'), _dec(_class = class LiWuComponent extends Component {
        constructor(...args) {
          super(...args);
          this.LiwuIndex = 0;
        }

        start() {}

        update(deltaTime) {}

        onAdded(params) {
          const node = this.node; // 获取屏幕的大小

          const screenSize = view.getVisibleSize(); // 设置节点的位置到屏幕左下角

          node.setPosition(-screenSize.width / 2 + node.size.x / 2, -screenSize.height / 2 + node.size.y / 2);
          return true;
        }

        onClickLiWu() {
          (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
            error: Error()
          }), BoardMgr) : BoardMgr).board[this.LiwuIndex].IsLiWu = false;
          (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
            error: Error()
          }), BoardMgr) : BoardMgr).board[this.LiwuIndex].IsLiWuFlying = false; //oops.gui.remove(UIID.Liwu);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e942b222a73a4b478344d04f358a1f03e6835b60.js.map