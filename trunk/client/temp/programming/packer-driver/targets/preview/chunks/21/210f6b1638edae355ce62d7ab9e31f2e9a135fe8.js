System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, GameManager, _crd;

  _export("GameManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "73fa0CEfOhMdJUoZwoFIIZV", "GameManager", undefined);
      /*
       * @Author: dgflash
       * @Date: 2022-02-10 09:50:41
       * @LastEditors: dgflash
       * @LastEditTime: 2022-09-02 12:09:55
       */


      /** 游戏世界管理 */
      __checkObsolete__(['Node', 'director']);

      _export("GameManager", GameManager = class GameManager {
        constructor(root) {
          /** 界面根节点 */
          this.root = void 0;
          this.root = root;
        }
        /** 设置游戏动画速度 */


        setTimeScale(scale) {
          director.globalGameTimeScale = scale;
        }
        /** 获取游戏动画速度 */


        getTimeScale() {
          return director.globalGameTimeScale;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=210f6b1638edae355ce62d7ab9e31f2e9a135fe8.js.map