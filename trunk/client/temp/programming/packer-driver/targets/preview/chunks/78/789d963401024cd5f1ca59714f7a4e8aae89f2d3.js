System.register(["tweetnacl-util", "tweetnacl"], function (_export, _context) {
  "use strict";

  var nacl, nacl$1, SessionCrypto, CONNECT_EVENT_ERROR_CODES, CONNECT_ITEM_ERROR_CODES, SEND_TRANSACTION_ERROR_CODES, SIGN_DATA_ERROR_CODES, DISCONNECT_ERROR_CODES, CHAIN, Base64;

  function encodeUint8Array(value, urlSafe) {
    var encoded = nacl.encodeBase64(value);

    if (!urlSafe) {
      return encoded;
    }

    return encodeURIComponent(encoded);
  }

  function decodeToUint8Array(value, urlSafe) {
    if (urlSafe) {
      value = decodeURIComponent(value);
    }

    return nacl.decodeBase64(value);
  }

  function encode(value, urlSafe) {
    if (urlSafe === void 0) {
      urlSafe = false;
    }

    var uint8Array;

    if (value instanceof Uint8Array) {
      uint8Array = value;
    } else {
      if (typeof value !== 'string') {
        value = JSON.stringify(value);
      }

      uint8Array = nacl.decodeUTF8(value);
    }

    return encodeUint8Array(uint8Array, urlSafe);
  }

  function decode(value, urlSafe) {
    if (urlSafe === void 0) {
      urlSafe = false;
    }

    var decodedUint8Array = decodeToUint8Array(value, urlSafe);
    return {
      toString() {
        return nacl.encodeUTF8(decodedUint8Array);
      },

      toObject() {
        try {
          return JSON.parse(nacl.encodeUTF8(decodedUint8Array));
        } catch (e) {
          return null;
        }
      },

      toUint8Array() {
        return decodedUint8Array;
      }

    };
  }

  function concatUint8Arrays(buffer1, buffer2) {
    var mergedArray = new Uint8Array(buffer1.length + buffer2.length);
    mergedArray.set(buffer1);
    mergedArray.set(buffer2, buffer1.length);
    return mergedArray;
  }

  function splitToUint8Arrays(array, index) {
    if (index >= array.length) {
      throw new Error('Index is out of buffer');
    }

    var subArray1 = array.slice(0, index);
    var subArray2 = array.slice(index);
    return [subArray1, subArray2];
  }

  function toHexString(byteArray) {
    var hexString = '';
    byteArray.forEach(byte => {
      hexString += ('0' + (byte & 0xff).toString(16)).slice(-2);
    });
    return hexString;
  }

  function hexToByteArray(hexString) {
    if (hexString.length % 2 !== 0) {
      throw new Error("Cannot convert " + hexString + " to bytesArray");
    }

    var result = new Uint8Array(hexString.length / 2);

    for (var i = 0; i < hexString.length; i += 2) {
      result[i / 2] = parseInt(hexString.slice(i, i + 2), 16);
    }

    return result;
  }

  function isNode() {
    return typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
  }

  _export({
    concatUint8Arrays: concatUint8Arrays,
    hexToByteArray: hexToByteArray,
    isNode: isNode,
    splitToUint8Arrays: splitToUint8Arrays,
    toHexString: toHexString,
    CONNECT_EVENT_ERROR_CODES: void 0,
    CONNECT_ITEM_ERROR_CODES: void 0,
    SEND_TRANSACTION_ERROR_CODES: void 0,
    SIGN_DATA_ERROR_CODES: void 0,
    DISCONNECT_ERROR_CODES: void 0,
    CHAIN: void 0
  });

  return {
    setters: [function (_tweetnaclUtil) {
      nacl = _tweetnaclUtil.default;
    }, function (_tweetnacl) {
      nacl$1 = _tweetnacl.default;
    }],
    execute: function () {
      (function (CONNECT_EVENT_ERROR_CODES) {
        CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
        CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["BAD_REQUEST_ERROR"] = 1] = "BAD_REQUEST_ERROR";
        CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["MANIFEST_NOT_FOUND_ERROR"] = 2] = "MANIFEST_NOT_FOUND_ERROR";
        CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["MANIFEST_CONTENT_ERROR"] = 3] = "MANIFEST_CONTENT_ERROR";
        CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["UNKNOWN_APP_ERROR"] = 100] = "UNKNOWN_APP_ERROR";
        CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["USER_REJECTS_ERROR"] = 300] = "USER_REJECTS_ERROR";
        CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["METHOD_NOT_SUPPORTED"] = 400] = "METHOD_NOT_SUPPORTED";
      })(CONNECT_EVENT_ERROR_CODES || _export("CONNECT_EVENT_ERROR_CODES", CONNECT_EVENT_ERROR_CODES = {}));

      (function (CONNECT_ITEM_ERROR_CODES) {
        CONNECT_ITEM_ERROR_CODES[CONNECT_ITEM_ERROR_CODES["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
        CONNECT_ITEM_ERROR_CODES[CONNECT_ITEM_ERROR_CODES["METHOD_NOT_SUPPORTED"] = 400] = "METHOD_NOT_SUPPORTED";
      })(CONNECT_ITEM_ERROR_CODES || _export("CONNECT_ITEM_ERROR_CODES", CONNECT_ITEM_ERROR_CODES = {}));

      (function (SEND_TRANSACTION_ERROR_CODES) {
        SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
        SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["BAD_REQUEST_ERROR"] = 1] = "BAD_REQUEST_ERROR";
        SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["UNKNOWN_APP_ERROR"] = 100] = "UNKNOWN_APP_ERROR";
        SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["USER_REJECTS_ERROR"] = 300] = "USER_REJECTS_ERROR";
        SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["METHOD_NOT_SUPPORTED"] = 400] = "METHOD_NOT_SUPPORTED";
      })(SEND_TRANSACTION_ERROR_CODES || _export("SEND_TRANSACTION_ERROR_CODES", SEND_TRANSACTION_ERROR_CODES = {}));

      (function (SIGN_DATA_ERROR_CODES) {
        SIGN_DATA_ERROR_CODES[SIGN_DATA_ERROR_CODES["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
        SIGN_DATA_ERROR_CODES[SIGN_DATA_ERROR_CODES["BAD_REQUEST_ERROR"] = 1] = "BAD_REQUEST_ERROR";
        SIGN_DATA_ERROR_CODES[SIGN_DATA_ERROR_CODES["UNKNOWN_APP_ERROR"] = 100] = "UNKNOWN_APP_ERROR";
        SIGN_DATA_ERROR_CODES[SIGN_DATA_ERROR_CODES["USER_REJECTS_ERROR"] = 300] = "USER_REJECTS_ERROR";
        SIGN_DATA_ERROR_CODES[SIGN_DATA_ERROR_CODES["METHOD_NOT_SUPPORTED"] = 400] = "METHOD_NOT_SUPPORTED";
      })(SIGN_DATA_ERROR_CODES || _export("SIGN_DATA_ERROR_CODES", SIGN_DATA_ERROR_CODES = {}));

      (function (DISCONNECT_ERROR_CODES) {
        DISCONNECT_ERROR_CODES[DISCONNECT_ERROR_CODES["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
        DISCONNECT_ERROR_CODES[DISCONNECT_ERROR_CODES["BAD_REQUEST_ERROR"] = 1] = "BAD_REQUEST_ERROR";
        DISCONNECT_ERROR_CODES[DISCONNECT_ERROR_CODES["UNKNOWN_APP_ERROR"] = 100] = "UNKNOWN_APP_ERROR";
        DISCONNECT_ERROR_CODES[DISCONNECT_ERROR_CODES["METHOD_NOT_SUPPORTED"] = 400] = "METHOD_NOT_SUPPORTED";
      })(DISCONNECT_ERROR_CODES || _export("DISCONNECT_ERROR_CODES", DISCONNECT_ERROR_CODES = {}));

      (function (CHAIN) {
        CHAIN["MAINNET"] = "-239";
        CHAIN["TESTNET"] = "-3";
      })(CHAIN || _export("CHAIN", CHAIN = {}));

      _export("Base64", Base64 = {
        encode,
        decode
      });

      _export("SessionCrypto", SessionCrypto = class SessionCrypto {
        constructor(keyPair) {
          this.nonceLength = 24;
          this.keyPair = keyPair ? this.createKeypairFromString(keyPair) : this.createKeypair();
          this.sessionId = toHexString(this.keyPair.publicKey);
        }

        createKeypair() {
          return nacl$1.box.keyPair();
        }

        createKeypairFromString(keyPair) {
          return {
            publicKey: hexToByteArray(keyPair.publicKey),
            secretKey: hexToByteArray(keyPair.secretKey)
          };
        }

        createNonce() {
          return nacl$1.randomBytes(this.nonceLength);
        }

        encrypt(message, receiverPublicKey) {
          var encodedMessage = new TextEncoder().encode(message);
          var nonce = this.createNonce();
          var encrypted = nacl$1.box(encodedMessage, nonce, receiverPublicKey, this.keyPair.secretKey);
          return concatUint8Arrays(nonce, encrypted);
        }

        decrypt(message, senderPublicKey) {
          var [nonce, internalMessage] = splitToUint8Arrays(message, this.nonceLength);
          var decrypted = nacl$1.box.open(internalMessage, nonce, senderPublicKey, this.keyPair.secretKey);

          if (!decrypted) {
            throw new Error("Decryption error: \n message: " + message.toString() + " \n sender pubkey: " + senderPublicKey.toString() + " \n keypair pubkey: " + this.keyPair.publicKey.toString() + " \n keypair secretkey: " + this.keyPair.secretKey.toString());
          }

          return new TextDecoder().decode(decrypted);
        }

        stringifyKeypair() {
          return {
            publicKey: toHexString(this.keyPair.publicKey),
            secretKey: toHexString(this.keyPair.secretKey)
          };
        }

      });
    }
  };
});
//# sourceMappingURL=789d963401024cd5f1ca59714f7a4e8aae89f2d3.js.map