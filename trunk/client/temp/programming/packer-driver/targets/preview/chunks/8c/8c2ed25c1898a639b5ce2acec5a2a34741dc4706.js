System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var BlockCipherMode, OFB;

  _export("OFB", void 0);

  return {
    setters: [function (_unresolved_) {
      BlockCipherMode = _unresolved_.BlockCipherMode;
    }],
    execute: function () {
      /**
       * Output Feedback block mode.
       */
      _export("OFB", OFB = class OFB extends BlockCipherMode {});

      OFB.Encryptor = class extends OFB {
        processBlock(words, offset) {
          var _words = words; // Shortcuts

          var cipher = this._cipher;
          var {
            blockSize
          } = cipher;
          var iv = this._iv;
          var keystream = this._keystream; // Generate keystream

          if (iv) {
            this._keystream = iv.slice(0);
            keystream = this._keystream; // Remove IV for subsequent blocks

            this._iv = undefined;
          }

          cipher.encryptBlock(keystream, 0); // Encrypt

          for (var i = 0; i < blockSize; i += 1) {
            _words[offset + i] ^= keystream[i];
          }
        }

      };
      OFB.Decryptor = OFB.Encryptor;
    }
  };
});
//# sourceMappingURL=8c2ed25c1898a639b5ce2acec5a2a34741dc4706.js.map