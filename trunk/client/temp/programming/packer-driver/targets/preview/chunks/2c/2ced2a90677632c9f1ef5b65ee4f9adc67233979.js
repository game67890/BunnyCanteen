System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "80ebbBz8etB5qijWdYrU2HH", "DateExt", undefined);

      /** 格式化时间字符串 */
      Date.prototype.format = function (format) {
        var year = this.getFullYear();
        var month = this.getMonth() + 1;
        var day = this.getDate();
        var hours = this.getHours();
        var minutes = this.getMinutes();
        var seconds = this.getSeconds();
        return format.replace('yy', year.toString()).replace('mm', (month < 10 ? '0' : '') + month).replace('dd', (day < 10 ? '0' : '') + day).replace('hh', (hours < 10 ? '0' : '') + hours).replace('mm', (minutes < 10 ? '0' : '') + minutes).replace('ss', (seconds < 10 ? '0' : '') + seconds);
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2ced2a90677632c9f1ef5b65ee4f9adc67233979.js.map