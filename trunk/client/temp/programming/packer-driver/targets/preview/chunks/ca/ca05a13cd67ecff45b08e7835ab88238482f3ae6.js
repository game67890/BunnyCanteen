System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var BlockCipherMode, CTRGladman, incWord, incCounter;

  _export("CTRGladman", void 0);

  return {
    setters: [function (_unresolved_) {
      BlockCipherMode = _unresolved_.BlockCipherMode;
    }],
    execute: function () {
      incWord = word => {
        var _word = word;

        if ((word >> 24 & 0xff) === 0xff) {
          // overflow
          var b1 = word >> 16 & 0xff;
          var b2 = word >> 8 & 0xff;
          var b3 = word & 0xff;

          if (b1 === 0xff) {
            // overflow b1
            b1 = 0;

            if (b2 === 0xff) {
              b2 = 0;

              if (b3 === 0xff) {
                b3 = 0;
              } else {
                b3 += 1;
              }
            } else {
              b2 += 1;
            }
          } else {
            b1 += 1;
          }

          _word = 0;
          _word += b1 << 16;
          _word += b2 << 8;
          _word += b3;
        } else {
          _word += 0x01 << 24;
        }

        return _word;
      };

      incCounter = counter => {
        var _counter = counter;
        _counter[0] = incWord(_counter[0]);

        if (_counter[0] === 0) {
          // encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
          _counter[1] = incWord(_counter[1]);
        }

        return _counter;
      };
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */


      _export("CTRGladman", CTRGladman = class CTRGladman extends BlockCipherMode {});

      CTRGladman.Encryptor = class extends CTRGladman {
        processBlock(words, offset) {
          var _words = words; // Shortcuts

          var cipher = this._cipher;
          var {
            blockSize
          } = cipher;
          var iv = this._iv;
          var counter = this._counter; // Generate keystream

          if (iv) {
            this._counter = iv.slice(0);
            counter = this._counter; // Remove IV for subsequent blocks

            this._iv = undefined;
          }

          incCounter(counter);
          var keystream = counter.slice(0);
          cipher.encryptBlock(keystream, 0); // Encrypt

          for (var i = 0; i < blockSize; i += 1) {
            _words[offset + i] ^= keystream[i];
          }
        }

      };
      CTRGladman.Decryptor = CTRGladman.Encryptor;
    }
  };
});
//# sourceMappingURL=ca05a13cd67ecff45b08e7835ab88238482f3ae6.js.map