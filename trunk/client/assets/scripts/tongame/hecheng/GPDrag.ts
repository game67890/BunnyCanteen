import { _decorator, CCBoolean, TweenEasing , CCFloat, CCString, Component, easing, Enum, EventTouch, isValid, Node, NodeEventType, Tween, tween, Vec2, Vec3 } from 'cc';
import { GPWorkFlow, GPWorkFlowNode } from './GPWorkFlow';
import { GridComponent } from "../hecheng/GridComponent";
import { BoardMgr } from "../manager/BoardManager";
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { GameEvent } from "../../framework/common/config/GameEvent";
import { HeChengMgr } from "../hecheng/HeChengManager";
import { UtilMgr } from '../manager/UtilManager';
import { GuideMgr } from "../hecheng/GuideManager";

const { ccclass, property } = _decorator;

export enum FloatType {
    None,
    MoveToTop,
    MoveToTopLayer,
    // CopyToTopLayer
}
export enum DragBackHomeType {
    SetPosition,
    Tween
}
export enum EasingString {
    'linear'    , 'smooth'     , 'fade'         , 'constant'     ,
    'quadIn'    , 'quadOut'    , 'quadInOut'    , 'quadOutIn'    ,
    'cubicIn'   , 'cubicOut'   , 'cubicInOut'   , 'cubicOutIn'   ,
    'quartIn'   , 'quartOut'   , 'quartInOut'   , 'quartOutIn'   ,
    'quintIn'   , 'quintOut'   , 'quintInOut'   , 'quintOutIn'   ,
    'sineIn'    , 'sineOut'    , 'sineInOut'    , 'sineOutIn'    ,
    'expoIn'    , 'expoOut'    , 'expoInOut'    , 'expoOutIn'    ,
    'circIn'    , 'circOut'    , 'circInOut'    , 'circOutIn'    ,
    'elasticIn' , 'elasticOut' , 'elasticInOut' , 'elasticOutIn' ,
    'backIn'    , 'backOut'    , 'backInOut'    , 'backOutIn'    ,
    'bounceIn'  , 'bounceOut'  , 'bounceInOut'  , 'bounceOutIn'
}
@ccclass('GPDrag')
export class GPDrag extends Component {
    @property({tooltip:"触碰点偏移量敏感"})
    public touchOffsetSensitive = false

    @property({tooltip:"失败时回到起始位置"})
    public backHomeWhenFailed = true

    @property({type:Enum(DragBackHomeType), tooltip:"回家的方式", visible:function(this){
        return this.backHomeWhenFailed
    }})
    public backHomeType:DragBackHomeType = DragBackHomeType.SetPosition

    @property({type:CCFloat, visible:function(this) {
        return this.backHomeWhenFailed && this.backHomeType == DragBackHomeType.Tween
    }})
    public backTweenTime:number = 1;

    @property({type:Enum(EasingString), tooltip:"缓动类型", visible:function(this) {
        return this.backHomeWhenFailed && this.backHomeType == DragBackHomeType.Tween
    }})
    public backTweenEasing:EasingString = EasingString.linear

    @property({type:Enum(FloatType), tooltip:"上浮类型"})
    public floatType:FloatType = FloatType.None

    @property({type:Node, visible:function(this){
        return this.floatType == FloatType.MoveToTopLayer 
        // || this.floatType == FloatType.CopyToTopLayer
    }})
    public topLayerNode:Node

    @property({tooltip:"松开后返回原来的层级", visible:function(){
        return this.floatType != FloatType.None
    }})
    public backToOriZ = true;
    private srcParent:Node
    private zOrder:number
    private parentZOrder:number
    private dragStartPos:Vec2 = new Vec2(0, 0)
    private dragOffset:Vec2 = new Vec2(0, 0)
    public succeedCheck:Function = null;
    public succeedCallback:Function = null;
    private backTween:Tween<Node>

    public backHomeWorkFlow = new GPWorkFlow();
    start() {
        this.dragStartPos.set(this.node.position.x, this.node.position.y);

        this.node.on(NodeEventType.TOUCH_START, this.OnDragStart, this)
        this.node.on(NodeEventType.TOUCH_MOVE, this.OnDragMove, this)
        this.node.on(NodeEventType.TOUCH_END, this.OnDragEnd, this)
        this.node.on(NodeEventType.TOUCH_CANCEL, this.OnDragEnd, this)

        let moveNode = new GPWorkFlowNode();
        this.backHomeWorkFlow.headNode = moveNode;
        let self = this;
        moveNode.OnStart = (wfNode:GPWorkFlowNode)=>{
            let p = new Vec3(self.dragStartPos.x, self.dragStartPos.y, 0);
            switch(this.backHomeType) {
                case DragBackHomeType.SetPosition:
                    self.node.setPosition(p)
                    wfNode.done();
                    break;
                case DragBackHomeType.Tween:
                    self.backTween && self.backTween.stop()
                    let easing:TweenEasing = EasingString[self.backTweenEasing] as TweenEasing
                    self.backTween = tween(self.node)
                        .to(self.backTweenTime, {position:p}, {easing:easing}).call(()=>{
                            wfNode.done();
                        }).start()
                    break;
            }
        }

        let arrivedNode = new GPWorkFlowNode();
        moveNode.nextNode = arrivedNode;
        arrivedNode.OnStart = (wfNode:GPWorkFlowNode)=>{
            self.OnArrivedHome();
            wfNode.done();
        }
    }

    private OnDragStart(e:EventTouch) {
        if (HeChengMgr.IsPlayHechengingAnim)
        {
            return;
        }
        GuideMgr.ResetGuide();
        const DragGridComponent = this.node.parent.getComponent(GridComponent);
        if (DragGridComponent)
        {
            BoardMgr.InDragIndex = DragGridComponent.index;
            if (BoardMgr.board[BoardMgr.InDragIndex].IsLiWu) {
                // UtilMgr.PlaySoundEffect(27);
            } else {
                UtilMgr.PlaySoundEffect(17);
                HeChengMgr.IsDraging = true;
                oops.message.dispatchEvent(GameEvent.UpdateHuishouBtn);
                DragGridComponent.ShowSucaiSelect(true);

                let touchPoint = e.getUILocation();
                Vec2.subtract(this.dragOffset, this.dragStartPos, touchPoint)
                switch(this.floatType) {
                    case FloatType.MoveToTop:
                        this.parentZOrder = this.node.parent.getSiblingIndex();
                        this.node.parent.setSiblingIndex(1000);
                        this.zOrder = this.node.getSiblingIndex();
                        this.node.setSiblingIndex(1000);
                        break;
                    case FloatType.MoveToTopLayer:
                        this.zOrder = this.node.getSiblingIndex()
                        this.srcParent = this.node.parent
                        this.node.parent = this.topLayerNode;
                        break;
                }
            }
        }
    }

    private OnDragMove(e:EventTouch) {
        if (HeChengMgr.IsDraging)
        {
            let p = e.getUILocation();
            if (this.touchOffsetSensitive)
                this.node.setPosition(new Vec3(p.x + this.dragOffset.x, p.y + this.dragOffset.y, 0))
            else
                this.node.setPosition(new Vec3(p.x, 0, p.y))
        }
    }

    private OnDragEnd(e:EventTouch) {
        HeChengMgr.IsDraging = false;

        UtilMgr.StopSoundEffect();
        const DragGridComponent = this.node.parent.getComponent(GridComponent);
        if (DragGridComponent)
        {
            DragGridComponent.ShowSucaiSelect(false);
        }
        if (BoardMgr.IsHuiShou)
        {
            HeChengMgr.HandleHuiShou(BoardMgr.InDragIndex);
        }
        else
        {
            const DragGridComponent = this.node.parent.getComponent(GridComponent);
            if (DragGridComponent)
            {
                console.log("OnDragEnd index=" + DragGridComponent.index);
                let destIndex = BoardMgr.getTouchItem(DragGridComponent.index);
                if (destIndex > -1)
                {
                    let params : any = {};
                    params.DestIndex = destIndex;
                    params.SrcIndex = DragGridComponent.index;
                    oops.message.dispatchEvent(GameEvent.OnGridContract, params);
                    BoardMgr.removeTouchItem(DragGridComponent.index, destIndex);
                }
                else
                {
                    console.log("no touchingMap");
                }
            }
            else
            {
                console.log("no GridComponent");
            }
        }

        this.backHomeWorkFlow.start();
        BoardMgr.InDragIndex = 0;
        oops.message.dispatchEvent(GameEvent.UpdateHuishouBtn);
    }

    private OnArrivedHome() {
        if (this.backToOriZ)
        switch(this.floatType) {
            case FloatType.MoveToTop:
                this.node.setSiblingIndex(this.zOrder)
                this.node.parent.setSiblingIndex(this.parentZOrder)
                break;
            case FloatType.MoveToTopLayer:
                this.node.parent = this.srcParent;
                this.node.setSiblingIndex(this.zOrder)
                break;
        }
    }

    protected onDestroy(): void {
        this.node.off(NodeEventType.TOUCH_START, this.OnDragStart, this)
        this.node.off(NodeEventType.TOUCH_MOVE, this.OnDragMove, this)
        this.node.off(NodeEventType.TOUCH_END, this.OnDragEnd, this)
        this.node.off(NodeEventType.TOUCH_CANCEL, this.OnDragEnd, this)
    }
    protected update(dt: number): void {
        this.backHomeWorkFlow.update(dt)
    }
}