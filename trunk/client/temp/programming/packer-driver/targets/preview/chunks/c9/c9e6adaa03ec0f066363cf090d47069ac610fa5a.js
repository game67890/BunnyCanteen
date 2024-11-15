System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, GameResPath, _crd;

  _export("GameResPath", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "da7c04REk1B3ISEN54JyYG1", "GameResPath", undefined);

      /*
       * @Author: dgflash
       * @Date: 2022-08-05 17:05:23
       * @LastEditors: dgflash
       * @LastEditTime: 2022-08-05 17:05:52
       */

      /** 游戏资源路径 */
      _export("GameResPath", GameResPath = class GameResPath {
        /** 游戏配置路径 */
        static getConfigPath(relative_path) {
          return "config/game/" + relative_path;
        }
        /** 角色资源路径 */


        static getRolePath(name) {
          return "content/role/" + name;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c9e6adaa03ec0f066363cf090d47069ac610fa5a.js.map