System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, error, JsonAsset, TTFFont, resLoader, Logger, JsonUtil, LanguageData, LanguageLabel, LanguageSpine, LanguageSprite, LanguagePack, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../../../core/common/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../../../core/common/log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJsonUtil(extras) {
    _reporterNs.report("JsonUtil", "../../../core/utils/JsonUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLanguageData(extras) {
    _reporterNs.report("LanguageData", "./LanguageData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLanguageLabel(extras) {
    _reporterNs.report("LanguageLabel", "./LanguageLabel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLanguageSpine(extras) {
    _reporterNs.report("LanguageSpine", "./LanguageSpine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLanguageSprite(extras) {
    _reporterNs.report("LanguageSprite", "./LanguageSprite", _context.meta, extras);
  }

  _export("LanguagePack", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
      error = _cc.error;
      JsonAsset = _cc.JsonAsset;
      TTFFont = _cc.TTFFont;
    }, function (_unresolved_2) {
      resLoader = _unresolved_2.resLoader;
    }, function (_unresolved_3) {
      Logger = _unresolved_3.Logger;
    }, function (_unresolved_4) {
      JsonUtil = _unresolved_4.JsonUtil;
    }, function (_unresolved_5) {
      LanguageData = _unresolved_5.LanguageData;
    }, function (_unresolved_6) {
      LanguageLabel = _unresolved_6.LanguageLabel;
    }, function (_unresolved_7) {
      LanguageSpine = _unresolved_7.LanguageSpine;
    }, function (_unresolved_8) {
      LanguageSprite = _unresolved_8.LanguageSprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2ffebyj59xIc4v4BZty8SDm", "LanguagePack", undefined);
      /*
       * @Author: dgflash
       * @Date: 2021-07-03 16:13:17
       * @LastEditors: dgflash
       * @LastEditTime: 2023-08-22 16:34:28
       */


      __checkObsolete__(['director', 'error', 'JsonAsset', 'TTFFont']);

      _export("LanguagePack", LanguagePack = class LanguagePack {
        /**
         * 刷新语言文字
         * @param lang 
         */
        updateLanguage(lang) {
          var rootNodes = director.getScene().children;

          for (var i = 0; i < rootNodes.length; ++i) {
            // 更新所有的LanguageLabel节点
            var labels = rootNodes[i].getComponentsInChildren(_crd && LanguageLabel === void 0 ? (_reportPossibleCrUseOfLanguageLabel({
              error: Error()
            }), LanguageLabel) : LanguageLabel);

            for (var j = 0; j < labels.length; j++) {
              labels[j].language();
            } // 更新所有的LanguageSprite节点


            var sprites = rootNodes[i].getComponentsInChildren(_crd && LanguageSprite === void 0 ? (_reportPossibleCrUseOfLanguageSprite({
              error: Error()
            }), LanguageSprite) : LanguageSprite);

            for (var _j = 0; _j < sprites.length; _j++) {
              sprites[_j].language();
            } // 更新所有的LanguageSpine节点


            var spines = rootNodes[i].getComponentsInChildren(_crd && LanguageSpine === void 0 ? (_reportPossibleCrUseOfLanguageSpine({
              error: Error()
            }), LanguageSpine) : LanguageSpine);

            for (var _j2 = 0; _j2 < spines.length; _j2++) {
              spines[_j2].language();
            }
          }
        }
        /**
         * 下载对应语言包资源
         * @param lang 语言标识
         * @param callback 下载完成回调
         */


        loadLanguageAssets(lang, callback) {
          var _this = this;

          return _asyncToGenerator(function* () {
            yield _this.loadTexture(lang);
            yield _this.loadSpine(lang);
            yield _this.loadJson(lang);
            yield _this.loadTable(lang);
            callback(lang);
          })();
        }
        /** 多语言Excel配置表数据 */


        loadTable(lang) {
          return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve, reject) {
            (_crd && LanguageData === void 0 ? (_reportPossibleCrUseOfLanguageData({
              error: Error()
            }), LanguageData) : LanguageData).excel = yield (_crd && JsonUtil === void 0 ? (_reportPossibleCrUseOfJsonUtil({
              error: Error()
            }), JsonUtil) : JsonUtil).loadAsync("Language");

            if ((_crd && LanguageData === void 0 ? (_reportPossibleCrUseOfLanguageData({
              error: Error()
            }), LanguageData) : LanguageData).excel) {
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logConfig("config/game/Language", "下载语言包 table 资源");
            }

            resolve(null);
          }));
        }
        /** 纹理多语言资源 */


        loadTexture(lang) {
          return new Promise((resolve, reject) => {
            var path = (_crd && LanguageData === void 0 ? (_reportPossibleCrUseOfLanguageData({
              error: Error()
            }), LanguageData) : LanguageData).path_texture + "/" + lang;
            (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).loadDir(path, (err, assets) => {
              if (err) {
                error(err);
                resolve(null);
                return;
              }

              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logConfig(path, "下载语言包 textures 资源");
              resolve(null);
            });
          });
        }
        /** Json格式多语言资源 */


        loadJson(lang) {
          return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve, reject) {
            var path = (_crd && LanguageData === void 0 ? (_reportPossibleCrUseOfLanguageData({
              error: Error()
            }), LanguageData) : LanguageData).path_json + "/" + lang;
            var jsonAsset = yield (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).loadAsync(path, JsonAsset);

            if (jsonAsset) {
              (_crd && LanguageData === void 0 ? (_reportPossibleCrUseOfLanguageData({
                error: Error()
              }), LanguageData) : LanguageData).json = jsonAsset.json;
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logConfig(path, "下载语言包 json 资源");
            } else {
              resolve(null);
              return;
            }

            (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).load(path, TTFFont, (err, font) => {
              if (err == null) (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logConfig(path, "下载语言包 ttf 资源");
              (_crd && LanguageData === void 0 ? (_reportPossibleCrUseOfLanguageData({
                error: Error()
              }), LanguageData) : LanguageData).font = font;
              resolve(null);
            });
          }));
        }
        /** SPINE动画多语言资源 */


        loadSpine(lang) {
          return new Promise( /*#__PURE__*/_asyncToGenerator(function* (resolve, reject) {
            var path = (_crd && LanguageData === void 0 ? (_reportPossibleCrUseOfLanguageData({
              error: Error()
            }), LanguageData) : LanguageData).path_spine + "/" + lang;
            (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).loadDir(path, (err, assets) => {
              if (err) {
                error(err);
                resolve(null);
                return;
              }

              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logConfig(path, "下载语言包 spine 资源");
              resolve(null);
            });
          }));
        }
        /**
         * 释放某个语言的语言包资源包括json
         * @param lang 
         */


        releaseLanguageAssets(lang) {
          var langTexture = (_crd && LanguageData === void 0 ? (_reportPossibleCrUseOfLanguageData({
            error: Error()
          }), LanguageData) : LanguageData).path_texture + "/" + lang;
          (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
            error: Error()
          }), resLoader) : resLoader).releaseDir(langTexture);
          var langJson = (_crd && LanguageData === void 0 ? (_reportPossibleCrUseOfLanguageData({
            error: Error()
          }), LanguageData) : LanguageData).path_json + "/" + lang;
          var json = (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
            error: Error()
          }), resLoader) : resLoader).get(langJson, JsonAsset);

          if (json) {
            json.decRef();
          }

          var font = (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
            error: Error()
          }), resLoader) : resLoader).get(langJson, TTFFont);

          if (font) {
            font.decRef();
          }

          var langSpine = (_crd && LanguageData === void 0 ? (_reportPossibleCrUseOfLanguageData({
            error: Error()
          }), LanguageData) : LanguageData).path_spine + "/" + lang;
          (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
            error: Error()
          }), resLoader) : resLoader).release(langSpine);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e9c550f982dfe9f7026aed2ca838efd6799b45f9.js.map