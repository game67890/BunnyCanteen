import { DynamicAtlasManager, _decorator, macro, profiler } from 'cc';
import { DEBUG, JSB } from 'cc/env';
import { oops } from '../../../extensions/oops-plugin-framework/assets/core/Oops';
import { Root } from '../../../extensions/oops-plugin-framework/assets/core/Root';
import { ecs } from '../../../extensions/oops-plugin-framework/assets/libs/ecs/ECS';
import { UIConfigData } from './common/config/GameUIConfig';
import { smc } from './common/ecs/SingletonModuleComp';
import { EcsPositionSystem } from './common/ecs/position/EcsPositionSystem';
import { Initialize } from './initialize/Initialize';
import { EventMessage } from "../../../extensions/oops-plugin-framework/assets/core/common/event/EventMessage";
import { UtilMgr } from "../tongame/manager/UtilManager";

const { ccclass, property } = _decorator;

macro.CLEANUP_IMAGE_CACHE = false;
DynamicAtlasManager.instance.enabled = true;
DynamicAtlasManager.instance.maxFrameSize = 512;

@ccclass('Main')
export class Main extends Root {
    start() {
        if (DEBUG) profiler.showStats();

        oops.message.on(EventMessage.GAME_SHOW, this.onGameShow, this);
        oops.message.on(EventMessage.GAME_HIDE, this.onGameHide, this);
    }

    onDestroy() {
        oops.message.off(EventMessage.GAME_SHOW, this.onGameShow, this);
        oops.message.off(EventMessage.GAME_HIDE, this.onGameHide, this);
    }

    private onGameShow() {
        UtilMgr.PlayBgMusic(UtilMgr.CurMusicId);
    }

    private onGameHide() {

    }

    protected run() {
        smc.initialize = ecs.getEntity<Initialize>(Initialize);
        if (JSB) {
            oops.gui.toast("热更新后新程序的提示");
        }
    }

    protected initGui() {
        oops.gui.init(UIConfigData);
    }

    protected async initEcsSystem() {
        oops.ecs.add(new EcsPositionSystem())
        // oops.ecs.add(new EcsAccountSystem());
        // oops.ecs.add(new EcsRoleSystem());
        // oops.ecs.add(new EcsInitializeSystem());
    }
}