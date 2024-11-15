System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Director, director, js, _crd, oldTick;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Director = _cc.Director;
      director = _cc.director;
      js = _cc.js;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "37f48DDLR1EXKhzn+7pLlWB", "DirectorExt", undefined);

      /** 全局游戏时间缩放 */
      //@ts-ignore
      __checkObsolete__(['Director', 'director', 'js']);

      if (!Director.prototype["__$cc-director-speed-extension$__"]) {
        //@ts-ignore
        Director.prototype["__$cc-director-speed-extension$__"] = true;
        oldTick = director.tick.bind(director);

        director.tick = function (dt) {
          dt *= director.globalGameTimeScale;
          oldTick(dt);
        };

        js.mixin(Director.prototype, {
          globalGameTimeScale: 1
        });
      }

      // director.globalGameTimeScale = 0.5;
      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8c9c9a5db66d0694ac41f1c85c340cab7393f2ff.js.map