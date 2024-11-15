import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { TonGameMgr } from "./TonGameManager";

export class ProtocolManager {

    public sendLogin(complete, param) {
        let url = oops.http.server + "login";
        oops.http.addHeader("Authorization", TonGameMgr.UserId);
        oops.http.post(url, complete, param);
    }

    public sendSave(complete, param) {
        let url = oops.http.server + "save";
        oops.http.addHeader("Authorization", TonGameMgr.ramdonToken);
        oops.http.post(url, complete, param);
    }

    public sendChargeShop(complete, param) {
        let url = oops.http.server + "charge/shop";
        oops.http.addHeader("Authorization", TonGameMgr.ramdonToken);
        oops.http.post(url, complete, param);
    }

    public sendChargeBuy(complete, param) {
        let url = oops.http.server + "charge/buy";
        oops.http.addHeader("Authorization", TonGameMgr.ramdonToken);
        oops.http.post(url, complete, param);
    }

    public sendopenluobopanel(complete, param) {
        let url = oops.http.server + "baluobo/cpanel";
        oops.http.addHeader("Authorization", TonGameMgr.ramdonToken);
        oops.http.post(url, complete, param);
    }

    public sendcbaluobo(complete, param) {
        let url = oops.http.server + "baluobo/cbaluobo";
        oops.http.addHeader("Authorization", TonGameMgr.ramdonToken);
        oops.http.post(url, complete, param);
    }

    public sendcrankpanel(complete, param) {
        let url = oops.http.server + "baluobo/crankpanel";
        oops.http.addHeader("Authorization", TonGameMgr.ramdonToken);
        oops.http.post(url, complete, param);
    }

    public sendcbuyrabbit(complete, param) {
        let url = oops.http.server + "rabbitmall/cbuy";
        oops.http.addHeader("Authorization", TonGameMgr.ramdonToken);
        oops.http.post(url, complete, param);
    }

    public sendaddcarrotcion(complete, param) {
        let url = oops.http.server + "gm/carrotcoin";
        oops.http.addHeader("Authorization", TonGameMgr.ramdonToken);
        oops.http.post(url, complete, param);
    }

    public sendcbuybuff(complete, param) {
        let url = oops.http.server + "buybuff/cbuy";
        oops.http.addHeader("Authorization", TonGameMgr.ramdonToken);
        oops.http.post(url, complete, param);
    }

    public sendTaskPanel(complete, param) {
        let url = oops.http.server + "mission/panel";
        oops.http.addHeader("Authorization", TonGameMgr.ramdonToken);
        oops.http.post(url, complete, param);
    }

    public sendFinishAchievement(complete, param) {
        let url = oops.http.server + "mission/finishAchievement";
        oops.http.addHeader("Authorization", TonGameMgr.ramdonToken);
        oops.http.post(url, complete, param);
    }

    public sendUpdateMission(complete, param) {
        let url = oops.http.server + "mission/updateMission";
        oops.http.addHeader("Authorization", TonGameMgr.ramdonToken);
        oops.http.post(url, complete, param);
    }

    public sendcbuydish(complete, param) {
        let url = oops.http.server + "weishi/cweishi";
        oops.http.addHeader("Authorization", TonGameMgr.ramdonToken);
        oops.http.post(url, complete, param);
    }

    public sendGetTgBotToken(complete, param) {
        let url = oops.http.server + "getTgBotToken";
        oops.http.addHeader("Authorization", TonGameMgr.ramdonToken);
        oops.http.postByArraybuffer(url, complete, param);
    }

    public sendRankList(complete, param) {
        let url = oops.http.server + "paihang/cranklist";
        oops.http.addHeader("Authorization", TonGameMgr.ramdonToken);
        oops.http.post(url, complete, param);
    }

    public sendOpenInvite(complete, param) {
        let url = oops.http.server + "invite/panel";
        oops.http.addHeader("Authorization", TonGameMgr.ramdonToken);
        oops.http.post(url, complete, param);
    }

    public sendAutocompose(complete, param) {
        let url = oops.http.server + "func/autocompose";
        oops.http.addHeader("Authorization", TonGameMgr.ramdonToken);
        oops.http.post(url, complete, param);
    }

    public getHeadImage(complete, userId) {
        let url = oops.http.server + "getheadimg/"+ userId + ".jpg";
        oops.http.addHeader("Authorization", TonGameMgr.ramdonToken);
        oops.http.getByArraybuffer(url, complete);
    }
}

export var ProtocolMgr = new ProtocolManager();