import { _decorator, Component, Node, EventTouch, Vec3, Sprite, Vec2, UITransform, view, tween, math } from 'cc';

import { UtilMgr } from "../manager/UtilManager";
import { HeChengComponent } from "../hecheng/HeChengComponent";
import { DiningTableMgr } from "../diningtable/DiningTableManager";
import { BoardMgr} from '../manager/BoardManager';
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../../framework/common/config/GameUIConfig";

import { RoleComponent } from "../role/RoleComponent";
import { TableOtherParameter } from '../../framework/common/table/TableOtherParameter';
import { TablePictureSet } from "../../framework/common/table/TablePictureSet";

import { misc } from 'cc';

export class RoleInfo {
    RoleId : number = 0;
    IndexId : number = 0;
    RoleNode : Node = null;
    OrginParentNode : Node = null;
    DiningTableIndex: number = 0;

    constructor(id: number, indexId: number, node:Node, ParentNode:Node, diningTableIndex: number) {
        this.RoleId = id;
        this.IndexId = indexId;
        this.RoleNode = node;
        this.OrginParentNode = ParentNode;
        this.DiningTableIndex = diningTableIndex;
      }
}

export class RoleManager {
    public RoleList: RoleInfo[] = [];
    //每隔5秒随机1-2位访客
    private SpawnRoleNum : number[] = [1, 2];
    //角色id
    private SpawnRoleId : number[] = [];
    //访客来访时随机播放一种音效
    private SoundEffects : number[] = [4, 5, 6, 7];
    private IsInit : boolean = false;

    private tableOtherParameter = new TableOtherParameter();
    private tablePictureSet = new TablePictureSet();

    public getRoleId(): number {
        return UtilMgr.getRandomNumber(this.SpawnRoleId);
    }


    public Init()
    {
        if (this.IsInit)
        {
            return;
        }
            
        this.IsInit = true;
        for (let index = 1; index <= 4; index++) {
            this.LoadRoleAnim(index);
        }
    }

    public LoadRoleAnim(roleId:number){
        var onCompleteCallback = () => {
            this.SpawnRoleId.push(roleId);
        }

        oops.res.loadDir("animation/fangke/0" + roleId, onCompleteCallback);  
    }

    //每5秒执行一次
    public UpdateVisitors() {
        this.Init();
        const HechengGUI = oops.gui.get(UIID.MainUI);
        if (HechengGUI) {
            const HechengCom = HechengGUI.getComponent(HeChengComponent);
            if (HechengCom && BoardMgr.isHasSuCai() && DiningTableMgr.IsHasEmptyTable() && this.SpawnRoleId.length > 0) {
                let SpawnNum = UtilMgr.getRandomNumber(this.SpawnRoleNum);
                let DiningTableIndex = DiningTableMgr.GetRandomEmptyTableIndex();
                if (DiningTableIndex >= 0)
                {
                    DiningTableMgr.TableList[DiningTableIndex].IsSeat = true;
                    let SoundEffect = UtilMgr.getRandomNumber(this.SoundEffects);
                    UtilMgr.PlaySoundEffect(SoundEffect);
                    for (let i = 0; i < SpawnNum; i++)
                    {
                        let role = HechengCom.createRole();
                        let noUseRole = new RoleInfo(this.getRoleId(), i, role, HechengCom.roleParentNode, DiningTableIndex);
                        noUseRole.RoleNode.active = true;
    
                        this.RoleList.push(noUseRole);
                    
                        //const halfRoleHeight = noUseRole.RoleNode.getComponent(UITransform).height / 2;
                        //noUseRole.RoleNode.setPosition((Math.random() - 0.5) * 100, -halfRoleHeight);
                        const roleComponent = noUseRole.RoleNode.getComponent(RoleComponent);
                        if (roleComponent) 
                        {
                            roleComponent.PlayStandAnim(noUseRole.RoleId);
                        }
                        setTimeout(() => {
                            this.MoveToPos(noUseRole, SpawnNum, i);
                        }, 2000);
                        
                    }
                }
            }
        }
    }

    private GetRoleNum () : number {
        return this.RoleList.length;
    }

    public MoveToPos(roleInfo: RoleInfo, SpawnNum:number, index: number) {
        if (roleInfo && roleInfo.RoleNode) {
            let TargetPos = this.getPositionInParent(roleInfo.RoleNode, DiningTableMgr.TableList[roleInfo.DiningTableIndex].tableNode, index);
            let speed = 100;
            let pos = roleInfo.RoleNode.position;

            const roleComponent = roleInfo.RoleNode.getComponent(RoleComponent);
            if (roleComponent) 
            {
                var vecA = new Vec2(-1, 0);
                vecA.normalize();
                var vecB = new Vec2(TargetPos.x - pos.x, TargetPos.y - pos.y);
                vecB.normalize();
                var angle = misc.radiansToDegrees(Vec2.angle(vecA, vecB));
                if (angle <= 90) {
                    roleComponent.SetWalkScaleX(-1);
                } else {
                    roleComponent.SetWalkScaleX(1);
                }
                roleComponent.PlayWalkAnim(roleInfo.RoleId);
            }
            
            let distance = Vec3.distance(pos, TargetPos);

            const moveDuration = distance/speed;

            tween(roleInfo.RoleNode)
                .to(moveDuration, { position: TargetPos })
                .call(() => {
                    this.OnMoveEnd(roleInfo, SpawnNum, index);
                })
                .start();
        }
    }

    public OnMoveEnd(roleInfo: RoleInfo, SpawnNum:number, index: number) {
        if (roleInfo && roleInfo.RoleNode)
        {
            const roleComponent = roleInfo.RoleNode.getComponent(RoleComponent);
            if (roleComponent) 
            {
                if (index == 1)
                {
                    DiningTableMgr.TableList[roleInfo.DiningTableIndex].leftChairNode.setParent(roleInfo.RoleNode, true);
                }
                roleComponent.PlaySitAnim(roleInfo.RoleId, roleInfo.IndexId, 
                    () => {
                        if (index == 0)
                        {
                            DiningTableMgr.ShowFood(DiningTableMgr.TableList[roleInfo.DiningTableIndex].tableNode, SpawnNum);
                        }
                        roleComponent.PlaySitIdleAnim(roleInfo.RoleId, roleInfo.IndexId);
                    }
                );
            }
            
            setTimeout(() => {
                this.ShowMood(roleInfo, index);
                DiningTableMgr.ClearFood(DiningTableMgr.TableList[roleInfo.DiningTableIndex].tableNode);
                const HechengGUI = oops.gui.get(UIID.MainUI);
                if (HechengGUI) {
                    const HechengCom = HechengGUI.getComponent(HeChengComponent);
                    if (HechengCom) {
                        HechengCom.createTuziCoin(roleInfo.RoleNode);
                    }
                }
            }, 6000);
        }
    }

    public ShowMood(roleInfo: RoleInfo, index: number)
    {
        let totalNum = 0;
        this.tableOtherParameter.init(12);
        let aixinNum = Number(this.tableOtherParameter.parameter);
        totalNum += aixinNum;
        this.tableOtherParameter.init(13);
        let xiaolianNum = Number(this.tableOtherParameter.parameter);
        totalNum += xiaolianNum;

        let randNum = Math.floor(Math.random() * totalNum);
        if (randNum < aixinNum)
        {
            this.tablePictureSet.init(5);
        }
        else
        {
            this.tablePictureSet.init(6);
        }

        const roleComponent = roleInfo.RoleNode.getComponent(RoleComponent);
        if (roleComponent) 
        {
            roleComponent.roleMood.node.active = true;
            UtilMgr.SetImage(roleComponent.roleMood, this.tablePictureSet.picture);

            setTimeout(() => {
                roleComponent.roleMood.node.active = false;
                this.MoveBack(roleInfo, index);
            }, 1000);
        }
    }

    public MoveBack(roleInfo: RoleInfo, index: number) {
        if (roleInfo && roleInfo.RoleNode)
        {
            if (index == 1)
            {
                DiningTableMgr.TableList[roleInfo.DiningTableIndex].leftChairNode.setParent(DiningTableMgr.TableList[roleInfo.DiningTableIndex].leftParentNode, true);
            }
            const roleComponent = roleInfo.RoleNode.getComponent(RoleComponent);
            if (roleComponent) 
            {
                roleComponent.PlayWalkAnim(roleInfo.RoleId, true);
            }
            let speed = 100;
            let pos = roleInfo.RoleNode.position;

            const halfRoleHeight = roleInfo.RoleNode.getComponent(UITransform).height / 2;
            let TargetPos = new Vec3(50, -halfRoleHeight);
            let distance = Vec3.distance(pos, TargetPos);

            const moveDuration = distance/speed;

            tween(roleInfo.RoleNode)
                .to(moveDuration, { position: TargetPos })
                .call(() => {
                    if (roleInfo)
                    {
                        DiningTableMgr.TableList[roleInfo.DiningTableIndex].IsSeat = false;
                        roleInfo.RoleNode.active = false;
                        roleInfo.RoleNode.destroy();
                    }
                })
                .start();
        }
    }

    public getPositionInParent(roleNode: Node, DiningTableNode: Node, index: number): Vec3 {
        let tablePos = new Vec3(DiningTableNode.position.x, DiningTableNode.position.y);
        
        if (index == 0)
        {
            tablePos.x = tablePos.x + 65;
            tablePos.y = tablePos.y + 80;
        }
        else
        {
            tablePos.x = tablePos.x - 50;
            tablePos.y = tablePos.y + 35;
        }
        
        const worldPos = DiningTableNode.parent.getComponent(UITransform).convertToWorldSpaceAR(tablePos);
        return roleNode.parent.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
    }

    public getChairPositionInParent(ChairNode: Node, roleNode: Node): Vec3 {
        let rolePos = new Vec3(roleNode.position.x, roleNode.position.y);
        
        const worldPos = ChairNode.parent.getComponent(UITransform).convertToWorldSpaceAR(rolePos);
        return ChairNode.parent.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
    }
} 

export var RoleMgr = new RoleManager();