import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { JsonUtil } from "../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil";
import { HttpReturn } from "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest";
import { GameEvent } from "../../framework/common/config/GameEvent";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { TableIngredients } from "../../framework/common/table/TableIngredients";
import { TableRestaurantlevel } from "../../framework/common/table/TableRestaurantlevel";
import { HeChengComponent } from "../hecheng/HeChengComponent";
import { BoardMgr } from "../manager/BoardManager";
import { ProtocolMgr } from "../manager/ProtocolManager";
import { TonGameMgr } from "../manager/TonGameManager";
import { UtilMgr } from "../manager/UtilManager";
import { FeedMain } from "./FeedMain";

export class FeedManager {
    private tablerecord = new TableIngredients();
    public NextFreeDishTime = 0;    // 距离下一次领取免费菜品的剩余时间
    public FreeDishId = 0;      // 免费菜品id
    public HechengMaxLevel: any[] = [];     // 合成菜品的最大等级
    public ExtDishPrice: any[] = [];     // 记录菜品的价格涨幅

    public UpdateExtDishPrice(configId:number)
    {
        this.tablerecord.init(configId);
        if (FeedMgr.ExtDishPrice[configId]) {
            FeedMgr.ExtDishPrice[configId] = FeedMgr.ExtDishPrice[configId] + this.tablerecord.costup;
        }
        else {
            FeedMgr.ExtDishPrice[configId] = this.tablerecord.costup;
        }
    }

    // 更新合成菜品的最大等级
    public UpdateHechengMaxLevel(sucaiid : number) {
        let tablerecord = new TableIngredients();
        tablerecord.init(sucaiid);
        if (FeedMgr.HechengMaxLevel[tablerecord.type]) {
            if (tablerecord.level > FeedMgr.HechengMaxLevel[tablerecord.type]) {
                FeedMgr.HechengMaxLevel[tablerecord.type] = tablerecord.level;
            }
        }
        else {
            FeedMgr.HechengMaxLevel[tablerecord.type] = tablerecord.level;
        }
    }

    public updateFreeDishId() {
        if (this.FreeDishId <= 0 && this.NextFreeDishTime <= 0) {
            this.FreeDishId = this.GetFreeDishId();
            const HechengGUI = oops.gui.get(UIID.MainUI);
            if (HechengGUI) {
                const HechengCom = HechengGUI.getComponent(HeChengComponent);
                if (HechengCom) {
                    HechengCom.RefreshFeedRed();
                }
            }
        }
    }

    public RefreshData(usetime:number) {
        if (this.FreeDishId <= 100) {
            if (usetime >= this.NextFreeDishTime) {
                this.NextFreeDishTime = 0;
                this.FreeDishId = this.GetFreeDishId();
            }
        }
    }

    public GetFreeDishId() : number {
        let randomlist : any[] = [];
        let tablerecord = new TableIngredients();
        let tablerest = new TableRestaurantlevel();
        let jsonIngredients = JsonUtil.get(TableIngredients.TableName);
        tablerest.init(TonGameMgr.CanTingLevel);
        if (jsonIngredients) {
            for (let configid  in jsonIngredients) {
                let Ingredients = jsonIngredients[configid];
                if (Ingredients.level == tablerest.foodlevel+2-5) {
                    tablerecord.init(Number(configid));
                    if (tablerecord && tablerecord.id && tablerecord.id > 0) {
                        randomlist.push(tablerecord.id);
                    }
                }
            }
        }
        if (randomlist.length > 0) {
            return UtilMgr.getRandomNumber(randomlist);
        }
        else {
            return 0;
        }
    }

    public UpdateNextFreeDishTime() {
        if (this.NextFreeDishTime > 0) {
            this.NextFreeDishTime = this.NextFreeDishTime - 1;
            if (this.NextFreeDishTime <= 0) {
                this.NextFreeDishTime = 0;
                this.FreeDishId = this.GetFreeDishId();
                const HechengGUI = oops.gui.get(UIID.MainUI);
                if (HechengGUI) {
                    const HechengCom = HechengGUI.getComponent(HeChengComponent);
                    if (HechengCom) {
                        HechengCom.RefreshFeedRed();
                    }
                }
            }
        }
    }

    public SendBuyDish(confId:number, count:number) {
        var completeCBuyDish = (ret: HttpReturn) => {
            console.log(ret.res);
            if (ret.isSucc)
            {
                let tablerecord = new TableIngredients();
                tablerecord.init(Number(ret.res.confId));
                if (BoardMgr.addGrid(Number(ret.res.confId)))
                {
                    TonGameMgr.updateCarrotCoin(TonGameMgr.CarrotCoin-Number(ret.res.count));
                    oops.message.dispatchEvent(GameEvent.UpdateBaseData);
                    oops.message.dispatchEvent(GameEvent.UpdateBoardGrid);
                    oops.message.dispatchEvent(GameEvent.Save);
                }

                const FeedGUI = oops.gui.get(UIID.FeedMain);
                if (FeedGUI) {
                    const FeedCom = FeedGUI.getComponent(FeedMain);
                    if (FeedCom) {
                        FeedCom.updategridList();
                    }
                }
                oops.gui.toast("message_11", true);     // 购买成功！
                FeedMgr.UpdateExtDishPrice(Number(ret.res.confId));
            }
        }
    
        const data: { [key: string]: any } = {};
        data.confId = confId.toString();
        data.count = count.toString();
        data.userID = TonGameMgr.UserId;
        data.token = "e10adc3949ba59abbe56e057f20f883e";
    
        const param = JSON.stringify(data);
        ProtocolMgr.sendcbuydish(completeCBuyDish, param);
    }
}

export var FeedMgr = new FeedManager();
