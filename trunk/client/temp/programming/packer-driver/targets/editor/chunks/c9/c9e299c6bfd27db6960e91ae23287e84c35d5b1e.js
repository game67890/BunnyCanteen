System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, BundleConfig, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a9ca4J216NEwZ2llb+PneNc", "BundleConfig", undefined);

      _export("default", BundleConfig = class BundleConfig {
        constructor() {
          // start >>>>>>
          this.BundleName = {
            game: {
              prefab: {
                "game1": 'prefab/game1',
                "game2": 'prefab/game2'
              },
              sound: {
                "music1": 'sound/music1',
                "music2": 'sound/music2'
              },
              texture: {
                "game1": 'texture/game1',
                "game2": 'texture/game2'
              }
            },
            home: {
              prefab: {
                "home1": 'prefab/home1',
                "home2": 'prefab/home2'
              },
              sound: {
                "music1": 'sound/music1',
                "music2": 'sound/music2'
              },
              texture: {
                "home1": 'texture/home1',
                "home2": 'texture/home2'
              }
            }
          };
        }

        static get instance() {
          return BundleConfig._instance ? BundleConfig._instance : BundleConfig._instance = new BundleConfig();
        } // end >>>>>>


      });

      BundleConfig._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c9e299c6bfd27db6960e91ae23287e84c35d5b1e.js.map