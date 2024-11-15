System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCBoolean, CCInteger, CCString, Component, instantiate, Label, math, Node, Prefab, ScrollView, isValid, UITransform, IVirtualGridListItem, ImageCache, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, VirtualGridList;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIVirtualGridListItem(extras) {
    _reporterNs.report("IVirtualGridListItem", "./interface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfImageCache(extras) {
    _reporterNs.report("ImageCache", "./image_cache", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCBoolean = _cc.CCBoolean;
      CCInteger = _cc.CCInteger;
      CCString = _cc.CCString;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      math = _cc.math;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ScrollView = _cc.ScrollView;
      isValid = _cc.isValid;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      IVirtualGridListItem = _unresolved_2.IVirtualGridListItem;
    }, function (_unresolved_3) {
      ImageCache = _unresolved_3.ImageCache;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b97d8lNwAtEzqinf/B9vNKL", "virtual_grid_list", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'CCInteger', 'CCString', 'Component', 'error', 'instantiate', 'Label', 'math', 'Node', 'Prefab', 'ScrollView', 'isValid', 'UITransform', 'Event']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("VirtualGridList", VirtualGridList = (_dec = ccclass('VirtualGridList'), _dec2 = property({
        tooltip: '表项的预制体',
        type: Prefab
      }), _dec3 = property({
        tooltip: '没有数据时候的显示文本组件',
        type: Label
      }), _dec4 = property({
        tooltip: '表项距离上边缘距离',
        type: CCInteger
      }), _dec5 = property({
        tooltip: '表项距离下边缘距离',
        type: CCInteger
      }), _dec6 = property({
        tooltip: '表项的列间距',
        type: CCInteger
      }), _dec7 = property({
        tooltip: '表项的行间距',
        type: CCInteger
      }), _dec8 = property({
        tooltip: '列数',
        type: CCInteger
      }), _dec9 = property({
        tooltip: '是否启用虚拟列表',
        type: CCBoolean
      }), _dec10 = property({
        tooltip: '是否缓存所加载的图片',
        type: CCBoolean
      }), _dec11 = property({
        tooltip: '没有数据时候的显示文本',
        type: CCString
      }), _dec(_class = (_class2 = class VirtualGridList extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "itemPrefab", _descriptor, this);

          _initializerDefineProperty(this, "labelEmptyTip", _descriptor2, this);

          _initializerDefineProperty(this, "paddingTop", _descriptor3, this);

          // item 距离上边缘距离
          _initializerDefineProperty(this, "paddingBottom", _descriptor4, this);

          // item 距离下边缘距离
          _initializerDefineProperty(this, "spacingX", _descriptor5, this);

          // item 列间距
          _initializerDefineProperty(this, "spacingY", _descriptor6, this);

          // item 行间距
          _initializerDefineProperty(this, "columnNum", _descriptor7, this);

          // 列数
          _initializerDefineProperty(this, "useVirtualLayout", _descriptor8, this);

          // 是否启用虚拟列表
          _initializerDefineProperty(this, "cacheImage", _descriptor9, this);

          // 缓存加载的图片
          _initializerDefineProperty(this, "emptyTip", _descriptor10, this);

          this._items = [];
          this._imageCache = new (_crd && ImageCache === void 0 ? (_reportPossibleCrUseOfImageCache({
            error: Error()
          }), ImageCache) : ImageCache)();
          this._dataList = [];
          this._selectedItemData = null;
          this._scrollView = null;
          // ScrollView组件
          this._content = null;
          // ScrollView.content
          this._contentOriginalHeight = 0;
          this._contentOriginalWidth = 0;
          this._spawnCount = 0;
          // 常驻绘制数量
          this._totalCount = 0;
          // 总共数量
          this._bufferZone = 0;
          // 缓冲区域(包括屏幕内)
          this._lastContentPosY = 0;
          // 上一次滚动位置
          this._itemHeight = 0;
          // item template 高度
          this._itemWidth = 0;
          // item template 宽度
          this._initialized = false;
          //初始化完成
          this._scrollToBottomHandler = null;
          // 滑动到底部回调事件
          this._scrollToBottomThisObj = null;
          // 滑动到底部回调事件this对象
          this._selectOneItemHandler = null;
          // 选中回调事件
          this._selectOneItemThisObj = null;
        }

        // 选中事件this 对象

        /**
         * 获取显示列表
         * @returns {Array<Node>}
         */
        get getTemplateItems() {
          return this._items;
        }
        /**
         * 获取数据队列
         * @returns {Array<any>}
         **/


        get getDataList() {
          return this._dataList;
        }

        get getGridList() {
          return this._scrollView;
        }

        start() {}

        onLoad() {}
        /**
         * 通过初始化方法传参的方式，初始化滚动列表，建议在画面的onLoad方法中调用，
         * 相比在creator界面中设置参数，这种方式更易维护，不会因为与VirtualGridList控件保持同步而导致配置丢失或者重置。
         * @param {IVirtualGridOptions} options
         */


        initGridList(options) {
          this._scrollView = this.node.getComponent(ScrollView);
          this._content = this._scrollView.content;
          this._contentOriginalHeight = this._content.getComponent(UITransform).height;
          this._contentOriginalWidth = this._content.getComponent(UITransform).width; // this.itemPrefab = itemPrefab;

          if (options) {
            this.paddingTop = options.paddingTop === undefined ? this.paddingTop : options.paddingTop;
            this.paddingBottom = options.paddingBottom === undefined ? this.paddingBottom : options.paddingBottom;
            this.spacingX = options.spacingX === undefined ? this.spacingX : options.spacingX;
            this.spacingY = options.spacingY === undefined ? this.spacingY : options.spacingY;
            this.columnNum = options.columnNum === undefined ? this.columnNum : options.columnNum;
            this.useVirtualLayout = options.useVirtualLayout === undefined ? this.useVirtualLayout : options.useVirtualLayout;
            this.emptyTip = options.emptyTip === undefined ? this.emptyTip : options.emptyTip;
            this.cacheImage = options.cacheImage === undefined ? true : this.cacheImage;
          }

          this.labelEmptyTip.getComponent(Label).string = this.emptyTip; // 延时为了自适应宽度

          this.scheduleOnce(this._initializeList, 0);
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

          if (this.useVirtualLayout) {
            this.node.on('scrolling', this._onVirtualLayoutScrolling, this);
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

          content.getComponent(UITransform).height = this._getContentHeight(this._totalCount); // 创建固定数量

          this._createFixedIncrementItems();

          if (!this.isTop()) {
            this.scheduleOnce(() => {
              this.scrollToTop();
            }, .2);
          }

          this.labelEmptyTip.node.active = this._totalCount <= 0;
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

            content.getComponent(UITransform).height = this._getContentHeight(this._totalCount); // // 创建固定数量
            //this._createFixedIncrementItems(this._dataList.length);

            this._dataList = dataList;
            this.labelEmptyTip.node.active = this._totalCount <= 0;
            this.scheduleOnce(() => {
              let pos = this._scrollView.getScrollOffset();

              pos.y += this._itemHeight * .2;

              this._scrollView.scrollToOffset(pos, .1);
            });
          }
        }
        /**
         * 注册滚动至底部回调方法
         * @param {Function} handler 滚动至底部回调函数 function()
         * @param {*} thisObj 回调函数this对象
         */


        registerScrollToBottomEventHandler(handler, thisObj) {
          this._scrollToBottomHandler = handler;
          this._scrollToBottomThisObj = thisObj;
        }
        /**
         * 选中事件回调方法
         * @param {Function} handler 选中事件回调函数 function()
         * @param {*} thisObj 回调函数this对象
         */


        registerSelectOneItemEventHandler(handler, thisObj) {
          this._selectOneItemHandler = handler;
          this._selectOneItemThisObj = thisObj;
        }
        /**
         * 刷新列表显示, 条数不变，修改数据，刷新显示
         * @param {any[]} some 刷新指定单元
         */


        refreshItemDisplays(some) {
          if (this._items) {
            let list = this._items;
            let item;

            if (some && some.length > 0) {
              for (let i = 0; i < list.length; i++) {
                item = list[i];
                const com = item.getComponent(_crd && IVirtualGridListItem === void 0 ? (_reportPossibleCrUseOfIVirtualGridListItem({
                  error: Error()
                }), IVirtualGridListItem) : IVirtualGridListItem);

                if (some.indexOf(com.data) != -1) {
                  com.onDataChanged();
                }
              }
            } else {
              for (let i = 0; i < list.length; i++) {
                item = list[i];
                const com = item.getComponent(_crd && IVirtualGridListItem === void 0 ? (_reportPossibleCrUseOfIVirtualGridListItem({
                  error: Error()
                }), IVirtualGridListItem) : IVirtualGridListItem);
                com.onDataChanged();
              }
            }

            item = null;
            list = null;
          }
        }

        _onVirtualLayoutScrolling() {
          let items = this._items;
          const buffer = this._bufferZone;
          const isDown = this._content.position.y < this._lastContentPosY; // 滚动方向 下减上加

          const offset = (this._itemHeight + this.spacingY) * Math.ceil(items.length / this.columnNum); // 所有items 总高度

          let dataList = this._dataList; // 更新每一个item位置和数据

          for (let i = 0; i < items.length; i++) {
            let item = items[i];
            let viewPos = this.getPositionInView(item);

            if (isDown) {
              // 往下滑动，看下面的item，超出屏幕外下方，但是没有到top的item
              if (viewPos.y < -buffer && item.position.y + offset < 0) {
                let itemCtrl = item.getComponent(_crd && IVirtualGridListItem === void 0 ? (_reportPossibleCrUseOfIVirtualGridListItem({
                  error: Error()
                }), IVirtualGridListItem) : IVirtualGridListItem);

                if (itemCtrl) {
                  itemCtrl.onLeave();
                  item.setPosition(item.position.x, item.position.y + offset);
                  let itemIndex = itemCtrl.itemIndex - items.length;
                  itemCtrl.updateItem(dataList[itemIndex], itemIndex);
                  itemCtrl.onDataChanged();
                  itemCtrl.onEnter();
                } else {
                  console.log(" 1 item IVirtualGridListItem null");
                }
              }
            } else {
              // 往上滑动，看上面的item，超出屏幕外上方，但是没有到bottom的item
              if (viewPos.y > buffer && item.position.y - offset > -this._content.getComponent(UITransform).height) {
                let itemCtrl = item.getComponent(_crd && IVirtualGridListItem === void 0 ? (_reportPossibleCrUseOfIVirtualGridListItem({
                  error: Error()
                }), IVirtualGridListItem) : IVirtualGridListItem);

                if (itemCtrl) {
                  let itemIndex = itemCtrl.itemIndex + items.length; // 大于总数量的不移动更新

                  if (itemIndex < this._totalCount) {
                    itemCtrl.onLeave();
                    item.setPosition(item.position.x, item.position.y - offset);
                    itemCtrl.updateItem(dataList[itemIndex], itemIndex);
                    itemCtrl.onDataChanged();
                    itemCtrl.onEnter();

                    if (itemIndex === this._totalCount - 1) {
                      this._onScrollToBottom();
                    }
                  }
                } else {
                  console.log(" 2 item IVirtualGridListItem null");
                }
              }
            }
          } // 保存最后一次contentY偏移量，判断滑动方向


          this._lastContentPosY = this._content.position.y;
          items = null;
          dataList = null;
        }
        /**
         * 滚动到底部触发
         */


        _onScrollToBottom() {
          if (this._scrollToBottomHandler) {
            this._scrollToBottomHandler.call(this._scrollToBottomThisObj);
          }
        }

        _onSelectOneItem(data) {
          if (this._selectOneItemHandler) {
            this._selectOneItemHandler.call(this._selectOneItemThisObj, data);
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

          if (this.useVirtualLayout) {
            fixCount = this._totalCount < this._spawnCount ? this._totalCount : this._spawnCount;
          }

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
          let item = instantiate(this.itemPrefab);

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
         * 显示单元被点击事件 触发select 和 unselect事件
         * @param {Event} event
         */


        _onItemTouched(event) {
          const target = event.target;
          const com = target.getComponent(_crd && IVirtualGridListItem === void 0 ? (_reportPossibleCrUseOfIVirtualGridListItem({
            error: Error()
          }), IVirtualGridListItem) : IVirtualGridListItem);

          this._selectOne(com, true);
        }

        setSelectionWithoutCallback(data) {
          const item = this.findItemDisplayByData(data);
          item && this._selectOne(this.getBaseItem(item), false);
        }

        setSelectionAndCallback(data) {
          const item = this.findItemDisplayByData(data);
          item && this._selectOne(this.getBaseItem(item), true);
        }

        getBaseItem(item) {
          return item.getComponent(_crd && IVirtualGridListItem === void 0 ? (_reportPossibleCrUseOfIVirtualGridListItem({
            error: Error()
          }), IVirtualGridListItem) : IVirtualGridListItem);
        }

        _selectOne(com, triggerOutsideCallback) {
          if (this._selectedItemData && this._selectedItemData != com.data) {
            let item = this.findItemDisplayByData(this._selectedItemData);

            if (item) {
              let component = this.getBaseItem(item);
              component.setSelectStatus(false);
              component.onUnselect();
            }
          }

          this._selectedItemData = com.data;
          com.setSelectStatus(true);
          com.onSelect();
          true === triggerOutsideCallback && this._onSelectOneItem(com.data);
        }
        /**
         * 根据item的数据data查找显示对象Item，当开启虚拟列表的时候，返回对象可能不存在
         * @param {any} data
         * @returns {Node} 与数据对应的显示单元
         */


        findItemDisplayByData(data) {
          if (data && this._items) {
            let list = this._items;

            for (let item of list) {
              let component = item.getComponent(_crd && IVirtualGridListItem === void 0 ? (_reportPossibleCrUseOfIVirtualGridListItem({
                error: Error()
              }), IVirtualGridListItem) : IVirtualGridListItem);

              if (component.data == data) {
                return item;
              }
            }

            list = null;
            return null;
          } else {
            return null;
          }
        }
        /**
         * 更新item位置
         * @param {Node} item item节点
         * @param {Number} idx 索引
         */


        _updateItemPos(item, idx) {
          const col = idx % this.columnNum;
          const row = Math.floor(idx / this.columnNum);

          const contentUiTrans = this._content.getComponent(UITransform);

          const itemUiTrans = item.getComponent(UITransform);
          item.setPosition(-contentUiTrans.width * 0.5 + itemUiTrans.width * (0.5 + col) + this.spacingX * col, -itemUiTrans.height * (0.5 + row) - this.spacingY * row - this.paddingTop);
        }
        /**
         * 更新item
         * @param {Node} item item节点
         * @param {any} data
         * @param {*} idx 索引
         */


        _updateItem(item, data, idx) {
          // 更新位置
          this._updateItemPos(item, idx); // 更新id


          item.getComponent(_crd && IVirtualGridListItem === void 0 ? (_reportPossibleCrUseOfIVirtualGridListItem({
            error: Error()
          }), IVirtualGridListItem) : IVirtualGridListItem).updateItem(data, idx);
        }
        /**
         * 获取content总高度
         * @param {Number} totalCount 总数量
         * @returns {Number} 容器总高度
         */


        _getContentHeight(totalCount) {
          let height = Math.ceil(totalCount / this.columnNum) * (this._itemHeight + this.spacingY) + this.paddingTop + this.paddingBottom;

          if (height < this._contentOriginalHeight) {
            height = this._contentOriginalHeight;
          }

          return height;
        }
        /**
         * 是否在顶端
         * @returns {Boolean}
         */


        isTop() {
          return this.getScrollOffsetY() <= 0;
        }
        /**
         * 滚动到顶部
         */


        scrollToTop() {
          this.scrollToFixedPosition(0, .2);
        }
        /**
         * 滚动到固定位置
         * @param {Number} itemIndex item index
         * @param {Number} sec 滚动时间
         */


        scrollToFixedPosition(itemIndex, sec) {
          this.stopAutoScroll();
          let itemHeight = 1;

          if (this.itemPrefab != null && this.itemPrefab.data != null) {
            itemHeight = this.itemPrefab.data.getComponent(UITransform).height;
          }

          const columnNum = this.columnNum;
          const col = itemIndex % columnNum;
          const row = Math.floor(itemIndex / columnNum);
          const y = -itemHeight * (0.5 + row) - this.spacingY * row - this.paddingTop;
          const pos = math.v2(0, y);

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
        /**
         * 停止自动滚动
         */


        stopAutoScroll() {
          if (this._scrollView == null) {
            return;
          }

          if (!this._scrollView.isAutoScrolling()) return;

          this._scrollView.stopAutoScroll();
        }
        /**
         * 获取item在scrView上的位置
         * @param {Node} item 显示单元
         * @returns {math.Vec2 | math.Vec3} 显示单元位置
         */


        getPositionInView(item) {
          const worldPos = item.parent.getComponent(UITransform).convertToWorldSpaceAR(item.position);
          return this._scrollView.node.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
        }
        /**
         * 获取当前Y轴偏移量整数
         * @returns {Number}
         */


        getScrollOffsetY() {
          return Math.floor(this._scrollView.getScrollOffset().y);
        }
        /**
         * 清空列表
         */


        clearList() {
          this._dataList = null;

          this._disposeItems();

          this.createItemsDisplayList();
        }
        /**
         * 清理回收所有显示单元
         */


        _disposeItems() {
          isValid(this._content) && this._scrollView.content.destroyAllChildren();
          this._items = null;
        }

        _onScrolling() {}
        /**
         * 回收
         */


        onDestroy() {
          if (this.useVirtualLayout) {
            this.node.off('scrolling', this._onScrolling, this);
          }

          this._scrollToBottomHandler = null;
          this._scrollToBottomThisObj = null;
          this._selectOneItemHandler = null;
          this._selectOneItemThisObj = null;

          this._disposeItems();

          this._dataList = null;

          this._imageCache.clear();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelEmptyTip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "paddingTop", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "paddingBottom", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spacingX", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 3;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "spacingY", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 3;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "columnNum", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "useVirtualLayout", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "cacheImage", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "emptyTip", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9ae53c1c4d6189274ea2154e44b1b62c0d0b3bf5.js.map