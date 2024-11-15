System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, PhysicsSystem2D, Contact2DType, GridComponent, BoardMgr, _dec, _class, _crd, ccclass, property, ContactComponent;

  function _reportPossibleCrUseOfGridComponent(extras) {
    _reporterNs.report("GridComponent", "../hecheng/GridComponent", _context.meta, extras);
  }

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
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      GridComponent = _unresolved_2.GridComponent;
    }, function (_unresolved_3) {
      BoardMgr = _unresolved_3.BoardMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1cdfaKb0lhC6I5GRxOa/5/h", "ContactComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'Label', 'PhysicsSystem2D', 'Contact2DType', 'Collider2D']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ContactComponent", ContactComponent = (_dec = ccclass('ContactComponent'), _dec(_class = class ContactComponent extends Component {
        start() {
          PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeinContact, this);
          PhysicsSystem2D.instance.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        }

        onBeinContact(DestCollider, SrcCollider) {
          if (DestCollider.tag != SrcCollider.tag) {
            if (DestCollider.tag == 3 || SrcCollider.tag == 3) {
              (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                error: Error()
              }), BoardMgr) : BoardMgr).IsHuiShou = true;
            } else {
              const DestGridComponent = DestCollider.node.parent.getComponent(_crd && GridComponent === void 0 ? (_reportPossibleCrUseOfGridComponent({
                error: Error()
              }), GridComponent) : GridComponent);

              if (DestGridComponent) {
                const SrcGridComponent = SrcCollider.node.parent.getComponent(_crd && GridComponent === void 0 ? (_reportPossibleCrUseOfGridComponent({
                  error: Error()
                }), GridComponent) : GridComponent);

                if (SrcGridComponent) {
                  if (DestGridComponent.index != SrcGridComponent.index) {
                    let params = {};

                    if ((_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                      error: Error()
                    }), BoardMgr) : BoardMgr).InDragIndex == SrcGridComponent.index) {
                      params.DestIndex = DestGridComponent.index;
                      params.SrcIndex = SrcGridComponent.index;
                    } else {
                      params.DestIndex = SrcGridComponent.index;
                      params.SrcIndex = DestGridComponent.index;
                    }

                    (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                      error: Error()
                    }), BoardMgr) : BoardMgr).addTouchItem(params.SrcIndex, params.DestIndex);
                    console.log("onBeinContact dest index=" + DestGridComponent.index + " tag=" + DestCollider.tag);
                    console.log("onBeinContact src index=" + SrcGridComponent.index + " tag=" + SrcCollider.tag);
                  }
                }
              }
            }
          }
        }

        onEndContact(DestCollider, SrcCollider) {
          if (DestCollider.tag != SrcCollider.tag) {
            if (DestCollider.tag == 3 || SrcCollider.tag == 3) {
              (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                error: Error()
              }), BoardMgr) : BoardMgr).IsHuiShou = false;
            } else {
              const DestGridComponent = DestCollider.node.parent.getComponent(_crd && GridComponent === void 0 ? (_reportPossibleCrUseOfGridComponent({
                error: Error()
              }), GridComponent) : GridComponent);

              if (DestGridComponent) {
                const SrcGridComponent = SrcCollider.node.parent.getComponent(_crd && GridComponent === void 0 ? (_reportPossibleCrUseOfGridComponent({
                  error: Error()
                }), GridComponent) : GridComponent);

                if (SrcGridComponent) {
                  if (DestGridComponent.index != SrcGridComponent.index) {
                    let params = {};

                    if ((_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                      error: Error()
                    }), BoardMgr) : BoardMgr).InDragIndex == SrcGridComponent.index) {
                      params.DestIndex = DestGridComponent.index;
                      params.SrcIndex = SrcGridComponent.index;
                    } else {
                      params.DestIndex = SrcGridComponent.index;
                      params.SrcIndex = DestGridComponent.index;
                    }

                    (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                      error: Error()
                    }), BoardMgr) : BoardMgr).removeTouchItem(params.SrcIndex, params.DestIndex);
                    console.log("onEndContact dest index=" + DestGridComponent.index + " tag=" + DestCollider.tag);
                    console.log("onEndContact src index=" + SrcGridComponent.index + " tag=" + SrcCollider.tag);
                  }
                }
              }
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=61ff652604ee9bdf23047e71dfe941832fe6059a.js.map