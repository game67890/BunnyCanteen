import {_decorator, Label, Sprite, math, SpriteFrame, Node, Prefab, UITransform, instantiate} from 'cc';
import { VirtualGridList } from "../../../resources/libs/virtual_grid_list/virtual_grid_list";
import {IVirtualGridListItem} from "../../../resources/libs/virtual_grid_list/interface";
import { RankImageCache } from "./RankImageCache";

const {ccclass, property} = _decorator;

@ccclass('RankVirtualGridList')
export class RankVirtualGridList extends VirtualGridList {

    protected _RankimageCache: RankImageCache = new RankImageCache();

    protected _createOneItemDisplay(idx: number, data: any): Node {
        let item = instantiate(this.itemPrefab);
        this._content.addChild(item);

        // 更新位置
        this._updateItemPos(item, idx);

        // 更新id
        const component = (item.getComponent(IVirtualGridListItem) as IVirtualGridListItem);
        component.updateItem(data, idx);
        component.imageCache = this._RankimageCache;

        item.on(Node.EventType.TOUCH_END, this._onItemTouched, this);
        return item;
    }

}
