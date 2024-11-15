System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, _decorator, Component, Node, Label, Prefab, instantiate, Vec3, tween, oops, UIID, GameEvent, TonGameMgr, AutoTypeEnum, HeChengMgr, UtilMgr, BoardMgr, GAME_GRID_SIZE, GridComponent, FlyComponent, DiningTableMgr, Button, UITransform, Sprite, TableShop, PaymentMgr, RankMgr, TaskMgr, RoleComponent, AcceleratedBuffMgr, FeedMgr, IniviteMgr, TableRestaurantlevel, TableIngredients, TableOtherParameter, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _crd, ccclass, property, startX, startY, gridSpacing, tableStartX, tableStartY, tableSpacing, HeChengComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../framework/common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../framework/common/config/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonGameMgr(extras) {
    _reporterNs.report("TonGameMgr", "../manager/TonGameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutoTypeEnum(extras) {
    _reporterNs.report("AutoTypeEnum", "../manager/TonGameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeChengMgr(extras) {
    _reporterNs.report("HeChengMgr", "./HeChengManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoardMgr(extras) {
    _reporterNs.report("BoardMgr", "../manager/BoardManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGAME_GRID_SIZE(extras) {
    _reporterNs.report("GAME_GRID_SIZE", "../manager/BoardManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridComponent(extras) {
    _reporterNs.report("GridComponent", "./GridComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFlyComponent(extras) {
    _reporterNs.report("FlyComponent", "../contact/FlyComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDiningTableMgr(extras) {
    _reporterNs.report("DiningTableMgr", "../diningtable/DiningTableManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableShop(extras) {
    _reporterNs.report("TableShop", "../../framework/common/table/TableShop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPaymentMgr(extras) {
    _reporterNs.report("PaymentMgr", "../payment/PaymentManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRankMgr(extras) {
    _reporterNs.report("RankMgr", "../rank/RankManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskMgr(extras) {
    _reporterNs.report("TaskMgr", "../task/TaskManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleComponent(extras) {
    _reporterNs.report("RoleComponent", "../role/RoleComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAcceleratedBuffMgr(extras) {
    _reporterNs.report("AcceleratedBuffMgr", "../acceleratedbuff/AcceleratedBuffManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFeedMgr(extras) {
    _reporterNs.report("FeedMgr", "../feed/FeedManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIniviteMgr(extras) {
    _reporterNs.report("IniviteMgr", "../invite/InviteManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableRestaurantlevel(extras) {
    _reporterNs.report("TableRestaurantlevel", "../../framework/common/table/TableRestaurantlevel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableIngredients(extras) {
    _reporterNs.report("TableIngredients", "../../framework/common/table/TableIngredients", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableOtherParameter(extras) {
    _reporterNs.report("TableOtherParameter", "../../framework/common/table/TableOtherParameter", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Animation = _cc.Animation;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Label = _cc.Label;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      Button = _cc.Button;
      UITransform = _cc.UITransform;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      UIID = _unresolved_3.UIID;
    }, function (_unresolved_4) {
      GameEvent = _unresolved_4.GameEvent;
    }, function (_unresolved_5) {
      TonGameMgr = _unresolved_5.TonGameMgr;
      AutoTypeEnum = _unresolved_5.AutoTypeEnum;
    }, function (_unresolved_6) {
      HeChengMgr = _unresolved_6.HeChengMgr;
    }, function (_unresolved_7) {
      UtilMgr = _unresolved_7.UtilMgr;
    }, function (_unresolved_8) {
      BoardMgr = _unresolved_8.BoardMgr;
      GAME_GRID_SIZE = _unresolved_8.GAME_GRID_SIZE;
    }, function (_unresolved_9) {
      GridComponent = _unresolved_9.GridComponent;
    }, function (_unresolved_10) {
      FlyComponent = _unresolved_10.FlyComponent;
    }, function (_unresolved_11) {
      DiningTableMgr = _unresolved_11.DiningTableMgr;
    }, function (_unresolved_12) {
      TableShop = _unresolved_12.TableShop;
    }, function (_unresolved_13) {
      PaymentMgr = _unresolved_13.PaymentMgr;
    }, function (_unresolved_14) {
      RankMgr = _unresolved_14.RankMgr;
    }, function (_unresolved_15) {
      TaskMgr = _unresolved_15.TaskMgr;
    }, function (_unresolved_16) {
      RoleComponent = _unresolved_16.RoleComponent;
    }, function (_unresolved_17) {
      AcceleratedBuffMgr = _unresolved_17.AcceleratedBuffMgr;
    }, function (_unresolved_18) {
      FeedMgr = _unresolved_18.FeedMgr;
    }, function (_unresolved_19) {
      IniviteMgr = _unresolved_19.IniviteMgr;
    }, function (_unresolved_20) {
      TableRestaurantlevel = _unresolved_20.TableRestaurantlevel;
    }, function (_unresolved_21) {
      TableIngredients = _unresolved_21.TableIngredients;
    }, function (_unresolved_22) {
      TableOtherParameter = _unresolved_22.TableOtherParameter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "22385SWDg1BTZqIcHJalj6f", "HeChengComponent", undefined);

      __checkObsolete__(['Animation', 'AnimationClip', '_decorator', 'Component', 'Node', 'Label', 'Prefab', 'instantiate', 'Vec3', 'Vec2', 'view', 'ResolutionPolicy', 'tween']);

      __checkObsolete__(['Button']);

      __checkObsolete__(['UITransform']);

      __checkObsolete__(['Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      startX = -224;
      startY = 152;
      gridSpacing = 0; // 格子间距

      tableStartX = -160;
      tableStartY = 185;
      tableSpacing = 0; // 格子间距

      _export("HeChengComponent", HeChengComponent = (_dec = ccclass('HeChengComponent'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Sprite), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Sprite), _dec15 = property(Label), _dec16 = property(Prefab), _dec17 = property(Node), _dec18 = property(Prefab), _dec19 = property(Prefab), _dec20 = property(Node), _dec21 = property(Prefab), _dec22 = property(Node), _dec23 = property(Prefab), _dec24 = property(Node), _dec25 = property(Prefab), _dec26 = property(Node), _dec27 = property(Button), _dec28 = property(Sprite), _dec29 = property(Sprite), _dec30 = property(Sprite), _dec31 = property(Sprite), _dec32 = property(Sprite), _dec33 = property(Sprite), _dec34 = property(Label), _dec35 = property(Node), _dec36 = property(Node), _dec37 = property(Node), _dec38 = property(Node), _dec39 = property(Node), _dec40 = property(Label), _dec(_class = (_class2 = class HeChengComponent extends Component {
        constructor(...args) {
          super(...args);

          /** 充值 */
          _initializerDefineProperty(this, "PayLabel", _descriptor, this);

          /** 任务 */
          _initializerDefineProperty(this, "TaskLabel", _descriptor2, this);

          /** 制作 */
          _initializerDefineProperty(this, "MakeLabel", _descriptor3, this);

          /** 制作需要消耗的兔子币 */
          _initializerDefineProperty(this, "MakeNeedTuziCoin", _descriptor4, this);

          /** 制作生成的素材等级 */
          _initializerDefineProperty(this, "MakeSucaiImage", _descriptor5, this);

          /** 菜场 */
          _initializerDefineProperty(this, "FoodMarketLabel", _descriptor6, this);

          /** 邀请 */
          _initializerDefineProperty(this, "InviteLabel", _descriptor7, this);

          /** 购买 */
          _initializerDefineProperty(this, "BuyLabel", _descriptor8, this);

          /** 拔萝卜 */
          _initializerDefineProperty(this, "BaluoboLabel", _descriptor9, this);

          /** 餐厅等级背景图片 */
          _initializerDefineProperty(this, "CanTingLevelBack", _descriptor10, this);

          /** 餐厅等级 */
          _initializerDefineProperty(this, "CanTingLevel", _descriptor11, this);

          /** 兔子币 */
          _initializerDefineProperty(this, "TuZiCoin", _descriptor12, this);

          /** 兔子币图标 */
          _initializerDefineProperty(this, "TuZiCoinImage", _descriptor13, this);

          /** 餐厅收益 */
          _initializerDefineProperty(this, "CanTingGain", _descriptor14, this);

          /** 棋盘格子的预制体 */
          _initializerDefineProperty(this, "gridPrefab", _descriptor15, this);

          /** 棋盘的父窗口 */
          _initializerDefineProperty(this, "gridParentNode", _descriptor16, this);

          /** 引导的预制体 */
          _initializerDefineProperty(this, "guidePrefab", _descriptor17, this);

          /** 桌子的预制体 */
          _initializerDefineProperty(this, "tablePrefab", _descriptor18, this);

          /** 桌子的父窗口 */
          _initializerDefineProperty(this, "tableParentNode", _descriptor19, this);

          /** 角色的预制体 */
          _initializerDefineProperty(this, "rolePrefab", _descriptor20, this);

          /** 角色的父窗口 */
          _initializerDefineProperty(this, "roleParentNode", _descriptor21, this);

          /** 礼物的预制体 */
          _initializerDefineProperty(this, "liwuPrefab", _descriptor22, this);

          /** 礼物的父窗口 */
          _initializerDefineProperty(this, "liwuParentNode", _descriptor23, this);

          /** 兔子币的预制体 */
          _initializerDefineProperty(this, "tuziCoinPrefab", _descriptor24, this);

          /** 礼物的父窗口 */
          _initializerDefineProperty(this, "tuziCoinParentNode", _descriptor25, this);

          /** 拔萝卜按钮 */
          _initializerDefineProperty(this, "PullCarrotsBtn", _descriptor26, this);

          /** 兔子icon */
          _initializerDefineProperty(this, "RabbitIcon", _descriptor27, this);

          /** 加速icon */
          _initializerDefineProperty(this, "buffIcon", _descriptor28, this);

          /** 加速红点icon */
          _initializerDefineProperty(this, "buffRedIcon", _descriptor29, this);

          /** 喂食按钮红点icon */
          _initializerDefineProperty(this, "FeedRedIcon", _descriptor30, this);

          /** 静音按钮icon */
          _initializerDefineProperty(this, "MuteBtnIcon", _descriptor31, this);

          /** 排行榜段位图标 */
          _initializerDefineProperty(this, "rankIcon", _descriptor32, this);

          /** 排行榜排名 */
          _initializerDefineProperty(this, "rankNum", _descriptor33, this);

          /** 自动按钮(静态按钮不带动画)*/
          _initializerDefineProperty(this, "autoBtnDefault", _descriptor34, this);

          /** 自动按钮(带动画) */
          _initializerDefineProperty(this, "autoBtnEffect", _descriptor35, this);

          /** 自动按钮(播放动画的控件) */
          _initializerDefineProperty(this, "autoEffect", _descriptor36, this);

          /** 正常的底框 */
          _initializerDefineProperty(this, "normalBottom", _descriptor37, this);

          /** 回收的底框 */
          _initializerDefineProperty(this, "huishouBottom", _descriptor38, this);

          /** 回收的文字 */
          _initializerDefineProperty(this, "huishouText", _descriptor39, this);

          this.board = [];
          this.gridWidth = 150;
          // 格子宽
          this.gridHeight = 100;
          // 格子高
          this.tableWidth = 200;
          // 桌子宽
          this.tableHeight = 150;
          // 桌子高
          this._tsRestaurantlevel = new (_crd && TableRestaurantlevel === void 0 ? (_reportPossibleCrUseOfTableRestaurantlevel({
            error: Error()
          }), TableRestaurantlevel) : TableRestaurantlevel)();
          this._tsIngredients = new (_crd && TableIngredients === void 0 ? (_reportPossibleCrUseOfTableIngredients({
            error: Error()
          }), TableIngredients) : TableIngredients)();
          this.tableOtherParameter = new (_crd && TableOtherParameter === void 0 ? (_reportPossibleCrUseOfTableOtherParameter({
            error: Error()
          }), TableOtherParameter) : TableOtherParameter)();
          this.tableShop = new (_crd && TableShop === void 0 ? (_reportPossibleCrUseOfTableShop({
            error: Error()
          }), TableShop) : TableShop)();
          this.tuziCoinCount = 10;
        }

        start() {}

        update(deltaTime) {}

        onAdded(params) {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).onAudioCompleteCallback();
          this.init();
          this.addEvent();
          this.createGrid();
          this.createTable();

          if (params.LixianShouyi > 0) {
            // 打开收益主界面
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).ShouYiUI, params);
          } //this.preLoadPrefab();


          return true;
        }

        preLoadPrefab() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.preLoad((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).Task);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.preLoad((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).Rank);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.preLoad((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).PaymentUI);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.preLoad((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).CarrotMain);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.preLoad((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).CarrotRank);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.preLoad((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).ShopMain);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.preLoad((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).AcceleratedBuffBuyMain);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.preLoad((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).FeedMain);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.preLoad((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).InviteMain);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.preLoad((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).InviteAcivity);
        }

        init() {
          this.updateBaseData();
          this.updateTuziCoin();
          this.updateRankData();
          this.RefreshRabbitIcon();
          this.RefreshBuffIcon();
          this.RefreshFeedRed();
          this.RefreshMuteBtn();
          this.RefreshAutoBtn();
        }

        onDestroy() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).StopBgMusic();
          this.removeEvent();
        }
        /** 添加全局消息事件 */


        addEvent() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateBaseData, this.onUpdateData, this);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateTuziCoin, this.onUpdateData, this);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateBoardGrid, this.onUpdateData, this);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).OnAutoHecheng, this.onUpdateData, this);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateAutoBtn, this.onUpdateData, this);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateHuishouBtn, this.onUpdateData, this);
        }
        /** 移除全局消息事件 */


        removeEvent() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateBaseData, this.onUpdateData, this);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateTuziCoin, this.onUpdateData, this);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateBoardGrid, this.onUpdateData, this);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).OnAutoHecheng, this.onUpdateData, this);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateAutoBtn, this.onUpdateData, this);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateHuishouBtn, this.onUpdateData, this);
        }

        onUpdateData(event, args) {
          switch (event) {
            case (_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).UpdateBaseData:
              this.updateBaseData();
              break;

            case (_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).UpdateTuziCoin:
              this.updateTuziCoin();
              break;

            case (_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).UpdateBoardGrid:
              this.updateGrid();
              break;

            case (_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).OnAutoHecheng:
              this.onAutoHecheng(args);
              break;

            case (_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).UpdateAutoBtn:
              this.RefreshAutoBtn();
              break;

            case (_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).UpdateHuishouBtn:
              this.RefreshHuishouBtn();
              break;
          }
        }

        updateBaseData() {
          this.PayLabel.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_105");
          this.TaskLabel.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_106");
          this.MakeLabel.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_001");
          this.FoodMarketLabel.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_107");
          this.InviteLabel.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_108"); //this.AutoLabel.string = oops.language.getLangByID("stringres_020");

          this.BuyLabel.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_109");
          this.BaluoboLabel.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_110");
          this.CanTingLevel.string = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CanTingLevel.toString();
          this.CanTingGain.string = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).GetRealCanTingGain().toString() + "/s";

          this._tsRestaurantlevel.init((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CanTingLevel);

          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).SetImage(this.CanTingLevelBack, this._tsRestaurantlevel.picture);
          let NeedCoin = (_crd && HeChengMgr === void 0 ? (_reportPossibleCrUseOfHeChengMgr({
            error: Error()
          }), HeChengMgr) : HeChengMgr).GetMakeSucaiCost();
          this.MakeNeedTuziCoin.string = (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).formatNumber(BigInt(NeedCoin));
          let IngredientsId = (_crd && HeChengMgr === void 0 ? (_reportPossibleCrUseOfHeChengMgr({
            error: Error()
          }), HeChengMgr) : HeChengMgr).GetSucaiIdByCanTingLv((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CanTingLevel);

          if (IngredientsId > 0) {
            this._tsIngredients.init(IngredientsId);

            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).SetImage(this.MakeSucaiImage, this._tsIngredients.picture);
          }
        }

        updateTuziCoin() {
          this.TuZiCoin.string = (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).formatNumber((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).TuZiCoin);
        }

        updateRankData() {
          let RankData = (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
            error: Error()
          }), RankMgr) : RankMgr).GetRankDataByLevel((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).rankConfId);

          if (RankData) {
            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).SetImage(this.rankIcon, RankData.smallrankicon);

            if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).tuZiCoinRankIds > 0) {
              if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).tuZiCoinRankIds == 1) {
                this.rankNum.string = "1st";
              } else if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).tuZiCoinRankIds == 2) {
                this.rankNum.string = "2nd";
              } else if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).tuZiCoinRankIds == 3) {
                this.rankNum.string = "3rd";
              } else {
                this.rankNum.string = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).tuZiCoinRankIds + "th";
              }
            } else {
              this.rankNum.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).language.getLangByID("stringres_206");
            }
          }
        }

        RefreshRabbitIcon() {
          if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CurRabbitId <= 0) {
            this.tableOtherParameter.init(8);
            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).addNodeAnimation(this.tableOtherParameter.parameter, this.RabbitIcon.node);
          } else {
            this.tableShop.init((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).CurRabbitId); // 兔子造型图标

            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).addNodeAnimation((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).CurRabbitAnimation, this.RabbitIcon.node);
          }
        }

        RefreshBuffIcon() {
          this.buffRedIcon.node.active = !(_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).IsGetFreeBuff;
          let animCtrl = this.buffIcon.getComponent(Animation);

          if ((_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).isAccelerating()) {
            this.buffIcon.node.active = true;

            if (!animCtrl || !animCtrl.defaultClip || !animCtrl.getState(animCtrl.defaultClip.name) || !animCtrl.getState(animCtrl.defaultClip.name).isPlaying) {
              (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                error: Error()
              }), UtilMgr) : UtilMgr).addNodeAnimation("animation/jiasu", this.buffIcon.node, true, true);
            }
          } else {
            this.buffIcon.node.active = false;

            if (animCtrl) {
              animCtrl.stop();
            }
          }
        }

        RefreshFeedRed() {
          this.FeedRedIcon.node.active = (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
            error: Error()
          }), FeedMgr) : FeedMgr).FreeDishId > 0;
        }

        RefreshMuteBtn() {
          if (!(_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).IsMute) {
            this.tableOtherParameter.init(10);
          } else {
            this.tableOtherParameter.init(11);
          }

          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).SetImage(this.MuteBtnIcon, this.tableOtherParameter.parameter);
        }

        RefreshAutoBtn() {
          if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).AutoType == (_crd && AutoTypeEnum === void 0 ? (_reportPossibleCrUseOfAutoTypeEnum({
            error: Error()
          }), AutoTypeEnum) : AutoTypeEnum).NoBuy) {
            this.autoBtnDefault.active = true;
            this.autoBtnEffect.active = false;
          } else if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).AutoType == (_crd && AutoTypeEnum === void 0 ? (_reportPossibleCrUseOfAutoTypeEnum({
            error: Error()
          }), AutoTypeEnum) : AutoTypeEnum).HasBuyAndOpen) {
            this.autoBtnDefault.active = false;
            this.autoBtnEffect.active = true;
            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).addNodeAnimation("animation/zidong", this.autoEffect);
          } else if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).AutoType == (_crd && AutoTypeEnum === void 0 ? (_reportPossibleCrUseOfAutoTypeEnum({
            error: Error()
          }), AutoTypeEnum) : AutoTypeEnum).HasBuyButClose) {
            this.autoBtnDefault.active = true;
            this.autoBtnEffect.active = false;
          }
        }

        RefreshHuishouBtn() {
          if ((_crd && HeChengMgr === void 0 ? (_reportPossibleCrUseOfHeChengMgr({
            error: Error()
          }), HeChengMgr) : HeChengMgr).IsDraging) {
            this.normalBottom.active = false;
            this.huishouBottom.active = true;
            this.huishouText.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).language.getLangByID("stringres_203");
          } else {
            this.normalBottom.active = true;
            this.huishouBottom.active = false;
          }
        }
        /** 回收 */


        onHuiShou() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          (_crd && HeChengMgr === void 0 ? (_reportPossibleCrUseOfHeChengMgr({
            error: Error()
          }), HeChengMgr) : HeChengMgr).onHuiShou();
        } //排行榜


        onRank() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
            error: Error()
          }), RankMgr) : RankMgr).OpenRankUI();
        }
        /** 充值 */


        onChongZhi() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          (_crd && PaymentMgr === void 0 ? (_reportPossibleCrUseOfPaymentMgr({
            error: Error()
          }), PaymentMgr) : PaymentMgr).OpenPaymentUI();
        }
        /** 任务 */


        onTask() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          (_crd && TaskMgr === void 0 ? (_reportPossibleCrUseOfTaskMgr({
            error: Error()
          }), TaskMgr) : TaskMgr).OpenTaskUI();
        }
        /** 采购 */


        onCaiGou() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(21);
          (_crd && HeChengMgr === void 0 ? (_reportPossibleCrUseOfHeChengMgr({
            error: Error()
          }), HeChengMgr) : HeChengMgr).onCaiGou(false);
        }
        /** 自动 */


        onAuto() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          (_crd && HeChengMgr === void 0 ? (_reportPossibleCrUseOfHeChengMgr({
            error: Error()
          }), HeChengMgr) : HeChengMgr).onAuto();
        }
        /** 拔萝卜 */


        onPullCarrots() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          (_crd && HeChengMgr === void 0 ? (_reportPossibleCrUseOfHeChengMgr({
            error: Error()
          }), HeChengMgr) : HeChengMgr).onGotoCarrots();
        }
        /** 打开商店 */


        onShopOpen() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).ShopMain);
        }
        /** 打开加速界面 */


        onOpenAccelerate() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).AcceleratedBuffBuyMain);
        }
        /** 打开喂食界面 */


        onOpenFeedMain() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).FeedMain);
        }
        /** 打开邀请界面 */


        onOpenInviteMain() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          (_crd && IniviteMgr === void 0 ? (_reportPossibleCrUseOfIniviteMgr({
            error: Error()
          }), IniviteMgr) : IniviteMgr).onOpenInviteMain();
        }
        /** 点击静音按钮 */


        onMuteBtnClick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).IsMute = !(_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).IsMute;
          this.RefreshMuteBtn();
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).audio.switchEffect = !(_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).IsMute;
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).audio.switchMusic = !(_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).IsMute;

          if (!(_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).IsMute) {
            if ((_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
              error: Error()
            }), AcceleratedBuffMgr) : AcceleratedBuffMgr).isAccelerating()) {
              (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                error: Error()
              }), UtilMgr) : UtilMgr).PlayBgMusic(23);
            } else {
              (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                error: Error()
              }), UtilMgr) : UtilMgr).PlayBgMusic(22);
            }
          }
        }

        createGrid() {
          let gridUITransform = this.gridPrefab.data.getComponent(UITransform);

          if (gridUITransform) {
            this.gridWidth = gridUITransform.width;
            this.gridHeight = gridUITransform.height;
          }

          for (let row = 0; row < (_crd && GAME_GRID_SIZE === void 0 ? (_reportPossibleCrUseOfGAME_GRID_SIZE({
            error: Error()
          }), GAME_GRID_SIZE) : GAME_GRID_SIZE); row++) {
            for (let col = 0; col < (_crd && GAME_GRID_SIZE === void 0 ? (_reportPossibleCrUseOfGAME_GRID_SIZE({
              error: Error()
            }), GAME_GRID_SIZE) : GAME_GRID_SIZE); col++) {
              const grid = instantiate(this.gridPrefab);
              grid.parent = this.gridParentNode;
              grid.setPosition(startX + col * (this.gridWidth + gridSpacing), startY - row * (this.gridHeight + gridSpacing)); // 计算格子位置

              const gridComponent = grid.getComponent(_crd && GridComponent === void 0 ? (_reportPossibleCrUseOfGridComponent({
                error: Error()
              }), GridComponent) : GridComponent);

              if (gridComponent) {
                gridComponent.setVisible(false);
              }

              this.board.push(grid);
            }
          }

          this.updateGrid();
        }

        getGridNode(index) {
          if (index >= 0 && index < this.board.length) {
            return this.board[index];
          }

          return null;
        }

        updateGrid() {
          for (let index = 0; index < this.board.length; index++) {
            const cell = this.board[index];

            if ((_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
              error: Error()
            }), BoardMgr) : BoardMgr).board && (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
              error: Error()
            }), BoardMgr) : BoardMgr).board[index]) {
              const gridComponent = cell.getComponent(_crd && GridComponent === void 0 ? (_reportPossibleCrUseOfGridComponent({
                error: Error()
              }), GridComponent) : GridComponent);

              if (gridComponent) {
                gridComponent.index = index;

                if ((_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                  error: Error()
                }), BoardMgr) : BoardMgr).board[index].SuCaiId > 0) {
                  gridComponent.setVisible(true);
                  gridComponent.setLiwuVisible(false);
                  gridComponent.setLevel((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                    error: Error()
                  }), TonGameMgr) : TonGameMgr).GetSuCaiLevel((_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                    error: Error()
                  }), BoardMgr) : BoardMgr).board[index].SuCaiId));
                } else {
                  gridComponent.setVisible(false);

                  if ((_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                    error: Error()
                  }), BoardMgr) : BoardMgr).board[index].IsLiWu && !(_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                    error: Error()
                  }), BoardMgr) : BoardMgr).board[index].IsLiWuFlying) {
                    gridComponent.setLiwuVisible(true);
                  } else {
                    gridComponent.setLiwuVisible(false);
                  }
                }
              }
            }
          }
        }

        onAutoHecheng(args) {
          let SrcIndex = args.SrcIndex;
          let DestIndex = args.DestIndex;

          if (this.board && this.board[SrcIndex] && this.board[DestIndex]) {
            const srcCell = this.board[SrcIndex];
            const gridFlyComponent = srcCell.getComponentInChildren(_crd && FlyComponent === void 0 ? (_reportPossibleCrUseOfFlyComponent({
              error: Error()
            }), FlyComponent) : FlyComponent);

            if (gridFlyComponent) {
              console.log("Fly src=" + SrcIndex + " dest=" + DestIndex);
              (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                error: Error()
              }), BoardMgr) : BoardMgr).InDragIndex = SrcIndex;
              let srcCol = Math.floor(SrcIndex % 4);
              let destCol = Math.floor(DestIndex % 4);
              let srcRow = Math.floor(SrcIndex / 4);
              let destRow = Math.floor(DestIndex / 4);
              let TargetX = (destCol - srcCol) * (this.gridWidth + gridSpacing);
              let TargetY = (srcRow - destRow) * (this.gridHeight + gridSpacing);
              gridFlyComponent.beginFly(SrcIndex, DestIndex, TargetX, TargetY);
            }
          }
        }

        createRole() {
          const role = instantiate(this.rolePrefab);
          role.parent = this.roleParentNode;
          const halfRoleHeight = role.getComponent(UITransform).height / 2;
          role.setPosition(50, -halfRoleHeight);
          const roleComponent = role.getComponent(_crd && RoleComponent === void 0 ? (_reportPossibleCrUseOfRoleComponent({
            error: Error()
          }), RoleComponent) : RoleComponent);

          if (roleComponent) {
            roleComponent.Init();
          }

          return role;
        }

        createTable() {
          let tableUITransform = this.tablePrefab.data.getComponent(UITransform);

          if (tableUITransform) {
            this.tableWidth = tableUITransform.width;
            this.tableHeight = tableUITransform.height;
          }

          for (let row = 0; row < 2; row++) {
            for (let col = 0; col < 2; col++) {
              const table = instantiate(this.tablePrefab);
              table.parent = this.tableParentNode;
              table.setPosition(tableStartX + col * (this.tableWidth + tableSpacing), tableStartY - row * this.tableHeight); // 计算格子位置

              (_crd && DiningTableMgr === void 0 ? (_reportPossibleCrUseOfDiningTableMgr({
                error: Error()
              }), DiningTableMgr) : DiningTableMgr).AddTable(table);
            }
          }
        }

        createLiwu() {
          const liwu = instantiate(this.liwuPrefab);
          liwu.parent = this.liwuParentNode; //liwu.setSiblingIndex(1);

          return liwu;
        }

        createTuziCoin(RoleNode) {
          for (let i = 0; i < this.tuziCoinCount; i++) {
            // 实例化金币
            const coin = instantiate(this.tuziCoinPrefab);
            coin.parent = this.tuziCoinParentNode; // 设置初始位置

            coin.setPosition(RoleNode.getPosition()); // 添加一个随机偏移，使金币生成位置有一定范围

            const offset = new Vec3((Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100, 0);
            const randomStartPosition = RoleNode.getPosition().add(offset);
            coin.setPosition(randomStartPosition); // 创建飞行动画

            tween(coin).to(1.2, {
              position: this.getPositionInParent(coin)
            }, {
              easing: 'sineOut'
            }).call(() => {
              // 到达目标位置后销毁金币
              coin.destroy();
            }).start();
          }

          setTimeout(() => {
            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).PlaySoundEffect(3);
          }, 1000);
        }

        getPositionInParent(CoinNode) {
          let TuziCoinPos = this.TuZiCoinImage.node.getPosition();
          const worldPos = this.TuZiCoinImage.node.parent.getComponent(UITransform).convertToWorldSpaceAR(TuziCoinPos);
          return CoinNode.parent.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
        }

        ShowCanTingGainNum() {
          let originalScale = new Vec3(1, 1, 1);
          let TempScale = new Vec3(1, 1, 1);
          const scaleUp = TempScale.multiplyScalar(1.2); // 放大20%
          // 使用 tween 动画实现放大和缩小效果

          tween(this.CanTingGain.node).to(0.2, {
            scale: scaleUp
          }) // 放大到1.2倍，持续0.2秒
          .to(0.2, {
            scale: originalScale
          }) // 缩小回原始比例，持续0.2秒
          .start();
        }

        createGuide() {
          const guide = instantiate(this.guidePrefab);
          guide.parent = this.gridParentNode;
          return guide;
        }

        ShowSucaiSelect(isShow, curIndex) {
          if (isShow) {
            let SuCaiId = (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
              error: Error()
            }), BoardMgr) : BoardMgr).board[curIndex].SuCaiId;

            if (SuCaiId > 0) {
              for (let index = 0; index < this.board.length; index++) {
                const cell = this.board[index];

                if ((_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                  error: Error()
                }), BoardMgr) : BoardMgr).board && (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                  error: Error()
                }), BoardMgr) : BoardMgr).board[index] && curIndex != index && (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                  error: Error()
                }), BoardMgr) : BoardMgr).board[index].SuCaiId == SuCaiId) {
                  const gridComponent = cell.getComponent(_crd && GridComponent === void 0 ? (_reportPossibleCrUseOfGridComponent({
                    error: Error()
                  }), GridComponent) : GridComponent);

                  if (gridComponent) {
                    gridComponent.setSelectVisible(true);
                  }
                }
              }
            }
          } else {
            for (let index = 0; index < this.board.length; index++) {
              const cell = this.board[index];

              if ((_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                error: Error()
              }), BoardMgr) : BoardMgr).board && (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                error: Error()
              }), BoardMgr) : BoardMgr).board[index]) {
                const gridComponent = cell.getComponent(_crd && GridComponent === void 0 ? (_reportPossibleCrUseOfGridComponent({
                  error: Error()
                }), GridComponent) : GridComponent);

                if (gridComponent) {
                  gridComponent.setSelectVisible(false);
                }
              }
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "PayLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "TaskLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "MakeLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "MakeNeedTuziCoin", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "MakeSucaiImage", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "FoodMarketLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "InviteLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "BuyLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "BaluoboLabel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "CanTingLevelBack", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "CanTingLevel", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "TuZiCoin", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "TuZiCoinImage", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "CanTingGain", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "gridPrefab", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "gridParentNode", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "guidePrefab", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "tablePrefab", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "tableParentNode", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "rolePrefab", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "roleParentNode", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "liwuPrefab", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "liwuParentNode", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "tuziCoinPrefab", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "tuziCoinParentNode", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "PullCarrotsBtn", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "RabbitIcon", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "buffIcon", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "buffRedIcon", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "FeedRedIcon", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "MuteBtnIcon", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "rankIcon", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "rankNum", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "autoBtnDefault", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "autoBtnEffect", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "autoEffect", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "normalBottom", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "huishouBottom", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "huishouText", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b2990d9c22e3a189c10595b54a7be31548b9673f.js.map