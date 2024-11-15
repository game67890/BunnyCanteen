
import { Component, game } from "cc";
import { Timer } from "../../../../extensions/oops-plugin-framework/assets/core/common/timer/Timer";

import { TonGameMgr } from "./TonGameManager";

/** TonGame 时间管理 */
export class TonTimerManager extends Component {
    private OneSecondTimer: Timer = new Timer(1);
    private TwoSecondTimer: Timer = new Timer(2);
    private FiveSecondTimer: Timer = new Timer(5);
    private TenSecondTimer: Timer = new Timer(10);
    private SixtySecondTimer: Timer = new Timer(60);

    update(dt: number) {
        if (this.OneSecondTimer.update(dt)) {
            TonGameMgr.OnOneSecondUpdate();
        }

        if (this.TwoSecondTimer.update(dt)) {
            TonGameMgr.OnTwoSecondUpdate();
        }

        if (this.FiveSecondTimer.update(dt)) {
            TonGameMgr.OnFiveSecondUpdate();
        }

        if (this.TenSecondTimer.update(dt)) {
            TonGameMgr.OnTenSecondUpdate();
        }

        if (this.SixtySecondTimer.update(dt)) {
            TonGameMgr.OnSixtySecondUpdate();
        }
    }

    private pad(num: number) {
        return num < 10 ? '0' + num : num.toString();
    }

    // 倒计时 单位秒
    public TimeToString(lasttime : number) : string {
        let hours = Math.floor(lasttime / 3600);
        let minutes = Math.floor((lasttime - (hours * 3600)) / 60);
        let seconds = lasttime % 60;
        return this.pad(hours) + ":" + this.pad(minutes) + ":" + this.pad(seconds);
    }
} 

export var TonTimerMgr = new TonTimerManager();