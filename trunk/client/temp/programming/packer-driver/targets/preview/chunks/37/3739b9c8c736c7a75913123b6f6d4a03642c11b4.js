System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, assetManager, _dec, _class, _crd, ccclass, property, Start;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      assetManager = _cc.assetManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "28a6aMsSiJNcbhcT48XXi18", "Start", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director', 'assetManager', 'AssetManager']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Start", Start = (_dec = ccclass('Start'), _dec(_class = class Start extends Component {
        start() {
          assetManager.loadBundle("game", (err, bundle) => {
            director.loadScene("game");
          });
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3739b9c8c736c7a75913123b6f6d4a03642c11b4.js.map