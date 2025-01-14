(() => {
  "use strict";
  function A(A) {
    let t = A[0],
      e = A[1],
      i = A[2];
    return Math.sqrt(t * t + e * e + i * i);
  }
  function t(A, t) {
    return (A[0] = t[0]), (A[1] = t[1]), (A[2] = t[2]), A;
  }
  function e(A, t, e) {
    return (A[0] = t[0] + e[0]), (A[1] = t[1] + e[1]), (A[2] = t[2] + e[2]), A;
  }
  function i(A, t, e) {
    return (A[0] = t[0] - e[0]), (A[1] = t[1] - e[1]), (A[2] = t[2] - e[2]), A;
  }
  function r(A, t, e) {
    return (A[0] = t[0] * e), (A[1] = t[1] * e), (A[2] = t[2] * e), A;
  }
  function n(A) {
    let t = A[0],
      e = A[1],
      i = A[2];
    return t * t + e * e + i * i;
  }
  function s(A, t) {
    let e = t[0],
      i = t[1],
      r = t[2],
      n = e * e + i * i + r * r;
    return (
      n > 0 && (n = 1 / Math.sqrt(n)),
      (A[0] = t[0] * n),
      (A[1] = t[1] * n),
      (A[2] = t[2] * n),
      A
    );
  }
  function a(A, t) {
    return A[0] * t[0] + A[1] * t[1] + A[2] * t[2];
  }
  function o(A, t, e) {
    let i = t[0],
      r = t[1],
      n = t[2],
      s = e[0],
      a = e[1],
      o = e[2];
    return (
      (A[0] = r * o - n * a), (A[1] = n * s - i * o), (A[2] = i * a - r * s), A
    );
  }
  const h = (function () {
    const A = [0, 0, 0],
      e = [0, 0, 0];
    return function (i, r) {
      t(A, i), t(e, r), s(A, A), s(e, e);
      let n = a(A, e);
      return n > 1 ? 0 : n < -1 ? Math.PI : Math.acos(n);
    };
  })();
  class l extends Array {
    constructor(A = 0, t = A, e = A) {
      return super(A, t, e), this;
    }
    get x() {
      return this[0];
    }
    get y() {
      return this[1];
    }
    get z() {
      return this[2];
    }
    set x(A) {
      this[0] = A;
    }
    set y(A) {
      this[1] = A;
    }
    set z(A) {
      this[2] = A;
    }
    set(A, t = A, e = A) {
      return A.length
        ? this.copy(A)
        : ((function (A, t, e, i) {
            (A[0] = t), (A[1] = e), (A[2] = i);
          })(this, A, t, e),
          this);
    }
    copy(A) {
      return t(this, A), this;
    }
    add(A, t) {
      return t ? e(this, A, t) : e(this, this, A), this;
    }
    sub(A, t) {
      return t ? i(this, A, t) : i(this, this, A), this;
    }
    multiply(A) {
      var t, e, i;
      return (
        A.length
          ? ((e = this),
            (i = A),
            ((t = this)[0] = e[0] * i[0]),
            (t[1] = e[1] * i[1]),
            (t[2] = e[2] * i[2]))
          : r(this, this, A),
        this
      );
    }
    divide(A) {
      var t, e, i;
      return (
        A.length
          ? ((e = this),
            (i = A),
            ((t = this)[0] = e[0] / i[0]),
            (t[1] = e[1] / i[1]),
            (t[2] = e[2] / i[2]))
          : r(this, this, 1 / A),
        this
      );
    }
    inverse(A = this) {
      var t, e;
      return (
        (e = A),
        ((t = this)[0] = 1 / e[0]),
        (t[1] = 1 / e[1]),
        (t[2] = 1 / e[2]),
        this
      );
    }
    len() {
      return A(this);
    }
    distance(t) {
      return t
        ? (function (A, t) {
            let e = t[0] - A[0],
              i = t[1] - A[1],
              r = t[2] - A[2];
            return Math.sqrt(e * e + i * i + r * r);
          })(this, t)
        : A(this);
    }
    squaredLen() {
      return n(this);
    }
    squaredDistance(A) {
      return A
        ? (function (A, t) {
            let e = t[0] - A[0],
              i = t[1] - A[1],
              r = t[2] - A[2];
            return e * e + i * i + r * r;
          })(this, A)
        : n(this);
    }
    negate(A = this) {
      var t, e;
      return (
        (e = A), ((t = this)[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), this
      );
    }
    cross(A, t) {
      return t ? o(this, A, t) : o(this, this, A), this;
    }
    scale(A) {
      return r(this, this, A), this;
    }
    normalize() {
      return s(this, this), this;
    }
    dot(A) {
      return a(this, A);
    }
    equals(A) {
      return (t = A), this[0] === t[0] && this[1] === t[1] && this[2] === t[2];
      var t;
    }
    applyMatrix3(A) {
      return (
        (function (A, t, e) {
          let i = t[0],
            r = t[1],
            n = t[2];
          (A[0] = i * e[0] + r * e[3] + n * e[6]),
            (A[1] = i * e[1] + r * e[4] + n * e[7]),
            (A[2] = i * e[2] + r * e[5] + n * e[8]);
        })(this, this, A),
        this
      );
    }
    applyMatrix4(A) {
      return (
        (function (A, t, e) {
          let i = t[0],
            r = t[1],
            n = t[2],
            s = e[3] * i + e[7] * r + e[11] * n + e[15];
          (s = s || 1),
            (A[0] = (e[0] * i + e[4] * r + e[8] * n + e[12]) / s),
            (A[1] = (e[1] * i + e[5] * r + e[9] * n + e[13]) / s),
            (A[2] = (e[2] * i + e[6] * r + e[10] * n + e[14]) / s);
        })(this, this, A),
        this
      );
    }
    scaleRotateMatrix4(A) {
      return (
        (function (A, t, e) {
          let i = t[0],
            r = t[1],
            n = t[2],
            s = e[3] * i + e[7] * r + e[11] * n + e[15];
          (s = s || 1),
            (A[0] = (e[0] * i + e[4] * r + e[8] * n) / s),
            (A[1] = (e[1] * i + e[5] * r + e[9] * n) / s),
            (A[2] = (e[2] * i + e[6] * r + e[10] * n) / s);
        })(this, this, A),
        this
      );
    }
    applyQuaternion(A) {
      return (
        (function (A, t, e) {
          let i = t[0],
            r = t[1],
            n = t[2],
            s = e[0],
            a = e[1],
            o = e[2],
            h = a * n - o * r,
            l = o * i - s * n,
            c = s * r - a * i,
            g = a * c - o * l,
            u = o * h - s * c,
            d = s * l - a * h,
            p = 2 * e[3];
          (h *= p),
            (l *= p),
            (c *= p),
            (g *= 2),
            (u *= 2),
            (d *= 2),
            (A[0] = i + h + g),
            (A[1] = r + l + u),
            (A[2] = n + c + d);
        })(this, this, A),
        this
      );
    }
    angle(A) {
      return h(this, A);
    }
    lerp(A, t) {
      return (
        (function (A, t, e, i) {
          let r = t[0],
            n = t[1],
            s = t[2];
          (A[0] = r + i * (e[0] - r)),
            (A[1] = n + i * (e[1] - n)),
            (A[2] = s + i * (e[2] - s));
        })(this, this, A, t),
        this
      );
    }
    clone() {
      return new l(this[0], this[1], this[2]);
    }
    fromArray(A, t = 0) {
      return (this[0] = A[t]), (this[1] = A[t + 1]), (this[2] = A[t + 2]), this;
    }
    toArray(A = [], t = 0) {
      return (A[t] = this[0]), (A[t + 1] = this[1]), (A[t + 2] = this[2]), A;
    }
    transformDirection(A) {
      const t = this[0],
        e = this[1],
        i = this[2];
      return (
        (this[0] = A[0] * t + A[4] * e + A[8] * i),
        (this[1] = A[1] * t + A[5] * e + A[9] * i),
        (this[2] = A[2] * t + A[6] * e + A[10] * i),
        this.normalize()
      );
    }
  }
  function c(A, t, e) {
    let i = t[0],
      r = t[1],
      n = t[2],
      s = t[3],
      a = e[0],
      o = e[1],
      h = e[2],
      l = e[3];
    return (
      (A[0] = i * l + s * a + r * h - n * o),
      (A[1] = r * l + s * o + n * a - i * h),
      (A[2] = n * l + s * h + i * o - r * a),
      (A[3] = s * l - i * a - r * o - n * h),
      A
    );
  }
  class g extends Array {
    constructor(A = 0, t = 0, e = 0, i = 1) {
      return super(A, t, e, i), (this.onChange = () => {}), this;
    }
    get x() {
      return this[0];
    }
    get y() {
      return this[1];
    }
    get z() {
      return this[2];
    }
    get w() {
      return this[3];
    }
    set x(A) {
      (this[0] = A), this.onChange();
    }
    set y(A) {
      (this[1] = A), this.onChange();
    }
    set z(A) {
      (this[2] = A), this.onChange();
    }
    set w(A) {
      (this[3] = A), this.onChange();
    }
    identity() {
      var A;
      return (
        ((A = this)[0] = 0),
        (A[1] = 0),
        (A[2] = 0),
        (A[3] = 1),
        this.onChange(),
        this
      );
    }
    set(A, t, e, i) {
      return A.length
        ? this.copy(A)
        : ((function (A, t, e, i, r) {
            (A[0] = t), (A[1] = e), (A[2] = i), (A[3] = r);
          })(this, A, t, e, i),
          this.onChange(),
          this);
    }
    rotateX(A) {
      return (
        (function (A, t, e) {
          e *= 0.5;
          let i = t[0],
            r = t[1],
            n = t[2],
            s = t[3],
            a = Math.sin(e),
            o = Math.cos(e);
          (A[0] = i * o + s * a),
            (A[1] = r * o + n * a),
            (A[2] = n * o - r * a),
            (A[3] = s * o - i * a);
        })(this, this, A),
        this.onChange(),
        this
      );
    }
    rotateY(A) {
      return (
        (function (A, t, e) {
          e *= 0.5;
          let i = t[0],
            r = t[1],
            n = t[2],
            s = t[3],
            a = Math.sin(e),
            o = Math.cos(e);
          (A[0] = i * o - n * a),
            (A[1] = r * o + s * a),
            (A[2] = n * o + i * a),
            (A[3] = s * o - r * a);
        })(this, this, A),
        this.onChange(),
        this
      );
    }
    rotateZ(A) {
      return (
        (function (A, t, e) {
          e *= 0.5;
          let i = t[0],
            r = t[1],
            n = t[2],
            s = t[3],
            a = Math.sin(e),
            o = Math.cos(e);
          (A[0] = i * o + r * a),
            (A[1] = r * o - i * a),
            (A[2] = n * o + s * a),
            (A[3] = s * o - n * a);
        })(this, this, A),
        this.onChange(),
        this
      );
    }
    inverse(A = this) {
      return (
        (function (A, t) {
          let e = t[0],
            i = t[1],
            r = t[2],
            n = t[3],
            s = e * e + i * i + r * r + n * n,
            a = s ? 1 / s : 0;
          (A[0] = -e * a), (A[1] = -i * a), (A[2] = -r * a), (A[3] = n * a);
        })(this, A),
        this.onChange(),
        this
      );
    }
    conjugate(A = this) {
      var t, e;
      return (
        (e = A),
        ((t = this)[0] = -e[0]),
        (t[1] = -e[1]),
        (t[2] = -e[2]),
        (t[3] = e[3]),
        this.onChange(),
        this
      );
    }
    copy(A) {
      return (
        (e = A),
        ((t = this)[0] = e[0]),
        (t[1] = e[1]),
        (t[2] = e[2]),
        (t[3] = e[3]),
        this.onChange(),
        this
      );
      var t, e;
    }
    normalize(A = this) {
      return (
        (function (A, t) {
          let e = t[0],
            i = t[1],
            r = t[2],
            n = t[3],
            s = e * e + i * i + r * r + n * n;
          s > 0 && (s = 1 / Math.sqrt(s)),
            (A[0] = e * s),
            (A[1] = i * s),
            (A[2] = r * s),
            (A[3] = n * s);
        })(this, A),
        this.onChange(),
        this
      );
    }
    multiply(A, t) {
      return t ? c(this, A, t) : c(this, this, A), this.onChange(), this;
    }
    dot(A) {
      return (
        (e = A), (t = this)[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
      );
      var t, e;
    }
    fromMatrix3(A) {
      return (
        (function (A, t) {
          let e,
            i = t[0] + t[4] + t[8];
          if (i > 0)
            (e = Math.sqrt(i + 1)),
              (A[3] = 0.5 * e),
              (e = 0.5 / e),
              (A[0] = (t[5] - t[7]) * e),
              (A[1] = (t[6] - t[2]) * e),
              (A[2] = (t[1] - t[3]) * e);
          else {
            let i = 0;
            t[4] > t[0] && (i = 1), t[8] > t[3 * i + i] && (i = 2);
            let r = (i + 1) % 3,
              n = (i + 2) % 3;
            (e = Math.sqrt(t[3 * i + i] - t[3 * r + r] - t[3 * n + n] + 1)),
              (A[i] = 0.5 * e),
              (e = 0.5 / e),
              (A[3] = (t[3 * r + n] - t[3 * n + r]) * e),
              (A[r] = (t[3 * r + i] + t[3 * i + r]) * e),
              (A[n] = (t[3 * n + i] + t[3 * i + n]) * e);
          }
        })(this, A),
        this.onChange(),
        this
      );
    }
    fromEuler(A) {
      return (
        (function (A, t, e = "YXZ") {
          let i = Math.sin(0.5 * t[0]),
            r = Math.cos(0.5 * t[0]),
            n = Math.sin(0.5 * t[1]),
            s = Math.cos(0.5 * t[1]),
            a = Math.sin(0.5 * t[2]),
            o = Math.cos(0.5 * t[2]);
          "XYZ" === e
            ? ((A[0] = i * s * o + r * n * a),
              (A[1] = r * n * o - i * s * a),
              (A[2] = r * s * a + i * n * o),
              (A[3] = r * s * o - i * n * a))
            : "YXZ" === e
            ? ((A[0] = i * s * o + r * n * a),
              (A[1] = r * n * o - i * s * a),
              (A[2] = r * s * a - i * n * o),
              (A[3] = r * s * o + i * n * a))
            : "ZXY" === e
            ? ((A[0] = i * s * o - r * n * a),
              (A[1] = r * n * o + i * s * a),
              (A[2] = r * s * a + i * n * o),
              (A[3] = r * s * o - i * n * a))
            : "ZYX" === e
            ? ((A[0] = i * s * o - r * n * a),
              (A[1] = r * n * o + i * s * a),
              (A[2] = r * s * a - i * n * o),
              (A[3] = r * s * o + i * n * a))
            : "YZX" === e
            ? ((A[0] = i * s * o + r * n * a),
              (A[1] = r * n * o + i * s * a),
              (A[2] = r * s * a - i * n * o),
              (A[3] = r * s * o - i * n * a))
            : "XZY" === e &&
              ((A[0] = i * s * o - r * n * a),
              (A[1] = r * n * o - i * s * a),
              (A[2] = r * s * a + i * n * o),
              (A[3] = r * s * o + i * n * a));
        })(this, A, A.order),
        this
      );
    }
    fromAxisAngle(A, t) {
      return (
        (function (A, t, e) {
          e *= 0.5;
          let i = Math.sin(e);
          (A[0] = i * t[0]),
            (A[1] = i * t[1]),
            (A[2] = i * t[2]),
            (A[3] = Math.cos(e));
        })(this, A, t),
        this
      );
    }
    slerp(A, t) {
      return (
        (function (A, t, e, i) {
          let r,
            n,
            s,
            a,
            o,
            h = t[0],
            l = t[1],
            c = t[2],
            g = t[3],
            u = e[0],
            d = e[1],
            p = e[2],
            f = e[3];
          (n = h * u + l * d + c * p + g * f),
            n < 0 && ((n = -n), (u = -u), (d = -d), (p = -p), (f = -f)),
            1 - n > 1e-6
              ? ((r = Math.acos(n)),
                (s = Math.sin(r)),
                (a = Math.sin((1 - i) * r) / s),
                (o = Math.sin(i * r) / s))
              : ((a = 1 - i), (o = i)),
            (A[0] = a * h + o * u),
            (A[1] = a * l + o * d),
            (A[2] = a * c + o * p),
            (A[3] = a * g + o * f);
        })(this, this, A, t),
        this
      );
    }
    fromArray(A, t = 0) {
      return (
        (this[0] = A[t]),
        (this[1] = A[t + 1]),
        (this[2] = A[t + 2]),
        (this[3] = A[t + 3]),
        this
      );
    }
    toArray(A = [], t = 0) {
      return (
        (A[t] = this[0]),
        (A[t + 1] = this[1]),
        (A[t + 2] = this[2]),
        (A[t + 3] = this[3]),
        A
      );
    }
  }
  function u(A, t, e) {
    let i = t[0],
      r = t[1],
      n = t[2],
      s = t[3],
      a = t[4],
      o = t[5],
      h = t[6],
      l = t[7],
      c = t[8],
      g = t[9],
      u = t[10],
      d = t[11],
      p = t[12],
      f = t[13],
      m = t[14],
      E = t[15],
      x = e[0],
      I = e[1],
      R = e[2],
      v = e[3];
    return (
      (A[0] = x * i + I * a + R * c + v * p),
      (A[1] = x * r + I * o + R * g + v * f),
      (A[2] = x * n + I * h + R * u + v * m),
      (A[3] = x * s + I * l + R * d + v * E),
      (x = e[4]),
      (I = e[5]),
      (R = e[6]),
      (v = e[7]),
      (A[4] = x * i + I * a + R * c + v * p),
      (A[5] = x * r + I * o + R * g + v * f),
      (A[6] = x * n + I * h + R * u + v * m),
      (A[7] = x * s + I * l + R * d + v * E),
      (x = e[8]),
      (I = e[9]),
      (R = e[10]),
      (v = e[11]),
      (A[8] = x * i + I * a + R * c + v * p),
      (A[9] = x * r + I * o + R * g + v * f),
      (A[10] = x * n + I * h + R * u + v * m),
      (A[11] = x * s + I * l + R * d + v * E),
      (x = e[12]),
      (I = e[13]),
      (R = e[14]),
      (v = e[15]),
      (A[12] = x * i + I * a + R * c + v * p),
      (A[13] = x * r + I * o + R * g + v * f),
      (A[14] = x * n + I * h + R * u + v * m),
      (A[15] = x * s + I * l + R * d + v * E),
      A
    );
  }
  function d(A, t) {
    let e = t[0],
      i = t[1],
      r = t[2],
      n = t[4],
      s = t[5],
      a = t[6],
      o = t[8],
      h = t[9],
      l = t[10];
    return (
      (A[0] = Math.hypot(e, i, r)),
      (A[1] = Math.hypot(n, s, a)),
      (A[2] = Math.hypot(o, h, l)),
      A
    );
  }
  const p = (function () {
    const A = [0, 0, 0];
    return function (t, e) {
      let i = A;
      d(i, e);
      let r = 1 / i[0],
        n = 1 / i[1],
        s = 1 / i[2],
        a = e[0] * r,
        o = e[1] * n,
        h = e[2] * s,
        l = e[4] * r,
        c = e[5] * n,
        g = e[6] * s,
        u = e[8] * r,
        p = e[9] * n,
        f = e[10] * s,
        m = a + c + f,
        E = 0;
      return (
        m > 0
          ? ((E = 2 * Math.sqrt(m + 1)),
            (t[3] = 0.25 * E),
            (t[0] = (g - p) / E),
            (t[1] = (u - h) / E),
            (t[2] = (o - l) / E))
          : a > c && a > f
          ? ((E = 2 * Math.sqrt(1 + a - c - f)),
            (t[3] = (g - p) / E),
            (t[0] = 0.25 * E),
            (t[1] = (o + l) / E),
            (t[2] = (u + h) / E))
          : c > f
          ? ((E = 2 * Math.sqrt(1 + c - a - f)),
            (t[3] = (u - h) / E),
            (t[0] = (o + l) / E),
            (t[1] = 0.25 * E),
            (t[2] = (g + p) / E))
          : ((E = 2 * Math.sqrt(1 + f - a - c)),
            (t[3] = (o - l) / E),
            (t[0] = (u + h) / E),
            (t[1] = (g + p) / E),
            (t[2] = 0.25 * E)),
        t
      );
    };
  })();
  class f extends Array {
    constructor(
      A = 1,
      t = 0,
      e = 0,
      i = 0,
      r = 0,
      n = 1,
      s = 0,
      a = 0,
      o = 0,
      h = 0,
      l = 1,
      c = 0,
      g = 0,
      u = 0,
      d = 0,
      p = 1
    ) {
      return super(A, t, e, i, r, n, s, a, o, h, l, c, g, u, d, p), this;
    }
    get x() {
      return this[12];
    }
    get y() {
      return this[13];
    }
    get z() {
      return this[14];
    }
    get w() {
      return this[15];
    }
    set x(A) {
      this[12] = A;
    }
    set y(A) {
      this[13] = A;
    }
    set z(A) {
      this[14] = A;
    }
    set w(A) {
      this[15] = A;
    }
    set(A, t, e, i, r, n, s, a, o, h, l, c, g, u, d, p) {
      return A.length
        ? this.copy(A)
        : ((function (A, t, e, i, r, n, s, a, o, h, l, c, g, u, d, p, f) {
            (A[0] = t),
              (A[1] = e),
              (A[2] = i),
              (A[3] = r),
              (A[4] = n),
              (A[5] = s),
              (A[6] = a),
              (A[7] = o),
              (A[8] = h),
              (A[9] = l),
              (A[10] = c),
              (A[11] = g),
              (A[12] = u),
              (A[13] = d),
              (A[14] = p),
              (A[15] = f);
          })(this, A, t, e, i, r, n, s, a, o, h, l, c, g, u, d, p),
          this);
    }
    translate(A, t = this) {
      return (
        (function (A, t, e) {
          let i,
            r,
            n,
            s,
            a,
            o,
            h,
            l,
            c,
            g,
            u,
            d,
            p = e[0],
            f = e[1],
            m = e[2];
          t === A
            ? ((A[12] = t[0] * p + t[4] * f + t[8] * m + t[12]),
              (A[13] = t[1] * p + t[5] * f + t[9] * m + t[13]),
              (A[14] = t[2] * p + t[6] * f + t[10] * m + t[14]),
              (A[15] = t[3] * p + t[7] * f + t[11] * m + t[15]))
            : ((i = t[0]),
              (r = t[1]),
              (n = t[2]),
              (s = t[3]),
              (a = t[4]),
              (o = t[5]),
              (h = t[6]),
              (l = t[7]),
              (c = t[8]),
              (g = t[9]),
              (u = t[10]),
              (d = t[11]),
              (A[0] = i),
              (A[1] = r),
              (A[2] = n),
              (A[3] = s),
              (A[4] = a),
              (A[5] = o),
              (A[6] = h),
              (A[7] = l),
              (A[8] = c),
              (A[9] = g),
              (A[10] = u),
              (A[11] = d),
              (A[12] = i * p + a * f + c * m + t[12]),
              (A[13] = r * p + o * f + g * m + t[13]),
              (A[14] = n * p + h * f + u * m + t[14]),
              (A[15] = s * p + l * f + d * m + t[15]));
        })(this, t, A),
        this
      );
    }
    rotate(A, t, e = this) {
      return (
        (function (A, t, e, i) {
          let r,
            n,
            s,
            a,
            o,
            h,
            l,
            c,
            g,
            u,
            d,
            p,
            f,
            m,
            E,
            x,
            I,
            R,
            v,
            C,
            y,
            B,
            F,
            M,
            w = i[0],
            Q = i[1],
            S = i[2],
            b = Math.hypot(w, Q, S);
          Math.abs(b) < 1e-6 ||
            ((b = 1 / b),
            (w *= b),
            (Q *= b),
            (S *= b),
            (r = Math.sin(e)),
            (n = Math.cos(e)),
            (s = 1 - n),
            (a = t[0]),
            (o = t[1]),
            (h = t[2]),
            (l = t[3]),
            (c = t[4]),
            (g = t[5]),
            (u = t[6]),
            (d = t[7]),
            (p = t[8]),
            (f = t[9]),
            (m = t[10]),
            (E = t[11]),
            (x = w * w * s + n),
            (I = Q * w * s + S * r),
            (R = S * w * s - Q * r),
            (v = w * Q * s - S * r),
            (C = Q * Q * s + n),
            (y = S * Q * s + w * r),
            (B = w * S * s + Q * r),
            (F = Q * S * s - w * r),
            (M = S * S * s + n),
            (A[0] = a * x + c * I + p * R),
            (A[1] = o * x + g * I + f * R),
            (A[2] = h * x + u * I + m * R),
            (A[3] = l * x + d * I + E * R),
            (A[4] = a * v + c * C + p * y),
            (A[5] = o * v + g * C + f * y),
            (A[6] = h * v + u * C + m * y),
            (A[7] = l * v + d * C + E * y),
            (A[8] = a * B + c * F + p * M),
            (A[9] = o * B + g * F + f * M),
            (A[10] = h * B + u * F + m * M),
            (A[11] = l * B + d * F + E * M),
            t !== A &&
              ((A[12] = t[12]),
              (A[13] = t[13]),
              (A[14] = t[14]),
              (A[15] = t[15])));
        })(this, e, A, t),
        this
      );
    }
    scale(A, t = this) {
      return (
        (function (A, t, e) {
          let i = e[0],
            r = e[1],
            n = e[2];
          (A[0] = t[0] * i),
            (A[1] = t[1] * i),
            (A[2] = t[2] * i),
            (A[3] = t[3] * i),
            (A[4] = t[4] * r),
            (A[5] = t[5] * r),
            (A[6] = t[6] * r),
            (A[7] = t[7] * r),
            (A[8] = t[8] * n),
            (A[9] = t[9] * n),
            (A[10] = t[10] * n),
            (A[11] = t[11] * n),
            (A[12] = t[12]),
            (A[13] = t[13]),
            (A[14] = t[14]),
            (A[15] = t[15]);
        })(this, t, "number" == typeof A ? [A, A, A] : A),
        this
      );
    }
    multiply(A, t) {
      return t ? u(this, A, t) : u(this, this, A), this;
    }
    identity() {
      var A;
      return (
        ((A = this)[0] = 1),
        (A[1] = 0),
        (A[2] = 0),
        (A[3] = 0),
        (A[4] = 0),
        (A[5] = 1),
        (A[6] = 0),
        (A[7] = 0),
        (A[8] = 0),
        (A[9] = 0),
        (A[10] = 1),
        (A[11] = 0),
        (A[12] = 0),
        (A[13] = 0),
        (A[14] = 0),
        (A[15] = 1),
        this
      );
    }
    copy(A) {
      var t, e;
      return (
        (e = A),
        ((t = this)[0] = e[0]),
        (t[1] = e[1]),
        (t[2] = e[2]),
        (t[3] = e[3]),
        (t[4] = e[4]),
        (t[5] = e[5]),
        (t[6] = e[6]),
        (t[7] = e[7]),
        (t[8] = e[8]),
        (t[9] = e[9]),
        (t[10] = e[10]),
        (t[11] = e[11]),
        (t[12] = e[12]),
        (t[13] = e[13]),
        (t[14] = e[14]),
        (t[15] = e[15]),
        this
      );
    }
    fromPerspective({ fov: A, aspect: t, near: e, far: i } = {}) {
      return (
        (function (A, t, e, i, r) {
          let n = 1 / Math.tan(t / 2),
            s = 1 / (i - r);
          (A[0] = n / e),
            (A[1] = 0),
            (A[2] = 0),
            (A[3] = 0),
            (A[4] = 0),
            (A[5] = n),
            (A[6] = 0),
            (A[7] = 0),
            (A[8] = 0),
            (A[9] = 0),
            (A[10] = (r + i) * s),
            (A[11] = -1),
            (A[12] = 0),
            (A[13] = 0),
            (A[14] = 2 * r * i * s),
            (A[15] = 0);
        })(this, A, t, e, i),
        this
      );
    }
    fromOrthogonal({ left: A, right: t, bottom: e, top: i, near: r, far: n }) {
      return (
        (function (A, t, e, i, r, n, s) {
          let a = 1 / (t - e),
            o = 1 / (i - r),
            h = 1 / (n - s);
          (A[0] = -2 * a),
            (A[1] = 0),
            (A[2] = 0),
            (A[3] = 0),
            (A[4] = 0),
            (A[5] = -2 * o),
            (A[6] = 0),
            (A[7] = 0),
            (A[8] = 0),
            (A[9] = 0),
            (A[10] = 2 * h),
            (A[11] = 0),
            (A[12] = (t + e) * a),
            (A[13] = (r + i) * o),
            (A[14] = (s + n) * h),
            (A[15] = 1);
        })(this, A, t, e, i, r, n),
        this
      );
    }
    fromQuaternion(A) {
      return (
        (function (A, t) {
          let e = t[0],
            i = t[1],
            r = t[2],
            n = t[3],
            s = e + e,
            a = i + i,
            o = r + r,
            h = e * s,
            l = i * s,
            c = i * a,
            g = r * s,
            u = r * a,
            d = r * o,
            p = n * s,
            f = n * a,
            m = n * o;
          (A[0] = 1 - c - d),
            (A[1] = l + m),
            (A[2] = g - f),
            (A[3] = 0),
            (A[4] = l - m),
            (A[5] = 1 - h - d),
            (A[6] = u + p),
            (A[7] = 0),
            (A[8] = g + f),
            (A[9] = u - p),
            (A[10] = 1 - h - c),
            (A[11] = 0),
            (A[12] = 0),
            (A[13] = 0),
            (A[14] = 0),
            (A[15] = 1);
        })(this, A),
        this
      );
    }
    setPosition(A) {
      return (this.x = A[0]), (this.y = A[1]), (this.z = A[2]), this;
    }
    inverse(A = this) {
      return (
        (function (A, t) {
          let e = t[0],
            i = t[1],
            r = t[2],
            n = t[3],
            s = t[4],
            a = t[5],
            o = t[6],
            h = t[7],
            l = t[8],
            c = t[9],
            g = t[10],
            u = t[11],
            d = t[12],
            p = t[13],
            f = t[14],
            m = t[15],
            E = e * a - i * s,
            x = e * o - r * s,
            I = e * h - n * s,
            R = i * o - r * a,
            v = i * h - n * a,
            C = r * h - n * o,
            y = l * p - c * d,
            B = l * f - g * d,
            F = l * m - u * d,
            M = c * f - g * p,
            w = c * m - u * p,
            Q = g * m - u * f,
            S = E * Q - x * w + I * M + R * F - v * B + C * y;
          S &&
            ((S = 1 / S),
            (A[0] = (a * Q - o * w + h * M) * S),
            (A[1] = (r * w - i * Q - n * M) * S),
            (A[2] = (p * C - f * v + m * R) * S),
            (A[3] = (g * v - c * C - u * R) * S),
            (A[4] = (o * F - s * Q - h * B) * S),
            (A[5] = (e * Q - r * F + n * B) * S),
            (A[6] = (f * I - d * C - m * x) * S),
            (A[7] = (l * C - g * I + u * x) * S),
            (A[8] = (s * w - a * F + h * y) * S),
            (A[9] = (i * F - e * w - n * y) * S),
            (A[10] = (d * v - p * I + m * E) * S),
            (A[11] = (c * I - l * v - u * E) * S),
            (A[12] = (a * B - s * M - o * y) * S),
            (A[13] = (e * M - i * B + r * y) * S),
            (A[14] = (p * x - d * R - f * E) * S),
            (A[15] = (l * R - c * x + g * E) * S));
        })(this, A),
        this
      );
    }
    compose(A, t, e) {
      return (
        (function (A, t, e, i) {
          let r = t[0],
            n = t[1],
            s = t[2],
            a = t[3],
            o = r + r,
            h = n + n,
            l = s + s,
            c = r * o,
            g = r * h,
            u = r * l,
            d = n * h,
            p = n * l,
            f = s * l,
            m = a * o,
            E = a * h,
            x = a * l,
            I = i[0],
            R = i[1],
            v = i[2];
          (A[0] = (1 - (d + f)) * I),
            (A[1] = (g + x) * I),
            (A[2] = (u - E) * I),
            (A[3] = 0),
            (A[4] = (g - x) * R),
            (A[5] = (1 - (c + f)) * R),
            (A[6] = (p + m) * R),
            (A[7] = 0),
            (A[8] = (u + E) * v),
            (A[9] = (p - m) * v),
            (A[10] = (1 - (c + d)) * v),
            (A[11] = 0),
            (A[12] = e[0]),
            (A[13] = e[1]),
            (A[14] = e[2]),
            (A[15] = 1);
        })(this, A, t, e),
        this
      );
    }
    getRotation(A) {
      return p(A, this), this;
    }
    getTranslation(A) {
      var t, e;
      return (
        (e = this), ((t = A)[0] = e[12]), (t[1] = e[13]), (t[2] = e[14]), this
      );
    }
    getScaling(A) {
      return d(A, this), this;
    }
    getMaxScaleOnAxis() {
      return (function (A) {
        let t = A[0],
          e = A[1],
          i = A[2],
          r = A[4],
          n = A[5],
          s = A[6],
          a = A[8],
          o = A[9],
          h = A[10];
        const l = t * t + e * e + i * i,
          c = r * r + n * n + s * s,
          g = a * a + o * o + h * h;
        return Math.sqrt(Math.max(l, c, g));
      })(this);
    }
    lookAt(A, t, e) {
      return (
        (function (A, t, e, i) {
          let r = t[0],
            n = t[1],
            s = t[2],
            a = i[0],
            o = i[1],
            h = i[2],
            l = r - e[0],
            c = n - e[1],
            g = s - e[2],
            u = l * l + c * c + g * g;
          0 === u
            ? (g = 1)
            : ((u = 1 / Math.sqrt(u)), (l *= u), (c *= u), (g *= u));
          let d = o * g - h * c,
            p = h * l - a * g,
            f = a * c - o * l;
          (u = d * d + p * p + f * f),
            0 === u &&
              (h ? (a += 1e-6) : o ? (h += 1e-6) : (o += 1e-6),
              (d = o * g - h * c),
              (p = h * l - a * g),
              (f = a * c - o * l),
              (u = d * d + p * p + f * f)),
            (u = 1 / Math.sqrt(u)),
            (d *= u),
            (p *= u),
            (f *= u),
            (A[0] = d),
            (A[1] = p),
            (A[2] = f),
            (A[3] = 0),
            (A[4] = c * f - g * p),
            (A[5] = g * d - l * f),
            (A[6] = l * p - c * d),
            (A[7] = 0),
            (A[8] = l),
            (A[9] = c),
            (A[10] = g),
            (A[11] = 0),
            (A[12] = r),
            (A[13] = n),
            (A[14] = s),
            (A[15] = 1);
        })(this, A, t, e),
        this
      );
    }
    determinant() {
      return (function (A) {
        let t = A[0],
          e = A[1],
          i = A[2],
          r = A[3],
          n = A[4],
          s = A[5],
          a = A[6],
          o = A[7],
          h = A[8],
          l = A[9],
          c = A[10],
          g = A[11],
          u = A[12],
          d = A[13],
          p = A[14],
          f = A[15];
        return (
          (t * s - e * n) * (c * f - g * p) -
          (t * a - i * n) * (l * f - g * d) +
          (t * o - r * n) * (l * p - c * d) +
          (e * a - i * s) * (h * f - g * u) -
          (e * o - r * s) * (h * p - c * u) +
          (i * o - r * a) * (h * d - l * u)
        );
      })(this);
    }
    fromArray(A, t = 0) {
      return (
        (this[0] = A[t]),
        (this[1] = A[t + 1]),
        (this[2] = A[t + 2]),
        (this[3] = A[t + 3]),
        (this[4] = A[t + 4]),
        (this[5] = A[t + 5]),
        (this[6] = A[t + 6]),
        (this[7] = A[t + 7]),
        (this[8] = A[t + 8]),
        (this[9] = A[t + 9]),
        (this[10] = A[t + 10]),
        (this[11] = A[t + 11]),
        (this[12] = A[t + 12]),
        (this[13] = A[t + 13]),
        (this[14] = A[t + 14]),
        (this[15] = A[t + 15]),
        this
      );
    }
    toArray(A = [], t = 0) {
      return (
        (A[t] = this[0]),
        (A[t + 1] = this[1]),
        (A[t + 2] = this[2]),
        (A[t + 3] = this[3]),
        (A[t + 4] = this[4]),
        (A[t + 5] = this[5]),
        (A[t + 6] = this[6]),
        (A[t + 7] = this[7]),
        (A[t + 8] = this[8]),
        (A[t + 9] = this[9]),
        (A[t + 10] = this[10]),
        (A[t + 11] = this[11]),
        (A[t + 12] = this[12]),
        (A[t + 13] = this[13]),
        (A[t + 14] = this[14]),
        (A[t + 15] = this[15]),
        A
      );
    }
  }
  const m = new f();
  class E extends Array {
    constructor(A = 0, t = A, e = A, i = "YXZ") {
      return super(A, t, e), (this.order = i), (this.onChange = () => {}), this;
    }
    get x() {
      return this[0];
    }
    get y() {
      return this[1];
    }
    get z() {
      return this[2];
    }
    set x(A) {
      (this[0] = A), this.onChange();
    }
    set y(A) {
      (this[1] = A), this.onChange();
    }
    set z(A) {
      (this[2] = A), this.onChange();
    }
    set(A, t = A, e = A) {
      return A.length
        ? this.copy(A)
        : ((this[0] = A), (this[1] = t), (this[2] = e), this.onChange(), this);
    }
    copy(A) {
      return (
        (this[0] = A[0]),
        (this[1] = A[1]),
        (this[2] = A[2]),
        this.onChange(),
        this
      );
    }
    reorder(A) {
      return (this.order = A), this.onChange(), this;
    }
    fromRotationMatrix(A, t = this.order) {
      return (
        (function (A, t, e = "YXZ") {
          "XYZ" === e
            ? ((A[1] = Math.asin(Math.min(Math.max(t[8], -1), 1))),
              Math.abs(t[8]) < 0.99999
                ? ((A[0] = Math.atan2(-t[9], t[10])),
                  (A[2] = Math.atan2(-t[4], t[0])))
                : ((A[0] = Math.atan2(t[6], t[5])), (A[2] = 0)))
            : "YXZ" === e
            ? ((A[0] = Math.asin(-Math.min(Math.max(t[9], -1), 1))),
              Math.abs(t[9]) < 0.99999
                ? ((A[1] = Math.atan2(t[8], t[10])),
                  (A[2] = Math.atan2(t[1], t[5])))
                : ((A[1] = Math.atan2(-t[2], t[0])), (A[2] = 0)))
            : "ZXY" === e
            ? ((A[0] = Math.asin(Math.min(Math.max(t[6], -1), 1))),
              Math.abs(t[6]) < 0.99999
                ? ((A[1] = Math.atan2(-t[2], t[10])),
                  (A[2] = Math.atan2(-t[4], t[5])))
                : ((A[1] = 0), (A[2] = Math.atan2(t[1], t[0]))))
            : "ZYX" === e
            ? ((A[1] = Math.asin(-Math.min(Math.max(t[2], -1), 1))),
              Math.abs(t[2]) < 0.99999
                ? ((A[0] = Math.atan2(t[6], t[10])),
                  (A[2] = Math.atan2(t[1], t[0])))
                : ((A[0] = 0), (A[2] = Math.atan2(-t[4], t[5]))))
            : "YZX" === e
            ? ((A[2] = Math.asin(Math.min(Math.max(t[1], -1), 1))),
              Math.abs(t[1]) < 0.99999
                ? ((A[0] = Math.atan2(-t[9], t[5])),
                  (A[1] = Math.atan2(-t[2], t[0])))
                : ((A[0] = 0), (A[1] = Math.atan2(t[8], t[10]))))
            : "XZY" === e &&
              ((A[2] = Math.asin(-Math.min(Math.max(t[4], -1), 1))),
              Math.abs(t[4]) < 0.99999
                ? ((A[0] = Math.atan2(t[6], t[5])),
                  (A[1] = Math.atan2(t[8], t[0])))
                : ((A[0] = Math.atan2(-t[9], t[10])), (A[1] = 0)));
        })(this, A, t),
        this
      );
    }
    fromQuaternion(A, t = this.order) {
      return m.fromQuaternion(A), this.fromRotationMatrix(m, t);
    }
    toArray(A = [], t = 0) {
      return (A[t] = this[0]), (A[t + 1] = this[1]), (A[t + 2] = this[2]), A;
    }
  }
  class x {
    constructor() {
      (this.parent = null),
        (this.children = []),
        (this.visible = !0),
        (this.matrix = new f()),
        (this.worldMatrix = new f()),
        (this.matrixAutoUpdate = !0),
        (this.position = new l()),
        (this.quaternion = new g()),
        (this.scale = new l(1)),
        (this.rotation = new E()),
        (this.up = new l(0, 1, 0)),
        (this.rotation.onChange = () =>
          this.quaternion.fromEuler(this.rotation)),
        (this.quaternion.onChange = () =>
          this.rotation.fromQuaternion(this.quaternion));
    }
    setParent(A, t = !0) {
      this.parent && A !== this.parent && this.parent.removeChild(this, !1),
        (this.parent = A),
        t && A && A.addChild(this, !1);
    }
    addChild(A, t = !0) {
      ~this.children.indexOf(A) || this.children.push(A),
        t && A.setParent(this, !1);
    }
    removeChild(A, t = !0) {
      ~this.children.indexOf(A) &&
        this.children.splice(this.children.indexOf(A), 1),
        t && A.setParent(null, !1);
    }
    updateMatrixWorld(A) {
      this.matrixAutoUpdate && this.updateMatrix(),
        (this.worldMatrixNeedsUpdate || A) &&
          (null === this.parent
            ? this.worldMatrix.copy(this.matrix)
            : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix),
          (this.worldMatrixNeedsUpdate = !1),
          (A = !0));
      for (let t = 0, e = this.children.length; t < e; t++)
        this.children[t].updateMatrixWorld(A);
    }
    updateMatrix() {
      this.matrix.compose(this.quaternion, this.position, this.scale),
        (this.worldMatrixNeedsUpdate = !0);
    }
    traverse(A) {
      if (!A(this))
        for (let t = 0, e = this.children.length; t < e; t++)
          this.children[t].traverse(A);
    }
    decompose() {
      this.matrix.getTranslation(this.position),
        this.matrix.getRotation(this.quaternion),
        this.matrix.getScaling(this.scale),
        this.rotation.fromQuaternion(this.quaternion);
    }
    lookAt(A, t = !1) {
      t
        ? this.matrix.lookAt(this.position, A, this.up)
        : this.matrix.lookAt(A, this.position, this.up),
        this.matrix.getRotation(this.quaternion),
        this.rotation.fromQuaternion(this.quaternion);
    }
  }
  const I = new f(),
    R = new l(),
    v = new l(),
    C = new Uint8Array(4);
  function y(A) {
    return 0 == (A & (A - 1));
  }
  let B = 1;
  class F {
    constructor(
      A,
      {
        image: t,
        target: e = A.TEXTURE_2D,
        type: i = A.UNSIGNED_BYTE,
        format: r = A.RGBA,
        internalFormat: n = r,
        wrapS: s = A.CLAMP_TO_EDGE,
        wrapT: a = A.CLAMP_TO_EDGE,
        generateMipmaps: o = !0,
        minFilter: h = o ? A.NEAREST_MIPMAP_LINEAR : A.LINEAR,
        magFilter: l = A.LINEAR,
        premultiplyAlpha: c = !1,
        unpackAlignment: g = 4,
        flipY: u = e == A.TEXTURE_2D,
        anisotropy: d = 0,
        level: p = 0,
        width: f,
        height: m = f,
      } = {}
    ) {
      (this.gl = A),
        (this.id = B++),
        (this.image = t),
        (this.target = e),
        (this.type = i),
        (this.format = r),
        (this.internalFormat = n),
        (this.minFilter = h),
        (this.magFilter = l),
        (this.wrapS = s),
        (this.wrapT = a),
        (this.generateMipmaps = o),
        (this.premultiplyAlpha = c),
        (this.unpackAlignment = g),
        (this.flipY = u),
        (this.anisotropy = Math.min(
          d,
          this.gl.renderer.parameters.maxAnisotropy
        )),
        (this.level = p),
        (this.width = f),
        (this.height = m),
        (this.texture = this.gl.createTexture()),
        (this.store = { image: null }),
        (this.glState = this.gl.renderer.state),
        (this.state = {}),
        (this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR),
        (this.state.magFilter = this.gl.LINEAR),
        (this.state.wrapS = this.gl.REPEAT),
        (this.state.wrapT = this.gl.REPEAT),
        (this.state.anisotropy = 0);
    }
    bind() {
      this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id &&
        (this.gl.bindTexture(this.target, this.texture),
        (this.glState.textureUnits[this.glState.activeTextureUnit] = this.id));
    }
    update(A = 0) {
      const t = !(this.image === this.store.image && !this.needsUpdate);
      if (
        ((t || this.glState.textureUnits[A] !== this.id) &&
          (this.gl.renderer.activeTexture(A), this.bind()),
        t)
      ) {
        if (
          ((this.needsUpdate = !1),
          this.flipY !== this.glState.flipY &&
            (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY),
            (this.glState.flipY = this.flipY)),
          this.premultiplyAlpha !== this.glState.premultiplyAlpha &&
            (this.gl.pixelStorei(
              this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
              this.premultiplyAlpha
            ),
            (this.glState.premultiplyAlpha = this.premultiplyAlpha)),
          this.unpackAlignment !== this.glState.unpackAlignment &&
            (this.gl.pixelStorei(
              this.gl.UNPACK_ALIGNMENT,
              this.unpackAlignment
            ),
            (this.glState.unpackAlignment = this.unpackAlignment)),
          this.minFilter !== this.state.minFilter &&
            (this.gl.texParameteri(
              this.target,
              this.gl.TEXTURE_MIN_FILTER,
              this.minFilter
            ),
            (this.state.minFilter = this.minFilter)),
          this.magFilter !== this.state.magFilter &&
            (this.gl.texParameteri(
              this.target,
              this.gl.TEXTURE_MAG_FILTER,
              this.magFilter
            ),
            (this.state.magFilter = this.magFilter)),
          this.wrapS !== this.state.wrapS &&
            (this.gl.texParameteri(
              this.target,
              this.gl.TEXTURE_WRAP_S,
              this.wrapS
            ),
            (this.state.wrapS = this.wrapS)),
          this.wrapT !== this.state.wrapT &&
            (this.gl.texParameteri(
              this.target,
              this.gl.TEXTURE_WRAP_T,
              this.wrapT
            ),
            (this.state.wrapT = this.wrapT)),
          this.anisotropy &&
            this.anisotropy !== this.state.anisotropy &&
            (this.gl.texParameterf(
              this.target,
              this.gl.renderer.getExtension("EXT_texture_filter_anisotropic")
                .TEXTURE_MAX_ANISOTROPY_EXT,
              this.anisotropy
            ),
            (this.state.anisotropy = this.anisotropy)),
          this.image)
        ) {
          if (
            (this.image.width &&
              ((this.width = this.image.width),
              (this.height = this.image.height)),
            this.target === this.gl.TEXTURE_CUBE_MAP)
          )
            for (let A = 0; A < 6; A++)
              this.gl.texImage2D(
                this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + A,
                this.level,
                this.internalFormat,
                this.format,
                this.type,
                this.image[A]
              );
          else if (ArrayBuffer.isView(this.image))
            this.gl.texImage2D(
              this.target,
              this.level,
              this.internalFormat,
              this.width,
              this.height,
              0,
              this.format,
              this.type,
              this.image
            );
          else if (this.image.isCompressedTexture)
            for (let A = 0; A < this.image.length; A++)
              this.gl.compressedTexImage2D(
                this.target,
                A,
                this.internalFormat,
                this.image[A].width,
                this.image[A].height,
                0,
                this.image[A].data
              );
          else
            this.gl.texImage2D(
              this.target,
              this.level,
              this.internalFormat,
              this.format,
              this.type,
              this.image
            );
          this.generateMipmaps &&
            (this.gl.renderer.isWebgl2 ||
            (y(this.image.width) && y(this.image.height))
              ? this.gl.generateMipmap(this.target)
              : ((this.generateMipmaps = !1),
                (this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE),
                (this.minFilter = this.gl.LINEAR))),
            this.onUpdate && this.onUpdate();
        } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
          for (let A = 0; A < 6; A++)
            this.gl.texImage2D(
              this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + A,
              0,
              this.gl.RGBA,
              1,
              1,
              0,
              this.gl.RGBA,
              this.gl.UNSIGNED_BYTE,
              C
            );
        else
          this.width
            ? this.gl.texImage2D(
                this.target,
                this.level,
                this.internalFormat,
                this.width,
                this.height,
                0,
                this.format,
                this.type,
                null
              )
            : this.gl.texImage2D(
                this.target,
                0,
                this.gl.RGBA,
                1,
                1,
                0,
                this.gl.RGBA,
                this.gl.UNSIGNED_BYTE,
                C
              );
        this.store.image = this.image;
      }
    }
  }
  function M(A, t, e) {
    return (A[0] = t[0] + e[0]), (A[1] = t[1] + e[1]), A;
  }
  function w(A, t, e) {
    return (A[0] = t[0] - e[0]), (A[1] = t[1] - e[1]), A;
  }
  function Q(A, t, e) {
    return (A[0] = t[0] * e), (A[1] = t[1] * e), A;
  }
  function S(A) {
    var t = A[0],
      e = A[1];
    return Math.sqrt(t * t + e * e);
  }
  function b(A, t) {
    return A[0] * t[1] - A[1] * t[0];
  }
  class U extends Array {
    constructor(A = 0, t = A) {
      return super(A, t), this;
    }
    get x() {
      return this[0];
    }
    get y() {
      return this[1];
    }
    set x(A) {
      this[0] = A;
    }
    set y(A) {
      this[1] = A;
    }
    set(A, t = A) {
      return A.length
        ? this.copy(A)
        : ((function (A, t, e) {
            (A[0] = t), (A[1] = e);
          })(this, A, t),
          this);
    }
    copy(A) {
      var t, e;
      return (e = A), ((t = this)[0] = e[0]), (t[1] = e[1]), this;
    }
    add(A, t) {
      return t ? M(this, A, t) : M(this, this, A), this;
    }
    sub(A, t) {
      return t ? w(this, A, t) : w(this, this, A), this;
    }
    multiply(A) {
      var t, e;
      return (
        A.length
          ? (this,
            (e = A),
            ((t = this)[0] = this[0] * e[0]),
            (t[1] = this[1] * e[1]))
          : Q(this, this, A),
        this
      );
    }
    divide(A) {
      var t, e;
      return (
        A.length
          ? (this,
            (e = A),
            ((t = this)[0] = this[0] / e[0]),
            (t[1] = this[1] / e[1]))
          : Q(this, this, 1 / A),
        this
      );
    }
    inverse(A = this) {
      var t, e;
      return (e = A), ((t = this)[0] = 1 / e[0]), (t[1] = 1 / e[1]), this;
    }
    len() {
      return S(this);
    }
    distance(A) {
      return A
        ? (this,
          (e = (t = A)[0] - this[0]),
          (i = t[1] - this[1]),
          Math.sqrt(e * e + i * i))
        : S(this);
      var t, e, i;
    }
    squaredLen() {
      return this.squaredDistance();
    }
    squaredDistance(A) {
      return A
        ? (this, (e = (t = A)[0] - this[0]) * e + (i = t[1] - this[1]) * i)
        : (function (A) {
            var t = A[0],
              e = A[1];
            return t * t + e * e;
          })(this);
      var t, e, i;
    }
    negate(A = this) {
      var t, e;
      return (e = A), ((t = this)[0] = -e[0]), (t[1] = -e[1]), this;
    }
    cross(A, t) {
      return t ? b(A, t) : b(this, A);
    }
    scale(A) {
      return Q(this, this, A), this;
    }
    normalize() {
      var A, t, e, i;
      return (
        this,
        (i = (t = (A = this)[0]) * t + (e = A[1]) * e) > 0 &&
          (i = 1 / Math.sqrt(i)),
        (this[0] = A[0] * i),
        (this[1] = A[1] * i),
        this
      );
    }
    dot(A) {
      return (t = A), this[0] * t[0] + this[1] * t[1];
      var t;
    }
    equals(A) {
      return (t = A), this[0] === t[0] && this[1] === t[1];
      var t;
    }
    applyMatrix3(A) {
      var t, e, i;
      return (
        this,
        (t = A),
        (e = this[0]),
        (i = this[1]),
        (this[0] = t[0] * e + t[3] * i + t[6]),
        (this[1] = t[1] * e + t[4] * i + t[7]),
        this
      );
    }
    applyMatrix4(A) {
      return (
        (function (A, t, e) {
          let i = t[0],
            r = t[1];
          (A[0] = e[0] * i + e[4] * r + e[12]),
            (A[1] = e[1] * i + e[5] * r + e[13]);
        })(this, this, A),
        this
      );
    }
    lerp(A, t) {
      return (
        (function (A, t, e, i) {
          var r = t[0],
            n = t[1];
          (A[0] = r + i * (e[0] - r)), (A[1] = n + i * (e[1] - n));
        })(this, this, A, t),
        this
      );
    }
    clone() {
      return new U(this[0], this[1]);
    }
    fromArray(A, t = 0) {
      return (this[0] = A[t]), (this[1] = A[t + 1]), this;
    }
    toArray(A = [], t = 0) {
      return (A[t] = this[0]), (A[t + 1] = this[1]), A;
    }
  }
  const L = -1,
    P = new l(),
    j = new U(),
    K = new U();
  function T(A, t, e) {
    let i = t[0],
      r = t[1],
      n = t[2],
      s = t[3],
      a = t[4],
      o = t[5],
      h = t[6],
      l = t[7],
      c = t[8],
      g = e[0],
      u = e[1],
      d = e[2],
      p = e[3],
      f = e[4],
      m = e[5],
      E = e[6],
      x = e[7],
      I = e[8];
    return (
      (A[0] = g * i + u * s + d * h),
      (A[1] = g * r + u * a + d * l),
      (A[2] = g * n + u * o + d * c),
      (A[3] = p * i + f * s + m * h),
      (A[4] = p * r + f * a + m * l),
      (A[5] = p * n + f * o + m * c),
      (A[6] = E * i + x * s + I * h),
      (A[7] = E * r + x * a + I * l),
      (A[8] = E * n + x * o + I * c),
      A
    );
  }
  class q extends Array {
    constructor(A = 1, t = 0, e = 0, i = 0, r = 1, n = 0, s = 0, a = 0, o = 1) {
      return super(A, t, e, i, r, n, s, a, o), this;
    }
    set(A, t, e, i, r, n, s, a, o) {
      return A.length
        ? this.copy(A)
        : ((function (A, t, e, i, r, n, s, a, o, h) {
            (A[0] = t),
              (A[1] = e),
              (A[2] = i),
              (A[3] = r),
              (A[4] = n),
              (A[5] = s),
              (A[6] = a),
              (A[7] = o),
              (A[8] = h);
          })(this, A, t, e, i, r, n, s, a, o),
          this);
    }
    translate(A, t = this) {
      return (
        (function (A, t, e) {
          let i = t[0],
            r = t[1],
            n = t[2],
            s = t[3],
            a = t[4],
            o = t[5],
            h = t[6],
            l = t[7],
            c = t[8],
            g = e[0],
            u = e[1];
          (A[0] = i),
            (A[1] = r),
            (A[2] = n),
            (A[3] = s),
            (A[4] = a),
            (A[5] = o),
            (A[6] = g * i + u * s + h),
            (A[7] = g * r + u * a + l),
            (A[8] = g * n + u * o + c);
        })(this, t, A),
        this
      );
    }
    rotate(A, t = this) {
      return (
        (function (A, t, e) {
          let i = t[0],
            r = t[1],
            n = t[2],
            s = t[3],
            a = t[4],
            o = t[5],
            h = t[6],
            l = t[7],
            c = t[8],
            g = Math.sin(e),
            u = Math.cos(e);
          (A[0] = u * i + g * s),
            (A[1] = u * r + g * a),
            (A[2] = u * n + g * o),
            (A[3] = u * s - g * i),
            (A[4] = u * a - g * r),
            (A[5] = u * o - g * n),
            (A[6] = h),
            (A[7] = l),
            (A[8] = c);
        })(this, t, A),
        this
      );
    }
    scale(A, t = this) {
      return (
        (function (A, t, e) {
          let i = e[0],
            r = e[1];
          (A[0] = i * t[0]),
            (A[1] = i * t[1]),
            (A[2] = i * t[2]),
            (A[3] = r * t[3]),
            (A[4] = r * t[4]),
            (A[5] = r * t[5]),
            (A[6] = t[6]),
            (A[7] = t[7]),
            (A[8] = t[8]);
        })(this, t, A),
        this
      );
    }
    multiply(A, t) {
      return t ? T(this, A, t) : T(this, this, A), this;
    }
    identity() {
      var A;
      return (
        ((A = this)[0] = 1),
        (A[1] = 0),
        (A[2] = 0),
        (A[3] = 0),
        (A[4] = 1),
        (A[5] = 0),
        (A[6] = 0),
        (A[7] = 0),
        (A[8] = 1),
        this
      );
    }
    copy(A) {
      var t, e;
      return (
        (e = A),
        ((t = this)[0] = e[0]),
        (t[1] = e[1]),
        (t[2] = e[2]),
        (t[3] = e[3]),
        (t[4] = e[4]),
        (t[5] = e[5]),
        (t[6] = e[6]),
        (t[7] = e[7]),
        (t[8] = e[8]),
        this
      );
    }
    fromMatrix4(A) {
      var t, e;
      return (
        (e = A),
        ((t = this)[0] = e[0]),
        (t[1] = e[1]),
        (t[2] = e[2]),
        (t[3] = e[4]),
        (t[4] = e[5]),
        (t[5] = e[6]),
        (t[6] = e[8]),
        (t[7] = e[9]),
        (t[8] = e[10]),
        this
      );
    }
    fromQuaternion(A) {
      return (
        (function (A, t) {
          let e = t[0],
            i = t[1],
            r = t[2],
            n = t[3],
            s = e + e,
            a = i + i,
            o = r + r,
            h = e * s,
            l = i * s,
            c = i * a,
            g = r * s,
            u = r * a,
            d = r * o,
            p = n * s,
            f = n * a,
            m = n * o;
          (A[0] = 1 - c - d),
            (A[3] = l - m),
            (A[6] = g + f),
            (A[1] = l + m),
            (A[4] = 1 - h - d),
            (A[7] = u - p),
            (A[2] = g - f),
            (A[5] = u + p),
            (A[8] = 1 - h - c);
        })(this, A),
        this
      );
    }
    fromBasis(A, t, e) {
      return (
        this.set(A[0], A[1], A[2], t[0], t[1], t[2], e[0], e[1], e[2]), this
      );
    }
    inverse(A = this) {
      return (
        (function (A, t) {
          let e = t[0],
            i = t[1],
            r = t[2],
            n = t[3],
            s = t[4],
            a = t[5],
            o = t[6],
            h = t[7],
            l = t[8],
            c = l * s - a * h,
            g = -l * n + a * o,
            u = h * n - s * o,
            d = e * c + i * g + r * u;
          d &&
            ((d = 1 / d),
            (A[0] = c * d),
            (A[1] = (-l * i + r * h) * d),
            (A[2] = (a * i - r * s) * d),
            (A[3] = g * d),
            (A[4] = (l * e - r * o) * d),
            (A[5] = (-a * e + r * n) * d),
            (A[6] = u * d),
            (A[7] = (-h * e + i * o) * d),
            (A[8] = (s * e - i * n) * d));
        })(this, A),
        this
      );
    }
    getNormalMatrix(A) {
      return (
        (function (A, t) {
          let e = t[0],
            i = t[1],
            r = t[2],
            n = t[3],
            s = t[4],
            a = t[5],
            o = t[6],
            h = t[7],
            l = t[8],
            c = t[9],
            g = t[10],
            u = t[11],
            d = t[12],
            p = t[13],
            f = t[14],
            m = t[15],
            E = e * a - i * s,
            x = e * o - r * s,
            I = e * h - n * s,
            R = i * o - r * a,
            v = i * h - n * a,
            C = r * h - n * o,
            y = l * p - c * d,
            B = l * f - g * d,
            F = l * m - u * d,
            M = c * f - g * p,
            w = c * m - u * p,
            Q = g * m - u * f,
            S = E * Q - x * w + I * M + R * F - v * B + C * y;
          S &&
            ((S = 1 / S),
            (A[0] = (a * Q - o * w + h * M) * S),
            (A[1] = (o * F - s * Q - h * B) * S),
            (A[2] = (s * w - a * F + h * y) * S),
            (A[3] = (r * w - i * Q - n * M) * S),
            (A[4] = (e * Q - r * F + n * B) * S),
            (A[5] = (i * F - e * w - n * y) * S),
            (A[6] = (p * C - f * v + m * R) * S),
            (A[7] = (f * I - d * C - m * x) * S),
            (A[8] = (d * v - p * I + m * E) * S));
        })(this, A),
        this
      );
    }
  }
  let Y = 0;
  class D extends x {
    constructor(
      A,
      {
        geometry: t,
        program: e,
        mode: i = A.TRIANGLES,
        frustumCulled: r = !0,
        renderOrder: n = 0,
      } = {}
    ) {
      super(),
        A.canvas || console.error("gl not passed as first argument to Mesh"),
        (this.gl = A),
        (this.id = Y++),
        (this.geometry = t),
        (this.program = e),
        (this.mode = i),
        (this.frustumCulled = r),
        (this.renderOrder = n),
        (this.modelViewMatrix = new f()),
        (this.normalMatrix = new q()),
        (this.beforeRenderCallbacks = []),
        (this.afterRenderCallbacks = []);
    }
    onBeforeRender(A) {
      return this.beforeRenderCallbacks.push(A), this;
    }
    onAfterRender(A) {
      return this.afterRenderCallbacks.push(A), this;
    }
    draw({ camera: A } = {}) {
      this.beforeRenderCallbacks.forEach(
        (t) => t && t({ mesh: this, camera: A })
      ),
        A &&
          (this.program.uniforms.modelMatrix ||
            Object.assign(this.program.uniforms, {
              modelMatrix: { value: null },
              viewMatrix: { value: null },
              modelViewMatrix: { value: null },
              normalMatrix: { value: null },
              projectionMatrix: { value: null },
              cameraPosition: { value: null },
            }),
          (this.program.uniforms.projectionMatrix.value = A.projectionMatrix),
          (this.program.uniforms.cameraPosition.value = A.worldPosition),
          (this.program.uniforms.viewMatrix.value = A.viewMatrix),
          this.modelViewMatrix.multiply(A.viewMatrix, this.worldMatrix),
          this.normalMatrix.getNormalMatrix(this.modelViewMatrix),
          (this.program.uniforms.modelMatrix.value = this.worldMatrix),
          (this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix),
          (this.program.uniforms.normalMatrix.value = this.normalMatrix));
      let t = this.program.cullFace && this.worldMatrix.determinant() < 0;
      this.program.use({ flipFaces: t }),
        this.geometry.draw({ mode: this.mode, program: this.program }),
        this.afterRenderCallbacks.forEach(
          (t) => t && t({ mesh: this, camera: A })
        );
    }
  }
  const G = new l();
  let V = 1,
    X = 1,
    z = !1;
  class O {
    constructor(A, t = {}) {
      A.canvas || console.error("gl not passed as first argument to Geometry"),
        (this.gl = A),
        (this.attributes = t),
        (this.id = V++),
        (this.VAOs = {}),
        (this.drawRange = { start: 0, count: 0 }),
        (this.instancedCount = 0),
        this.gl.renderer.bindVertexArray(null),
        (this.gl.renderer.currentGeometry = null),
        (this.glState = this.gl.renderer.state);
      for (let A in t) this.addAttribute(A, t[A]);
    }
    addAttribute(A, t) {
      if (
        ((this.attributes[A] = t),
        (t.id = X++),
        (t.size = t.size || 1),
        (t.type =
          t.type ||
          (t.data.constructor === Float32Array
            ? this.gl.FLOAT
            : t.data.constructor === Uint16Array
            ? this.gl.UNSIGNED_SHORT
            : this.gl.UNSIGNED_INT)),
        (t.target =
          "index" === A ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER),
        (t.normalized = t.normalized || !1),
        (t.stride = t.stride || 0),
        (t.offset = t.offset || 0),
        (t.count =
          t.count ||
          (t.stride ? t.data.byteLength / t.stride : t.data.length / t.size)),
        (t.divisor = t.instanced || 0),
        (t.needsUpdate = !1),
        (t.usage = t.usage || this.gl.STATIC_DRAW),
        t.buffer || this.updateAttribute(t),
        t.divisor)
      ) {
        if (
          ((this.isInstanced = !0),
          this.instancedCount && this.instancedCount !== t.count * t.divisor)
        )
          return (
            console.warn(
              "geometry has multiple instanced buffers of different length"
            ),
            (this.instancedCount = Math.min(
              this.instancedCount,
              t.count * t.divisor
            ))
          );
        this.instancedCount = t.count * t.divisor;
      } else
        "index" === A
          ? (this.drawRange.count = t.count)
          : this.attributes.index ||
            (this.drawRange.count = Math.max(this.drawRange.count, t.count));
    }
    updateAttribute(A) {
      const t = !A.buffer;
      t && (A.buffer = this.gl.createBuffer()),
        this.glState.boundBuffer !== A.buffer &&
          (this.gl.bindBuffer(A.target, A.buffer),
          (this.glState.boundBuffer = A.buffer)),
        t
          ? this.gl.bufferData(A.target, A.data, A.usage)
          : this.gl.bufferSubData(A.target, 0, A.data),
        (A.needsUpdate = !1);
    }
    setIndex(A) {
      this.addAttribute("index", A);
    }
    setDrawRange(A, t) {
      (this.drawRange.start = A), (this.drawRange.count = t);
    }
    setInstancedCount(A) {
      this.instancedCount = A;
    }
    createVAO(A) {
      (this.VAOs[A.attributeOrder] = this.gl.renderer.createVertexArray()),
        this.gl.renderer.bindVertexArray(this.VAOs[A.attributeOrder]),
        this.bindAttributes(A);
    }
    bindAttributes(A) {
      A.attributeLocations.forEach((A, { name: t, type: e }) => {
        if (!this.attributes[t])
          return void console.warn(`active attribute ${t} not being supplied`);
        const i = this.attributes[t];
        this.gl.bindBuffer(i.target, i.buffer),
          (this.glState.boundBuffer = i.buffer);
        let r = 1;
        35674 === e && (r = 2), 35675 === e && (r = 3), 35676 === e && (r = 4);
        const n = i.size / r,
          s = 1 === r ? 0 : r * r * r,
          a = 1 === r ? 0 : r * r;
        for (let t = 0; t < r; t++)
          this.gl.vertexAttribPointer(
            A + t,
            n,
            i.type,
            i.normalized,
            i.stride + s,
            i.offset + t * a
          ),
            this.gl.enableVertexAttribArray(A + t),
            this.gl.renderer.vertexAttribDivisor(A + t, i.divisor);
      }),
        this.attributes.index &&
          this.gl.bindBuffer(
            this.gl.ELEMENT_ARRAY_BUFFER,
            this.attributes.index.buffer
          );
    }
    draw({ program: A, mode: t = this.gl.TRIANGLES }) {
      this.gl.renderer.currentGeometry !== `${this.id}_${A.attributeOrder}` &&
        (this.VAOs[A.attributeOrder] || this.createVAO(A),
        this.gl.renderer.bindVertexArray(this.VAOs[A.attributeOrder]),
        (this.gl.renderer.currentGeometry = `${this.id}_${A.attributeOrder}`)),
        A.attributeLocations.forEach((A, { name: t }) => {
          const e = this.attributes[t];
          e.needsUpdate && this.updateAttribute(e);
        }),
        this.isInstanced
          ? this.attributes.index
            ? this.gl.renderer.drawElementsInstanced(
                t,
                this.drawRange.count,
                this.attributes.index.type,
                this.attributes.index.offset + 2 * this.drawRange.start,
                this.instancedCount
              )
            : this.gl.renderer.drawArraysInstanced(
                t,
                this.drawRange.start,
                this.drawRange.count,
                this.instancedCount
              )
          : this.attributes.index
          ? this.gl.drawElements(
              t,
              this.drawRange.count,
              this.attributes.index.type,
              this.attributes.index.offset + 2 * this.drawRange.start
            )
          : this.gl.drawArrays(t, this.drawRange.start, this.drawRange.count);
    }
    getPosition() {
      const A = this.attributes.position;
      return A.data
        ? A
        : z
        ? void 0
        : (console.warn("No position buffer data found to compute bounds"),
          (z = !0));
    }
    computeBoundingBox(A) {
      A || (A = this.getPosition());
      const t = A.data,
        e = A.stride ? A.stride / t.BYTES_PER_ELEMENT : A.size;
      this.bounds ||
        (this.bounds = {
          min: new l(),
          max: new l(),
          center: new l(),
          scale: new l(),
          radius: 1 / 0,
        });
      const i = this.bounds.min,
        r = this.bounds.max,
        n = this.bounds.center,
        s = this.bounds.scale;
      i.set(1 / 0), r.set(-1 / 0);
      for (let A = 0, n = t.length; A < n; A += e) {
        const e = t[A],
          n = t[A + 1],
          s = t[A + 2];
        (i.x = Math.min(e, i.x)),
          (i.y = Math.min(n, i.y)),
          (i.z = Math.min(s, i.z)),
          (r.x = Math.max(e, r.x)),
          (r.y = Math.max(n, r.y)),
          (r.z = Math.max(s, r.z));
      }
      s.sub(r, i), n.add(i, r).divide(2);
    }
    computeBoundingSphere(A) {
      A || (A = this.getPosition());
      const t = A.data,
        e = A.stride ? A.stride / t.BYTES_PER_ELEMENT : A.size;
      this.bounds || this.computeBoundingBox(A);
      let i = 0;
      for (let A = 0, r = t.length; A < r; A += e)
        G.fromArray(t, A),
          (i = Math.max(i, this.bounds.center.squaredDistance(G)));
      this.bounds.radius = Math.sqrt(i);
    }
    remove() {
      for (let A in this.VAOs)
        this.gl.renderer.deleteVertexArray(this.VAOs[A]), delete this.VAOs[A];
      for (let A in this.attributes)
        this.gl.deleteBuffer(this.attributes[A].buffer),
          delete this.attributes[A];
    }
  }
  let k = 1;
  const J = {};
  class H {
    constructor(
      A,
      {
        vertex: t,
        fragment: e,
        uniforms: i = {},
        transparent: r = !1,
        cullFace: n = A.BACK,
        frontFace: s = A.CCW,
        depthTest: a = !0,
        depthWrite: o = !0,
        depthFunc: h = A.LESS,
      } = {}
    ) {
      A.canvas || console.error("gl not passed as fist argument to Program"),
        (this.gl = A),
        (this.uniforms = i),
        (this.id = k++),
        t || console.warn("vertex shader not supplied"),
        e || console.warn("fragment shader not supplied"),
        (this.transparent = r),
        (this.cullFace = n),
        (this.frontFace = s),
        (this.depthTest = a),
        (this.depthWrite = o),
        (this.depthFunc = h),
        (this.blendFunc = {}),
        (this.blendEquation = {}),
        this.transparent &&
          !this.blendFunc.src &&
          (this.gl.renderer.premultipliedAlpha
            ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
            : this.setBlendFunc(
                this.gl.SRC_ALPHA,
                this.gl.ONE_MINUS_SRC_ALPHA
              ));
      const l = A.createShader(A.VERTEX_SHADER);
      A.shaderSource(l, t),
        A.compileShader(l),
        "" !== A.getShaderInfoLog(l) &&
          console.warn(`${A.getShaderInfoLog(l)}\nVertex Shader\n${N(t)}`);
      const c = A.createShader(A.FRAGMENT_SHADER);
      if (
        (A.shaderSource(c, e),
        A.compileShader(c),
        "" !== A.getShaderInfoLog(c) &&
          console.warn(`${A.getShaderInfoLog(c)}\nFragment Shader\n${N(e)}`),
        (this.program = A.createProgram()),
        A.attachShader(this.program, l),
        A.attachShader(this.program, c),
        A.linkProgram(this.program),
        !A.getProgramParameter(this.program, A.LINK_STATUS))
      )
        return console.warn(A.getProgramInfoLog(this.program));
      A.deleteShader(l), A.deleteShader(c), (this.uniformLocations = new Map());
      let g = A.getProgramParameter(this.program, A.ACTIVE_UNIFORMS);
      for (let t = 0; t < g; t++) {
        let e = A.getActiveUniform(this.program, t);
        this.uniformLocations.set(
          e,
          A.getUniformLocation(this.program, e.name)
        );
        const i = e.name.match(/(\w+)/g);
        (e.uniformName = i[0]),
          3 === i.length
            ? ((e.isStructArray = !0),
              (e.structIndex = Number(i[1])),
              (e.structProperty = i[2]))
            : 2 === i.length &&
              isNaN(Number(i[1])) &&
              ((e.isStruct = !0), (e.structProperty = i[1]));
      }
      this.attributeLocations = new Map();
      const u = [],
        d = A.getProgramParameter(this.program, A.ACTIVE_ATTRIBUTES);
      for (let t = 0; t < d; t++) {
        const e = A.getActiveAttrib(this.program, t),
          i = A.getAttribLocation(this.program, e.name);
        (u[i] = e.name), this.attributeLocations.set(e, i);
      }
      this.attributeOrder = u.join("");
    }
    setBlendFunc(A, t, e, i) {
      (this.blendFunc.src = A),
        (this.blendFunc.dst = t),
        (this.blendFunc.srcAlpha = e),
        (this.blendFunc.dstAlpha = i),
        A && (this.transparent = !0);
    }
    setBlendEquation(A, t) {
      (this.blendEquation.modeRGB = A), (this.blendEquation.modeAlpha = t);
    }
    applyState() {
      this.depthTest
        ? this.gl.renderer.enable(this.gl.DEPTH_TEST)
        : this.gl.renderer.disable(this.gl.DEPTH_TEST),
        this.cullFace
          ? this.gl.renderer.enable(this.gl.CULL_FACE)
          : this.gl.renderer.disable(this.gl.CULL_FACE),
        this.blendFunc.src
          ? this.gl.renderer.enable(this.gl.BLEND)
          : this.gl.renderer.disable(this.gl.BLEND),
        this.cullFace && this.gl.renderer.setCullFace(this.cullFace),
        this.gl.renderer.setFrontFace(this.frontFace),
        this.gl.renderer.setDepthMask(this.depthWrite),
        this.gl.renderer.setDepthFunc(this.depthFunc),
        this.blendFunc.src &&
          this.gl.renderer.setBlendFunc(
            this.blendFunc.src,
            this.blendFunc.dst,
            this.blendFunc.srcAlpha,
            this.blendFunc.dstAlpha
          ),
        this.gl.renderer.setBlendEquation(
          this.blendEquation.modeRGB,
          this.blendEquation.modeAlpha
        );
    }
    use({ flipFaces: A = !1 } = {}) {
      let t = -1;
      this.gl.renderer.currentProgram === this.id ||
        (this.gl.useProgram(this.program),
        (this.gl.renderer.currentProgram = this.id)),
        this.uniformLocations.forEach((A, e) => {
          let i = e.uniformName,
            r = this.uniforms[i];
          if (
            (e.isStruct &&
              ((r = r[e.structProperty]), (i += `.${e.structProperty}`)),
            e.isStructArray &&
              ((r = r[e.structIndex][e.structProperty]),
              (i += `[${e.structIndex}].${e.structProperty}`)),
            !r)
          )
            return _(`Active uniform ${i} has not been supplied`);
          if (r && void 0 === r.value)
            return _(`${i} uniform is missing a value parameter`);
          if (r.value.texture)
            return (t += 1), r.value.update(t), W(this.gl, e.type, A, t);
          if (r.value.length && r.value[0].texture) {
            const i = [];
            return (
              r.value.forEach((A) => {
                (t += 1), A.update(t), i.push(t);
              }),
              W(this.gl, e.type, A, i)
            );
          }
          W(this.gl, e.type, A, r.value);
        }),
        this.applyState(),
        A &&
          this.gl.renderer.setFrontFace(
            this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW
          );
    }
    remove() {
      this.gl.deleteProgram(this.program);
    }
  }
  function W(A, t, e, i) {
    i = i.length
      ? (function (A) {
          const t = A.length,
            e = A[0].length;
          if (void 0 === e) return A;
          const i = t * e;
          let r = J[i];
          r || (J[i] = r = new Float32Array(i));
          for (let i = 0; i < t; i++) r.set(A[i], i * e);
          return r;
        })(i)
      : i;
    const r = A.renderer.state.uniformLocations.get(e);
    if (i.length)
      if (void 0 === r || r.length !== i.length)
        A.renderer.state.uniformLocations.set(e, i.slice(0));
      else {
        if (
          (function (A, t) {
            if (A.length !== t.length) return !1;
            for (let e = 0, i = A.length; e < i; e++)
              if (A[e] !== t[e]) return !1;
            return !0;
          })(r, i)
        )
          return;
        r.set
          ? r.set(i)
          : (function (A, t) {
              for (let e = 0, i = A.length; e < i; e++) A[e] = t[e];
            })(r, i),
          A.renderer.state.uniformLocations.set(e, r);
      }
    else {
      if (r === i) return;
      A.renderer.state.uniformLocations.set(e, i);
    }
    switch (t) {
      case 5126:
        return i.length ? A.uniform1fv(e, i) : A.uniform1f(e, i);
      case 35664:
        return A.uniform2fv(e, i);
      case 35665:
        return A.uniform3fv(e, i);
      case 35666:
        return A.uniform4fv(e, i);
      case 35670:
      case 5124:
      case 35678:
      case 35680:
        return i.length ? A.uniform1iv(e, i) : A.uniform1i(e, i);
      case 35671:
      case 35667:
        return A.uniform2iv(e, i);
      case 35672:
      case 35668:
        return A.uniform3iv(e, i);
      case 35673:
      case 35669:
        return A.uniform4iv(e, i);
      case 35674:
        return A.uniformMatrix2fv(e, !1, i);
      case 35675:
        return A.uniformMatrix3fv(e, !1, i);
      case 35676:
        return A.uniformMatrix4fv(e, !1, i);
    }
  }
  function N(A) {
    let t = A.split("\n");
    for (let A = 0; A < t.length; A++) t[A] = A + 1 + ": " + t[A];
    return t.join("\n");
  }
  let Z = 0;
  function _(A) {
    Z > 100 ||
      (console.warn(A),
      Z++,
      Z > 100 &&
        console.warn("More than 100 program warnings - stopping logs."));
  }
  const $ = new (class {
      #A = {};
      on = (A, t) => {
        this.#A[A] || (this.#A[A] = []), this.#A[A].push(t);
      };
      off = (A, t) => {
        const e = this.#A[A];
        if (e) {
          let A = e.indexOf(t);
          -1 !== A && e.splice(A, 1);
        }
      };
      dispatch = (A, t) => {
        this.#A[A] && this.#A[A].forEach((A) => A(t));
      };
    })(),
    AA = {},
    tA = (A, t) => (
      A in AA || (void 0 === t && (t = null), (AA[A] = { value: t })), AA[A]
    ),
    eA = (A, t) => {
      A in AA ? (AA[A].value = t) : (AA[A] = { value: t });
    };
  const iA =
    "attribute vec2 uv;\nattribute vec2 position;\n\nvarying vec2 vUv;\nvarying vec2 vPos;\n\nvoid main() {\n  vUv = uv;\n  vPos = position;\n  gl_Position = vec4(position, inject_z, 1.);\n}\n";
  class rA extends O {
    constructor(A, { attributes: t = {} } = {}) {
      Object.assign(t, {
        position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) },
        uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
      }),
        super(A, t);
    }
  }
  const nA = {
    black: "#000000",
    white: "#ffffff",
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    fuchsia: "#ff00ff",
    cyan: "#00ffff",
    yellow: "#ffff00",
    orange: "#ff8000",
  };
  function sA(A) {
    4 === A.length && (A = A[0] + A[1] + A[1] + A[2] + A[2] + A[3] + A[3]);
    const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(A);
    return (
      t || console.warn(`Unable to convert hex string ${A} to rgb values`),
      [
        parseInt(t[1], 16) / 255,
        parseInt(t[2], 16) / 255,
        parseInt(t[3], 16) / 255,
      ]
    );
  }
  function aA(A) {
    return [
      (((A = parseInt(A)) >> 16) & 255) / 255,
      ((A >> 8) & 255) / 255,
      (255 & A) / 255,
    ];
  }
  function oA(A) {
    return void 0 === A
      ? [0, 0, 0]
      : 3 === arguments.length
      ? arguments
      : isNaN(A)
      ? "#" === A[0]
        ? sA(A)
        : nA[A.toLowerCase()]
        ? sA(nA[A.toLowerCase()])
        : (console.warn("Color format not recognised"), [0, 0, 0])
      : aA(A);
  }
  class hA extends Array {
    constructor(A) {
      return Array.isArray(A) ? super(...A) : super(...oA(...arguments));
    }
    get r() {
      return this[0];
    }
    get g() {
      return this[1];
    }
    get b() {
      return this[2];
    }
    set r(A) {
      this[0] = A;
    }
    set g(A) {
      this[1] = A;
    }
    set b(A) {
      this[2] = A;
    }
    set(A) {
      return Array.isArray(A) ? this.copy(A) : this.copy(oA(...arguments));
    }
    copy(A) {
      return (this[0] = A[0]), (this[1] = A[1]), (this[2] = A[2]), this;
    }
  }
  var lA = function () {
    var A = 0,
      t = document.createElement("div");
    function e(A) {
      return t.appendChild(A.dom), A;
    }
    function i(e) {
      for (var i = 0; i < t.children.length; i++)
        t.children[i].style.display = i === e ? "block" : "none";
      A = e;
    }
    (t.style.cssText =
      "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000"),
      t.addEventListener(
        "click",
        function (e) {
          e.preventDefault(), i(++A % t.children.length);
        },
        !1
      );
    var r = (performance || Date).now(),
      n = r,
      s = 0,
      a = e(new lA.Panel("FPS", "#0ff", "#002")),
      o = e(new lA.Panel("MS", "#0f0", "#020"));
    if (self.performance && self.performance.memory)
      var h = e(new lA.Panel("MB", "#f08", "#201"));
    return (
      i(0),
      {
        REVISION: 16,
        dom: t,
        addPanel: e,
        showPanel: i,
        begin: function () {
          r = (performance || Date).now();
        },
        end: function () {
          s++;
          var A = (performance || Date).now();
          if (
            (o.update(A - r, 200),
            A >= n + 1e3 &&
              (a.update((1e3 * s) / (A - n), 100), (n = A), (s = 0), h))
          ) {
            var t = performance.memory;
            h.update(t.usedJSHeapSize / 1048576, t.jsHeapSizeLimit / 1048576);
          }
          return A;
        },
        update: function () {
          r = this.end();
        },
        domElement: t,
        setMode: i,
      }
    );
  };
  lA.Panel = function (A, t, e) {
    var i = 1 / 0,
      r = 0,
      n = Math.round,
      s = n(window.devicePixelRatio || 1),
      a = 80 * s,
      o = 48 * s,
      h = 3 * s,
      l = 2 * s,
      c = 3 * s,
      g = 15 * s,
      u = 74 * s,
      d = 30 * s,
      p = document.createElement("canvas");
    (p.width = a), (p.height = o), (p.style.cssText = "width:80px;height:48px");
    var f = p.getContext("2d");
    return (
      (f.font = "bold " + 9 * s + "px Helvetica,Arial,sans-serif"),
      (f.textBaseline = "top"),
      (f.fillStyle = e),
      f.fillRect(0, 0, a, o),
      (f.fillStyle = t),
      f.fillText(A, h, l),
      f.fillRect(c, g, u, d),
      (f.fillStyle = e),
      (f.globalAlpha = 0.9),
      f.fillRect(c, g, u, d),
      {
        dom: p,
        update: function (o, m) {
          (i = Math.min(i, o)),
            (r = Math.max(r, o)),
            (f.fillStyle = e),
            (f.globalAlpha = 1),
            f.fillRect(0, 0, a, g),
            (f.fillStyle = t),
            f.fillText(n(o) + " " + A + " (" + n(i) + "-" + n(r) + ")", h, l),
            f.drawImage(p, c + s, g, u - s, d, c, g, u - s, d),
            f.fillRect(c + u - s, g, s, d),
            (f.fillStyle = e),
            (f.globalAlpha = 0.9),
            f.fillRect(c + u - s, g, s, n((1 - o / m) * d));
        },
      }
    );
  };
  const cA = new l();
  let gA = 1;
  class uA {
    constructor({
      canvas: A = document.createElement("canvas"),
      width: t = 300,
      height: e = 150,
      dpr: i = 1,
      alpha: r = !1,
      depth: n = !0,
      stencil: s = !1,
      antialias: a = !1,
      premultipliedAlpha: o = !1,
      preserveDrawingBuffer: h = !1,
      powerPreference: l = "default",
      autoClear: c = !0,
      webgl: g = 2,
    } = {}) {
      const u = {
        alpha: r,
        depth: n,
        stencil: s,
        antialias: a,
        premultipliedAlpha: o,
        preserveDrawingBuffer: h,
        powerPreference: l,
      };
      (this.dpr = i),
        (this.alpha = r),
        (this.color = !0),
        (this.depth = n),
        (this.stencil = s),
        (this.premultipliedAlpha = o),
        (this.autoClear = c),
        (this.id = gA++),
        2 === g && (this.gl = A.getContext("webgl2", u)),
        (this.isWebgl2 = !!this.gl),
        this.gl || (this.gl = A.getContext("webgl", u)),
        this.gl || console.error("unable to create webgl context"),
        (this.gl.renderer = this),
        this.setSize(t, e),
        (this.state = {}),
        (this.state.blendFunc = { src: this.gl.ONE, dst: this.gl.ZERO }),
        (this.state.blendEquation = { modeRGB: this.gl.FUNC_ADD }),
        (this.state.cullFace = null),
        (this.state.frontFace = this.gl.CCW),
        (this.state.depthMask = !0),
        (this.state.depthFunc = this.gl.LESS),
        (this.state.premultiplyAlpha = !1),
        (this.state.flipY = !1),
        (this.state.unpackAlignment = 4),
        (this.state.framebuffer = null),
        (this.state.viewport = { x: 0, y: 0, width: null, height: null }),
        (this.state.textureUnits = []),
        (this.state.activeTextureUnit = 0),
        (this.state.boundBuffer = null),
        (this.state.uniformLocations = new Map()),
        (this.extensions = {}),
        this.isWebgl2
          ? (this.getExtension("EXT_color_buffer_float"),
            this.getExtension("OES_texture_float_linear"))
          : (this.getExtension("OES_texture_float"),
            this.getExtension("OES_texture_float_linear"),
            this.getExtension("OES_texture_half_float"),
            this.getExtension("OES_texture_half_float_linear"),
            this.getExtension("OES_element_index_uint"),
            this.getExtension("OES_standard_derivatives"),
            this.getExtension("EXT_sRGB"),
            this.getExtension("WEBGL_depth_texture"),
            this.getExtension("WEBGL_draw_buffers")),
        this.getExtension("WEBGL_compressed_texture_astc"),
        this.getExtension("EXT_texture_compression_bptc"),
        this.getExtension("WEBGL_compressed_texture_s3tc"),
        this.getExtension("WEBGL_compressed_texture_etc1"),
        this.getExtension("WEBGL_compressed_texture_pvrtc"),
        this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
        (this.vertexAttribDivisor = this.getExtension(
          "ANGLE_instanced_arrays",
          "vertexAttribDivisor",
          "vertexAttribDivisorANGLE"
        )),
        (this.drawArraysInstanced = this.getExtension(
          "ANGLE_instanced_arrays",
          "drawArraysInstanced",
          "drawArraysInstancedANGLE"
        )),
        (this.drawElementsInstanced = this.getExtension(
          "ANGLE_instanced_arrays",
          "drawElementsInstanced",
          "drawElementsInstancedANGLE"
        )),
        (this.createVertexArray = this.getExtension(
          "OES_vertex_array_object",
          "createVertexArray",
          "createVertexArrayOES"
        )),
        (this.bindVertexArray = this.getExtension(
          "OES_vertex_array_object",
          "bindVertexArray",
          "bindVertexArrayOES"
        )),
        (this.deleteVertexArray = this.getExtension(
          "OES_vertex_array_object",
          "deleteVertexArray",
          "deleteVertexArrayOES"
        )),
        (this.drawBuffers = this.getExtension(
          "WEBGL_draw_buffers",
          "drawBuffers",
          "drawBuffersWEBGL"
        )),
        (this.parameters = {}),
        (this.parameters.maxTextureUnits = this.gl.getParameter(
          this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS
        )),
        (this.parameters.maxAnisotropy = this.getExtension(
          "EXT_texture_filter_anisotropic"
        )
          ? this.gl.getParameter(
              this.getExtension("EXT_texture_filter_anisotropic")
                .MAX_TEXTURE_MAX_ANISOTROPY_EXT
            )
          : 0);
    }
    setSize(A, t) {
      (this.width = A),
        (this.height = t),
        (this.gl.canvas.width = A * this.dpr),
        (this.gl.canvas.height = t * this.dpr),
        Object.assign(this.gl.canvas.style, {
          width: A + "px",
          height: t + "px",
        });
    }
    setViewport(A, t, e = 0, i = 0) {
      (this.state.viewport.width === A && this.state.viewport.height === t) ||
        ((this.state.viewport.width = A),
        (this.state.viewport.height = t),
        (this.state.viewport.x = e),
        (this.state.viewport.y = i),
        this.gl.viewport(e, i, A, t));
    }
    setScissor(A, t, e = 0, i = 0) {
      this.gl.scissor(e, i, A, t);
    }
    enable(A) {
      !0 !== this.state[A] && (this.gl.enable(A), (this.state[A] = !0));
    }
    disable(A) {
      !1 !== this.state[A] && (this.gl.disable(A), (this.state[A] = !1));
    }
    setBlendFunc(A, t, e, i) {
      (this.state.blendFunc.src === A &&
        this.state.blendFunc.dst === t &&
        this.state.blendFunc.srcAlpha === e &&
        this.state.blendFunc.dstAlpha === i) ||
        ((this.state.blendFunc.src = A),
        (this.state.blendFunc.dst = t),
        (this.state.blendFunc.srcAlpha = e),
        (this.state.blendFunc.dstAlpha = i),
        void 0 !== e
          ? this.gl.blendFuncSeparate(A, t, e, i)
          : this.gl.blendFunc(A, t));
    }
    setBlendEquation(A, t) {
      (A = A || this.gl.FUNC_ADD),
        (this.state.blendEquation.modeRGB === A &&
          this.state.blendEquation.modeAlpha === t) ||
          ((this.state.blendEquation.modeRGB = A),
          (this.state.blendEquation.modeAlpha = t),
          void 0 !== t
            ? this.gl.blendEquationSeparate(A, t)
            : this.gl.blendEquation(A));
    }
    setCullFace(A) {
      this.state.cullFace !== A &&
        ((this.state.cullFace = A), this.gl.cullFace(A));
    }
    setFrontFace(A) {
      this.state.frontFace !== A &&
        ((this.state.frontFace = A), this.gl.frontFace(A));
    }
    setDepthMask(A) {
      this.state.depthMask !== A &&
        ((this.state.depthMask = A), this.gl.depthMask(A));
    }
    setDepthFunc(A) {
      this.state.depthFunc !== A &&
        ((this.state.depthFunc = A), this.gl.depthFunc(A));
    }
    activeTexture(A) {
      this.state.activeTextureUnit !== A &&
        ((this.state.activeTextureUnit = A),
        this.gl.activeTexture(this.gl.TEXTURE0 + A));
    }
    bindFramebuffer({
      target: A = this.gl.FRAMEBUFFER,
      buffer: t = null,
    } = {}) {
      this.state.framebuffer !== t &&
        ((this.state.framebuffer = t), this.gl.bindFramebuffer(A, t));
    }
    getExtension(A, t, e) {
      return t && this.gl[t]
        ? this.gl[t].bind(this.gl)
        : (this.extensions[A] || (this.extensions[A] = this.gl.getExtension(A)),
          t
            ? this.extensions[A]
              ? this.extensions[A][e].bind(this.extensions[A])
              : null
            : this.extensions[A]);
    }
    sortOpaque(A, t) {
      return A.renderOrder !== t.renderOrder
        ? A.renderOrder - t.renderOrder
        : A.program.id !== t.program.id
        ? A.program.id - t.program.id
        : A.zDepth !== t.zDepth
        ? A.zDepth - t.zDepth
        : t.id - A.id;
    }
    sortTransparent(A, t) {
      return A.renderOrder !== t.renderOrder
        ? A.renderOrder - t.renderOrder
        : A.zDepth !== t.zDepth
        ? t.zDepth - A.zDepth
        : t.id - A.id;
    }
    sortUI(A, t) {
      return A.renderOrder !== t.renderOrder
        ? A.renderOrder - t.renderOrder
        : A.program.id !== t.program.id
        ? A.program.id - t.program.id
        : t.id - A.id;
    }
    getRenderList({ scene: A, camera: t, frustumCull: e, sort: i }) {
      let r = [];
      if (
        (t && e && t.updateFrustum(),
        A.traverse((A) => {
          if (!A.visible) return !0;
          A.draw &&
            ((e && A.frustumCulled && t && !t.frustumIntersectsMesh(A)) ||
              r.push(A));
        }),
        i)
      ) {
        const A = [],
          e = [],
          i = [];
        r.forEach((r) => {
          r.program.transparent
            ? r.program.depthTest
              ? e.push(r)
              : i.push(r)
            : A.push(r),
            (r.zDepth = 0),
            0 === r.renderOrder &&
              r.program.depthTest &&
              t &&
              (r.worldMatrix.getTranslation(cA),
              cA.applyMatrix4(t.projectionViewMatrix),
              (r.zDepth = cA.z));
        }),
          A.sort(this.sortOpaque),
          e.sort(this.sortTransparent),
          i.sort(this.sortUI),
          (r = A.concat(e, i));
      }
      return r;
    }
    render({
      scene: A,
      camera: t,
      target: e = null,
      update: i = !0,
      sort: r = !0,
      frustumCull: n = !0,
      clear: s,
    }) {
      null === e
        ? (this.bindFramebuffer(),
          this.setViewport(this.width * this.dpr, this.height * this.dpr))
        : (this.bindFramebuffer(e), this.setViewport(e.width, e.height)),
        (s || (this.autoClear && !1 !== s)) &&
          (!this.depth ||
            (e && !e.depth) ||
            (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)),
          this.gl.clear(
            (this.color ? this.gl.COLOR_BUFFER_BIT : 0) |
              (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) |
              (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0)
          )),
        i && A.updateMatrixWorld(),
        t && t.updateMatrixWorld(),
        this.getRenderList({
          scene: A,
          camera: t,
          frustumCull: n,
          sort: r,
        }).forEach((A) => {
          A.draw({ camera: t });
        });
    }
  }
  class dA {
    constructor(
      A,
      {
        width: t = A.canvas.width,
        height: e = A.canvas.height,
        target: i = A.FRAMEBUFFER,
        color: r = 1,
        depth: n = !0,
        stencil: s = !1,
        depthTexture: a = !1,
        wrapS: o = A.CLAMP_TO_EDGE,
        wrapT: h = A.CLAMP_TO_EDGE,
        minFilter: l = A.LINEAR,
        magFilter: c = l,
        type: g = A.UNSIGNED_BYTE,
        format: u = A.RGBA,
        internalFormat: d = u,
        unpackAlignment: p,
        premultiplyAlpha: f,
      } = {}
    ) {
      (this.gl = A),
        (this.width = t),
        (this.height = e),
        (this.depth = n),
        (this.buffer = this.gl.createFramebuffer()),
        (this.target = i),
        this.gl.bindFramebuffer(this.target, this.buffer),
        (this.textures = []);
      const m = [];
      for (let i = 0; i < r; i++)
        this.textures.push(
          new F(A, {
            width: t,
            height: e,
            wrapS: o,
            wrapT: h,
            minFilter: l,
            magFilter: c,
            type: g,
            format: u,
            internalFormat: d,
            unpackAlignment: p,
            premultiplyAlpha: f,
            flipY: !1,
            generateMipmaps: !1,
          })
        ),
          this.textures[i].update(),
          this.gl.framebufferTexture2D(
            this.target,
            this.gl.COLOR_ATTACHMENT0 + i,
            this.gl.TEXTURE_2D,
            this.textures[i].texture,
            0
          ),
          m.push(this.gl.COLOR_ATTACHMENT0 + i);
      m.length > 1 && this.gl.renderer.drawBuffers(m),
        (this.texture = this.textures[0]),
        a &&
        (this.gl.renderer.isWebgl2 ||
          this.gl.renderer.getExtension("WEBGL_depth_texture"))
          ? ((this.depthTexture = new F(A, {
              width: t,
              height: e,
              minFilter: this.gl.NEAREST,
              magFilter: this.gl.NEAREST,
              format: this.gl.DEPTH_COMPONENT,
              internalFormat: A.renderer.isWebgl2
                ? this.gl.DEPTH_COMPONENT16
                : this.gl.DEPTH_COMPONENT,
              type: this.gl.UNSIGNED_INT,
            })),
            this.depthTexture.update(),
            this.gl.framebufferTexture2D(
              this.target,
              this.gl.DEPTH_ATTACHMENT,
              this.gl.TEXTURE_2D,
              this.depthTexture.texture,
              0
            ))
          : (n &&
              !s &&
              ((this.depthBuffer = this.gl.createRenderbuffer()),
              this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer),
              this.gl.renderbufferStorage(
                this.gl.RENDERBUFFER,
                this.gl.DEPTH_COMPONENT16,
                t,
                e
              ),
              this.gl.framebufferRenderbuffer(
                this.target,
                this.gl.DEPTH_ATTACHMENT,
                this.gl.RENDERBUFFER,
                this.depthBuffer
              )),
            s &&
              !n &&
              ((this.stencilBuffer = this.gl.createRenderbuffer()),
              this.gl.bindRenderbuffer(
                this.gl.RENDERBUFFER,
                this.stencilBuffer
              ),
              this.gl.renderbufferStorage(
                this.gl.RENDERBUFFER,
                this.gl.STENCIL_INDEX8,
                t,
                e
              ),
              this.gl.framebufferRenderbuffer(
                this.target,
                this.gl.STENCIL_ATTACHMENT,
                this.gl.RENDERBUFFER,
                this.stencilBuffer
              )),
            n &&
              s &&
              ((this.depthStencilBuffer = this.gl.createRenderbuffer()),
              this.gl.bindRenderbuffer(
                this.gl.RENDERBUFFER,
                this.depthStencilBuffer
              ),
              this.gl.renderbufferStorage(
                this.gl.RENDERBUFFER,
                this.gl.DEPTH_STENCIL,
                t,
                e
              ),
              this.gl.framebufferRenderbuffer(
                this.target,
                this.gl.DEPTH_STENCIL_ATTACHMENT,
                this.gl.RENDERBUFFER,
                this.depthStencilBuffer
              ))),
        this.gl.bindFramebuffer(this.target, null);
    }
    setSize(A, t) {
      if (this.width !== A || this.height !== t) {
        (this.width = A),
          (this.height = t),
          this.gl.bindFramebuffer(this.target, this.buffer);
        for (let e = 0; e < this.textures.length; e++)
          (this.textures[e].width = A),
            (this.textures[e].height = t),
            (this.textures[e].needsUpdate = !0),
            this.textures[e].update(),
            this.gl.framebufferTexture2D(
              this.target,
              this.gl.COLOR_ATTACHMENT0 + e,
              this.gl.TEXTURE_2D,
              this.textures[e].texture,
              0
            );
        this.depthTexture
          ? ((this.depthTexture.width = A),
            (this.depthTexture.height = t),
            (this.depthTexture.needsUpdate = !0),
            this.depthTexture.update(),
            this.gl.framebufferTexture2D(
              this.target,
              this.gl.DEPTH_ATTACHMENT,
              this.gl.TEXTURE_2D,
              this.depthTexture.texture,
              0
            ))
          : (this.depthBuffer &&
              (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer),
              this.gl.renderbufferStorage(
                this.gl.RENDERBUFFER,
                this.gl.DEPTH_COMPONENT16,
                A,
                t
              )),
            this.stencilBuffer &&
              (this.gl.bindRenderbuffer(
                this.gl.RENDERBUFFER,
                this.stencilBuffer
              ),
              this.gl.renderbufferStorage(
                this.gl.RENDERBUFFER,
                this.gl.STENCIL_INDEX8,
                A,
                t
              )),
            this.depthStencilBuffer &&
              (this.gl.bindRenderbuffer(
                this.gl.RENDERBUFFER,
                this.depthStencilBuffer
              ),
              this.gl.renderbufferStorage(
                this.gl.RENDERBUFFER,
                this.gl.DEPTH_STENCIL,
                A,
                t
              ))),
          this.gl.bindFramebuffer(this.target, null);
      }
    }
  }
  const pA =
    "precision highp float;\nattribute vec2 uv;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = vec4(2. * uv - 1., 0., 1.);\n}\n";
  class fA {
    constructor(A, t) {
      t.forEach((A) => !A.out && (A.out = {}));
      const e = Object.assign(
          { map: tA("post.screen") },
          ...t.map((A) => A.out.uniforms)
        ),
        i = `\nprecision highp float;\n#define saturate(x) clamp(x, 0., 1.)\nvarying vec2 vUv;\nuniform sampler2D map;\n\n${t
          .map((A) => A.out.declarations)
          .join(
            ""
          )}\n\nvoid main() {\n  vec2 uv = vUv;\n  vec3 color = texture2D(map, uv).rgb;\n\n  ${t
          .map((A) => A.out.inject)
          .join("")}\n\n  gl_FragColor = vec4(saturate(color), 1.);\n}\n    `;
      this.program = new H(A, {
        uniforms: e,
        vertex: pA,
        fragment: i,
        depthTest: !1,
      });
    }
    render = ({ renderer: A, quad: t, camera: e }) => {
      (t.program = this.program), A.render({ scene: t, camera: e });
    };
  }
  class mA {
    constructor(A, { width: t, height: e }, i) {
      (this.superSampling = 2),
        (this.filterProgram = new H(A, {
          uniforms: {
            map: tA("post.screen"),
            pixelSize: tA("screen.pixelSize"),
          },
          vertex: pA,
          fragment:
            "precision highp float;\n#define s(x) clamp(x, 0., 1.)\n\nvarying vec2 vUv;\n\nuniform sampler2D map;\nuniform vec2 pixelSize;\n\nvoid main() {\n  vec3 c = s(texture2D(map, vUv).rgb);\n  vec3 N = s(texture2D(map, vec2(vUv.x, vUv.y - pixelSize.y)).rgb);\n  vec3 S = s(texture2D(map, vec2(vUv.x, vUv.y + pixelSize.y)).rgb);\n  vec3 W = s(texture2D(map, vec2(vUv.x - pixelSize.x, vUv.y)).rgb);\n  vec3 E = s(texture2D(map, vec2(vUv.x + pixelSize.x, vUv.y)).rgb);\n  vec3 m = max(\n    max(abs(c - N), abs(c - S)),\n    max(abs(c - W), abs(c - E))\n  );\n  float v = s(m.x + m.y + m.z);\n  gl_FragColor = vec4(v, 0., 0., 1.);\n}\n",
        })),
        (this.filterRenderTarget = new dA(A, { width: t, height: e, ...i })),
        eA("post.essaa.filter", this.filterRenderTarget.texture),
        (this.overlayProgram = new H(A, {
          uniforms: {
            scene: tA("post.screen"),
            edges: { value: this.filterRenderTarget.texture },
          },
          vertex: pA,
          fragment:
            "precision highp float;\nvarying vec2 vUv;\n\nuniform sampler2D scene;\nuniform sampler2D edges;\n\nvoid main() {\n  if (texture2D(edges, vUv).r > .5) discard;\n  gl_FragColor = texture2D(scene, vUv);\n}\n",
        })),
        (this.overlayRenderTarget = new dA(A, {
          width: this.superSampling * t,
          height: this.superSampling * e,
          ...i,
        })),
        eA("post.essaa.overlay", this.overlayRenderTarget.texture),
        $.on("resize", this.onResize);
    }
    render = ({ renderer: A, scene: t, quad: e, camera: i }) => {
      (e.program = this.filterProgram),
        A.render({ scene: e, camera: i, target: this.filterRenderTarget }),
        (e.program = this.overlayProgram),
        A.render({ scene: e, camera: i, target: this.overlayRenderTarget }),
        $.dispatch("essaa.needsDepth", !1),
        eA("screen.superSample", this.superSampling);
      const r = A.autoClear;
      (A.autoClear = !1),
        A.render({ scene: t, camera: i, target: this.overlayRenderTarget }),
        $.dispatch("essaa.needsDepth", !0),
        eA("screen.superSample", 1),
        (A.autoClear = r),
        eA("post.screen", this.overlayRenderTarget.texture);
    };
    onResize = ({ width: A, height: t }) => {
      this.filterRenderTarget.setSize(A, t),
        this.overlayRenderTarget.setSize(
          A * this.superSampling,
          t * this.superSampling
        );
    };
  }
  class EA {
    out = {
      inject:
        "{\n      float vignette = saturate(length(uv * 2. - 1.));\n      vignette = smoothstep(.5, 1., vignette);\n      color = mix(color, vec3(1.), vignette);\n    }",
    };
  }
  const xA = {
    visible: !0,
    minDistance: 6,
    maxDistance: 12,
    count: 40,
    rotationSpeed: 0.08,
    modulationRate: 0.6,
    size: 50,
    yShift: -1,
  };
  let IA = 0,
    RA = 0,
    vA = 1,
    CA = !0,
    yA = !0,
    BA = !1,
    FA = !0,
    MA = !1,
    wA = 0,
    QA = !1;
  const SA = document.getElementById("canvas"),
    bA = new (class {
      constructor(A) {
        if (
          ((this.container = A),
          (this.renderer = new uA({
            powerPreference: "high-performance",
            dpr: window.devicePixelRatio,
            webgl: 1,
          })),
          (this.gl = this.renderer.gl),
          !this.gl)
        )
          return void $.dispatch("noWebGL");
        this.container.appendChild(this.gl.canvas),
          (this.rtParameters = {
            magFilter: this.gl.LINEAR,
            minFilter: this.gl.LINEAR,
            generateMipmaps: !1,
          }),
          (this.quad = new D(this.gl, { geometry: new rA(this.gl) })),
          (this.sceneRenderTarget = new dA(this.gl, {
            width: this.renderer.width,
            height: this.renderer.height,
            ...this.rtParameters,
          })),
          eA("post.screen", this.sceneRenderTarget.texture),
          (this.pixelSize = new U()),
          eA("screen.pixelSize", this.pixelSize),
          eA("screen.superSample", 1);
        let t = !0;
        this.gl.getSupportedExtensions().indexOf("EXT_frag_depth") >= 0
          ? this.gl.getExtension("EXT_frag_depth")
          : (t = !1),
          (this.fx = []),
          t && this.fx.push(new mA(this.gl, this.renderer, this.rtParameters)),
          this.fx.push(new EA()),
          this.fx.push(new fA(this.gl, this.fx)),
          this.gl.clearColor(1, 1, 1, 1),
          window.addEventListener("resize", this.onResize, !1),
          this.onResize();
      }
      render = ({ scene: A, camera: t }) => {
        this.renderer.render({
          scene: A,
          camera: t,
          target: this.sceneRenderTarget,
        }),
          eA("post.screen", this.sceneRenderTarget.texture),
          this.fx.forEach(
            (e) =>
              e.render &&
              e.render({
                renderer: this.renderer,
                quad: this.quad,
                scene: A,
                camera: t,
              })
          );
      };
      clear = () => {
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
      };
      onResize = () => {
        this.renderer.setSize(
          this.container.clientWidth,
          this.container.clientHeight
        ),
          this.sceneRenderTarget.setSize(
            this.renderer.width,
            this.renderer.height
          ),
          this.pixelSize.set(1 / this.renderer.width, 1 / this.renderer.height),
          $.dispatch("resize", this.renderer);
      };
    })(SA),
    UA = bA.gl,
    LA = { x: 0, y: 0 },
    PA = new (class {
      done = !1;
      framesSkipped = 0;
      frame = 0;
      startTime = 0;
      onFrame = (A) => {
        if (!this.done)
          if (this.framesSkipped < 5) this.framesSkipped++;
          else if (
            (0 == this.frame && (this.startTime = A),
            this.frame++,
            this.frame > 5)
          ) {
            this.done = !0;
            const t = 5 / (A - this.startTime);
            $.dispatch("benchmark.done", t);
          }
      };
      reset = () => {
        (this.done = !1),
          (this.framesSkipped = 0),
          (this.frame = 0),
          (this.startTime = 0);
      };
    })();
  requestAnimationFrame(() => bA.clear());
  const jA = new (class extends x {
      constructor(
        A,
        {
          near: t = 0.1,
          far: e = 100,
          fov: i = 45,
          aspect: r = 1,
          left: n,
          right: s,
          bottom: a,
          top: o,
          zoom: h = 1,
        } = {}
      ) {
        super(),
          Object.assign(this, {
            near: t,
            far: e,
            fov: i,
            aspect: r,
            left: n,
            right: s,
            bottom: a,
            top: o,
            zoom: h,
          }),
          (this.projectionMatrix = new f()),
          (this.viewMatrix = new f()),
          (this.projectionViewMatrix = new f()),
          (this.worldPosition = new l()),
          (this.type = n || s ? "orthographic" : "perspective"),
          "orthographic" === this.type
            ? this.orthographic()
            : this.perspective();
      }
      perspective({
        near: A = this.near,
        far: t = this.far,
        fov: e = this.fov,
        aspect: i = this.aspect,
      } = {}) {
        return (
          Object.assign(this, { near: A, far: t, fov: e, aspect: i }),
          this.projectionMatrix.fromPerspective({
            fov: e * (Math.PI / 180),
            aspect: i,
            near: A,
            far: t,
          }),
          (this.type = "perspective"),
          this
        );
      }
      orthographic({
        near: A = this.near,
        far: t = this.far,
        left: e = this.left,
        right: i = this.right,
        bottom: r = this.bottom,
        top: n = this.top,
        zoom: s = this.zoom,
      } = {}) {
        return (
          Object.assign(this, {
            near: A,
            far: t,
            left: e,
            right: i,
            bottom: r,
            top: n,
            zoom: s,
          }),
          (e /= s),
          (i /= s),
          (r /= s),
          (n /= s),
          this.projectionMatrix.fromOrthogonal({
            left: e,
            right: i,
            bottom: r,
            top: n,
            near: A,
            far: t,
          }),
          (this.type = "orthographic"),
          this
        );
      }
      updateMatrixWorld() {
        return (
          super.updateMatrixWorld(),
          this.viewMatrix.inverse(this.worldMatrix),
          this.worldMatrix.getTranslation(this.worldPosition),
          this.projectionViewMatrix.multiply(
            this.projectionMatrix,
            this.viewMatrix
          ),
          this
        );
      }
      lookAt(A) {
        return super.lookAt(A, !0), this;
      }
      project(A) {
        return (
          A.applyMatrix4(this.viewMatrix),
          A.applyMatrix4(this.projectionMatrix),
          this
        );
      }
      unproject(A) {
        return (
          A.applyMatrix4(I.inverse(this.projectionMatrix)),
          A.applyMatrix4(this.worldMatrix),
          this
        );
      }
      updateFrustum() {
        this.frustum ||
          (this.frustum = [
            new l(),
            new l(),
            new l(),
            new l(),
            new l(),
            new l(),
          ]);
        const A = this.projectionViewMatrix;
        (this.frustum[0].set(A[3] - A[0], A[7] - A[4], A[11] - A[8]).constant =
          A[15] - A[12]),
          (this.frustum[1].set(
            A[3] + A[0],
            A[7] + A[4],
            A[11] + A[8]
          ).constant = A[15] + A[12]),
          (this.frustum[2].set(
            A[3] + A[1],
            A[7] + A[5],
            A[11] + A[9]
          ).constant = A[15] + A[13]),
          (this.frustum[3].set(
            A[3] - A[1],
            A[7] - A[5],
            A[11] - A[9]
          ).constant = A[15] - A[13]),
          (this.frustum[4].set(
            A[3] - A[2],
            A[7] - A[6],
            A[11] - A[10]
          ).constant = A[15] - A[14]),
          (this.frustum[5].set(
            A[3] + A[2],
            A[7] + A[6],
            A[11] + A[10]
          ).constant = A[15] + A[14]);
        for (let A = 0; A < 6; A++) {
          const t = 1 / this.frustum[A].distance();
          this.frustum[A].multiply(t), (this.frustum[A].constant *= t);
        }
      }
      frustumIntersectsMesh(A) {
        if (!A.geometry.attributes.position) return !0;
        if (
          ((A.geometry.bounds && A.geometry.bounds.radius !== 1 / 0) ||
            A.geometry.computeBoundingSphere(),
          !A.geometry.bounds)
        )
          return !0;
        const t = R;
        t.copy(A.geometry.bounds.center), t.applyMatrix4(A.worldMatrix);
        const e = A.geometry.bounds.radius * A.worldMatrix.getMaxScaleOnAxis();
        return this.frustumIntersectsSphere(t, e);
      }
      frustumIntersectsSphere(A, t) {
        const e = v;
        for (let i = 0; i < 6; i++) {
          const r = this.frustum[i];
          if (e.copy(r).dot(A) + r.constant < -t) return !1;
        }
        return !0;
      }
    })(UA, { left: -6, right: 6, top: 6, bottom: -6, near: -18, far: 18 }),
    KA = 0 * Math.PI;
  jA.position.set(
    6 * Math.cos(KA) * Math.SQRT1_2,
    6 * Math.sin(KA),
    6 * Math.cos(KA) * Math.SQRT1_2
  );
  const TA = new (function (
    A,
    {
      element: t = document,
      enabled: e = !0,
      target: i = new l(),
      ease: r = 0.25,
      inertia: n = 0.85,
      enableRotate: s = !0,
      rotateSpeed: a = 0.1,
      autoRotate: o = !1,
      autoRotateSpeed: h = 1,
      enableZoom: c = !0,
      zoomSpeed: g = 1,
      zoomStyle: u = "dolly",
      enablePan: d = !0,
      panSpeed: p = 0.1,
      minPolarAngle: f = 0,
      maxPolarAngle: m = Math.PI,
      minAzimuthAngle: E = -1 / 0,
      maxAzimuthAngle: x = 1 / 0,
      minDistance: I = 0,
      maxDistance: R = 1 / 0,
    } = {}
  ) {
    (this.enabled = e),
      (this.target = i),
      (this.zoomStyle = u),
      (r = r || 1),
      (n = n || 0),
      (this.minDistance = I),
      (this.maxDistance = R);
    const v = { radius: 1, phi: 0, theta: 0 },
      C = { radius: 1, phi: 0, theta: 0 },
      y = { radius: 1, phi: 0, theta: 0 },
      B = new l();
    (this.spherical = y), (this.sphericalDelta = v), (this.autoRotate = o);
    const F = new l();
    F.copy(A.position).sub(this.target),
      (y.radius = C.radius = F.distance()),
      (y.theta = C.theta = Math.atan2(F.x, F.z)),
      (y.phi = C.phi = Math.acos(Math.min(Math.max(F.y / C.radius, -1), 1))),
      (this.offset = F),
      (this.update = () => {
        this.autoRotate &&
          (function () {
            const A = ((2 * Math.PI) / 60 / 60) * h;
            v.theta -= A;
          })(),
          (C.radius *= v.radius),
          (C.theta += v.theta),
          (C.phi += v.phi),
          (C.theta = Math.max(E, Math.min(x, C.theta))),
          (C.phi = Math.max(f, Math.min(m, C.phi))),
          (C.radius = Math.max(
            this.minDistance,
            Math.min(this.maxDistance, C.radius)
          )),
          (y.phi += (C.phi - y.phi) * r),
          (y.theta += (C.theta - y.theta) * r),
          (y.radius += (C.radius - y.radius) * r),
          this.target.add(B);
        let t = y.radius * Math.sin(Math.max(1e-6, y.phi));
        (F.x = t),
          (F.y = y.radius * Math.cos(y.phi)),
          (F.z = t),
          A.position.copy(this.target).add(F),
          A.lookAt(this.target),
          (v.theta *= n),
          (v.phi *= n),
          B.multiply(n),
          (v.radius = 1);
      }),
      (this.forcePosition = () => {
        F.copy(A.position).sub(this.target),
          (y.radius = C.radius = F.distance()),
          (y.theta = C.theta = Math.atan2(F.x, F.z)),
          (y.phi = C.phi =
            Math.acos(Math.min(Math.max(F.y / C.radius, -1), 1))),
          A.lookAt(this.target);
      });
    const M = new U(),
      w = new U(),
      Q = new U();
    let S = L;
    function b() {
      return Math.pow(0.95, g);
    }
    this.mouseButtons = { ORBIT: 0, ZOOM: 1, PAN: 2 };
    const T = (e, i) => {
        let r = t === document ? document.body : t;
        P.copy(A.position).sub(this.target);
        let n = P.distance();
        var s, a;
        (n *= Math.tan((((A.fov || 45) / 2) * Math.PI) / 180)),
          (s = (2 * e * n) / r.clientHeight),
          (a = A.matrix),
          P.set(a[0], a[1], a[2]),
          P.multiply(-s),
          B.add(P),
          (function (A, t) {
            P.set(t[4], t[5], t[6]), P.multiply(A), B.add(P);
          })((2 * i * n) / r.clientHeight, A.matrix);
      },
      q = (t) => {
        "dolly" === this.zoomStyle
          ? (v.radius /= t)
          : ((A.fov /= t),
            "orthographic" === A.type ? A.orthographic() : A.perspective());
      };
    function Y(A, e) {
      j.set(A, e), K.sub(j, M).multiply(a);
      let i = t === document ? document.body : t;
      (v.theta += (2 * Math.PI * K.x) / i.clientHeight),
        (v.phi -= (2 * Math.PI * K.y) / i.clientHeight),
        M.copy(j);
    }
    function D(A, t) {
      j.set(A, t), K.sub(j, w).multiply(p), T(K.x, K.y), w.copy(j);
    }
    const G = (A) => {
        if (this.enabled) {
          switch (A.button) {
            case this.mouseButtons.ORBIT:
              if (!1 === s) return;
              M.set(A.clientX, A.clientY), (S = 0);
              break;
            case this.mouseButtons.ZOOM:
              if (!1 === c) return;
              Q.set(A.clientX, A.clientY), (S = 1);
              break;
            case this.mouseButtons.PAN:
              if (!1 === d) return;
              w.set(A.clientX, A.clientY), (S = 2);
          }
          S !== L &&
            (window.addEventListener("mousemove", V, !1),
            window.addEventListener("mouseup", X, !1));
        }
      },
      V = (A) => {
        if (this.enabled)
          switch (S) {
            case 0:
              if (!1 === s) return;
              Y(A.clientX, A.clientY);
              break;
            case 1:
              if (!1 === c) return;
              !(function (A) {
                j.set(A.clientX, A.clientY),
                  K.sub(j, Q),
                  K.y > 0 ? q(b()) : K.y < 0 && q(1 / b()),
                  Q.copy(j);
              })(A);
              break;
            case 2:
              if (!1 === d) return;
              D(A.clientX, A.clientY);
          }
      },
      X = () => {
        window.removeEventListener("mousemove", V, !1),
          window.removeEventListener("mouseup", X, !1),
          (S = L);
      },
      z = (A) => {
        this.enabled &&
          c &&
          (S === L || 0 === S) &&
          (A.stopPropagation(),
          A.preventDefault(),
          A.deltaY < 0 ? q(1 / b()) : A.deltaY > 0 && q(b()));
      },
      O = (A) => {
        if (this.enabled)
          switch (A.touches.length) {
            case 1:
              if (!1 === s) return;
              M.set(A.touches[0].pageX, A.touches[0].pageY), (S = 0);
              break;
            case 2:
              if (!1 === c && !1 === d) return;
              !(function (A) {
                if (c) {
                  let t = A.touches[0].pageX - A.touches[1].pageX,
                    e = A.touches[0].pageY - A.touches[1].pageY,
                    i = Math.sqrt(t * t + e * e);
                  Q.set(0, i);
                }
                if (d) {
                  let t = 0.5 * (A.touches[0].pageX + A.touches[1].pageX),
                    e = 0.5 * (A.touches[0].pageY + A.touches[1].pageY);
                  w.set(t, e);
                }
              })(A),
                (S = 3);
              break;
            default:
              S = L;
          }
      },
      k = (A) => {
        if (this.enabled)
          switch (A.touches.length) {
            case 1:
              if (!1 === s) return;
              Y(A.touches[0].pageX, A.touches[0].pageY);
              break;
            case 2:
              if (!1 === c && !1 === d) return;
              !(function (A) {
                if (c) {
                  let t = A.touches[0].pageX - A.touches[1].pageX,
                    e = A.touches[0].pageY - A.touches[1].pageY,
                    i = Math.sqrt(t * t + e * e);
                  j.set(0, i),
                    K.set(0, Math.pow(j.y / Q.y, g)),
                    q(K.y),
                    Q.copy(j);
                }
                d &&
                  D(
                    0.5 * (A.touches[0].pageX + A.touches[1].pageX),
                    0.5 * (A.touches[0].pageY + A.touches[1].pageY)
                  );
              })(A);
              break;
            default:
              S = L;
          }
      },
      J = () => {
        this.enabled && (S = L);
      },
      H = (A) => {
        d && A.preventDefault();
      };
    (this.remove = function () {
      t.removeEventListener("contextmenu", H),
        t.removeEventListener("mousedown", G),
        t.removeEventListener("wheel", z),
        t.removeEventListener("touchstart", O),
        t.removeEventListener("touchend", J),
        t.removeEventListener("touchmove", k),
        window.removeEventListener("mousemove", V),
        window.removeEventListener("mouseup", X);
    }),
      t.addEventListener("contextmenu", H, !1),
      t.addEventListener("mousedown", G, !1),
      t.addEventListener("wheel", z, { passive: !1 }),
      t.addEventListener("touchstart", O, { passive: !1 }),
      t.addEventListener("touchend", J, !1),
      t.addEventListener("touchmove", k, { passive: !1 });
  })(jA, {
    autoRotate: !1,
    autoRotateSpeed: 0.5,
    minPolarAngle: 0.25 * Math.PI,
    maxPolarAngle: 0.5 * Math.PI,
    enableZoom: !1,
    enablePan: !1,
  });
  eA("camera.worldMatrix", jA.worldMatrix);
  const qA = new x();
  function YA(A) {
    return new Promise((t) => {
      const e = document.createElement("img");
      (e.onload = () => {
        t(new F(UA, { image: e }));
      }),
        (e.src = A);
    });
  }
  new (class extends D {
    constructor(A, t, e) {
      super(A, { geometry: new rA(A) });
      const {
          shapeScale: i,
          morphingSpeed: r,
          rotationSpeed: n,
          lockFloorRotation: s,
          color: a = 16711808,
          enableGrid: o,
        } = e,
        h = new hA(a);
      (this.defines = `\n      #define AA ${
        window.devicePixelRatio < 1.5 ? 2 : 1
      }\n      #define scale ${(1 / i).toFixed(5)}\n      #define floorShift ${(
        1.75 * i
      ).toFixed(5)}\n      #define morphRate ${r.toFixed(
        5
      )}\n      #define rotationSpeed ${n.toFixed(
        5
      )}\n      #define lockFloorRotation ${s}\n      #define brandColor vec3(${h.join(
        ", "
      )})\n    `),
        o && (this.defines += "#define enableGrid 1\n"),
        (this.gl = A),
        (this.settings = e),
        (this.camProjMatInv = new f()),
        (this.appearable = 0),
        (this.morph = 0),
        this.changeQuality(!1),
        t.addChild(this),
        $.on("object.appear", () => (this.appearable = 1)),
        $.on("quality", this.changeQuality),
        $.on("frame", this.onFrame),
        $.on("essaa.needsDepth", this.switchDepthWrite);
    }
    onFrame = ({
      time: A,
      dt: t,
      animationDirection: e,
      rotation: i,
      camera: r,
      controls: n,
    }) => {
      this.camProjMatInv.copy(r.projectionMatrix).inverse(),
        (this.morph += t * e * 0.001),
        eA("raymarch.seconds", 0.001 * A),
        eA("raymarch.morph", this.morph),
        eA("raymarch.appear", this.appearable * (1 - 5e-4 * A)),
        eA(
          "raymarch.theta",
          n.spherical.theta + i * this.settings.rotationSpeed * 0.001
        );
    };
    changeQuality = (A) => {
      const t = {
          seconds: tA("raymarch.seconds"),
          morph: tA("raymarch.morph"),
          appear: tA("raymarch.appear"),
          theta: tA("raymarch.theta"),
          filmMap: tA("texture.film"),
          brandMap: tA("texture.brand"),
          pixelSize: tA("screen.pixelSize"),
          cameraMatrixWorld: tA("camera.worldMatrix"),
          projectionMatrixInverse: { value: this.camProjMatInv },
        },
        e = A
          ? "precision highp float;\n\ninject_defines\n\nvarying vec2 vUv;\nvarying vec2 vPos;\n\n#define pi 3.141592653589793\n#define maxDist 15.\n#define hitDist .001\n#define minMarchDist .0125\n#define maxMarchSteps 128\n#define saturate(x) clamp(x, 0., 1.)\n\nuniform float appear;\nuniform float seconds;\nuniform float morph;\nuniform float theta;\nuniform vec2 pixelSize;\nuniform mat4 cameraMatrixWorld;\nuniform mat4 projectionMatrixInverse;\nuniform sampler2D filmMap;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\n\nfloat sappear;\nmat2 rot45;\n\nfloat handleAnim(float a) {\n  float x = saturate(a);\n  return x * x * x * (x * (x * 6. - 15.) + 10.);\n}\n\nvec4 permute(vec4 x) {\n  return mod(((x * 34.) + 1.) * x, 289.);\n}\nvec4 taylorInvSqrt(vec4 r) {\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\nvec3 fade(vec3 t) {\n  return t * t * t * (t * (t * 6. - 15.) + 10.);\n}\n\nfloat cnoise(vec3 P){\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod(Pi0, 289.0);\n  Pi1 = mod(Pi1, 289.0);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 / 7.0;\n  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 / 7.0;\n  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\nmat2 rotation2d(float angle) {\n\tfloat s = sin(angle), c = cos(angle);\n\treturn mat2(c, -s, s, c);\n}\n\nfloat opSmoothSubtraction( float d1, float d2, float k ) {\n  float h = clamp(.5 - .5 * (d2 + d1) / k, 0., 1.);\n  return mix(d2, -d1, h) + k * h * (1. - h);\n}\n\nfloat sdBox(vec2 p, vec2 b) {\n  vec2 d = abs(p) - b;\n  return length(max(d, 0.)) + min(max(d.x, d.y), 0.);\n}\n\nfloat sdBox(vec3 p, vec3 b) {\n  vec3 q = abs(p) - b;\n  return length(max(q, 0.)) + min(max(q.x, max(q.y, q.z)),0.);\n}\n\nfloat sdOctahedron(vec3 p, float s) {\n  p = abs(p);\n  float m = p.x + p.y + p.z - s;\n  vec3 q;\n  if (3. * p.x < m) q = p.xyz;\n  else if (3. * p.y < m) q = p.yzx;\n  else if (3. * p.z < m) q = p.zxy;\n  else return m * .57735027;\n\n  float k = clamp(.5 * (q.z - q.y + s), 0., s);\n  return length(vec3(q.x, q.y - s + k, q.z - k));\n}\n\nfloat map(vec3 space) {\n  float anim = mod(morph * morphRate, 4.);\n  mat2 rotAnim = rotation2d(theta);\n\n  vec3 q = space * scale;\n  q.xz *= rotAnim;\n\n  vec3 p = q;\n  p.xy *= rot45;\n\n  q.y *= 0.7;\n  q.xz *= rot45;\n\n  float crystal = sdOctahedron(q, 1.) - .2;\n\n  vec3 tripetSideSize = vec3(1., 1., .05) * smoothstep(.5, 1., anim);\n  float triplet =        sdBox(p                   , vec3(1., 1., .05));\n  triplet = min(triplet, sdBox(p + vec3(0., 0., 1.), tripetSideSize));\n  triplet = min(triplet, sdBox(p - vec3(0., 0., 1.), tripetSideSize));\n  triplet -= .1;\n  float tripletCrystalHole = sdOctahedron(q, .8) - .1;\n  tripletCrystalHole = opSmoothSubtraction(tripletCrystalHole, triplet, .1);\n\n  float cubeWalls = abs(sdBox(p.xy, vec2(.8)) - .2);\n  cubeWalls = length(vec2(cubeWalls, max(abs(p.z) - 1., 0.))) - .1;\n\n  float cube = sdBox(p, vec3(.9));\n  float nathan = max(1.2 - length(p), cube) - .2;\n  float crystalInside = sdOctahedron(q, .7) - .2;\n  cube = max(-crystalInside, cube - .2);\n\n  float d;\n  d = mix(crystal, tripletCrystalHole, handleAnim(anim));\n  d = mix(d, cubeWalls, handleAnim(anim - 1.));\n  d = mix(d, cube, handleAnim(anim * 2. - 4.));\n  d = mix(d, nathan, handleAnim(anim * 2. - 5.));\n  d = mix(d, crystal, handleAnim(anim - 3.));\n\n  float shapeAppear = smoothstep(.5, 0., sappear);\n  float start = length(p) - shapeAppear;\n  d = mix(start, d, shapeAppear);\n\n  return d;\n}\n\nvec3 calcNormal(vec3 pos) {\n  const float h = .01; // replace by an appropriate value\n  const vec2 k = vec2(1., -1.);\n  return normalize(k.xyy * map(pos + k.xyy * h) +\n                   k.yyx * map(pos + k.yyx * h) +\n                   k.yxy * map(pos + k.yxy * h) +\n                   k.xxx * map(pos + k.xxx * h));\n}\n\nvec3 getTint(float d) {\n  return mix(vec3(1.), brandColor, (1. - exp(-.5 * d)));\n}\n\nfloat getFilmThickness(vec3 r, vec3 n, vec3 pos) {\n  return\n    pow(1. - abs(dot(r, n)), 5.) * .75 + .085\n    + max(cnoise(pos + seconds * .4) + pos.y + scale, 0.) * .1\n  ;\n}\n\nvec3 getFilmColor(vec3 rd, vec3 n, vec3 p) {\n  vec3 color = texture2D(filmMap, vec2(getFilmThickness(rd, n, p), .5)).rgb;\n  color = max(color, brandColor) * .3 + .7;\n  return color;\n}\n\nstruct RaymarchResult {\n  float d;\n  float sdf;\n  vec3 pos;\n  vec3 rd;\n};\n\nRaymarchResult march(vec3 ro, vec3 rd) {\n  RaymarchResult r;\n  r.rd = rd;\n  r.d = minMarchDist;\n\n  float maxDistL = -(ro.y + floorShift) / rd.y;\n  maxDistL = maxDistL > 0. ? min(maxDist, maxDistL) : maxDist;\n\n  for (int i = 0; i < maxMarchSteps; i++) {\n    r.pos = ro + rd * r.d;\n    r.sdf = map(r.pos);\n    float asdf = abs(r.sdf);\n    r.d += asdf;\n    if (r.d > maxDistL || asdf < hitDist) {\n      break;\n    }\n  }\n\n  return r;\n}\n\nstruct Hit {\n  vec3 normal;\n  vec3 ro;\n  vec3 rd;\n};\n\nHit processHit(RaymarchResult rr, float shiftSign, float rfrRate) {\n  Hit hit;\n  hit.normal = calcNormal(rr.pos);\n  hit.rd = normalize(refract(rr.rd, -shiftSign * hit.normal, rfrRate));\n  hit.ro = rr.pos + hitDist * (rr.rd + shiftSign * hit.normal);\n  return hit;\n}\n\nstruct Layer {\n  vec3 ro;\n  vec3 rd;\n  vec3 pos;\n  bool firstLayer;\n  vec3 color;\n  bool done;\n};\n\nLayer processLayer(Layer prevLayer, float ior) {\n  Layer res;\n  res.color = vec3(1.);\n  res.firstLayer = false;\n  res.done = true;\n\n  RaymarchResult iter0 = march(prevLayer.ro, prevLayer.rd);\n  if (iter0.sdf < hitDist) {\n    Hit hit0 = processHit(iter0, -1., ior);\n\n    RaymarchResult iter1 = march(hit0.ro, hit0.rd);\n    Hit hit1 = processHit(iter1, 1., ior);\n\n    res.color =\n      getFilmColor(prevLayer.rd, hit0.normal, iter0.pos) *\n      getFilmColor(hit0.rd, hit1.normal, iter1.pos) *\n      getTint(iter1.d)\n    ;\n    res.done = false;\n    res.ro = hit1.ro;\n    res.rd = hit1.rd;\n    res.pos = iter0.pos;\n\n  } else {\n\n    float grid = -(prevLayer.ro.y + floorShift) / prevLayer.rd.y;\n    vec3 pos = prevLayer.ro + prevLayer.rd * grid;\n    #ifdef enableGrid\n    res.color = vec3(min(\n      smoothstep(0., .02, abs(.5 - fract(pos.x))),\n      smoothstep(0., .02, abs(.5 - fract(pos.z)))\n    ) * .04 + .96);\n    #endif\n\n    if (prevLayer.firstLayer) {\n      float shadow = exp(-map(pos)) * .5;\n      res.color *= mix(vec3(1.), brandColor, shadow);\n      res.pos = pos;\n    }\n\n    res.color = mix(res.color, vec3(1.), sappear);\n  }\n\n  return res;\n}\n\nvoid main() {\n\n  rot45 = rotation2d(pi * .25);\n  sappear = saturate(appear);\n\n  vec3 rd = normalize(vec3(0., -.5 * floorShift, 0.) - cameraMatrixWorld[3].xyz);\n  vec2 ndc = vPos;\n  vec4 targetWorld4 = cameraMatrixWorld * projectionMatrixInverse * vec4(ndc, 0., 1.);\n  vec3 ro = targetWorld4.xyz / targetWorld4.w;\n\n  vec3 color = vec3(1.), pos;\n\n  Layer currentLayer;\n  currentLayer.ro = ro;\n  currentLayer.rd = rd;\n  currentLayer.firstLayer = true;\n  for (int i = 0; i < 3; i++) {\n    Layer meh = currentLayer;\n    currentLayer = processLayer(currentLayer, .9);\n    color *= currentLayer.color;\n    if (meh.firstLayer) {\n      pos = currentLayer.pos;\n    }\n    if (currentLayer.done) {\n      break;\n    }\n  }\n\n  color = saturate(color);\n\n  gl_FragColor = vec4(color, 1.);\n\n  inject_depth\n\n}\n"
          : "precision highp float;\n\ninject_defines\n\nvarying vec2 vUv;\nvarying vec2 vPos;\n\n#define pi 3.141592653589793\n#define maxDist 15.\n#define hitDist .001\n#define minMarchDist .0125\n#define maxMarchSteps 128\n#define saturate(x) clamp(x, 0., 1.)\n\nuniform float appear;\nuniform float seconds;\nuniform float morph;\nuniform float theta;\nuniform vec2 pixelSize;\nuniform mat4 cameraMatrixWorld;\nuniform mat4 projectionMatrixInverse;\nuniform sampler2D filmMap;\nuniform sampler2D brandMap;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\n\nfloat sappear;\nmat2 rot45;\n\nfloat handleAnim(float a) {\n  float x = saturate(a);\n  return x * x * x * (x * (x * 6. - 15.) + 10.);\n}\n\nvec4 permute(vec4 x) {\n  return mod(((x * 34.) + 1.) * x, 289.);\n}\nvec4 taylorInvSqrt(vec4 r) {\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\nvec3 fade(vec3 t) {\n  return t * t * t * (t * (t * 6. - 15.) + 10.);\n}\n\nfloat cnoise(vec3 P){\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod(Pi0, 289.0);\n  Pi1 = mod(Pi1, 289.0);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 / 7.0;\n  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 / 7.0;\n  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\nmat2 rotation2d(float angle) {\n\tfloat s = sin(angle), c = cos(angle);\n\treturn mat2(c, -s, s, c);\n}\n\nfloat opSmoothSubtraction( float d1, float d2, float k ) {\n  float h = clamp(.5 - .5 * (d2 + d1) / k, 0., 1.);\n  return mix(d2, -d1, h) + k * h * (1. - h);\n}\n\nfloat sdBox(vec2 p, vec2 b) {\n  vec2 d = abs(p) - b;\n  return length(max(d, 0.)) + min(max(d.x, d.y), 0.);\n}\n\nfloat sdBox(vec3 p, vec3 b) {\n  vec3 q = abs(p) - b;\n  return length(max(q, 0.)) + min(max(q.x, max(q.y, q.z)),0.);\n}\n\nfloat sdOctahedron(vec3 p, float s) {\n  p = abs(p);\n  return (p.x + p.y + p.z - s) * .57735027;\n}\n\nfloat map(vec3 space) {\n  float anim = mod(morph * morphRate, 4.);\n  mat2 rotAnim = rotation2d(theta);\n\n  vec3 q = space * scale;\n  q.xz *= rotAnim;\n\n  vec3 p = q;\n  p.xy *= rot45;\n\n  q.y *= 0.75;\n  q.xz *= rot45;\n\n  float crystal = sdOctahedron(q, 1.) - .2;\n\n  vec3 tripetSideSize = vec3(1., 1., .05) * smoothstep(.5, 1., anim);\n  float triplet =        sdBox(p                   , vec3(1., 1., .05));\n  triplet = min(triplet, sdBox(p + vec3(0., 0., 1.), tripetSideSize));\n  triplet = min(triplet, sdBox(p - vec3(0., 0., 1.), tripetSideSize));\n  triplet -= .1;\n  float tripletCrystalHole = sdOctahedron(q, .8) - .1;\n  tripletCrystalHole = opSmoothSubtraction(tripletCrystalHole, triplet, .1);\n\n  float cubeWalls = abs(sdBox(p.xy, vec2(.8)) - .2);\n  cubeWalls = length(vec2(cubeWalls, max(abs(p.z) - 1., 0.))) - .1;\n\n  float cube = sdBox(p, vec3(.9)) - .2;\n\n  float d = crystal;\n  d = mix(d, tripletCrystalHole, handleAnim(anim));\n  d = mix(d, cubeWalls, handleAnim(anim - 1.));\n  d = mix(d, cube, handleAnim(anim - 2.));\n  d = mix(d, crystal, handleAnim(anim - 3.));\n\n  float shapeAppear = smoothstep(.5, 0., sappear);\n  float start = length(p) - shapeAppear;\n  d = mix(start, d, shapeAppear);\n\n  return d;\n}\n\nvec3 calcNormal(vec3 pos) {\n  const float h = .01; // replace by an appropriate value\n  const vec2 k = vec2(1., -1.);\n  return normalize(k.xyy * map(pos + k.xyy * h) +\n                   k.yyx * map(pos + k.yyx * h) +\n                   k.yxy * map(pos + k.yxy * h) +\n                   k.xxx * map(pos + k.xxx * h));\n}\n\nvoid main() {\n\n  rot45 = rotation2d(pi * .25);\n  sappear = saturate(appear);\n\n  vec3 rd = normalize(vec3(0., -.5 * floorShift, 0.) - cameraMatrixWorld[3].xyz);\n  vec3 aaColor = vec3(0.);\n  vec2 ndc = vPos;\n  vec4 targetWorld4 = cameraMatrixWorld * projectionMatrixInverse * vec4(ndc, 0., 1.);\n  vec3 ro = targetWorld4.xyz / targetWorld4.w;\n\n  vec3 color, pos;\n  float maxDistL = -(ro.y + floorShift) / rd.y;\n  maxDistL = maxDistL > 0. ? min(maxDist, maxDistL) : maxDist;\n\n  float d = minMarchDist, sdf;\n  for (int i = 0; i < maxMarchSteps; i++) {\n    pos = ro + rd * d;\n    sdf = map(pos);\n    d += sdf;\n    if (d > maxDistL || sdf < hitDist) {\n      break;\n    }\n  }\n  if (sdf < hitDist) {\n    vec3 normal = calcNormal(pos);\n\n    float noise = max(cnoise(pos + seconds * .4) + pos.y + scale, 0.) * .1;\n\n    float grad = .8 - .3 * abs(dot(normal, rd)) + noise;\n    color = texture2D(brandMap, vec2(grad, .5)).rgb;\n\n    float fresnel = pow(1. - abs(dot(normal, rd)), 5.);\n    vec3 filmColor = texture2D(filmMap, vec2(fresnel * .75 + .085 + noise, .5)).rgb;\n    color += filmColor * .25 * (fresnel * .5 + .5) + fresnel * .5;\n  } else {\n\n    float grid = -(ro.y + floorShift) / rd.y;\n    pos = ro + rd * grid;\n    #ifdef enableGrid\n    color = vec3(min(\n      smoothstep(0., .02, abs(.5 - fract(pos.x))),\n      smoothstep(0., .02, abs(.5 - fract(pos.z)))\n    ) * .04 + .96);\n    #else\n    color = vec3(1.);\n    #endif\n\n    float shadow = exp(-map(pos)) * .5;\n    color *= mix(vec3(1.), brandColor, shadow);\n\n    color = mix(color, vec3(1.), sappear);\n  }\n\n  gl_FragColor = vec4(saturate(color), 1.);\n\n  inject_depth\n}\n",
        i = iA.replace("inject_z", "0."),
        r =
          "#extension GL_EXT_frag_depth: enable\n" +
          e
            .replace("inject_defines", this.defines)
            .replace(
              "inject_depth",
              "vec4 projected = projectionMatrix * viewMatrix * vec4(pos, 1.);\ngl_FragDepthEXT = saturate(projected.z / projected.w * .5 + .5);\ngl_FragDepthEXT = max(gl_FragDepthEXT, .5);\n"
            ),
        n = iA.replace("inject_z", 0.5),
        s = e
          .replace("inject_defines", this.defines)
          .replace("inject_depth", "");
      (this.programDepth = new H(this.gl, {
        vertex: i,
        fragment: r,
        uniforms: t,
      })),
        (this.programUsual = new H(this.gl, {
          vertex: n,
          fragment: s,
          uniforms: t,
        })),
        (this.program = this.programDepth);
    };
    switchDepthWrite = (A) => {
      this.program = A ? this.programDepth : this.programUsual;
    };
  })(UA, qA, {
    lockFloorRotation: !0,
    rotationSpeed: 0.2,
    morphingSpeed: 0.08,
    shapeScale: 1.25,
    color: 6649052,
    enableGrid: !1,
  }),
    xA.visible &&
      new (class extends D {
        constructor(A, t, e) {
          const {
              count: i,
              minDistance: r,
              maxDistance: n,
              rotationSpeed: s,
              modulationRate: a,
              size: o = 250,
              edgeSharpness: h = 0.475,
              yShift: c,
            } = e,
            g = new Float32Array(3 * i),
            u = new Float32Array(4 * i);
          for (let A = 0; A < i; A++)
            g.set(
              new l(
                12 * Math.random() - 6,
                0.5 * Math.random(),
                12 * Math.random() - 6
              )
                .normalize()
                .multiply(Math.random() * (n - r) + r),
              3 * A
            ),
              u.set(
                [Math.random(), Math.random(), Math.random(), Math.random()],
                4 * A
              );
          const d = new O(A, {
              position: { size: 3, data: g },
              random: { size: 4, data: u },
            }),
            p = `\n            #define rotationSpeed ${s.toFixed(
              5
            )}\n            #define modulationRate ${a.toFixed(
              5
            )}\n            #define size ${o.toFixed(
              5
            )}\n            #define yShift ${c.toFixed(5)}\n          `,
            f = `\n            #define edgeSharpness ${h.toFixed(
              5
            )}\n          `,
            m = new H(A, {
              vertex:
                "precision highp float;\n\ninject_defines\n\nattribute vec3 position;\nattribute vec4 random;\n\nvarying vec4 vRandom;\n\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform float seconds;\nuniform float appear;\nuniform float theta;\nuniform float scale;\n\nmat2 rotation2d(float angle) {\n\tfloat s = sin(angle), c = cos(angle);\n\treturn mat2(c, -s, s, c);\n}\n\nvoid main() {\n  vRandom = random;\n\n  vec3 pos = position;\n  pos.xz = rotation2d(theta) * pos.xz;\n  pos.y += yShift;\n\n  float t = seconds * .6;\n  pos.x += sin(t * random.z + 6.28 * random.w) * random.x;\n  pos.y += sin(t * random.y + 6.28 * random.x) * random.w;\n  pos.z += sin(t * random.w + 6.28 * random.y) * random.z;\n\n  vec4 mvPos = viewMatrix * vec4(pos, 1.);\n  gl_PointSize = scale * appear * size / (length(mvPos.xyz) + 2. + random.y);\n\n  gl_Position = projectionMatrix * mvPos;\n\n  vec2 ndc = gl_Position.xy / gl_Position.w;\n}\n".replace(
                  "inject_defines",
                  p
                ),
              fragment:
                "precision highp float;\n\ninject_defines\n\nuniform float seconds;\nuniform sampler2D brandMap;\n\nvarying vec4 vRandom;\n\nvoid main() {\n  vec2 uv = gl_PointCoord.xy;\n\n  if (length(uv - .5) > .5) discard;\n\n  gl_FragColor = vec4(\n    texture2D(brandMap, vec2(vRandom.z * .8 + .1 * (1. + uv.y - uv.x), .5)).rgb,\n    1.\n  );\n}\n".replace(
                  "inject_defines",
                  f
                ),
              uniforms: {
                seconds: { value: 0 },
                theta: { value: 0 },
                appear: { value: 1 },
                scale: tA("screen.superSample"),
                brandMap: tA("texture.brand"),
              },
            });
          super(A, { mode: A.POINTS, geometry: d, program: m }),
            t.addChild(this),
            (this.settings = e),
            (this.uniforms = this.program.uniforms),
            $.on("frame", this.onFrame);
        }
        onFrame = ({ time: A, rotation: t, controls: e }) => {
          (this.uniforms.seconds.value = 0.001 * A),
            (this.uniforms.appear.value = Math.min(1, 5e-4 * A)),
            (this.uniforms.theta.value =
              e.spherical.theta + t * this.settings.rotationSpeed * 0.001);
        };
      })(UA, qA, xA);
  const DA = [
    YA(
      "data:image/png;base64,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"
    ),
    YA(
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAAQCAIAAADvU1AfAAACY0lEQVR42u2czWocMRCEq4whl9zy/u+ZgFHloNbvSGOts8Q4qY9BzLZarZYWtvZUTJIkAYIECUiQBKAGIUhSAlBm+6mk9h6rpBQfc34rlQBJGotDSJiDCQByHUh9PK/okqUhf9gujpJnBSRFk6mt7c+O/nTomk/lHqYmp0jdTv2J1PUT+fGkuM7+LP3dCsw5UTCV9tD1k+pVD52UO1HbDuWucgWIEAQSkJhjEABOoy6R2xy2OsjvFEBRZdNxeSRHztFGXLeK3RY1ARL43ok2s3EWABKjSMC2aX+xrdSiWwnE3XmZNxDy7TBvBFFkCdYm2nsdxYj3Y60ZkVUOxjqRJohTS31NinFasV9eZusl1IWcN7q2Udurx0R76cfum2jvJ2n3Zc8TPrz2A/vij3t++6nvP15esUGrp8S1H4efy/KrNArAHFmkFb2pAqBJANLjAqBTAZiV71EB0JEAqBcA3QgA1gKgnQBoJwDDXe0FgE8WAJ0IAJ8mADoRAD5ZAHQiAL0MxCiBiP8aWI0LAVDc5pkA4EYA1rPLzKKr15ZGAUARAOwE4GaLd1p6XAD4FwXgK659+6UXGGOM+S+xABhjjAXAGGOMBcAYY4wFwBhjjAXAGGOMBcAYY4wFwBhjjAXAGGOMBcAYY4wFwBhjjAXAGGOMBcAYY8znsnUD5SbCy+RkT6rR0BBrP9H2cFwYD6c4q/9l9lR82Vkfj8acqbg6NztojG6guLiBYrSDHv1Nr57VV1dUbJI1mJ4WO2iMdtBzfYF9q8UetS25uIHSdtD/vB00PskOGmd20LAdNL6CHfTrN/4GWylu5oz46loAAAAASUVORK5CYII="
    ),
  ];
  function GA(A) {
    if (yA && CA) {
      let t = Math.min(1e3 / 30, A - RA);
      (IA += t),
        (wA += MA ? 0 : t),
        TA.update(),
        $.dispatch("frame", {
          time: IA,
          dt: t,
          rotation: wA,
          animationDirection: vA,
          camera: jA,
          controls: TA,
        }),
        bA.render({ scene: qA, camera: jA }),
        PA.done || (PA.onFrame(0.001 * A), bA.clear());
    }
    (RA = A), FA && requestAnimationFrame(GA);
  }
  function VA(A) {
    (FA = !1), SA.removeChild(UA.canvas);
    const t = new Image();
    (t.src =
      "data:image/jpeg;base64,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AigAAIUEKARQBKAAAAAAAAAAAAAAAAAAJQAACUQoACFgoACAKAAAAAAAAAAAAAAAAAAAAAACS0AAESqAACFAAAAAAAAAAAAAAAAAAAAAAABBQAQpCgAAIoAAAAAAAAAAAAAAAAAAAAAAAIoCFAEKBFAAAAAAAAAAAAAAAAAAAAAAAAAAlQUAACFAAAAAAAAAAAAAAAAAAAAAAAigAARNAAARNAAAQoAAAAAAAAAAAAAAAAAAAAAAEohQACUSgACUAAAAAAAAAAAAAAAAAAAAAACKAABCgAAAAAAAAAAAAAAAAAAAAAAAAABFAAAIoABFAAAAAAAAAAAAAAAAAAAAAAABFAAAgoAAEUAAAAAAAAAAAAAAAAAAAAAAEoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARQAAIUAACKAAAAAAAAAAAAAAAAAAAAAAAAAAAAABKAAAAAAAAAAAAAAAAAAAAAAAAAAAQoAAEKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQMCBQQG/9oACAEC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"),
      (t.style.opacity = 0),
      SA.appendChild(t),
      requestAnimationFrame(() => {
        t.style.opacity = 1;
      });
  }
  Promise.all(DA).then(([A, t]) => {
    eA("texture.film", A),
      eA("texture.brand", t),
      (RA = performance.now()),
      requestAnimationFrame(GA);
  }),
    UA.canvas.addEventListener("webglcontextlost", VA),
    $.on("noWebGL", VA),
    $.on("benchmark.done", function (A) {
      (IA = 0),
        QA
          ? (A < 30 && ((QA = !1), $.dispatch("quality", QA)),
            $.dispatch("object.appear"))
          : A < 30
          ? VA()
          : A > 45
          ? ((QA = !0), $.dispatch("quality", QA), PA.reset())
          : $.dispatch("object.appear");
    }),
    window.addEventListener("mousemove", function (A) {
      const t = (A.clientX / window.innerWidth) * 2 - 1,
        e = 1 - (A.clientY / window.innerHeight) * 2;
      (LA.x = t), (LA.y = e), (BA = !0);
    }),
    SA.addEventListener("mousedown", () => {
      (BA = !1), (MA = !0);
    }),
    SA.addEventListener("mouseup", () => {
      BA || (vA *= -1), (MA = !1);
    }),
    document.addEventListener("visibilitychange", () => {
      CA = "hidden" !== document.visibilityState;
    }),
    new IntersectionObserver((A) => {
      const [t] = A;
      yA = t.isIntersecting;
    }).observe(UA.canvas);
})();
//# sourceMappingURL=bundle.js.map
