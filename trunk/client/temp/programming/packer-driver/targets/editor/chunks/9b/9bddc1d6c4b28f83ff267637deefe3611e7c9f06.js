System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, oops, UIID, TableRank, JsonUtil, ProtocolMgr, TonGameMgr, RankManager, _crd, RankMgr;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../framework/common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableRank(extras) {
    _reporterNs.report("TableRank", "../../framework/common/table/TableRank", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocolMgr(extras) {
    _reporterNs.report("ProtocolMgr", "../manager/ProtocolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpReturn(extras) {
    _reporterNs.report("HttpReturn", "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonGameMgr(extras) {
    _reporterNs.report("TonGameMgr", "../manager/TonGameManager", _context.meta, extras);
  }

  _export("RankManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      UIID = _unresolved_3.UIID;
    }, function (_unresolved_4) {
      TableRank = _unresolved_4.TableRank;
    }, function (_unresolved_5) {
      JsonUtil = _unresolved_5.JsonUtil;
    }, function (_unresolved_6) {
      ProtocolMgr = _unresolved_6.ProtocolMgr;
    }, function (_unresolved_7) {
      TonGameMgr = _unresolved_7.TonGameMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f006dQLAfZNYbnFM3Nzze25", "RankManager", undefined);

      _export("RankManager", RankManager = class RankManager {
        constructor() {
          this._tsRank = new (_crd && TableRank === void 0 ? (_reportPossibleCrUseOfTableRank({
            error: Error()
          }), TableRank) : TableRank)();
          this.allUserNumber = 0;
          this.curRankType = 1;
          this.curRankConfId = 1;
          this.myInfoTuzi = null;
          this.myInfoCanting = null;
          this.RankData = {};
        }

        compositeKey(key1, key2) {
          return key1.toString() + "_" + key2.toString();
        } //打开排行榜界面


        OpenRankUI() {
          this.curRankType = 1;
          this.curRankConfId = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).rankConfId;
          let paramas = {};
          paramas.rankType = this.curRankType;
          paramas.rankConfId = this.curRankConfId;
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).Rank, paramas);
        }

        GetRankDataByLevel(RankLevel) {
          let jsonTable = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get((_crd && TableRank === void 0 ? (_reportPossibleCrUseOfTableRank({
            error: Error()
          }), TableRank) : TableRank).TableName);

          if (jsonTable) {
            for (let id in jsonTable) {
              if (RankLevel == Number(id)) {
                let Data = jsonTable[id];
                return Data;
              }
            }
          }

          return null;
        }

        GetMaxRankLevelId() {
          let MaxLevelId = 1;
          let jsonTable = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get((_crd && TableRank === void 0 ? (_reportPossibleCrUseOfTableRank({
            error: Error()
          }), TableRank) : TableRank).TableName);

          if (jsonTable) {
            for (let id in jsonTable) {
              if (Number(id) > MaxLevelId) {
                MaxLevelId = Number(id);
              }
            }
          }

          return MaxLevelId;
        }

        GetRankData(RankType, RankConfId) {
          const data = {};
          data.rankType = RankType;
          data.rankConfId = RankConfId;
          const param = JSON.stringify(data);

          var completeRank = ret => {
            if (ret.isSucc && ret.res) {
              this.allUserNumber = ret.res.allUserNumber;
              this.RankData[this.compositeKey(ret.res.rankTyppe, ret.res.rankConfId)] = ret.res.list;

              if (ret.res.rankTyppe == '1') {
                this.myInfoTuzi = ret.res.myInfo;
              } else if (ret.res.rankTyppe == '2') {
                this.myInfoCanting = ret.res.myInfo;
              }
            }
          };

          (_crd && ProtocolMgr === void 0 ? (_reportPossibleCrUseOfProtocolMgr({
            error: Error()
          }), ProtocolMgr) : ProtocolMgr).sendRankList(completeRank, param);
        }

        GetRankDataBack() {
          for (let i = 1; i <= 2; ++i) {
            let jsonTable = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
              error: Error()
            }), JsonUtil) : JsonUtil).get((_crd && TableRank === void 0 ? (_reportPossibleCrUseOfTableRank({
              error: Error()
            }), TableRank) : TableRank).TableName);

            if (jsonTable) {
              for (let id in jsonTable) {
                let rankConfId = Number(id);

                if (!this.RankData[this.compositeKey(i, rankConfId)]) {
                  this.GetRankData(i, rankConfId);
                }
              }
            }
          }
        }

        GetUserImageList() {
          let userList = [];
          userList.push((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).UserId);

          for (let i = 1; i <= 2; ++i) {
            let jsonTable = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
              error: Error()
            }), JsonUtil) : JsonUtil).get((_crd && TableRank === void 0 ? (_reportPossibleCrUseOfTableRank({
              error: Error()
            }), TableRank) : TableRank).TableName);

            if (jsonTable) {
              for (let id in jsonTable) {
                let rankConfId = Number(id);
                let rankList = this.RankData[this.compositeKey(i, rankConfId)];

                if (rankList) {
                  for (const id in rankList) {
                    let RankData = rankList[id];

                    if (!userList.includes(RankData.userId)) {
                      userList.push(RankData.userId);
                    }

                    if (userList.length >= 3) {
                      return userList;
                    }
                  }
                }
              }
            }
          }

          return userList;
        }

      });

      _export("RankMgr", RankMgr = new RankManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9bddc1d6c4b28f83ff267637deefe3611e7c9f06.js.map