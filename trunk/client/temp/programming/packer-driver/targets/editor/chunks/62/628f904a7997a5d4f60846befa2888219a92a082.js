System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, SpriteFrame, Sprite, oops, GameEvent, RankMgr, UtilMgr, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, RankTabController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../framework/common/config/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRankMgr(extras) {
    _reporterNs.report("RankMgr", "./RankManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      GameEvent = _unresolved_3.GameEvent;
    }, function (_unresolved_4) {
      RankMgr = _unresolved_4.RankMgr;
    }, function (_unresolved_5) {
      UtilMgr = _unresolved_5.UtilMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7b2d0jBBMBJaIbMt/AdrZZ4", "RankTabController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'SpriteFrame', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RankTabController", RankTabController = (_dec = ccclass('RankTabController'), _dec2 = property([Node]), _dec3 = property([Node]), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec(_class = (_class2 = class RankTabController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "tabButtons", _descriptor, this);

          _initializerDefineProperty(this, "tabs", _descriptor2, this);

          _initializerDefineProperty(this, "normalSprite", _descriptor3, this);

          _initializerDefineProperty(this, "selectedSprite", _descriptor4, this);
        }

        start() {
          this.tabButtons.forEach((button, index) => {
            button.on(Node.EventType.TOUCH_END, () => this.selectTab(index), this);
          }); // 默认选中第一个 tab

          this.selectTab(0);
        }

        selectTab(index) {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(25); // 1. 显示相应的 tab 内容

          this.showTab(index); // 2. 重置所有按钮的状态

          this.tabButtons.forEach((button, i) => {
            const sprite = button.getComponent(Sprite);

            if (sprite) {
              // 设置为选中或未选中的背景图
              sprite.spriteFrame = i === index ? this.selectedSprite : this.normalSprite;
            }
          }); // 3. 更新当前选中的索引

          (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
            error: Error()
          }), RankMgr) : RankMgr).curRankType = index + 1;
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SwitchRank);
        }

        showTab(index) {
          this.tabs.forEach((tab, i) => {
            tab.active = i === index;
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tabButtons", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tabs", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "normalSprite", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "selectedSprite", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=628f904a7997a5d4f60846befa2888219a92a082.js.map