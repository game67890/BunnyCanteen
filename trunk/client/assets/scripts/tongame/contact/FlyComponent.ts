
import { _decorator, Component, Node, EventTouch, Vec3, Sprite, Vec2, UITransform, view } from 'cc';
const { ccclass, property } = _decorator;

import { HeChengMgr } from "../hecheng/HeChengManager";

@ccclass('FlyComponent')
export class FlyComponent extends Component {
    private NodeSpeed = 200;
    private tempPosVec3 : Vec3 = new Vec3();

    private FlyFlag : boolean = false;
    private zOrder:number
    private parentZOrder:number
    private startPos:Vec2 = new Vec2(0, 0)
    private srcIndex : number = 0
    private destIndex : number = 0
    private TargetX : number = 0;
    private TargetY : number = 0;

    public beginFly (srcIndex : number, destIndex : number, targetPosX: number, targetPosY : number)
    {
        this.srcIndex = srcIndex;
        this.destIndex = destIndex;
        this.TargetX = targetPosX;
        this.TargetY = targetPosY;

        this.startPos.set(this.node.position.x, this.node.position.y);
        this.parentZOrder = this.node.parent.getSiblingIndex();
        this.node.parent.setSiblingIndex(1000);
        this.zOrder = this.node.getSiblingIndex();
        this.node.setSiblingIndex(1000);
        this.FlyFlag = true;
    }

    public endFly ()
    {
        let p = new Vec3(this.startPos.x, this.startPos.y, 0);
        this.node.setPosition(p)
        this.node.parent.setSiblingIndex(this.parentZOrder);
        this.node.setSiblingIndex(this.zOrder );
        this.FlyFlag = false;

        //相同素材进行合成操作
        HeChengMgr.HandleHecheng(this.srcIndex, this.destIndex);
    }

    update (dt: number) {
        if (!this.FlyFlag) return;

        let targetPos : Vec3 = new Vec3(this.TargetX, this.TargetY, 0);
        let SelfPos : Vec3 = this.node.getPosition();
        let normalizeVec3 : Vec3 = targetPos.subtract(SelfPos).normalize();

        this.tempPosVec3.set(SelfPos.x + normalizeVec3.x * this.NodeSpeed * dt,
            SelfPos.y + normalizeVec3.y * this.NodeSpeed *dt, SelfPos.z);
        this.node.setPosition(this.tempPosVec3);

        let flyToPos = new Vec3(this.TargetX, this.TargetY, 0);
        let currentPos = this.node.position;

        let threshold = 5;
        let distance = Vec3.distance(currentPos, flyToPos);

        if (distance <= threshold) {
            this.endFly();
        }
    }
}
