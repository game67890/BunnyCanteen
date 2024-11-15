import { _decorator, Component, Node, Sprite, Label, resources, SpriteAtlas, tween, v3, Vec3} from 'cc';
import { TableIngredients } from "../../framework/common/table/TableIngredients";
import { BoardMgr } from "../manager/BoardManager";
import { UtilMgr } from "../manager/UtilManager";
import { LiWuMgr } from "../liwu/LiWuManager";
import { Tween } from 'cc';
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { HeChengComponent } from "../hecheng/HeChengComponent";

const { ccclass, property } = _decorator;

@ccclass('GridComponent')
export class GridComponent extends Component {

    @property(Sprite)
    SuCaiSprite: Sprite = null;

    @property(Label)
    SuCaiLevel: Label;

    @property(Sprite)
    LiwuSprite: Sprite = null;

    @property(Sprite)
    SuCaiSelect: Sprite = null;

    public index : number = -1;
    private _tsIngredients = new TableIngredients();
    private _tweenRF : Tween<Node> = null;
    private shakeDuration: number = 0.1; // 单次晃动的时间
    private shakeCount: number = 4; // 每次晃动的次数
    private interval: number = 4; // 停止后再次晃动的间隔（秒）
    private posX : number = 0;
    private posY : number = 0;

    public setVisible(visible: boolean) {
        this.SuCaiSelect.node.active = false;
        this.SuCaiSprite.node.active = visible;
        this.SuCaiLevel.node.active = visible;
        if (visible && this.index >= 0 && BoardMgr.board[this.index])
        {
            if (BoardMgr.board[this.index].SuCaiId > 0)
            {
                this._tsIngredients.init(BoardMgr.board[this.index].SuCaiId);
                UtilMgr.SetImage(this.SuCaiSprite, this._tsIngredients.picture);
            }
        }
    }

    public setLiwuVisible(visible: boolean) {
        this.SuCaiSelect.node.active = false;
        this.LiwuSprite.node.active = visible;
        if (visible)
        {
            UtilMgr.SetImage(this.LiwuSprite, "textures/UI/baluobo/baluobo;liwu");
            if (this._tweenRF == null)
            {
                let LiwuPos = this.LiwuSprite.node.getPosition();
                this.posX = LiwuPos.x;
                this.posY = LiwuPos.y;
                this._tweenRF = tween(this.LiwuSprite.node)
                .repeat(4,              
                tween(this.LiwuSprite.node).sequence(tween(this.LiwuSprite.node).to(this.shakeDuration,  { position: v3(this.posX+1, this.posY, 0) }, { easing: 'quadIn' }),
                tween(this.LiwuSprite.node).to(this.shakeDuration,  { position: v3(this.posX-1, this.posY, 0) }, { easing: 'quadOut' }))
                )   
            }
            this.schedule(this.startDiagonalShake, this.interval + this.shakeDuration * this.shakeCount * 2);
        }
        else
        {
            if (this._tweenRF)
            {
                this._tweenRF.stop();
            }
        }
    }

    startDiagonalShake() {
        if (this._tweenRF && this.LiwuSprite.node.active)
        {
            this._tweenRF.start();
        }
    }

    public setLevel(level: number) {
        this.SuCaiLevel.string = level.toString();
    }

    private onClick() {
        if (BoardMgr.board[this.index].IsLiWu && !BoardMgr.board[this.index].IsLiWuFlying)
        {
            UtilMgr.PlaySoundEffect(27);
            LiWuMgr.openLiwu(this.index);
        }
    }

    public setSelectVisible(visible: boolean) {
        this.SuCaiSelect.node.active = visible;
    }

    public ShowSucaiSelect(isShow:boolean){
        const HechengGUI = oops.gui.get(UIID.MainUI);
        if (HechengGUI) 
        {
            const HechengCom = HechengGUI.getComponent(HeChengComponent);
            if (HechengCom) 
            {
                HechengCom.ShowSucaiSelect(isShow, this.index);
            }
        }
    }
}


