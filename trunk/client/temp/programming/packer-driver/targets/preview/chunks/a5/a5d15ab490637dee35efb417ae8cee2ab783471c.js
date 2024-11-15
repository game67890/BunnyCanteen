System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, oops, GameEvent, UIID, TableAccelerate, HeChengComponent, ProtocolMgr, TonGameMgr, UtilMgr, AcceleratedBuffMain, AcceleratedBuffData, AcceleratedBuffManager, _crd, AcceleratedBuffMgr;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpReturn(extras) {
    _reporterNs.report("HttpReturn", "../../../../extensions/oops-plugin-framework/assets/libs/network/HttpRequest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../framework/common/config/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../framework/common/config/GameUIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableAccelerate(extras) {
    _reporterNs.report("TableAccelerate", "../../framework/common/table/TableAccelerate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeChengComponent(extras) {
    _reporterNs.report("HeChengComponent", "../hecheng/HeChengComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocolMgr(extras) {
    _reporterNs.report("ProtocolMgr", "../manager/ProtocolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonGameMgr(extras) {
    _reporterNs.report("TonGameMgr", "../manager/TonGameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtilMgr(extras) {
    _reporterNs.report("UtilMgr", "../manager/UtilManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAcceleratedBuffMain(extras) {
    _reporterNs.report("AcceleratedBuffMain", "./AcceleratedBuffMain", _context.meta, extras);
  }

  _export("AcceleratedBuffManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      GameEvent = _unresolved_3.GameEvent;
    }, function (_unresolved_4) {
      UIID = _unresolved_4.UIID;
    }, function (_unresolved_5) {
      TableAccelerate = _unresolved_5.TableAccelerate;
    }, function (_unresolved_6) {
      HeChengComponent = _unresolved_6.HeChengComponent;
    }, function (_unresolved_7) {
      ProtocolMgr = _unresolved_7.ProtocolMgr;
    }, function (_unresolved_8) {
      TonGameMgr = _unresolved_8.TonGameMgr;
    }, function (_unresolved_9) {
      UtilMgr = _unresolved_9.UtilMgr;
    }, function (_unresolved_10) {
      AcceleratedBuffMain = _unresolved_10.AcceleratedBuffMain;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6ca2b4AhORKs708rRu/0irb", "AcceleratedBuffManager", undefined);

      AcceleratedBuffData = class AcceleratedBuffData {
        constructor() {
          this.acceleratetime = 0;
          this.acceleratevalue = 0;
        }

      };

      _export("AcceleratedBuffManager", AcceleratedBuffManager = class AcceleratedBuffManager {
        constructor() {
          this.IsGetFreeBuff = false;
          // 是否已领取免费buff
          this.GetFreeBuffTimeStamp = 0;
          // 领取免费buff的时间戳
          this.IsGetShareBuff = false;
          // 是否已领取分享buff
          this.GetShareBuffTimeStamp = 0;
          // 领取分享buff的时间戳
          this.AcceleratedList_1 = [];
          this.AcceleratedList_2 = [];
          this.AccelerateTime = 0;
        }

        // 剩余加速时长
        // 用来计算离线时的收益
        OfflineAccelerateGain(usetime) {
          var lixiangain = 0;

          for (var i = 0; i < usetime; i++) {
            if (this.AcceleratedList_1.length > 0) {
              var item = this.AcceleratedList_1[0];

              if (this.AcceleratedList_1[0].acceleratetime > 0) {
                this.AcceleratedList_1[0].acceleratetime = this.AcceleratedList_1[0].acceleratetime - 1;
                (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).AcceAddtionGain_1 = this.AcceleratedList_1[0].acceleratevalue / 100;

                if (this.AcceleratedList_1[0].acceleratetime <= 0) {
                  (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                    error: Error()
                  }), TonGameMgr) : TonGameMgr).AcceAddtionGain_1 = 0;
                  this.AcceleratedList_1.splice(0, 1);
                }
              }
            } else {
              (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).AcceAddtionGain_1 = 0;
            }

            if (this.AcceleratedList_2.length > 0) {
              var _item = this.AcceleratedList_2[0];

              if (this.AcceleratedList_2[0].acceleratetime > 0) {
                this.AcceleratedList_2[0].acceleratetime = this.AcceleratedList_2[0].acceleratetime - 1;
                (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).AcceAddtionGain_2 = this.AcceleratedList_2[0].acceleratevalue;

                if (this.AcceleratedList_2[0].acceleratetime <= 0) {
                  (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                    error: Error()
                  }), TonGameMgr) : TonGameMgr).AcceAddtionGain_2 = 0;
                  this.AcceleratedList_2.splice(0, 1);
                }
              }
            } else {
              (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).AcceAddtionGain_2 = 0;
            }

            lixiangain = lixiangain + (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).GetRealCanTingGain();
          }

          this.AccelerateTime = this.getAccelerateTime();
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UpdateBaseData);
          return lixiangain;
        } // 每秒更新加速信息


        onUpdataAccelerateInfo() {
          if (this.AcceleratedList_1.length > 0) {
            var item = this.AcceleratedList_1[0];

            if (this.AcceleratedList_1[0].acceleratetime > 0) {
              this.AcceleratedList_1[0].acceleratetime = this.AcceleratedList_1[0].acceleratetime - 1;

              if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).AcceAddtionGain_1 != this.AcceleratedList_1[0].acceleratevalue / 100) {
                (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).AcceAddtionGain_1 = this.AcceleratedList_1[0].acceleratevalue / 100;
                (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                  error: Error()
                }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                  error: Error()
                }), GameEvent) : GameEvent).UpdateBaseData);
              }

              (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).AcceAddtionGain_1 = this.AcceleratedList_1[0].acceleratevalue / 100;

              if (this.AcceleratedList_1[0].acceleratetime <= 0) {
                (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).AcceAddtionGain_1 = 0;
                (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                  error: Error()
                }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                  error: Error()
                }), GameEvent) : GameEvent).UpdateBaseData);
                this.AcceleratedList_1.splice(0, 1);
              }
            }
          } else {
            (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).AcceAddtionGain_1 = 0;
          }

          if (this.AcceleratedList_2.length > 0) {
            var _item2 = this.AcceleratedList_2[0];

            if (this.AcceleratedList_2[0].acceleratetime > 0) {
              this.AcceleratedList_2[0].acceleratetime = this.AcceleratedList_2[0].acceleratetime - 1;

              if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).AcceAddtionGain_2 != this.AcceleratedList_2[0].acceleratevalue) {
                (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).AcceAddtionGain_2 = this.AcceleratedList_2[0].acceleratevalue;
                (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                  error: Error()
                }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                  error: Error()
                }), GameEvent) : GameEvent).UpdateBaseData);
              }

              if (this.AcceleratedList_2[0].acceleratetime <= 0) {
                (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).AcceAddtionGain_2 = 0;
                (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                  error: Error()
                }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                  error: Error()
                }), GameEvent) : GameEvent).UpdateBaseData);
                this.AcceleratedList_2.splice(0, 1);
              }
            }
          } else {
            (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).AcceAddtionGain_2 = 0;
          }

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
              HechengCom.RefreshBuffIcon();
            }
          }

          var buffGUI = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).gui.get((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).AcceleratedBuffBuyMain);

          if (buffGUI) {
            var buffCom = buffGUI.getComponent(_crd && AcceleratedBuffMain === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMain({
              error: Error()
            }), AcceleratedBuffMain) : AcceleratedBuffMain);

            if (buffCom) {
              buffCom.RefreshBuffIcon();
            }
          }
        }

        UpdateAccelerateTime() {
          if (this.AccelerateTime > 0) {
            if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).CurBGM == 22 || (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).CurBGM == 0) {
              (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                error: Error()
              }), UtilMgr) : UtilMgr).StopBgMusic();
              (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                error: Error()
              }), UtilMgr) : UtilMgr).PlayBgMusic(23);
            }

            this.AccelerateTime = this.AccelerateTime - 1;

            if (this.AccelerateTime <= 0) {
              this.AccelerateTime = 0;

              if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).CurBGM == 23 || (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).CurBGM == 0) {
                (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                  error: Error()
                }), UtilMgr) : UtilMgr).StopBgMusic();
                (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                  error: Error()
                }), UtilMgr) : UtilMgr).PlayBgMusic(22);
              }
            }
          } else {
            if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).CurBGM == 23 || (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
              error: Error()
            }), TonGameMgr) : TonGameMgr).CurBGM == 0) {
              (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                error: Error()
              }), UtilMgr) : UtilMgr).StopBgMusic();
              (_crd && UtilMgr === void 0 ? (_reportPossibleCrUseOfUtilMgr({
                error: Error()
              }), UtilMgr) : UtilMgr).PlayBgMusic(22);
            }
          }
        } // 根据配置信息添加一条buff信息


        addAccelerateInfoById(configid) {
          var tablerecord = new (_crd && TableAccelerate === void 0 ? (_reportPossibleCrUseOfTableAccelerate({
            error: Error()
          }), TableAccelerate) : TableAccelerate)();
          tablerecord.init(configid);
          this.addAccelerateInfo(tablerecord.type, tablerecord.time, tablerecord.effect);
          this.AccelerateTime = this.getAccelerateTime();
        } // 添加一条buff信息


        addAccelerateInfo(acceleratetype, time, value) {
          var item = {
            acceleratetime: time,
            acceleratevalue: value
          };

          if (acceleratetype == 1) {
            this.AcceleratedList_1.push(item);
          } else if (acceleratetype == 2) {
            this.AcceleratedList_2.push(item);
          }

          this.AccelerateTime = this.getAccelerateTime();
        } // 判断当前是否有加成buff


        isAccelerating() {
          for (var i = 0; i < this.AcceleratedList_1.length; i++) {
            if (this.AcceleratedList_1[i].acceleratetime > 0) {
              return true;
            }
          }

          for (var _i = 0; _i < this.AcceleratedList_2.length; _i++) {
            if (this.AcceleratedList_2[_i].acceleratetime > 0) {
              return true;
            }
          }

          return false;
        } // 获取剩余加速时间


        getAccelerateTime() {
          var time_1 = 0;
          var time_2 = 0;

          for (var i = 0; i < this.AcceleratedList_1.length; i++) {
            if (this.AcceleratedList_1[i].acceleratetime > 0) {
              time_1 = time_1 + this.AcceleratedList_1[i].acceleratetime;
            }
          }

          for (var _i2 = 0; _i2 < this.AcceleratedList_2.length; _i2++) {
            if (this.AcceleratedList_2[_i2].acceleratetime > 0) {
              time_2 = time_2 + this.AcceleratedList_2[_i2].acceleratetime;
            }
          }

          if (time_1 > time_2) {
            return time_1;
          } else {
            return time_2;
          }
        }

        SendBuyBuff(confId) {
          var completeCBuyBuff = ret => {
            console.log(ret.res);

            if (ret.isSucc && Number(ret.res.confId) != -1) {
              var tablerecord = new (_crd && TableAccelerate === void 0 ? (_reportPossibleCrUseOfTableAccelerate({
                error: Error()
              }), TableAccelerate) : TableAccelerate)();
              tablerecord.init(Number(ret.res.confId));
              this.addAccelerateInfoById(confId);

              if (tablerecord.cost == 1) {
                AcceleratedBuffMgr.IsGetFreeBuff = true;
                AcceleratedBuffMgr.GetFreeBuffTimeStamp = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                  error: Error()
                }), oops) : oops).timer.getServerTime();
              } else if (tablerecord.cost == 2) {
                AcceleratedBuffMgr.IsGetShareBuff = true;
                AcceleratedBuffMgr.GetShareBuffTimeStamp = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                  error: Error()
                }), oops) : oops).timer.getServerTime();
              } else if (tablerecord.cost == 3) {
                (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).updateCarrotCoin((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                  error: Error()
                }), TonGameMgr) : TonGameMgr).CarrotCoin - tablerecord.costnum);
              }

              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).UpdateBaseData);
              (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                error: Error()
              }), oops) : oops).message.dispatchEvent((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
                error: Error()
              }), GameEvent) : GameEvent).Save);
            }
          };

          var data = {};
          data.confId = confId.toString();
          data.userID = (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).UserId;
          data.token = "e10adc3949ba59abbe56e057f20f883e";
          var param = JSON.stringify(data);
          (_crd && ProtocolMgr === void 0 ? (_reportPossibleCrUseOfProtocolMgr({
            error: Error()
          }), ProtocolMgr) : ProtocolMgr).sendcbuybuff(completeCBuyBuff, param);
        }

      });

      _export("AcceleratedBuffMgr", AcceleratedBuffMgr = new AcceleratedBuffManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a5d15ab490637dee35efb417ae8cee2ab783471c.js.map