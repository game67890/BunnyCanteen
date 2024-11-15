import { _decorator, Component, Node, Label, Prefab, instantiate, view, UITransform } from 'cc';

import { BoardMgr } from "../manager/BoardManager";

const { ccclass, property } = _decorator;

@ccclass('LiWuComponent')
export class LiWuComponent extends Component {

    private LiwuIndex : number = 0;
    start() {
    }

    update(deltaTime: number) {
        
    }

    onAdded(params: any): boolean {

        const node = this.node;

        // 获取屏幕的大小
        const screenSize = view.getVisibleSize();

        // 设置节点的位置到屏幕左下角
        node.setPosition(-screenSize.width / 2 + node.size.x/2, -screenSize.height / 2 + node.size.y/2);

        return true;
    }

    private onClickLiWu() {

        BoardMgr.board[this.LiwuIndex].IsLiWu = false;
        BoardMgr.board[this.LiwuIndex].IsLiWuFlying = false;
        //oops.gui.remove(UIID.Liwu);
    }
}


