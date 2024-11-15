System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Prefab, UITransform, instantiate, VirtualGridList, IVirtualGridListItem, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, TaskVirtualGridList;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVirtualGridList(extras) {
    _reporterNs.report("VirtualGridList", "../../../resources/libs/virtual_grid_list/virtual_grid_list", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIVirtualGridListItem(extras) {
    _reporterNs.report("IVirtualGridListItem", "../../../resources/libs/virtual_grid_list/interface", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      UITransform = _cc.UITransform;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      VirtualGridList = _unresolved_2.VirtualGridList;
    }, function (_unresolved_3) {
      IVirtualGridListItem = _unresolved_3.IVirtualGridListItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "efa5bkXMd5F0aQ82/NdXXLy", "TaskVirtualGridList", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Sprite', 'math', 'SpriteFrame', 'Node', 'Prefab', 'UITransform', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TaskVirtualGridList", TaskVirtualGridList = (_dec = ccclass('TaskVirtualGridList'), _dec2 = property({
        tooltip: 'title的预制体',
        type: Prefab
      }), _dec(_class = (_class2 = class TaskVirtualGridList extends (_crd && VirtualGridList === void 0 ? (_reportPossibleCrUseOfVirtualGridList({
        error: Error()
      }), VirtualGridList) : VirtualGridList) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "titlePrefab", _descriptor, this);
        }

        /**
         * 初始化布局
         */
        _initializeList() {
          // this._gridList = this.node.getComponent(ScrollView);
          // this._content = this._gridList.content;
          this._itemHeight = this.itemPrefab.data.getComponent(UITransform).height;
          this._itemWidth = this.itemPrefab.data.getComponent(UITransform).width;

          if (this.columnNum == 0) {
            // 自动计算
            this.columnNum = Math.floor((this._content.getComponent(UITransform).width + this.spacingX) / (this._itemWidth + this.spacingX));

            if (this.columnNum < 1) {
              this.columnNum = 1;
            }
          }

          if (this.useVirtualLayout) {//this.node.on('scrolling', this._onVirtualLayoutScrolling, this);
          } else {// this.node.on('scrolling', this._onScrolling, this);
          } // 缓冲区域，半屏加1个item高度


          this._bufferZone = this.node.getComponent(UITransform).height * 0.5 + this._itemHeight; // 计算出需要同时绘制的数量(一屏数量 + 二行(上下各一行))

          this._spawnCount = Math.ceil(this.node.getComponent(UITransform).height / this._itemHeight + 2) * this.columnNum;
          this._lastContentPosY = 0;
          this._initialized = true; // 数据列表可能在初始化完成之前进入

          if (this._dataList) {
            this.createItemsDisplayList(this._dataList);
          }
        }
        /**
         * 创建固定增量的items
         * @param {Number} startIndex 起始索引
         */


        _createFixedIncrementItems(startIndex = 0) {
          this._items = [];
          startIndex = startIndex || 0; // 如果总数量不足够同时创建的数量，则只创建总数量

          let fixCount = this._totalCount;
          let dataList = this._dataList;

          for (let i = startIndex; i < fixCount; i++) {
            let item = this._createOneItemDisplay(i, dataList[i]);

            this._items.push(item);
          }

          dataList = null;

          if (this._items.length > 0) {
            this.scheduleOnce(() => {
              for (let i = 0; i < this._items.length; i++) {
                this._items[i].getComponent(_crd && IVirtualGridListItem === void 0 ? (_reportPossibleCrUseOfIVirtualGridListItem({
                  error: Error()
                }), IVirtualGridListItem) : IVirtualGridListItem).onDataChanged();
              }
            });
          }
        }
        /**
         * 创建一个item
         * @param {Number} idx 索引
         * @param {*} data
         * @returns {Node} 返回一个显示单元
         */


        _createOneItemDisplay(idx, data) {
          let item = null;

          if (data.TitleId > 0) {
            item = instantiate(this.titlePrefab);
          } else {
            item = instantiate(this.itemPrefab);
          }

          this._content.addChild(item); // 更新位置


          this._updateItemPos(item, idx); // 更新id


          const component = item.getComponent(_crd && IVirtualGridListItem === void 0 ? (_reportPossibleCrUseOfIVirtualGridListItem({
            error: Error()
          }), IVirtualGridListItem) : IVirtualGridListItem);
          component.updateItem(data, idx);
          component.imageCache = this._imageCache;
          item.on(Node.EventType.TOUCH_END, this._onItemTouched, this);
          return item;
        }
        /**
        * 更新item位置
        * @param {Node} item item节点
        * @param {Number} idx 索引
        */


        _updateItemPos(item, idx) {
          const col = idx % this.columnNum;
          const row = Math.floor(idx / this.columnNum);
          let PreHeight = 0;

          for (let i = 0; i < idx; i++) {
            PreHeight = PreHeight + this._items[i].getComponent(UITransform).height;
          }

          const contentUiTrans = this._content.getComponent(UITransform);

          const itemUiTrans = item.getComponent(UITransform);
          item.setPosition(-contentUiTrans.width * 0.5 + itemUiTrans.width * (0.5 + col) + this.spacingX * col, -PreHeight - itemUiTrans.height * 0.5 - this.spacingY * row - this.paddingTop);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "titlePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=89c9cc1d2ef721f1d700ea340fdc9cb27a18f1a5.js.map