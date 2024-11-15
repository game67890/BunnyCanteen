System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Sprite, IVirtualGridListItem, oops, UIID, UtilMgr, ProtocolMgr, TaskMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, AchievementItemListItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIVirtualGridListItem(extras) {
    _reporterNs.report("IVirtualGridListItem", "../../../resources/libs/virtual_grid_list/interface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../framework/common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocolMgr(extras) {
    _reporterNs.report("ProtocolMgr", "../manager/ProtocolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskMgr(extras) {
    _reporterNs.report("TaskMgr", "../task/TaskManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpReturn(extras) {
    _reporterNs.report("HttpReturn", "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest", _context.meta, extras);
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
      oops = _unresolved_3.oops;
    }, function (_unresolved_4) {
      UIID = _unresolved_4.UIID;
    }, function (_unresolved_5) {
      UtilMgr = _unresolved_5.UtilMgr;
    }, function (_unresolved_6) {
      ProtocolMgr = _unresolved_6.ProtocolMgr;
    }, function (_unresolved_7) {
      TaskMgr = _unresolved_7.TaskMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "69403i49T5A25BToC8kXFkn", "AchievementItemListItem", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Sprite', 'math', 'SpriteFrame', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AchievementItemListItem", AchievementItemListItem = (_dec = ccclass('AchievementItemListItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Sprite), _dec7 = property(Sprite), _dec(_class = (_class2 = class AchievementItemListItem extends (_crd && IVirtualGridListItem === void 0 ? (_reportPossibleCrUseOfIVirtualGridListItem({
        error: Error()
      }), IVirtualGridListItem) : IVirtualGridListItem) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "jiangli", _descriptor, this);

          _initializerDefineProperty(this, "miaoshu", _descriptor2, this);

          _initializerDefineProperty(this, "iconBack", _descriptor3, this);

          _initializerDefineProperty(this, "icon", _descriptor4, this);

          _initializerDefineProperty(this, "geted", _descriptor5, this);

          _initializerDefineProperty(this, "redPoint", _descriptor6, this);
        }

        onDataChanged() {
          const data = this.data;
          this.jiangli.string = data.num.toString();
          this.miaoshu.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID(data.tips);

          if (data.isFinished) {
            this.iconBack.grayscale = true;
            this.icon.grayscale = true;
            this.geted.node.active = true;
            this.redPoint.node.active = false;
          } else {
            this.iconBack.grayscale = false;
            this.icon.grayscale = false;
            this.geted.node.active = false;

            if ((_crd && TaskMgr === void 0 ? (_reportPossibleCrUseOfTaskMgr({
              error: Error()
            }), TaskMgr) : TaskMgr).canGetAchievementReward(data.id)) {
              this.redPoint.node.active = true;
            } else {
              this.redPoint.node.active = false;
            }
          }

          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).SetImage(this.icon, data.icon);
        }

        onSelect() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);

          if (!this.data.isFinished) {
            const data = {};
            data.achievementID = this.data.id;
            const param = JSON.stringify(data);

            var completeAchievement = ret => {
              if (ret.isSucc && ret.res.result) {
                this.iconBack.grayscale = true;
                this.icon.grayscale = true;
                this.geted.node.active = true;
                this.redPoint.node.active = false;
                (_crd && TaskMgr === void 0 ? (_reportPossibleCrUseOfTaskMgr({
                  error: Error()
                }), TaskMgr) : TaskMgr).modifyAchievementData(this.data.id, true);
                let params = {};
                params.id = this.data.id;
                (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                  error: Error()
                }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                  error: Error()
                }), UIID) : UIID).TaskTips, params);
              }
            };

            (_crd && ProtocolMgr === void 0 ? (_reportPossibleCrUseOfProtocolMgr({
              error: Error()
            }), ProtocolMgr) : ProtocolMgr).sendFinishAchievement(completeAchievement, param);
          }
        }

        onDestroy() {
          super.onDestroy();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "jiangli", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "miaoshu", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconBack", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "geted", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "redPoint", [_dec7], {
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
//# sourceMappingURL=faed27d343f3235e0e99d477bf89262ca6755288.js.map