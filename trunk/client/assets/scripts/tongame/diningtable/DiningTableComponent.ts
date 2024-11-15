import { _decorator, Component, Node, Label, Prefab, instantiate, view, UITransform, Sprite, Animation} from 'cc';

const { ccclass, property } = _decorator;



@ccclass('DiningTableComponent')
export class DiningTableComponent extends Component {
    @property([Sprite])
    public DiningFoodList: Sprite[] = [];

    @property(Node)
    LeftChair: Node = null;
    @property(Node)
    LeftChairParent: Node = null;

    @property(Node)
    DiningEffect: Node = null;
}


