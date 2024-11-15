import {_decorator, Label, Sprite, math, SpriteFrame, Node, Button, UITransform, Size} from 'cc';
import {IVirtualGridListItem} from "../../../resources/libs/virtual_grid_list/interface";
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UtilMgr } from "../manager/UtilManager";
import { RankMgr } from "../rank/RankManager";

const {ccclass, property} = _decorator;

@ccclass('RankListItem')
export class RankListItem extends IVirtualGridListItem {

    @property(Sprite)
    rank1: Sprite = null;
    @property(Sprite)
    rank2: Sprite = null;
    @property(Sprite)
    rank3: Sprite = null;
    @property(Label)
    rankNum: Label = null;

    @property(Sprite)
    headImage: Sprite = null;
    @property(Sprite)
    defaultHead: Sprite = null;

    @property(Label)
    userName: Label = null;

    @property(Label)
    valueNum: Label = null;

    private nodeWidth : number = 0;
    private nodeHeight : number = 0;

    onDataChanged() {
        this.defaultHead.node.active = true;
        this.headImage.node.active = false;
        if (this.nodeWidth == 0)
        {
            this.nodeWidth = this.headImage.node.getComponent(UITransform).width;  // 获取节点的宽度
        }
        if (this.nodeHeight == 0)
        {
            this.nodeHeight = this.headImage.node.getComponent(UITransform).height; // 获取节点的高度
        }
        const data = this.data;
        if (RankMgr.curRankType == 1)
        {
            this.valueNum.string = UtilMgr.formatNumber(BigInt(data.param));
        }
        else
        {
            this.valueNum.string = data.param;
        }
        
        if (data.name)
        {
            this.userName.string = data.name;
        }
        else
        {
            this.userName.string = "User_"+ data.userId.substring(0, 8);
        }

        if (data.idx == 1)
        {
            this.rank1.node.active = true;
            this.rank2.node.active = false;
            this.rank3.node.active = false;
            this.rankNum.node.active = false;
        }
        else if (data.idx == 2)
        {
            this.rank1.node.active = false;
            this.rank2.node.active = true;
            this.rank3.node.active = false;
            this.rankNum.node.active = false;
        }
        else if (data.idx == 3)
        {
            this.rank1.node.active = false;
            this.rank2.node.active = false;
            this.rank3.node.active = true;
            this.rankNum.node.active = false;
        }
        else
        {
            this.rank1.node.active = false;
            this.rank2.node.active = false;
            this.rank3.node.active = false;
            this.rankNum.node.active = true;
            if (data.idx == 0)
            {
                this.rankNum.string = oops.language.getLangByID("stringres_206");
            }
            else
            {
                this.rankNum.string = data.idx.toString();
            }
        }


        var completeLogin = (spriteFrame, uri) => {
            if (spriteFrame && this.headImage && this.headImage.isValid)
            {
                this.headImage.node.active = true;
                this.headImage.spriteFrame = spriteFrame;
                if (this.defaultHead && this.defaultHead.isValid)
                {
                    this.defaultHead.node.active = false;
                }
            }

        }
        let userId = data.userId;
        let url = oops.http.server + "getheadimg/"+ userId + ".jpg";
        this.loadImage(url, completeLogin);

    }

    onDestroy() {
        super.onDestroy();
    }
}
