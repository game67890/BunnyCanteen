System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, error, isValid, ObjectPool, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      error = _cc.error;
      isValid = _cc.isValid;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ea3d5ESSzdDWbECqXW3Epfd", "object_pool", undefined);

      /**
       * 对象创建器
       */
      __checkObsolete__(['error', 'isValid']);

      /**
       * 对象池
       */
      _export("default", ObjectPool = class ObjectPool {
        // 对象创建器
        get actives() {
          return this._activeList;
        }
        /**
         * 获取活跃对象数
         */


        get activeCount() {
          return this._activeList.length;
        }
        /**
         * 获取待机对象数
         */


        get reservedCount() {
          return this._reserveList.length;
        }
        /**
         * 获取创建器
         */


        get creator() {
          return this._creator;
        }
        /**
         * 注册创建器
         */


        set creator(creator) {
          this._creator = creator;
        }

        constructor(reserve) {
          if (reserve === void 0) {
            reserve = 0;
          }

          this._activeList = void 0;
          // 已取对象列表
          this._reserveList = void 0;
          // 以分配未使用对象列表
          this._creator = void 0;
          this._activeList = new Array();
          this._reserveList = new Array();
          this.initializeReserve(reserve).then();
        }
        /**
         * 初始化对象池
         */


        initializeReserve(reserve) {
          var _this = this;

          return _asyncToGenerator(function* () {
            for (var i = 0; i < reserve; i++) {
              var gameObject = yield _this._creator.create();

              _this._reserveList.push(gameObject);
            }
          })();
        }
        /**
         * 获取获取池中的对象
         */


        getObject() {
          var _arguments = arguments,
              _this2 = this;

          return _asyncToGenerator(function* () {
            var obj;

            if (_this2.reservedCount == 0) {
              obj = yield _this2._creator.create(..._arguments);
            } else {
              obj = _this2._reserveList.pop();
            }

            _this2._activeList.push(obj);

            return obj;
          })();
        }
        /**
         * 归还对象
         */


        returnObject(obj) {
          var index = this._activeList.indexOf(obj);

          if (index < 0) {
            error('return object failed:', obj, index);
            return;
          }

          this._activeList.splice(index, 1);

          this._creator.destroy(obj);

          if (isValid(obj)) {
            this._reserveList.push(obj);
          }
        } // 归还所有的对象


        returnAllObject() {
          for (var _obj of this._activeList) {
            this._creator.destroy(_obj);

            if (isValid(_obj)) {
              this._reserveList.push(_obj);
            }
          }

          this._activeList = [];
        } // 销毁掉所有的对象


        destroyAllObject() {
          for (var _obj2 of this._activeList) {
            this._creator.destroy(_obj2);
          }

          for (var _obj3 of this._reserveList) {
            this._creator.destroy(_obj3);
          }

          this._reserveList = [];
          this._activeList = [];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fbb10809def612c13cbb6806916bf7a71d54f7f3.js.map