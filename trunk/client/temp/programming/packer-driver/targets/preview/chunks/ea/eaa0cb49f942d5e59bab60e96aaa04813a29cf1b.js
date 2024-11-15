System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  /**
   * 单体模板类
   * @constructor
   */
  function Singleton() {
    class TSingleton {
      static get instance() {
        if (TSingleton._instance == null) {
          TSingleton._instance = new this();
        }

        return TSingleton._instance;
      }

      constructor() {}

    }

    TSingleton._instance = null;
    return TSingleton;
  }

  _export("Singleton", Singleton);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cf469xHJUlGBYrQaYNuawo0", "singleton", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eaa0cb49f942d5e59bab60e96aaa04813a29cf1b.js.map