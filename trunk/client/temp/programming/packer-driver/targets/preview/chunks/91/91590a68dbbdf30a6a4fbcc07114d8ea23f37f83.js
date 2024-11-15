System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GameEvent;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "28ac0rWU79HGpJWrnyK01Gn", "GameEvent", undefined);

      /** 游戏事件 */
      _export("GameEvent", GameEvent = /*#__PURE__*/function (GameEvent) {
        GameEvent["GameServerConnected"] = "GameServerConnected";
        GameEvent["LoginSuccess"] = "LoginSuccess";
        GameEvent["UpdateBaseData"] = "UpdateBaseData";
        GameEvent["UpdateTuziCoin"] = "UpdateTuziCoin";
        GameEvent["UpdateCarrotCoin"] = "UpdateCarrotCoin";
        GameEvent["UpdateBoardGrid"] = "UpdateBoardGrid";
        GameEvent["Save"] = "Save";
        GameEvent["OnGridContract"] = "OnGridContract";
        GameEvent["OnAutoHecheng"] = "OnAutoHecheng";
        GameEvent["OnMyRankChange"] = "OnMyRankChange";
        GameEvent["OnShopListChange"] = "OnShopListChange";
        GameEvent["SwitchRank"] = "SwitchRank";
        GameEvent["UpdateAutoBtn"] = "UpdateAutoBtn";
        GameEvent["UpdateHuishouBtn"] = "UpdateHuishouBtn";
        return GameEvent;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=91590a68dbbdf30a6a4fbcc07114d8ea23f37f83.js.map