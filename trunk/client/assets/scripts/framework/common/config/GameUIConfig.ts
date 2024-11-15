/*
 * @Date: 2021-08-12 09:33:37
 * @LastEditors: dgflash
 * @LastEditTime: 2022-11-11 17:41:53
 */

import { LayerType, UIConfig } from "../../../../../extensions/oops-plugin-framework/assets/core/gui/layer/LayerManager";

/** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
export enum UIID {
    /** 资源加载界面 */
    Loading = 1,
    /** 二次确认框 */
    Confirm,
    /** 确认框 */
    ConfirmTips,
    /** 加载与延时提示界面 */
    Netinstable,
    /** DEMO */
    Demo,
    /** 角色信息 */
    Demo_Role_Info,

    /** 主界面 */
    MainUI,

    /** 合成功能：收益界面 */
    ShouYiUI,
    /** 合成功能：购买自动界面 */
    BuyAutoUI,
    /** 合成功能：购买自动界面Tips */
    BuyAutoUITips,

    /** 拔萝卜主界面 */
    CarrotMain,
    /** 拔萝卜tips界面 */
    CarrotTips,
    /** 拔萝卜排行榜界面 */
    CarrotRank,
    /** 拔萝卜排行榜奖励预览界面 */
    CarrotRankReward,
    /** 拔萝卜自动钓鱼界面 */
    CarrotAuto,
    /** 拔萝卜奖励界面 */
    CarrotReward,

    /** 支付界面 */
    PaymentUI,
    /** 支付界面 购买成功提示*/
    PaymentTips,
    /** 支付界面 AEON网页*/
    PaymentWebview,

    /** 商城界面 */
    ShopMain,

    /** 任务界面 */
    Task,
    TaskTips,

    /** 排行榜界面 */
    Rank,

    /** 加速buff购买界面 */
    AcceleratedBuffBuyMain,

    /** 喂食界面 */
    FeedMain,

    /** 邀请界面 */
    InviteMain,
    /** 邀请好友得萝卜币的活动界面 */
    InviteAcivity,

    MainUI_Switch,
    Pop1,
    Pop2,
    Dialog
}

/** 打开界面方式的配置数据 */
export var UIConfigData: { [key: number]: UIConfig } = {
    /** 主界面层 */
    [UIID.Loading]: { layer: LayerType.UI, prefab: "prefab/ui/loading/loading", bundle: "resources" },
    [UIID.MainUI]: { layer: LayerType.UI, prefab: "prefab/ui/hecheng/hecheng" },

    /** 弹窗层 */
    [UIID.PaymentUI]: { layer: LayerType.PopUp, prefab: "prefab/ui/zhifu/zhifu" },
    [UIID.Task]: { layer: LayerType.PopUp, prefab: "prefab/ui/renwu/renwu" },
    [UIID.Rank]: { layer: LayerType.PopUp, prefab: "prefab/ui/rank/rank" },
    [UIID.CarrotMain]: { layer: LayerType.PopUp, prefab: "prefab/ui/baluobo/baluobo" },
    [UIID.CarrotRank]: { layer: LayerType.PopUp, prefab: "prefab/ui/baluobo/rank" },
    [UIID.ShopMain]: { layer: LayerType.PopUp, prefab: "prefab/ui/shop/shop" },
    [UIID.AcceleratedBuffBuyMain]: { layer: LayerType.PopUp, prefab: "prefab/ui/jiasu/jiasu" },
    [UIID.FeedMain]: { layer: LayerType.PopUp, prefab: "prefab/ui/weishi/weishi" },
    [UIID.InviteMain]: { layer: LayerType.PopUp, prefab: "prefab/ui/yaoqing/yaoqing" },
    [UIID.InviteAcivity]: { layer: LayerType.PopUp, prefab: "prefab/ui/yaoqing/yaoqing1" },
    [UIID.BuyAutoUI]: { layer: LayerType.PopUp, prefab: "prefab/ui/zidong/zidong" },

    /** 模式窗口层 */
    [UIID.ShouYiUI]: { layer: LayerType.Dialog, prefab: "prefab/ui/shouyi/shouyi" },
    [UIID.TaskTips]: { layer: LayerType.Dialog, prefab: "prefab/ui/renwu/renwujiangli" },
    [UIID.BuyAutoUITips]: { layer: LayerType.Dialog, prefab: "prefab/ui/zidong/zidongtips" },
    [UIID.PaymentTips]: { layer: LayerType.Dialog, prefab: "prefab/ui/zhifu/zhifutips" },
    [UIID.PaymentWebview]: { layer: LayerType.Dialog, prefab: "prefab/ui/zhifu/webview" },
    [UIID.CarrotTips]: { layer: LayerType.Dialog, prefab: "prefab/ui/baluobo/rule" },
    [UIID.CarrotRankReward]: { layer: LayerType.Dialog, prefab: "prefab/ui/baluobo/baochou" },
    [UIID.CarrotAuto]: { layer: LayerType.Dialog, prefab: "prefab/ui/baluobo/zidong" },
    [UIID.CarrotReward]: { layer: LayerType.Dialog, prefab: "prefab/ui/baluobo/jiangli" },
    [UIID.Confirm]: { layer: LayerType.Dialog, prefab: "common/prefab/confirm" },
    [UIID.ConfirmTips]: { layer: LayerType.Dialog, prefab: "common/prefab/alert" },

}