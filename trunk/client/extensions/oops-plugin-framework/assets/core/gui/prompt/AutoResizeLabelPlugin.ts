import { _decorator, Component, Label, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AutoResizeLabelPlugin')
export class AutoResizeLabelPlugin extends Component {
    @property({ type: Label })
    label: Label | null = null;

    @property
    padding: number = 20; // 可选的左右边距

    onLoad() {
        this.updateLabelHeight();
    }

    /**
     * 更新Label宽度，使其根据内容适配
     */
    updateLabelHeight() {
        if (!this.label) {
            console.warn("请确保Label节点已绑定");
            return;
        }

        // 强制更新 Label 的渲染数据
        this.label.updateRenderData(true);

        // 获取 Label 的实际宽度
        const labelHeight = this.label.node.getComponent(UITransform)!.height;

        // 设置 Label 节点宽度，加上左右边距
        this.label.node.getComponent(UITransform)!.height = labelHeight + this.padding * 2;
    }

    /**
     * 更新Label的文本内容，并调整宽度
     * @param newText 新的文本内容
     */
    updateLabelContent(newText: string) {
        if (this.label) {
            this.label.string = newText;
            this.updateLabelHeight();
        }
    }
}
