import { _decorator, Component, Node, SpriteFrame, Sprite } from 'cc';
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { GameEvent } from "../../framework/common/config/GameEvent";
import { RankMgr } from "./RankManager";
import { UtilMgr } from '../manager/UtilManager';

const { ccclass, property } = _decorator;

@ccclass('RankTabController')
export class RankTabController extends Component {
    @property([Node])
    tabButtons: Node[] = [];

    @property([Node])
    tabs: Node[] = [];

    @property(SpriteFrame)
    normalSprite: SpriteFrame = null;

    @property(SpriteFrame)
    selectedSprite: SpriteFrame = null;

    start() {
        this.tabButtons.forEach((button, index) => {
            button.on(Node.EventType.TOUCH_END, () => this.selectTab(index), this);
        });

        // 默认选中第一个 tab
        this.selectTab(0);
    }

    selectTab(index: number) {
        UtilMgr.PlaySoundEffect(25);
        // 1. 显示相应的 tab 内容
        this.showTab(index);

        // 2. 重置所有按钮的状态
        this.tabButtons.forEach((button, i) => {
            const sprite = button.getComponent(Sprite);
            if (sprite) {
                // 设置为选中或未选中的背景图
                sprite.spriteFrame = i === index ? this.selectedSprite : this.normalSprite;
            }
        });

        // 3. 更新当前选中的索引
        RankMgr.curRankType = index + 1;
        oops.message.dispatchEvent(GameEvent.SwitchRank);
    }

    showTab(index: number) {
        this.tabs.forEach((tab, i) => {
            tab.active = (i === index);
        });
    }
}