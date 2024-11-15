System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Logger, LanguageData, LanguagePack, LanguageManager, _crd;

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../../../core/common/log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLanguageData(extras) {
    _reporterNs.report("LanguageData", "./LanguageData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLanguagePack(extras) {
    _reporterNs.report("LanguagePack", "./LanguagePack", _context.meta, extras);
  }

  _export("LanguageManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Logger = _unresolved_2.Logger;
    }, function (_unresolved_3) {
      LanguageData = _unresolved_3.LanguageData;
    }, function (_unresolved_4) {
      LanguagePack = _unresolved_4.LanguagePack;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3757cxZqLZObIdvP/gQ6Yuj", "Language", undefined);

      /** 多语言管理器 */
      _export("LanguageManager", LanguageManager = class LanguageManager {
        constructor() {
          this._languages = ["zh", "en", "tr"];
          // 支持的语言
          this._languagePack = new (_crd && LanguagePack === void 0 ? (_reportPossibleCrUseOfLanguagePack({
            error: Error()
          }), LanguagePack) : LanguagePack)();
          // 语言包
          this._defaultLanguage = "zh";
        }

        // 默认语言

        /** 支持的多种语言列表 */
        get languages() {
          return this._languages;
        }

        set languages(languages) {
          this._languages = languages;
        }
        /** 设置的当前语言列表中没有配置时，使用默认语言 */


        set default(lang) {
          this._defaultLanguage = lang || "zh";
        }
        /** 获取当前语种 */


        get current() {
          return (_crd && LanguageData === void 0 ? (_reportPossibleCrUseOfLanguageData({
            error: Error()
          }), LanguageData) : LanguageData).current;
        }
        /** 语言包 */


        get pack() {
          return this._languagePack;
        }
        /**
         * 是否存在指定语言
         * @param lang  语言名
         * @returns 存在返回true,则否false
         */


        isExist(lang) {
          return this.languages.indexOf(lang) > -1;
        }
        /** 获取下一个语种 */


        getNextLang() {
          let supportLangs = this.languages;
          let index = supportLangs.indexOf((_crd && LanguageData === void 0 ? (_reportPossibleCrUseOfLanguageData({
            error: Error()
          }), LanguageData) : LanguageData).current);
          return supportLangs[(index + 1) % supportLangs.length];
        }
        /**
         * 改变语种，会自动下载对应的语种
         * @param language 语言名
         * @param callback 多语言资源数据加载完成回调
         */


        setLanguage(language, callback) {
          if (language == null || language == "") {
            language = this._defaultLanguage;
          } else {
            language = language.toLowerCase();
          }

          let index = this.languages.indexOf(language);

          if (index < 0) {
            console.log(`当前不支持【${language}】语言，将自动切换到【${this._defaultLanguage}】语言`);
            language = this._defaultLanguage;
          }

          if (language === (_crd && LanguageData === void 0 ? (_reportPossibleCrUseOfLanguageData({
            error: Error()
          }), LanguageData) : LanguageData).current) {
            callback(false);
            return;
          }

          this.loadLanguageAssets(language, lang => {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logConfig(`当前语言为【${language}】`);
            const oldLanguage = (_crd && LanguageData === void 0 ? (_reportPossibleCrUseOfLanguageData({
              error: Error()
            }), LanguageData) : LanguageData).current;
            (_crd && LanguageData === void 0 ? (_reportPossibleCrUseOfLanguageData({
              error: Error()
            }), LanguageData) : LanguageData).current = language;

            this._languagePack.updateLanguage(language);

            this._languagePack.releaseLanguageAssets(oldLanguage);

            callback(true);
          });
        }
        /**
         * 根据data获取对应语种的字符
         * @param labId 
         * @param arr 
         */


        getLangByID(labId) {
          return (_crd && LanguageData === void 0 ? (_reportPossibleCrUseOfLanguageData({
            error: Error()
          }), LanguageData) : LanguageData).getLangByID(labId);
        }
        /**
         * 下载语言包素材资源
         * 包括语言json配置和语言纹理包
         * @param lang 
         * @param callback 
         */


        loadLanguageAssets(lang, callback) {
          lang = lang.toLowerCase();
          return this._languagePack.loadLanguageAssets(lang, callback);
        }
        /**
         * 释放不需要的语言包资源
         * @param lang 
         */


        releaseLanguageAssets(lang) {
          lang = lang.toLowerCase();

          this._languagePack.releaseLanguageAssets(lang);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=982b85eec0a66475edda0667ea675f2ae362b23b.js.map