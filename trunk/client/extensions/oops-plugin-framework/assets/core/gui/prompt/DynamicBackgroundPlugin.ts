// DynamicBackground.ts

import { _decorator, Component, Node, Label, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('DynamicBackgroundPlugin')
export class DynamicBackgroundPlugin extends Component {
    @property({ type: Node })
    labelNode: Node | null = null;

    @property({ type: Node })
    backgroundNode: Node | null = null;

    @property
    padding: number = 20; // 背景两侧的边距

    onLoad() {
        this.updateBackgroundHeight();
    }

    // 更新背景宽度的方法
    updateBackgroundHeight() {
        if (!this.labelNode || !this.backgroundNode) {
            console.warn("请确保Label和Background节点已绑定");
            return;
        }

        // 获取Label组件
        const labelComponent = this.labelNode.getComponent(Label);
        if (!labelComponent) {
            console.warn("Label节点上没有找到Label组件");
            return;
        }

        // 强制更新 Label 的渲染数据
        labelComponent.updateRenderData(true);

        // 获取Label的宽度
        const labelHeigth = this.labelNode.getComponent(UITransform)!.height;

        // 设置背景的宽度，加上左右的边距
        this.backgroundNode.getComponent(UITransform)!.height = labelHeigth + this.padding * 2;
    }

    // 当Label的内容变化时，可以手动调用此函数
    updateLabelContent() {
        this.updateBackgroundHeight();
    }
}
