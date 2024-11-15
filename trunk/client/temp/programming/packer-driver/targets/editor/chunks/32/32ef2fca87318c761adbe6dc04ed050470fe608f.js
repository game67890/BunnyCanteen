System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, math, UITransform, VirtualGridList, IVirtualGridListItem, _dec, _class, _crd, ccclass, property, AchievementItemVirtualGridList;

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
      math = _cc.math;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      VirtualGridList = _unresolved_2.VirtualGridList;
    }, function (_unresolved_3) {
      IVirtualGridListItem = _unresolved_3.IVirtualGridListItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9362aw484lH+70EbxR8IUV/", "AchievementItemVirtualGridList", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Sprite', 'math', 'SpriteFrame', 'Node', 'Prefab', 'ScrollView', 'UITransform', 'instantiate', 'Event', 'isValid']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AchievementItemVirtualGridList", AchievementItemVirtualGridList = (_dec = ccclass('AchievementItemVirtualGridList'), _dec(_class = class AchievementItemVirtualGridList extends (_crd && VirtualGridList === void 0 ? (_reportPossibleCrUseOfVirtualGridList({
        error: Error()
      }), VirtualGridList) : VirtualGridList) {
        constructor(...args) {
          super(...args);
          this.rowNum = 1;
          this._lastContentPosX = 0;
        }

        // 上一次滚动位置

        /**
         * 初始化布局
         */
        _initializeList() {
          // this._gridList = this.node.getComponent(ScrollView);
          // this._content = this._gridList.content;
          this._itemHeight = this.itemPrefab.data.getComponent(UITransform).height;
          this._itemWidth = this.itemPrefab.data.getComponent(UITransform).width;

          if (this.useVirtualLayout) {
            this.node.on('scrolling', this._onVirtualLayoutScrolling, this);
          } else {// this.node.on('scrolling', this._onScrolling, this);
          } // 缓冲区域，半屏加1个item高度


          this._bufferZone = this.node.getComponent(UITransform).width * 0.5 + this._itemWidth; // 计算出需要同时绘制的数量(一屏数量 + 二行(上下各一行))

          this._spawnCount = Math.ceil(this.node.getComponent(UITransform).width / this._itemWidth + 2) * this.rowNum;
          this._lastContentPosX = 0;
          this._initialized = true; // 数据列表可能在初始化完成之前进入

          if (this._dataList) {
            this.createItemsDisplayList(this._dataList);
          }
        }
        /**
         * 创建物品格子列表
         * @param {Array<any>} dataList 数据
         */


        createItemsDisplayList(dataList = []) {
          this._dataList = dataList = dataList || [];

          if (!this._initialized) {
            return;
          }

          let content = this._content || this._scrollView.content;
          content.destroyAllChildren(); // 总数量

          this._totalCount = dataList.length; // 设置content总高度

          content.getComponent(UITransform).width = this._getContentWidth(this._totalCount); // 创建固定数量

          this._createFixedIncrementItems();

          if (!this.isTop()) {
            this.scheduleOnce(() => {
              this.scrollToTop();
            }, .2);
          }

          this.labelEmptyTip.node.active = this._totalCount <= 0;
        }
        /**
         * 获取content总宽度
         * @param {Number} totalCount 总数量
         * @returns {Number} 容器总宽度
         */


        _getContentWidth(totalCount) {
          let width = Math.ceil(totalCount / this.rowNum) * (this._itemWidth + this.spacingX) + this.paddingTop + this.paddingBottom;

          if (width < this._contentOriginalWidth) {
            width = this._contentOriginalWidth;
          }

          return width;
        }
        /**
         * 追加数据列表，一般用于滚动翻页
         * @param {Array<any>} dataList 追加数据队列
         */


        appendItemsToDisplayList(dataList) {
          if (!dataList || dataList.length <= 0) {
            return;
          }

          if (this._totalCount <= 0) {
            this.createItemsDisplayList(dataList);
            return;
          }

          dataList = this._dataList.concat(dataList);

          if (this._totalCount < this._spawnCount) {
            // 不满一屏的时候，重新绘制新列表
            this.createItemsDisplayList(dataList);
          } else {
            let content = this._content || this._scrollView.content; // 总数量

            this._totalCount = dataList.length; // 设置content总高度

            content.getComponent(UITransform).width = this._getContentWidth(this._totalCount);
            this._dataList = dataList;
            this.labelEmptyTip.node.active = this._totalCount <= 0;
            this.scheduleOnce(() => {
              let pos = this._scrollView.getScrollOffset();

              pos.x += this._itemWidth * .2;

              this._scrollView.scrollToOffset(pos, .1);
            });
          }
        }

        _onVirtualLayoutScrolling() {
          let items = this._items;
          const buffer = this._bufferZone;
          const isDown = this._content.position.x < this._lastContentPosX; // 滚动方向 下减上加

          const offset = (this._itemWidth + this.spacingX) * Math.ceil(items.length / this.rowNum); // 所有items 总高度

          let dataList = this._dataList; // 更新每一个item位置和数据

          for (let i = 0; i < items.length; i++) {
            let item = items[i];
            let viewPos = this.getPositionInView(item);

            if (!isDown) {
              // 往下滑动，看下面的item，超出屏幕外下方，但是没有到top的item
              if (viewPos.x > buffer && item.position.x - offset > 0) {
                let itemCtrl = item.getComponent(_crd && IVirtualGridListItem === void 0 ? (_reportPossibleCrUseOfIVirtualGridListItem({
                  error: Error()
                }), IVirtualGridListItem) : IVirtualGridListItem);

                if (itemCtrl) {
                  itemCtrl.onLeave();
                  item.setPosition(item.position.x - offset, item.position.y);
                  let itemIndex = itemCtrl.itemIndex - items.length;
                  itemCtrl.updateItem(dataList[itemIndex], itemIndex);
                  itemCtrl.onDataChanged();
                  itemCtrl.onEnter();
                } else {
                  console.log("1 achievment item IVirtualGridListItem is null");
                }
              }
            } else {
              // 往上滑动，看上面的item，超出屏幕外上方，但是没有到bottom的item
              if (viewPos.x < -buffer && item.position.x + offset < this._content.getComponent(UITransform).width) {
                let itemCtrl = item.getComponent(_crd && IVirtualGridListItem === void 0 ? (_reportPossibleCrUseOfIVirtualGridListItem({
                  error: Error()
                }), IVirtualGridListItem) : IVirtualGridListItem);

                if (itemCtrl) {
                  let itemIndex = itemCtrl.itemIndex + items.length; // 大于总数量的不移动更新

                  if (itemIndex < this._totalCount) {
                    itemCtrl.onLeave();
                    item.setPosition(item.position.x + offset, item.position.y);
                    itemCtrl.updateItem(dataList[itemIndex], itemIndex);
                    itemCtrl.onDataChanged();
                    itemCtrl.onEnter();

                    if (itemIndex === this._totalCount - 1) {
                      this._onScrollToBottom();
                    }
                  }
                } else {
                  console.log("2 achievment item IVirtualGridListItem is null");
                }
              }
            }
          } // 保存最后一次contentY偏移量，判断滑动方向


          this._lastContentPosX = this._content.position.x;
          items = null;
          dataList = null;
        }
        /**
         * 更新item位置
         * @param {Node} item item节点
         * @param {Number} idx 索引
         */


        _updateItemPos(item, idx) {
          const row = idx % this.rowNum;
          const col = Math.floor(idx / this.rowNum);

          const contentUiTrans = this._content.getComponent(UITransform);

          const itemUiTrans = item.getComponent(UITransform);
          item.setPosition(itemUiTrans.width * (0.5 + col) + this.spacingX * col + this.paddingTop, -contentUiTrans.height * 0.5 + itemUiTrans.height * (0.5 + row) - this.spacingY * row);
        }
        /**
         * 获取当前Y轴偏移量整数
         * @returns {Number}
         */


        getScrollOffsetX() {
          return Math.floor(this._scrollView.getScrollOffset().x);
        }
        /**
         * 是否在顶端
         * @returns {Boolean}
         */


        isTop() {
          return this.getScrollOffsetX() <= 0;
        }
        /**
         * 滚动到固定位置
         * @param {Number} itemIndex item index
         * @param {Number} sec 滚动时间
         */


        scrollToFixedPosition(itemIndex, sec) {
          this.stopAutoScroll();
          let itemWidth = 1;

          if (this.itemPrefab != null && this.itemPrefab.data != null) {
            itemWidth = this.itemPrefab.data.getComponent(UITransform).width;
          }

          const rowNum = this.rowNum;
          const row = itemIndex % rowNum;
          const col = Math.floor(itemIndex / rowNum);
          const x = -itemWidth * (0.5 + row) - this.spacingX * row - this.paddingTop;
          const pos = math.v2(x, 0);

          if (this._scrollView) {
            this._scrollView.scrollToOffset(pos, sec || 0);
          }

          if (this.useVirtualLayout) {
            if (this._content) {
              this._content.destroyAllChildren();
            }

            let startIndex = itemIndex - col;

            this._createFixedIncrementItems(startIndex);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=32ef2fca87318c761adbe6dc04ed050470fe608f.js.map