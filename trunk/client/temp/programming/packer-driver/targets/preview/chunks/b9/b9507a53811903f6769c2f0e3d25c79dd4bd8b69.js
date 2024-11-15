System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, Node, oops, UIID, GameEvent, EncryptUtil, TonTimerManager, BoardMgr, UtilMgr, HeChengMgr, HeChengComponent, RoleMgr, LiWuMgr, GuideMgr, ProtocolMgr, WebSocketMgr, TableIngredients, AcceleratedBuffMgr, GameUtils, FeedMgr, AcceleratedBuffMain, ShopMgr, TonGameManager, _crd, GAME_STORE_KEY, GAME_Board_KEY, DAILY_REWARD_DATA, USER_UniqueID, GAME_DEFAULT_TUZICOIN, AutoTypeEnum, TonGameMgr;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../framework/common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../framework/common/config/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEncryptUtil(extras) {
    _reporterNs.report("EncryptUtil", "../../../../extensions/oops-plugin-framework/assets/core/utils/EncryptUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonTimerManager(extras) {
    _reporterNs.report("TonTimerManager", "./TonTimerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoardMgr(extras) {
    _reporterNs.report("BoardMgr", "./BoardManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "./UtilManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeChengMgr(extras) {
    _reporterNs.report("HeChengMgr", "../hecheng/HeChengManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeChengComponent(extras) {
    _reporterNs.report("HeChengComponent", "../hecheng/HeChengComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleMgr(extras) {
    _reporterNs.report("RoleMgr", "../role/RoleManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLiWuMgr(extras) {
    _reporterNs.report("LiWuMgr", "../liwu/LiWuManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideMgr(extras) {
    _reporterNs.report("GuideMgr", "../hecheng/GuideManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocolMgr(extras) {
    _reporterNs.report("ProtocolMgr", "./ProtocolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebSocketMgr(extras) {
    _reporterNs.report("WebSocketMgr", "./WebSocketManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpReturn(extras) {
    _reporterNs.report("HttpReturn", "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableIngredients(extras) {
    _reporterNs.report("TableIngredients", "../../framework/common/table/TableIngredients", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAcceleratedBuffMgr(extras) {
    _reporterNs.report("AcceleratedBuffMgr", "../acceleratedbuff/AcceleratedBuffManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtils(extras) {
    _reporterNs.report("GameUtils", "../../../resources/libs/utils/utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFeedMgr(extras) {
    _reporterNs.report("FeedMgr", "../feed/FeedManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAcceleratedBuffMain(extras) {
    _reporterNs.report("AcceleratedBuffMain", "../acceleratedbuff/AcceleratedBuffMain", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopMgr(extras) {
    _reporterNs.report("ShopMgr", "../shop/ShopManager", _context.meta, extras);
  }

  _export("TonGameManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      UIID = _unresolved_3.UIID;
    }, function (_unresolved_4) {
      GameEvent = _unresolved_4.GameEvent;
    }, function (_unresolved_5) {
      EncryptUtil = _unresolved_5.EncryptUtil;
    }, function (_unresolved_6) {
      TonTimerManager = _unresolved_6.TonTimerManager;
    }, function (_unresolved_7) {
      BoardMgr = _unresolved_7.BoardMgr;
    }, function (_unresolved_8) {
      UtilMgr = _unresolved_8.UtilMgr;
    }, function (_unresolved_9) {
      HeChengMgr = _unresolved_9.HeChengMgr;
    }, function (_unresolved_10) {
      HeChengComponent = _unresolved_10.HeChengComponent;
    }, function (_unresolved_11) {
      RoleMgr = _unresolved_11.RoleMgr;
    }, function (_unresolved_12) {
      LiWuMgr = _unresolved_12.LiWuMgr;
    }, function (_unresolved_13) {
      GuideMgr = _unresolved_13.GuideMgr;
    }, function (_unresolved_14) {
      ProtocolMgr = _unresolved_14.ProtocolMgr;
    }, function (_unresolved_15) {
      WebSocketMgr = _unresolved_15.WebSocketMgr;
    }, function (_unresolved_16) {
      TableIngredients = _unresolved_16.TableIngredients;
    }, function (_unresolved_17) {
      AcceleratedBuffMgr = _unresolved_17.AcceleratedBuffMgr;
    }, function (_unresolved_18) {
      GameUtils = _unresolved_18.default;
    }, function (_unresolved_19) {
      FeedMgr = _unresolved_19.FeedMgr;
    }, function (_unresolved_20) {
      AcceleratedBuffMain = _unresolved_20.AcceleratedBuffMain;
    }, function (_unresolved_21) {
      ShopMgr = _unresolved_21.ShopMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b7182q/9EJGE6k6fAgzwMyZ", "TonGameManager", undefined);

      __checkObsolete__(['director', 'Node']);

      GAME_STORE_KEY = "ton_game";
      GAME_Board_KEY = "ton_board";
      DAILY_REWARD_DATA = "dailyRewardData";
      USER_UniqueID = "uniqueID";
      GAME_DEFAULT_TUZICOIN = 10000n;

      _export("AutoTypeEnum", AutoTypeEnum = /*#__PURE__*/function (AutoTypeEnum) {
        AutoTypeEnum[AutoTypeEnum["NoBuy"] = 0] = "NoBuy";
        AutoTypeEnum[AutoTypeEnum["HasBuyAndOpen"] = 1] = "HasBuyAndOpen";
        AutoTypeEnum[AutoTypeEnum["HasBuyButClose"] = 2] = "HasBuyButClose";
        return AutoTypeEnum;
      }({}));

      _export("TonGameManager", TonGameManager = class TonGameManager {
        constructor() {
          // 是否静音
          this.IsMute = false;
          // 当前播放的BGM
          this.CurBGM = 0;
          this.IsEnglish = true;
          //是否是telegram的用户
          this.IsTelegramUser = false;
          this.TGHash = "";
          this.TelegramReferrer = "";

          /** 数据版本号 */
          this.DataVersionNum = 0n;

          /** 用户 */
          this.UserId = "";

          /** 用户名字 */
          this.UserName = "";

          /** 餐厅等级 */
          this.CanTingLevel = 1;

          /** 兔子币 */
          this.TuZiCoin = 0n;

          /** 萝卜币 */
          this.CarrotCoin = 0;

          /** 餐厅收益(每秒获得的兔子币数量) */
          this.CanTingGain = 0;

          /** 餐厅收益的加成百分比 0.3为30% （通过从商城购买兔子添加） */
          this.AddtionGain = 0;

          /** 餐厅收益的加成百分比 0.3为30% （通过加速功能添加包括免费领取，直接购买和分享领取） */
          this.AcceAddtionGain_1 = 0;

          /** 每秒额外获得的兔子币 （通过加速功能添加包括免费领取，直接购买和分享领取） */
          this.AcceAddtionGain_2 = 0;

          /** 当前装备的兔子 */
          this.CurRabbitId = 0;
          this.CurRabbitAnimation = null;

          /** 当前已购买的兔子 */
          this.RabbitIdList = [];

          /** 累计获得兔子币 */
          this.TuZiTotalCoin = 0n;

          /** 累积获得萝卜币 */
          this.CarrotTotalCoin = 0;

          /** 上次回收获得的兔子币的值 */
          this.LastRecoverTuziCoin = 0;

          /** 餐厅经验 */
          this.CanTingExp = 0;

          /** 商店购买的礼盒数量 */
          this.GiftNum = 0;

          /** 自动类型 */
          this.AutoType = AutoTypeEnum.NoBuy;
          //上次存盘时间戳
          this.LastSavedTimestamp = 0;
          this.ramdonToken = "";
          this.TgBotToken = "";
          //玩家兔子币的段位
          this.rankConfId = 1;
          //玩家兔子币榜的排名
          this.tuZiCoinRankIds = 0;
          this.persist = null;
          this.save_data = {};
          this.save_data_local = {};
          this._key = null;
          this._iv = null;
          this.totaltimes = 0;
          this._tsIngredients = new (_crd && TableIngredients === void 0 ? (_reportPossibleCrUseOfTableIngredients({
            error: Error()
          }), TableIngredients) : TableIngredients)();
        }

        init() {
          (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
            error: Error()
          }), BoardMgr) : BoardMgr).setDataDefault();
          this.initKey((_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).config.game.localDataKey, (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).config.game.localDataIv);
          this.persist = new Node("TonGameManagerNode");
          director.addPersistRootNode(this.persist);

          var completeLogin = ret => {
            if (ret.isSucc) {
              var Func = (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                error: Error()
              }), UtilMgr) : UtilMgr).parseMapString(ret.res.func);

              if (Func[1] && Func[1] > 0) {
                this.AutoType = AutoTypeEnum.HasBuyButClose;
              } else {
                this.AutoType = AutoTypeEnum.NoBuy;
              }

              this.UserName = ret.res.userName;
              this.ramdonToken = ret.res.ramdonToken;
              this.LastSavedTimestamp = ret.res.serverTimeStamp / 1000;
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).timer.setServerTime(ret.res.serverTimeStamp);
              TonGameMgr.updateCarrotCoin(ret.res.carrotCoin);
              TonGameMgr.rankConfId = ret.res.rankConfId;
              TonGameMgr.tuZiCoinRankIds = ret.res.tuZiCoinRankIds;
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).LoginSuccess);
              TonGameManager.timerMgr = this.persist.addComponent(_crd && TonTimerManager === void 0 ? (_reportPossibleCrUseOfTonTimerManager({
                error: Error()
              }), TonTimerManager) : TonTimerManager);
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).message.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).UpdateBoardGrid, this.onUpdateData, this);
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).message.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).Save, this.onUpdateData, this);
              TonGameMgr.onLogin(ret.res); //建立websocket 连接

              (_crd && WebSocketMgr === void 0 ? (_reportPossibleCrUseOfWebSocketMgr({
                error: Error()
              }), WebSocketMgr) : WebSocketMgr).connectWebSocket(this.UserId);
              this.getTgBotToken();
              (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                error: Error()
              }), UtilMgr) : UtilMgr).keepScreenAwake();
            }
          }; //获取唯一账号id


          if (!this.IsTelegramUser) {
            this.UserId = this.getOrCreateUniqueID();
            this.UserName = "User_" + this.UserId.substring(0, 8);
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).storage.setUser(this.UserId);
          }

          var data = {};
          data.userID = this.UserId;
          data.channel = 1;
          data.token = "e10adc3949ba59abbe56e057f20f883e";
          /* 分享者Id */

          data.inviter = TonGameMgr.TelegramReferrer;
          var param = JSON.stringify(data); //oops.gui.toast("userid: " + data.userID + "\ninviterID:" + data.inviter, true);

          (_crd && ProtocolMgr === void 0 ? (_reportPossibleCrUseOfProtocolMgr({
            error: Error()
          }), ProtocolMgr) : ProtocolMgr).sendLogin(completeLogin, param);
        }

        onUpdateData(event, args) {
          switch (event) {
            case (_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).UpdateBoardGrid:
              this.updateCanTingGain();
              break;

            case (_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).Save:
              this.save();
              break;
          }
        }

        onLogin(serverData) {
          this.load(serverData);
        } //更新餐厅收益


        updateCanTingGain() {
          var canTingGain = 0;

          for (var index = 0; index < (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
            error: Error()
          }), BoardMgr) : BoardMgr).board.length; index++) {
            var cell = (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
              error: Error()
            }), BoardMgr) : BoardMgr).board[index];

            if (cell.SuCaiId > 0) {
              this._tsIngredients.init(cell.SuCaiId);

              canTingGain = canTingGain + this._tsIngredients.getmoney;
            }
          }

          if (canTingGain > this.CanTingGain) {
            var HechengGUI = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.get((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).MainUI);

            if (HechengGUI) {
              var HechengCom = HechengGUI.getComponent(_crd && HeChengComponent === void 0 ? (_reportPossibleCrUseOfHeChengComponent({
                error: Error()
              }), HeChengComponent) : HeChengComponent);

              if (HechengCom) {
                HechengCom.ShowCanTingGainNum();
              }
            }
          }

          this.CanTingGain = canTingGain;
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateBaseData);
        }

        GetSuCaiLevel(suCaiId) {
          this._tsIngredients.init(suCaiId);

          return this._tsIngredients.level;
        } // 获取实际餐厅收益 速率*(1+速率加成) 


        GetRealCanTingGain() {
          return Math.floor((this.CanTingGain + this.AcceAddtionGain_2) * (1 + this.AddtionGain + this.AcceAddtionGain_1) + 0.5);
        } //每1秒执行一次


        OnOneSecondUpdate() {
          var tempgain = (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).OfflineAccelerateGain(1);
          this.updateRabbitCoin(this.TuZiCoin + BigInt(tempgain));
          (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).UpdateAccelerateTime();
          (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
            error: Error()
          }), FeedMgr) : FeedMgr).UpdateNextFreeDishTime();
          var HechengGUI = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.get((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).MainUI);

          if (HechengGUI) {
            var HechengCom = HechengGUI.getComponent(_crd && HeChengComponent === void 0 ? (_reportPossibleCrUseOfHeChengComponent({
              error: Error()
            }), HeChengComponent) : HeChengComponent);

            if (HechengCom) {
              HechengCom.RefreshBuffIcon();
            }
          }

          var buffGUI = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.get((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).AcceleratedBuffBuyMain);

          if (buffGUI) {
            var buffCom = buffGUI.getComponent(_crd && AcceleratedBuffMain === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMain({
              error: Error()
            }), AcceleratedBuffMain) : AcceleratedBuffMain);

            if (buffCom) {
              buffCom.RefreshBuffIcon();
            }
          }
        } //每2秒执行一次


        OnTwoSecondUpdate() {
          (_crd && HeChengMgr === void 0 ? (_reportPossibleCrUseOfHeChengMgr({
            error: Error()
          }), HeChengMgr) : HeChengMgr).OnHandleAuto();
        } //每5秒执行一次


        OnFiveSecondUpdate() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateTuziCoin);
          this.save();
          (_crd && LiWuMgr === void 0 ? (_reportPossibleCrUseOfLiWuMgr({
            error: Error()
          }), LiWuMgr) : LiWuMgr).UpdateLiWu();
          (_crd && GuideMgr === void 0 ? (_reportPossibleCrUseOfGuideMgr({
            error: Error()
          }), GuideMgr) : GuideMgr).UpdateGuide();
          (_crd && RoleMgr === void 0 ? (_reportPossibleCrUseOfRoleMgr({
            error: Error()
          }), RoleMgr) : RoleMgr).UpdateVisitors();
        } //每10秒执行一次


        OnTenSecondUpdate() {
          (_crd && WebSocketMgr === void 0 ? (_reportPossibleCrUseOfWebSocketMgr({
            error: Error()
          }), WebSocketMgr) : WebSocketMgr).sendPing();
        } //每60秒执行一次


        OnSixtySecondUpdate() {}

        initKey(key, iv) {
          this._key = (_crd && EncryptUtil === void 0 ? (_reportPossibleCrUseOfEncryptUtil({
            error: Error()
          }), EncryptUtil) : EncryptUtil).md5(key);
          this._iv = (_crd && EncryptUtil === void 0 ? (_reportPossibleCrUseOfEncryptUtil({
            error: Error()
          }), EncryptUtil) : EncryptUtil).md5(iv);
        }

        generateUUID() {
          var pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
          return pattern.replace(/[xy]/g, c => {
            var r = Math.random() * 16 | 0;
            var v = c === 'x' ? r : r & 0x3 | 0x8;
            return v.toString(16);
          });
        }

        getOrCreateUniqueID() {
          var uniqueID = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).storage.get(USER_UniqueID);

          if (!uniqueID || uniqueID == "") {
            uniqueID = this.generateUUID();
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).storage.set(USER_UniqueID, uniqueID);
          }

          return uniqueID;
        }

        save() {
          this.DataVersionNum = this.DataVersionNum + BigInt(1);
          this.save_data.DataVersionNum = this.DataVersionNum.toString();
          this.save_data.CanTingLevel = this.CanTingLevel;
          this.save_data.TuZiCoin = this.TuZiCoin.toString();
          this.save_data.CanTingGain = this.CanTingGain;
          this.save_data.CanTingExp = this.CanTingExp;
          this.save_data.GiftNum = this.GiftNum;
          this.save_data.AddtionGain = this.AddtionGain;
          this.save_data.CurRabbitId = this.CurRabbitId;
          this.save_data.RabbitIdList = this.RabbitIdList;
          this.save_data.GetFreeBuffTimeStamp = (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).GetFreeBuffTimeStamp;
          this.save_data.IsGetFreeBuff = (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).IsGetFreeBuff;
          this.save_data.GetShareBuffTimeStamp = (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).GetShareBuffTimeStamp;
          this.save_data.IsGetShareBuff = (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).IsGetShareBuff;
          this.save_data.AcceleratedList_1 = (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).AcceleratedList_1;
          this.save_data.AcceleratedList_2 = (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).AcceleratedList_2;
          this.save_data.FreeDishId = (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
            error: Error()
          }), FeedMgr) : FeedMgr).FreeDishId;
          this.save_data.NextFreeDishTime = (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
            error: Error()
          }), FeedMgr) : FeedMgr).NextFreeDishTime;
          this.save_data.HechengMaxLevel = (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
            error: Error()
          }), FeedMgr) : FeedMgr).HechengMaxLevel;
          this.save_data.ExtDishPrice = (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
            error: Error()
          }), FeedMgr) : FeedMgr).ExtDishPrice;
          this.save_data.LastRecoverTuziCoin = TonGameMgr.LastRecoverTuziCoin;
          var currentTimestampInSeconds = Math.floor((_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).timer.getServerTime() / 1000);
          this.save_data.LastSavedTimestamp = currentTimestampInSeconds;
          this.saveToServer(this.save_data);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).storage.set(GAME_STORE_KEY, this.save_data);
          (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
            error: Error()
          }), BoardMgr) : BoardMgr).save();
        }

        saveToServer(value) {
          try {
            value = JSON.stringify(value);
          } catch (e) {
            return;
          }

          var completeSave = ret => {
            console.log(ret.res);
          };

          var data = {};
          data.userID = this.UserId;
          data.carrotCoin = this.CarrotCoin;
          data.baseData = value;
          data.boardData = (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
            error: Error()
          }), BoardMgr) : BoardMgr).getBoardListString();
          data.token = "e10adc3949ba59abbe56e057f20f883e";
          var param = JSON.stringify(data);
          (_crd && ProtocolMgr === void 0 ? (_reportPossibleCrUseOfProtocolMgr({
            error: Error()
          }), ProtocolMgr) : ProtocolMgr).sendSave(completeSave, param);
        }

        load(serverData) {
          this.loadFromServer(serverData);
        }

        loadFromServer(serverData) {
          if (serverData) {
            if (serverData.userID == this.UserId) {
              try {
                this.save_data = JSON.parse(serverData.baseData);
                this.setData();
                (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                  error: Error()
                }), BoardMgr) : BoardMgr).load(serverData);
                this.loadFromLocal();
              } catch (e) {
                this.clearLocalData();
                this.setDataDefault();
                (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                  error: Error()
                }), BoardMgr) : BoardMgr).load(serverData);
              }
            } else {
              this.setDataDefault();
            }
          } else {
            this.setDataDefault();
          }
        }

        clearLocalData() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).storage.remove(DAILY_REWARD_DATA);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).storage.remove(GAME_Board_KEY);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).storage.remove(GAME_STORE_KEY);
        }

        loadFromLocal() {
          this.save_data_local = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).storage.getJson(GAME_STORE_KEY);

          if (this.save_data_local) {
            if (this.save_data_local.DataVersionNum > this.save_data.DataVersionNum) {
              this.save_data = this.save_data_local;
              this.setData();
              (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                error: Error()
              }), BoardMgr) : BoardMgr).loadFromLocal();
            }
          }
        }

        setData() {
          this.DataVersionNum = BigInt(this.save_data.DataVersionNum);
          this.CanTingLevel = this.save_data.CanTingLevel;
          this.TuZiCoin = BigInt(this.save_data.TuZiCoin);
          this.CanTingGain = this.save_data.CanTingGain;
          this.CanTingExp = this.save_data.CanTingExp;
          this.GiftNum = this.save_data.GiftNum;
          this.AddtionGain = this.save_data.AddtionGain;

          if (!this.save_data.AddtionGain) {
            this.AddtionGain = 0;
          }

          this.CurRabbitId = this.save_data.CurRabbitId;

          if (!this.save_data.CurRabbitId) {
            this.CurRabbitId = 0;
            this.CurRabbitId = null;
          } else {
            this.CurRabbitAnimation = (_crd && ShopMgr === void 0 ? (_reportPossibleCrUseOfShopMgr({
              error: Error()
            }), ShopMgr) : ShopMgr).GetRandomAnimation(this.save_data.CurRabbitId);
          }

          this.RabbitIdList = this.save_data.RabbitIdList;

          if (!this.save_data.RabbitIdList) {
            this.RabbitIdList = [];
          }

          (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).IsGetFreeBuff = this.save_data.IsGetFreeBuff;

          if (!this.save_data.IsGetFreeBuff) {
            (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
              error: Error()
            }), AcceleratedBuffMgr) : AcceleratedBuffMgr).IsGetFreeBuff = false;
          }

          (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).GetFreeBuffTimeStamp = this.save_data.GetFreeBuffTimeStamp;

          if (!this.save_data.GetFreeBuffTimeStamp) {
            (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
              error: Error()
            }), AcceleratedBuffMgr) : AcceleratedBuffMgr).GetFreeBuffTimeStamp = 0;
          }

          (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).IsGetShareBuff = this.save_data.IsGetShareBuff;

          if (!this.save_data.IsGetShareBuff) {
            (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
              error: Error()
            }), AcceleratedBuffMgr) : AcceleratedBuffMgr).IsGetShareBuff = false;
          }

          (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).GetShareBuffTimeStamp = this.save_data.GetShareBuffTimeStamp;

          if (!this.save_data.GetShareBuffTimeStamp) {
            (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
              error: Error()
            }), AcceleratedBuffMgr) : AcceleratedBuffMgr).GetShareBuffTimeStamp = 0;
          }

          (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).AcceleratedList_1 = this.save_data.AcceleratedList_1;

          if (!this.save_data.AcceleratedList_1) {
            (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
              error: Error()
            }), AcceleratedBuffMgr) : AcceleratedBuffMgr).AcceleratedList_1 = [];
          }

          (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).AcceleratedList_2 = this.save_data.AcceleratedList_2;

          if (!this.save_data.AcceleratedList_2) {
            (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
              error: Error()
            }), AcceleratedBuffMgr) : AcceleratedBuffMgr).AcceleratedList_2 = [];
          }

          (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
            error: Error()
          }), FeedMgr) : FeedMgr).FreeDishId = this.save_data.FreeDishId;

          if (!this.save_data.FreeDishId) {
            (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
              error: Error()
            }), FeedMgr) : FeedMgr).FreeDishId = 0;
          }

          (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
            error: Error()
          }), FeedMgr) : FeedMgr).NextFreeDishTime = this.save_data.NextFreeDishTime;

          if (!this.save_data.NextFreeDishTime) {
            (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
              error: Error()
            }), FeedMgr) : FeedMgr).NextFreeDishTime = 0;
          }

          (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
            error: Error()
          }), FeedMgr) : FeedMgr).HechengMaxLevel = this.save_data.HechengMaxLevel;

          if (!this.save_data.HechengMaxLevel) {
            (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
              error: Error()
            }), FeedMgr) : FeedMgr).HechengMaxLevel = [];
          }

          (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
            error: Error()
          }), FeedMgr) : FeedMgr).ExtDishPrice = this.save_data.ExtDishPrice;

          if (!this.save_data.ExtDishPrice) {
            (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
              error: Error()
            }), FeedMgr) : FeedMgr).ExtDishPrice = [];
          }

          this.LastRecoverTuziCoin = this.save_data.LastRecoverTuziCoin;

          if (!this.save_data.LastRecoverTuziCoin) {
            this.LastRecoverTuziCoin = 0;
          }

          if (this.save_data.LastSavedTimestamp) {
            this.LastSavedTimestamp = this.save_data.LastSavedTimestamp;
          }

          if ((_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).IsGetFreeBuff) {
            var newdate = new Date((_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
              error: Error()
            }), AcceleratedBuffMgr) : AcceleratedBuffMgr).GetFreeBuffTimeStamp);
            var istoday = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).isToday(newdate);

            if (!istoday) {
              (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
                error: Error()
              }), AcceleratedBuffMgr) : AcceleratedBuffMgr).IsGetFreeBuff = false;
              (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
                error: Error()
              }), AcceleratedBuffMgr) : AcceleratedBuffMgr).GetFreeBuffTimeStamp = 0;
            }
          }

          if ((_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).IsGetShareBuff) {
            var _newdate = new Date((_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
              error: Error()
            }), AcceleratedBuffMgr) : AcceleratedBuffMgr).GetShareBuffTimeStamp);

            var _istoday = (_crd && GameUtils === void 0 ? (_reportPossibleCrUseOfGameUtils({
              error: Error()
            }), GameUtils) : GameUtils).isToday(_newdate);

            if (!_istoday) {
              (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
                error: Error()
              }), AcceleratedBuffMgr) : AcceleratedBuffMgr).IsGetShareBuff = false;
              (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
                error: Error()
              }), AcceleratedBuffMgr) : AcceleratedBuffMgr).GetShareBuffTimeStamp = 0;
            }
          } //计算离线收益


          var currentTimestampInSeconds = Math.floor((_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).timer.getServerTime() / 1000);
          var lixianTime = currentTimestampInSeconds - this.LastSavedTimestamp;
          var usetime = lixianTime;

          if (lixianTime > 14400) {
            //最多可累计4小时
            usetime = 14400;
          }

          (_crd && FeedMgr === void 0 ? (_reportPossibleCrUseOfFeedMgr({
            error: Error()
          }), FeedMgr) : FeedMgr).RefreshData(usetime); // let lixianShouyi = this.GetRealCanTingGain() * usetime;

          var lixianShouyi = (_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
            error: Error()
          }), AcceleratedBuffMgr) : AcceleratedBuffMgr).OfflineAccelerateGain(usetime);

          if (lixianShouyi > 0) {
            this.updateRabbitCoin(this.TuZiCoin + BigInt(lixianShouyi)); // 打开游戏主界面

            var params = {};
            params.LixianTime = lixianTime;
            params.LixianShouyi = lixianShouyi;
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).MainUI, params);
          } else {
            // 打开游戏主界面
            var _params = {};
            _params.LixianTime = 0;
            _params.LixianShouyi = 0;
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).MainUI, _params);
          }
        }

        setDataDefault() {
          this.save_data = {}; //初始餐厅等级

          this.CanTingLevel = 1; //初始兔子币

          this.TuZiCoin = GAME_DEFAULT_TUZICOIN;
          this.CanTingExp = 0;
          this.GiftNum = 0;
          this.AddtionGain = 0;
          this.CurRabbitId = 0;
          this.RabbitIdList = [];
          this.LastSavedTimestamp = 0; // 打开游戏主界面

          var params = {};
          params.LixianTime = 0;
          params.LixianShouyi = 0;
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).MainUI);
        }

        updateRabbitCoin(value) {
          if (value > this.TuZiTotalCoin) {
            this.TuZiTotalCoin = value;
          }

          this.TuZiCoin = value;
        }

        updateCarrotCoin(value) {
          if (value > this.CarrotTotalCoin) {
            this.CarrotTotalCoin = value;
          }

          this.CarrotCoin = value;
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateCarrotCoin);
        }

        modifyGiftNum(value) {
          this.GiftNum = this.GiftNum + value;
        } //检测是否0点


        checkMidnight() {
          var now = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).timer.getServerDate();
          var hours = now.getHours();
          var minutes = now.getMinutes(); // 如果当前时间是 00:00

          return hours === 0 && minutes === 0;
        }

        getTgBotToken() {
          var completeTgBotToken = ret => {
            if (ret.isSucc) {
              this.TgBotToken = ret.res;
            }
          };

          (_crd && ProtocolMgr === void 0 ? (_reportPossibleCrUseOfProtocolMgr({
            error: Error()
          }), ProtocolMgr) : ProtocolMgr).sendGetTgBotToken(completeTgBotToken, "");
        }

        switchLanguage() {
          if (this.IsEnglish) {
            this.IsEnglish = false;
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).language.setLanguage("zh", () => {});
          } else {
            this.IsEnglish = true;
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).language.setLanguage("en", () => {});
          }
        }

      });

      TonGameManager.timerMgr = void 0;

      _export("TonGameMgr", TonGameMgr = new TonGameManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b9507a53811903f6769c2f0e3d25c79dd4bd8b69.js.map