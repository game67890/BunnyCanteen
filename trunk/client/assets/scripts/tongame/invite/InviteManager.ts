import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../../framework/common/config/GameUIConfig";

export class InviteManager {
    public IniviteNum :number = 0;
    public InviteList: any[] = null;
    public InviteNameList: any[] = null;

    public onOpenInviteMain() {
        oops.gui.open(UIID.InviteMain);
    }
}

export var IniviteMgr = new InviteManager();
