System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var CipherParams, Hex, HexFormatter;
  return {
    setters: [function (_unresolved_) {
      CipherParams = _unresolved_.CipherParams;
    }, function (_unresolved_2) {
      Hex = _unresolved_2.Hex;
    }],
    execute: function () {
      _export("HexFormatter", HexFormatter = {
        /**
         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
         *
         * @param {CipherParams} cipherParams The cipher params object.
         *
         * @return {string} The hexadecimally encoded string.
         *
         * @static
         *
         * @example
         *
         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
         */
        stringify(cipherParams) {
          return cipherParams.ciphertext.toString(Hex);
        },

        /**
         * Converts a hexadecimally encoded ciphertext string to a cipher params object.
         *
         * @param {string} input The hexadecimally encoded string.
         *
         * @return {CipherParams} The cipher params object.
         *
         * @static
         *
         * @example
         *
         *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
         */
        parse(input) {
          var ciphertext = Hex.parse(input);
          return CipherParams.create({
            ciphertext
          });
        }

      });
    }
  };
});
//# sourceMappingURL=61cc4309a96c91ea3f13ffd2c1c7bfb1aada17c2.js.map