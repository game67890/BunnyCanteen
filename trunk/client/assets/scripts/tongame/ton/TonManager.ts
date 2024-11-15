import { TelegramWebApp } from '../../../cocos-telegram-miniapps/scripts/telegram-web';
import { _decorator, sys } from 'cc';
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UtilMgr } from "../manager/UtilManager";
//import { GameFi, TonConnectUI, Address, toNano, TonTransferRequest } from '@ton/cocos-sdk';

//import {TonConnectUi , type Transaction} from '../../cocos-telegram-miniapps/scripts/telegram-ui';

import { TonGameMgr } from "../../tongame/manager/TonGameManager";

export interface TonAddressConfig {
    tonAddress: string,
    jettonAddress?: string;
}

export class TonManager {

    private _bTonInit: boolean = false;

    //private _cocosGameFi: GameFi;
    private _connectUI;

    private serverHost: string = "https://bunnycanteen.game67890.com";
    
    //ton 和jetton地址， ton是买东西付款到的地址
    private _config: TonAddressConfig;

    /** 初始化 */
    public init() {
        if (this._bTonInit) return;
        if (UtilMgr.isHttps(oops.http.server))
        {
            //初始化Telegram
            try {
                if (sys.platform === sys.Platform.MOBILE_BROWSER) {
                    TelegramWebApp.Instance.init().then((result) => {
                        //console.log("telegram web app init : ", res.success);
            
                        let TelegramInitData : string = TelegramWebApp.Instance.getTelegramInitData();
                        console.log("TelegramInitData : ", TelegramInitData);
                        
            
                        let TelegramInitDataUnsafe = TelegramWebApp.Instance.getTelegramWebAppInitData();
                        if (TelegramInitDataUnsafe && TelegramInitDataUnsafe.user)
                        {
                            console.log("User data from initDataUnsafe:", TelegramInitDataUnsafe.user);
                            TonGameMgr.UserId = TelegramInitDataUnsafe.user.id.toString();
                            TonGameMgr.UserName = TelegramInitDataUnsafe.user.first_name + TelegramInitDataUnsafe.user.last_name;
                            TonGameMgr.TGHash = TelegramInitDataUnsafe.hash;
                            TonGameMgr.IsTelegramUser = true;

                            TonGameMgr.TelegramReferrer = TelegramInitDataUnsafe["referrer"];     
                            //oops.gui.toast("TelegramInitData: " + TelegramInitDataUnsafe, true);             
                        }
                        else 
                        {
                            TonGameMgr.IsTelegramUser = false;
                        }
                        TonGameMgr.init();
                    }).catch((error) => {
                        TonGameMgr.init();
                    });
                }
                else
                {
                    TonGameMgr.init();
                }
            } catch (error) {
                TonGameMgr.init();
            }
        }
        else
        {
            TonGameMgr.init();
        }
    }   

}

export var TonMgr = new TonManager();