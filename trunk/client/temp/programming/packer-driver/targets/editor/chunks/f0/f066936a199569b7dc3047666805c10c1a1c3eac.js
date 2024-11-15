System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, StringUtil, _crd;

  _export("StringUtil", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa8435LSBtAR5HPsje6IJ2w", "StringUtil", undefined);

      /** 字符串工具 */
      _export("StringUtil", StringUtil = class StringUtil {
        /** 获取一个唯一标识的字符串 */
        static guid() {
          let guid = "";

          for (let i = 1; i <= 32; i++) {
            let n = Math.floor(Math.random() * 16.0).toString(16);
            guid += n;
            if (i == 8 || i == 12 || i == 16 || i == 20) guid += "-";
          }

          return guid;
        }
        /**
         * 转美式计数字符串
         * @param value 数字
         * @example
         * 123456789 = 123,456,789
         */


        static numberTotPermil(value) {
          return value.toLocaleString();
        }
        /**
         * 转英文单位计数
         * @param value 数字
         * @param fixed 保留小数位数
         * @example
         * 12345 = 12.35K
         */


        static numberToThousand(value, fixed = 2) {
          const k = 1000;
          const sizes = ['', 'K', 'M', 'G'];

          if (value < k) {
            return value.toString();
          } else {
            const i = Math.floor(Math.log(value) / Math.log(k));
            const r = value / Math.pow(k, i);
            return r.toFixed(fixed) + sizes[i];
          }
        }
        /**
         * 转中文单位计数
         * @param value 数字
         * @param fixed 保留小数位数
         * @example
         * 12345 = 1.23万
         */


        static numberToTenThousand(value, fixed = 2) {
          const k = 10000;
          const sizes = ['', '万', '亿', '万亿'];

          if (value < k) {
            return value.toString();
          } else {
            const i = Math.floor(Math.log(value) / Math.log(k));
            return (value / Math.pow(k, i)).toFixed(fixed) + sizes[i];
          }
        }
        /**
         * "," 分割字符串成数组
         * @param str 字符串
         */


        static stringToArray1(str) {
          if (str == "") {
            return [];
          }

          return str.split(",");
        }
        /**
         * "|" 分割字符串成数组
         * @param str 字符串
         */


        static stringToArray2(str) {
          if (str == "") {
            return [];
          }

          return str.split("|");
        }
        /**
         * ":" 分割字符串成数组
         * @param str 字符串
         */


        static stringToArray3(str) {
          if (str == "") {
            return [];
          }

          return str.split(":");
        }
        /**
         * ";" 分割字符串成数组
         * @param str 字符串
         */


        static stringToArray4(str) {
          if (str == "") {
            return [];
          }

          return str.split(";");
        }
        /**
         * 字符串截取
         * @param str     字符串
         * @param n       截取长度
         * @param showdot 是否把截取的部分用省略号代替
         */


        static sub(str, n, showdot = false) {
          const r = /[^\x00-\xff]/g;

          if (str.replace(r, "mm").length <= n) {
            return str;
          }

          const m = Math.floor(n / 2);

          for (let i = m; i < str.length; i++) {
            if (str.substr(0, i).replace(r, "mm").length >= n) {
              if (showdot) {
                return str.substr(0, i) + "...";
              } else {
                return str.substr(0, i);
              }
            }
          }

          return str;
        }
        /**
         * 计算字符串长度，中文算两个字节
         * @param str 字符串
         */


        static stringLen(str) {
          let realLength = 0,
              len = str.length,
              charCode = -1;

          for (let i = 0; i < len; i++) {
            charCode = str.charCodeAt(i);
            if (charCode >= 0 && charCode <= 128) realLength += 1;else realLength += 2;
          }

          return realLength;
        }
        /**
         * 是否为空
         * @param str
         */


        static IsEmpty(str) {
          return str == null || str == undefined || str.length == 0;
        }
        /**
         * 参数替换
         * @param  str
         * @param  rest
         *
         * @example
         *
         * var str:string = "here is some info '{0}' and {1}";
         * StringUtil.substitute(str, 15.4, true);
         *
         * "here is some info '15.4' and true"
         */


        static substitute(str, ...rest) {
          if (str == null) return '';
          let len = rest.length;
          let args;

          if (len == 1 && rest[0] instanceof Array) {
            args = rest[0];
            len = args.length;
          } else {
            args = rest;
          }

          for (let i = 0; i < len; i++) {
            str = str.replace(new RegExp("\\{" + i + "\\}", "g"), args[i]);
          }

          return str;
        } // 新增参数替换


        static substitute_1(str, ...rest) {
          if (str == null) return '';
          let len = rest.length;
          let args;

          if (len == 1 && rest[0] instanceof Array) {
            args = rest[0];
            len = args.length;
          } else {
            args = rest;
          }

          for (let i = 0; i < len; i++) {
            str = str.replace("$parameter" + (i + 1) + "$", args[i]);
          }

          return str;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f066936a199569b7dc3047666805c10c1a1c3eac.js.map