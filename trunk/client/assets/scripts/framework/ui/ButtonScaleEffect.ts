import { _decorator, Component, Node, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ButtonScaleEffect')
export class ButtonScaleEffect extends Component {

    @property(Node)
    buttonNode: Node = null!;

    @property
    pressScale : number = 0.8;

    @property
    duration : number = 0.1;

    start() {
        // 监听按钮按下
        this.buttonNode.on(Node.EventType.TOUCH_START, this.onButtonPress, this);
        
        // 监听按钮松开
        this.buttonNode.on(Node.EventType.TOUCH_END, this.onButtonRelease, this);
        this.buttonNode.on(Node.EventType.TOUCH_CANCEL, this.onButtonRelease, this); // 处理触摸取消的情况
    }

    // 按下时放大
    private onButtonPress() {
        tween(this.buttonNode)
            .to(this.duration, { scale: new Vec3(this.pressScale, this.pressScale, 1) })
            .start();
    }

    // 松开时恢复原始大小
    private onButtonRelease() {
        tween(this.buttonNode)
            .to(this.duration, { scale: new Vec3(1, 1, 1) })
            .start();
    }
}
