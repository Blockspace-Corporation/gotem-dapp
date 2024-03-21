import {
  __commonJS,
  __require,
  __toESM
} from "./chunk-QMAMURKP.js";

// browser-external:buffer
var require_buffer = __commonJS({
  "browser-external:buffer"(exports, module2) {
    module2.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "buffer" has been externalized for browser compatibility. Cannot access "buffer.${key}" in client code. See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/bn.js/lib/bn.js
var require_bn = __commonJS({
  "node_modules/bn.js/lib/bn.js"(exports, module2) {
    (function(module3, exports2) {
      "use strict";
      function assert2(val, msg) {
        if (!val)
          throw new Error(msg || "Assertion failed");
      }
      function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      }
      function BN2(number, base, endian) {
        if (BN2.isBN(number)) {
          return number;
        }
        this.negative = 0;
        this.words = null;
        this.length = 0;
        this.red = null;
        if (number !== null) {
          if (base === "le" || base === "be") {
            endian = base;
            base = 10;
          }
          this._init(number || 0, base || 10, endian || "be");
        }
      }
      if (typeof module3 === "object") {
        module3.exports = BN2;
      } else {
        exports2.BN = BN2;
      }
      BN2.BN = BN2;
      BN2.wordSize = 26;
      var Buffer;
      try {
        if (typeof window !== "undefined" && typeof window.Buffer !== "undefined") {
          Buffer = window.Buffer;
        } else {
          Buffer = require_buffer().Buffer;
        }
      } catch (e) {
      }
      BN2.isBN = function isBN(num) {
        if (num instanceof BN2) {
          return true;
        }
        return num !== null && typeof num === "object" && num.constructor.wordSize === BN2.wordSize && Array.isArray(num.words);
      };
      BN2.max = function max(left, right) {
        if (left.cmp(right) > 0)
          return left;
        return right;
      };
      BN2.min = function min(left, right) {
        if (left.cmp(right) < 0)
          return left;
        return right;
      };
      BN2.prototype._init = function init(number, base, endian) {
        if (typeof number === "number") {
          return this._initNumber(number, base, endian);
        }
        if (typeof number === "object") {
          return this._initArray(number, base, endian);
        }
        if (base === "hex") {
          base = 16;
        }
        assert2(base === (base | 0) && base >= 2 && base <= 36);
        number = number.toString().replace(/\s+/g, "");
        var start = 0;
        if (number[0] === "-") {
          start++;
          this.negative = 1;
        }
        if (start < number.length) {
          if (base === 16) {
            this._parseHex(number, start, endian);
          } else {
            this._parseBase(number, base, start);
            if (endian === "le") {
              this._initArray(this.toArray(), base, endian);
            }
          }
        }
      };
      BN2.prototype._initNumber = function _initNumber(number, base, endian) {
        if (number < 0) {
          this.negative = 1;
          number = -number;
        }
        if (number < 67108864) {
          this.words = [number & 67108863];
          this.length = 1;
        } else if (number < 4503599627370496) {
          this.words = [
            number & 67108863,
            number / 67108864 & 67108863
          ];
          this.length = 2;
        } else {
          assert2(number < 9007199254740992);
          this.words = [
            number & 67108863,
            number / 67108864 & 67108863,
            1
          ];
          this.length = 3;
        }
        if (endian !== "le")
          return;
        this._initArray(this.toArray(), base, endian);
      };
      BN2.prototype._initArray = function _initArray(number, base, endian) {
        assert2(typeof number.length === "number");
        if (number.length <= 0) {
          this.words = [0];
          this.length = 1;
          return this;
        }
        this.length = Math.ceil(number.length / 3);
        this.words = new Array(this.length);
        for (var i = 0; i < this.length; i++) {
          this.words[i] = 0;
        }
        var j, w;
        var off = 0;
        if (endian === "be") {
          for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
            w = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
            this.words[j] |= w << off & 67108863;
            this.words[j + 1] = w >>> 26 - off & 67108863;
            off += 24;
            if (off >= 26) {
              off -= 26;
              j++;
            }
          }
        } else if (endian === "le") {
          for (i = 0, j = 0; i < number.length; i += 3) {
            w = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
            this.words[j] |= w << off & 67108863;
            this.words[j + 1] = w >>> 26 - off & 67108863;
            off += 24;
            if (off >= 26) {
              off -= 26;
              j++;
            }
          }
        }
        return this._strip();
      };
      function parseHex4Bits(string, index) {
        var c = string.charCodeAt(index);
        if (c >= 48 && c <= 57) {
          return c - 48;
        } else if (c >= 65 && c <= 70) {
          return c - 55;
        } else if (c >= 97 && c <= 102) {
          return c - 87;
        } else {
          assert2(false, "Invalid character in " + string);
        }
      }
      function parseHexByte(string, lowerBound, index) {
        var r = parseHex4Bits(string, index);
        if (index - 1 >= lowerBound) {
          r |= parseHex4Bits(string, index - 1) << 4;
        }
        return r;
      }
      BN2.prototype._parseHex = function _parseHex(number, start, endian) {
        this.length = Math.ceil((number.length - start) / 6);
        this.words = new Array(this.length);
        for (var i = 0; i < this.length; i++) {
          this.words[i] = 0;
        }
        var off = 0;
        var j = 0;
        var w;
        if (endian === "be") {
          for (i = number.length - 1; i >= start; i -= 2) {
            w = parseHexByte(number, start, i) << off;
            this.words[j] |= w & 67108863;
            if (off >= 18) {
              off -= 18;
              j += 1;
              this.words[j] |= w >>> 26;
            } else {
              off += 8;
            }
          }
        } else {
          var parseLength = number.length - start;
          for (i = parseLength % 2 === 0 ? start + 1 : start; i < number.length; i += 2) {
            w = parseHexByte(number, start, i) << off;
            this.words[j] |= w & 67108863;
            if (off >= 18) {
              off -= 18;
              j += 1;
              this.words[j] |= w >>> 26;
            } else {
              off += 8;
            }
          }
        }
        this._strip();
      };
      function parseBase(str, start, end, mul) {
        var r = 0;
        var b = 0;
        var len = Math.min(str.length, end);
        for (var i = start; i < len; i++) {
          var c = str.charCodeAt(i) - 48;
          r *= mul;
          if (c >= 49) {
            b = c - 49 + 10;
          } else if (c >= 17) {
            b = c - 17 + 10;
          } else {
            b = c;
          }
          assert2(c >= 0 && b < mul, "Invalid character");
          r += b;
        }
        return r;
      }
      BN2.prototype._parseBase = function _parseBase(number, base, start) {
        this.words = [0];
        this.length = 1;
        for (var limbLen = 0, limbPow = 1; limbPow <= 67108863; limbPow *= base) {
          limbLen++;
        }
        limbLen--;
        limbPow = limbPow / base | 0;
        var total = number.length - start;
        var mod = total % limbLen;
        var end = Math.min(total, total - mod) + start;
        var word = 0;
        for (var i = start; i < end; i += limbLen) {
          word = parseBase(number, i, i + limbLen, base);
          this.imuln(limbPow);
          if (this.words[0] + word < 67108864) {
            this.words[0] += word;
          } else {
            this._iaddn(word);
          }
        }
        if (mod !== 0) {
          var pow = 1;
          word = parseBase(number, i, number.length, base);
          for (i = 0; i < mod; i++) {
            pow *= base;
          }
          this.imuln(pow);
          if (this.words[0] + word < 67108864) {
            this.words[0] += word;
          } else {
            this._iaddn(word);
          }
        }
        this._strip();
      };
      BN2.prototype.copy = function copy(dest) {
        dest.words = new Array(this.length);
        for (var i = 0; i < this.length; i++) {
          dest.words[i] = this.words[i];
        }
        dest.length = this.length;
        dest.negative = this.negative;
        dest.red = this.red;
      };
      function move(dest, src) {
        dest.words = src.words;
        dest.length = src.length;
        dest.negative = src.negative;
        dest.red = src.red;
      }
      BN2.prototype._move = function _move(dest) {
        move(dest, this);
      };
      BN2.prototype.clone = function clone() {
        var r = new BN2(null);
        this.copy(r);
        return r;
      };
      BN2.prototype._expand = function _expand(size) {
        while (this.length < size) {
          this.words[this.length++] = 0;
        }
        return this;
      };
      BN2.prototype._strip = function strip() {
        while (this.length > 1 && this.words[this.length - 1] === 0) {
          this.length--;
        }
        return this._normSign();
      };
      BN2.prototype._normSign = function _normSign() {
        if (this.length === 1 && this.words[0] === 0) {
          this.negative = 0;
        }
        return this;
      };
      if (typeof Symbol !== "undefined" && typeof Symbol.for === "function") {
        try {
          BN2.prototype[Symbol.for("nodejs.util.inspect.custom")] = inspect;
        } catch (e) {
          BN2.prototype.inspect = inspect;
        }
      } else {
        BN2.prototype.inspect = inspect;
      }
      function inspect() {
        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
      }
      var zeros = [
        "",
        "0",
        "00",
        "000",
        "0000",
        "00000",
        "000000",
        "0000000",
        "00000000",
        "000000000",
        "0000000000",
        "00000000000",
        "000000000000",
        "0000000000000",
        "00000000000000",
        "000000000000000",
        "0000000000000000",
        "00000000000000000",
        "000000000000000000",
        "0000000000000000000",
        "00000000000000000000",
        "000000000000000000000",
        "0000000000000000000000",
        "00000000000000000000000",
        "000000000000000000000000",
        "0000000000000000000000000"
      ];
      var groupSizes = [
        0,
        0,
        25,
        16,
        12,
        11,
        10,
        9,
        8,
        8,
        7,
        7,
        7,
        7,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
      ];
      var groupBases = [
        0,
        0,
        33554432,
        43046721,
        16777216,
        48828125,
        60466176,
        40353607,
        16777216,
        43046721,
        1e7,
        19487171,
        35831808,
        62748517,
        7529536,
        11390625,
        16777216,
        24137569,
        34012224,
        47045881,
        64e6,
        4084101,
        5153632,
        6436343,
        7962624,
        9765625,
        11881376,
        14348907,
        17210368,
        20511149,
        243e5,
        28629151,
        33554432,
        39135393,
        45435424,
        52521875,
        60466176
      ];
      BN2.prototype.toString = function toString(base, padding) {
        base = base || 10;
        padding = padding | 0 || 1;
        var out;
        if (base === 16 || base === "hex") {
          out = "";
          var off = 0;
          var carry = 0;
          for (var i = 0; i < this.length; i++) {
            var w = this.words[i];
            var word = ((w << off | carry) & 16777215).toString(16);
            carry = w >>> 24 - off & 16777215;
            off += 2;
            if (off >= 26) {
              off -= 26;
              i--;
            }
            if (carry !== 0 || i !== this.length - 1) {
              out = zeros[6 - word.length] + word + out;
            } else {
              out = word + out;
            }
          }
          if (carry !== 0) {
            out = carry.toString(16) + out;
          }
          while (out.length % padding !== 0) {
            out = "0" + out;
          }
          if (this.negative !== 0) {
            out = "-" + out;
          }
          return out;
        }
        if (base === (base | 0) && base >= 2 && base <= 36) {
          var groupSize = groupSizes[base];
          var groupBase = groupBases[base];
          out = "";
          var c = this.clone();
          c.negative = 0;
          while (!c.isZero()) {
            var r = c.modrn(groupBase).toString(base);
            c = c.idivn(groupBase);
            if (!c.isZero()) {
              out = zeros[groupSize - r.length] + r + out;
            } else {
              out = r + out;
            }
          }
          if (this.isZero()) {
            out = "0" + out;
          }
          while (out.length % padding !== 0) {
            out = "0" + out;
          }
          if (this.negative !== 0) {
            out = "-" + out;
          }
          return out;
        }
        assert2(false, "Base should be between 2 and 36");
      };
      BN2.prototype.toNumber = function toNumber() {
        var ret = this.words[0];
        if (this.length === 2) {
          ret += this.words[1] * 67108864;
        } else if (this.length === 3 && this.words[2] === 1) {
          ret += 4503599627370496 + this.words[1] * 67108864;
        } else if (this.length > 2) {
          assert2(false, "Number can only safely store up to 53 bits");
        }
        return this.negative !== 0 ? -ret : ret;
      };
      BN2.prototype.toJSON = function toJSON() {
        return this.toString(16, 2);
      };
      if (Buffer) {
        BN2.prototype.toBuffer = function toBuffer(endian, length) {
          return this.toArrayLike(Buffer, endian, length);
        };
      }
      BN2.prototype.toArray = function toArray(endian, length) {
        return this.toArrayLike(Array, endian, length);
      };
      var allocate = function allocate2(ArrayType, size) {
        if (ArrayType.allocUnsafe) {
          return ArrayType.allocUnsafe(size);
        }
        return new ArrayType(size);
      };
      BN2.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
        this._strip();
        var byteLength = this.byteLength();
        var reqLength = length || Math.max(1, byteLength);
        assert2(byteLength <= reqLength, "byte array longer than desired length");
        assert2(reqLength > 0, "Requested array length <= 0");
        var res = allocate(ArrayType, reqLength);
        var postfix = endian === "le" ? "LE" : "BE";
        this["_toArrayLike" + postfix](res, byteLength);
        return res;
      };
      BN2.prototype._toArrayLikeLE = function _toArrayLikeLE(res, byteLength) {
        var position = 0;
        var carry = 0;
        for (var i = 0, shift = 0; i < this.length; i++) {
          var word = this.words[i] << shift | carry;
          res[position++] = word & 255;
          if (position < res.length) {
            res[position++] = word >> 8 & 255;
          }
          if (position < res.length) {
            res[position++] = word >> 16 & 255;
          }
          if (shift === 6) {
            if (position < res.length) {
              res[position++] = word >> 24 & 255;
            }
            carry = 0;
            shift = 0;
          } else {
            carry = word >>> 24;
            shift += 2;
          }
        }
        if (position < res.length) {
          res[position++] = carry;
          while (position < res.length) {
            res[position++] = 0;
          }
        }
      };
      BN2.prototype._toArrayLikeBE = function _toArrayLikeBE(res, byteLength) {
        var position = res.length - 1;
        var carry = 0;
        for (var i = 0, shift = 0; i < this.length; i++) {
          var word = this.words[i] << shift | carry;
          res[position--] = word & 255;
          if (position >= 0) {
            res[position--] = word >> 8 & 255;
          }
          if (position >= 0) {
            res[position--] = word >> 16 & 255;
          }
          if (shift === 6) {
            if (position >= 0) {
              res[position--] = word >> 24 & 255;
            }
            carry = 0;
            shift = 0;
          } else {
            carry = word >>> 24;
            shift += 2;
          }
        }
        if (position >= 0) {
          res[position--] = carry;
          while (position >= 0) {
            res[position--] = 0;
          }
        }
      };
      if (Math.clz32) {
        BN2.prototype._countBits = function _countBits(w) {
          return 32 - Math.clz32(w);
        };
      } else {
        BN2.prototype._countBits = function _countBits(w) {
          var t = w;
          var r = 0;
          if (t >= 4096) {
            r += 13;
            t >>>= 13;
          }
          if (t >= 64) {
            r += 7;
            t >>>= 7;
          }
          if (t >= 8) {
            r += 4;
            t >>>= 4;
          }
          if (t >= 2) {
            r += 2;
            t >>>= 2;
          }
          return r + t;
        };
      }
      BN2.prototype._zeroBits = function _zeroBits(w) {
        if (w === 0)
          return 26;
        var t = w;
        var r = 0;
        if ((t & 8191) === 0) {
          r += 13;
          t >>>= 13;
        }
        if ((t & 127) === 0) {
          r += 7;
          t >>>= 7;
        }
        if ((t & 15) === 0) {
          r += 4;
          t >>>= 4;
        }
        if ((t & 3) === 0) {
          r += 2;
          t >>>= 2;
        }
        if ((t & 1) === 0) {
          r++;
        }
        return r;
      };
      BN2.prototype.bitLength = function bitLength() {
        var w = this.words[this.length - 1];
        var hi = this._countBits(w);
        return (this.length - 1) * 26 + hi;
      };
      function toBitArray(num) {
        var w = new Array(num.bitLength());
        for (var bit = 0; bit < w.length; bit++) {
          var off = bit / 26 | 0;
          var wbit = bit % 26;
          w[bit] = num.words[off] >>> wbit & 1;
        }
        return w;
      }
      BN2.prototype.zeroBits = function zeroBits() {
        if (this.isZero())
          return 0;
        var r = 0;
        for (var i = 0; i < this.length; i++) {
          var b = this._zeroBits(this.words[i]);
          r += b;
          if (b !== 26)
            break;
        }
        return r;
      };
      BN2.prototype.byteLength = function byteLength() {
        return Math.ceil(this.bitLength() / 8);
      };
      BN2.prototype.toTwos = function toTwos(width) {
        if (this.negative !== 0) {
          return this.abs().inotn(width).iaddn(1);
        }
        return this.clone();
      };
      BN2.prototype.fromTwos = function fromTwos(width) {
        if (this.testn(width - 1)) {
          return this.notn(width).iaddn(1).ineg();
        }
        return this.clone();
      };
      BN2.prototype.isNeg = function isNeg() {
        return this.negative !== 0;
      };
      BN2.prototype.neg = function neg() {
        return this.clone().ineg();
      };
      BN2.prototype.ineg = function ineg() {
        if (!this.isZero()) {
          this.negative ^= 1;
        }
        return this;
      };
      BN2.prototype.iuor = function iuor(num) {
        while (this.length < num.length) {
          this.words[this.length++] = 0;
        }
        for (var i = 0; i < num.length; i++) {
          this.words[i] = this.words[i] | num.words[i];
        }
        return this._strip();
      };
      BN2.prototype.ior = function ior(num) {
        assert2((this.negative | num.negative) === 0);
        return this.iuor(num);
      };
      BN2.prototype.or = function or(num) {
        if (this.length > num.length)
          return this.clone().ior(num);
        return num.clone().ior(this);
      };
      BN2.prototype.uor = function uor(num) {
        if (this.length > num.length)
          return this.clone().iuor(num);
        return num.clone().iuor(this);
      };
      BN2.prototype.iuand = function iuand(num) {
        var b;
        if (this.length > num.length) {
          b = num;
        } else {
          b = this;
        }
        for (var i = 0; i < b.length; i++) {
          this.words[i] = this.words[i] & num.words[i];
        }
        this.length = b.length;
        return this._strip();
      };
      BN2.prototype.iand = function iand(num) {
        assert2((this.negative | num.negative) === 0);
        return this.iuand(num);
      };
      BN2.prototype.and = function and(num) {
        if (this.length > num.length)
          return this.clone().iand(num);
        return num.clone().iand(this);
      };
      BN2.prototype.uand = function uand(num) {
        if (this.length > num.length)
          return this.clone().iuand(num);
        return num.clone().iuand(this);
      };
      BN2.prototype.iuxor = function iuxor(num) {
        var a;
        var b;
        if (this.length > num.length) {
          a = this;
          b = num;
        } else {
          a = num;
          b = this;
        }
        for (var i = 0; i < b.length; i++) {
          this.words[i] = a.words[i] ^ b.words[i];
        }
        if (this !== a) {
          for (; i < a.length; i++) {
            this.words[i] = a.words[i];
          }
        }
        this.length = a.length;
        return this._strip();
      };
      BN2.prototype.ixor = function ixor(num) {
        assert2((this.negative | num.negative) === 0);
        return this.iuxor(num);
      };
      BN2.prototype.xor = function xor(num) {
        if (this.length > num.length)
          return this.clone().ixor(num);
        return num.clone().ixor(this);
      };
      BN2.prototype.uxor = function uxor(num) {
        if (this.length > num.length)
          return this.clone().iuxor(num);
        return num.clone().iuxor(this);
      };
      BN2.prototype.inotn = function inotn(width) {
        assert2(typeof width === "number" && width >= 0);
        var bytesNeeded = Math.ceil(width / 26) | 0;
        var bitsLeft = width % 26;
        this._expand(bytesNeeded);
        if (bitsLeft > 0) {
          bytesNeeded--;
        }
        for (var i = 0; i < bytesNeeded; i++) {
          this.words[i] = ~this.words[i] & 67108863;
        }
        if (bitsLeft > 0) {
          this.words[i] = ~this.words[i] & 67108863 >> 26 - bitsLeft;
        }
        return this._strip();
      };
      BN2.prototype.notn = function notn(width) {
        return this.clone().inotn(width);
      };
      BN2.prototype.setn = function setn(bit, val) {
        assert2(typeof bit === "number" && bit >= 0);
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        this._expand(off + 1);
        if (val) {
          this.words[off] = this.words[off] | 1 << wbit;
        } else {
          this.words[off] = this.words[off] & ~(1 << wbit);
        }
        return this._strip();
      };
      BN2.prototype.iadd = function iadd(num) {
        var r;
        if (this.negative !== 0 && num.negative === 0) {
          this.negative = 0;
          r = this.isub(num);
          this.negative ^= 1;
          return this._normSign();
        } else if (this.negative === 0 && num.negative !== 0) {
          num.negative = 0;
          r = this.isub(num);
          num.negative = 1;
          return r._normSign();
        }
        var a, b;
        if (this.length > num.length) {
          a = this;
          b = num;
        } else {
          a = num;
          b = this;
        }
        var carry = 0;
        for (var i = 0; i < b.length; i++) {
          r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
          this.words[i] = r & 67108863;
          carry = r >>> 26;
        }
        for (; carry !== 0 && i < a.length; i++) {
          r = (a.words[i] | 0) + carry;
          this.words[i] = r & 67108863;
          carry = r >>> 26;
        }
        this.length = a.length;
        if (carry !== 0) {
          this.words[this.length] = carry;
          this.length++;
        } else if (a !== this) {
          for (; i < a.length; i++) {
            this.words[i] = a.words[i];
          }
        }
        return this;
      };
      BN2.prototype.add = function add2(num) {
        var res;
        if (num.negative !== 0 && this.negative === 0) {
          num.negative = 0;
          res = this.sub(num);
          num.negative ^= 1;
          return res;
        } else if (num.negative === 0 && this.negative !== 0) {
          this.negative = 0;
          res = num.sub(this);
          this.negative = 1;
          return res;
        }
        if (this.length > num.length)
          return this.clone().iadd(num);
        return num.clone().iadd(this);
      };
      BN2.prototype.isub = function isub(num) {
        if (num.negative !== 0) {
          num.negative = 0;
          var r = this.iadd(num);
          num.negative = 1;
          return r._normSign();
        } else if (this.negative !== 0) {
          this.negative = 0;
          this.iadd(num);
          this.negative = 1;
          return this._normSign();
        }
        var cmp = this.cmp(num);
        if (cmp === 0) {
          this.negative = 0;
          this.length = 1;
          this.words[0] = 0;
          return this;
        }
        var a, b;
        if (cmp > 0) {
          a = this;
          b = num;
        } else {
          a = num;
          b = this;
        }
        var carry = 0;
        for (var i = 0; i < b.length; i++) {
          r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
          carry = r >> 26;
          this.words[i] = r & 67108863;
        }
        for (; carry !== 0 && i < a.length; i++) {
          r = (a.words[i] | 0) + carry;
          carry = r >> 26;
          this.words[i] = r & 67108863;
        }
        if (carry === 0 && i < a.length && a !== this) {
          for (; i < a.length; i++) {
            this.words[i] = a.words[i];
          }
        }
        this.length = Math.max(this.length, i);
        if (a !== this) {
          this.negative = 1;
        }
        return this._strip();
      };
      BN2.prototype.sub = function sub(num) {
        return this.clone().isub(num);
      };
      function smallMulTo(self2, num, out) {
        out.negative = num.negative ^ self2.negative;
        var len = self2.length + num.length | 0;
        out.length = len;
        len = len - 1 | 0;
        var a = self2.words[0] | 0;
        var b = num.words[0] | 0;
        var r = a * b;
        var lo = r & 67108863;
        var carry = r / 67108864 | 0;
        out.words[0] = lo;
        for (var k = 1; k < len; k++) {
          var ncarry = carry >>> 26;
          var rword = carry & 67108863;
          var maxJ = Math.min(k, num.length - 1);
          for (var j = Math.max(0, k - self2.length + 1); j <= maxJ; j++) {
            var i = k - j | 0;
            a = self2.words[i] | 0;
            b = num.words[j] | 0;
            r = a * b + rword;
            ncarry += r / 67108864 | 0;
            rword = r & 67108863;
          }
          out.words[k] = rword | 0;
          carry = ncarry | 0;
        }
        if (carry !== 0) {
          out.words[k] = carry | 0;
        } else {
          out.length--;
        }
        return out._strip();
      }
      var comb10MulTo = function comb10MulTo2(self2, num, out) {
        var a = self2.words;
        var b = num.words;
        var o = out.words;
        var c = 0;
        var lo;
        var mid;
        var hi;
        var a0 = a[0] | 0;
        var al0 = a0 & 8191;
        var ah0 = a0 >>> 13;
        var a1 = a[1] | 0;
        var al1 = a1 & 8191;
        var ah1 = a1 >>> 13;
        var a2 = a[2] | 0;
        var al2 = a2 & 8191;
        var ah2 = a2 >>> 13;
        var a3 = a[3] | 0;
        var al3 = a3 & 8191;
        var ah3 = a3 >>> 13;
        var a4 = a[4] | 0;
        var al4 = a4 & 8191;
        var ah4 = a4 >>> 13;
        var a5 = a[5] | 0;
        var al5 = a5 & 8191;
        var ah5 = a5 >>> 13;
        var a6 = a[6] | 0;
        var al6 = a6 & 8191;
        var ah6 = a6 >>> 13;
        var a7 = a[7] | 0;
        var al7 = a7 & 8191;
        var ah7 = a7 >>> 13;
        var a8 = a[8] | 0;
        var al8 = a8 & 8191;
        var ah8 = a8 >>> 13;
        var a9 = a[9] | 0;
        var al9 = a9 & 8191;
        var ah9 = a9 >>> 13;
        var b0 = b[0] | 0;
        var bl0 = b0 & 8191;
        var bh0 = b0 >>> 13;
        var b1 = b[1] | 0;
        var bl1 = b1 & 8191;
        var bh1 = b1 >>> 13;
        var b2 = b[2] | 0;
        var bl2 = b2 & 8191;
        var bh2 = b2 >>> 13;
        var b3 = b[3] | 0;
        var bl3 = b3 & 8191;
        var bh3 = b3 >>> 13;
        var b4 = b[4] | 0;
        var bl4 = b4 & 8191;
        var bh4 = b4 >>> 13;
        var b5 = b[5] | 0;
        var bl5 = b5 & 8191;
        var bh5 = b5 >>> 13;
        var b6 = b[6] | 0;
        var bl6 = b6 & 8191;
        var bh6 = b6 >>> 13;
        var b7 = b[7] | 0;
        var bl7 = b7 & 8191;
        var bh7 = b7 >>> 13;
        var b8 = b[8] | 0;
        var bl8 = b8 & 8191;
        var bh8 = b8 >>> 13;
        var b9 = b[9] | 0;
        var bl9 = b9 & 8191;
        var bh9 = b9 >>> 13;
        out.negative = self2.negative ^ num.negative;
        out.length = 19;
        lo = Math.imul(al0, bl0);
        mid = Math.imul(al0, bh0);
        mid = mid + Math.imul(ah0, bl0) | 0;
        hi = Math.imul(ah0, bh0);
        var w0 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
        w0 &= 67108863;
        lo = Math.imul(al1, bl0);
        mid = Math.imul(al1, bh0);
        mid = mid + Math.imul(ah1, bl0) | 0;
        hi = Math.imul(ah1, bh0);
        lo = lo + Math.imul(al0, bl1) | 0;
        mid = mid + Math.imul(al0, bh1) | 0;
        mid = mid + Math.imul(ah0, bl1) | 0;
        hi = hi + Math.imul(ah0, bh1) | 0;
        var w1 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
        w1 &= 67108863;
        lo = Math.imul(al2, bl0);
        mid = Math.imul(al2, bh0);
        mid = mid + Math.imul(ah2, bl0) | 0;
        hi = Math.imul(ah2, bh0);
        lo = lo + Math.imul(al1, bl1) | 0;
        mid = mid + Math.imul(al1, bh1) | 0;
        mid = mid + Math.imul(ah1, bl1) | 0;
        hi = hi + Math.imul(ah1, bh1) | 0;
        lo = lo + Math.imul(al0, bl2) | 0;
        mid = mid + Math.imul(al0, bh2) | 0;
        mid = mid + Math.imul(ah0, bl2) | 0;
        hi = hi + Math.imul(ah0, bh2) | 0;
        var w2 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
        w2 &= 67108863;
        lo = Math.imul(al3, bl0);
        mid = Math.imul(al3, bh0);
        mid = mid + Math.imul(ah3, bl0) | 0;
        hi = Math.imul(ah3, bh0);
        lo = lo + Math.imul(al2, bl1) | 0;
        mid = mid + Math.imul(al2, bh1) | 0;
        mid = mid + Math.imul(ah2, bl1) | 0;
        hi = hi + Math.imul(ah2, bh1) | 0;
        lo = lo + Math.imul(al1, bl2) | 0;
        mid = mid + Math.imul(al1, bh2) | 0;
        mid = mid + Math.imul(ah1, bl2) | 0;
        hi = hi + Math.imul(ah1, bh2) | 0;
        lo = lo + Math.imul(al0, bl3) | 0;
        mid = mid + Math.imul(al0, bh3) | 0;
        mid = mid + Math.imul(ah0, bl3) | 0;
        hi = hi + Math.imul(ah0, bh3) | 0;
        var w3 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
        w3 &= 67108863;
        lo = Math.imul(al4, bl0);
        mid = Math.imul(al4, bh0);
        mid = mid + Math.imul(ah4, bl0) | 0;
        hi = Math.imul(ah4, bh0);
        lo = lo + Math.imul(al3, bl1) | 0;
        mid = mid + Math.imul(al3, bh1) | 0;
        mid = mid + Math.imul(ah3, bl1) | 0;
        hi = hi + Math.imul(ah3, bh1) | 0;
        lo = lo + Math.imul(al2, bl2) | 0;
        mid = mid + Math.imul(al2, bh2) | 0;
        mid = mid + Math.imul(ah2, bl2) | 0;
        hi = hi + Math.imul(ah2, bh2) | 0;
        lo = lo + Math.imul(al1, bl3) | 0;
        mid = mid + Math.imul(al1, bh3) | 0;
        mid = mid + Math.imul(ah1, bl3) | 0;
        hi = hi + Math.imul(ah1, bh3) | 0;
        lo = lo + Math.imul(al0, bl4) | 0;
        mid = mid + Math.imul(al0, bh4) | 0;
        mid = mid + Math.imul(ah0, bl4) | 0;
        hi = hi + Math.imul(ah0, bh4) | 0;
        var w4 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
        w4 &= 67108863;
        lo = Math.imul(al5, bl0);
        mid = Math.imul(al5, bh0);
        mid = mid + Math.imul(ah5, bl0) | 0;
        hi = Math.imul(ah5, bh0);
        lo = lo + Math.imul(al4, bl1) | 0;
        mid = mid + Math.imul(al4, bh1) | 0;
        mid = mid + Math.imul(ah4, bl1) | 0;
        hi = hi + Math.imul(ah4, bh1) | 0;
        lo = lo + Math.imul(al3, bl2) | 0;
        mid = mid + Math.imul(al3, bh2) | 0;
        mid = mid + Math.imul(ah3, bl2) | 0;
        hi = hi + Math.imul(ah3, bh2) | 0;
        lo = lo + Math.imul(al2, bl3) | 0;
        mid = mid + Math.imul(al2, bh3) | 0;
        mid = mid + Math.imul(ah2, bl3) | 0;
        hi = hi + Math.imul(ah2, bh3) | 0;
        lo = lo + Math.imul(al1, bl4) | 0;
        mid = mid + Math.imul(al1, bh4) | 0;
        mid = mid + Math.imul(ah1, bl4) | 0;
        hi = hi + Math.imul(ah1, bh4) | 0;
        lo = lo + Math.imul(al0, bl5) | 0;
        mid = mid + Math.imul(al0, bh5) | 0;
        mid = mid + Math.imul(ah0, bl5) | 0;
        hi = hi + Math.imul(ah0, bh5) | 0;
        var w5 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
        w5 &= 67108863;
        lo = Math.imul(al6, bl0);
        mid = Math.imul(al6, bh0);
        mid = mid + Math.imul(ah6, bl0) | 0;
        hi = Math.imul(ah6, bh0);
        lo = lo + Math.imul(al5, bl1) | 0;
        mid = mid + Math.imul(al5, bh1) | 0;
        mid = mid + Math.imul(ah5, bl1) | 0;
        hi = hi + Math.imul(ah5, bh1) | 0;
        lo = lo + Math.imul(al4, bl2) | 0;
        mid = mid + Math.imul(al4, bh2) | 0;
        mid = mid + Math.imul(ah4, bl2) | 0;
        hi = hi + Math.imul(ah4, bh2) | 0;
        lo = lo + Math.imul(al3, bl3) | 0;
        mid = mid + Math.imul(al3, bh3) | 0;
        mid = mid + Math.imul(ah3, bl3) | 0;
        hi = hi + Math.imul(ah3, bh3) | 0;
        lo = lo + Math.imul(al2, bl4) | 0;
        mid = mid + Math.imul(al2, bh4) | 0;
        mid = mid + Math.imul(ah2, bl4) | 0;
        hi = hi + Math.imul(ah2, bh4) | 0;
        lo = lo + Math.imul(al1, bl5) | 0;
        mid = mid + Math.imul(al1, bh5) | 0;
        mid = mid + Math.imul(ah1, bl5) | 0;
        hi = hi + Math.imul(ah1, bh5) | 0;
        lo = lo + Math.imul(al0, bl6) | 0;
        mid = mid + Math.imul(al0, bh6) | 0;
        mid = mid + Math.imul(ah0, bl6) | 0;
        hi = hi + Math.imul(ah0, bh6) | 0;
        var w6 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
        w6 &= 67108863;
        lo = Math.imul(al7, bl0);
        mid = Math.imul(al7, bh0);
        mid = mid + Math.imul(ah7, bl0) | 0;
        hi = Math.imul(ah7, bh0);
        lo = lo + Math.imul(al6, bl1) | 0;
        mid = mid + Math.imul(al6, bh1) | 0;
        mid = mid + Math.imul(ah6, bl1) | 0;
        hi = hi + Math.imul(ah6, bh1) | 0;
        lo = lo + Math.imul(al5, bl2) | 0;
        mid = mid + Math.imul(al5, bh2) | 0;
        mid = mid + Math.imul(ah5, bl2) | 0;
        hi = hi + Math.imul(ah5, bh2) | 0;
        lo = lo + Math.imul(al4, bl3) | 0;
        mid = mid + Math.imul(al4, bh3) | 0;
        mid = mid + Math.imul(ah4, bl3) | 0;
        hi = hi + Math.imul(ah4, bh3) | 0;
        lo = lo + Math.imul(al3, bl4) | 0;
        mid = mid + Math.imul(al3, bh4) | 0;
        mid = mid + Math.imul(ah3, bl4) | 0;
        hi = hi + Math.imul(ah3, bh4) | 0;
        lo = lo + Math.imul(al2, bl5) | 0;
        mid = mid + Math.imul(al2, bh5) | 0;
        mid = mid + Math.imul(ah2, bl5) | 0;
        hi = hi + Math.imul(ah2, bh5) | 0;
        lo = lo + Math.imul(al1, bl6) | 0;
        mid = mid + Math.imul(al1, bh6) | 0;
        mid = mid + Math.imul(ah1, bl6) | 0;
        hi = hi + Math.imul(ah1, bh6) | 0;
        lo = lo + Math.imul(al0, bl7) | 0;
        mid = mid + Math.imul(al0, bh7) | 0;
        mid = mid + Math.imul(ah0, bl7) | 0;
        hi = hi + Math.imul(ah0, bh7) | 0;
        var w7 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
        w7 &= 67108863;
        lo = Math.imul(al8, bl0);
        mid = Math.imul(al8, bh0);
        mid = mid + Math.imul(ah8, bl0) | 0;
        hi = Math.imul(ah8, bh0);
        lo = lo + Math.imul(al7, bl1) | 0;
        mid = mid + Math.imul(al7, bh1) | 0;
        mid = mid + Math.imul(ah7, bl1) | 0;
        hi = hi + Math.imul(ah7, bh1) | 0;
        lo = lo + Math.imul(al6, bl2) | 0;
        mid = mid + Math.imul(al6, bh2) | 0;
        mid = mid + Math.imul(ah6, bl2) | 0;
        hi = hi + Math.imul(ah6, bh2) | 0;
        lo = lo + Math.imul(al5, bl3) | 0;
        mid = mid + Math.imul(al5, bh3) | 0;
        mid = mid + Math.imul(ah5, bl3) | 0;
        hi = hi + Math.imul(ah5, bh3) | 0;
        lo = lo + Math.imul(al4, bl4) | 0;
        mid = mid + Math.imul(al4, bh4) | 0;
        mid = mid + Math.imul(ah4, bl4) | 0;
        hi = hi + Math.imul(ah4, bh4) | 0;
        lo = lo + Math.imul(al3, bl5) | 0;
        mid = mid + Math.imul(al3, bh5) | 0;
        mid = mid + Math.imul(ah3, bl5) | 0;
        hi = hi + Math.imul(ah3, bh5) | 0;
        lo = lo + Math.imul(al2, bl6) | 0;
        mid = mid + Math.imul(al2, bh6) | 0;
        mid = mid + Math.imul(ah2, bl6) | 0;
        hi = hi + Math.imul(ah2, bh6) | 0;
        lo = lo + Math.imul(al1, bl7) | 0;
        mid = mid + Math.imul(al1, bh7) | 0;
        mid = mid + Math.imul(ah1, bl7) | 0;
        hi = hi + Math.imul(ah1, bh7) | 0;
        lo = lo + Math.imul(al0, bl8) | 0;
        mid = mid + Math.imul(al0, bh8) | 0;
        mid = mid + Math.imul(ah0, bl8) | 0;
        hi = hi + Math.imul(ah0, bh8) | 0;
        var w8 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
        w8 &= 67108863;
        lo = Math.imul(al9, bl0);
        mid = Math.imul(al9, bh0);
        mid = mid + Math.imul(ah9, bl0) | 0;
        hi = Math.imul(ah9, bh0);
        lo = lo + Math.imul(al8, bl1) | 0;
        mid = mid + Math.imul(al8, bh1) | 0;
        mid = mid + Math.imul(ah8, bl1) | 0;
        hi = hi + Math.imul(ah8, bh1) | 0;
        lo = lo + Math.imul(al7, bl2) | 0;
        mid = mid + Math.imul(al7, bh2) | 0;
        mid = mid + Math.imul(ah7, bl2) | 0;
        hi = hi + Math.imul(ah7, bh2) | 0;
        lo = lo + Math.imul(al6, bl3) | 0;
        mid = mid + Math.imul(al6, bh3) | 0;
        mid = mid + Math.imul(ah6, bl3) | 0;
        hi = hi + Math.imul(ah6, bh3) | 0;
        lo = lo + Math.imul(al5, bl4) | 0;
        mid = mid + Math.imul(al5, bh4) | 0;
        mid = mid + Math.imul(ah5, bl4) | 0;
        hi = hi + Math.imul(ah5, bh4) | 0;
        lo = lo + Math.imul(al4, bl5) | 0;
        mid = mid + Math.imul(al4, bh5) | 0;
        mid = mid + Math.imul(ah4, bl5) | 0;
        hi = hi + Math.imul(ah4, bh5) | 0;
        lo = lo + Math.imul(al3, bl6) | 0;
        mid = mid + Math.imul(al3, bh6) | 0;
        mid = mid + Math.imul(ah3, bl6) | 0;
        hi = hi + Math.imul(ah3, bh6) | 0;
        lo = lo + Math.imul(al2, bl7) | 0;
        mid = mid + Math.imul(al2, bh7) | 0;
        mid = mid + Math.imul(ah2, bl7) | 0;
        hi = hi + Math.imul(ah2, bh7) | 0;
        lo = lo + Math.imul(al1, bl8) | 0;
        mid = mid + Math.imul(al1, bh8) | 0;
        mid = mid + Math.imul(ah1, bl8) | 0;
        hi = hi + Math.imul(ah1, bh8) | 0;
        lo = lo + Math.imul(al0, bl9) | 0;
        mid = mid + Math.imul(al0, bh9) | 0;
        mid = mid + Math.imul(ah0, bl9) | 0;
        hi = hi + Math.imul(ah0, bh9) | 0;
        var w9 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
        w9 &= 67108863;
        lo = Math.imul(al9, bl1);
        mid = Math.imul(al9, bh1);
        mid = mid + Math.imul(ah9, bl1) | 0;
        hi = Math.imul(ah9, bh1);
        lo = lo + Math.imul(al8, bl2) | 0;
        mid = mid + Math.imul(al8, bh2) | 0;
        mid = mid + Math.imul(ah8, bl2) | 0;
        hi = hi + Math.imul(ah8, bh2) | 0;
        lo = lo + Math.imul(al7, bl3) | 0;
        mid = mid + Math.imul(al7, bh3) | 0;
        mid = mid + Math.imul(ah7, bl3) | 0;
        hi = hi + Math.imul(ah7, bh3) | 0;
        lo = lo + Math.imul(al6, bl4) | 0;
        mid = mid + Math.imul(al6, bh4) | 0;
        mid = mid + Math.imul(ah6, bl4) | 0;
        hi = hi + Math.imul(ah6, bh4) | 0;
        lo = lo + Math.imul(al5, bl5) | 0;
        mid = mid + Math.imul(al5, bh5) | 0;
        mid = mid + Math.imul(ah5, bl5) | 0;
        hi = hi + Math.imul(ah5, bh5) | 0;
        lo = lo + Math.imul(al4, bl6) | 0;
        mid = mid + Math.imul(al4, bh6) | 0;
        mid = mid + Math.imul(ah4, bl6) | 0;
        hi = hi + Math.imul(ah4, bh6) | 0;
        lo = lo + Math.imul(al3, bl7) | 0;
        mid = mid + Math.imul(al3, bh7) | 0;
        mid = mid + Math.imul(ah3, bl7) | 0;
        hi = hi + Math.imul(ah3, bh7) | 0;
        lo = lo + Math.imul(al2, bl8) | 0;
        mid = mid + Math.imul(al2, bh8) | 0;
        mid = mid + Math.imul(ah2, bl8) | 0;
        hi = hi + Math.imul(ah2, bh8) | 0;
        lo = lo + Math.imul(al1, bl9) | 0;
        mid = mid + Math.imul(al1, bh9) | 0;
        mid = mid + Math.imul(ah1, bl9) | 0;
        hi = hi + Math.imul(ah1, bh9) | 0;
        var w10 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
        w10 &= 67108863;
        lo = Math.imul(al9, bl2);
        mid = Math.imul(al9, bh2);
        mid = mid + Math.imul(ah9, bl2) | 0;
        hi = Math.imul(ah9, bh2);
        lo = lo + Math.imul(al8, bl3) | 0;
        mid = mid + Math.imul(al8, bh3) | 0;
        mid = mid + Math.imul(ah8, bl3) | 0;
        hi = hi + Math.imul(ah8, bh3) | 0;
        lo = lo + Math.imul(al7, bl4) | 0;
        mid = mid + Math.imul(al7, bh4) | 0;
        mid = mid + Math.imul(ah7, bl4) | 0;
        hi = hi + Math.imul(ah7, bh4) | 0;
        lo = lo + Math.imul(al6, bl5) | 0;
        mid = mid + Math.imul(al6, bh5) | 0;
        mid = mid + Math.imul(ah6, bl5) | 0;
        hi = hi + Math.imul(ah6, bh5) | 0;
        lo = lo + Math.imul(al5, bl6) | 0;
        mid = mid + Math.imul(al5, bh6) | 0;
        mid = mid + Math.imul(ah5, bl6) | 0;
        hi = hi + Math.imul(ah5, bh6) | 0;
        lo = lo + Math.imul(al4, bl7) | 0;
        mid = mid + Math.imul(al4, bh7) | 0;
        mid = mid + Math.imul(ah4, bl7) | 0;
        hi = hi + Math.imul(ah4, bh7) | 0;
        lo = lo + Math.imul(al3, bl8) | 0;
        mid = mid + Math.imul(al3, bh8) | 0;
        mid = mid + Math.imul(ah3, bl8) | 0;
        hi = hi + Math.imul(ah3, bh8) | 0;
        lo = lo + Math.imul(al2, bl9) | 0;
        mid = mid + Math.imul(al2, bh9) | 0;
        mid = mid + Math.imul(ah2, bl9) | 0;
        hi = hi + Math.imul(ah2, bh9) | 0;
        var w11 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
        w11 &= 67108863;
        lo = Math.imul(al9, bl3);
        mid = Math.imul(al9, bh3);
        mid = mid + Math.imul(ah9, bl3) | 0;
        hi = Math.imul(ah9, bh3);
        lo = lo + Math.imul(al8, bl4) | 0;
        mid = mid + Math.imul(al8, bh4) | 0;
        mid = mid + Math.imul(ah8, bl4) | 0;
        hi = hi + Math.imul(ah8, bh4) | 0;
        lo = lo + Math.imul(al7, bl5) | 0;
        mid = mid + Math.imul(al7, bh5) | 0;
        mid = mid + Math.imul(ah7, bl5) | 0;
        hi = hi + Math.imul(ah7, bh5) | 0;
        lo = lo + Math.imul(al6, bl6) | 0;
        mid = mid + Math.imul(al6, bh6) | 0;
        mid = mid + Math.imul(ah6, bl6) | 0;
        hi = hi + Math.imul(ah6, bh6) | 0;
        lo = lo + Math.imul(al5, bl7) | 0;
        mid = mid + Math.imul(al5, bh7) | 0;
        mid = mid + Math.imul(ah5, bl7) | 0;
        hi = hi + Math.imul(ah5, bh7) | 0;
        lo = lo + Math.imul(al4, bl8) | 0;
        mid = mid + Math.imul(al4, bh8) | 0;
        mid = mid + Math.imul(ah4, bl8) | 0;
        hi = hi + Math.imul(ah4, bh8) | 0;
        lo = lo + Math.imul(al3, bl9) | 0;
        mid = mid + Math.imul(al3, bh9) | 0;
        mid = mid + Math.imul(ah3, bl9) | 0;
        hi = hi + Math.imul(ah3, bh9) | 0;
        var w12 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
        w12 &= 67108863;
        lo = Math.imul(al9, bl4);
        mid = Math.imul(al9, bh4);
        mid = mid + Math.imul(ah9, bl4) | 0;
        hi = Math.imul(ah9, bh4);
        lo = lo + Math.imul(al8, bl5) | 0;
        mid = mid + Math.imul(al8, bh5) | 0;
        mid = mid + Math.imul(ah8, bl5) | 0;
        hi = hi + Math.imul(ah8, bh5) | 0;
        lo = lo + Math.imul(al7, bl6) | 0;
        mid = mid + Math.imul(al7, bh6) | 0;
        mid = mid + Math.imul(ah7, bl6) | 0;
        hi = hi + Math.imul(ah7, bh6) | 0;
        lo = lo + Math.imul(al6, bl7) | 0;
        mid = mid + Math.imul(al6, bh7) | 0;
        mid = mid + Math.imul(ah6, bl7) | 0;
        hi = hi + Math.imul(ah6, bh7) | 0;
        lo = lo + Math.imul(al5, bl8) | 0;
        mid = mid + Math.imul(al5, bh8) | 0;
        mid = mid + Math.imul(ah5, bl8) | 0;
        hi = hi + Math.imul(ah5, bh8) | 0;
        lo = lo + Math.imul(al4, bl9) | 0;
        mid = mid + Math.imul(al4, bh9) | 0;
        mid = mid + Math.imul(ah4, bl9) | 0;
        hi = hi + Math.imul(ah4, bh9) | 0;
        var w13 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
        w13 &= 67108863;
        lo = Math.imul(al9, bl5);
        mid = Math.imul(al9, bh5);
        mid = mid + Math.imul(ah9, bl5) | 0;
        hi = Math.imul(ah9, bh5);
        lo = lo + Math.imul(al8, bl6) | 0;
        mid = mid + Math.imul(al8, bh6) | 0;
        mid = mid + Math.imul(ah8, bl6) | 0;
        hi = hi + Math.imul(ah8, bh6) | 0;
        lo = lo + Math.imul(al7, bl7) | 0;
        mid = mid + Math.imul(al7, bh7) | 0;
        mid = mid + Math.imul(ah7, bl7) | 0;
        hi = hi + Math.imul(ah7, bh7) | 0;
        lo = lo + Math.imul(al6, bl8) | 0;
        mid = mid + Math.imul(al6, bh8) | 0;
        mid = mid + Math.imul(ah6, bl8) | 0;
        hi = hi + Math.imul(ah6, bh8) | 0;
        lo = lo + Math.imul(al5, bl9) | 0;
        mid = mid + Math.imul(al5, bh9) | 0;
        mid = mid + Math.imul(ah5, bl9) | 0;
        hi = hi + Math.imul(ah5, bh9) | 0;
        var w14 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
        w14 &= 67108863;
        lo = Math.imul(al9, bl6);
        mid = Math.imul(al9, bh6);
        mid = mid + Math.imul(ah9, bl6) | 0;
        hi = Math.imul(ah9, bh6);
        lo = lo + Math.imul(al8, bl7) | 0;
        mid = mid + Math.imul(al8, bh7) | 0;
        mid = mid + Math.imul(ah8, bl7) | 0;
        hi = hi + Math.imul(ah8, bh7) | 0;
        lo = lo + Math.imul(al7, bl8) | 0;
        mid = mid + Math.imul(al7, bh8) | 0;
        mid = mid + Math.imul(ah7, bl8) | 0;
        hi = hi + Math.imul(ah7, bh8) | 0;
        lo = lo + Math.imul(al6, bl9) | 0;
        mid = mid + Math.imul(al6, bh9) | 0;
        mid = mid + Math.imul(ah6, bl9) | 0;
        hi = hi + Math.imul(ah6, bh9) | 0;
        var w15 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
        w15 &= 67108863;
        lo = Math.imul(al9, bl7);
        mid = Math.imul(al9, bh7);
        mid = mid + Math.imul(ah9, bl7) | 0;
        hi = Math.imul(ah9, bh7);
        lo = lo + Math.imul(al8, bl8) | 0;
        mid = mid + Math.imul(al8, bh8) | 0;
        mid = mid + Math.imul(ah8, bl8) | 0;
        hi = hi + Math.imul(ah8, bh8) | 0;
        lo = lo + Math.imul(al7, bl9) | 0;
        mid = mid + Math.imul(al7, bh9) | 0;
        mid = mid + Math.imul(ah7, bl9) | 0;
        hi = hi + Math.imul(ah7, bh9) | 0;
        var w16 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
        w16 &= 67108863;
        lo = Math.imul(al9, bl8);
        mid = Math.imul(al9, bh8);
        mid = mid + Math.imul(ah9, bl8) | 0;
        hi = Math.imul(ah9, bh8);
        lo = lo + Math.imul(al8, bl9) | 0;
        mid = mid + Math.imul(al8, bh9) | 0;
        mid = mid + Math.imul(ah8, bl9) | 0;
        hi = hi + Math.imul(ah8, bh9) | 0;
        var w17 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
        w17 &= 67108863;
        lo = Math.imul(al9, bl9);
        mid = Math.imul(al9, bh9);
        mid = mid + Math.imul(ah9, bl9) | 0;
        hi = Math.imul(ah9, bh9);
        var w18 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
        w18 &= 67108863;
        o[0] = w0;
        o[1] = w1;
        o[2] = w2;
        o[3] = w3;
        o[4] = w4;
        o[5] = w5;
        o[6] = w6;
        o[7] = w7;
        o[8] = w8;
        o[9] = w9;
        o[10] = w10;
        o[11] = w11;
        o[12] = w12;
        o[13] = w13;
        o[14] = w14;
        o[15] = w15;
        o[16] = w16;
        o[17] = w17;
        o[18] = w18;
        if (c !== 0) {
          o[19] = c;
          out.length++;
        }
        return out;
      };
      if (!Math.imul) {
        comb10MulTo = smallMulTo;
      }
      function bigMulTo(self2, num, out) {
        out.negative = num.negative ^ self2.negative;
        out.length = self2.length + num.length;
        var carry = 0;
        var hncarry = 0;
        for (var k = 0; k < out.length - 1; k++) {
          var ncarry = hncarry;
          hncarry = 0;
          var rword = carry & 67108863;
          var maxJ = Math.min(k, num.length - 1);
          for (var j = Math.max(0, k - self2.length + 1); j <= maxJ; j++) {
            var i = k - j;
            var a = self2.words[i] | 0;
            var b = num.words[j] | 0;
            var r = a * b;
            var lo = r & 67108863;
            ncarry = ncarry + (r / 67108864 | 0) | 0;
            lo = lo + rword | 0;
            rword = lo & 67108863;
            ncarry = ncarry + (lo >>> 26) | 0;
            hncarry += ncarry >>> 26;
            ncarry &= 67108863;
          }
          out.words[k] = rword;
          carry = ncarry;
          ncarry = hncarry;
        }
        if (carry !== 0) {
          out.words[k] = carry;
        } else {
          out.length--;
        }
        return out._strip();
      }
      function jumboMulTo(self2, num, out) {
        return bigMulTo(self2, num, out);
      }
      BN2.prototype.mulTo = function mulTo(num, out) {
        var res;
        var len = this.length + num.length;
        if (this.length === 10 && num.length === 10) {
          res = comb10MulTo(this, num, out);
        } else if (len < 63) {
          res = smallMulTo(this, num, out);
        } else if (len < 1024) {
          res = bigMulTo(this, num, out);
        } else {
          res = jumboMulTo(this, num, out);
        }
        return res;
      };
      function FFTM(x, y) {
        this.x = x;
        this.y = y;
      }
      FFTM.prototype.makeRBT = function makeRBT(N) {
        var t = new Array(N);
        var l = BN2.prototype._countBits(N) - 1;
        for (var i = 0; i < N; i++) {
          t[i] = this.revBin(i, l, N);
        }
        return t;
      };
      FFTM.prototype.revBin = function revBin(x, l, N) {
        if (x === 0 || x === N - 1)
          return x;
        var rb = 0;
        for (var i = 0; i < l; i++) {
          rb |= (x & 1) << l - i - 1;
          x >>= 1;
        }
        return rb;
      };
      FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N) {
        for (var i = 0; i < N; i++) {
          rtws[i] = rws[rbt[i]];
          itws[i] = iws[rbt[i]];
        }
      };
      FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N, rbt) {
        this.permute(rbt, rws, iws, rtws, itws, N);
        for (var s = 1; s < N; s <<= 1) {
          var l = s << 1;
          var rtwdf = Math.cos(2 * Math.PI / l);
          var itwdf = Math.sin(2 * Math.PI / l);
          for (var p = 0; p < N; p += l) {
            var rtwdf_ = rtwdf;
            var itwdf_ = itwdf;
            for (var j = 0; j < s; j++) {
              var re = rtws[p + j];
              var ie = itws[p + j];
              var ro = rtws[p + j + s];
              var io = itws[p + j + s];
              var rx = rtwdf_ * ro - itwdf_ * io;
              io = rtwdf_ * io + itwdf_ * ro;
              ro = rx;
              rtws[p + j] = re + ro;
              itws[p + j] = ie + io;
              rtws[p + j + s] = re - ro;
              itws[p + j + s] = ie - io;
              if (j !== l) {
                rx = rtwdf * rtwdf_ - itwdf * itwdf_;
                itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
                rtwdf_ = rx;
              }
            }
          }
        }
      };
      FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
        var N = Math.max(m, n) | 1;
        var odd = N & 1;
        var i = 0;
        for (N = N / 2 | 0; N; N = N >>> 1) {
          i++;
        }
        return 1 << i + 1 + odd;
      };
      FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
        if (N <= 1)
          return;
        for (var i = 0; i < N / 2; i++) {
          var t = rws[i];
          rws[i] = rws[N - i - 1];
          rws[N - i - 1] = t;
          t = iws[i];
          iws[i] = -iws[N - i - 1];
          iws[N - i - 1] = -t;
        }
      };
      FFTM.prototype.normalize13b = function normalize13b(ws, N) {
        var carry = 0;
        for (var i = 0; i < N / 2; i++) {
          var w = Math.round(ws[2 * i + 1] / N) * 8192 + Math.round(ws[2 * i] / N) + carry;
          ws[i] = w & 67108863;
          if (w < 67108864) {
            carry = 0;
          } else {
            carry = w / 67108864 | 0;
          }
        }
        return ws;
      };
      FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
        var carry = 0;
        for (var i = 0; i < len; i++) {
          carry = carry + (ws[i] | 0);
          rws[2 * i] = carry & 8191;
          carry = carry >>> 13;
          rws[2 * i + 1] = carry & 8191;
          carry = carry >>> 13;
        }
        for (i = 2 * len; i < N; ++i) {
          rws[i] = 0;
        }
        assert2(carry === 0);
        assert2((carry & ~8191) === 0);
      };
      FFTM.prototype.stub = function stub(N) {
        var ph = new Array(N);
        for (var i = 0; i < N; i++) {
          ph[i] = 0;
        }
        return ph;
      };
      FFTM.prototype.mulp = function mulp(x, y, out) {
        var N = 2 * this.guessLen13b(x.length, y.length);
        var rbt = this.makeRBT(N);
        var _ = this.stub(N);
        var rws = new Array(N);
        var rwst = new Array(N);
        var iwst = new Array(N);
        var nrws = new Array(N);
        var nrwst = new Array(N);
        var niwst = new Array(N);
        var rmws = out.words;
        rmws.length = N;
        this.convert13b(x.words, x.length, rws, N);
        this.convert13b(y.words, y.length, nrws, N);
        this.transform(rws, _, rwst, iwst, N, rbt);
        this.transform(nrws, _, nrwst, niwst, N, rbt);
        for (var i = 0; i < N; i++) {
          var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
          iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
          rwst[i] = rx;
        }
        this.conjugate(rwst, iwst, N);
        this.transform(rwst, iwst, rmws, _, N, rbt);
        this.conjugate(rmws, _, N);
        this.normalize13b(rmws, N);
        out.negative = x.negative ^ y.negative;
        out.length = x.length + y.length;
        return out._strip();
      };
      BN2.prototype.mul = function mul(num) {
        var out = new BN2(null);
        out.words = new Array(this.length + num.length);
        return this.mulTo(num, out);
      };
      BN2.prototype.mulf = function mulf(num) {
        var out = new BN2(null);
        out.words = new Array(this.length + num.length);
        return jumboMulTo(this, num, out);
      };
      BN2.prototype.imul = function imul(num) {
        return this.clone().mulTo(num, this);
      };
      BN2.prototype.imuln = function imuln(num) {
        var isNegNum = num < 0;
        if (isNegNum)
          num = -num;
        assert2(typeof num === "number");
        assert2(num < 67108864);
        var carry = 0;
        for (var i = 0; i < this.length; i++) {
          var w = (this.words[i] | 0) * num;
          var lo = (w & 67108863) + (carry & 67108863);
          carry >>= 26;
          carry += w / 67108864 | 0;
          carry += lo >>> 26;
          this.words[i] = lo & 67108863;
        }
        if (carry !== 0) {
          this.words[i] = carry;
          this.length++;
        }
        return isNegNum ? this.ineg() : this;
      };
      BN2.prototype.muln = function muln(num) {
        return this.clone().imuln(num);
      };
      BN2.prototype.sqr = function sqr() {
        return this.mul(this);
      };
      BN2.prototype.isqr = function isqr() {
        return this.imul(this.clone());
      };
      BN2.prototype.pow = function pow(num) {
        var w = toBitArray(num);
        if (w.length === 0)
          return new BN2(1);
        var res = this;
        for (var i = 0; i < w.length; i++, res = res.sqr()) {
          if (w[i] !== 0)
            break;
        }
        if (++i < w.length) {
          for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
            if (w[i] === 0)
              continue;
            res = res.mul(q);
          }
        }
        return res;
      };
      BN2.prototype.iushln = function iushln(bits) {
        assert2(typeof bits === "number" && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        var carryMask = 67108863 >>> 26 - r << 26 - r;
        var i;
        if (r !== 0) {
          var carry = 0;
          for (i = 0; i < this.length; i++) {
            var newCarry = this.words[i] & carryMask;
            var c = (this.words[i] | 0) - newCarry << r;
            this.words[i] = c | carry;
            carry = newCarry >>> 26 - r;
          }
          if (carry) {
            this.words[i] = carry;
            this.length++;
          }
        }
        if (s !== 0) {
          for (i = this.length - 1; i >= 0; i--) {
            this.words[i + s] = this.words[i];
          }
          for (i = 0; i < s; i++) {
            this.words[i] = 0;
          }
          this.length += s;
        }
        return this._strip();
      };
      BN2.prototype.ishln = function ishln(bits) {
        assert2(this.negative === 0);
        return this.iushln(bits);
      };
      BN2.prototype.iushrn = function iushrn(bits, hint, extended) {
        assert2(typeof bits === "number" && bits >= 0);
        var h;
        if (hint) {
          h = (hint - hint % 26) / 26;
        } else {
          h = 0;
        }
        var r = bits % 26;
        var s = Math.min((bits - r) / 26, this.length);
        var mask = 67108863 ^ 67108863 >>> r << r;
        var maskedWords = extended;
        h -= s;
        h = Math.max(0, h);
        if (maskedWords) {
          for (var i = 0; i < s; i++) {
            maskedWords.words[i] = this.words[i];
          }
          maskedWords.length = s;
        }
        if (s === 0) {
        } else if (this.length > s) {
          this.length -= s;
          for (i = 0; i < this.length; i++) {
            this.words[i] = this.words[i + s];
          }
        } else {
          this.words[0] = 0;
          this.length = 1;
        }
        var carry = 0;
        for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
          var word = this.words[i] | 0;
          this.words[i] = carry << 26 - r | word >>> r;
          carry = word & mask;
        }
        if (maskedWords && carry !== 0) {
          maskedWords.words[maskedWords.length++] = carry;
        }
        if (this.length === 0) {
          this.words[0] = 0;
          this.length = 1;
        }
        return this._strip();
      };
      BN2.prototype.ishrn = function ishrn(bits, hint, extended) {
        assert2(this.negative === 0);
        return this.iushrn(bits, hint, extended);
      };
      BN2.prototype.shln = function shln(bits) {
        return this.clone().ishln(bits);
      };
      BN2.prototype.ushln = function ushln(bits) {
        return this.clone().iushln(bits);
      };
      BN2.prototype.shrn = function shrn(bits) {
        return this.clone().ishrn(bits);
      };
      BN2.prototype.ushrn = function ushrn(bits) {
        return this.clone().iushrn(bits);
      };
      BN2.prototype.testn = function testn(bit) {
        assert2(typeof bit === "number" && bit >= 0);
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q = 1 << r;
        if (this.length <= s)
          return false;
        var w = this.words[s];
        return !!(w & q);
      };
      BN2.prototype.imaskn = function imaskn(bits) {
        assert2(typeof bits === "number" && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        assert2(this.negative === 0, "imaskn works only with positive numbers");
        if (this.length <= s) {
          return this;
        }
        if (r !== 0) {
          s++;
        }
        this.length = Math.min(s, this.length);
        if (r !== 0) {
          var mask = 67108863 ^ 67108863 >>> r << r;
          this.words[this.length - 1] &= mask;
        }
        return this._strip();
      };
      BN2.prototype.maskn = function maskn(bits) {
        return this.clone().imaskn(bits);
      };
      BN2.prototype.iaddn = function iaddn(num) {
        assert2(typeof num === "number");
        assert2(num < 67108864);
        if (num < 0)
          return this.isubn(-num);
        if (this.negative !== 0) {
          if (this.length === 1 && (this.words[0] | 0) <= num) {
            this.words[0] = num - (this.words[0] | 0);
            this.negative = 0;
            return this;
          }
          this.negative = 0;
          this.isubn(num);
          this.negative = 1;
          return this;
        }
        return this._iaddn(num);
      };
      BN2.prototype._iaddn = function _iaddn(num) {
        this.words[0] += num;
        for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) {
          this.words[i] -= 67108864;
          if (i === this.length - 1) {
            this.words[i + 1] = 1;
          } else {
            this.words[i + 1]++;
          }
        }
        this.length = Math.max(this.length, i + 1);
        return this;
      };
      BN2.prototype.isubn = function isubn(num) {
        assert2(typeof num === "number");
        assert2(num < 67108864);
        if (num < 0)
          return this.iaddn(-num);
        if (this.negative !== 0) {
          this.negative = 0;
          this.iaddn(num);
          this.negative = 1;
          return this;
        }
        this.words[0] -= num;
        if (this.length === 1 && this.words[0] < 0) {
          this.words[0] = -this.words[0];
          this.negative = 1;
        } else {
          for (var i = 0; i < this.length && this.words[i] < 0; i++) {
            this.words[i] += 67108864;
            this.words[i + 1] -= 1;
          }
        }
        return this._strip();
      };
      BN2.prototype.addn = function addn(num) {
        return this.clone().iaddn(num);
      };
      BN2.prototype.subn = function subn(num) {
        return this.clone().isubn(num);
      };
      BN2.prototype.iabs = function iabs() {
        this.negative = 0;
        return this;
      };
      BN2.prototype.abs = function abs() {
        return this.clone().iabs();
      };
      BN2.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
        var len = num.length + shift;
        var i;
        this._expand(len);
        var w;
        var carry = 0;
        for (i = 0; i < num.length; i++) {
          w = (this.words[i + shift] | 0) + carry;
          var right = (num.words[i] | 0) * mul;
          w -= right & 67108863;
          carry = (w >> 26) - (right / 67108864 | 0);
          this.words[i + shift] = w & 67108863;
        }
        for (; i < this.length - shift; i++) {
          w = (this.words[i + shift] | 0) + carry;
          carry = w >> 26;
          this.words[i + shift] = w & 67108863;
        }
        if (carry === 0)
          return this._strip();
        assert2(carry === -1);
        carry = 0;
        for (i = 0; i < this.length; i++) {
          w = -(this.words[i] | 0) + carry;
          carry = w >> 26;
          this.words[i] = w & 67108863;
        }
        this.negative = 1;
        return this._strip();
      };
      BN2.prototype._wordDiv = function _wordDiv(num, mode) {
        var shift = this.length - num.length;
        var a = this.clone();
        var b = num;
        var bhi = b.words[b.length - 1] | 0;
        var bhiBits = this._countBits(bhi);
        shift = 26 - bhiBits;
        if (shift !== 0) {
          b = b.ushln(shift);
          a.iushln(shift);
          bhi = b.words[b.length - 1] | 0;
        }
        var m = a.length - b.length;
        var q;
        if (mode !== "mod") {
          q = new BN2(null);
          q.length = m + 1;
          q.words = new Array(q.length);
          for (var i = 0; i < q.length; i++) {
            q.words[i] = 0;
          }
        }
        var diff = a.clone()._ishlnsubmul(b, 1, m);
        if (diff.negative === 0) {
          a = diff;
          if (q) {
            q.words[m] = 1;
          }
        }
        for (var j = m - 1; j >= 0; j--) {
          var qj = (a.words[b.length + j] | 0) * 67108864 + (a.words[b.length + j - 1] | 0);
          qj = Math.min(qj / bhi | 0, 67108863);
          a._ishlnsubmul(b, qj, j);
          while (a.negative !== 0) {
            qj--;
            a.negative = 0;
            a._ishlnsubmul(b, 1, j);
            if (!a.isZero()) {
              a.negative ^= 1;
            }
          }
          if (q) {
            q.words[j] = qj;
          }
        }
        if (q) {
          q._strip();
        }
        a._strip();
        if (mode !== "div" && shift !== 0) {
          a.iushrn(shift);
        }
        return {
          div: q || null,
          mod: a
        };
      };
      BN2.prototype.divmod = function divmod(num, mode, positive) {
        assert2(!num.isZero());
        if (this.isZero()) {
          return {
            div: new BN2(0),
            mod: new BN2(0)
          };
        }
        var div, mod, res;
        if (this.negative !== 0 && num.negative === 0) {
          res = this.neg().divmod(num, mode);
          if (mode !== "mod") {
            div = res.div.neg();
          }
          if (mode !== "div") {
            mod = res.mod.neg();
            if (positive && mod.negative !== 0) {
              mod.iadd(num);
            }
          }
          return {
            div,
            mod
          };
        }
        if (this.negative === 0 && num.negative !== 0) {
          res = this.divmod(num.neg(), mode);
          if (mode !== "mod") {
            div = res.div.neg();
          }
          return {
            div,
            mod: res.mod
          };
        }
        if ((this.negative & num.negative) !== 0) {
          res = this.neg().divmod(num.neg(), mode);
          if (mode !== "div") {
            mod = res.mod.neg();
            if (positive && mod.negative !== 0) {
              mod.isub(num);
            }
          }
          return {
            div: res.div,
            mod
          };
        }
        if (num.length > this.length || this.cmp(num) < 0) {
          return {
            div: new BN2(0),
            mod: this
          };
        }
        if (num.length === 1) {
          if (mode === "div") {
            return {
              div: this.divn(num.words[0]),
              mod: null
            };
          }
          if (mode === "mod") {
            return {
              div: null,
              mod: new BN2(this.modrn(num.words[0]))
            };
          }
          return {
            div: this.divn(num.words[0]),
            mod: new BN2(this.modrn(num.words[0]))
          };
        }
        return this._wordDiv(num, mode);
      };
      BN2.prototype.div = function div(num) {
        return this.divmod(num, "div", false).div;
      };
      BN2.prototype.mod = function mod(num) {
        return this.divmod(num, "mod", false).mod;
      };
      BN2.prototype.umod = function umod(num) {
        return this.divmod(num, "mod", true).mod;
      };
      BN2.prototype.divRound = function divRound(num) {
        var dm = this.divmod(num);
        if (dm.mod.isZero())
          return dm.div;
        var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
        var half = num.ushrn(1);
        var r2 = num.andln(1);
        var cmp = mod.cmp(half);
        if (cmp < 0 || r2 === 1 && cmp === 0)
          return dm.div;
        return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
      };
      BN2.prototype.modrn = function modrn(num) {
        var isNegNum = num < 0;
        if (isNegNum)
          num = -num;
        assert2(num <= 67108863);
        var p = (1 << 26) % num;
        var acc = 0;
        for (var i = this.length - 1; i >= 0; i--) {
          acc = (p * acc + (this.words[i] | 0)) % num;
        }
        return isNegNum ? -acc : acc;
      };
      BN2.prototype.modn = function modn(num) {
        return this.modrn(num);
      };
      BN2.prototype.idivn = function idivn(num) {
        var isNegNum = num < 0;
        if (isNegNum)
          num = -num;
        assert2(num <= 67108863);
        var carry = 0;
        for (var i = this.length - 1; i >= 0; i--) {
          var w = (this.words[i] | 0) + carry * 67108864;
          this.words[i] = w / num | 0;
          carry = w % num;
        }
        this._strip();
        return isNegNum ? this.ineg() : this;
      };
      BN2.prototype.divn = function divn(num) {
        return this.clone().idivn(num);
      };
      BN2.prototype.egcd = function egcd(p) {
        assert2(p.negative === 0);
        assert2(!p.isZero());
        var x = this;
        var y = p.clone();
        if (x.negative !== 0) {
          x = x.umod(p);
        } else {
          x = x.clone();
        }
        var A = new BN2(1);
        var B = new BN2(0);
        var C = new BN2(0);
        var D = new BN2(1);
        var g = 0;
        while (x.isEven() && y.isEven()) {
          x.iushrn(1);
          y.iushrn(1);
          ++g;
        }
        var yp = y.clone();
        var xp = x.clone();
        while (!x.isZero()) {
          for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1)
            ;
          if (i > 0) {
            x.iushrn(i);
            while (i-- > 0) {
              if (A.isOdd() || B.isOdd()) {
                A.iadd(yp);
                B.isub(xp);
              }
              A.iushrn(1);
              B.iushrn(1);
            }
          }
          for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1)
            ;
          if (j > 0) {
            y.iushrn(j);
            while (j-- > 0) {
              if (C.isOdd() || D.isOdd()) {
                C.iadd(yp);
                D.isub(xp);
              }
              C.iushrn(1);
              D.iushrn(1);
            }
          }
          if (x.cmp(y) >= 0) {
            x.isub(y);
            A.isub(C);
            B.isub(D);
          } else {
            y.isub(x);
            C.isub(A);
            D.isub(B);
          }
        }
        return {
          a: C,
          b: D,
          gcd: y.iushln(g)
        };
      };
      BN2.prototype._invmp = function _invmp(p) {
        assert2(p.negative === 0);
        assert2(!p.isZero());
        var a = this;
        var b = p.clone();
        if (a.negative !== 0) {
          a = a.umod(p);
        } else {
          a = a.clone();
        }
        var x1 = new BN2(1);
        var x2 = new BN2(0);
        var delta = b.clone();
        while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
          for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1)
            ;
          if (i > 0) {
            a.iushrn(i);
            while (i-- > 0) {
              if (x1.isOdd()) {
                x1.iadd(delta);
              }
              x1.iushrn(1);
            }
          }
          for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1)
            ;
          if (j > 0) {
            b.iushrn(j);
            while (j-- > 0) {
              if (x2.isOdd()) {
                x2.iadd(delta);
              }
              x2.iushrn(1);
            }
          }
          if (a.cmp(b) >= 0) {
            a.isub(b);
            x1.isub(x2);
          } else {
            b.isub(a);
            x2.isub(x1);
          }
        }
        var res;
        if (a.cmpn(1) === 0) {
          res = x1;
        } else {
          res = x2;
        }
        if (res.cmpn(0) < 0) {
          res.iadd(p);
        }
        return res;
      };
      BN2.prototype.gcd = function gcd(num) {
        if (this.isZero())
          return num.abs();
        if (num.isZero())
          return this.abs();
        var a = this.clone();
        var b = num.clone();
        a.negative = 0;
        b.negative = 0;
        for (var shift = 0; a.isEven() && b.isEven(); shift++) {
          a.iushrn(1);
          b.iushrn(1);
        }
        do {
          while (a.isEven()) {
            a.iushrn(1);
          }
          while (b.isEven()) {
            b.iushrn(1);
          }
          var r = a.cmp(b);
          if (r < 0) {
            var t = a;
            a = b;
            b = t;
          } else if (r === 0 || b.cmpn(1) === 0) {
            break;
          }
          a.isub(b);
        } while (true);
        return b.iushln(shift);
      };
      BN2.prototype.invm = function invm(num) {
        return this.egcd(num).a.umod(num);
      };
      BN2.prototype.isEven = function isEven() {
        return (this.words[0] & 1) === 0;
      };
      BN2.prototype.isOdd = function isOdd() {
        return (this.words[0] & 1) === 1;
      };
      BN2.prototype.andln = function andln(num) {
        return this.words[0] & num;
      };
      BN2.prototype.bincn = function bincn(bit) {
        assert2(typeof bit === "number");
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q = 1 << r;
        if (this.length <= s) {
          this._expand(s + 1);
          this.words[s] |= q;
          return this;
        }
        var carry = q;
        for (var i = s; carry !== 0 && i < this.length; i++) {
          var w = this.words[i] | 0;
          w += carry;
          carry = w >>> 26;
          w &= 67108863;
          this.words[i] = w;
        }
        if (carry !== 0) {
          this.words[i] = carry;
          this.length++;
        }
        return this;
      };
      BN2.prototype.isZero = function isZero() {
        return this.length === 1 && this.words[0] === 0;
      };
      BN2.prototype.cmpn = function cmpn(num) {
        var negative = num < 0;
        if (this.negative !== 0 && !negative)
          return -1;
        if (this.negative === 0 && negative)
          return 1;
        this._strip();
        var res;
        if (this.length > 1) {
          res = 1;
        } else {
          if (negative) {
            num = -num;
          }
          assert2(num <= 67108863, "Number is too big");
          var w = this.words[0] | 0;
          res = w === num ? 0 : w < num ? -1 : 1;
        }
        if (this.negative !== 0)
          return -res | 0;
        return res;
      };
      BN2.prototype.cmp = function cmp(num) {
        if (this.negative !== 0 && num.negative === 0)
          return -1;
        if (this.negative === 0 && num.negative !== 0)
          return 1;
        var res = this.ucmp(num);
        if (this.negative !== 0)
          return -res | 0;
        return res;
      };
      BN2.prototype.ucmp = function ucmp(num) {
        if (this.length > num.length)
          return 1;
        if (this.length < num.length)
          return -1;
        var res = 0;
        for (var i = this.length - 1; i >= 0; i--) {
          var a = this.words[i] | 0;
          var b = num.words[i] | 0;
          if (a === b)
            continue;
          if (a < b) {
            res = -1;
          } else if (a > b) {
            res = 1;
          }
          break;
        }
        return res;
      };
      BN2.prototype.gtn = function gtn(num) {
        return this.cmpn(num) === 1;
      };
      BN2.prototype.gt = function gt(num) {
        return this.cmp(num) === 1;
      };
      BN2.prototype.gten = function gten(num) {
        return this.cmpn(num) >= 0;
      };
      BN2.prototype.gte = function gte(num) {
        return this.cmp(num) >= 0;
      };
      BN2.prototype.ltn = function ltn(num) {
        return this.cmpn(num) === -1;
      };
      BN2.prototype.lt = function lt(num) {
        return this.cmp(num) === -1;
      };
      BN2.prototype.lten = function lten(num) {
        return this.cmpn(num) <= 0;
      };
      BN2.prototype.lte = function lte(num) {
        return this.cmp(num) <= 0;
      };
      BN2.prototype.eqn = function eqn(num) {
        return this.cmpn(num) === 0;
      };
      BN2.prototype.eq = function eq(num) {
        return this.cmp(num) === 0;
      };
      BN2.red = function red(num) {
        return new Red(num);
      };
      BN2.prototype.toRed = function toRed(ctx) {
        assert2(!this.red, "Already a number in reduction context");
        assert2(this.negative === 0, "red works only with positives");
        return ctx.convertTo(this)._forceRed(ctx);
      };
      BN2.prototype.fromRed = function fromRed() {
        assert2(this.red, "fromRed works only with numbers in reduction context");
        return this.red.convertFrom(this);
      };
      BN2.prototype._forceRed = function _forceRed(ctx) {
        this.red = ctx;
        return this;
      };
      BN2.prototype.forceRed = function forceRed(ctx) {
        assert2(!this.red, "Already a number in reduction context");
        return this._forceRed(ctx);
      };
      BN2.prototype.redAdd = function redAdd(num) {
        assert2(this.red, "redAdd works only with red numbers");
        return this.red.add(this, num);
      };
      BN2.prototype.redIAdd = function redIAdd(num) {
        assert2(this.red, "redIAdd works only with red numbers");
        return this.red.iadd(this, num);
      };
      BN2.prototype.redSub = function redSub(num) {
        assert2(this.red, "redSub works only with red numbers");
        return this.red.sub(this, num);
      };
      BN2.prototype.redISub = function redISub(num) {
        assert2(this.red, "redISub works only with red numbers");
        return this.red.isub(this, num);
      };
      BN2.prototype.redShl = function redShl(num) {
        assert2(this.red, "redShl works only with red numbers");
        return this.red.shl(this, num);
      };
      BN2.prototype.redMul = function redMul(num) {
        assert2(this.red, "redMul works only with red numbers");
        this.red._verify2(this, num);
        return this.red.mul(this, num);
      };
      BN2.prototype.redIMul = function redIMul(num) {
        assert2(this.red, "redMul works only with red numbers");
        this.red._verify2(this, num);
        return this.red.imul(this, num);
      };
      BN2.prototype.redSqr = function redSqr() {
        assert2(this.red, "redSqr works only with red numbers");
        this.red._verify1(this);
        return this.red.sqr(this);
      };
      BN2.prototype.redISqr = function redISqr() {
        assert2(this.red, "redISqr works only with red numbers");
        this.red._verify1(this);
        return this.red.isqr(this);
      };
      BN2.prototype.redSqrt = function redSqrt() {
        assert2(this.red, "redSqrt works only with red numbers");
        this.red._verify1(this);
        return this.red.sqrt(this);
      };
      BN2.prototype.redInvm = function redInvm() {
        assert2(this.red, "redInvm works only with red numbers");
        this.red._verify1(this);
        return this.red.invm(this);
      };
      BN2.prototype.redNeg = function redNeg() {
        assert2(this.red, "redNeg works only with red numbers");
        this.red._verify1(this);
        return this.red.neg(this);
      };
      BN2.prototype.redPow = function redPow(num) {
        assert2(this.red && !num.red, "redPow(normalNum)");
        this.red._verify1(this);
        return this.red.pow(this, num);
      };
      var primes = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
      };
      function MPrime(name, p) {
        this.name = name;
        this.p = new BN2(p, 16);
        this.n = this.p.bitLength();
        this.k = new BN2(1).iushln(this.n).isub(this.p);
        this.tmp = this._tmp();
      }
      MPrime.prototype._tmp = function _tmp() {
        var tmp = new BN2(null);
        tmp.words = new Array(Math.ceil(this.n / 13));
        return tmp;
      };
      MPrime.prototype.ireduce = function ireduce(num) {
        var r = num;
        var rlen;
        do {
          this.split(r, this.tmp);
          r = this.imulK(r);
          r = r.iadd(this.tmp);
          rlen = r.bitLength();
        } while (rlen > this.n);
        var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
        if (cmp === 0) {
          r.words[0] = 0;
          r.length = 1;
        } else if (cmp > 0) {
          r.isub(this.p);
        } else {
          if (r.strip !== void 0) {
            r.strip();
          } else {
            r._strip();
          }
        }
        return r;
      };
      MPrime.prototype.split = function split(input, out) {
        input.iushrn(this.n, 0, out);
      };
      MPrime.prototype.imulK = function imulK(num) {
        return num.imul(this.k);
      };
      function K256() {
        MPrime.call(
          this,
          "k256",
          "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
        );
      }
      inherits(K256, MPrime);
      K256.prototype.split = function split(input, output) {
        var mask = 4194303;
        var outLen = Math.min(input.length, 9);
        for (var i = 0; i < outLen; i++) {
          output.words[i] = input.words[i];
        }
        output.length = outLen;
        if (input.length <= 9) {
          input.words[0] = 0;
          input.length = 1;
          return;
        }
        var prev = input.words[9];
        output.words[output.length++] = prev & mask;
        for (i = 10; i < input.length; i++) {
          var next = input.words[i] | 0;
          input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
          prev = next;
        }
        prev >>>= 22;
        input.words[i - 10] = prev;
        if (prev === 0 && input.length > 10) {
          input.length -= 10;
        } else {
          input.length -= 9;
        }
      };
      K256.prototype.imulK = function imulK(num) {
        num.words[num.length] = 0;
        num.words[num.length + 1] = 0;
        num.length += 2;
        var lo = 0;
        for (var i = 0; i < num.length; i++) {
          var w = num.words[i] | 0;
          lo += w * 977;
          num.words[i] = lo & 67108863;
          lo = w * 64 + (lo / 67108864 | 0);
        }
        if (num.words[num.length - 1] === 0) {
          num.length--;
          if (num.words[num.length - 1] === 0) {
            num.length--;
          }
        }
        return num;
      };
      function P224() {
        MPrime.call(
          this,
          "p224",
          "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
        );
      }
      inherits(P224, MPrime);
      function P192() {
        MPrime.call(
          this,
          "p192",
          "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
        );
      }
      inherits(P192, MPrime);
      function P25519() {
        MPrime.call(
          this,
          "25519",
          "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
        );
      }
      inherits(P25519, MPrime);
      P25519.prototype.imulK = function imulK(num) {
        var carry = 0;
        for (var i = 0; i < num.length; i++) {
          var hi = (num.words[i] | 0) * 19 + carry;
          var lo = hi & 67108863;
          hi >>>= 26;
          num.words[i] = lo;
          carry = hi;
        }
        if (carry !== 0) {
          num.words[num.length++] = carry;
        }
        return num;
      };
      BN2._prime = function prime(name) {
        if (primes[name])
          return primes[name];
        var prime2;
        if (name === "k256") {
          prime2 = new K256();
        } else if (name === "p224") {
          prime2 = new P224();
        } else if (name === "p192") {
          prime2 = new P192();
        } else if (name === "p25519") {
          prime2 = new P25519();
        } else {
          throw new Error("Unknown prime " + name);
        }
        primes[name] = prime2;
        return prime2;
      };
      function Red(m) {
        if (typeof m === "string") {
          var prime = BN2._prime(m);
          this.m = prime.p;
          this.prime = prime;
        } else {
          assert2(m.gtn(1), "modulus must be greater than 1");
          this.m = m;
          this.prime = null;
        }
      }
      Red.prototype._verify1 = function _verify1(a) {
        assert2(a.negative === 0, "red works only with positives");
        assert2(a.red, "red works only with red numbers");
      };
      Red.prototype._verify2 = function _verify2(a, b) {
        assert2((a.negative | b.negative) === 0, "red works only with positives");
        assert2(
          a.red && a.red === b.red,
          "red works only with red numbers"
        );
      };
      Red.prototype.imod = function imod(a) {
        if (this.prime)
          return this.prime.ireduce(a)._forceRed(this);
        move(a, a.umod(this.m)._forceRed(this));
        return a;
      };
      Red.prototype.neg = function neg(a) {
        if (a.isZero()) {
          return a.clone();
        }
        return this.m.sub(a)._forceRed(this);
      };
      Red.prototype.add = function add2(a, b) {
        this._verify2(a, b);
        var res = a.add(b);
        if (res.cmp(this.m) >= 0) {
          res.isub(this.m);
        }
        return res._forceRed(this);
      };
      Red.prototype.iadd = function iadd(a, b) {
        this._verify2(a, b);
        var res = a.iadd(b);
        if (res.cmp(this.m) >= 0) {
          res.isub(this.m);
        }
        return res;
      };
      Red.prototype.sub = function sub(a, b) {
        this._verify2(a, b);
        var res = a.sub(b);
        if (res.cmpn(0) < 0) {
          res.iadd(this.m);
        }
        return res._forceRed(this);
      };
      Red.prototype.isub = function isub(a, b) {
        this._verify2(a, b);
        var res = a.isub(b);
        if (res.cmpn(0) < 0) {
          res.iadd(this.m);
        }
        return res;
      };
      Red.prototype.shl = function shl(a, num) {
        this._verify1(a);
        return this.imod(a.ushln(num));
      };
      Red.prototype.imul = function imul(a, b) {
        this._verify2(a, b);
        return this.imod(a.imul(b));
      };
      Red.prototype.mul = function mul(a, b) {
        this._verify2(a, b);
        return this.imod(a.mul(b));
      };
      Red.prototype.isqr = function isqr(a) {
        return this.imul(a, a.clone());
      };
      Red.prototype.sqr = function sqr(a) {
        return this.mul(a, a);
      };
      Red.prototype.sqrt = function sqrt(a) {
        if (a.isZero())
          return a.clone();
        var mod3 = this.m.andln(3);
        assert2(mod3 % 2 === 1);
        if (mod3 === 3) {
          var pow = this.m.add(new BN2(1)).iushrn(2);
          return this.pow(a, pow);
        }
        var q = this.m.subn(1);
        var s = 0;
        while (!q.isZero() && q.andln(1) === 0) {
          s++;
          q.iushrn(1);
        }
        assert2(!q.isZero());
        var one = new BN2(1).toRed(this);
        var nOne = one.redNeg();
        var lpow = this.m.subn(1).iushrn(1);
        var z = this.m.bitLength();
        z = new BN2(2 * z * z).toRed(this);
        while (this.pow(z, lpow).cmp(nOne) !== 0) {
          z.redIAdd(nOne);
        }
        var c = this.pow(z, q);
        var r = this.pow(a, q.addn(1).iushrn(1));
        var t = this.pow(a, q);
        var m = s;
        while (t.cmp(one) !== 0) {
          var tmp = t;
          for (var i = 0; tmp.cmp(one) !== 0; i++) {
            tmp = tmp.redSqr();
          }
          assert2(i < m);
          var b = this.pow(c, new BN2(1).iushln(m - i - 1));
          r = r.redMul(b);
          c = b.redSqr();
          t = t.redMul(c);
          m = i;
        }
        return r;
      };
      Red.prototype.invm = function invm(a) {
        var inv = a._invmp(this.m);
        if (inv.negative !== 0) {
          inv.negative = 0;
          return this.imod(inv).redNeg();
        } else {
          return this.imod(inv);
        }
      };
      Red.prototype.pow = function pow(a, num) {
        if (num.isZero())
          return new BN2(1).toRed(this);
        if (num.cmpn(1) === 0)
          return a.clone();
        var windowSize = 4;
        var wnd = new Array(1 << windowSize);
        wnd[0] = new BN2(1).toRed(this);
        wnd[1] = a;
        for (var i = 2; i < wnd.length; i++) {
          wnd[i] = this.mul(wnd[i - 1], a);
        }
        var res = wnd[0];
        var current = 0;
        var currentLen = 0;
        var start = num.bitLength() % 26;
        if (start === 0) {
          start = 26;
        }
        for (i = num.length - 1; i >= 0; i--) {
          var word = num.words[i];
          for (var j = start - 1; j >= 0; j--) {
            var bit = word >> j & 1;
            if (res !== wnd[0]) {
              res = this.sqr(res);
            }
            if (bit === 0 && current === 0) {
              currentLen = 0;
              continue;
            }
            current <<= 1;
            current |= bit;
            currentLen++;
            if (currentLen !== windowSize && (i !== 0 || j !== 0))
              continue;
            res = this.mul(res, wnd[current]);
            currentLen = 0;
            current = 0;
          }
          start = 26;
        }
        return res;
      };
      Red.prototype.convertTo = function convertTo(num) {
        var r = num.umod(this.m);
        return r === num ? r.clone() : r;
      };
      Red.prototype.convertFrom = function convertFrom(num) {
        var res = num.clone();
        res.red = null;
        return res;
      };
      BN2.mont = function mont(num) {
        return new Mont(num);
      };
      function Mont(m) {
        Red.call(this, m);
        this.shift = this.m.bitLength();
        if (this.shift % 26 !== 0) {
          this.shift += 26 - this.shift % 26;
        }
        this.r = new BN2(1).iushln(this.shift);
        this.r2 = this.imod(this.r.sqr());
        this.rinv = this.r._invmp(this.m);
        this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
        this.minv = this.minv.umod(this.r);
        this.minv = this.r.sub(this.minv);
      }
      inherits(Mont, Red);
      Mont.prototype.convertTo = function convertTo(num) {
        return this.imod(num.ushln(this.shift));
      };
      Mont.prototype.convertFrom = function convertFrom(num) {
        var r = this.imod(num.mul(this.rinv));
        r.red = null;
        return r;
      };
      Mont.prototype.imul = function imul(a, b) {
        if (a.isZero() || b.isZero()) {
          a.words[0] = 0;
          a.length = 1;
          return a;
        }
        var t = a.imul(b);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u = t.isub(c).iushrn(this.shift);
        var res = u;
        if (u.cmp(this.m) >= 0) {
          res = u.isub(this.m);
        } else if (u.cmpn(0) < 0) {
          res = u.iadd(this.m);
        }
        return res._forceRed(this);
      };
      Mont.prototype.mul = function mul(a, b) {
        if (a.isZero() || b.isZero())
          return new BN2(0)._forceRed(this);
        var t = a.mul(b);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u = t.isub(c).iushrn(this.shift);
        var res = u;
        if (u.cmp(this.m) >= 0) {
          res = u.isub(this.m);
        } else if (u.cmpn(0) < 0) {
          res = u.iadd(this.m);
        }
        return res._forceRed(this);
      };
      Mont.prototype.invm = function invm(a) {
        var res = this.imod(a._invmp(this.m).mul(this.r2));
        return res._forceRed(this);
      };
    })(typeof module2 === "undefined" || module2, exports);
  }
});

// node_modules/@polkadot/x-global/packageInfo.js
var packageInfo = { name: "@polkadot/x-global", path: import.meta && import.meta.url ? new URL(import.meta.url).pathname.substring(0, new URL(import.meta.url).pathname.lastIndexOf("/") + 1) : "auto", type: "esm", version: "12.6.2" };

// node_modules/@polkadot/x-global/index.js
function evaluateThis(fn) {
  return fn("return this");
}
var xglobal = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : evaluateThis(Function);
function extractGlobal(name, fallback) {
  return typeof xglobal[name] === "undefined" ? fallback : xglobal[name];
}
function exposeGlobal(name, fallback) {
  if (typeof xglobal[name] === "undefined") {
    xglobal[name] = fallback;
  }
}

// node_modules/@polkadot/x-textdecoder/fallback.js
var TextDecoder = class {
  __encoding;
  constructor(encoding) {
    this.__encoding = encoding;
  }
  decode(value) {
    let result = "";
    for (let i = 0, count = value.length; i < count; i++) {
      result += String.fromCharCode(value[i]);
    }
    return result;
  }
};

// node_modules/@polkadot/x-textdecoder/packageInfo.js
var packageInfo2 = { name: "@polkadot/x-textdecoder", path: import.meta && import.meta.url ? new URL(import.meta.url).pathname.substring(0, new URL(import.meta.url).pathname.lastIndexOf("/") + 1) : "auto", type: "esm", version: "12.6.2" };

// node_modules/@polkadot/x-textdecoder/browser.js
var TextDecoder2 = extractGlobal("TextDecoder", TextDecoder);

// node_modules/@polkadot/x-textencoder/fallback.js
var TextEncoder = class {
  encode(value) {
    const count = value.length;
    const u8a = new Uint8Array(count);
    for (let i = 0; i < count; i++) {
      u8a[i] = value.charCodeAt(i);
    }
    return u8a;
  }
};

// node_modules/@polkadot/x-textencoder/packageInfo.js
var packageInfo3 = { name: "@polkadot/x-textencoder", path: import.meta && import.meta.url ? new URL(import.meta.url).pathname.substring(0, new URL(import.meta.url).pathname.lastIndexOf("/") + 1) : "auto", type: "esm", version: "12.6.2" };

// node_modules/@polkadot/x-textencoder/browser.js
var TextEncoder2 = extractGlobal("TextEncoder", TextEncoder);

// node_modules/@polkadot/util/detectOther.js
var detectOther_default = [packageInfo2, packageInfo3];

// node_modules/@polkadot/util/packageInfo.js
var packageInfo4 = { name: "@polkadot/util", path: import.meta && import.meta.url ? new URL(import.meta.url).pathname.substring(0, new URL(import.meta.url).pathname.lastIndexOf("/") + 1) : "auto", type: "esm", version: "12.6.2" };

// node_modules/@polkadot/util/is/function.js
function isFunction(value) {
  return typeof value === "function";
}

// node_modules/@polkadot/util/versionDetect.js
var DEDUPE = "Either remove and explicitly install matching versions or dedupe using your package manager.\nThe following conflicting packages were found:";
var POLKADOTJS_DISABLE_ESM_CJS_WARNING_FLAG = "POLKADOTJS_DISABLE_ESM_CJS_WARNING";
function getEntry(name) {
  const _global = xglobal;
  if (!_global.__polkadotjs) {
    _global.__polkadotjs = {};
  }
  if (!_global.__polkadotjs[name]) {
    _global.__polkadotjs[name] = [];
  }
  return _global.__polkadotjs[name];
}
function formatDisplay(all, fmt) {
  let max = 0;
  for (let i = 0, count = all.length; i < count; i++) {
    max = Math.max(max, all[i].version.length);
  }
  return all.map((d) => `	${fmt(d.version.padEnd(max), d).join("	")}`).join("\n");
}
function formatInfo(version, { name }) {
  return [
    version,
    name
  ];
}
function formatVersion(version, { path, type }) {
  let extracted;
  if (path && path.length >= 5) {
    const nmIndex = path.indexOf("node_modules");
    extracted = nmIndex === -1 ? path : path.substring(nmIndex);
  } else {
    extracted = "<unknown>";
  }
  return [
    `${`${type || ""}`.padStart(3)} ${version}`,
    extracted
  ];
}
function getPath(infoPath, pathOrFn) {
  if (infoPath) {
    return infoPath;
  } else if (isFunction(pathOrFn)) {
    try {
      return pathOrFn() || "";
    } catch {
      return "";
    }
  }
  return pathOrFn || "";
}
function warn(pre, all, fmt) {
  console.warn(`${pre}
${DEDUPE}
${formatDisplay(all, fmt)}`);
}
function detectPackage({ name, path, type, version }, pathOrFn, deps = []) {
  if (!name.startsWith("@polkadot")) {
    throw new Error(`Invalid package descriptor ${name}`);
  }
  const entry = getEntry(name);
  entry.push({ path: getPath(path, pathOrFn), type, version });
  const entriesSameVersion = entry.every((e) => e.version === version);
  const esmCjsWarningDisabled = xglobal.process?.env?.[POLKADOTJS_DISABLE_ESM_CJS_WARNING_FLAG] === "1";
  const multipleEntries = entry.length !== 1;
  const disableWarnings = esmCjsWarningDisabled && entriesSameVersion;
  if (multipleEntries && !disableWarnings) {
    warn(`${name} has multiple versions, ensure that there is only one installed.`, entry, formatVersion);
  } else {
    const mismatches = deps.filter((d) => d && d.version !== version);
    if (mismatches.length) {
      warn(`${name} requires direct dependencies exactly matching version ${version}.`, mismatches, formatInfo);
    }
  }
}

// node_modules/@polkadot/util/detectPackage.js
detectPackage(packageInfo4, null, detectOther_default);

// node_modules/@polkadot/util/array/chunk.js
function arrayChunk(array, chunkSize) {
  const outputSize = Math.ceil(array.length / chunkSize);
  if (outputSize === 1) {
    return [array];
  }
  const output = Array(outputSize);
  for (let i = 0; i < outputSize; i++) {
    const offset = i * chunkSize;
    output[i] = array.slice(offset, offset + chunkSize);
  }
  return output;
}

// node_modules/@polkadot/util/array/filter.js
function arrayFilter(array, allowNulls = true) {
  return array.filter((v) => v !== void 0 && (allowNulls || v !== null));
}

// node_modules/@polkadot/util/array/flatten.js
function arrayFlatten(arrays) {
  const num = arrays.length;
  if (num === 0) {
    return [];
  } else if (num === 1) {
    return arrays[0];
  }
  let size = 0;
  for (let i2 = 0; i2 < num; i2++) {
    size += arrays[i2].length;
  }
  const output = new Array(size);
  let i = -1;
  for (let j = 0; j < num; j++) {
    const a = arrays[j];
    for (let e = 0, count = a.length; e < count; e++) {
      output[++i] = a[e];
    }
  }
  return output;
}

// node_modules/@polkadot/util/array/range.js
function arrayRange(size, startAt = 0) {
  if (size <= 0) {
    throw new Error("Expected non-zero, positive number as a range size");
  }
  const result = new Array(size);
  for (let i = 0; i < size; i++) {
    result[i] = i + startAt;
  }
  return result;
}

// node_modules/@polkadot/util/array/shuffle.js
function arrayShuffle(input) {
  const result = input.slice();
  let curr = result.length;
  if (curr === 1) {
    return result;
  }
  while (curr !== 0) {
    const rand = ~~(Math.random() * curr);
    curr--;
    [result[curr], result[rand]] = [result[rand], result[curr]];
  }
  return result;
}

// node_modules/@polkadot/util/array/unzip.js
function arrayUnzip(entries) {
  const count = entries.length;
  const keys = new Array(count);
  const values = new Array(count);
  for (let i = 0; i < count; i++) {
    [keys[i], values[i]] = entries[i];
  }
  return [keys, values];
}

// node_modules/@polkadot/util/array/zip.js
function arrayZip(keys, values) {
  const count = keys.length;
  const result = new Array(count);
  for (let i = 0; i < count; i++) {
    result[i] = [keys[i], values[i]];
  }
  return result;
}

// node_modules/@polkadot/util/assert.js
function assert(condition, message) {
  if (!condition) {
    throw new Error(isFunction(message) ? message() : message);
  }
}
function assertReturn(value, message) {
  assert(value !== void 0 && value !== null, message);
  return value;
}
function assertUnreachable(x) {
  throw new Error(`This codepath should be unreachable. Unhandled input: ${x}`);
}

// node_modules/@polkadot/util/bi/helpers.js
function createCmp(cmp) {
  return (...items) => {
    const count = items.length;
    if (count === 0) {
      throw new Error("Must provide one or more arguments");
    }
    let result = items[0];
    for (let i = 1; i < count; i++) {
      if (cmp(items[i], result)) {
        result = items[i];
      }
    }
    return result;
  };
}

// node_modules/@polkadot/util/bi/min.js
var nMax = createCmp((a, b) => a > b);
var nMin = createCmp((a, b) => a < b);

// node_modules/@polkadot/x-bigint/packageInfo.js
var packageInfo5 = { name: "@polkadot/x-bigint", path: import.meta && import.meta.url ? new URL(import.meta.url).pathname.substring(0, new URL(import.meta.url).pathname.lastIndexOf("/") + 1) : "auto", type: "esm", version: "12.6.2" };

// node_modules/@polkadot/x-bigint/index.js
function invalidFallback() {
  return Number.NaN;
}
var BigInt = extractGlobal("BigInt", invalidFallback);

// node_modules/@polkadot/util/bi/consts.js
var _0n = BigInt(0);
var _1n = BigInt(1);
var _2n = BigInt(2);
var _3n = BigInt(3);
var _4n = BigInt(4);
var _5n = BigInt(5);
var _6n = BigInt(6);
var _7n = BigInt(7);
var _8n = BigInt(8);
var _9n = BigInt(9);
var _10n = BigInt(10);
var _100n = BigInt(100);
var _1000n = BigInt(1e3);
var _1Mn = BigInt(1e6);
var _1Bn = BigInt(1e9);
var _1Qn = _1Bn * _1Bn;
var _2pow53n = BigInt(Number.MAX_SAFE_INTEGER);
var _sqrt2pow53n = BigInt(94906265);

// node_modules/@polkadot/util/u8a/toBigInt.js
var U8_MAX = BigInt(256);
var U16_MAX = BigInt(256 * 256);
var U64_MAX = BigInt("0x10000000000000000");
function u8aToBigInt(value, { isLe = true, isNegative = false } = {}) {
  if (!isLe) {
    value = value.slice().reverse();
  }
  const count = value.length;
  if (isNegative && count && value[count - 1] & 128) {
    switch (count) {
      case 0:
        return BigInt(0);
      case 1:
        return BigInt((value[0] ^ 255) * -1 - 1);
      case 2:
        return BigInt((value[0] + (value[1] << 8) ^ 65535) * -1 - 1);
      case 4:
        return BigInt((value[0] + (value[1] << 8) + (value[2] << 16) + value[3] * 16777216 ^ 4294967295) * -1 - 1);
    }
    const dvI2 = new DataView(value.buffer, value.byteOffset);
    if (count === 8) {
      return dvI2.getBigInt64(0, true);
    }
    let result = BigInt(0);
    const mod = count % 2;
    for (let i = count - 2; i >= mod; i -= 2) {
      result = result * U16_MAX + BigInt(dvI2.getUint16(i, true) ^ 65535);
    }
    if (mod) {
      result = result * U8_MAX + BigInt(value[0] ^ 255);
    }
    return result * -_1n - _1n;
  }
  switch (count) {
    case 0:
      return BigInt(0);
    case 1:
      return BigInt(value[0]);
    case 2:
      return BigInt(value[0] + (value[1] << 8));
    case 4:
      return BigInt(value[0] + (value[1] << 8) + (value[2] << 16) + value[3] * 16777216);
  }
  const dvI = new DataView(value.buffer, value.byteOffset);
  switch (count) {
    case 8:
      return dvI.getBigUint64(0, true);
    case 16:
      return dvI.getBigUint64(8, true) * U64_MAX + dvI.getBigUint64(0, true);
    default: {
      let result = BigInt(0);
      const mod = count % 2;
      for (let i = count - 2; i >= mod; i -= 2) {
        result = result * U16_MAX + BigInt(dvI.getUint16(i, true));
      }
      if (mod) {
        result = result * U8_MAX + BigInt(value[0]);
      }
      return result;
    }
  }
}

// node_modules/@polkadot/util/hex/toU8a.js
var CHR = "0123456789abcdef";
var U8 = new Uint8Array(256);
var U16 = new Uint8Array(256 * 256);
for (let i = 0, count = CHR.length; i < count; i++) {
  U8[CHR[i].charCodeAt(0) | 0] = i | 0;
  if (i > 9) {
    U8[CHR[i].toUpperCase().charCodeAt(0) | 0] = i | 0;
  }
}
for (let i = 0; i < 256; i++) {
  const s = i << 8;
  for (let j = 0; j < 256; j++) {
    U16[s | j] = U8[i] << 4 | U8[j];
  }
}
function hexToU8a(value, bitLength = -1) {
  if (!value) {
    return new Uint8Array();
  }
  let s = value.startsWith("0x") ? 2 : 0;
  const decLength = Math.ceil((value.length - s) / 2);
  const endLength = Math.ceil(bitLength === -1 ? decLength : bitLength / 8);
  const result = new Uint8Array(endLength);
  const offset = endLength > decLength ? endLength - decLength : 0;
  for (let i = offset; i < endLength; i++, s += 2) {
    result[i] = U16[value.charCodeAt(s) << 8 | value.charCodeAt(s + 1)];
  }
  return result;
}

// node_modules/@polkadot/util/hex/toBigInt.js
function hexToBigInt(value, { isLe = false, isNegative = false } = {}) {
  return !value || value === "0x" ? BigInt(0) : u8aToBigInt(hexToU8a(value), { isLe, isNegative });
}

// node_modules/@polkadot/util/bn/bn.js
var import_bn = __toESM(require_bn(), 1);

// node_modules/@polkadot/util/is/bn.js
function isBn(value) {
  return import_bn.default.isBN(value);
}

// node_modules/@polkadot/util/is/hex.js
var REGEX_HEX_PREFIXED = /^0x[\da-fA-F]+$/;
var REGEX_HEX_NOPREFIX = /^[\da-fA-F]+$/;
function isHex(value, bitLength = -1, ignoreLength) {
  return typeof value === "string" && (value === "0x" || REGEX_HEX_PREFIXED.test(value)) && (bitLength === -1 ? ignoreLength || value.length % 2 === 0 : value.length === 2 + Math.ceil(bitLength / 4));
}

// node_modules/@polkadot/util/is/object.js
function isObject(value) {
  return !!value && typeof value === "object";
}

// node_modules/@polkadot/util/is/helpers.js
function isOn(...fns) {
  return (value) => (isObject(value) || isFunction(value)) && fns.every((f) => isFunction(value[f]));
}
function isOnFunction(...fns) {
  return (value) => isFunction(value) && fns.every((f) => isFunction(value[f]));
}
function isOnObject(...fns) {
  return (value) => isObject(value) && fns.every((f) => isFunction(value[f]));
}

// node_modules/@polkadot/util/is/toBigInt.js
var isToBigInt = isOn("toBigInt");

// node_modules/@polkadot/util/is/toBn.js
var isToBn = isOn("toBn");

// node_modules/@polkadot/util/bi/toBigInt.js
function nToBigInt(value) {
  return typeof value === "bigint" ? value : !value ? BigInt(0) : isHex(value) ? hexToBigInt(value.toString()) : isBn(value) ? BigInt(value.toString()) : isToBigInt(value) ? value.toBigInt() : isToBn(value) ? BigInt(value.toBn().toString()) : BigInt(value);
}

// node_modules/@polkadot/util/bi/sqrt.js
function nSqrt(value) {
  const n = nToBigInt(value);
  if (n < _0n) {
    throw new Error("square root of negative numbers is not supported");
  }
  if (n <= _2pow53n) {
    return BigInt(~~Math.sqrt(Number(n)));
  }
  let x0 = _sqrt2pow53n;
  while (true) {
    const x1 = n / x0 + x0 >> _1n;
    if (x0 === x1 || x0 === x1 - _1n) {
      return x0;
    }
    x0 = x1;
  }
}

// node_modules/@polkadot/util/has.js
var hasBigInt = typeof BigInt === "function" && typeof BigInt.asIntN === "function";
var hasCjs = typeof __require === "function" && typeof module !== "undefined";
var hasDirname = typeof __dirname !== "undefined";
var hasEsm = !hasCjs;
var hasWasm = typeof WebAssembly !== "undefined";
var hasBuffer = typeof xglobal.Buffer === "function" && typeof xglobal.Buffer.isBuffer === "function";
var hasProcess = typeof xglobal.process === "object";

// node_modules/@polkadot/util/is/buffer.js
function isBuffer(value) {
  return hasBuffer && !!value && isFunction(value.readDoubleLE) && xglobal.Buffer.isBuffer(value);
}

// node_modules/@polkadot/util/is/u8a.js
function isU8a(value) {
  return (value && value.constructor) === Uint8Array || value instanceof Uint8Array;
}

// node_modules/@polkadot/util/string/toU8a.js
var encoder = new TextEncoder2();
function stringToU8a(value) {
  return value ? encoder.encode(value.toString()) : new Uint8Array();
}

// node_modules/@polkadot/util/u8a/toU8a.js
function u8aToU8a(value) {
  return isU8a(value) ? isBuffer(value) ? new Uint8Array(value) : value : isHex(value) ? hexToU8a(value) : Array.isArray(value) ? new Uint8Array(value) : stringToU8a(value);
}

// node_modules/@polkadot/util/u8a/cmp.js
function u8aCmp(a, b) {
  const u8aa = u8aToU8a(a);
  const u8ab = u8aToU8a(b);
  let i = 0;
  while (true) {
    const overA = i >= u8aa.length;
    const overB = i >= u8ab.length;
    if (overA && overB) {
      return 0;
    } else if (overA) {
      return -1;
    } else if (overB) {
      return 1;
    } else if (u8aa[i] !== u8ab[i]) {
      return u8aa[i] > u8ab[i] ? 1 : -1;
    }
    i++;
  }
}

// node_modules/@polkadot/util/u8a/concat.js
function u8aConcat(...list) {
  const count = list.length;
  const u8as = new Array(count);
  let length = 0;
  for (let i = 0; i < count; i++) {
    u8as[i] = u8aToU8a(list[i]);
    length += u8as[i].length;
  }
  return u8aConcatStrict(u8as, length);
}
function u8aConcatStrict(u8as, length = 0) {
  const count = u8as.length;
  let offset = 0;
  if (!length) {
    for (let i = 0; i < count; i++) {
      length += u8as[i].length;
    }
  }
  const result = new Uint8Array(length);
  for (let i = 0; i < count; i++) {
    result.set(u8as[i], offset);
    offset += u8as[i].length;
  }
  return result;
}

// node_modules/@polkadot/util/u8a/empty.js
function u8aEmpty(value) {
  const len = value.length | 0;
  for (let i = 0; i < len; i++) {
    if (value[i] | 0) {
      return false;
    }
  }
  return true;
}

// node_modules/@polkadot/util/u8a/eq.js
function u8aEq(a, b) {
  const u8aa = u8aToU8a(a);
  const u8ab = u8aToU8a(b);
  if (u8aa.length === u8ab.length) {
    const dvA = new DataView(u8aa.buffer, u8aa.byteOffset);
    const dvB = new DataView(u8ab.buffer, u8ab.byteOffset);
    const mod = u8aa.length % 4 | 0;
    const length = u8aa.length - mod | 0;
    for (let i = 0; i < length; i += 4) {
      if (dvA.getUint32(i) !== dvB.getUint32(i)) {
        return false;
      }
    }
    for (let i = length, count = u8aa.length; i < count; i++) {
      if (u8aa[i] !== u8ab[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

// node_modules/@polkadot/util/u8a/fixLength.js
function u8aFixLength(value, bitLength = -1, atStart = false) {
  const byteLength = Math.ceil(bitLength / 8);
  if (bitLength === -1 || value.length === byteLength) {
    return value;
  } else if (value.length > byteLength) {
    return value.subarray(0, byteLength);
  }
  const result = new Uint8Array(byteLength);
  result.set(value, atStart ? 0 : byteLength - value.length);
  return result;
}

// node_modules/@polkadot/util/u8a/sorted.js
function u8aSorted(u8as) {
  return u8as.sort(u8aCmp);
}

// node_modules/@polkadot/util/u8a/toBn.js
function u8aToBn(value, { isLe = true, isNegative = false } = {}) {
  if (!isLe) {
    value = value.slice().reverse();
  }
  const count = value.length;
  if (isNegative && count && value[count - 1] & 128) {
    switch (count) {
      case 0:
        return new import_bn.default(0);
      case 1:
        return new import_bn.default((value[0] ^ 255) * -1 - 1);
      case 2:
        return new import_bn.default((value[0] + (value[1] << 8) ^ 65535) * -1 - 1);
      case 3:
        return new import_bn.default((value[0] + (value[1] << 8) + (value[2] << 16) ^ 16777215) * -1 - 1);
      case 4:
        return new import_bn.default((value[0] + (value[1] << 8) + (value[2] << 16) + value[3] * 16777216 ^ 4294967295) * -1 - 1);
      case 5:
        return new import_bn.default(((value[0] + (value[1] << 8) + (value[2] << 16) + value[3] * 16777216 ^ 4294967295) + (value[4] ^ 255) * 4294967296) * -1 - 1);
      case 6:
        return new import_bn.default(((value[0] + (value[1] << 8) + (value[2] << 16) + value[3] * 16777216 ^ 4294967295) + (value[4] + (value[5] << 8) ^ 65535) * 4294967296) * -1 - 1);
      default:
        return new import_bn.default(value, "le").fromTwos(count * 8);
    }
  }
  switch (count) {
    case 0:
      return new import_bn.default(0);
    case 1:
      return new import_bn.default(value[0]);
    case 2:
      return new import_bn.default(value[0] + (value[1] << 8));
    case 3:
      return new import_bn.default(value[0] + (value[1] << 8) + (value[2] << 16));
    case 4:
      return new import_bn.default(value[0] + (value[1] << 8) + (value[2] << 16) + value[3] * 16777216);
    case 5:
      return new import_bn.default(value[0] + (value[1] << 8) + (value[2] << 16) + (value[3] + (value[4] << 8)) * 16777216);
    case 6:
      return new import_bn.default(value[0] + (value[1] << 8) + (value[2] << 16) + (value[3] + (value[4] << 8) + (value[5] << 16)) * 16777216);
    default:
      return new import_bn.default(value, "le");
  }
}

// node_modules/@polkadot/util/u8a/toBuffer.js
function u8aToBuffer(value) {
  return hasBuffer ? xglobal.Buffer.from(value || []) : new Uint8Array(value || []);
}

// node_modules/@polkadot/util/u8a/toFloat.js
function u8aToFloat(value, { bitLength = 32, isLe = true } = {}) {
  if (bitLength !== 32 && bitLength !== 64) {
    throw new Error("Invalid bitLength provided, expected 32 or 64");
  } else if (value.length < bitLength / 8) {
    throw new Error(`Invalid input buffer provided, expected at least ${bitLength / 8} bytes, found ${value.length}`);
  }
  const dv = new DataView(value.buffer, value.byteOffset);
  return bitLength === 32 ? dv.getFloat32(0, isLe) : dv.getFloat64(0, isLe);
}

// node_modules/@polkadot/util/u8a/toHex.js
var U82 = new Array(256);
var U162 = new Array(256 * 256);
for (let n = 0; n < 256; n++) {
  U82[n] = n.toString(16).padStart(2, "0");
}
for (let i = 0; i < 256; i++) {
  const s = i << 8;
  for (let j = 0; j < 256; j++) {
    U162[s | j] = U82[i] + U82[j];
  }
}
function hex(value, result) {
  const mod = value.length % 2 | 0;
  const length = value.length - mod | 0;
  for (let i = 0; i < length; i += 2) {
    result += U162[value[i] << 8 | value[i + 1]];
  }
  if (mod) {
    result += U82[value[length] | 0];
  }
  return result;
}
function u8aToHex(value, bitLength = -1, isPrefixed = true) {
  const empty = isPrefixed ? "0x" : "";
  if (!value?.length) {
    return empty;
  } else if (bitLength > 0) {
    const length = Math.ceil(bitLength / 8);
    if (value.length > length) {
      return `${hex(value.subarray(0, length / 2), empty)}…${hex(value.subarray(value.length - length / 2), "")}`;
    }
  }
  return hex(value, empty);
}

// node_modules/@polkadot/util/u8a/toNumber.js
function u8aToNumber(value, { isLe = true, isNegative = false } = {}) {
  if (!isLe) {
    value = value.slice().reverse();
  }
  const count = value.length;
  if (isNegative && count && value[count - 1] & 128) {
    switch (count) {
      case 0:
        return 0;
      case 1:
        return (value[0] ^ 255) * -1 - 1;
      case 2:
        return (value[0] + (value[1] << 8) ^ 65535) * -1 - 1;
      case 3:
        return (value[0] + (value[1] << 8) + (value[2] << 16) ^ 16777215) * -1 - 1;
      case 4:
        return (value[0] + (value[1] << 8) + (value[2] << 16) + value[3] * 16777216 ^ 4294967295) * -1 - 1;
      case 5:
        return ((value[0] + (value[1] << 8) + (value[2] << 16) + value[3] * 16777216 ^ 4294967295) + (value[4] ^ 255) * 4294967296) * -1 - 1;
      case 6:
        return ((value[0] + (value[1] << 8) + (value[2] << 16) + value[3] * 16777216 ^ 4294967295) + (value[4] + (value[5] << 8) ^ 65535) * 4294967296) * -1 - 1;
      default:
        throw new Error("Value more than 48-bits cannot be reliably converted");
    }
  }
  switch (count) {
    case 0:
      return 0;
    case 1:
      return value[0];
    case 2:
      return value[0] + (value[1] << 8);
    case 3:
      return value[0] + (value[1] << 8) + (value[2] << 16);
    case 4:
      return value[0] + (value[1] << 8) + (value[2] << 16) + value[3] * 16777216;
    case 5:
      return value[0] + (value[1] << 8) + (value[2] << 16) + (value[3] + (value[4] << 8)) * 16777216;
    case 6:
      return value[0] + (value[1] << 8) + (value[2] << 16) + (value[3] + (value[4] << 8) + (value[5] << 16)) * 16777216;
    default:
      throw new Error("Value more than 48-bits cannot be reliably converted");
  }
}

// node_modules/@polkadot/util/u8a/toString.js
var decoder = new TextDecoder2("utf-8");
function u8aToString(value) {
  return value ? decoder.decode(value) : "";
}

// node_modules/@polkadot/util/u8a/wrap.js
var U8A_WRAP_ETHEREUM = u8aToU8a("Ethereum Signed Message:\n");
var U8A_WRAP_PREFIX = u8aToU8a("<Bytes>");
var U8A_WRAP_POSTFIX = u8aToU8a("</Bytes>");
var WRAP_LEN = U8A_WRAP_PREFIX.length + U8A_WRAP_POSTFIX.length;
function u8aIsWrapped(u8a, withEthereum) {
  return u8a.length >= WRAP_LEN && u8aEq(u8a.subarray(0, U8A_WRAP_PREFIX.length), U8A_WRAP_PREFIX) && u8aEq(u8a.slice(-U8A_WRAP_POSTFIX.length), U8A_WRAP_POSTFIX) || withEthereum && u8a.length >= U8A_WRAP_ETHEREUM.length && u8aEq(u8a.subarray(0, U8A_WRAP_ETHEREUM.length), U8A_WRAP_ETHEREUM);
}
function u8aUnwrapBytes(bytes) {
  const u8a = u8aToU8a(bytes);
  return u8aIsWrapped(u8a, false) ? u8a.subarray(U8A_WRAP_PREFIX.length, u8a.length - U8A_WRAP_POSTFIX.length) : u8a;
}
function u8aWrapBytes(bytes) {
  const u8a = u8aToU8a(bytes);
  return u8aIsWrapped(u8a, true) ? u8a : u8aConcatStrict([U8A_WRAP_PREFIX, u8a, U8A_WRAP_POSTFIX]);
}

// node_modules/@polkadot/util/bi/toU8a.js
var DIV = BigInt(256);
var NEG_MASK = BigInt(255);
function toU8a(value, isLe, isNegative) {
  const arr = [];
  const withSigned = isNegative && value < _0n;
  if (withSigned) {
    value = (value + _1n) * -_1n;
  }
  while (value !== _0n) {
    const mod = value % DIV;
    const val = Number(withSigned ? mod ^ NEG_MASK : mod);
    if (isLe) {
      arr.push(val);
    } else {
      arr.unshift(val);
    }
    value = (value - mod) / DIV;
  }
  return Uint8Array.from(arr);
}
function nToU8a(value, { bitLength = -1, isLe = true, isNegative = false } = {}) {
  const valueBi = nToBigInt(value);
  if (valueBi === _0n) {
    return bitLength === -1 ? new Uint8Array(1) : new Uint8Array(Math.ceil((bitLength || 0) / 8));
  }
  const u8a = toU8a(valueBi, isLe, isNegative);
  if (bitLength === -1) {
    return u8a;
  }
  const byteLength = Math.ceil((bitLength || 0) / 8);
  const output = new Uint8Array(byteLength);
  if (isNegative) {
    output.fill(255);
  }
  output.set(u8a, isLe ? 0 : byteLength - u8a.length);
  return output;
}

// node_modules/@polkadot/util/bi/toHex.js
function nToHex(value, { bitLength = -1, isLe = false, isNegative = false } = {}) {
  return u8aToHex(nToU8a(value || 0, { bitLength, isLe, isNegative }));
}

// node_modules/@polkadot/util/hex/stripPrefix.js
function hexStripPrefix(value) {
  if (!value || value === "0x") {
    return "";
  } else if (REGEX_HEX_PREFIXED.test(value)) {
    return value.substring(2);
  } else if (REGEX_HEX_NOPREFIX.test(value)) {
    return value;
  }
  throw new Error(`Expected hex value to convert, found '${value}'`);
}

// node_modules/@polkadot/util/hex/toBn.js
function hexToBn(value, { isLe = false, isNegative = false } = {}) {
  if (!value || value === "0x") {
    return new import_bn.default(0);
  }
  const stripped = hexStripPrefix(value);
  const bn = new import_bn.default(stripped, 16, isLe ? "le" : "be");
  return isNegative ? bn.fromTwos(stripped.length * 4) : bn;
}

// node_modules/@polkadot/util/bn/min.js
var bnMax = createCmp((a, b) => a.gt(b));
var bnMin = createCmp((a, b) => a.lt(b));

// node_modules/@polkadot/util/bn/consts.js
var BN_ZERO = new import_bn.default(0);
var BN_ONE = new import_bn.default(1);
var BN_TWO = new import_bn.default(2);
var BN_THREE = new import_bn.default(3);
var BN_FOUR = new import_bn.default(4);
var BN_FIVE = new import_bn.default(5);
var BN_SIX = new import_bn.default(6);
var BN_SEVEN = new import_bn.default(7);
var BN_EIGHT = new import_bn.default(8);
var BN_NINE = new import_bn.default(9);
var BN_TEN = new import_bn.default(10);
var BN_HUNDRED = new import_bn.default(100);
var BN_THOUSAND = new import_bn.default(1e3);
var BN_MILLION = new import_bn.default(1e6);
var BN_BILLION = new import_bn.default(1e9);
var BN_QUINTILL = BN_BILLION.mul(BN_BILLION);
var BN_MAX_INTEGER = new import_bn.default(Number.MAX_SAFE_INTEGER);
var BN_SQRT_MAX_INTEGER = new import_bn.default(94906265);

// node_modules/@polkadot/util/is/bigInt.js
function isBigInt(value) {
  return typeof value === "bigint";
}

// node_modules/@polkadot/util/bn/toBn.js
function bnToBn(value) {
  return value ? import_bn.default.isBN(value) ? value : isHex(value) ? hexToBn(value.toString()) : isBigInt(value) ? new import_bn.default(value.toString()) : isToBn(value) ? value.toBn() : isToBigInt(value) ? new import_bn.default(value.toBigInt().toString()) : new import_bn.default(value) : new import_bn.default(0);
}

// node_modules/@polkadot/util/bn/sqrt.js
function bnSqrt(value) {
  const n = bnToBn(value);
  if (n.isNeg()) {
    throw new Error("square root of negative numbers is not supported");
  }
  if (n.lte(BN_MAX_INTEGER)) {
    return new import_bn.default(~~Math.sqrt(n.toNumber()));
  }
  let x0 = BN_SQRT_MAX_INTEGER.clone();
  while (true) {
    const x1 = n.div(x0).iadd(x0).ishrn(1);
    if (x0.eq(x1) || x0.eq(x1.sub(BN_ONE))) {
      return x0;
    }
    x0 = x1;
  }
}

// node_modules/@polkadot/util/bn/toU8a.js
var DEFAULT_OPTS = { bitLength: -1, isLe: true, isNegative: false };
function bnToU8a(value, { bitLength = -1, isLe = true, isNegative = false } = DEFAULT_OPTS) {
  const valueBn = bnToBn(value);
  const byteLength = bitLength === -1 ? Math.ceil(valueBn.bitLength() / 8) : Math.ceil((bitLength || 0) / 8);
  if (!value) {
    return bitLength === -1 ? new Uint8Array(1) : new Uint8Array(byteLength);
  }
  const output = new Uint8Array(byteLength);
  const bn = isNegative ? valueBn.toTwos(byteLength * 8) : valueBn;
  output.set(bn.toArray(isLe ? "le" : "be", byteLength), 0);
  return output;
}

// node_modules/@polkadot/util/bn/toHex.js
function bnToHex(value, { bitLength = -1, isLe = false, isNegative = false } = {}) {
  return u8aToHex(bnToU8a(value, { bitLength, isLe, isNegative }));
}

// node_modules/@polkadot/util/buffer/toU8a.js
function bufferToU8a(buffer) {
  return new Uint8Array(buffer || []);
}

// node_modules/@polkadot/util/compact/toU8a.js
var MAX_U8 = BN_TWO.pow(new import_bn.default(8 - 2)).isub(BN_ONE);
var MAX_U16 = BN_TWO.pow(new import_bn.default(16 - 2)).isub(BN_ONE);
var MAX_U32 = BN_TWO.pow(new import_bn.default(32 - 2)).isub(BN_ONE);
var BL_16 = { bitLength: 16 };
var BL_32 = { bitLength: 32 };
function compactToU8a(value) {
  const bn = bnToBn(value);
  if (bn.lte(MAX_U8)) {
    return new Uint8Array([bn.toNumber() << 2]);
  } else if (bn.lte(MAX_U16)) {
    return bnToU8a(bn.shln(2).iadd(BN_ONE), BL_16);
  } else if (bn.lte(MAX_U32)) {
    return bnToU8a(bn.shln(2).iadd(BN_TWO), BL_32);
  }
  const u8a = bnToU8a(bn);
  let length = u8a.length;
  while (u8a[length - 1] === 0) {
    length--;
  }
  if (length < 4) {
    throw new Error("Invalid length, previous checks match anything less than 2^30");
  }
  return u8aConcatStrict([
    // subtract 4 as minimum (also catered for in decoding)
    new Uint8Array([(length - 4 << 2) + 3]),
    u8a.subarray(0, length)
  ]);
}

// node_modules/@polkadot/util/compact/addLength.js
function compactAddLength(input) {
  return u8aConcatStrict([
    compactToU8a(input.length),
    input
  ]);
}

// node_modules/@polkadot/util/compact/fromU8a.js
function compactFromU8a(input) {
  const u8a = u8aToU8a(input);
  switch (u8a[0] & 3) {
    case 0:
      return [1, new import_bn.default(u8a[0] >>> 2)];
    case 1:
      return [2, new import_bn.default(u8a[0] + (u8a[1] << 8) >>> 2)];
    case 2:
      return [4, new import_bn.default(u8a[0] + (u8a[1] << 8) + (u8a[2] << 16) + u8a[3] * 16777216 >>> 2)];
    default: {
      const offset = (u8a[0] >>> 2) + 5;
      switch (offset) {
        case 5:
          return [5, new import_bn.default(u8a[1] + (u8a[2] << 8) + (u8a[3] << 16) + u8a[4] * 16777216)];
        case 6:
          return [6, new import_bn.default(u8a[1] + (u8a[2] << 8) + (u8a[3] << 16) + (u8a[4] + (u8a[5] << 8)) * 16777216)];
        case 7:
          return [7, new import_bn.default(u8a[1] + (u8a[2] << 8) + (u8a[3] << 16) + (u8a[4] + (u8a[5] << 8) + (u8a[6] << 16)) * 16777216)];
        default:
          return [offset, u8aToBn(u8a.subarray(1, offset))];
      }
    }
  }
}
function compactFromU8aLim(u8a) {
  switch (u8a[0] & 3) {
    case 0:
      return [1, u8a[0] >>> 2];
    case 1:
      return [2, u8a[0] + (u8a[1] << 8) >>> 2];
    case 2:
      return [4, u8a[0] + (u8a[1] << 8) + (u8a[2] << 16) + u8a[3] * 16777216 >>> 2];
    default: {
      switch ((u8a[0] >>> 2) + 5) {
        case 5:
          return [5, u8a[1] + (u8a[2] << 8) + (u8a[3] << 16) + u8a[4] * 16777216];
        case 6:
          return [6, u8a[1] + (u8a[2] << 8) + (u8a[3] << 16) + (u8a[4] + (u8a[5] << 8)) * 16777216];
        case 7:
          return [7, u8a[1] + (u8a[2] << 8) + (u8a[3] << 16) + (u8a[4] + (u8a[5] << 8) + (u8a[6] << 16)) * 16777216];
        default:
          throw new Error("Compact input is > Number.MAX_SAFE_INTEGER");
      }
    }
  }
}

// node_modules/@polkadot/util/compact/stripLength.js
function compactStripLength(input) {
  const [offset, length] = compactFromU8a(input);
  const total = offset + length.toNumber();
  return [
    total,
    input.subarray(offset, total)
  ];
}

// node_modules/@polkadot/util/extractTime.js
var MIN_MS = 60 * 1e3;
var HR_MS = MIN_MS * 60;
var DAY_MS = HR_MS * 24;
var ZERO = { days: 0, hours: 0, milliseconds: 0, minutes: 0, seconds: 0 };
function add(a, b) {
  return {
    days: (a.days || 0) + b.days,
    hours: (a.hours || 0) + b.hours,
    milliseconds: (a.milliseconds || 0) + b.milliseconds,
    minutes: (a.minutes || 0) + b.minutes,
    seconds: (a.seconds || 0) + b.seconds
  };
}
function extractSecs(ms) {
  const s = ms / 1e3;
  if (s < 60) {
    const seconds = ~~s;
    return add({ seconds }, extractTime(ms - seconds * 1e3));
  }
  const m = s / 60;
  if (m < 60) {
    const minutes = ~~m;
    return add({ minutes }, extractTime(ms - minutes * MIN_MS));
  }
  const h = m / 60;
  if (h < 24) {
    const hours = ~~h;
    return add({ hours }, extractTime(ms - hours * HR_MS));
  }
  const days = ~~(h / 24);
  return add({ days }, extractTime(ms - days * DAY_MS));
}
function extractTime(milliseconds) {
  return !milliseconds ? ZERO : milliseconds < 1e3 ? add({ milliseconds }, ZERO) : extractSecs(milliseconds);
}

// node_modules/@polkadot/util/float/toU8a.js
function floatToU8a(value = 0, { bitLength = 32, isLe = true } = {}) {
  if (bitLength !== 32 && bitLength !== 64) {
    throw new Error("Invalid bitLength provided, expected 32 or 64");
  }
  const result = new Uint8Array(bitLength / 8);
  const dv = new DataView(result.buffer, result.byteOffset);
  if (bitLength === 32) {
    dv.setFloat32(0, Number(value), isLe);
  } else {
    dv.setFloat64(0, Number(value), isLe);
  }
  return result;
}

// node_modules/@polkadot/util/is/boolean.js
function isBoolean(value) {
  return typeof value === "boolean";
}

// node_modules/@polkadot/util/format/formatDecimal.js
var NUMBER_REGEX = new RegExp("(\\d+?)(?=(\\d{3})+(?!\\d)|$)", "g");
function formatDecimal(value, separator = ",") {
  const isNegative = value[0].startsWith("-");
  const matched = isNegative ? value.substring(1).match(NUMBER_REGEX) : value.match(NUMBER_REGEX);
  return matched ? `${isNegative ? "-" : ""}${matched.join(separator)}` : value;
}

// node_modules/@polkadot/util/format/getSeparator.js
function getSeparator(locale) {
  return {
    decimal: 0.1.toLocaleString(locale).substring(1, 2),
    thousand: 1e3.toLocaleString(locale).substring(1, 2)
  };
}

// node_modules/@polkadot/util/format/si.js
var SI_MID = 8;
var SI = [
  { power: -24, text: "yocto", value: "y" },
  { power: -21, text: "zepto", value: "z" },
  { power: -18, text: "atto", value: "a" },
  { power: -15, text: "femto", value: "f" },
  { power: -12, text: "pico", value: "p" },
  { power: -9, text: "nano", value: "n" },
  { power: -6, text: "micro", value: "µ" },
  { power: -3, text: "milli", value: "m" },
  { power: 0, text: "Unit", value: "-" },
  // position 8
  { power: 3, text: "Kilo", value: "k" },
  { power: 6, text: "Mill", value: "M" },
  // Mega, M
  { power: 9, text: "Bill", value: "B" },
  // Giga, G
  { power: 12, text: "Tril", value: "T" },
  // Tera, T
  { power: 15, text: "Peta", value: "P" },
  { power: 18, text: "Exa", value: "E" },
  { power: 21, text: "Zeta", value: "Z" },
  { power: 24, text: "Yotta", value: "Y" }
];
function findSi(type) {
  for (let i = 0, count = SI.length; i < count; i++) {
    if (SI[i].value === type) {
      return SI[i];
    }
  }
  return SI[SI_MID];
}
function calcSi(text, decimals, forceUnit) {
  if (forceUnit) {
    return findSi(forceUnit);
  }
  const siDefIndex = SI_MID - 1 + Math.ceil((text.length - decimals) / 3);
  return SI[siDefIndex] || SI[siDefIndex < 0 ? 0 : SI.length - 1];
}

// node_modules/@polkadot/util/format/formatBalance.js
var DEFAULT_DECIMALS = 0;
var DEFAULT_UNIT = SI[SI_MID].text;
var defaultDecimals = DEFAULT_DECIMALS;
var defaultUnit = DEFAULT_UNIT;
function _formatBalance(input, { decimals = defaultDecimals, forceUnit, locale = "en", withAll = false, withSi = true, withSiFull = false, withUnit = true, withZero = true } = {}) {
  let text = bnToBn(input).toString();
  if (text.length === 0 || text === "0") {
    return "0";
  }
  let sign = "";
  if (text[0].startsWith("-")) {
    sign = "-";
    text = text.substring(1);
  }
  const si = calcSi(text, decimals, forceUnit);
  const mid = text.length - (decimals + si.power);
  const pre = mid <= 0 ? "0" : text.substring(0, mid);
  let post = text.padStart(mid < 0 ? decimals : 1, "0").substring(mid < 0 ? 0 : mid).padEnd(withAll ? Math.max(decimals, 4) : 4, "0").substring(0, withAll ? Math.max(4, decimals + si.power) : 4);
  if (!withZero) {
    let end = post.length - 1;
    do {
      if (post[end] === "0") {
        end--;
      }
    } while (post[end] === "0");
    post = post.substring(0, end + 1);
  }
  const unit = isBoolean(withUnit) ? SI[SI_MID].text : withUnit;
  const units = withSi || withSiFull ? si.value === "-" ? withUnit ? ` ${unit}` : "" : ` ${withSiFull ? `${si.text}${withUnit ? " " : ""}` : si.value}${withUnit ? unit : ""}` : "";
  const { decimal, thousand } = getSeparator(locale);
  return `${sign}${formatDecimal(pre, thousand)}${post && `${decimal}${post}`}${units}`;
}
var formatBalance = _formatBalance;
formatBalance.calcSi = (text, decimals = defaultDecimals) => calcSi(text, decimals);
formatBalance.findSi = findSi;
formatBalance.getDefaults = () => {
  return {
    decimals: defaultDecimals,
    unit: defaultUnit
  };
};
formatBalance.getOptions = (decimals = defaultDecimals) => {
  return SI.filter(({ power }) => power < 0 ? decimals + power >= 0 : true);
};
formatBalance.setDefaults = ({ decimals, unit }) => {
  defaultDecimals = (Array.isArray(decimals) ? decimals[0] : decimals) ?? defaultDecimals;
  defaultUnit = (Array.isArray(unit) ? unit[0] : unit) ?? defaultUnit;
  SI[SI_MID].text = defaultUnit;
};

// node_modules/@polkadot/util/format/formatDate.js
function zeroPad(value) {
  return value.toString().padStart(2, "0");
}
function formatDate(date) {
  const year = date.getFullYear().toString();
  const month = zeroPad(date.getMonth() + 1);
  const day = zeroPad(date.getDate());
  const hour = zeroPad(date.getHours());
  const minute = zeroPad(date.getMinutes());
  const second = zeroPad(date.getSeconds());
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

// node_modules/@polkadot/util/format/formatElapsed.js
function formatValue(elapsed) {
  if (elapsed < 15) {
    return `${elapsed.toFixed(1)}s`;
  } else if (elapsed < 60) {
    return `${elapsed | 0}s`;
  } else if (elapsed < 3600) {
    return `${elapsed / 60 | 0}m`;
  }
  return `${elapsed / 3600 | 0}h`;
}
function formatElapsed(now, value) {
  const tsNow = now?.getTime() || 0;
  const tsValue = value instanceof Date ? value.getTime() : bnToBn(value).toNumber();
  return tsNow && tsValue ? formatValue(Math.max(Math.abs(tsNow - tsValue), 0) / 1e3) : "0.0s";
}

// node_modules/@polkadot/util/format/formatNumber.js
function formatNumber(value, { locale = "en" } = {}) {
  const { thousand } = getSeparator(locale);
  return formatDecimal(bnToBn(value).toString(), thousand);
}

// node_modules/@polkadot/util/hex/hasPrefix.js
function hexHasPrefix(value) {
  return !!value && isHex(value, -1);
}

// node_modules/@polkadot/util/hex/addPrefix.js
function hexAddPrefix(value) {
  return value && hexHasPrefix(value) ? value : `0x${value && value.length % 2 === 1 ? "0" : ""}${value || ""}`;
}

// node_modules/@polkadot/util/hex/fixLength.js
function hexFixLength(value, bitLength = -1, withPadding = false) {
  const strLength = Math.ceil(bitLength / 4);
  const hexLength = strLength + 2;
  return hexAddPrefix(bitLength === -1 || value.length === hexLength || !withPadding && value.length < hexLength ? hexStripPrefix(value) : value.length > hexLength ? hexStripPrefix(value).slice(-1 * strLength) : `${"0".repeat(strLength)}${hexStripPrefix(value)}`.slice(-1 * strLength));
}

// node_modules/@polkadot/util/hex/toNumber.js
function hexToNumber(value) {
  return value ? hexToBn(value).toNumber() : NaN;
}

// node_modules/@polkadot/util/hex/toString.js
function hexToString(_value) {
  return u8aToString(hexToU8a(_value));
}

// node_modules/@polkadot/util/is/array.js
function isArray(value) {
  return Array.isArray(value);
}

// node_modules/@polkadot/util/is/string.js
function isString(value) {
  return typeof value === "string" || value instanceof String;
}

// node_modules/@polkadot/util/is/ascii.js
function isAsciiStr(str) {
  for (let i = 0, count = str.length; i < count; i++) {
    const b = str.charCodeAt(i);
    if (b < 32 || b > 126) {
      return false;
    }
  }
  return true;
}
function isAsciiBytes(u8a) {
  for (let i = 0, count = u8a.length; i < count; i++) {
    const b = u8a[i] | 0;
    if (b < 32 || b > 126) {
      return false;
    }
  }
  return true;
}
function isAscii(value) {
  return isString(value) ? isHex(value) ? isAsciiBytes(u8aToU8a(value)) : isAsciiStr(value) : value ? isAsciiBytes(value) : false;
}

// node_modules/@polkadot/util/is/class.js
var isClass = isOnFunction("isPrototypeOf", "hasOwnProperty");

// node_modules/@polkadot/util/is/childClass.js
function isChildClass(Parent, Child) {
  return isClass(Child) && isClass(Parent) ? Parent === Child || Parent.isPrototypeOf(Child) : false;
}

// node_modules/@polkadot/util/is/codec.js
var checkCodec = isOnObject("toHex", "toHuman", "toU8a");
var checkRegistry = isOnObject("get");
function isCodec(value) {
  return checkCodec(value) && checkRegistry(value.registry);
}

// node_modules/@polkadot/util/is/compact.js
var isCompact = isOnObject("toBigInt", "toBn", "toNumber", "unwrap");

// node_modules/@polkadot/util/is/error.js
function isError(value) {
  return (value && value.constructor) === Error || value instanceof Error;
}

// node_modules/@polkadot/util/is/instanceOf.js
function isInstanceOf(value, Clazz) {
  return (value && value.constructor) === Clazz || value instanceof Clazz;
}

// node_modules/@polkadot/util/is/ip.js
var v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
var v6s = "[a-fA-F\\d]{1,4}";
var v6 = `
(?:
(?:${v6s}:){7}(?:${v6s}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${v6s}:){6}(?:${v4}|:${v6s}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${v6s}:){5}(?::${v4}|(?::${v6s}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${v6s}:){4}(?:(?::${v6s}){0,1}:${v4}|(?::${v6s}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${v6s}:){3}(?:(?::${v6s}){0,2}:${v4}|(?::${v6s}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${v6s}:){2}(?:(?::${v6s}){0,3}:${v4}|(?::${v6s}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${v6s}:){1}(?:(?::${v6s}){0,4}:${v4}|(?::${v6s}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${v6s}){0,5}:${v4}|(?::${v6s}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
var v46Exact = new RegExp(`(?:^${v4}$)|(?:^${v6}$)`);
var v4exact = new RegExp(`^${v4}$`);
var v6exact = new RegExp(`^${v6}$`);
function isIp(value, type) {
  switch (type) {
    case "v4":
      return v4exact.test(value);
    case "v6":
      return v6exact.test(value);
    default:
      return v46Exact.test(value);
  }
}

// node_modules/@polkadot/util/stringify.js
function replacer(_, v) {
  return isBigInt(v) ? v.toString() : v;
}
function stringify(value, space) {
  return JSON.stringify(value, replacer, space);
}

// node_modules/@polkadot/util/is/jsonObject.js
function isJsonObject(value) {
  const str = typeof value !== "string" ? stringify(value) : value;
  try {
    const obj = JSON.parse(str);
    return typeof obj === "object" && obj !== null;
  } catch {
    return false;
  }
}

// node_modules/@polkadot/util/is/null.js
function isNull(value) {
  return value === null;
}

// node_modules/@polkadot/util/is/number.js
function isNumber(value) {
  return typeof value === "number";
}

// node_modules/@polkadot/util/is/observable.js
var isObservable = isOn("next");

// node_modules/@polkadot/util/is/promise.js
var isPromise = isOnObject("catch", "then");

// node_modules/@polkadot/util/is/riscv.js
var ELF_MAGIC = new Uint8Array([127, 69, 76, 70]);
var PVM_MAGIC = new Uint8Array([80, 86, 77, 0]);
function isRiscV(bytes) {
  if (isU8a(bytes)) {
    const start = bytes.subarray(0, 4);
    return u8aEq(start, PVM_MAGIC) || u8aEq(start, ELF_MAGIC);
  }
  return false;
}

// node_modules/@polkadot/util/is/testChain.js
var REGEX_DEV = /(Development|Local Testnet)$/;
function isTestChain(chain) {
  if (!chain) {
    return false;
  }
  return !!REGEX_DEV.test(chain.toString());
}

// node_modules/@polkadot/util/is/undefined.js
function isUndefined(value) {
  return value === void 0;
}

// node_modules/@polkadot/util/is/utf8.js
function isUtf8(value) {
  if (!value) {
    return isString(value);
  }
  const u8a = u8aToU8a(value);
  const len = u8a.length;
  let i = 0;
  while (i < len) {
    if (u8a[i] <= 127) {
      i += 1;
    } else if (u8a[i] >= 194 && u8a[i] <= 223) {
      if (i + 1 < len) {
        if (u8a[i + 1] < 128 || u8a[i + 1] > 191) {
          return false;
        }
      } else {
        return false;
      }
      i += 2;
    } else if (u8a[i] === 224) {
      if (i + 2 < len) {
        if (u8a[i + 1] < 160 || u8a[i + 1] > 191) {
          return false;
        }
        if (u8a[i + 2] < 128 || u8a[i + 2] > 191) {
          return false;
        }
      } else {
        return false;
      }
      i += 3;
    } else if (u8a[i] >= 225 && u8a[i] <= 236) {
      if (i + 2 < len) {
        if (u8a[i + 1] < 128 || u8a[i + 1] > 191) {
          return false;
        }
        if (u8a[i + 2] < 128 || u8a[i + 2] > 191) {
          return false;
        }
      } else {
        return false;
      }
      i += 3;
    } else if (u8a[i] === 237) {
      if (i + 2 < len) {
        if (u8a[i + 1] < 128 || u8a[i + 1] > 159) {
          return false;
        }
        if (u8a[i + 2] < 128 || u8a[i + 2] > 191) {
          return false;
        }
      } else {
        return false;
      }
      i += 3;
    } else if (u8a[i] >= 238 && u8a[i] <= 239) {
      if (i + 2 < len) {
        if (u8a[i + 1] < 128 || u8a[i + 1] > 191) {
          return false;
        }
        if (u8a[i + 2] < 128 || u8a[i + 2] > 191) {
          return false;
        }
      } else {
        return false;
      }
      i += 3;
    } else if (u8a[i] === 240) {
      if (i + 3 < len) {
        if (u8a[i + 1] < 144 || u8a[i + 1] > 191) {
          return false;
        }
        if (u8a[i + 2] < 128 || u8a[i + 2] > 191) {
          return false;
        }
        if (u8a[i + 3] < 128 || u8a[i + 3] > 191) {
          return false;
        }
      } else {
        return false;
      }
      i += 4;
    } else if (u8a[i] >= 241 && u8a[i] <= 243) {
      if (i + 3 < len) {
        if (u8a[i + 1] < 128 || u8a[i + 1] > 191) {
          return false;
        }
        if (u8a[i + 2] < 128 || u8a[i + 2] > 191) {
          return false;
        }
        if (u8a[i + 3] < 128 || u8a[i + 3] > 191) {
          return false;
        }
      } else {
        return false;
      }
      i += 4;
    } else if (u8a[i] === 244) {
      if (i + 3 < len) {
        if (u8a[i + 1] < 128 || u8a[i + 1] > 143) {
          return false;
        }
        if (u8a[i + 2] < 128 || u8a[i + 2] > 191) {
          return false;
        }
        if (u8a[i + 3] < 128 || u8a[i + 3] > 191) {
          return false;
        }
      } else {
        return false;
      }
      i += 4;
    } else {
      return false;
    }
  }
  return true;
}

// node_modules/@polkadot/util/is/wasm.js
var WASM_MAGIC = new Uint8Array([0, 97, 115, 109]);
function isWasm(value) {
  return isU8a(value) && u8aEq(value.subarray(0, 4), WASM_MAGIC);
}

// node_modules/@polkadot/util/lazy.js
function lazyMethod(result, item, creator, getName, index = 0) {
  const name = getName ? getName(item, index) : item.toString();
  let value;
  Object.defineProperty(result, name, {
    // This allows for re-configuration with the embedded defineProperty below
    // and ensures that on tested browsers and Node, it _will_ be redefined
    // and thus short-circuited for future access
    configurable: true,
    enumerable: true,
    // Use a function here, we don't want to capture the outer this, i.e.
    // don't use arrow functions in this context since we have a this inside
    get: function() {
      if (value === void 0) {
        value = creator(item, index, this);
        try {
          Object.defineProperty(this, name, { value });
        } catch {
        }
      }
      return value;
    }
  });
}
function lazyMethods(result, items, creator, getName) {
  for (let i = 0, count = items.length; i < count; i++) {
    lazyMethod(result, items[i], creator, getName, i);
  }
  return result;
}

// node_modules/@polkadot/util/noop.js
function identity(value) {
  return value;
}
function noop() {
}

// node_modules/@polkadot/util/logger.js
var logTo = {
  debug: "log",
  error: "error",
  log: "log",
  warn: "warn"
};
function formatOther(value) {
  if (value && isObject(value) && value.constructor === Object) {
    const result = {};
    for (const [k, v] of Object.entries(value)) {
      result[k] = loggerFormat(v);
    }
    return result;
  }
  return value;
}
function loggerFormat(value) {
  if (Array.isArray(value)) {
    return value.map(loggerFormat);
  } else if (isBn(value)) {
    return value.toString();
  } else if (isU8a(value) || isBuffer(value)) {
    return u8aToHex(u8aToU8a(value));
  }
  return formatOther(value);
}
function formatWithLength(maxLength) {
  return (v) => {
    if (maxLength <= 0) {
      return v;
    }
    const r = `${v}`;
    return r.length < maxLength ? v : `${r.substring(0, maxLength)} ...`;
  };
}
function apply(log, type, values, maxSize = -1) {
  if (values.length === 1 && isFunction(values[0])) {
    const fnResult = values[0]();
    return apply(log, type, Array.isArray(fnResult) ? fnResult : [fnResult], maxSize);
  }
  console[logTo[log]](formatDate(/* @__PURE__ */ new Date()), type, ...values.map(loggerFormat).map(formatWithLength(maxSize)));
}
function isDebugOn(e, type) {
  return !!e && (e === "*" || type === e || e.endsWith("*") && type.startsWith(e.slice(0, -1)));
}
function isDebugOff(e, type) {
  return !!e && (e.startsWith("-") && (type === e.slice(1) || e.endsWith("*") && type.startsWith(e.slice(1, -1))));
}
function getDebugFlag(env, type) {
  let flag = false;
  for (const e of env) {
    if (isDebugOn(e, type)) {
      flag = true;
    } else if (isDebugOff(e, type)) {
      flag = false;
    }
  }
  return flag;
}
function parseEnv(type) {
  const maxSize = parseInt(xglobal.process?.env?.["DEBUG_MAX"] || "-1", 10);
  return [
    getDebugFlag((xglobal.process?.env?.["DEBUG"] || "").toLowerCase().split(","), type),
    isNaN(maxSize) ? -1 : maxSize
  ];
}
function logger(origin) {
  const type = `${origin.toUpperCase()}:`.padStart(16);
  const [isDebug, maxSize] = parseEnv(origin.toLowerCase());
  return {
    debug: isDebug ? (...values) => apply("debug", type, values, maxSize) : noop,
    error: (...values) => apply("error", type, values),
    log: (...values) => apply("log", type, values),
    noop,
    warn: (...values) => apply("warn", type, values)
  };
}

// node_modules/@polkadot/util/memoize.js
function defaultGetId() {
  return "none";
}
function memoize(fn, { getInstanceId = defaultGetId } = {}) {
  const cache = {};
  const memoized = (...args) => {
    const stringParams = stringify(args);
    const instanceId = getInstanceId();
    if (!cache[instanceId]) {
      cache[instanceId] = {};
    }
    if (cache[instanceId][stringParams] === void 0) {
      cache[instanceId][stringParams] = fn(...args);
    }
    return cache[instanceId][stringParams];
  };
  memoized.unmemoize = (...args) => {
    const stringParams = stringify(args);
    const instanceId = getInstanceId();
    if (cache[instanceId]?.[stringParams] !== void 0) {
      delete cache[instanceId][stringParams];
    }
  };
  return memoized;
}

// node_modules/@polkadot/util/nextTick.js
function nextTick(onExec, onError) {
  setTimeout(() => {
    Promise.resolve().then(() => {
      onExec();
    }).catch((error) => {
      if (onError) {
        onError(error);
      } else {
        console.error(error);
      }
    });
  }, 0);
}

// node_modules/@polkadot/util/number/toHex.js
function numberToHex(value, bitLength = -1) {
  const hex2 = (!value || Number.isNaN(value) ? 0 : value).toString(16);
  return hexFixLength(hex2.length % 2 ? `0${hex2}` : hex2, bitLength, true);
}

// node_modules/@polkadot/util/number/toU8a.js
function numberToU8a(value, bitLength = -1) {
  return hexToU8a(numberToHex(value, bitLength));
}

// node_modules/@polkadot/util/object/clear.js
function objectClear(value) {
  const keys = Object.keys(value);
  for (let i = 0, count = keys.length; i < count; i++) {
    delete value[keys[i]];
  }
  return value;
}

// node_modules/@polkadot/util/object/spread.js
function objectSpread(dest, ...sources) {
  for (let i = 0, count = sources.length; i < count; i++) {
    const src = sources[i];
    if (src) {
      if (typeof src.entries === "function") {
        for (const [key, value] of src.entries()) {
          dest[key] = value;
        }
      } else {
        Object.assign(dest, src);
      }
    }
  }
  return dest;
}

// node_modules/@polkadot/util/object/copy.js
function objectCopy(source) {
  return objectSpread({}, source);
}

// node_modules/@polkadot/util/object/entries.js
function objectEntries(obj) {
  return Object.entries(obj);
}

// node_modules/@polkadot/util/object/keys.js
function objectKeys(value) {
  return Object.keys(value);
}

// node_modules/@polkadot/util/object/property.js
function objectProperty(that, key, getter, getName, index = 0) {
  const name = getName ? getName(key, index) : key;
  if (!(name in that)) {
    Object.defineProperty(that, name, {
      enumerable: true,
      // Unlike in lazy, we always call into the upper function, i.e. this method
      // does not cache old values (it is expected to be used for dynamic values)
      get: function() {
        return getter(key, index, this);
      }
    });
  }
}
function objectProperties(that, keys, getter, getName) {
  for (let i = 0, count = keys.length; i < count; i++) {
    objectProperty(that, keys[i], getter, getName, i);
  }
}

// node_modules/@polkadot/util/object/values.js
function objectValues(obj) {
  return Object.values(obj);
}

// node_modules/@polkadot/util/promisify.js
function promisify(self2, fn, ...params) {
  return new Promise((resolve, reject) => {
    fn.apply(self2, params.concat((error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    }));
  });
}

// node_modules/@polkadot/util/string/camelCase.js
var CC_TO_UP = new Array(256);
var CC_TO_LO = new Array(256);
for (let i = 0, count = CC_TO_UP.length; i < count; i++) {
  CC_TO_LO[i] = String.fromCharCode(i).toLowerCase();
  CC_TO_UP[i] = String.fromCharCode(i).toUpperCase();
}
function formatAllCaps(w) {
  return w.slice(0, w.length - 1).toLowerCase() + CC_TO_UP[w.charCodeAt(w.length - 1)];
}
function converter(format) {
  return (value) => {
    const parts = value.replace(/[-_., ]+/g, " ").trim().split(" ");
    let result = "";
    for (let i = 0, count = parts.length; i < count; i++) {
      const w = parts[i];
      result += format(/^[\dA-Z]+$/.test(w) ? w.toLowerCase() : w.replace(/^[\dA-Z]{2,}[^a-z]/, formatAllCaps), i);
    }
    return result;
  };
}
var stringCamelCase = converter((w, i) => (i ? CC_TO_UP[w.charCodeAt(0)] : CC_TO_LO[w.charCodeAt(0)]) + w.slice(1));
var stringPascalCase = converter((w) => CC_TO_UP[w.charCodeAt(0)] + w.slice(1));

// node_modules/@polkadot/util/string/lowerFirst.js
function converter2(map) {
  return (value) => value ? map[value.charCodeAt(0)] + value.slice(1) : "";
}
var stringLowerFirst = converter2(CC_TO_LO);
var stringUpperFirst = converter2(CC_TO_UP);

// node_modules/@polkadot/util/string/shorten.js
function stringShorten(value, prefixLength = 6) {
  return value.length <= 2 + 2 * prefixLength ? value.toString() : `${value.substring(0, prefixLength)}…${value.slice(-prefixLength)}`;
}

// node_modules/@polkadot/util/string/toHex.js
function stringToHex(value) {
  return u8aToHex(stringToU8a(value));
}

export {
  xglobal,
  exposeGlobal,
  packageInfo4 as packageInfo,
  isFunction,
  POLKADOTJS_DISABLE_ESM_CJS_WARNING_FLAG,
  detectPackage,
  arrayChunk,
  arrayFilter,
  arrayFlatten,
  arrayRange,
  arrayShuffle,
  arrayUnzip,
  arrayZip,
  assert,
  assertReturn,
  assertUnreachable,
  nMax,
  nMin,
  BigInt,
  _0n,
  _1n,
  _2n,
  _3n,
  _4n,
  _5n,
  _6n,
  _7n,
  _8n,
  _9n,
  _10n,
  _100n,
  _1000n,
  _1Mn,
  _1Bn,
  _1Qn,
  _2pow53n,
  _sqrt2pow53n,
  u8aToBigInt,
  hexToU8a,
  hexToBigInt,
  import_bn,
  isBn,
  isHex,
  isObject,
  isToBigInt,
  isToBn,
  nToBigInt,
  nSqrt,
  hasBigInt,
  hasCjs,
  hasDirname,
  hasEsm,
  hasWasm,
  hasBuffer,
  hasProcess,
  isBuffer,
  isU8a,
  stringToU8a,
  u8aToU8a,
  u8aCmp,
  u8aConcat,
  u8aConcatStrict,
  u8aEmpty,
  u8aEq,
  u8aFixLength,
  u8aSorted,
  u8aToBn,
  u8aToBuffer,
  u8aToFloat,
  u8aToHex,
  u8aToNumber,
  u8aToString,
  U8A_WRAP_ETHEREUM,
  U8A_WRAP_PREFIX,
  U8A_WRAP_POSTFIX,
  u8aIsWrapped,
  u8aUnwrapBytes,
  u8aWrapBytes,
  nToU8a,
  nToHex,
  hexStripPrefix,
  hexToBn,
  bnMax,
  bnMin,
  BN_ZERO,
  BN_ONE,
  BN_TWO,
  BN_THREE,
  BN_FOUR,
  BN_FIVE,
  BN_SIX,
  BN_SEVEN,
  BN_EIGHT,
  BN_NINE,
  BN_TEN,
  BN_HUNDRED,
  BN_THOUSAND,
  BN_MILLION,
  BN_BILLION,
  BN_QUINTILL,
  BN_MAX_INTEGER,
  BN_SQRT_MAX_INTEGER,
  isBigInt,
  bnToBn,
  bnSqrt,
  bnToU8a,
  bnToHex,
  bufferToU8a,
  compactToU8a,
  compactAddLength,
  compactFromU8a,
  compactFromU8aLim,
  compactStripLength,
  extractTime,
  floatToU8a,
  isBoolean,
  formatDecimal,
  findSi,
  calcSi,
  formatBalance,
  formatDate,
  formatElapsed,
  formatNumber,
  hexHasPrefix,
  hexAddPrefix,
  hexFixLength,
  hexToNumber,
  hexToString,
  isArray,
  isString,
  isAscii,
  isClass,
  isChildClass,
  isCodec,
  isCompact,
  isError,
  isInstanceOf,
  isIp,
  stringify,
  isJsonObject,
  isNull,
  isNumber,
  isObservable,
  isPromise,
  isRiscV,
  isTestChain,
  isUndefined,
  isUtf8,
  isWasm,
  lazyMethod,
  lazyMethods,
  identity,
  noop,
  loggerFormat,
  logger,
  memoize,
  nextTick,
  numberToHex,
  numberToU8a,
  objectClear,
  objectSpread,
  objectCopy,
  objectEntries,
  objectKeys,
  objectProperty,
  objectProperties,
  objectValues,
  promisify,
  stringCamelCase,
  stringPascalCase,
  stringLowerFirst,
  stringUpperFirst,
  stringShorten,
  stringToHex
};
//# sourceMappingURL=chunk-5VGPNYA4.js.map
