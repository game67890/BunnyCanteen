import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { TableRank } from "../../framework/common/table/TableRank";
import { JsonUtil } from "../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil";
import { ProtocolMgr } from "../manager/ProtocolManager";
import { HttpReturn } from "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest";
import { TonGameMgr } from "../manager/TonGameManager";

export class RankManager {


    private _tsRank = new TableRank();

    public allUserNumber : number = 0;
    public curRankType: number = 1;
    public curRankConfId : number = 1;
    public myInfoTuzi : any = null;
    public myInfoCanting : any = null;

    public RankData: { [key: string]: any } = {};

    public compositeKey (key1: number, key2: number) 
    {
        return key1.toString() + "_" + key2.toString();
    }

    //打开排行榜界面
    public OpenRankUI() {
        this.curRankType = 1;
        this.curRankConfId = TonGameMgr.rankConfId;

        let paramas: any = {};
        paramas.rankType = this.curRankType;
        paramas.rankConfId = this.curRankConfId;
        oops.gui.open(UIID.Rank, paramas);
    }

    public GetRankDataByLevel(RankLevel:number) : any
    {
        let jsonTable = JsonUtil.get(TableRank.TableName);
        if (jsonTable) 
        {
            for (let id in jsonTable) {
                if (RankLevel == Number(id))
                {
                    let Data = jsonTable[id];
                    return Data;
                }
            }
        }
        return null;
    }

    public GetMaxRankLevelId() : number
    {
        let MaxLevelId = 1;
        let jsonTable = JsonUtil.get(TableRank.TableName);
        if (jsonTable) 
        {
            for (let id in jsonTable) {
                if (Number(id) > MaxLevelId)
                {
                    MaxLevelId = Number(id);
                }
            }
        }
        return MaxLevelId;
    }

    public GetRankData(RankType:number, RankConfId:number)
    {
        const data: { [key: string]: any } = {};
        data.rankType = RankType;
        data.rankConfId = RankConfId;
        const param = JSON.stringify(data);
        var completeRank = (ret: HttpReturn) => {
            if (ret.isSucc && ret.res)
            {
                this.allUserNumber = ret.res.allUserNumber;
                this.RankData[this.compositeKey(ret.res.rankTyppe, ret.res.rankConfId)] = ret.res.list;
                if (ret.res.rankTyppe == '1')
                {
                    this.myInfoTuzi = ret.res.myInfo
                }
                else if (ret.res.rankTyppe == '2')
                {
                    this.myInfoCanting = ret.res.myInfo
                }
            }
        }
        ProtocolMgr.sendRankList(completeRank, param);
    }
    public GetRankDataBack()
    {
        for (let i = 1; i <= 2; ++i) 
        {
            let jsonTable = JsonUtil.get(TableRank.TableName);
            if (jsonTable) 
            {
                for (let id in jsonTable) {
                    let rankConfId = Number(id)
                    if (!this.RankData[this.compositeKey(i, rankConfId)]) 
                    {
                        this.GetRankData(i, rankConfId);
                    }
                }
            }
        }
    }

    public GetUserImageList() : string[] {
        let userList : string[] = [];
        userList.push(TonGameMgr.UserId);
        for (let i = 1; i <= 2; ++i) 
        {
            let jsonTable = JsonUtil.get(TableRank.TableName);
            if (jsonTable) 
            {
                for (let id in jsonTable) {
                    let rankConfId = Number(id)
                    let rankList = this.RankData[this.compositeKey(i, rankConfId)];
                    if (rankList) 
                    {
                        for (const id in rankList) {
                            let RankData = rankList[id];
                            if (!userList.includes(RankData.userId))
                            {
                                userList.push(RankData.userId);
                            }
                            if (userList.length >= 3)
                            {
                                return userList;
                            }
                        }
                    }
                }
            }
        }
        return userList;
    }
} 

export var RankMgr = new RankManager();