System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, sys, ProgressBar, oops, JsonUtil, ecs, CCVMParentComp, GameEvent, UIID, TonMgr, TableRoleJob, TableRoleLevelUp, TablePictureSet, TablePay, TableGiftBox, TableRestaurantlevel, TableIngredients, TableAchievement, TableTask, TableRank, TableOtherParameter, TableRadishAwardWeight, TableRadishAwardRank, TableRadishAwardTime, TableShop, TableAccelerate, TableInvitedUserRank, TableSoundEffects, _dec, _dec2, _class, _crd, ccclass, property, LoadingViewComp;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfecs(extras) {
    _reporterNs.report("ecs", "../../../../../extensions/oops-plugin-framework/assets/libs/ecs/ECS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCCVMParentComp(extras) {
    _reporterNs.report("CCVMParentComp", "../../../../../extensions/oops-plugin-framework/assets/module/common/CCVMParentComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../common/config/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonMgr(extras) {
    _reporterNs.report("TonMgr", "../../../tongame/ton/TonManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableRoleJob(extras) {
    _reporterNs.report("TableRoleJob", "../../common/table/TableRoleJob", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableRoleLevelUp(extras) {
    _reporterNs.report("TableRoleLevelUp", "../../common/table/TableRoleLevelUp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTablePictureSet(extras) {
    _reporterNs.report("TablePictureSet", "../../common/table/TablePictureSet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTablePay(extras) {
    _reporterNs.report("TablePay", "../../common/table/TablePay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableGiftBox(extras) {
    _reporterNs.report("TableGiftBox", "../../common/table/TableGiftBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableRestaurantlevel(extras) {
    _reporterNs.report("TableRestaurantlevel", "../../common/table/TableRestaurantlevel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableIngredients(extras) {
    _reporterNs.report("TableIngredients", "../../common/table/TableIngredients", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableAchievement(extras) {
    _reporterNs.report("TableAchievement", "../../common/table/TableAchievement", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableTask(extras) {
    _reporterNs.report("TableTask", "../../common/table/TableTask", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableRank(extras) {
    _reporterNs.report("TableRank", "../../common/table/TableRank", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableOtherParameter(extras) {
    _reporterNs.report("TableOtherParameter", "../../common/table/TableOtherParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableRadishAwardWeight(extras) {
    _reporterNs.report("TableRadishAwardWeight", "../../common/table/TableRadishAwardWeight", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableRadishAwardRank(extras) {
    _reporterNs.report("TableRadishAwardRank", "../../common/table/TableRadishAwardRank", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableRadishAwardTime(extras) {
    _reporterNs.report("TableRadishAwardTime", "../../common/table/TableRadishAwardTime", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableShop(extras) {
    _reporterNs.report("TableShop", "../../common/table/TableShop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableAccelerate(extras) {
    _reporterNs.report("TableAccelerate", "../../common/table/TableAccelerate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableInvitedUserRank(extras) {
    _reporterNs.report("TableInvitedUserRank", "../../common/table/TableInvitedUserRank", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableSoundEffects(extras) {
    _reporterNs.report("TableSoundEffects", "../../common/table/TableSoundEffects", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      sys = _cc.sys;
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      JsonUtil = _unresolved_3.JsonUtil;
    }, function (_unresolved_4) {
      ecs = _unresolved_4.ecs;
    }, function (_unresolved_5) {
      CCVMParentComp = _unresolved_5.CCVMParentComp;
    }, function (_unresolved_6) {
      GameEvent = _unresolved_6.GameEvent;
    }, function (_unresolved_7) {
      UIID = _unresolved_7.UIID;
    }, function (_unresolved_8) {
      TonMgr = _unresolved_8.TonMgr;
    }, function (_unresolved_9) {
      TableRoleJob = _unresolved_9.TableRoleJob;
    }, function (_unresolved_10) {
      TableRoleLevelUp = _unresolved_10.TableRoleLevelUp;
    }, function (_unresolved_11) {
      TablePictureSet = _unresolved_11.TablePictureSet;
    }, function (_unresolved_12) {
      TablePay = _unresolved_12.TablePay;
    }, function (_unresolved_13) {
      TableGiftBox = _unresolved_13.TableGiftBox;
    }, function (_unresolved_14) {
      TableRestaurantlevel = _unresolved_14.TableRestaurantlevel;
    }, function (_unresolved_15) {
      TableIngredients = _unresolved_15.TableIngredients;
    }, function (_unresolved_16) {
      TableAchievement = _unresolved_16.TableAchievement;
    }, function (_unresolved_17) {
      TableTask = _unresolved_17.TableTask;
    }, function (_unresolved_18) {
      TableRank = _unresolved_18.TableRank;
    }, function (_unresolved_19) {
      TableOtherParameter = _unresolved_19.TableOtherParameter;
    }, function (_unresolved_20) {
      TableRadishAwardWeight = _unresolved_20.TableRadishAwardWeight;
    }, function (_unresolved_21) {
      TableRadishAwardRank = _unresolved_21.TableRadishAwardRank;
    }, function (_unresolved_22) {
      TableRadishAwardTime = _unresolved_22.TableRadishAwardTime;
    }, function (_unresolved_23) {
      TableShop = _unresolved_23.TableShop;
    }, function (_unresolved_24) {
      TableAccelerate = _unresolved_24.TableAccelerate;
    }, function (_unresolved_25) {
      TableInvitedUserRank = _unresolved_25.TableInvitedUserRank;
    }, function (_unresolved_26) {
      TableSoundEffects = _unresolved_26.TableSoundEffects;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "92429ykTnxFCrcGyW58JWjj", "LoadingViewComp", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-07-03 16:13:17
       * @LastEditors: dgflash
       * @LastEditTime: 2022-08-29 13:37:08
       */


      __checkObsolete__(['_decorator', 'sys', 'ProgressBar', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 游戏资源加载 */

      _export("LoadingViewComp", LoadingViewComp = (_dec = ccclass('LoadingViewComp'), _dec2 = (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).register('LoadingView', false), _dec(_class = _dec2(_class = class LoadingViewComp extends (_crd && CCVMParentComp === void 0 ? (_reportPossibleCrUseOfCCVMParentComp({
        error: Error()
      }), CCVMParentComp) : CCVMParentComp) {
        constructor(...args) {
          super(...args);

          /** VM 组件绑定数据 */
          this.data = {
            /** 加载资源当前进度 */
            finished: 0,

            /** 加载资源最大进度 */
            total: 0,

            /** 加载资源进度比例值 */
            progress: "0",

            /** 加载流程中提示文本 */
            prompt: ""
          };
          this.progress = 0;
        }

        reset() {
          setTimeout(() => {
            // 关闭加载界面
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.remove((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).Loading);
          }, 500);
        }

        start() {
          if (!sys.isNative) {
            this.enter();
          }
        }

        enter() {
          this.addEvent();
          this.loadRes();
        }

        addEvent() {
          this.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).LoginSuccess, this.onHandler, this);
        }

        onHandler(event, args) {
          switch (event) {
            case (_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).LoginSuccess:
              // 加载流程结束，移除加载提示界面
              this.ent.remove(LoadingViewComp);
              break;
          }
        }
        /** 加载资源 */


        async loadRes() {
          this.data.progress = 0;
          await this.loadCustom();
          this.loadGameRes();
        }
        /** 加载游戏本地JSON数据（自定义内容） */


        loadCustom() {
          // 加载游戏本地JSON数据的多语言提示文本
          this.data.prompt = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("loading_load_json");
          return new Promise(async (resolve, reject) => {
            await (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
              error: Error()
            }), JsonUtil) : JsonUtil).loadAsync((_crd && TableRoleJob === void 0 ? (_reportPossibleCrUseOfTableRoleJob({
              error: Error()
            }), TableRoleJob) : TableRoleJob).TableName);
            await (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
              error: Error()
            }), JsonUtil) : JsonUtil).loadAsync((_crd && TableRoleLevelUp === void 0 ? (_reportPossibleCrUseOfTableRoleLevelUp({
              error: Error()
            }), TableRoleLevelUp) : TableRoleLevelUp).TableName);
            await (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
              error: Error()
            }), JsonUtil) : JsonUtil).loadAsync((_crd && TablePictureSet === void 0 ? (_reportPossibleCrUseOfTablePictureSet({
              error: Error()
            }), TablePictureSet) : TablePictureSet).TableName);
            await (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
              error: Error()
            }), JsonUtil) : JsonUtil).loadAsync((_crd && TablePay === void 0 ? (_reportPossibleCrUseOfTablePay({
              error: Error()
            }), TablePay) : TablePay).TableName);
            await (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
              error: Error()
            }), JsonUtil) : JsonUtil).loadAsync((_crd && TableGiftBox === void 0 ? (_reportPossibleCrUseOfTableGiftBox({
              error: Error()
            }), TableGiftBox) : TableGiftBox).TableName);
            await (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
              error: Error()
            }), JsonUtil) : JsonUtil).loadAsync((_crd && TableRestaurantlevel === void 0 ? (_reportPossibleCrUseOfTableRestaurantlevel({
              error: Error()
            }), TableRestaurantlevel) : TableRestaurantlevel).TableName);
            await (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
              error: Error()
            }), JsonUtil) : JsonUtil).loadAsync((_crd && TableIngredients === void 0 ? (_reportPossibleCrUseOfTableIngredients({
              error: Error()
            }), TableIngredients) : TableIngredients).TableName);
            await (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
              error: Error()
            }), JsonUtil) : JsonUtil).loadAsync((_crd && TableAchievement === void 0 ? (_reportPossibleCrUseOfTableAchievement({
              error: Error()
            }), TableAchievement) : TableAchievement).TableName);
            await (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
              error: Error()
            }), JsonUtil) : JsonUtil).loadAsync((_crd && TableTask === void 0 ? (_reportPossibleCrUseOfTableTask({
              error: Error()
            }), TableTask) : TableTask).TableName);
            await (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
              error: Error()
            }), JsonUtil) : JsonUtil).loadAsync((_crd && TableRank === void 0 ? (_reportPossibleCrUseOfTableRank({
              error: Error()
            }), TableRank) : TableRank).TableName);
            await (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
              error: Error()
            }), JsonUtil) : JsonUtil).loadAsync((_crd && TableOtherParameter === void 0 ? (_reportPossibleCrUseOfTableOtherParameter({
              error: Error()
            }), TableOtherParameter) : TableOtherParameter).TableName);
            await (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
              error: Error()
            }), JsonUtil) : JsonUtil).loadAsync((_crd && TableRadishAwardWeight === void 0 ? (_reportPossibleCrUseOfTableRadishAwardWeight({
              error: Error()
            }), TableRadishAwardWeight) : TableRadishAwardWeight).TableName);
            await (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
              error: Error()
            }), JsonUtil) : JsonUtil).loadAsync((_crd && TableRadishAwardRank === void 0 ? (_reportPossibleCrUseOfTableRadishAwardRank({
              error: Error()
            }), TableRadishAwardRank) : TableRadishAwardRank).TableName);
            await (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
              error: Error()
            }), JsonUtil) : JsonUtil).loadAsync((_crd && TableRadishAwardTime === void 0 ? (_reportPossibleCrUseOfTableRadishAwardTime({
              error: Error()
            }), TableRadishAwardTime) : TableRadishAwardTime).TableName);
            await (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
              error: Error()
            }), JsonUtil) : JsonUtil).loadAsync((_crd && TableShop === void 0 ? (_reportPossibleCrUseOfTableShop({
              error: Error()
            }), TableShop) : TableShop).TableName);
            await (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
              error: Error()
            }), JsonUtil) : JsonUtil).loadAsync((_crd && TableAccelerate === void 0 ? (_reportPossibleCrUseOfTableAccelerate({
              error: Error()
            }), TableAccelerate) : TableAccelerate).TableName);
            await (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
              error: Error()
            }), JsonUtil) : JsonUtil).loadAsync((_crd && TableInvitedUserRank === void 0 ? (_reportPossibleCrUseOfTableInvitedUserRank({
              error: Error()
            }), TableInvitedUserRank) : TableInvitedUserRank).TableName);
            await (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
              error: Error()
            }), JsonUtil) : JsonUtil).loadAsync((_crd && TableSoundEffects === void 0 ? (_reportPossibleCrUseOfTableSoundEffects({
              error: Error()
            }), TableSoundEffects) : TableSoundEffects).TableName);
            resolve(null);
          });
        }
        /** 加载初始游戏内容资源 */


        loadGameRes() {
          // 加载初始游戏内容资源的多语言提示文本
          //this.data.prompt = oops.language.getLangByID("loading_load_game");
          //oops.res.loadDir("audios", null, UtilMgr.onAudioCompleteCallback);
          //oops.res.loadDir("audios");
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.loadDir("prefab/ui/shouyi");
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.loadDir("prefab/ui/hecheng", this.onProgressCallback.bind(this), this.onCompleteCallback.bind(this));
        }
        /** 加载进度事件 */


        onProgressCallback(finished, total, item) {
          this.data.finished = finished;
          this.data.total = total;
          var progress = finished / total;

          if (progress > this.progress) {
            this.progress = progress;
            const progressBar = this.node.getComponentInChildren(ProgressBar);

            if (progressBar) {
              // 设置进度条的进度（范围从 0 到 1）
              progressBar.progress = this.progress;
            }

            this.data.progress = Math.floor(progress * 100) + "%";
          }
        }
        /** 加载完成事件 */


        onCompleteCallback() {
          // 获取用户信息的多语言提示文本
          //this.data.prompt = oops.language.getLangByID("loading_load_player");
          (_crd && TonMgr === void 0 ? (_reportPossibleCrUseOfTonMgr({
            error: Error()
          }), TonMgr) : TonMgr).init();
        }

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=99dfd830506b8d6a7aec820c9307f9a9d00dc3d3.js.map