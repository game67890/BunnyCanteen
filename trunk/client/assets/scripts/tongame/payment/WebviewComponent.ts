import { _decorator, Component, Node, Sprite, Label,WebView } from 'cc';
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../../framework/common/config/GameUIConfig";
import { UtilMgr } from '../manager/UtilManager';

const { ccclass, property } = _decorator;

@ccclass('WebviewComponent')
export class WebviewComponent extends Component {
    @property(WebView)
    public webview: WebView = null!;

    @property(Sprite)
    close: Sprite = null;

    private loadedCount : number = 0;

    onAdded(params: any): boolean {
        let url = params.url;
        this.webview.url = url;
        this.loadedCount = 0;

        this.close.node.setSiblingIndex(1000);

        this.webview.node.on('loading', (webViewEvent) => {
            const url = webViewEvent.url;
            if (url.startsWith("cocos://close")) {
                // 执行关闭操作，例如隐藏 WebView 或销毁节点
                //webView.node.active = false;
            }
        });
        
        return true;
    }

    onEventTypes (target: WebView, eventType) {
        console.log("onEventTypes=" + eventType);
        if (eventType == WebView.EventType.LOADED)
        {
            if (this.loadedCount > 0)
            {
                oops.gui.remove(UIID.PaymentWebview);
                return;
            }
            this.loadedCount = this.loadedCount + 1;
        }
    }

    public OnClose() {
        UtilMgr.PlaySoundEffect(19);
        oops.gui.remove(UIID.PaymentWebview);
    }
}


