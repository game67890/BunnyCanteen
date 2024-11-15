import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { ProtocolMgr } from "../manager/ProtocolManager";
import { HttpReturn } from "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest";

import { TableTask } from "../../framework/common/table/TableTask";
import { TableAchievement } from "../../framework/common/table/TableAchievement";
import { JsonUtil } from "../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil";

export class TaskManager {

    private _tsTask = new TableTask();
    private _tsAchievement = new TableAchievement();

    public ServerTaskList : any = null;
    public ServerAchievementList : any = null;

    public TaskCellList: any[] = [];
    public AchievementCellList: any[] = [];

    public OpenTaskUI() {
        oops.gui.open(UIID.Task);
    }

    public GetTaskData(callback?: Function){
        var completeLogin = (ret: HttpReturn) => {
            console.log(ret.res);
            if (ret.isSucc && ret.res.result)
            {
                if (callback)
                {
                    callback(ret.res)
                }
            }
        }
        ProtocolMgr.sendTaskPanel(completeLogin, "");
    }

    public modifyTaskData(TaskID:number, IsFinished:boolean) : boolean {
        for (const key in TaskMgr.ServerTaskList) {
            if (TaskMgr.ServerTaskList.hasOwnProperty(key)) {
                let value = TaskMgr.ServerTaskList[key];
                let valueObject = JSON.parse(value);
                if (valueObject.ID == TaskID)
                {
                    valueObject.isFinished = IsFinished;
                    TaskMgr.ServerTaskList[key] = JSON.stringify(valueObject);
                    return true;
                }
            }
        }
        return false;
    }

    public modifyAchievementData(AchievementID:number, IsFinished:boolean) : boolean {
        for (const key in TaskMgr.ServerAchievementList) {
            if (TaskMgr.ServerAchievementList.hasOwnProperty(key)) {
                let value = TaskMgr.ServerAchievementList[key];
                let valueObject = JSON.parse(value);
                if (valueObject.ID == AchievementID)
                {
                    valueObject.isFinished = IsFinished;
                    TaskMgr.ServerAchievementList[key] = JSON.stringify(valueObject);
                    return true;
                }
            }
        }
        return false;
    }

    public canGetAchievementReward(AchievementID:number) : boolean {
        for (const key in TaskMgr.ServerAchievementList) {
            if (TaskMgr.ServerAchievementList.hasOwnProperty(key)) {
                let value = TaskMgr.ServerAchievementList[key];
                let valueObject = JSON.parse(value);
                if (valueObject.ID == AchievementID)
                {
                   if (valueObject.isFinished)
                   {
                        return false;
                   }
                   else
                   {
                        this._tsAchievement.init(AchievementID);
                        if (valueObject.progress >= this._tsAchievement.condition)
                        {
                            return true;
                        }
                        else
                        {
                            return false;
                        }
                   }
                }
            }
        }
        
        return false;
    }


    public IsHasTaskType(TaskType:number) : boolean {

        let jsonTable = JsonUtil.get(TableTask.TableName);
        if (jsonTable) 
        {
            for (let id in jsonTable) {
                let task = jsonTable[id];
                if (task.tasktype == TaskType) 
                {
                    return true;
                }
            }
        }
        return false;
    }

    public GetTaskCelllist() : any {
        this.TaskCellList = [];
        let jsonTable = JsonUtil.get(TableTask.TableName);
        if (jsonTable) 
        {
            for (let id in jsonTable) {
                let task = jsonTable[id];
                task.id = Number(id);
                this.TaskCellList.push(task);
            }
        }
        return this.TaskCellList;
    }

    public GetAchievementCellList() : any {
        this.AchievementCellList = [];
        let jsonTable = JsonUtil.get(TableAchievement.TableName);
        if (jsonTable) 
        {
            let AchievementType = 0;
            for (let id in jsonTable) {
                let Achievement = jsonTable[id];
                if (AchievementType != Achievement.achievetype)
                {
                    AchievementType = Achievement.achievetype;
                    Achievement.id = Number(id)
                    this.AchievementCellList.push(Achievement);
                } 
            }
        }
        return this.AchievementCellList;
    }

    public GetAchievementItemCellList(AchievementType:number) : any {
        this.AchievementCellList = [];
        let jsonTable = JsonUtil.get(TableAchievement.TableName);
        if (jsonTable) 
        {
            for (let id in jsonTable) {
                let Achievement = jsonTable[id];
                if (AchievementType == Achievement.achievetype)
                {
                    Achievement.id = Number(id)
                    this.AchievementCellList.push(Achievement);
                } 
            }
        }
        return this.AchievementCellList;
    }
} 

export var TaskMgr = new TaskManager();