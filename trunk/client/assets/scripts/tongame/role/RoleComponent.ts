import { _decorator, Component, Node, Label, Prefab, instantiate, view, UITransform, Sprite, Animation} from 'cc';
import { UtilMgr } from '../manager/UtilManager';

const { ccclass, property } = _decorator;



@ccclass('RoleComponent')
export class RoleComponent extends Component {

    @property(Sprite)
    roleSprite: Sprite = null;

    @property(Sprite)
    roleMood: Sprite = null;

    private WalkScaleX = 1; // 用来设置sprite是否翻转 1为原来的 -1为翻转

    public Init()
    {
        this.roleMood.node.active = false;
    }

    public SetWalkScaleX(scale:number) {
        this.WalkScaleX = scale;
    }

    public PlayStandAnim(roleId:number) {
        this.roleSprite.node.scale_x = 1;
        UtilMgr.addNodeAnimation("animation/fangke/0" + roleId + "/stand", this.roleSprite.node);
    }

    public PlayWalkAnim(roleId:number, isback:boolean = false) {
        if (isback) {
            this.roleSprite.node.scale_x = -this.WalkScaleX;
        } else {
            this.roleSprite.node.scale_x = this.WalkScaleX;
        }
        UtilMgr.addNodeAnimation("animation/fangke/0" + roleId + "/walk", this.roleSprite.node);
    }

    public PlaySitAnim(roleId:number, index:number, callback?: Function) {
        this.roleSprite.node.scale_x = 1;
        if (index == 0)
        {
            UtilMgr.addNodeAnimation("animation/fangke/0" + roleId + "/sit11", this.roleSprite.node, true, false, callback);
        }
        else
        {
            UtilMgr.addNodeAnimation("animation/fangke/0" + roleId + "/sit21", this.roleSprite.node, true, false, callback);
        }
    }

    public PlaySitIdleAnim(roleId:number, index:number) {
        this.roleSprite.node.scale_x = 1;
        if (index == 0)
        {
            UtilMgr.addNodeAnimation("animation/fangke/0" + roleId + "/sit12", this.roleSprite.node);
        }
        else
        {
            UtilMgr.addNodeAnimation("animation/fangke/0" + roleId + "/sit22", this.roleSprite.node);
        }
    }
}


