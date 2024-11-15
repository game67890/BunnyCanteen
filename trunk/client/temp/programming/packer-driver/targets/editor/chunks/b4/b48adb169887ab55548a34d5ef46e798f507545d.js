System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Sprite, Label, oops, UIID, GameEvent, StringUtil, RankMgr, UtilMgr, TonGameMgr, RankVirtualGridList, ProtocolMgr, RankTabController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, RankComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../framework/common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../framework/common/config/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStringUtil(extras) {
    _reporterNs.report("StringUtil", "../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRankMgr(extras) {
    _reporterNs.report("RankMgr", "./RankManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpReturn(extras) {
    _reporterNs.report("HttpReturn", "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonGameMgr(extras) {
    _reporterNs.report("TonGameMgr", "../manager/TonGameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRankVirtualGridList(extras) {
    _reporterNs.report("RankVirtualGridList", "./RankVirtualGridList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocolMgr(extras) {
    _reporterNs.report("ProtocolMgr", "../manager/ProtocolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRankTabController(extras) {
    _reporterNs.report("RankTabController", "./RankTabController", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      UIID = _unresolved_3.UIID;
    }, function (_unresolved_4) {
      GameEvent = _unresolved_4.GameEvent;
    }, function (_unresolved_5) {
      StringUtil = _unresolved_5.StringUtil;
    }, function (_unresolved_6) {
      RankMgr = _unresolved_6.RankMgr;
    }, function (_unresolved_7) {
      UtilMgr = _unresolved_7.UtilMgr;
    }, function (_unresolved_8) {
      TonGameMgr = _unresolved_8.TonGameMgr;
    }, function (_unresolved_9) {
      RankVirtualGridList = _unresolved_9.RankVirtualGridList;
    }, function (_unresolved_10) {
      ProtocolMgr = _unresolved_10.ProtocolMgr;
    }, function (_unresolved_11) {
      RankTabController = _unresolved_11.RankTabController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "27ecarNUWZEJYL3nBKkg5vG", "RankComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'Label', 'ScrollView', 'instantiate', 'UITransform', 'Prefab', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RankComponent", RankComponent = (_dec = ccclass('RankComponent'), _dec2 = property([Node]), _dec3 = property([Sprite]), _dec4 = property(Label), _dec5 = property(Sprite), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(_crd && RankVirtualGridList === void 0 ? (_reportPossibleCrUseOfRankVirtualGridList({
        error: Error()
      }), RankVirtualGridList) : RankVirtualGridList), _dec12 = property(_crd && RankVirtualGridList === void 0 ? (_reportPossibleCrUseOfRankVirtualGridList({
        error: Error()
      }), RankVirtualGridList) : RankVirtualGridList), _dec(_class = (_class2 = class RankComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "userHeadImageBacks", _descriptor, this);

          _initializerDefineProperty(this, "userHeadImages", _descriptor2, this);

          _initializerDefineProperty(this, "allUserNum", _descriptor3, this);

          _initializerDefineProperty(this, "duanweiIcon", _descriptor4, this);

          _initializerDefineProperty(this, "duanweiBackImage", _descriptor5, this);

          _initializerDefineProperty(this, "duanweiName", _descriptor6, this);

          _initializerDefineProperty(this, "duanweiNum", _descriptor7, this);

          _initializerDefineProperty(this, "dailyRank", _descriptor8, this);

          _initializerDefineProperty(this, "canteenRank", _descriptor9, this);

          _initializerDefineProperty(this, "tuziRankGridList", _descriptor10, this);

          _initializerDefineProperty(this, "cantingRankGridList", _descriptor11, this);

          this._tuziRankDataList = [];
          this._cantingRankDataList = [];
        }

        onAdded(params) {
          const rankTabController = this.node.getComponentInChildren(_crd && RankTabController === void 0 ? (_reportPossibleCrUseOfRankTabController({
            error: Error()
          }), RankTabController) : RankTabController);

          if (rankTabController) {
            rankTabController.selectTab(0);
          }

          this.dailyRank.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_086");
          this.canteenRank.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_087");
          this.ShowAllUserNum();
          let RankList = (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
            error: Error()
          }), RankMgr) : RankMgr).RankData[(_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
            error: Error()
          }), RankMgr) : RankMgr).compositeKey(params.rankType, params.rankConfId)];

          if (RankList) {
            this.ShowRank(params.rankType, params.rankConfId, RankList);
            (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
              error: Error()
            }), RankMgr) : RankMgr).GetRankData(params.rankType, params.rankConfId);
            (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
              error: Error()
            }), RankMgr) : RankMgr).GetRankDataBack();
            this.ShowUserHead();
          } else {
            const data = {};
            data.rankType = params.rankType;
            data.rankConfId = params.rankConfId;
            const param = JSON.stringify(data);

            var completeRank = ret => {
              if (ret.isSucc && ret.res) {
                (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
                  error: Error()
                }), RankMgr) : RankMgr).allUserNumber = ret.res.allUserNumber;
                this.ShowAllUserNum();
                (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
                  error: Error()
                }), RankMgr) : RankMgr).RankData[(_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
                  error: Error()
                }), RankMgr) : RankMgr).compositeKey(ret.res.rankTyppe, ret.res.rankConfId)] = ret.res.list;

                if (ret.res.rankTyppe == '1') {
                  (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
                    error: Error()
                  }), RankMgr) : RankMgr).myInfoTuzi = ret.res.myInfo;
                } else if (ret.res.rankTyppe == '2') {
                  (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
                    error: Error()
                  }), RankMgr) : RankMgr).myInfoCanting = ret.res.myInfo;
                }

                this.ShowRank(ret.res.rankTyppe, ret.res.rankConfId, ret.res.list);
                (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
                  error: Error()
                }), RankMgr) : RankMgr).GetRankDataBack();
                this.ShowUserHead();
              }
            };

            (_crd && ProtocolMgr === void 0 ? (_reportPossibleCrUseOfProtocolMgr({
              error: Error()
            }), ProtocolMgr) : ProtocolMgr).sendRankList(completeRank, param);
          }

          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.on((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SwitchRank, this.onUpdateData, this);
          return true;
        }

        ShowAllUserNum() {
          if ((_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
            error: Error()
          }), RankMgr) : RankMgr).allUserNumber > 0) {
            if ((_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
              error: Error()
            }), RankMgr) : RankMgr).allUserNumber > 999) {
              this.allUserNum.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).language.getLangByID("stringres_206");
            } else {
              this.allUserNum.string = (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
                error: Error()
              }), RankMgr) : RankMgr).allUserNumber.toString();
            }
          }
        }

        ShowUserHead() {
          this.userHeadImageBacks.forEach((BackNode, index) => {
            BackNode.active = false;
          });
          let userList = (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
            error: Error()
          }), RankMgr) : RankMgr).GetUserImageList();

          for (let i = 0; i < userList.length; i++) {
            this.userHeadImageBacks[i].active = true;
            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).ShowUserHead(userList[i], this.userHeadImages[i]);
          }
        }

        onDestroy() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.off((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SwitchRank, this.onUpdateData, this);
        }

        onUpdateData(event, args) {
          switch (event) {
            case (_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).SwitchRank:
              this.OnSwitchRank((_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
                error: Error()
              }), RankMgr) : RankMgr).curRankConfId);
              break;
          }
        }

        ShowRank(rankType, rankConfId, rankList) {
          if (rankType == 1) {
            //兔子币榜
            let Data = (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
              error: Error()
            }), RankMgr) : RankMgr).GetRankDataByLevel(rankConfId);

            if (Data) {
              (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                error: Error()
              }), UtilMgr) : UtilMgr).SetImage(this.duanweiIcon, Data.bigrankicon);
              (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                error: Error()
              }), UtilMgr) : UtilMgr).SetImage(this.duanweiBackImage, Data.rankpic);
              this.duanweiName.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).language.getLangByID(Data.rankname);
              this.duanweiNum.string = (_crd && StringUtil === void 0 ? (_reportPossibleCrUseOfStringUtil({
                error: Error()
              }), StringUtil) : StringUtil).substitute_1((_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).language.getLangByID("stringres_184"), Data.lower.toString());
              this.ShowTuziRank(rankConfId, rankList);
            }
          } else if (rankType == 2) {
            //餐厅等级榜
            let Data = (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
              error: Error()
            }), RankMgr) : RankMgr).GetRankDataByLevel(rankConfId);

            if (Data) {
              (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                error: Error()
              }), UtilMgr) : UtilMgr).SetImage(this.duanweiIcon, Data.bigrankicon);
              (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                error: Error()
              }), UtilMgr) : UtilMgr).SetImage(this.duanweiBackImage, Data.rankpic);
              this.duanweiName.string = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).language.getLangByID(Data.rankname);
              this.duanweiNum.string = (_crd && StringUtil === void 0 ? (_reportPossibleCrUseOfStringUtil({
                error: Error()
              }), StringUtil) : StringUtil).substitute_1((_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).language.getLangByID("stringres_198"), Data.canteenranklower.toString());
              this.ShowCantingRank(rankConfId, rankList);
            }
          }
        }

        OnSwitchRank(RankConfId) {
          let RankList = (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
            error: Error()
          }), RankMgr) : RankMgr).RankData[(_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
            error: Error()
          }), RankMgr) : RankMgr).compositeKey((_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
            error: Error()
          }), RankMgr) : RankMgr).curRankType, RankConfId)];

          if (RankList) {
            this.ShowAllUserNum();
            this.ShowRank((_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
              error: Error()
            }), RankMgr) : RankMgr).curRankType, RankConfId, RankList);
          } else {
            (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
              error: Error()
            }), RankMgr) : RankMgr).GetRankData((_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
              error: Error()
            }), RankMgr) : RankMgr).curRankType, RankConfId);
          }
        }

        IsRankListHasMyInfo(rankList, myInfo) {
          for (const id in rankList) {
            let RankData = rankList[id];

            if (RankData.userId == myInfo.userId) {
              return true;
            }
          }

          return false;
        }

        ShowTuziRank(rankConfId, rankList) {
          if (rankList !== null && rankList !== undefined && Array.isArray(rankList) && rankList.length && rankList.length > 0) {
            this._tuziRankDataList = [];

            for (const id in rankList) {
              let RankData = rankList[id];

              this._tuziRankDataList.push(RankData);
            }

            if ((_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
              error: Error()
            }), RankMgr) : RankMgr).myInfoTuzi.rankConfId == rankConfId && this.IsRankListHasMyInfo(rankList, (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
              error: Error()
            }), RankMgr) : RankMgr).myInfoTuzi)) {
              (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
                error: Error()
              }), RankMgr) : RankMgr).myInfoTuzi.userId = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).UserId;

              this._tuziRankDataList.push((_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
                error: Error()
              }), RankMgr) : RankMgr).myInfoTuzi);
            }

            this.refreshTuziRankGridList();
          } else {
            this.refreshTuziRankGridList();
            this.tuziRankGridList.clearList();
          }
        }

        refreshTuziRankGridList() {
          /*  paddingTop: 列表距离上边缘距离 默认为0
          paddingBottom: 列表距离下边缘距离 默认为0
          spacingX: 列间距 默认为3
          spacingY: 行间距 默认为3
          columnNum: 列数 默认为0，自动适配容器宽度
          useVirtualLayout: 是否启用虚拟列表 默认为true
          emptyTip: 没有数据显示提示
          cacheImage: 是否缓存列表中加载过的图片，控件回收后，图片缓存将被全部释放。
          */
          if (this.tuziRankGridList) {
            this.tuziRankGridList.clearList();
            this.tuziRankGridList.initGridList({
              paddingTop: 10,
              paddingBottom: 10,
              spacingX: 10,
              spacingY: 5,
              columnNum: 1,
              useVirtualLayout: true,
              emptyTip: (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).language.getLangByID("stringres_088"),
              cacheImage: true
            });
            this.tuziRankGridList.appendItemsToDisplayList(this._tuziRankDataList);
          }
        }

        ShowCantingRank(rankConfId, rankList) {
          if (rankList !== null && rankList !== undefined && Array.isArray(rankList) && rankList.length && rankList.length > 0) {
            this._cantingRankDataList = [];

            for (const id in rankList) {
              let RankData = rankList[id];

              this._cantingRankDataList.push(RankData);
            }

            if ((_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
              error: Error()
            }), RankMgr) : RankMgr).myInfoCanting.rankConfId == rankConfId && this.IsRankListHasMyInfo(rankList, (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
              error: Error()
            }), RankMgr) : RankMgr).myInfoCanting)) {
              (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
                error: Error()
              }), RankMgr) : RankMgr).myInfoCanting.userId = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).UserId;

              this._tuziRankDataList.push((_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
                error: Error()
              }), RankMgr) : RankMgr).myInfoCanting);
            }

            this.refreshCantingRankGridList();
          } else {
            this.refreshCantingRankGridList();
            this.cantingRankGridList.clearList();
          }
        }

        refreshCantingRankGridList() {
          /*  paddingTop: 列表距离上边缘距离 默认为0
          paddingBottom: 列表距离下边缘距离 默认为0
          spacingX: 列间距 默认为3
          spacingY: 行间距 默认为3
          columnNum: 列数 默认为0，自动适配容器宽度
          useVirtualLayout: 是否启用虚拟列表 默认为true
          emptyTip: 没有数据显示提示
          cacheImage: 是否缓存列表中加载过的图片，控件回收后，图片缓存将被全部释放。
          */
          if (this.cantingRankGridList) {
            this.cantingRankGridList.clearList();
            this.cantingRankGridList.initGridList({
              paddingTop: 10,
              paddingBottom: 10,
              spacingX: 10,
              spacingY: 5,
              columnNum: 1,
              useVirtualLayout: true,
              emptyTip: (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).language.getLangByID("stringres_088"),
              cacheImage: true
            });
            this.cantingRankGridList.appendItemsToDisplayList(this._cantingRankDataList);
          }
        }

        onLeft() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(25);
          let RankData = (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
            error: Error()
          }), RankMgr) : RankMgr).GetRankDataByLevel((_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
            error: Error()
          }), RankMgr) : RankMgr).curRankConfId - 1);

          if (RankData) {
            (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
              error: Error()
            }), RankMgr) : RankMgr).curRankConfId = (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
              error: Error()
            }), RankMgr) : RankMgr).curRankConfId - 1;
            this.OnSwitchRank((_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
              error: Error()
            }), RankMgr) : RankMgr).curRankConfId);
          } else {
            (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
              error: Error()
            }), RankMgr) : RankMgr).curRankConfId = (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
              error: Error()
            }), RankMgr) : RankMgr).GetMaxRankLevelId();
            this.OnSwitchRank((_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
              error: Error()
            }), RankMgr) : RankMgr).curRankConfId);
          }
        }

        onRight() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(25);
          let RankData = (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
            error: Error()
          }), RankMgr) : RankMgr).GetRankDataByLevel((_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
            error: Error()
          }), RankMgr) : RankMgr).curRankConfId + 1);

          if (RankData) {
            (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
              error: Error()
            }), RankMgr) : RankMgr).curRankConfId = (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
              error: Error()
            }), RankMgr) : RankMgr).curRankConfId + 1;
            this.OnSwitchRank((_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
              error: Error()
            }), RankMgr) : RankMgr).curRankConfId);
          } else {
            (_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
              error: Error()
            }), RankMgr) : RankMgr).curRankConfId = 1;
            this.OnSwitchRank((_crd && RankMgr === void 0 ? (_reportPossibleCrUseOfRankMgr({
              error: Error()
            }), RankMgr) : RankMgr).curRankConfId);
          }
        }

        onClose() {
          (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).PlaySoundEffect(19);
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.remove((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).Rank);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "userHeadImageBacks", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "userHeadImages", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "allUserNum", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "duanweiIcon", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "duanweiBackImage", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "duanweiName", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "duanweiNum", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "dailyRank", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "canteenRank", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "tuziRankGridList", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "cantingRankGridList", [_dec12], {
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
//# sourceMappingURL=b48adb169887ab55548a34d5ef46e798f507545d.js.map