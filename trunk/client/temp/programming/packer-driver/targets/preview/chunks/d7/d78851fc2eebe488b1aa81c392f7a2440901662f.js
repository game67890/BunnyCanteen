System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var WordArray, Iso10126;
  return {
    setters: [function (_unresolved_) {
      WordArray = _unresolved_.WordArray;
    }],
    execute: function () {
      /**
       * ISO 10126 padding strategy.
       */
      _export("Iso10126", Iso10126 = {
        pad(data, blockSize) {
          // Shortcut
          var blockSizeBytes = blockSize * 4; // Count padding bytes

          var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes; // Pad

          data.concat(WordArray.random(nPaddingBytes - 1)).concat(WordArray.create([nPaddingBytes << 24], 1));
        },

        unpad(data) {
          var _data = data; // Get number of padding bytes from last byte

          var nPaddingBytes = _data.words[_data.sigBytes - 1 >>> 2] & 0xff; // Remove padding

          _data.sigBytes -= nPaddingBytes;
        }

      });
    }
  };
});
//# sourceMappingURL=d78851fc2eebe488b1aa81c392f7a2440901662f.js.map