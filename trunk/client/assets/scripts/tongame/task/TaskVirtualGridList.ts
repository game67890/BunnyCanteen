import {_decorator, Label, Sprite, math, SpriteFrame, Node, Prefab, UITransform, instantiate} from 'cc';
import { VirtualGridList } from "../../../resources/libs/virtual_grid_list/virtual_grid_list";
import {IVirtualGridListItem} from "../../../resources/libs/virtual_grid_list/interface";

const {ccclass, property} = _decorator;

@ccclass('TaskVirtualGridList')
export class TaskVirtualGridList extends VirtualGridList {
    @property({
        tooltip: 'title的预制体',
        type: Prefab,
    })
    protected titlePrefab: Prefab = null;

    /**
     * 初始化布局
     */
    protected _initializeList() {
        // this._gridList = this.node.getComponent(ScrollView);
        // this._content = this._gridList.content;
        this._itemHeight = (this.itemPrefab.data as Node).getComponent(UITransform).height;
        this._itemWidth = (this.itemPrefab.data as Node).getComponent(UITransform).width;
        if (this.columnNum == 0) {
            // 自动计算
            this.columnNum = Math.floor((this._content.getComponent(UITransform).width + this.spacingX) / (this._itemWidth + this.spacingX));
            if (this.columnNum < 1) {
                this.columnNum = 1;
            }
        }

        if (this.useVirtualLayout) {
            //this.node.on('scrolling', this._onVirtualLayoutScrolling, this);
        } else {
            // this.node.on('scrolling', this._onScrolling, this);
        }
        // 缓冲区域，半屏加1个item高度
        this._bufferZone = this.node.getComponent(UITransform).height * 0.5 + this._itemHeight;

        // 计算出需要同时绘制的数量(一屏数量 + 二行(上下各一行))
        this._spawnCount = Math.ceil(this.node.getComponent(UITransform).height / this._itemHeight + 2) * this.columnNum;

        this._lastContentPosY = 0;
        this._initialized = true;

        // 数据列表可能在初始化完成之前进入
        if (this._dataList) {
            this.createItemsDisplayList(this._dataList);
        }
    }

    /**
     * 创建固定增量的items
     * @param {Number} startIndex 起始索引
     */
    protected _createFixedIncrementItems(startIndex: number = 0) {
        this._items = [];
        startIndex = startIndex || 0
        // 如果总数量不足够同时创建的数量，则只创建总数量
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
                    (this._items[i].getComponent(IVirtualGridListItem) as IVirtualGridListItem).onDataChanged();
                }
            })
        }
    }

    /**
     * 创建一个item
     * @param {Number} idx 索引
     * @param {*} data
     * @returns {Node} 返回一个显示单元
     */
    protected _createOneItemDisplay(idx: number, data: any): Node {
        let item : any = null;
        if (data.TitleId > 0)
        {
            item = instantiate(this.titlePrefab);
        }
        else
        {
            item = instantiate(this.itemPrefab);
        }
        
        this._content.addChild(item);

        // 更新位置
        this._updateItemPos(item, idx);

        // 更新id
        const component = (item.getComponent(IVirtualGridListItem) as IVirtualGridListItem);
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
     protected _updateItemPos(item: Node, idx: number) {
        const col = idx % this.columnNum;
        const row = Math.floor(idx / this.columnNum);

        let PreHeight = 0;
        for (let i = 0; i < idx; i++) {
            PreHeight = PreHeight +  this._items[i].getComponent(UITransform).height;
        }

        const contentUiTrans = this._content.getComponent(UITransform)!;
        const itemUiTrans = item.getComponent(UITransform)!;

        item.setPosition(
            -contentUiTrans.width * 0.5 + itemUiTrans.width * (0.5 + col) + this.spacingX * col,
            -PreHeight- (itemUiTrans.height * 0.5) - this.spacingY * (row) - this.paddingTop
        );
    }
}
