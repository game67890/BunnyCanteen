System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, instantiate, VirtualGridList, IVirtualGridListItem, RankImageCache, _dec, _class, _crd, ccclass, property, RankVirtualGridList;

  function _reportPossibleCrUseOfVirtualGridList(extras) {
    _reporterNs.report("VirtualGridList", "../../../resources/libs/virtual_grid_list/virtual_grid_list", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIVirtualGridListItem(extras) {
    _reporterNs.report("IVirtualGridListItem", "../../../resources/libs/virtual_grid_list/interface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRankImageCache(extras) {
    _reporterNs.report("RankImageCache", "./RankImageCache", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      VirtualGridList = _unresolved_2.VirtualGridList;
    }, function (_unresolved_3) {
      IVirtualGridListItem = _unresolved_3.IVirtualGridListItem;
    }, function (_unresolved_4) {
      RankImageCache = _unresolved_4.RankImageCache;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cf76bg8GDxJPYcAqempdG/w", "RankVirtualGridList", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Sprite', 'math', 'SpriteFrame', 'Node', 'Prefab', 'UITransform', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RankVirtualGridList", RankVirtualGridList = (_dec = ccclass('RankVirtualGridList'), _dec(_class = class RankVirtualGridList extends (_crd && VirtualGridList === void 0 ? (_reportPossibleCrUseOfVirtualGridList({
        error: Error()
      }), VirtualGridList) : VirtualGridList) {
        constructor(...args) {
          super(...args);
          this._RankimageCache = new (_crd && RankImageCache === void 0 ? (_reportPossibleCrUseOfRankImageCache({
            error: Error()
          }), RankImageCache) : RankImageCache)();
        }

        _createOneItemDisplay(idx, data) {
          let item = instantiate(this.itemPrefab);

          this._content.addChild(item); // 更新位置


          this._updateItemPos(item, idx); // 更新id


          const component = item.getComponent(_crd && IVirtualGridListItem === void 0 ? (_reportPossibleCrUseOfIVirtualGridListItem({
            error: Error()
          }), IVirtualGridListItem) : IVirtualGridListItem);
          component.updateItem(data, idx);
          component.imageCache = this._RankimageCache;
          item.on(Node.EventType.TOUCH_END, this._onItemTouched, this);
          return item;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=edcdeed8b6233b1b3fda3da92daa5b5b5dc97814.js.map