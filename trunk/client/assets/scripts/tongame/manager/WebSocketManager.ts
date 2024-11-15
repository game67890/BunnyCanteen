import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { TonGameMgr } from "./TonGameManager";
import { PaymentMgr } from "../payment/PaymentManager";
import { UtilMgr } from "../manager/UtilManager";
import { tips } from "../../framework/common/prompt/TipsManager";

export class WebSocketManager {
    private socket: WebSocket | null = null;
    private isKicked : boolean = false;

    // 使用正则表达式去掉 http:// 或 https://
    removeHttpProtocol(url: string): string {
        return url.replace(/^https?:\/\//, '');
    }

    connectWebSocket(userId: string) {
        let url = oops.http.server + "websocket"
        if (UtilMgr.isHttps(url))
        {
            let FinalURL = "wss://" + this.removeHttpProtocol(url);
            this.socket = new WebSocket(FinalURL);
        }
        else
        {
            let FinalURL = "ws://" + this.removeHttpProtocol(url);
            this.socket = new WebSocket(FinalURL);
        }




        // 在连接打开前设置自定义的 HTTP 头
        this.socket.onopen = () => {
            console.log("WebSocket connection opened");
            //oops.gui.toast("WebSocket connection opened", true);
            // 发送用户 ID 作为初始化的认证信息
            if (this.socket.readyState === WebSocket.OPEN) {
                this.socket.send(JSON.stringify({ type: "init", userId }));
            }
        };
    
        this.socket.onclose = () => {
            console.log("WebSocket connection closed");
            //oops.gui.toast("WebSocket connection closed", true);
            setTimeout(() => {
                if (!this.isKicked)
                {
                    this.connectWebSocket(TonGameMgr.UserId);
                }
            }, 5000);
        };
    
        this.socket.onerror = (error) => {
            console.error("WebSocket error:", error);
            //oops.gui.toast("WebSocket error"+error, true);
        };


        this.socket.onmessage = (event) => {
            let protocol = JSON.parse(event.data);
            //oops.gui.toast("WebSocket message "+protocol.NotifyType, true);
            this.dispatch(protocol);
        };
    }

    dispatch(protocol){
        if (protocol.NotifyType == "Charge_Success") { //充值成功
            PaymentMgr.ProcessPay(protocol);
        }
        else if (protocol.NotifyType == "Invite_New") { //邀请成功
            TonGameMgr.updateCarrotCoin(protocol.carrotCoin);
        }
        else if (protocol.NotifyType == "Invite_Rank") { //被邀请人有人达到了新的段位
            TonGameMgr.updateCarrotCoin(protocol.carrotCoin);
        }
        else if (protocol.NotifyType == "Kick") { //顶号
            this.isKicked = true;
            tips.confirmTips("",oops.language.getLangByID("message_14"), oops.language.getLangByID("stringres_009"), false);
        }
        else if (protocol.NotifyType == "RabbitCoin_Add") { //修改萝卜币
            TonGameMgr.updateCarrotCoin(protocol.carrotCoin);
        }
    }

    onDestroy() {
        //oops.gui.toast("WebSocket onDestroy", true);
        if (this.socket) {
            this.socket.close();
            this.socket = null;
        }
    }

    sendPing()
    {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send("ping");
        }
    }
}

export var WebSocketMgr = new WebSocketManager();