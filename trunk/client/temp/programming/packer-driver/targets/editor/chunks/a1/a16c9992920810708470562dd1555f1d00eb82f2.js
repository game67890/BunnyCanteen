System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var WordArray, swapEndian, Utf16BE, Utf16, Utf16LE;
  return {
    setters: [function (_unresolved_) {
      WordArray = _unresolved_.WordArray;
    }],
    execute: function () {
      swapEndian = word => word << 8 & 0xff00ff00 | word >>> 8 & 0x00ff00ff;
      /**
       * UTF-16 BE encoding strategy.
       */


      _export("Utf16BE", Utf16BE = {
        /**
         * Converts a word array to a UTF-16 BE string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The UTF-16 BE string.
         *
         * @static
         *
         * @example
         *
         *     const utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
         */
        stringify(wordArray) {
          // Shortcuts
          const {
            words,
            sigBytes
          } = wordArray; // Convert

          const utf16Chars = [];

          for (let i = 0; i < sigBytes; i += 2) {
            const codePoint = words[i >>> 2] >>> 16 - i % 4 * 8 & 0xffff;
            utf16Chars.push(String.fromCharCode(codePoint));
          }

          return utf16Chars.join('');
        },

        /**
         * Converts a UTF-16 BE string to a word array.
         *
         * @param {string} utf16Str The UTF-16 BE string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     const wordArray = CryptoJS.enc.Utf16.parse(utf16String);
         */
        parse(utf16Str) {
          // Shortcut
          const utf16StrLength = utf16Str.length; // Convert

          const words = [];

          for (let i = 0; i < utf16StrLength; i += 1) {
            words[i >>> 1] |= utf16Str.charCodeAt(i) << 16 - i % 2 * 16;
          }

          return WordArray.create(words, utf16StrLength * 2);
        }

      });

      _export("Utf16", Utf16 = Utf16BE);
      /**
       * UTF-16 LE encoding strategy.
       */


      _export("Utf16LE", Utf16LE = {
        /**
         * Converts a word array to a UTF-16 LE string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The UTF-16 LE string.
         *
         * @static
         *
         * @example
         *
         *     const utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
         */
        stringify(wordArray) {
          // Shortcuts
          const {
            words,
            sigBytes
          } = wordArray; // Convert

          const utf16Chars = [];

          for (let i = 0; i < sigBytes; i += 2) {
            const codePoint = swapEndian(words[i >>> 2] >>> 16 - i % 4 * 8 & 0xffff);
            utf16Chars.push(String.fromCharCode(codePoint));
          }

          return utf16Chars.join('');
        },

        /**
         * Converts a UTF-16 LE string to a word array.
         *
         * @param {string} utf16Str The UTF-16 LE string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     const wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
         */
        parse(utf16Str) {
          // Shortcut
          const utf16StrLength = utf16Str.length; // Convert

          const words = [];

          for (let i = 0; i < utf16StrLength; i += 1) {
            words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << 16 - i % 2 * 16);
          }

          return WordArray.create(words, utf16StrLength * 2);
        }

      });
    }
  };
});
//# sourceMappingURL=a16c9992920810708470562dd1555f1d00eb82f2.js.map