System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GPWorkFlowNode, GPWorkFlow, _crd;

  _export({
    GPWorkFlowNode: void 0,
    GPWorkFlow: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "21e1bxUTqRKYJ0wdqs3Bsmj", "GPWorkFlow", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      _export("GPWorkFlowNode", GPWorkFlowNode = class GPWorkFlowNode {
        constructor() {
          this.OnStart = void 0;
          this.OnUpdate = void 0;
          this.OnEnd = void 0;
          this.nextNodes = new Array();
          this._nextIdx = -1;
        }

        get nextNode() {
          return this.nextNodes.length > 0 ? this.nextNodes[0] : null;
        }

        set nextNode(_nextNode) {
          if (this.nextNodes.length == 0) {
            this.nextNodes.push(_nextNode);
          } else {
            this.nextNodes[0] = _nextNode;
          }
        }

        get nextIdx() {
          return this._nextIdx;
        }

        done(nexIdx = 0) {
          this._nextIdx = nexIdx;
          if (this.OnEnd) this.OnEnd(this);
        }

        isDone() {
          return this._nextIdx >= 0;
        }

        refresh() {
          this._nextIdx = -1;

          for (let i = 0; i < this.nextNodes.length; i++) {
            this.nextNodes[i].refresh();
          }
        }

        start() {
          if (this.OnStart) this.OnStart(this);
        }

        update(deltaTime) {
          if (this.OnUpdate) this.OnUpdate(this, deltaTime);
        }

        hasNext() {
          return this.nextNodes.length > 0;
        }

      });

      _export("GPWorkFlow", GPWorkFlow = class GPWorkFlow {
        constructor() {
          this.headNode = void 0;
          this.curNode = void 0;
        }

        start() {
          if (this.headNode) {
            this.headNode.refresh();
          }

          this.curNode = this.headNode;
          this.curNode.start();
        }

        update(deltaTime) {
          if (this.curNode != null) {
            this.curNode.update(deltaTime);

            if (this.curNode.isDone()) {
              if (this.curNode.hasNext()) {
                this.curNode = this.curNode.nextNodes[this.curNode.nextIdx];
                this.curNode.start();
              } else {
                this.curNode = null;
              }
            }
          }
        }

        insertHeadNode(wfNode) {
          let tmp = this.headNode;
          this.headNode = wfNode;
          wfNode.nextNode = tmp;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=75672877e6d0a669301e4fa3f1920db0bad0893f.js.map