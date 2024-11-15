System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE

        /*!
        	Copyright (c) 2018 Jed Watson.
        	Licensed under the MIT License (MIT), see
        	http://jedwatson.github.io/classnames
        */

        /* global define */
        (function () {
          'use strict';

          var hasOwn = {}.hasOwnProperty;

          function classNames() {
            var classes = '';

            for (var i = 0; i < arguments.length; i++) {
              var arg = arguments[i];

              if (arg) {
                classes = appendClass(classes, parseValue(arg));
              }
            }

            return classes;
          }

          function parseValue(arg) {
            if (typeof arg === 'string' || typeof arg === 'number') {
              return arg;
            }

            if (typeof arg !== 'object') {
              return '';
            }

            if (Array.isArray(arg)) {
              return classNames.apply(null, arg);
            }

            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
              return arg.toString();
            }

            var classes = '';

            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes = appendClass(classes, key);
              }
            }

            return classes;
          }

          function appendClass(value, newClass) {
            if (!newClass) {
              return value;
            }

            if (value) {
              return value + ' ' + newClass;
            }

            return value + newClass;
          }

          if (typeof module !== 'undefined' && module.exports) {
            classNames.default = classNames;
            module.exports = classNames;
          } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
            // register as 'classnames', consistent with npm package name
            define('classnames', [], function () {
              return classNames;
            });
          } else {
            window.classNames = classNames;
          }
        })(); // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=ac8d8407f6c01f7231079790901860dcd05d158b.js.map