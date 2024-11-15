System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, LayerType, _crd, UIID, UIConfigData;

  function _reportPossibleCrUseOfLayerType(extras) {
    _reporterNs.report("LayerType", "../../../../../extensions/oops-plugin-framework/assets/core/gui/layer/LayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfig(extras) {
    _reporterNs.report("UIConfig", "../../../../../extensions/oops-plugin-framework/assets/core/gui/layer/LayerManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      LayerType = _unresolved_2.LayerType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ffa5c27PYVCvoC7Y7YOyl/8", "GameUIConfig", undefined);
      /*
       * @Date: 2021-08-12 09:33:37
       * @LastEditors: dgflash
       * @LastEditTime: 2022-11-11 17:41:53
       */


      /** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
      _export("UIID", UIID = /*#__PURE__*/function (UIID) {
        UIID[UIID["Loading"] = 1] = "Loading";
        UIID[UIID["Confirm"] = 2] = "Confirm";
        UIID[UIID["ConfirmTips"] = 3] = "ConfirmTips";
        UIID[UIID["Netinstable"] = 4] = "Netinstable";
        UIID[UIID["Demo"] = 5] = "Demo";
        UIID[UIID["Demo_Role_Info"] = 6] = "Demo_Role_Info";
        UIID[UIID["MainUI"] = 7] = "MainUI";
        UIID[UIID["ShouYiUI"] = 8] = "ShouYiUI";
        UIID[UIID["BuyAutoUI"] = 9] = "BuyAutoUI";
        UIID[UIID["BuyAutoUITips"] = 10] = "BuyAutoUITips";
        UIID[UIID["CarrotMain"] = 11] = "CarrotMain";
        UIID[UIID["CarrotTips"] = 12] = "CarrotTips";
        UIID[UIID["CarrotRank"] = 13] = "CarrotRank";
        UIID[UIID["CarrotRankReward"] = 14] = "CarrotRankReward";
        UIID[UIID["CarrotAuto"] = 15] = "CarrotAuto";
        UIID[UIID["CarrotReward"] = 16] = "CarrotReward";
        UIID[UIID["PaymentUI"] = 17] = "PaymentUI";
        UIID[UIID["PaymentTips"] = 18] = "PaymentTips";
        UIID[UIID["PaymentWebview"] = 19] = "PaymentWebview";
        UIID[UIID["ShopMain"] = 20] = "ShopMain";
        UIID[UIID["Task"] = 21] = "Task";
        UIID[UIID["TaskTips"] = 22] = "TaskTips";
        UIID[UIID["Rank"] = 23] = "Rank";
        UIID[UIID["AcceleratedBuffBuyMain"] = 24] = "AcceleratedBuffBuyMain";
        UIID[UIID["FeedMain"] = 25] = "FeedMain";
        UIID[UIID["InviteMain"] = 26] = "InviteMain";
        UIID[UIID["InviteAcivity"] = 27] = "InviteAcivity";
        UIID[UIID["MainUI_Switch"] = 28] = "MainUI_Switch";
        UIID[UIID["Pop1"] = 29] = "Pop1";
        UIID[UIID["Pop2"] = 30] = "Pop2";
        UIID[UIID["Dialog"] = 31] = "Dialog";
        return UIID;
      }({}));
      /** 打开界面方式的配置数据 */


      _export("UIConfigData", UIConfigData = {
        /** 主界面层 */
        [UIID.Loading]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).UI,
          prefab: "prefab/ui/loading/loading",
          bundle: "resources"
        },
        [UIID.MainUI]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).UI,
          prefab: "prefab/ui/hecheng/hecheng"
        },

        /** 弹窗层 */
        [UIID.PaymentUI]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).PopUp,
          prefab: "prefab/ui/zhifu/zhifu"
        },
        [UIID.Task]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).PopUp,
          prefab: "prefab/ui/renwu/renwu"
        },
        [UIID.Rank]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).PopUp,
          prefab: "prefab/ui/rank/rank"
        },
        [UIID.CarrotMain]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).PopUp,
          prefab: "prefab/ui/baluobo/baluobo"
        },
        [UIID.CarrotRank]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).PopUp,
          prefab: "prefab/ui/baluobo/rank"
        },
        [UIID.ShopMain]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).PopUp,
          prefab: "prefab/ui/shop/shop"
        },
        [UIID.AcceleratedBuffBuyMain]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).PopUp,
          prefab: "prefab/ui/jiasu/jiasu"
        },
        [UIID.FeedMain]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).PopUp,
          prefab: "prefab/ui/weishi/weishi"
        },
        [UIID.InviteMain]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).PopUp,
          prefab: "prefab/ui/yaoqing/yaoqing"
        },
        [UIID.InviteAcivity]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).PopUp,
          prefab: "prefab/ui/yaoqing/yaoqing1"
        },
        [UIID.BuyAutoUI]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).PopUp,
          prefab: "prefab/ui/zidong/zidong"
        },

        /** 模式窗口层 */
        [UIID.ShouYiUI]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).Dialog,
          prefab: "prefab/ui/shouyi/shouyi"
        },
        [UIID.TaskTips]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).Dialog,
          prefab: "prefab/ui/renwu/renwujiangli"
        },
        [UIID.BuyAutoUITips]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).Dialog,
          prefab: "prefab/ui/zidong/zidongtips"
        },
        [UIID.PaymentTips]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).Dialog,
          prefab: "prefab/ui/zhifu/zhifutips"
        },
        [UIID.PaymentWebview]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).Dialog,
          prefab: "prefab/ui/zhifu/webview"
        },
        [UIID.CarrotTips]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).Dialog,
          prefab: "prefab/ui/baluobo/rule"
        },
        [UIID.CarrotRankReward]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).Dialog,
          prefab: "prefab/ui/baluobo/baochou"
        },
        [UIID.CarrotAuto]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).Dialog,
          prefab: "prefab/ui/baluobo/zidong"
        },
        [UIID.CarrotReward]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).Dialog,
          prefab: "prefab/ui/baluobo/jiangli"
        },
        [UIID.Confirm]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).Dialog,
          prefab: "common/prefab/confirm"
        },
        [UIID.ConfirmTips]: {
          layer: (_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
            error: Error()
          }), LayerType) : LayerType).Dialog,
          prefab: "common/prefab/alert"
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c28bbfc4dfd745126c85dce175d395a87872b43d.js.map