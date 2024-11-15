System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, _dec, _class, _crd, ccclass, IVirtualGridListItem;

  function _reportPossibleCrUseOfImageCache(extras) {
    _reporterNs.report("ImageCache", "./image_cache", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a9aa52gcrBORKDfw+OvEBdc", "interface", undefined);

      __checkObsolete__(['Component', '_decorator']);

      ({
        ccclass
      } = _decorator);

      _export("IVirtualGridListItem", IVirtualGridListItem = (_dec = ccclass('IVirtualGridListItem'), _dec(_class = class IVirtualGridListItem extends Component {
        constructor(...args) {
          super(...args);
          this._itemIndex = -1;
          this._data = null;
          this._imageCache = null;
        }

        set imageCache(value) {
          this._imageCache = value;
        }
        /**
         * 加载图片
         * @param uri
         * @param callback
         */


        loadImage(uri, callback) {
          if (this._imageCache) {
            this._imageCache.loadImage(uri, callback);
          }
        }
        /**
         * 自定义数据
         */


        get data() {
          return this._data;
        }
        /**
         * 获取索引
         * @returns {Number}
         */


        get itemIndex() {
          return this._itemIndex;
        }
        /**
         * 选中状态
         * @param selected
         */


        setSelectStatus(selected) {
          this._data && (this._data.select = selected);
        }
        /**
         * 更新item
         * @param {*} data 对应数据
         * @param {number} itemIndex 数据对象对应的列表索引
         */


        updateItem(data, itemIndex) {
          this._itemIndex = itemIndex;
          this._data = data;
        }
        /**
         * 更新item 显示，item交替时候触发
         */


        onDataChanged() {}
        /**
         * 当被点击触发事件
         */


        onSelect() {}
        /**
         * 当其他单元被点击触发事件
         */


        onUnselect() {}
        /**
         * 当控件滑动进入可视区的时候触发
         */


        onEnter() {}
        /**
         * 当控件滑动离开可视区的时候触发
         */


        onLeave() {}

        onDestroy() {
          this._data = null;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d0d4f9a2885eeca65b97bc7f0f13511704e953ff.js.map