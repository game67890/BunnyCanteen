System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, oops, UIID, InviteManager, _crd, IniviteMgr;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../framework/common/config/GameUIConfig", _context.meta, extras);
  }

  _export("InviteManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      UIID = _unresolved_3.UIID;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "55206KhJrRMfptKLEuW6FP9", "InviteManager", undefined);

      _export("InviteManager", InviteManager = class InviteManager {
        constructor() {
          this.IniviteNum = 0;
          this.InviteList = null;
        }

        onOpenInviteMain() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).InviteMain);
        }

      });

      _export("IniviteMgr", IniviteMgr = new InviteManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3c152cd5574a1e0909f17355565607e5193ba9ee.js.map