System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var BlockCipherMode, ECB;

  _export("ECB", void 0);

  return {
    setters: [function (_unresolved_) {
      BlockCipherMode = _unresolved_.BlockCipherMode;
    }],
    execute: function () {
      /**
       * Electronic Codebook block mode.
       */
      _export("ECB", ECB = class ECB extends BlockCipherMode {});

      ECB.Encryptor = class extends ECB {
        processBlock(words, offset) {
          this._cipher.encryptBlock(words, offset);
        }

      };
      ECB.Decryptor = class extends ECB {
        processBlock(words, offset) {
          this._cipher.decryptBlock(words, offset);
        }

      };
    }
  };
});
//# sourceMappingURL=cf99b56f1c3c8e13e550e40635f7ef1ca23210f8.js.map