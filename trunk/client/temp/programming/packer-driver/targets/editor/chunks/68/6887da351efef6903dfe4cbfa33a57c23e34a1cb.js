System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, Label, tween, v3, TableIngredients, BoardMgr, UtilMgr, LiWuMgr, oops, UIID, HeChengComponent, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, GridComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTableIngredients(extras) {
    _reporterNs.report("TableIngredients", "../../framework/common/table/TableIngredients", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoardMgr(extras) {
    _reporterNs.report("BoardMgr", "../manager/BoardManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLiWuMgr(extras) {
    _reporterNs.report("LiWuMgr", "../liwu/LiWuManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../framework/common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeChengComponent(extras) {
    _reporterNs.report("HeChengComponent", "../hecheng/HeChengComponent", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      tween = _cc.tween;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      TableIngredients = _unresolved_2.TableIngredients;
    }, function (_unresolved_3) {
      BoardMgr = _unresolved_3.BoardMgr;
    }, function (_unresolved_4) {
      UtilMgr = _unresolved_4.UtilMgr;
    }, function (_unresolved_5) {
      LiWuMgr = _unresolved_5.LiWuMgr;
    }, function (_unresolved_6) {
      oops = _unresolved_6.oops;
    }, function (_unresolved_7) {
      UIID = _unresolved_7.UIID;
    }, function (_unresolved_8) {
      HeChengComponent = _unresolved_8.HeChengComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e8a09xdzVdLA4mMzFBEjgSI", "GridComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'Label', 'resources', 'SpriteAtlas', 'tween', 'v3', 'Vec3']);

      __checkObsolete__(['Tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GridComponent", GridComponent = (_dec = ccclass('GridComponent'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec(_class = (_class2 = class GridComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "SuCaiSprite", _descriptor, this);

          _initializerDefineProperty(this, "SuCaiLevel", _descriptor2, this);

          _initializerDefineProperty(this, "LiwuSprite", _descriptor3, this);

          _initializerDefineProperty(this, "SuCaiSelect", _descriptor4, this);

          this.index = -1;
          this._tsIngredients = new (_crd && TableIngredients === void 0 ? (_reportPossibleCrUseOfTableIngredients({
            error: Error()
          }), TableIngredients) : TableIngredients)();
          this._tweenRF = null;
          this.shakeDuration = 0.1;
          // 单次晃动的时间
          this.shakeCount = 4;
          // 每次晃动的次数
          this.interval = 4;
          // 停止后再次晃动的间隔（秒）
          this.posX = 0;
          this.posY = 0;
        }

        setVisible(visible) {
          this.SuCaiSelect.node.active = false;
          this.SuCaiSprite.node.active = visible;
          this.SuCaiLevel.node.active = visible;

          if (visible && this.index >= 0 && (_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
            error: Error()
          }), BoardMgr) : BoardMgr).board[this.index]) {
            if ((_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
              error: Error()
            }), BoardMgr) : BoardMgr).board[this.index].SuCaiId > 0) {
              this._tsIngredients.init((_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
                error: Error()
              }), BoardMgr) : BoardMgr).board[this.index].SuCaiId);

              (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                error: Error()
              }), UtilMgr) : UtilMgr).SetImage(this.SuCaiSprite, this._tsIngredients.picture);
            }
          }
        }

        setLiwuVisible(visible) {
          this.SuCaiSelect.node.active = false;
          this.LiwuSprite.node.active = visible;

          if (visible) {
            (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
              error: Error()
            }), UtilMgr) : UtilMgr).SetImage(this.LiwuSprite, "textures/UI/baluobo/baluobo;liwu");

            if (this._tweenRF == null) {
              let LiwuPos = this.LiwuSprite.node.getPosition();
              this.posX = LiwuPos.x;
              this.posY = LiwuPos.y;
              this._tweenRF = tween(this.LiwuSprite.node).repeat(4, tween(this.LiwuSprite.node).sequence(tween(this.LiwuSprite.node).to(this.shakeDuration, {
                position: v3(this.posX + 1, this.posY, 0)
              }, {
                easing: 'quadIn'
              }), tween(this.LiwuSprite.node).to(this.shakeDuration, {
                position: v3(this.posX - 1, this.posY, 0)
              }, {
                easing: 'quadOut'
              })));
            }

            this.schedule(this.startDiagonalShake, this.interval + this.shakeDuration * this.shakeCount * 2);
          } else {
            if (this._tweenRF) {
              this._tweenRF.stop();
            }
          }
        }

        startDiagonalShake() {
          if (this._tweenRF && this.LiwuSprite.node.active) {
            this._tweenRF.start();
          }
        }

        setLevel(level) {
          this.SuCaiLevel.string = level.toString();
        }

        onClick() {
          if ((_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
            error: Error()
          }), BoardMgr) : BoardMgr).board[this.index].IsLiWu && !(_crd && BoardMgr === void 0 ? (_reportPossibleCrUseOfBoardMgr({
            error: Error()
          }), BoardMgr) : BoardMgr).board[this.index].IsLiWuFlying) {
            (_crd && LiWuMgr === void 0 ? (_reportPossibleCrUseOfLiWuMgr({
              error: Error()
            }), LiWuMgr) : LiWuMgr).openLiwu(this.index);
          }
        }

        setSelectVisible(visible) {
          this.SuCaiSelect.node.active = visible;
        }

        ShowSucaiSelect(isShow) {
          const HechengGUI = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.get((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).MainUI);

          if (HechengGUI) {
            const HechengCom = HechengGUI.getComponent(_crd && HeChengComponent === void 0 ? (_reportPossibleCrUseOfHeChengComponent({
              error: Error()
            }), HeChengComponent) : HeChengComponent);

            if (HechengCom) {
              HechengCom.ShowSucaiSelect(isShow, this.index);
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "SuCaiSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "SuCaiLevel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "LiwuSprite", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "SuCaiSelect", [_dec5], {
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
//# sourceMappingURL=6887da351efef6903dfe4cbfa33a57c23e34a1cb.js.map