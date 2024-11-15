import { _decorator, Component, Node, Sprite, Label, PhysicsSystem2D, Contact2DType, Collider2D } from 'cc';
import { GridComponent } from "../hecheng/GridComponent";
import { BoardMgr } from "../manager/BoardManager";

const { ccclass, property } = _decorator;

@ccclass('ContactComponent')
export class ContactComponent extends Component {

    start () {
        PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeinContact, this);
        PhysicsSystem2D.instance.on(Contact2DType.END_CONTACT, this.onEndContact, this);
    }

    onBeinContact (SrcCollider: Collider2D, DestCollider: Collider2D) {
        if (DestCollider.tag != SrcCollider.tag)
        {
            if (DestCollider.tag == 3 || SrcCollider.tag == 3)
            {
                BoardMgr.IsHuiShou = true;
            }
            else
            {
                const DestGridComponent = DestCollider.node.parent.getComponent(GridComponent);
                if (DestGridComponent)
                {
                    const SrcGridComponent = SrcCollider.node.parent.getComponent(GridComponent);
                    if (SrcGridComponent)
                    {
                        if (DestGridComponent.index != SrcGridComponent.index)
                        {
                            let params : any = {};
                            
                            if (BoardMgr.InDragIndex == SrcGridComponent.index)
                            {
                                params.DestIndex = DestGridComponent.index;
                                params.SrcIndex = SrcGridComponent.index;
                            }
                            else
                            {
                                params.DestIndex = SrcGridComponent.index;
                                params.SrcIndex = DestGridComponent.index;
                            }
                            BoardMgr.addTouchItem(params.SrcIndex, params.DestIndex);
                            console.log("onBeinContact dest index=" + DestGridComponent.index + " tag=" + DestCollider.tag);
                            console.log("onBeinContact src index=" + SrcGridComponent.index + " tag=" + SrcCollider.tag);
                        }
                    }   
                }
            }
        }
    }

    onEndContact (SrcCollider: Collider2D, DestCollider: Collider2D) {
        if (DestCollider.tag != SrcCollider.tag)
        {
            if (DestCollider.tag == 3 || SrcCollider.tag == 3)
            {
                BoardMgr.IsHuiShou = false;
            }
            else
            {
                const DestGridComponent = DestCollider.node.parent.getComponent(GridComponent);
                if (DestGridComponent)
                {
                    const SrcGridComponent = SrcCollider.node.parent.getComponent(GridComponent);
                    if (SrcGridComponent)
                    {
                        if (DestGridComponent.index != SrcGridComponent.index)
                        {
                            let params : any = {};
                            if (BoardMgr.InDragIndex == SrcGridComponent.index)
                            {
                                console.log("1 onEndContact InDragIndex=" + BoardMgr.InDragIndex + " srcindex=" + SrcGridComponent.index);
                                params.DestIndex = DestGridComponent.index;
                                params.SrcIndex = SrcGridComponent.index;
                            }
                            else
                            {
                                console.log("2 onEndContact InDragIndex=" + BoardMgr.InDragIndex + " srcindex=" + SrcGridComponent.index);
                                params.DestIndex = SrcGridComponent.index;
                                params.SrcIndex = DestGridComponent.index;
                            }

                            BoardMgr.removeTouchItem(params.SrcIndex, params.DestIndex);
    
                            console.log("onEndContact dest index=" + DestGridComponent.index + " tag=" + DestCollider.tag);
                            console.log("onEndContact src index=" + SrcGridComponent.index + " tag=" + SrcCollider.tag);
                        }
                    }   
                }
            }
        }
    }
}


