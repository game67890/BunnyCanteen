System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JsonUtil, ProtocolMgr, TableRadishAwardRank, UIID, oops, GameEvent, TonGameMgr, TableOtherParameter, RewardListData, CarrotManager, _crd, CarrotMgr;

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpReturn(extras) {
    _reporterNs.report("HttpReturn", "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocolMgr(extras) {
    _reporterNs.report("ProtocolMgr", "../manager/ProtocolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableRadishAwardRank(extras) {
    _reporterNs.report("TableRadishAwardRank", "../../framework/common/table/TableRadishAwardRank", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../framework/common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../framework/common/config/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonGameMgr(extras) {
    _reporterNs.report("TonGameMgr", "../manager/TonGameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableOtherParameter(extras) {
    _reporterNs.report("TableOtherParameter", "../../framework/common/table/TableOtherParameter", _context.meta, extras);
  }

  _export("CarrotManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      JsonUtil = _unresolved_2.JsonUtil;
    }, function (_unresolved_3) {
      ProtocolMgr = _unresolved_3.ProtocolMgr;
    }, function (_unresolved_4) {
      TableRadishAwardRank = _unresolved_4.TableRadishAwardRank;
    }, function (_unresolved_5) {
      UIID = _unresolved_5.UIID;
    }, function (_unresolved_6) {
      oops = _unresolved_6.oops;
    }, function (_unresolved_7) {
      GameEvent = _unresolved_7.GameEvent;
    }, function (_unresolved_8) {
      TonGameMgr = _unresolved_8.TonGameMgr;
    }, function (_unresolved_9) {
      TableOtherParameter = _unresolved_9.TableOtherParameter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a39673sutVIU4VAR+KAUA+g", "CarrotManager", undefined);

      RewardListData = class RewardListData {
        constructor() {
          this.time = 0;
          this.config = 0;
          this.speed = 0;
        }

      };

      _export("CarrotManager", CarrotManager = class CarrotManager {
        constructor() {
          /** 拔萝卜的当前排名 */
          this.CurrentCarrotRank = 0;

          /** 拔萝卜的总重量 */
          this.CurrentCarrotWeight = 0;

          /** 剩余拔萝卜的次数 */
          this.LeftTimes = 0;

          /** 是否跳过拔萝卜动画 */
          this.IsJumpAnim = false;

          /** 收到的奖励列表 */
          this.CarrotRewardList = [];
        }

        getCarrotRewardValueByID(Id) {
          let jsonTable = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get((_crd && TableRadishAwardRank === void 0 ? (_reportPossibleCrUseOfTableRadishAwardRank({
            error: Error()
          }), TableRadishAwardRank) : TableRadishAwardRank).TableName);

          if (jsonTable) {
            const record = jsonTable[Id];

            if (record) {
              return record.data;
            }
          }

          return null;
        }

        SendOpenPanel() {
          var completecpanel = ret => {
            console.log(ret.res);

            if (ret && ret.isSucc) {
              this.CurrentCarrotRank = ret.res.idx;
              this.CurrentCarrotWeight = ret.res.weight;
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).OnMyRankChange);
            }
          };

          const data = {};
          data.userID = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).UserId; // data.token = "e10adc3949ba59abbe56e057f20f883e";

          const param = JSON.stringify(data);
          (_crd && ProtocolMgr === void 0 ? (_reportPossibleCrUseOfProtocolMgr({
            error: Error()
          }), ProtocolMgr) : ProtocolMgr).sendopenluobopanel(completecpanel, param);
        }

        SendBaLuoBo(times) {
          var completeCBaLuoBo = ret => {
            console.log(ret.res);

            if (ret.isSucc && ret.res && ret.res.list) {
              console.log("SendBaLuoBo-------- : ", ret.res);

              for (let i = 0; i < ret.res.list.length; i++) {
                const item = {
                  time: ret.res.list[i].time,
                  config: ret.res.list[i].confId,
                  speed: (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                    error: Error()
                  }), TonGameMgr) : TonGameMgr).GetRealCanTingGain()
                };
                (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).updateRabbitCoin((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).TuZiCoin + BigInt((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).GetRealCanTingGain() * Number(ret.res.list[i].time) * 60));
                this.CarrotRewardList.push(item);
              }

              this.CurrentCarrotRank = ret.res.idx;
              this.CurrentCarrotWeight = ret.res.weight;
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).OnMyRankChange);
              let tablerecord = new (_crd && TableOtherParameter === void 0 ? (_reportPossibleCrUseOfTableOtherParameter({
                error: Error()
              }), TableOtherParameter) : TableOtherParameter)();
              tablerecord.init(1);
              (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).updateCarrotCoin((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).CarrotCoin - Number(tablerecord.parameter) * ret.res.list.length);
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                error: Error()
              }), UIID) : UIID).CarrotReward);
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).UpdateBaseData);
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).UpdateTuziCoin);
            }
          };

          const data = {};
          data.times = times.toString();
          data.userID = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).UserId; // data.token = "e10adc3949ba59abbe56e057f20f883e";

          const param = JSON.stringify(data);
          (_crd && ProtocolMgr === void 0 ? (_reportPossibleCrUseOfProtocolMgr({
            error: Error()
          }), ProtocolMgr) : ProtocolMgr).sendcbaluobo(completeCBaLuoBo, param);
        }

        SendOpenRankPanel() {
          var completeCRankPanel = ret => {
            console.log(ret.res);

            if (ret.isSucc && ret.res && ret.res.list) {
              console.log("SendOpenRankPanel-------- : ", ret.res);
              let paramas = {};

              if (ret.res.list.length > 0) {
                paramas.rankitemlist = ret.res.list;
              }

              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                error: Error()
              }), UIID) : UIID).CarrotRank, paramas);
            }
          };

          const data = {};
          data.userID = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).UserId; // data.token = "e10adc3949ba59abbe56e057f20f883e";

          const param = JSON.stringify(data);
          (_crd && ProtocolMgr === void 0 ? (_reportPossibleCrUseOfProtocolMgr({
            error: Error()
          }), ProtocolMgr) : ProtocolMgr).sendcrankpanel(completeCRankPanel, param);
        }

      });

      _export("CarrotMgr", CarrotMgr = new CarrotManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4efbce65d4612a5326535430b36d62b70d45d91f.js.map