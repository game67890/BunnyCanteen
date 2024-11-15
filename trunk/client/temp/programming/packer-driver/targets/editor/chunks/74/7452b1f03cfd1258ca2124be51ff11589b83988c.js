System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, director, Singleton, GameSceneManager, _crd, StartSceneMode;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "./singleton", _context.meta, extras);
  }

  _export("GameSceneManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
      director = _cc.director;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "12d7c503/ZLtLoXOqzGLMNA", "scene_manager", undefined);

      __checkObsolete__(['log', 'director']);

      // 启动场景的模式
      _export("StartSceneMode", StartSceneMode = /*#__PURE__*/function (StartSceneMode) {
        StartSceneMode[StartSceneMode["STANDARD"] = 0] = "STANDARD";
        StartSceneMode[StartSceneMode["SINGLE_TOP"] = 1] = "SINGLE_TOP";
        StartSceneMode[StartSceneMode["CLEAR_STACK"] = 2] = "CLEAR_STACK";
        StartSceneMode[StartSceneMode["TEMPORARY"] = 3] = "TEMPORARY";
        return StartSceneMode;
      }({})); // 游戏场景管理器


      _export("GameSceneManager", GameSceneManager = class GameSceneManager extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton)() {
        constructor() {
          super();
          this._sceneStack = [];
          this._curSceneName = void 0;
          this._data = void 0;
          this._isLoadingScene = false;
          this._countDownTimer = null;
          this._loadSceneTimeout = 10 * 1000;
        }
        /**
         * SceneManager 初始化
         * 因为游戏默认启动一个场景，所以第一个场景并不是由 SceneManager 启动，所以通过此方法设定默认启动的场景
         * @param initSceneName 第一个场景的场景名
         */


        init(initSceneName) {
          if (this._sceneStack.length == 0 && initSceneName) {
            this._sceneStack.push({
              sceneName: initSceneName,
              isTempScene: false
            });
          }
        }
        /**
         * 获取当前的场景栈
         */


        get getSceneStack() {
          return this._sceneStack.slice();
        }
        /**
         * 获取上一个场景传递过来的数据
         */


        get getSceneData() {
          return this._data;
        }
        /**
         * 获取当前场景名
         */


        get getSceneName() {
          return this._curSceneName;
        }
        /**
         * @description 启动一个场景
         * @param sceneName 要启动的场景名称
         * @param options 要传递的数据
         */


        startScene(sceneName, options) {
          if (this._isLoadingScene) {
            log(GameSceneManager.TAG, 'It is loading scene now, skip this invoke.');
            return;
          }

          try {
            if (!sceneName) {
              this._isLoadingScene = false;
              return;
            }

            if (!options) {
              options = {};
            }

            let nameArray = sceneName.split('/');
            sceneName = nameArray[nameArray.length - 1];
            this._isLoadingScene = true;
            this._data = options.data;
            this.doStartScene(sceneName, options.startMode, options.onSceneLaunched);
          } catch (err) {
            this._isLoadingScene = false;
            log(GameSceneManager.TAG, 'startScene err=' + err);
          }
        }
        /**
         * @description 回到上一个场景
         * @param options 需要传递给上一个场景的数据
         */


        backScene(options) {
          if (this._isLoadingScene) {
            log(GameSceneManager.TAG, 'It is loading back scene now, skip this invoke.');
            return;
          }

          try {
            if (this._sceneStack.length <= 1) {
              log(GameSceneManager.TAG, 'This is last scene.');
              this._isLoadingScene = false;
              return false;
            }

            if (!options) {
              options = {};
            }

            let sceneInfo = this.getBackSceneInfo();

            if (!sceneInfo.sceneName) {
              log(GameSceneManager.TAG, 'backScene failed: sceneName is null');
              return;
            }

            this._isLoadingScene = true;
            this._data = options.data;
            this.doGoBackScene(sceneInfo.sceneName, options.onSceneLaunched);
          } catch (err) {
            log(GameSceneManager.TAG, 'backscene err=' + err);
            this._isLoadingScene = false;
          }

          return true;
        }
        /**
         * @description 获取返回的场景信息
         */


        getBackSceneInfo() {
          let sceneInfo;

          for (let i = this._sceneStack.length - 2; i >= 0; i--) {
            sceneInfo = this._sceneStack[i];

            if (!sceneInfo.isTempScene) {
              break;
            }
          }

          return sceneInfo;
        }
        /**
         * @description 开始启动场景，并处理场景栈
         * @param sceneName 场景名
         * @param startMode 启动模式
         * @param onSceneLaunched 场景启动完成后的回调
         */


        doStartScene(sceneName, startMode, onSceneLaunched) {
          this.countDownLoadScene();
          let isLoadSuccess = director.loadScene(sceneName, (...args) => {
            this.handleStackByMode(sceneName, startMode);
            this._curSceneName = sceneName;
            this._isLoadingScene = false;
            log(GameSceneManager.TAG, 'loadScene Finish');
            this.cancelCountDownTimer();

            if (onSceneLaunched) {
              onSceneLaunched(...args);
            }
          });
          log(GameSceneManager.TAG, sceneName + ' isLoadSuccess: ' + isLoadSuccess);

          if (!isLoadSuccess) {
            this._isLoadingScene = false;
          }
        }
        /**
         * @description 开始返回场景
         * @param {String} sceneName 要返回的名字
         * @param onSceneLaunched 返回场景成功后的回调
         */


        doGoBackScene(sceneName, onSceneLaunched) {
          this.countDownLoadScene();
          let isLoadSuccess = director.loadScene(sceneName, (...args) => {
            this._isLoadingScene = false;
            this.cancelCountDownTimer();
            log(GameSceneManager.TAG, 'backScene Finish');
            this._curSceneName = sceneName;
            this.handleBackSceneStack();

            if (onSceneLaunched) {
              onSceneLaunched(...args);
            }
          });
          log(GameSceneManager.TAG, 'backScene isSuccess ' + sceneName + ' ' + isLoadSuccess);

          if (!isLoadSuccess) {
            this._isLoadingScene = false;
          }
        }
        /**
         * @description 处理返回场景时的栈
         */


        handleBackSceneStack() {
          this._sceneStack.pop();

          let sceneInfo = this._sceneStack[this._sceneStack.length - 1];

          while (sceneInfo.isTempScene) {
            this._sceneStack.pop();

            sceneInfo = this._sceneStack[this._sceneStack.length - 1];
          }
        }
        /**
         * @description 处理不同启动模式时的入栈情况
         * @param sceneName 要入栈的scene名称
         * @param startMode 启动模式
         */


        handleStackByMode(sceneName, startMode) {
          if (!startMode) {
            startMode = StartSceneMode.STANDARD;
          }

          let isTemp = false;

          switch (startMode) {
            case StartSceneMode.STANDARD:
              break;

            case StartSceneMode.SINGLE_TOP:
              let index = -1;

              for (let i = 0; i < this._sceneStack.length; i++) {
                if (sceneName == this._sceneStack[i].sceneName) {
                  index = i;
                  break;
                }
              }

              if (index != -1) {
                this._sceneStack.splice(index, this._sceneStack.length - index);
              }

              break;

            case StartSceneMode.CLEAR_STACK:
              this._sceneStack = [];
              break;

            case StartSceneMode.TEMPORARY:
              isTemp = true;
              break;

            default:
          }

          this._sceneStack.push({
            sceneName: sceneName,
            isTempScene: isTemp
          });
        }
        /**
         * @description 加载场景的计时器，防止加载一个场景卡死无回调时，SceneManager 无法启动其他场景的问题
         */


        countDownLoadScene() {
          log(GameSceneManager.TAG, 'begin count down loadScene.');
          this.cancelCountDownTimer();
          this._countDownTimer = setTimeout(() => {
            this._isLoadingScene = false;
            log(GameSceneManager.TAG, 'loadScene timeout');
            this.cancelCountDownTimer();
          }, this._loadSceneTimeout);
        }

        cancelCountDownTimer() {
          if (this._countDownTimer) {
            clearTimeout(this._countDownTimer);
            this._countDownTimer = null;
          }
        }

      });

      GameSceneManager.TAG = 'GameSceneManager';

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7452b1f03cfd1258ca2124be51ff11589b83988c.js.map