System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Sprite, IVirtualGridListItem, TaskMgr, AchievementItemVirtualGridList, oops, UtilMgr, TonGameMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, AchievementListItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIVirtualGridListItem(extras) {
    _reporterNs.report("IVirtualGridListItem", "../../../resources/libs/virtual_grid_list/interface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskMgr(extras) {
    _reporterNs.report("TaskMgr", "./TaskManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAchievementItemVirtualGridList(extras) {
    _reporterNs.report("AchievementItemVirtualGridList", "./AchievementItemVirtualGridList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonGameMgr(extras) {
    _reporterNs.report("TonGameMgr", "../manager/TonGameManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      IVirtualGridListItem = _unresolved_2.IVirtualGridListItem;
    }, function (_unresolved_3) {
      TaskMgr = _unresolved_3.TaskMgr;
    }, function (_unresolved_4) {
      AchievementItemVirtualGridList = _unresolved_4.AchievementItemVirtualGridList;
    }, function (_unresolved_5) {
      oops = _unresolved_5.oops;
    }, function (_unresolved_6) {
      UtilMgr = _unresolved_6.UtilMgr;
    }, function (_unresolved_7) {
      TonGameMgr = _unresolved_7.TonGameMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f6b4eZ49qREw7I8pNrQQFhl", "AchievementListItem", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Sprite', 'math', 'SpriteFrame', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AchievementListItem", AchievementListItem = (_dec = ccclass('AchievementListItem'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Sprite), _dec8 = property(_crd && AchievementItemVirtualGridList === void 0 ? (_reportPossibleCrUseOfAchievementItemVirtualGridList({
        error: Error()
      }), AchievementItemVirtualGridList) : AchievementItemVirtualGridList), _dec(_class = (_class2 = class AchievementListItem extends (_crd && IVirtualGridListItem === void 0 ? (_reportPossibleCrUseOfIVirtualGridListItem({
        error: Error()
      }), IVirtualGridListItem) : IVirtualGridListItem) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "achievementIcon", _descriptor, this);

          _initializerDefineProperty(this, "achievementName", _descriptor2, this);

          _initializerDefineProperty(this, "achievementTips", _descriptor3, this);

          _initializerDefineProperty(this, "jindu", _descriptor4, this);

          _initializerDefineProperty(this, "jinduCoin", _descriptor5, this);

          _initializerDefineProperty(this, "jinduCoinImage", _descriptor6, this);

          _initializerDefineProperty(this, "achievementItemGridList", _descriptor7, this);

          this._achievementItemDataList = [];
        }

        ShowAchievementItemList(AchievementType) {
          let AchievementCellList = (_crd && TaskMgr === void 0 ? (_reportPossibleCrUseOfTaskMgr({
            error: Error()
          }), TaskMgr) : TaskMgr).GetAchievementItemCellList(AchievementType);

          for (const id in AchievementCellList) {
            let AchievementData = AchievementCellList[id];
            let ServerData = JSON.parse((_crd && TaskMgr === void 0 ? (_reportPossibleCrUseOfTaskMgr({
              error: Error()
            }), TaskMgr) : TaskMgr).ServerAchievementList[AchievementData.id]);
            AchievementData.isFinished = ServerData.isFinished;
            AchievementData.progress = ServerData.progress;

            this._achievementItemDataList.push(AchievementData);
          }

          this.initAchievementItemGridList();
        }

        initAchievementItemGridList() {
          /*  paddingTop: 列表距离上边缘距离 默认为0
          paddingBottom: 列表距离下边缘距离 默认为0
          spacingX: 列间距 默认为3
          spacingY: 行间距 默认为3
          columnNum: 列数 默认为0，自动适配容器宽度
          useVirtualLayout: 是否启用虚拟列表 默认为true
          emptyTip: 没有数据显示提示
          cacheImage: 是否缓存列表中加载过的图片，控件回收后，图片缓存将被全部释放。
          */
          if (this.achievementItemGridList) {
            this.achievementItemGridList.clearList();
            this.achievementItemGridList.initGridList({
              paddingTop: 10,
              paddingBottom: 10,
              spacingX: 10,
              spacingY: 5,
              columnNum: 1,
              useVirtualLayout: true,
              emptyTip: '',
              cacheImage: true
            });
            this.achievementItemGridList.appendItemsToDisplayList(this._achievementItemDataList);
          }
        }

        updateItem(data, itemIndex) {
          this._itemIndex = itemIndex;
          this._data = data;
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).SetImage(this.achievementIcon, data.achieveicon);
          this.achievementName.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID(this._data.achievename);
          this.achievementTips.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID(this._data.achievetips);
          let progress = this.data.progress;

          if (this._data.achievetype == 4) {
            //兔子币
            this.jinduCoin.node.active = true;
            this.jinduCoinImage.node.active = true;
            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).SetImage(this.jinduCoinImage, "textures/UI/main/main;tuzibi");
            this.jindu.node.active = false;
            progress = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).GetRealCanTingGain();
          } else if (this._data.achievetype == 5) {
            //萝卜币
            this.jinduCoin.node.active = true;
            this.jinduCoinImage.node.active = true;
            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).SetImage(this.jinduCoinImage, "textures/UI/main/main;luobobi");
            this.jindu.node.active = false;
          } else {
            this.jinduCoin.node.active = false;
            this.jinduCoinImage.node.active = false;
            this.jindu.node.active = true;
          }

          this.jindu.string = progress.toString();
          this.jinduCoin.string = progress.toString();
          this.achievementItemGridList.clearList();
          this.ShowAchievementItemList(this._data.achievetype);
        }

        onDestroy() {
          super.onDestroy();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "achievementIcon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "achievementName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "achievementTips", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "jindu", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "jinduCoin", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "jinduCoinImage", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "achievementItemGridList", [_dec8], {
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
//# sourceMappingURL=df73d043938bb110eaa122c0f64bfb17080bc00f.js.map