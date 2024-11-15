System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ERaycast2DType, math, PhysicsSystem2D, Maths, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      ERaycast2DType = _cc.ERaycast2DType;
      math = _cc.math;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "54b2e8Ax1NOkYkSK1jrL+Ng", "maths", undefined);

      __checkObsolete__(['ERaycast2DType', 'math', 'PhysicsSystem2D', 'RaycastResult2D']);

      _export("default", Maths = class Maths {
        /**
         * @description 角度转弧度<br>
         *  公式: π / 180 * 角度
         *
         * @param {number} degrees 角度
         * @return {number} 弧度
         */
        static angleToRadian(degrees) {
          return Maths.thePI180 * degrees;
        }
        /**
         * @description 弧度转角度<br>
         *  公式: 180 / π * 弧度
         *
         * @param {number} radian 弧度
         * @return {number} 角度
         */


        static radianToAngle(radian) {
          return Maths.the180PI * radian;
        }
        /**
         * @description 角度转向量<br>
         *  公式: tan = sin / cos
         *
         * @param {number} degrees 角度
         * @return {Vec2} 向量
         */


        static angleToVector(degrees) {
          // 将传入的角度转为弧度
          var radian = math.toRadian(degrees); // 算出cos,sin和tan

          var cos = Math.cos(radian); // 邻边 / 斜边

          var sin = Math.sin(radian); // 对边 / 斜边
          // 结合在一起并归一化

          return math.v2(cos, sin).normalize();
        }
        /**
         * @description 向量转角度<br>
         *  公式: tan = sin / cos
         *
         * @param {number} vector 向量
         * @return {number} 角度
         */


        static vectorToAngle(vector) {
          // 将传入的向量归一化
          var dir = vector.normalize(); // 计算出目标角度的弧度

          var radian = dir.signAngle(math.v2(1, 0)); // 把弧度计算成角度

          return -Maths.radianToAngle(radian);
        }

        static angleInRadians(p1, p2) {
          return Math.atan2(p2.y - p1.y, p2.x - p1.x);
        }

        static angleInDegrees(p1, p2) {
          return Math.atan2(p2.y - p1.y, p2.x - p1.x) * Maths.the180PI;
        }
        /**
         * 计算两点之间的直线距离
         * @param p1 点1
         * @param p2 点2
         */


        static distance(p1, p2) {
          var dx = p2.x - p1.x;
          var dy = p2.y - p1.y;
          return Math.sqrt(dx * dx + dy * dy);
        }
        /**
         * 以某点为圆心，生成圆周上等分点的坐标
         *
         * @param {number} r 半径
         * @param {math.Vec2} pos 圆心坐标
         * @param {number} count 等分点数量
         * @param {number} [randomScope=80] 等分点的随机波动范围
         * @returns {math.Vec2[]} 返回等分点坐标
         */


        static getCirclePoints(r, pos, count, randomScope) {
          if (randomScope === void 0) {
            randomScope = 60;
          }

          var points = [];
          var radians = Maths.thePI180 * Math.round(360 / count);

          for (var i = 0; i < count; i++) {
            var x = pos.x + r * Math.sin(radians * i);
            var y = pos.y + r * Math.cos(radians * i);
            points.unshift(math.v2(x + Math.random() * randomScope, y + Math.random() * randomScope));
          }

          return points;
        }
        /**
         * 获取值域中的随机数，浮点数。
         * 值域为：[min, max]
         * @param min 最小值
         * @param max 最大值
         */


        static random(min, max) {
          if (max === undefined) {
            return Math.random() * min;
          }

          return Math.random() * (max - min + 1) + min;
        }
        /**
         * 获取值域中的随机数，整数。
         * 值域为：[min, max]
         * @param min 最小值
         * @param max 最大值
         */


        static randomInt(min, max) {
          return Math.floor(Maths.random(min, max));
        }
        /**
         * 获取值域中的随机数
         * 值域：[min, max)
         * @param min 最小值
         * @param max 最大值
         */


        static randomIndex(min, max) {
          if (max === undefined) {
            return Math.floor(Math.random() * min);
          }

          return Math.floor(min + Math.random() * (max - min));
        }
        /**
         * 返回指定范围内 n 个随机整数的数组
         * @param min
         * @param max
         * @param n
         */


        static randomIntArrayInRange(min, max, n) {
          if (n === void 0) {
            n = 1;
          }

          return Array.from({
            length: n
          }, () => Math.floor(Math.random() * (max - min + 1)) + min);
        }
        /**
         * 生成随机十六进制颜色代码
         */


        static randomHexColorCode() {
          var n = (Math.random() * 0xfffff * 1000000).toString(16);
          return "#" + n.slice(0, 6);
        }
        /**
         * 随机获取数组中的元素
         * @param arr
         */


        static getArrayRandomElement(arr) {
          return arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined;
        }
        /**
         * Clamps (or clips or confines) the value to be between min and max.
         */


        static clamp(value, min, max) {
          if (value < min) {
            return min;
          }

          if (value > max) {
            return max;
          }

          return value;
        }
        /**
         * 旋转二维向量
         * @param vector
         * @param angle 角度
         */


        static rotateVec2(vector, angle) {
          var theta = math.toRadian(angle); // radians

          var matrix = [Math.cos(theta), Math.sin(theta), -Math.sin(theta), Math.cos(theta)];
          return math.v2(matrix[0] * vector.x + matrix[1] * vector.y, matrix[2] * vector.x + matrix[3] * vector.y);
        }
        /**
         * 计算前方另一个点
         * @param startPos 起始点
         * @param radian 弧度
         * @param distance 距离
         */


        static getDistancePosition(startPos, radian, distance) {
          var moveX = distance * Math.cos(radian);
          var moveY = distance * Math.sin(radian);
          return math.v2(startPos.x + moveX, startPos.y + moveY);
        }
        /**
         * 射线测试
         * @param startPos 起始点
         * @param radian 弧度
         */


        static testRaycast(startPos, radian) {
          var p2 = Maths.getDistancePosition(startPos, radian, 4000); // console.log(startPos, p2);

          return PhysicsSystem2D.instance.raycast(startPos, p2, ERaycast2DType.Closest);
        }

      });

      Maths.thePI180 = Math.PI / 180;
      Maths.the180PI = 180 / Math.PI;
      Maths.maxDistance = 10000000;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8455b9ce4675d2b4bbf75459b6d2ba53c15bfbf5.js.map