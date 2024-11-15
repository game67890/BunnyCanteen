System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, oops, UIID, VirtualGridList, TableOtherParameter, StringUtil, IniviteMgr, UtilMgr, ProtocolMgr, InviteItem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, InviteMain;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../framework/common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVirtualGridList(extras) {
    _reporterNs.report("VirtualGridList", "../../../resources/libs/virtual_grid_list/virtual_grid_list", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableOtherParameter(extras) {
    _reporterNs.report("TableOtherParameter", "../../framework/common/table/TableOtherParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStringUtil(extras) {
    _reporterNs.report("StringUtil", "../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIniviteMgr(extras) {
    _reporterNs.report("IniviteMgr", "./InviteManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpReturn(extras) {
    _reporterNs.report("HttpReturn", "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocolMgr(extras) {
    _reporterNs.report("ProtocolMgr", "../manager/ProtocolManager", _context.meta, extras);
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
      Label = _cc.Label;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      UIID = _unresolved_3.UIID;
    }, function (_unresolved_4) {
      VirtualGridList = _unresolved_4.VirtualGridList;
    }, function (_unresolved_5) {
      TableOtherParameter = _unresolved_5.TableOtherParameter;
    }, function (_unresolved_6) {
      StringUtil = _unresolved_6.StringUtil;
    }, function (_unresolved_7) {
      IniviteMgr = _unresolved_7.IniviteMgr;
    }, function (_unresolved_8) {
      UtilMgr = _unresolved_8.UtilMgr;
    }, function (_unresolved_9) {
      ProtocolMgr = _unresolved_9.ProtocolMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4e155KTexNE5Leud1TFmOuN", "InviteMain", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);
      InviteItem = class InviteItem {
        constructor() {
          this.userid = "";
        }

      };

      _export("InviteMain", InviteMain = (_dec = ccclass('InviteMain'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(_crd && VirtualGridList === void 0 ? (_reportPossibleCrUseOfVirtualGridList({
        error: Error()
      }), VirtualGridList) : VirtualGridList), _dec(_class2 = (_class3 = class InviteMain extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "TitleName", _descriptor, this);

          _initializerDefineProperty(this, "DesTxt", _descriptor2, this);

          _initializerDefineProperty(this, "ShowTxt", _descriptor3, this);

          _initializerDefineProperty(this, "AwardName1", _descriptor4, this);

          _initializerDefineProperty(this, "AwardTxt1", _descriptor5, this);

          _initializerDefineProperty(this, "AwardName2", _descriptor6, this);

          _initializerDefineProperty(this, "AwardTxt2", _descriptor7, this);

          _initializerDefineProperty(this, "LabelTxt1", _descriptor8, this);

          _initializerDefineProperty(this, "LabelTxt2", _descriptor9, this);

          _initializerDefineProperty(this, "gridList", _descriptor10, this);

          this._dataList = [];
        }

        onAdded(params) {
          this.TitleName.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_089");
          this.DesTxt.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_183");
          this.ShowTxt.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_090") + "\n" + (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_091") + "\n" + (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_092");
          this.AwardName1.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_093");
          this.AwardTxt1.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_094");
          let tablerecord = new (_crd && TableOtherParameter === void 0 ? (_reportPossibleCrUseOfTableOtherParameter({
            error: Error()
          }), TableOtherParameter) : TableOtherParameter)();
          tablerecord.init(4);
          this.AwardName2.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_095");
          this.AwardTxt2.string = (_crd && StringUtil === void 0 ? (_reportPossibleCrUseOfStringUtil({
            error: Error()
          }), StringUtil) : StringUtil).substitute_1((_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_096"), tablerecord.parameter);
          this.LabelTxt1.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_097");
          this.LabelTxt2.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_098");

          if ((_crd && IniviteMgr === void 0 ? (_reportPossibleCrUseOfIniviteMgr({
            error: Error()
          }), IniviteMgr) : IniviteMgr).InviteList) {
            this.initGridList();
          } else {
            var completeOpenInvite = ret => {
              console.log(ret.res);

              if (ret.isSucc && ret.res.result) {
                (_crd && IniviteMgr === void 0 ? (_reportPossibleCrUseOfIniviteMgr({
                  error: Error()
                }), IniviteMgr) : IniviteMgr).InviteList = ret.res.invitee;
                (_crd && IniviteMgr === void 0 ? (_reportPossibleCrUseOfIniviteMgr({
                  error: Error()
                }), IniviteMgr) : IniviteMgr).IniviteNum = (_crd && IniviteMgr === void 0 ? (_reportPossibleCrUseOfIniviteMgr({
                  error: Error()
                }), IniviteMgr) : IniviteMgr).InviteList.length;
                this.initGridList();
              }
            };

            (_crd && ProtocolMgr === void 0 ? (_reportPossibleCrUseOfProtocolMgr({
              error: Error()
            }), ProtocolMgr) : ProtocolMgr).sendOpenInvite(completeOpenInvite, "");
          }

          return true;
        }

        updategridList() {
          this.gridList.refreshItemDisplays();
        }

        initGridList() {
          this._dataList = [];

          for (let i = 0; i < (_crd && IniviteMgr === void 0 ? (_reportPossibleCrUseOfIniviteMgr({
            error: Error()
          }), IniviteMgr) : IniviteMgr).InviteList.length; i++) {
            const item = {
              userid: (_crd && IniviteMgr === void 0 ? (_reportPossibleCrUseOfIniviteMgr({
                error: Error()
              }), IniviteMgr) : IniviteMgr).InviteList[i]
            };

            this._dataList.push(item);
          }
          /*  paddingTop: 列表距离上边缘距离 默认为0
          paddingBottom: 列表距离下边缘距离 默认为0
          spacingX: 列间距 默认为3
          spacingY: 行间距 默认为3
          columnNum: 列数 默认为0，自动适配容器宽度
          useVirtualLayout: 是否启用虚拟列表 默认为true
          emptyTip: 没有数据显示提示
          cacheImage: 是否缓存列表中加载过的图片，控件回收后，图片缓存将被全部释放。
          */


          if (this.gridList) {
            this.gridList.clearList();
            this.gridList.initGridList({
              paddingTop: 10,
              paddingBottom: 10,
              spacingX: 0,
              spacingY: 0,
              columnNum: 1,
              useVirtualLayout: true,
              // emptyTip: oops.language.getLangByID("stringres_088"),
              cacheImage: true
            });
            this.gridList.appendItemsToDisplayList(this._dataList);
          }
        }

        onOpenInviteActivity() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.open((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).InviteAcivity);
        }

        onOpenKongtouActivity() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          let tablerecord = new (_crd && TableOtherParameter === void 0 ? (_reportPossibleCrUseOfTableOtherParameter({
            error: Error()
          }), TableOtherParameter) : TableOtherParameter)();
          tablerecord.init(4);
          let showstr = (_crd && StringUtil === void 0 ? (_reportPossibleCrUseOfStringUtil({
            error: Error()
          }), StringUtil) : StringUtil).substitute_1((_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("message_12"), tablerecord.parameter);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.toast(showstr, false);
        } // 点击邀请一个朋友按钮


        onInviteBtnClick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).share();
        } // 点击copy按钮


        onCopyBtnClick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(18);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.toast("message_26", true);
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).copyLinkToClipboard();
        }

        onCloseBtnClick() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(19);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.remove((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).InviteMain);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "TitleName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "DesTxt", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "ShowTxt", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "AwardName1", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, "AwardTxt1", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class3.prototype, "AwardName2", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class3.prototype, "AwardTxt2", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class3.prototype, "LabelTxt1", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class3.prototype, "LabelTxt2", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class3.prototype, "gridList", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class3)) || _class2));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=07a36ffc208674d1250b507695651b4a0bba9755.js.map