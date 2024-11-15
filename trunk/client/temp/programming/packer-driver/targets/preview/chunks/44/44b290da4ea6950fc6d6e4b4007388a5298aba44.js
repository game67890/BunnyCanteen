System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, UITransform, view, tween, UtilMgr, HeChengComponent, HeChengMgr, GridComponent, BoardMgr, oops, UIID, JsonUtil, TonGameMgr, LayerType, GameEvent, TableGiftBox, TableIngredients, LiwuInfo, LiWuManager, _crd, DAILY_REWARD_DATA, LiWuMgr;

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeChengComponent(extras) {
    _reporterNs.report("HeChengComponent", "../hecheng/HeChengComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeChengMgr(extras) {
    _reporterNs.report("HeChengMgr", "../hecheng/HeChengManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridComponent(extras) {
    _reporterNs.report("GridComponent", "../hecheng/GridComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoardMgr(extras) {
    _reporterNs.report("BoardMgr", "../manager/BoardManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../framework/common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../../extensions/oops-plugin-framework/assets/core/utils/JsonUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonGameMgr(extras) {
    _reporterNs.report("TonGameMgr", "../manager/TonGameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerType(extras) {
    _reporterNs.report("LayerType", "../../../../extensions/oops-plugin-framework/assets/core/gui/layer/LayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../framework/common/config/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableGiftBox(extras) {
    _reporterNs.report("TableGiftBox", "../../framework/common/table/TableGiftBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableIngredients(extras) {
    _reporterNs.report("TableIngredients", "../../framework/common/table/TableIngredients", _context.meta, extras);
  }

  _export({
    LiwuInfo: void 0,
    LiWuManager: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
      view = _cc.view;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      UtilMgr = _unresolved_2.UtilMgr;
    }, function (_unresolved_3) {
      HeChengComponent = _unresolved_3.HeChengComponent;
    }, function (_unresolved_4) {
      HeChengMgr = _unresolved_4.HeChengMgr;
    }, function (_unresolved_5) {
      GridComponent = _unresolved_5.GridComponent;
    }, function (_unresolved_6) {
      BoardMgr = _unresolved_6.BoardMgr;
    }, function (_unresolved_7) {
      oops = _unresolved_7.oops;
    }, function (_unresolved_8) {
      UIID = _unresolved_8.UIID;
    }, function (_unresolved_9) {
      JsonUtil = _unresolved_9.JsonUtil;
    }, function (_unresolved_10) {
      TonGameMgr = _unresolved_10.TonGameMgr;
    }, function (_unresolved_11) {
      LayerType = _unresolved_11.LayerType;
    }, function (_unresolved_12) {
      GameEvent = _unresolved_12.GameEvent;
    }, function (_unresolved_13) {
      TableGiftBox = _unresolved_13.TableGiftBox;
    }, function (_unresolved_14) {
      TableIngredients = _unresolved_14.TableIngredients;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9785fEfJi9ENIuHweQ1uxSw", "LiWuManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'EventTouch', 'Vec3', 'Sprite', 'Vec2', 'UITransform', 'view', 'tween', 'math']);

      DAILY_REWARD_DATA = "dailyRewardData";

      _export("LiwuInfo", LiwuInfo = class LiwuInfo {
        constructor(node) {
          this.IsFlying = false;
          this.LiwuNode = null;
          this.LiwuNode = node;
        }

      });

      _export("LiWuManager", LiWuManager = class LiWuManager {
        constructor() {
          this.LiwuList = [];
          this._tsGiftBox = new (_crd && TableGiftBox === void 0 ? (_reportPossibleCrUseOfTableGiftBox({
            error: Error()
          }), TableGiftBox) : TableGiftBox)();
          this.LiWuPassTime = 0;
        }

        //每5秒执行一次
        UpdateLiWu() {
          this.LiWuPassTime = this.LiWuPassTime + 5;
          var HechengGUI = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.get((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).MainUI);

          if (HechengGUI) {
            if (!(_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.hasUI((_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
              error: Error()
            }), LayerType) : LayerType).PopUp) && !(_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).gui.hasUI((_crd && LayerType === void 0 ? (_reportPossibleCrUseOfLayerType({
              error: Error()
            }), LayerType) : LayerType).Dialog)) {
              this._tsGiftBox.init((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).CanTingLevel);

              if (this.LiWuPassTime > this._tsGiftBox.time) {
                this.LiWuPassTime = 0;
                this.getDailyLiWu(this._tsGiftBox.numlimit);
              }
            }
          }
        }
        /* 生成礼物 */


        GenLiWu() {
          var HechengGUI = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.get((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).MainUI);

          if (HechengGUI) {
            var HechengCom = HechengGUI.getComponent(_crd && HeChengComponent === void 0 ? (_reportPossibleCrUseOfHeChengComponent({
              error: Error()
            }), HeChengComponent) : HeChengComponent);

            if (HechengCom && (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
              error: Error()
            }), BoardMgr) : BoardMgr).isHasEmptyGrid()) {
              var LiwuIdList = [];

              for (var index = 0; index < (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                error: Error()
              }), BoardMgr) : BoardMgr).board.length; index++) {
                var cell = (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                  error: Error()
                }), BoardMgr) : BoardMgr).board[index];

                if (cell.SuCaiId == 0 && !cell.IsLiWu) {
                  LiwuIdList.push(index);
                }
              }

              var LiwuIndex = (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                error: Error()
              }), UtilMgr) : UtilMgr).getRandomNumber(LiwuIdList);
              var gridNode = HechengCom.getGridNode(LiwuIndex);

              if (gridNode) {
                var liwu = HechengCom.createLiwu(); // 获取屏幕的大小

                var screenSize = view.getVisibleSize(); // 设置节点的位置到屏幕左下角

                liwu.setPosition(-screenSize.width / 2 + liwu.size.x / 2, -screenSize.height / 2 + liwu.size.y / 2);
                var liwuInfo = new LiwuInfo(liwu);
                this.LiwuList.push(liwuInfo);
                this.FlyToPos(liwuInfo, gridNode, LiwuIndex);
                return true;
              }
            }
          }

          return false;
        }

        FlyToPos(liwuInfo, gridNode, targetIndex) {
          if (liwuInfo && liwuInfo.LiwuNode) {
            var TargetPos = this.getPositionInParent(liwuInfo.LiwuNode, gridNode);
            (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
              error: Error()
            }), BoardMgr) : BoardMgr).board[targetIndex].IsLiWu = true;
            (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
              error: Error()
            }), BoardMgr) : BoardMgr).board[targetIndex].IsLiWuFlying = true;
            var speed = 200;
            var pos = liwuInfo.LiwuNode.position;
            var distance = Vec3.distance(pos, TargetPos);
            var moveDuration = distance / speed;
            tween(liwuInfo.LiwuNode).to(moveDuration, {
              position: TargetPos
            }).call(() => {
              (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                error: Error()
              }), BoardMgr) : BoardMgr).board[targetIndex].IsLiWuFlying = false;
              liwuInfo.LiwuNode.destroy();
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).UpdateBaseData);
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).UpdateBoardGrid);
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).Save);
            }).start();
          }
        }

        getPositionInParent(liwuNode, GridNode) {
          var tablePos = new Vec3(GridNode.position.x, GridNode.position.y);
          var worldPos = GridNode.parent.getComponent(UITransform).convertToWorldSpaceAR(tablePos);
          return liwuNode.parent.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
        } //打开礼物获得素材


        openLiwu(index) {
          if ((_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
            error: Error()
          }), BoardMgr) : BoardMgr).board[index].IsLiWu && !(_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
            error: Error()
          }), BoardMgr) : BoardMgr).board[index].IsLiWuFlying) {
            var IngredientsId = this.RankdomDishByCanTingLv((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).CanTingLevel);

            if (IngredientsId > 0) {
              var HechengGUI = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).gui.get((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                error: Error()
              }), UIID) : UIID).MainUI);

              if (HechengGUI) {
                var HechengCom = HechengGUI.getComponent(_crd && HeChengComponent === void 0 ? (_reportPossibleCrUseOfHeChengComponent({
                  error: Error()
                }), HeChengComponent) : HeChengComponent);

                if (HechengCom) {
                  var gridNode = HechengCom.getGridNode(index);

                  if (gridNode) {
                    var gridComponent = gridNode.getComponent(_crd && GridComponent === void 0 ? (_reportPossibleCrUseOfGridComponent({
                      error: Error()
                    }), GridComponent) : GridComponent);

                    if (gridComponent) {
                      (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                        error: Error()
                      }), UtilMgr) : UtilMgr).addNodeAnimation("animation/libao", gridComponent.LiwuSprite.node, true, false, () => {
                        (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                          error: Error()
                        }), UtilMgr) : UtilMgr).PlaySoundEffect(28);
                        (_crd && HeChengMgr === void 0 ? (_reportPossibleCrUseOfHeChengMgr({
                          error: Error()
                        }), HeChengMgr) : HeChengMgr).IsAutoOpenLiwu = false;
                        gridComponent.LiwuSprite.node.active = false;
                        (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                          error: Error()
                        }), BoardMgr) : BoardMgr).board[index].SuCaiId = IngredientsId;
                        (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                          error: Error()
                        }), BoardMgr) : BoardMgr).board[index].IsLiWu = false;
                        (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                          error: Error()
                        }), BoardMgr) : BoardMgr).board[index].IsLiWuFlying = false;
                        (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                          error: Error()
                        }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                          error: Error()
                        }), GameEvent) : GameEvent).UpdateBaseData);
                        (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                          error: Error()
                        }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                          error: Error()
                        }), GameEvent) : GameEvent).UpdateBoardGrid);
                        (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                          error: Error()
                        }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                          error: Error()
                        }), GameEvent) : GameEvent).Save);
                        (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                          error: Error()
                        }), UtilMgr) : UtilMgr).SetImage(gridComponent.LiwuSprite, "textures/UI/baluobo/baluobo;liwu");
                      });
                    }
                  }
                }
              }
            }
          }
        } // 根据餐厅等级随机一个菜品


        RankdomDishByCanTingLv(level) {
          var resultIndex = 0;

          this._tsGiftBox.init(level);

          var foodlevel = this._tsGiftBox.foodlevel1;
          var probably = this._tsGiftBox.probably1;
          var totalNum = 0;

          for (var i = 0; i < probably.length; i++) {
            totalNum = totalNum + probably[i];
          }

          var randNum = Math.floor(Math.random() * totalNum);
          totalNum = 0;

          for (var _i = 0; _i < probably.length; _i++) {
            totalNum = totalNum + probably[_i];

            if (randNum < totalNum) {
              resultIndex = _i;
              break;
            }
          }

          var resultLevel = foodlevel[resultIndex];
          var resultIngredients = [];
          var jsonIngredients = (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
            error: Error()
          }), JsonUtil) : JsonUtil).get((_crd && TableIngredients === void 0 ? (_reportPossibleCrUseOfTableIngredients({
            error: Error()
          }), TableIngredients) : TableIngredients).TableName);

          if (jsonIngredients) {
            for (var id in jsonIngredients) {
              var Ingredients = jsonIngredients[id];

              if (Ingredients.level == resultLevel) {
                resultIngredients.push(Number(id));
              }
            }

            var IngredientsId = (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).getRandomNumber(resultIngredients);
            return IngredientsId;
          }

          return 0;
        }

        getTodayDate() {
          var today = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).timer.getServerDate();
          return today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
        }

        getDailyLiWu(numlimit) {
          var savedData = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).storage.get(DAILY_REWARD_DATA);
          var data = savedData ? JSON.parse(savedData) : {
            date: this.getTodayDate(),
            count: 0
          }; // 如果存储的日期不是今天，重置次数

          if (data.date !== this.getTodayDate()) {
            data.date = this.getTodayDate();
            data.count = 0;
          } // 检查是否达到每日上限


          if (data.count < numlimit) {
            if (this.GenLiWu()) {
              // 生成礼物
              data.count += 1;
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).storage.set(DAILY_REWARD_DATA, JSON.stringify(data));
            }
          } else {
            if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).GiftNum > 0) {
              if (this.GenLiWu()) {
                (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).GiftNum -= 1;
                (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                  error: Error()
                }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                  error: Error()
                }), GameEvent) : GameEvent).Save);
              }
            }
          }
        }

      });

      _export("LiWuMgr", LiWuMgr = new LiWuManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=44b290da4ea6950fc6d6e4b4007388a5298aba44.js.map