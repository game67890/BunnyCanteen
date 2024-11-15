System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ScrollView, _dec, _class, _crd, ccclass, property, NestableScrollViewInner;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      ScrollView = _cc.ScrollView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8d52eQH9HpNJZmwrOE255N3", "NestableScrollViewInner", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Sprite', 'math', 'SpriteFrame', 'Node', 'ScrollView', 'EventTouch']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NestableScrollViewInner", NestableScrollViewInner = (_dec = ccclass('NestableScrollViewInner'), _dec(_class = class NestableScrollViewInner extends ScrollView {}) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f9fcea2dd85fffd9f33f854af41017d9904e85d5.js.map