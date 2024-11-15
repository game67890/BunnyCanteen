import { _decorator, Component, Node, Label, Prefab, instantiate, Vec3, UITransform } from 'cc';
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { Button } from 'cc';
import { VirtualGridList } from "../../../resources/libs/virtual_grid_list/virtual_grid_list";
import { TableRadishAwardRank } from '../../framework/common/table/TableRadishAwardRank';
import { UtilMgr } from '../manager/UtilManager';
const { ccclass, property } = _decorator;

const _temp_vec3 = new Vec3();

class RankRewardDataItem {
    minirank: number = 0;
    maxrank: number = 0;
    showtxt: string = "";
}

@ccclass('CarrotRankRewardComponent')
export class CarrotRankRewardComponent extends Component {
    @property(Button)
    CloseBtn: Button;
    @property(Label)
    TitleName: Label;

    @property(VirtualGridList)
    protected gridList: VirtualGridList = null;

    private _dataList: any[] = [];
    private tablereward = new TableRadishAwardRank();

    onAdded(params: any): boolean {
        this.TitleName.string = oops.language.getLangByID("stringres_030");
        for (let i = 0; i < 5; ++i) {
            this.tablereward.init(i+1);
            const item: RankRewardDataItem = {
                minirank: this.tablereward.minrank,
                maxrank: this.tablereward.maxrank,
                showtxt: Math.floor(Number(this.tablereward.awardpercent)*100).toString() + "%"
            }
            this._dataList.push(item);
        }
        this.initGridList();
        return true;
    }
    initGridList() {
        /*  paddingTop: 列表距离上边缘距离 默认为0
        paddingBottom: 列表距离下边缘距离 默认为0
        spacingX: 列间距 默认为3
        spacingY: 行间距 默认为3
        columnNum: 列数 默认为0，自动适配容器宽度
        useVirtualLayout: 是否启用虚拟列表 默认为true
        emptyTip: 没有数据显示提示
        cacheImage: 是否缓存列表中加载过的图片，控件回收后，图片缓存将被全部释放。
     */
        if (this.gridList) {
            this.gridList.clearList();
            this.gridList.initGridList({
                paddingTop: 0,
                paddingBottom: 10,
                spacingX: 0,
                spacingY: 0,
                columnNum: 1,
                useVirtualLayout: true,
                emptyTip: oops.language.getLangByID("stringres_088"),
                cacheImage: true
            });
            //this.gridList.registerScrollToBottomEventHandler(this._nextPage, this);
            this.gridList.registerSelectOneItemEventHandler(this._onSelectOneItem, this);

            this.gridList.appendItemsToDisplayList(this._dataList);
        }
    }


    _onSelectOneItem(data: any) {
        console.log('_onSelectOneItem');
    }

    // 点击关闭按钮
    public onCloseBtnClick() {
        UtilMgr.PlaySoundEffect(19);
        oops.gui.remove(UIID.CarrotRankReward);
    }
}


