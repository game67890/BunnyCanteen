System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2696fVV0U1BcotwtuSW7qe9", "ArrayExt", undefined);

      // @ts-ignore
      !Array.prototype.__cc_extended && Object.defineProperties(Array.prototype, {
        remove: {
          value: function value(filter) {
            if (typeof filter == 'function') {
              for (var _i2 = this.length - 1; _i2 > -1; --_i2) {
                filter(this[_i2], _i2, this) && this.splice(_i2, 1);
              }
            } else {
              for (var _i3 = this.length - 1; _i3 > -1; --_i3) {
                this[_i3] === filter && this.splice(_i3, 1);
              }
            }

            return this;
          }
        },
        removeOne: {
          value: function value(filter) {
            if (typeof filter == 'function') {
              for (var _i4 = 0; _i4 < this.length; ++_i4) {
                if (filter(this[_i4], _i4, this)) {
                  this.splice(_i4, 1);
                  return this;
                }
              }
            } else {
              for (var _i5 = 0; _i5 < this.length; ++_i5) {
                if (this[_i5] === filter) {
                  this.splice(_i5, 1);
                  return this;
                }
              }
            }

            return this;
          }
        },
        random: {
          value: function value() {
            var element = this[Math.floor(Math.random() * this.length)];
            return element;
          }
        },
        fastRemoveAt: {
          value: function value(index) {
            var length = this.length;

            if (index < 0 || index >= length) {
              return null;
            }

            var res = this[index];
            this[index] = this[length - 1];
            this.length = length - 1;
            return res;
          }
        },
        fastRemove: {
          value: function (_value) {
            function value(_x) {
              return _value.apply(this, arguments);
            }

            value.toString = function () {
              return _value.toString();
            };

            return value;
          }(function (value) {
            var index = this.indexOf(value);

            if (index >= 0) {
              this[index] = this[this.length - 1];
              --this.length;
              return true;
            }

            return false;
          })
        },
        first: {
          value: function value() {
            return this.length ? this[0] : null;
          }
        },
        last: {
          value: function value() {
            return this.length ? this[this.length - 1] : null;
          }
        },
        max: {
          value: function value(mapper) {
            if (!this.length) {
              return null;
            }

            function _max(a, b) {
              return a > b ? a : b;
            }

            if (typeof mapper == 'function') {
              var _max2 = mapper(this[0], 0, this);

              for (var _i6 = 1; _i6 < this.length; ++_i6) {
                var temp = mapper(this[_i6], _i6, this);
                _max2 = temp > _max2 ? temp : _max2;
              }

              return _max2;
            } else {
              return this.reduce(function (prev, cur) {
                return _max(prev, cur);
              });
            }
          }
        },
        min: {
          value: function value(mapper) {
            if (!this.length) {
              return null;
            }

            function _min(a, b) {
              return a < b ? a : b;
            }

            if (typeof mapper == 'function') {
              var _min2 = mapper(this[0], 0, this);

              for (var _i7 = 1; _i7 < this.length; ++_i7) {
                var temp = mapper(this[_i7], _i7, this);
                _min2 = temp < _min2 ? temp : _min2;
              }

              return _min2;
            } else {
              return this.reduce(function (prev, cur) {
                return _min(prev, cur);
              });
            }
          }
        },
        distinct: {
          value: function value() {
            return this.filter(function (v, i, arr) {
              return arr.indexOf(v) === i;
            });
          }
        },
        filterIndex: {
          value: function value(filter) {
            var output = [];

            for (var _i8 = 0; _i8 < this.length; ++_i8) {
              if (filter(this[_i8], _i8, this)) {
                output.push(_i8);
              }
            }

            return output;
          }
        },
        count: {
          value: function value(filter) {
            var result = 0;

            for (var _i9 = 0; _i9 < this.length; ++_i9) {
              if (filter(this[_i9], _i9, this)) {
                ++result;
              }
            }

            return result;
          }
        },
        sum: {
          value: function value(mapper) {
            var result = 0;

            for (var _i10 = 0; _i10 < this.length; ++_i10) {
              result += mapper ? mapper(this[_i10], _i10, this) : this[_i10];
            }

            return result;
          }
        },
        average: {
          value: function value(mapper) {
            return this.sum(mapper) / this.length;
          }
        },
        orderBy: {
          value: function value() {
            var mappers = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              mappers[_i] = arguments[_i];
            }

            return this.slice().sort(function (a, b) {
              for (var _i11 = 0; _i11 < mappers.length; ++_i11) {
                var va = mappers[_i11](a);

                var vb = mappers[_i11](b);

                if (va > vb) {
                  return 1;
                } else if (va < vb) {
                  return -1;
                }
              }

              return 0;
            });
          }
        },
        orderByDesc: {
          value: function value() {
            var mappers = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              mappers[_i] = arguments[_i];
            }

            return this.slice().sort(function (a, b) {
              for (var _i12 = 0; _i12 < mappers.length; ++_i12) {
                var va = mappers[_i12](a);

                var vb = mappers[_i12](b);

                if (va > vb) {
                  return -1;
                } else if (va < vb) {
                  return 1;
                }
              }

              return 0;
            });
          }
        },
        binarySearch: {
          value: function (_value2) {
            function value(_x2, _x3) {
              return _value2.apply(this, arguments);
            }

            value.toString = function () {
              return _value2.toString();
            };

            return value;
          }(function (value, keyMapper) {
            var low = 0,
                high = this.length - 1;

            while (low <= high) {
              var mid = (high + low) / 2 | 0;
              var midValue = keyMapper ? keyMapper(this[mid]) : this[mid];

              if (value === midValue) {
                return mid;
              } else if (value > midValue) {
                low = mid + 1;
              } else if (value < midValue) {
                high = mid - 1;
              }
            }

            return -1;
          })
        },
        binaryInsert: {
          value: function value(item, keyMapper, unique) {
            if (typeof keyMapper == 'boolean') {
              unique = keyMapper;
              keyMapper = undefined;
            }

            var low = 0,
                high = this.length - 1;
            var mid = NaN;
            var itemValue = keyMapper ? keyMapper(item) : item;

            while (low <= high) {
              mid = (high + low) / 2 | 0;
              var midValue = keyMapper ? keyMapper(this[mid]) : this[mid];

              if (itemValue === midValue) {
                if (unique) {
                  return mid;
                } else {
                  break;
                }
              } else if (itemValue > midValue) {
                low = mid + 1;
              } else if (itemValue < midValue) {
                high = mid - 1;
              }
            }

            var index = low > mid ? mid + 1 : mid;
            this.splice(index, 0, item);
            return index;
          }
        },
        binaryDistinct: {
          value: function value(keyMapper) {
            return this.filter(function (v, i, arr) {
              return arr.binarySearch(v, keyMapper) === i;
            });
          }
        },
        findLast: {
          value: function value(predicate) {
            for (var _i13 = this.length - 1; _i13 > -1; --_i13) {
              if (predicate(this[_i13], _i13, this)) {
                return this[_i13];
              }
            }

            return undefined;
          }
        },
        findLastIndex: {
          value: function value(predicate) {
            for (var _i14 = this.length - 1; _i14 > -1; --_i14) {
              if (predicate(this[_i14], _i14, this)) {
                return _i14;
              }
            }

            return -1;
          }
        },
        groupBy: {
          value: function value(grouper) {
            var group = this.reduce(function (prev, next) {
              var groupKey = grouper(next);

              if (!prev[groupKey]) {
                prev[groupKey] = [];
              }

              prev[groupKey].push(next);
              return prev;
            }, {});
            return Object.keys(group).map(function (key) {
              var arr = group[key];
              arr.key = key;
              return arr;
            });
          }
        },
        __cc_extended: {
          value: true
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f8deafb2c32b899677dec7e238fe66681b512fee.js.map