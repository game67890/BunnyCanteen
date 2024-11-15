import {_decorator, Label, Sprite, math, SpriteFrame, Node, ScrollView, EventTouch, Event, Input, v2} from 'cc';
import { NestableScrollViewInner } from "./NestableScrollViewInner";


const {ccclass, property} = _decorator;

const _tempVec2 = v2();
const _tempVec2_1 = v2();

@ccclass('NestableScrollViewOuter')
export class NestableScrollViewOuter extends ScrollView {

    private m_PlanDir : number = -1;

    @property(NestableScrollViewInner)
    private m_InnerScrollView : NestableScrollViewInner = null;

    private m_ScrollingInnerSv : NestableScrollViewInner = null;
/*
    //是否为子物体
    //注意，这里递归, 如果child藏的太深, 可能影响效率。其实也还好，只是开始滑动时执行一次。
    _isHisChild(child:Node, undeterminedParent:Node) {
        if (child == undeterminedParent) {
            return true;
        }
        if (child.parent != null) {
            if (child.parent == undeterminedParent) {
                return true;
            } else {
                return this._isHisChild(child.parent, undeterminedParent);
            }
        }
        return false;
    }

    //判断Target是否是InnerScrollView的子物体, 如果是，就返回这个InnerScrollView。
    //注意，这里遍历所有InnerScrollView, 如果InnerScrollView数量太多，可能影响效率。其实也还好，只是开始滑动时执行一次。
    _findScrollingInnerSv(target) : NestableScrollViewInner
    {
        if (this.m_InnerScrollView)
        {
            let isHisChild = this._isHisChild(target, this.m_InnerScrollView.node);
            if (isHisChild) {
                return this.m_InnerScrollView;
            }
        }
        return null;
    }

    //检查实际与计划方向的一致性
    isDifferentBetweenSettingAndPlan(sv) {
        if (this.m_PlanDir == 0) {
            return false;
        }
        if (this.m_PlanDir == 1 && sv.horizontal) {
            return false;
        }
        if (this.m_PlanDir == -1 && sv.vertical) {
            return false;
        }
        return true;
    }

    //#region 重写cc.ScrollView的方法
    protected _hasNestedViewGroup(event: Event, captureListeners?: Node[]): boolean
    {
        if (event.eventPhase !== Event.CAPTURING_PHASE) return;
        //不阻止out上onTouch事件执行。
        return false;
    }


    protected _onTouchMoved(event: EventTouch, captureListeners?: Node[]): void
    {
        if (!this.enabledInHierarchy || !this._content) {
            return;
        }
        if (this._hasNestedViewGroup(event, captureListeners)) {
            return;
        }

        const touch = event.touch!;
        this._handleMoveLogic(touch);

        // Do not prevent touch events in inner nodes
        if (!this.cancelInnerEvents) {
            return;
        }

        const deltaMove = touch.getUILocation(_tempVec2);
        deltaMove.subtract(touch.getUIStartLocation(_tempVec2_1));


        //在滑动时, 设置开始时滑动的方向为计划方向
        //为什么在Outer中做这件事？
        //因为Outer的_onTouchMoved比Inner的早执行, 如果在Inner里做, Outer中就得忽略一帧，体验可能会不好。
        if (this.m_PlanDir == null && deltaMove.length() > 7) {
            this.m_ScrollingInnerSv = this._findScrollingInnerSv(event.target);
            if (this.m_ScrollingInnerSv != null) {
                let contentSize = this.m_ScrollingInnerSv.content.size;
                let scrollViewSize = this.m_ScrollingInnerSv.node.size;
                if ((this.m_ScrollingInnerSv.vertical && (contentSize.height > scrollViewSize.height)) || (this.m_ScrollingInnerSv.horizontal && (contentSize.width > scrollViewSize.width))) {
                    this.m_PlanDir = Math.abs(deltaMove.x) > Math.abs(deltaMove.y) ? 1 : -1;
                } else {
                    this.m_PlanDir = 0;
                }
            } else {
                this.m_PlanDir = 0;
            }
        }

        if (this.content) {
            if (!this.isDifferentBetweenSettingAndPlan(this)) {
                this._handleMoveLogic(touch);
            }
        }

        if (!this.cancelInnerEvents) {
            return;
        }

        //只取消会捕获事件的直接子物体(如Button)上的事件
        if (this.m_ScrollingInnerSv == null) {
            if (deltaMove.length() > 7) {
                if (!this._touchMoved && event.target !== this.node) {
                    var cancelEvent = new EventTouch(event.getTouches(), event.bubbles, Node.EventType.TOUCH_CANCEL);
                    cancelEvent.type = Node.EventType.TOUCH_CANCEL;
                    cancelEvent.touch = event.touch;
                    cancelEvent.simulate = true;
                    event.target.dispatchEvent(cancelEvent);
                    this._touchMoved = true;
                }
            }
            this._stopPropagationIfTargetIsMe(event);
        }
        
    }
    */
}
