System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, Vec2, UITransform, tween, UtilMgr, HeChengComponent, DiningTableMgr, BoardMgr, oops, UIID, RoleComponent, TableOtherParameter, TablePictureSet, misc, RoleInfo, RoleManager, _crd, RoleMgr;

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeChengComponent(extras) {
    _reporterNs.report("HeChengComponent", "../hecheng/HeChengComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDiningTableMgr(extras) {
    _reporterNs.report("DiningTableMgr", "../diningtable/DiningTableManager", _context.meta, extras);
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

  function _reportPossibleCrUseOfRoleComponent(extras) {
    _reporterNs.report("RoleComponent", "../role/RoleComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableOtherParameter(extras) {
    _reporterNs.report("TableOtherParameter", "../../framework/common/table/TableOtherParameter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTablePictureSet(extras) {
    _reporterNs.report("TablePictureSet", "../../framework/common/table/TablePictureSet", _context.meta, extras);
  }

  _export({
    RoleInfo: void 0,
    RoleManager: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
      Vec2 = _cc.Vec2;
      UITransform = _cc.UITransform;
      tween = _cc.tween;
      misc = _cc.misc;
    }, function (_unresolved_2) {
      UtilMgr = _unresolved_2.UtilMgr;
    }, function (_unresolved_3) {
      HeChengComponent = _unresolved_3.HeChengComponent;
    }, function (_unresolved_4) {
      DiningTableMgr = _unresolved_4.DiningTableMgr;
    }, function (_unresolved_5) {
      BoardMgr = _unresolved_5.BoardMgr;
    }, function (_unresolved_6) {
      oops = _unresolved_6.oops;
    }, function (_unresolved_7) {
      UIID = _unresolved_7.UIID;
    }, function (_unresolved_8) {
      RoleComponent = _unresolved_8.RoleComponent;
    }, function (_unresolved_9) {
      TableOtherParameter = _unresolved_9.TableOtherParameter;
    }, function (_unresolved_10) {
      TablePictureSet = _unresolved_10.TablePictureSet;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "89171jH7rtDg6Od0FK+QuyZ", "RoleManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'EventTouch', 'Vec3', 'Sprite', 'Vec2', 'UITransform', 'view', 'tween', 'math']);

      __checkObsolete__(['misc']);

      _export("RoleInfo", RoleInfo = class RoleInfo {
        constructor(id, indexId, node, ParentNode) {
          this.IsUse = false;
          this.RoleId = 0;
          this.IndexId = 0;
          this.RoleNode = null;
          this.OrginParentNode = null;
          this.RolePos = new Vec2(0, 0);
          this.RoleId = id;
          this.IndexId = indexId;
          this.RoleNode = node;
          this.OrginParentNode = ParentNode;
          this.IsUse = false;
        }

      });

      _export("RoleManager", RoleManager = class RoleManager {
        constructor() {
          this.RoleList = [];
          //每隔5秒随机1-2位访客
          this.SpawnRoleNum = [1, 2];
          //角色id
          this.SpawnRoleId = [];
          //访客来访时随机播放一种音效
          this.SoundEffects = [4, 5, 6, 7];
          this.IsInit = false;
          this.tableOtherParameter = new (_crd && TableOtherParameter === void 0 ? (_reportPossibleCrUseOfTableOtherParameter({
            error: Error()
          }), TableOtherParameter) : TableOtherParameter)();
          this.tablePictureSet = new (_crd && TablePictureSet === void 0 ? (_reportPossibleCrUseOfTablePictureSet({
            error: Error()
          }), TablePictureSet) : TablePictureSet)();
        }

        getRoleId() {
          return (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
            error: Error()
          }), UtilMgr) : UtilMgr).getRandomNumber(this.SpawnRoleId);
        }

        Init() {
          if (this.IsInit) {
            return;
          }

          this.IsInit = true;

          for (var index = 1; index <= 4; index++) {
            this.LoadRoleAnim(index);
          }
        }

        LoadRoleAnim(roleId) {
          var onCompleteCallback = () => {
            this.SpawnRoleId.push(roleId);
          };

          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.loadDir("animation/fangke/0" + roleId, onCompleteCallback);
        } //每5秒执行一次


        UpdateVisitors() {
          var _this = this;

          this.Init();
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
            }), BoardMgr) : BoardMgr).isHasSuCai() && (_crd && DiningTableMgr === void 0 ? (_reportPossibleCrUseOfDiningTableMgr({
              error: Error()
            }), DiningTableMgr) : DiningTableMgr).IsHasEmptyTable() && this.SpawnRoleId.length > 0) {
              var SpawnNum = (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                error: Error()
              }), UtilMgr) : UtilMgr).getRandomNumber(this.SpawnRoleNum);
              var DiningTableIndex = (_crd && DiningTableMgr === void 0 ? (_reportPossibleCrUseOfDiningTableMgr({
                error: Error()
              }), DiningTableMgr) : DiningTableMgr).GetRandomEmptyTableIndex();

              if (DiningTableIndex >= 0) {
                (_crd && DiningTableMgr === void 0 ? (_reportPossibleCrUseOfDiningTableMgr({
                  error: Error()
                }), DiningTableMgr) : DiningTableMgr).TableList[DiningTableIndex].IsSeat = true;
                var SoundEffect = (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                  error: Error()
                }), UtilMgr) : UtilMgr).getRandomNumber(this.SoundEffects);
                (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                  error: Error()
                }), UtilMgr) : UtilMgr).PlaySoundEffect(SoundEffect);

                var _loop = function _loop(i) {
                  var role = HechengCom.createRole();
                  var noUseRole = new RoleInfo(_this.getRoleId(), i, role, HechengCom.roleParentNode);
                  noUseRole.IsUse = true;
                  noUseRole.RoleNode.active = true;

                  _this.RoleList.push(noUseRole); //const halfRoleHeight = noUseRole.RoleNode.getComponent(UITransform).height / 2;
                  //noUseRole.RoleNode.setPosition((Math.random() - 0.5) * 100, -halfRoleHeight);


                  var roleComponent = noUseRole.RoleNode.getComponent(_crd && RoleComponent === void 0 ? (_reportPossibleCrUseOfRoleComponent({
                    error: Error()
                  }), RoleComponent) : RoleComponent);

                  if (roleComponent) {
                    roleComponent.PlayStandAnim(noUseRole.RoleId);
                  }

                  setTimeout(() => {
                    _this.MoveToPos(noUseRole, DiningTableIndex, SpawnNum, i);
                  }, 2000);
                };

                for (var i = 0; i < SpawnNum; i++) {
                  _loop(i);
                }
              }
            }
          }
        }

        GetNoUseRoleInfo() {
          for (var index = 0; index < this.RoleList.length; index++) {
            var roleInfo = this.RoleList[index];

            if (!roleInfo.IsUse) {
              return roleInfo;
            }
          }

          return null;
        }

        GetRoleNum() {
          return this.RoleList.length;
        }

        MoveToPos(roleInfo, DiningTableIndex, SpawnNum, index) {
          if (roleInfo && roleInfo.RoleNode) {
            var TargetPos = this.getPositionInParent(roleInfo.RoleNode, (_crd && DiningTableMgr === void 0 ? (_reportPossibleCrUseOfDiningTableMgr({
              error: Error()
            }), DiningTableMgr) : DiningTableMgr).TableList[DiningTableIndex].tableNode, index);
            var speed = 100;
            var pos = roleInfo.RoleNode.position;
            var roleComponent = roleInfo.RoleNode.getComponent(_crd && RoleComponent === void 0 ? (_reportPossibleCrUseOfRoleComponent({
              error: Error()
            }), RoleComponent) : RoleComponent);

            if (roleComponent) {
              var vecA = new Vec2(-1, 0);
              vecA.normalize();
              var vecB = new Vec2(TargetPos.x - pos.x, TargetPos.y - pos.y);
              vecB.normalize();
              var angle = misc.radiansToDegrees(Vec2.angle(vecA, vecB));

              if (angle <= 90) {
                roleComponent.SetWalkScaleX(-1);
              } else {
                roleComponent.SetWalkScaleX(1);
              }

              roleComponent.PlayWalkAnim(roleInfo.RoleId);
            }

            var distance = Vec3.distance(pos, TargetPos);
            var moveDuration = distance / speed;
            tween(roleInfo.RoleNode).to(moveDuration, {
              position: TargetPos
            }).call(() => {
              this.OnMoveEnd(roleInfo, DiningTableIndex, SpawnNum, index);
            }).start();
          }
        }

        OnMoveEnd(roleInfo, DiningTableIndex, SpawnNum, index) {
          if (roleInfo && roleInfo.RoleNode) {
            var roleComponent = roleInfo.RoleNode.getComponent(_crd && RoleComponent === void 0 ? (_reportPossibleCrUseOfRoleComponent({
              error: Error()
            }), RoleComponent) : RoleComponent);

            if (roleComponent) {
              if (index == 1) {
                (_crd && DiningTableMgr === void 0 ? (_reportPossibleCrUseOfDiningTableMgr({
                  error: Error()
                }), DiningTableMgr) : DiningTableMgr).TableList[DiningTableIndex].leftChairNode.setParent(roleInfo.RoleNode, true);
              }

              roleComponent.PlaySitAnim(roleInfo.RoleId, roleInfo.IndexId, () => {
                if (index == 0) {
                  (_crd && DiningTableMgr === void 0 ? (_reportPossibleCrUseOfDiningTableMgr({
                    error: Error()
                  }), DiningTableMgr) : DiningTableMgr).ShowFood((_crd && DiningTableMgr === void 0 ? (_reportPossibleCrUseOfDiningTableMgr({
                    error: Error()
                  }), DiningTableMgr) : DiningTableMgr).TableList[DiningTableIndex].tableNode, SpawnNum);
                }

                roleComponent.PlaySitIdleAnim(roleInfo.RoleId, roleInfo.IndexId);
              });
            }

            setTimeout(() => {
              this.ShowMood(roleInfo, DiningTableIndex, index);
              (_crd && DiningTableMgr === void 0 ? (_reportPossibleCrUseOfDiningTableMgr({
                error: Error()
              }), DiningTableMgr) : DiningTableMgr).ClearFood((_crd && DiningTableMgr === void 0 ? (_reportPossibleCrUseOfDiningTableMgr({
                error: Error()
              }), DiningTableMgr) : DiningTableMgr).TableList[DiningTableIndex].tableNode);
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
                  HechengCom.createTuziCoin(roleInfo.RoleNode);
                }
              }
            }, 6000);
          }
        }

        ShowMood(roleInfo, DiningTableIndex, index) {
          var totalNum = 0;
          this.tableOtherParameter.init(12);
          var aixinNum = Number(this.tableOtherParameter.parameter);
          totalNum += aixinNum;
          this.tableOtherParameter.init(13);
          var xiaolianNum = Number(this.tableOtherParameter.parameter);
          totalNum += xiaolianNum;
          var randNum = Math.floor(Math.random() * totalNum);

          if (randNum < aixinNum) {
            this.tablePictureSet.init(5);
          } else {
            this.tablePictureSet.init(6);
          }

          var roleComponent = roleInfo.RoleNode.getComponent(_crd && RoleComponent === void 0 ? (_reportPossibleCrUseOfRoleComponent({
            error: Error()
          }), RoleComponent) : RoleComponent);

          if (roleComponent) {
            roleComponent.roleMood.node.active = true;
            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).SetImage(roleComponent.roleMood, this.tablePictureSet.picture);
            setTimeout(() => {
              roleComponent.roleMood.node.active = false;
              this.MoveBack(roleInfo, DiningTableIndex, index);
            }, 1000);
          }
        }

        MoveBack(roleInfo, DiningTableIndex, index) {
          if (roleInfo && roleInfo.RoleNode) {
            if (index == 1) {
              (_crd && DiningTableMgr === void 0 ? (_reportPossibleCrUseOfDiningTableMgr({
                error: Error()
              }), DiningTableMgr) : DiningTableMgr).TableList[DiningTableIndex].leftChairNode.setParent((_crd && DiningTableMgr === void 0 ? (_reportPossibleCrUseOfDiningTableMgr({
                error: Error()
              }), DiningTableMgr) : DiningTableMgr).TableList[DiningTableIndex].leftParentNode, true);
            }

            var roleComponent = roleInfo.RoleNode.getComponent(_crd && RoleComponent === void 0 ? (_reportPossibleCrUseOfRoleComponent({
              error: Error()
            }), RoleComponent) : RoleComponent);

            if (roleComponent) {
              roleComponent.PlayWalkAnim(roleInfo.RoleId, true);
            }

            var speed = 100;
            var pos = roleInfo.RoleNode.position;
            var halfRoleHeight = roleInfo.RoleNode.getComponent(UITransform).height / 2;
            var TargetPos = new Vec3(50, -halfRoleHeight);
            var distance = Vec3.distance(pos, TargetPos);
            var moveDuration = distance / speed;
            tween(roleInfo.RoleNode).to(moveDuration, {
              position: TargetPos
            }).call(() => {
              if (roleInfo) {
                roleInfo.IsUse = false;
                roleInfo.RoleNode.active = false;
                roleInfo.RoleNode.destroy();
              }

              setTimeout(() => {
                (_crd && DiningTableMgr === void 0 ? (_reportPossibleCrUseOfDiningTableMgr({
                  error: Error()
                }), DiningTableMgr) : DiningTableMgr).TableList[DiningTableIndex].IsSeat = false;
              }, 2000);
            }).start();
          }
        }

        getPositionInParent(roleNode, DiningTableNode, index) {
          var tablePos = new Vec3(DiningTableNode.position.x, DiningTableNode.position.y);

          if (index == 0) {
            tablePos.x = tablePos.x + 70;
            tablePos.y = tablePos.y + 70;
          } else {
            tablePos.x = tablePos.x - 50;
            tablePos.y = tablePos.y + 35;
          }

          var worldPos = DiningTableNode.parent.getComponent(UITransform).convertToWorldSpaceAR(tablePos);
          return roleNode.parent.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
        }

        getChairPositionInParent(ChairNode, roleNode) {
          var rolePos = new Vec3(roleNode.position.x, roleNode.position.y);
          var worldPos = ChairNode.parent.getComponent(UITransform).convertToWorldSpaceAR(rolePos);
          return ChairNode.parent.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
        }

      });

      _export("RoleMgr", RoleMgr = new RoleManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8d311fa546f5620d8083e845a1352a58ecf68f18.js.map