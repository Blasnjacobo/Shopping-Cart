function Lh(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var Dh =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function ei(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Oc = { exports: {} },
  No = {},
  Mc = { exports: {} },
  H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ti = Symbol.for("react.element"),
  zh = Symbol.for("react.portal"),
  Ih = Symbol.for("react.fragment"),
  $h = Symbol.for("react.strict_mode"),
  Bh = Symbol.for("react.profiler"),
  Fh = Symbol.for("react.provider"),
  Uh = Symbol.for("react.context"),
  bh = Symbol.for("react.forward_ref"),
  Wh = Symbol.for("react.suspense"),
  Hh = Symbol.for("react.memo"),
  Vh = Symbol.for("react.lazy"),
  eu = Symbol.iterator;
function Qh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (eu && e[eu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Pc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ac = Object.assign,
  Lc = {};
function nr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Lc),
    (this.updater = n || Pc);
}
nr.prototype.isReactComponent = {};
nr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
nr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Dc() {}
Dc.prototype = nr.prototype;
function Wl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Lc),
    (this.updater = n || Pc);
}
var Hl = (Wl.prototype = new Dc());
Hl.constructor = Wl;
Ac(Hl, nr.prototype);
Hl.isPureReactComponent = !0;
var tu = Array.isArray,
  zc = Object.prototype.hasOwnProperty,
  Vl = { current: null },
  Ic = { key: !0, ref: !0, __self: !0, __source: !0 };
function $c(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      zc.call(t, r) && !Ic.hasOwnProperty(r) && (i[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) i.children = n;
  else if (1 < u) {
    for (var d = Array(u), p = 0; p < u; p++) d[p] = arguments[p + 2];
    i.children = d;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) i[r] === void 0 && (i[r] = u[r]);
  return {
    $$typeof: ti,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Vl.current,
  };
}
function Kh(e, t) {
  return {
    $$typeof: ti,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ql(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ti;
}
function Xh(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var nu = /\/+/g;
function ns(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Xh("" + e.key)
    : t.toString(36);
}
function Li(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ti:
          case zh:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + ns(s, 0) : r),
      tu(i)
        ? ((n = ""),
          e != null && (n = e.replace(nu, "$&/") + "/"),
          Li(i, t, n, "", function (p) {
            return p;
          }))
        : i != null &&
          (Ql(i) &&
            (i = Kh(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(nu, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), tu(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var d = r + ns(o, u);
      s += Li(o, t, n, d, i);
    }
  else if (((d = Qh(e)), typeof d == "function"))
    for (e = d.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (d = r + ns(o, u++)), (s += Li(o, t, n, d, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function pi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Li(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Gh(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Me = { current: null },
  Di = { transition: null },
  Yh = {
    ReactCurrentDispatcher: Me,
    ReactCurrentBatchConfig: Di,
    ReactCurrentOwner: Vl,
  };
H.Children = {
  map: pi,
  forEach: function (e, t, n) {
    pi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      pi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      pi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ql(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
H.Component = nr;
H.Fragment = Ih;
H.Profiler = Bh;
H.PureComponent = Wl;
H.StrictMode = $h;
H.Suspense = Wh;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yh;
H.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ac({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Vl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (d in t)
      zc.call(t, d) &&
        !Ic.hasOwnProperty(d) &&
        (r[d] = t[d] === void 0 && u !== void 0 ? u[d] : t[d]);
  }
  var d = arguments.length - 2;
  if (d === 1) r.children = n;
  else if (1 < d) {
    u = Array(d);
    for (var p = 0; p < d; p++) u[p] = arguments[p + 2];
    r.children = u;
  }
  return { $$typeof: ti, type: e.type, key: i, ref: o, props: r, _owner: s };
};
H.createContext = function (e) {
  return (
    (e = {
      $$typeof: Uh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Fh, _context: e }),
    (e.Consumer = e)
  );
};
H.createElement = $c;
H.createFactory = function (e) {
  var t = $c.bind(null, e);
  return (t.type = e), t;
};
H.createRef = function () {
  return { current: null };
};
H.forwardRef = function (e) {
  return { $$typeof: bh, render: e };
};
H.isValidElement = Ql;
H.lazy = function (e) {
  return { $$typeof: Vh, _payload: { _status: -1, _result: e }, _init: Gh };
};
H.memo = function (e, t) {
  return { $$typeof: Hh, type: e, compare: t === void 0 ? null : t };
};
H.startTransition = function (e) {
  var t = Di.transition;
  Di.transition = {};
  try {
    e();
  } finally {
    Di.transition = t;
  }
};
H.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
H.useCallback = function (e, t) {
  return Me.current.useCallback(e, t);
};
H.useContext = function (e) {
  return Me.current.useContext(e);
};
H.useDebugValue = function () {};
H.useDeferredValue = function (e) {
  return Me.current.useDeferredValue(e);
};
H.useEffect = function (e, t) {
  return Me.current.useEffect(e, t);
};
H.useId = function () {
  return Me.current.useId();
};
H.useImperativeHandle = function (e, t, n) {
  return Me.current.useImperativeHandle(e, t, n);
};
H.useInsertionEffect = function (e, t) {
  return Me.current.useInsertionEffect(e, t);
};
H.useLayoutEffect = function (e, t) {
  return Me.current.useLayoutEffect(e, t);
};
H.useMemo = function (e, t) {
  return Me.current.useMemo(e, t);
};
H.useReducer = function (e, t, n) {
  return Me.current.useReducer(e, t, n);
};
H.useRef = function (e) {
  return Me.current.useRef(e);
};
H.useState = function (e) {
  return Me.current.useState(e);
};
H.useSyncExternalStore = function (e, t, n) {
  return Me.current.useSyncExternalStore(e, t, n);
};
H.useTransition = function () {
  return Me.current.useTransition();
};
H.version = "18.2.0";
Mc.exports = H;
var v = Mc.exports;
const M = ei(v),
  Zh = Lh({ __proto__: null, default: M }, [v]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jh = v,
  qh = Symbol.for("react.element"),
  em = Symbol.for("react.fragment"),
  tm = Object.prototype.hasOwnProperty,
  nm = Jh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  rm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bc(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) tm.call(t, r) && !rm.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: qh,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: nm.current,
  };
}
No.Fragment = em;
No.jsx = Bc;
No.jsxs = Bc;
Oc.exports = No;
var h = Oc.exports,
  Ds = {},
  Fc = { exports: {} },
  be = {},
  Uc = { exports: {} },
  bc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, P) {
    var L = j.length;
    j.push(P);
    e: for (; 0 < L; ) {
      var $ = (L - 1) >>> 1,
        V = j[$];
      if (0 < i(V, P)) (j[$] = P), (j[L] = V), (L = $);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var P = j[0],
      L = j.pop();
    if (L !== P) {
      j[0] = L;
      e: for (var $ = 0, V = j.length, ne = V >>> 1; $ < ne; ) {
        var te = 2 * ($ + 1) - 1,
          X = j[te],
          G = te + 1,
          Ye = j[G];
        if (0 > i(X, L))
          G < V && 0 > i(Ye, X)
            ? ((j[$] = Ye), (j[G] = L), ($ = G))
            : ((j[$] = X), (j[te] = L), ($ = te));
        else if (G < V && 0 > i(Ye, L)) (j[$] = Ye), (j[G] = L), ($ = G);
        else break e;
      }
    }
    return P;
  }
  function i(j, P) {
    var L = j.sortIndex - P.sortIndex;
    return L !== 0 ? L : j.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      u = s.now();
    e.unstable_now = function () {
      return s.now() - u;
    };
  }
  var d = [],
    p = [],
    y = 1,
    w = null,
    c = 3,
    C = !1,
    x = !1,
    E = !1,
    m = typeof setTimeout == "function" ? setTimeout : null,
    l = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(j) {
    for (var P = n(p); P !== null; ) {
      if (P.callback === null) r(p);
      else if (P.startTime <= j)
        r(p), (P.sortIndex = P.expirationTime), t(d, P);
      else break;
      P = n(p);
    }
  }
  function g(j) {
    if (((E = !1), f(j), !x))
      if (n(d) !== null) (x = !0), J(N);
      else {
        var P = n(p);
        P !== null && K(g, P.startTime - j);
      }
  }
  function N(j, P) {
    (x = !1), E && ((E = !1), l(k), (k = -1)), (C = !0);
    var L = c;
    try {
      for (
        f(P), w = n(d);
        w !== null && (!(w.expirationTime > P) || (j && !z()));

      ) {
        var $ = w.callback;
        if (typeof $ == "function") {
          (w.callback = null), (c = w.priorityLevel);
          var V = $(w.expirationTime <= P);
          (P = e.unstable_now()),
            typeof V == "function" ? (w.callback = V) : w === n(d) && r(d),
            f(P);
        } else r(d);
        w = n(d);
      }
      if (w !== null) var ne = !0;
      else {
        var te = n(p);
        te !== null && K(g, te.startTime - P), (ne = !1);
      }
      return ne;
    } finally {
      (w = null), (c = L), (C = !1);
    }
  }
  var _ = !1,
    S = null,
    k = -1,
    D = 5,
    T = -1;
  function z() {
    return !(e.unstable_now() - T < D);
  }
  function U() {
    if (S !== null) {
      var j = e.unstable_now();
      T = j;
      var P = !0;
      try {
        P = S(!0, j);
      } finally {
        P ? q() : ((_ = !1), (S = null));
      }
    } else _ = !1;
  }
  var q;
  if (typeof a == "function")
    q = function () {
      a(U);
    };
  else if (typeof MessageChannel < "u") {
    var B = new MessageChannel(),
      W = B.port2;
    (B.port1.onmessage = U),
      (q = function () {
        W.postMessage(null);
      });
  } else
    q = function () {
      m(U, 0);
    };
  function J(j) {
    (S = j), _ || ((_ = !0), q());
  }
  function K(j, P) {
    k = m(function () {
      j(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || C || ((x = !0), J(N));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (D = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return c;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(d);
    }),
    (e.unstable_next = function (j) {
      switch (c) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = c;
      }
      var L = c;
      c = P;
      try {
        return j();
      } finally {
        c = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, P) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var L = c;
      c = j;
      try {
        return P();
      } finally {
        c = L;
      }
    }),
    (e.unstable_scheduleCallback = function (j, P, L) {
      var $ = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? $ + L : $))
          : (L = $),
        j)
      ) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return (
        (V = L + V),
        (j = {
          id: y++,
          callback: P,
          priorityLevel: j,
          startTime: L,
          expirationTime: V,
          sortIndex: -1,
        }),
        L > $
          ? ((j.sortIndex = L),
            t(p, j),
            n(d) === null &&
              j === n(p) &&
              (E ? (l(k), (k = -1)) : (E = !0), K(g, L - $)))
          : ((j.sortIndex = V), t(d, j), x || C || ((x = !0), J(N))),
        j
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (j) {
      var P = c;
      return function () {
        var L = c;
        c = P;
        try {
          return j.apply(this, arguments);
        } finally {
          c = L;
        }
      };
    });
})(bc);
Uc.exports = bc;
var im = Uc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wc = v,
  Ue = im;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Hc = new Set(),
  Lr = {};
function xn(e, t) {
  Xn(e, t), Xn(e + "Capture", t);
}
function Xn(e, t) {
  for (Lr[e] = t, e = 0; e < t.length; e++) Hc.add(t[e]);
}
var _t = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  zs = Object.prototype.hasOwnProperty,
  om =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ru = {},
  iu = {};
function sm(e) {
  return zs.call(iu, e)
    ? !0
    : zs.call(ru, e)
    ? !1
    : om.test(e)
    ? (iu[e] = !0)
    : ((ru[e] = !0), !1);
}
function lm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function am(e, t, n, r) {
  if (t === null || typeof t > "u" || lm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Pe(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var Ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ee[e] = new Pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ee[t] = new Pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ee[e] = new Pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ee[e] = new Pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ee[e] = new Pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ee[e] = new Pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ee[e] = new Pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ee[e] = new Pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ee[e] = new Pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Kl = /[\-:]([a-z])/g;
function Xl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Kl, Xl);
    Ee[t] = new Pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Kl, Xl);
    Ee[t] = new Pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Kl, Xl);
  Ee[t] = new Pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ee[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ee.xlinkHref = new Pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ee[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Gl(e, t, n, r) {
  var i = Ee.hasOwnProperty(t) ? Ee[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (am(t, n, i, r) && (n = null),
    r || i === null
      ? sm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var jt = Wc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  hi = Symbol.for("react.element"),
  Rn = Symbol.for("react.portal"),
  Tn = Symbol.for("react.fragment"),
  Yl = Symbol.for("react.strict_mode"),
  Is = Symbol.for("react.profiler"),
  Vc = Symbol.for("react.provider"),
  Qc = Symbol.for("react.context"),
  Zl = Symbol.for("react.forward_ref"),
  $s = Symbol.for("react.suspense"),
  Bs = Symbol.for("react.suspense_list"),
  Jl = Symbol.for("react.memo"),
  Pt = Symbol.for("react.lazy"),
  Kc = Symbol.for("react.offscreen"),
  ou = Symbol.iterator;
function cr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ou && e[ou]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ce = Object.assign,
  rs;
function wr(e) {
  if (rs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      rs = (t && t[1]) || "";
    }
  return (
    `
` +
    rs +
    e
  );
}
var is = !1;
function os(e, t) {
  if (!e || is) return "";
  is = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (p) {
          var r = p;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (p) {
          r = p;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (p) {
        r = p;
      }
      e();
    }
  } catch (p) {
    if (p && r && typeof p.stack == "string") {
      for (
        var i = p.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          u = o.length - 1;
        1 <= s && 0 <= u && i[s] !== o[u];

      )
        u--;
      for (; 1 <= s && 0 <= u; s--, u--)
        if (i[s] !== o[u]) {
          if (s !== 1 || u !== 1)
            do
              if ((s--, u--, 0 > u || i[s] !== o[u])) {
                var d =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    d.includes("<anonymous>") &&
                    (d = d.replace("<anonymous>", e.displayName)),
                  d
                );
              }
            while (1 <= s && 0 <= u);
          break;
        }
    }
  } finally {
    (is = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? wr(e) : "";
}
function um(e) {
  switch (e.tag) {
    case 5:
      return wr(e.type);
    case 16:
      return wr("Lazy");
    case 13:
      return wr("Suspense");
    case 19:
      return wr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = os(e.type, !1)), e;
    case 11:
      return (e = os(e.type.render, !1)), e;
    case 1:
      return (e = os(e.type, !0)), e;
    default:
      return "";
  }
}
function Fs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Tn:
      return "Fragment";
    case Rn:
      return "Portal";
    case Is:
      return "Profiler";
    case Yl:
      return "StrictMode";
    case $s:
      return "Suspense";
    case Bs:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Qc:
        return (e.displayName || "Context") + ".Consumer";
      case Vc:
        return (e._context.displayName || "Context") + ".Provider";
      case Zl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Jl:
        return (
          (t = e.displayName || null), t !== null ? t : Fs(e.type) || "Memo"
        );
      case Pt:
        (t = e._payload), (e = e._init);
        try {
          return Fs(e(t));
        } catch {}
    }
  return null;
}
function cm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Fs(t);
    case 8:
      return t === Yl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Gt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Xc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function dm(e) {
  var t = Xc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function mi(e) {
  e._valueTracker || (e._valueTracker = dm(e));
}
function Gc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Xc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Xi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Us(e, t) {
  var n = t.checked;
  return ce({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function su(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Gt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Yc(e, t) {
  (t = t.checked), t != null && Gl(e, "checked", t, !1);
}
function bs(e, t) {
  Yc(e, t);
  var n = Gt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ws(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ws(e, t.type, Gt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function lu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ws(e, t, n) {
  (t !== "number" || Xi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var xr = Array.isArray;
function Un(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Gt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Hs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return ce({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function au(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (xr(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Gt(n) };
}
function Zc(e, t) {
  var n = Gt(t.value),
    r = Gt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function uu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Jc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Vs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Jc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var gi,
  qc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        gi = gi || document.createElement("div"),
          gi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = gi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Dr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Sr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  fm = ["Webkit", "ms", "Moz", "O"];
Object.keys(Sr).forEach(function (e) {
  fm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Sr[t] = Sr[e]);
  });
});
function ed(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Sr.hasOwnProperty(e) && Sr[e])
    ? ("" + t).trim()
    : t + "px";
}
function td(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = ed(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var pm = ce(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Qs(e, t) {
  if (t) {
    if (pm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function Ks(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Xs = null;
function ql(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Gs = null,
  bn = null,
  Wn = null;
function cu(e) {
  if ((e = ii(e))) {
    if (typeof Gs != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = To(t)), Gs(e.stateNode, e.type, t));
  }
}
function nd(e) {
  bn ? (Wn ? Wn.push(e) : (Wn = [e])) : (bn = e);
}
function rd() {
  if (bn) {
    var e = bn,
      t = Wn;
    if (((Wn = bn = null), cu(e), t)) for (e = 0; e < t.length; e++) cu(t[e]);
  }
}
function id(e, t) {
  return e(t);
}
function od() {}
var ss = !1;
function sd(e, t, n) {
  if (ss) return e(t, n);
  ss = !0;
  try {
    return id(e, t, n);
  } finally {
    (ss = !1), (bn !== null || Wn !== null) && (od(), rd());
  }
}
function zr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = To(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var Ys = !1;
if (_t)
  try {
    var dr = {};
    Object.defineProperty(dr, "passive", {
      get: function () {
        Ys = !0;
      },
    }),
      window.addEventListener("test", dr, dr),
      window.removeEventListener("test", dr, dr);
  } catch {
    Ys = !1;
  }
function hm(e, t, n, r, i, o, s, u, d) {
  var p = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, p);
  } catch (y) {
    this.onError(y);
  }
}
var kr = !1,
  Gi = null,
  Yi = !1,
  Zs = null,
  mm = {
    onError: function (e) {
      (kr = !0), (Gi = e);
    },
  };
function gm(e, t, n, r, i, o, s, u, d) {
  (kr = !1), (Gi = null), hm.apply(mm, arguments);
}
function vm(e, t, n, r, i, o, s, u, d) {
  if ((gm.apply(this, arguments), kr)) {
    if (kr) {
      var p = Gi;
      (kr = !1), (Gi = null);
    } else throw Error(R(198));
    Yi || ((Yi = !0), (Zs = p));
  }
}
function Cn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ld(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function du(e) {
  if (Cn(e) !== e) throw Error(R(188));
}
function ym(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Cn(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return du(i), e;
        if (o === r) return du(i), t;
        o = o.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, u = i.child; u; ) {
        if (u === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (u === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!s) {
        for (u = o.child; u; ) {
          if (u === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (u === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          u = u.sibling;
        }
        if (!s) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function ad(e) {
  return (e = ym(e)), e !== null ? ud(e) : null;
}
function ud(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ud(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var cd = Ue.unstable_scheduleCallback,
  fu = Ue.unstable_cancelCallback,
  wm = Ue.unstable_shouldYield,
  xm = Ue.unstable_requestPaint,
  pe = Ue.unstable_now,
  Cm = Ue.unstable_getCurrentPriorityLevel,
  ea = Ue.unstable_ImmediatePriority,
  dd = Ue.unstable_UserBlockingPriority,
  Zi = Ue.unstable_NormalPriority,
  Em = Ue.unstable_LowPriority,
  fd = Ue.unstable_IdlePriority,
  So = null,
  ut = null;
function _m(e) {
  if (ut && typeof ut.onCommitFiberRoot == "function")
    try {
      ut.onCommitFiberRoot(So, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var rt = Math.clz32 ? Math.clz32 : km,
  Nm = Math.log,
  Sm = Math.LN2;
function km(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Nm(e) / Sm) | 0)) | 0;
}
var vi = 64,
  yi = 4194304;
function Cr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ji(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var u = s & ~i;
    u !== 0 ? (r = Cr(u)) : ((o &= s), o !== 0 && (r = Cr(o)));
  } else (s = n & ~i), s !== 0 ? (r = Cr(s)) : o !== 0 && (r = Cr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - rt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function jm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Rm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - rt(o),
      u = 1 << s,
      d = i[s];
    d === -1
      ? (!(u & n) || u & r) && (i[s] = jm(u, t))
      : d <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Js(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function pd() {
  var e = vi;
  return (vi <<= 1), !(vi & 4194240) && (vi = 64), e;
}
function ls(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ni(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - rt(t)),
    (e[t] = n);
}
function Tm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - rt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function ta(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - rt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var ee = 0;
function hd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var md,
  na,
  gd,
  vd,
  yd,
  qs = !1,
  wi = [],
  Ft = null,
  Ut = null,
  bt = null,
  Ir = new Map(),
  $r = new Map(),
  Dt = [],
  Om =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function pu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ft = null;
      break;
    case "dragenter":
    case "dragleave":
      Ut = null;
      break;
    case "mouseover":
    case "mouseout":
      bt = null;
      break;
    case "pointerover":
    case "pointerout":
      Ir.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      $r.delete(t.pointerId);
  }
}
function fr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = ii(t)), t !== null && na(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Mm(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Ft = fr(Ft, e, t, n, r, i)), !0;
    case "dragenter":
      return (Ut = fr(Ut, e, t, n, r, i)), !0;
    case "mouseover":
      return (bt = fr(bt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Ir.set(o, fr(Ir.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), $r.set(o, fr($r.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function wd(e) {
  var t = cn(e.target);
  if (t !== null) {
    var n = Cn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ld(n)), t !== null)) {
          (e.blockedOn = t),
            yd(e.priority, function () {
              gd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function zi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = el(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Xs = r), n.target.dispatchEvent(r), (Xs = null);
    } else return (t = ii(n)), t !== null && na(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function hu(e, t, n) {
  zi(e) && n.delete(t);
}
function Pm() {
  (qs = !1),
    Ft !== null && zi(Ft) && (Ft = null),
    Ut !== null && zi(Ut) && (Ut = null),
    bt !== null && zi(bt) && (bt = null),
    Ir.forEach(hu),
    $r.forEach(hu);
}
function pr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    qs ||
      ((qs = !0),
      Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority, Pm)));
}
function Br(e) {
  function t(i) {
    return pr(i, e);
  }
  if (0 < wi.length) {
    pr(wi[0], e);
    for (var n = 1; n < wi.length; n++) {
      var r = wi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ft !== null && pr(Ft, e),
      Ut !== null && pr(Ut, e),
      bt !== null && pr(bt, e),
      Ir.forEach(t),
      $r.forEach(t),
      n = 0;
    n < Dt.length;
    n++
  )
    (r = Dt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Dt.length && ((n = Dt[0]), n.blockedOn === null); )
    wd(n), n.blockedOn === null && Dt.shift();
}
var Hn = jt.ReactCurrentBatchConfig,
  qi = !0;
function Am(e, t, n, r) {
  var i = ee,
    o = Hn.transition;
  Hn.transition = null;
  try {
    (ee = 1), ra(e, t, n, r);
  } finally {
    (ee = i), (Hn.transition = o);
  }
}
function Lm(e, t, n, r) {
  var i = ee,
    o = Hn.transition;
  Hn.transition = null;
  try {
    (ee = 4), ra(e, t, n, r);
  } finally {
    (ee = i), (Hn.transition = o);
  }
}
function ra(e, t, n, r) {
  if (qi) {
    var i = el(e, t, n, r);
    if (i === null) vs(e, t, r, eo, n), pu(e, r);
    else if (Mm(i, e, t, n, r)) r.stopPropagation();
    else if ((pu(e, r), t & 4 && -1 < Om.indexOf(e))) {
      for (; i !== null; ) {
        var o = ii(i);
        if (
          (o !== null && md(o),
          (o = el(e, t, n, r)),
          o === null && vs(e, t, r, eo, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else vs(e, t, r, null, n);
  }
}
var eo = null;
function el(e, t, n, r) {
  if (((eo = null), (e = ql(r)), (e = cn(e)), e !== null))
    if (((t = Cn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ld(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (eo = e), null;
}
function xd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Cm()) {
        case ea:
          return 1;
        case dd:
          return 4;
        case Zi:
        case Em:
          return 16;
        case fd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var It = null,
  ia = null,
  Ii = null;
function Cd() {
  if (Ii) return Ii;
  var e,
    t = ia,
    n = t.length,
    r,
    i = "value" in It ? It.value : It.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Ii = i.slice(e, 1 < r ? 1 - r : void 0));
}
function $i(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function xi() {
  return !0;
}
function mu() {
  return !1;
}
function We(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? xi
        : mu),
      (this.isPropagationStopped = mu),
      this
    );
  }
  return (
    ce(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = xi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = xi));
      },
      persist: function () {},
      isPersistent: xi,
    }),
    t
  );
}
var rr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  oa = We(rr),
  ri = ce({}, rr, { view: 0, detail: 0 }),
  Dm = We(ri),
  as,
  us,
  hr,
  ko = ce({}, ri, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: sa,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== hr &&
            (hr && e.type === "mousemove"
              ? ((as = e.screenX - hr.screenX), (us = e.screenY - hr.screenY))
              : (us = as = 0),
            (hr = e)),
          as);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : us;
    },
  }),
  gu = We(ko),
  zm = ce({}, ko, { dataTransfer: 0 }),
  Im = We(zm),
  $m = ce({}, ri, { relatedTarget: 0 }),
  cs = We($m),
  Bm = ce({}, rr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Fm = We(Bm),
  Um = ce({}, rr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  bm = We(Um),
  Wm = ce({}, rr, { data: 0 }),
  vu = We(Wm),
  Hm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Vm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Qm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Km(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Qm[e]) ? !!t[e] : !1;
}
function sa() {
  return Km;
}
var Xm = ce({}, ri, {
    key: function (e) {
      if (e.key) {
        var t = Hm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = $i(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Vm[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: sa,
    charCode: function (e) {
      return e.type === "keypress" ? $i(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? $i(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Gm = We(Xm),
  Ym = ce({}, ko, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  yu = We(Ym),
  Zm = ce({}, ri, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: sa,
  }),
  Jm = We(Zm),
  qm = ce({}, rr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  eg = We(qm),
  tg = ce({}, ko, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ng = We(tg),
  rg = [9, 13, 27, 32],
  la = _t && "CompositionEvent" in window,
  jr = null;
_t && "documentMode" in document && (jr = document.documentMode);
var ig = _t && "TextEvent" in window && !jr,
  Ed = _t && (!la || (jr && 8 < jr && 11 >= jr)),
  wu = " ",
  xu = !1;
function _d(e, t) {
  switch (e) {
    case "keyup":
      return rg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Nd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var On = !1;
function og(e, t) {
  switch (e) {
    case "compositionend":
      return Nd(t);
    case "keypress":
      return t.which !== 32 ? null : ((xu = !0), wu);
    case "textInput":
      return (e = t.data), e === wu && xu ? null : e;
    default:
      return null;
  }
}
function sg(e, t) {
  if (On)
    return e === "compositionend" || (!la && _d(e, t))
      ? ((e = Cd()), (Ii = ia = It = null), (On = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ed && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var lg = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Cu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!lg[e.type] : t === "textarea";
}
function Sd(e, t, n, r) {
  nd(r),
    (t = to(t, "onChange")),
    0 < t.length &&
      ((n = new oa("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Rr = null,
  Fr = null;
function ag(e) {
  zd(e, 0);
}
function jo(e) {
  var t = An(e);
  if (Gc(t)) return e;
}
function ug(e, t) {
  if (e === "change") return t;
}
var kd = !1;
if (_t) {
  var ds;
  if (_t) {
    var fs = "oninput" in document;
    if (!fs) {
      var Eu = document.createElement("div");
      Eu.setAttribute("oninput", "return;"),
        (fs = typeof Eu.oninput == "function");
    }
    ds = fs;
  } else ds = !1;
  kd = ds && (!document.documentMode || 9 < document.documentMode);
}
function _u() {
  Rr && (Rr.detachEvent("onpropertychange", jd), (Fr = Rr = null));
}
function jd(e) {
  if (e.propertyName === "value" && jo(Fr)) {
    var t = [];
    Sd(t, Fr, e, ql(e)), sd(ag, t);
  }
}
function cg(e, t, n) {
  e === "focusin"
    ? (_u(), (Rr = t), (Fr = n), Rr.attachEvent("onpropertychange", jd))
    : e === "focusout" && _u();
}
function dg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return jo(Fr);
}
function fg(e, t) {
  if (e === "click") return jo(t);
}
function pg(e, t) {
  if (e === "input" || e === "change") return jo(t);
}
function hg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ot = typeof Object.is == "function" ? Object.is : hg;
function Ur(e, t) {
  if (ot(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!zs.call(t, i) || !ot(e[i], t[i])) return !1;
  }
  return !0;
}
function Nu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Su(e, t) {
  var n = Nu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Nu(n);
  }
}
function Rd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Rd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Td() {
  for (var e = window, t = Xi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xi(e.document);
  }
  return t;
}
function aa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function mg(e) {
  var t = Td(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Rd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && aa(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Su(n, o));
        var s = Su(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var gg = _t && "documentMode" in document && 11 >= document.documentMode,
  Mn = null,
  tl = null,
  Tr = null,
  nl = !1;
function ku(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  nl ||
    Mn == null ||
    Mn !== Xi(r) ||
    ((r = Mn),
    "selectionStart" in r && aa(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Tr && Ur(Tr, r)) ||
      ((Tr = r),
      (r = to(tl, "onSelect")),
      0 < r.length &&
        ((t = new oa("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Mn))));
}
function Ci(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Pn = {
    animationend: Ci("Animation", "AnimationEnd"),
    animationiteration: Ci("Animation", "AnimationIteration"),
    animationstart: Ci("Animation", "AnimationStart"),
    transitionend: Ci("Transition", "TransitionEnd"),
  },
  ps = {},
  Od = {};
_t &&
  ((Od = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Pn.animationend.animation,
    delete Pn.animationiteration.animation,
    delete Pn.animationstart.animation),
  "TransitionEvent" in window || delete Pn.transitionend.transition);
function Ro(e) {
  if (ps[e]) return ps[e];
  if (!Pn[e]) return e;
  var t = Pn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Od) return (ps[e] = t[n]);
  return e;
}
var Md = Ro("animationend"),
  Pd = Ro("animationiteration"),
  Ad = Ro("animationstart"),
  Ld = Ro("transitionend"),
  Dd = new Map(),
  ju =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Zt(e, t) {
  Dd.set(e, t), xn(t, [e]);
}
for (var hs = 0; hs < ju.length; hs++) {
  var ms = ju[hs],
    vg = ms.toLowerCase(),
    yg = ms[0].toUpperCase() + ms.slice(1);
  Zt(vg, "on" + yg);
}
Zt(Md, "onAnimationEnd");
Zt(Pd, "onAnimationIteration");
Zt(Ad, "onAnimationStart");
Zt("dblclick", "onDoubleClick");
Zt("focusin", "onFocus");
Zt("focusout", "onBlur");
Zt(Ld, "onTransitionEnd");
Xn("onMouseEnter", ["mouseout", "mouseover"]);
Xn("onMouseLeave", ["mouseout", "mouseover"]);
Xn("onPointerEnter", ["pointerout", "pointerover"]);
Xn("onPointerLeave", ["pointerout", "pointerover"]);
xn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
xn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
xn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
xn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
xn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
xn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Er =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  wg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));
function Ru(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), vm(r, t, void 0, e), (e.currentTarget = null);
}
function zd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var u = r[s],
            d = u.instance,
            p = u.currentTarget;
          if (((u = u.listener), d !== o && i.isPropagationStopped())) break e;
          Ru(i, u, p), (o = d);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((u = r[s]),
            (d = u.instance),
            (p = u.currentTarget),
            (u = u.listener),
            d !== o && i.isPropagationStopped())
          )
            break e;
          Ru(i, u, p), (o = d);
        }
    }
  }
  if (Yi) throw ((e = Zs), (Yi = !1), (Zs = null), e);
}
function oe(e, t) {
  var n = t[ll];
  n === void 0 && (n = t[ll] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Id(t, e, 2, !1), n.add(r));
}
function gs(e, t, n) {
  var r = 0;
  t && (r |= 4), Id(n, e, r, t);
}
var Ei = "_reactListening" + Math.random().toString(36).slice(2);
function br(e) {
  if (!e[Ei]) {
    (e[Ei] = !0),
      Hc.forEach(function (n) {
        n !== "selectionchange" && (wg.has(n) || gs(n, !1, e), gs(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ei] || ((t[Ei] = !0), gs("selectionchange", !1, t));
  }
}
function Id(e, t, n, r) {
  switch (xd(t)) {
    case 1:
      var i = Am;
      break;
    case 4:
      i = Lm;
      break;
    default:
      i = ra;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Ys ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function vs(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var u = r.stateNode.containerInfo;
        if (u === i || (u.nodeType === 8 && u.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var d = s.tag;
            if (
              (d === 3 || d === 4) &&
              ((d = s.stateNode.containerInfo),
              d === i || (d.nodeType === 8 && d.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; u !== null; ) {
          if (((s = cn(u)), s === null)) return;
          if (((d = s.tag), d === 5 || d === 6)) {
            r = o = s;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  sd(function () {
    var p = o,
      y = ql(n),
      w = [];
    e: {
      var c = Dd.get(e);
      if (c !== void 0) {
        var C = oa,
          x = e;
        switch (e) {
          case "keypress":
            if ($i(n) === 0) break e;
          case "keydown":
          case "keyup":
            C = Gm;
            break;
          case "focusin":
            (x = "focus"), (C = cs);
            break;
          case "focusout":
            (x = "blur"), (C = cs);
            break;
          case "beforeblur":
          case "afterblur":
            C = cs;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            C = gu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            C = Im;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            C = Jm;
            break;
          case Md:
          case Pd:
          case Ad:
            C = Fm;
            break;
          case Ld:
            C = eg;
            break;
          case "scroll":
            C = Dm;
            break;
          case "wheel":
            C = ng;
            break;
          case "copy":
          case "cut":
          case "paste":
            C = bm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            C = yu;
        }
        var E = (t & 4) !== 0,
          m = !E && e === "scroll",
          l = E ? (c !== null ? c + "Capture" : null) : c;
        E = [];
        for (var a = p, f; a !== null; ) {
          f = a;
          var g = f.stateNode;
          if (
            (f.tag === 5 &&
              g !== null &&
              ((f = g),
              l !== null && ((g = zr(a, l)), g != null && E.push(Wr(a, g, f)))),
            m)
          )
            break;
          a = a.return;
        }
        0 < E.length &&
          ((c = new C(c, x, null, n, y)), w.push({ event: c, listeners: E }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((c = e === "mouseover" || e === "pointerover"),
          (C = e === "mouseout" || e === "pointerout"),
          c &&
            n !== Xs &&
            (x = n.relatedTarget || n.fromElement) &&
            (cn(x) || x[Nt]))
        )
          break e;
        if (
          (C || c) &&
          ((c =
            y.window === y
              ? y
              : (c = y.ownerDocument)
              ? c.defaultView || c.parentWindow
              : window),
          C
            ? ((x = n.relatedTarget || n.toElement),
              (C = p),
              (x = x ? cn(x) : null),
              x !== null &&
                ((m = Cn(x)), x !== m || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((C = null), (x = p)),
          C !== x)
        ) {
          if (
            ((E = gu),
            (g = "onMouseLeave"),
            (l = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((E = yu),
              (g = "onPointerLeave"),
              (l = "onPointerEnter"),
              (a = "pointer")),
            (m = C == null ? c : An(C)),
            (f = x == null ? c : An(x)),
            (c = new E(g, a + "leave", C, n, y)),
            (c.target = m),
            (c.relatedTarget = f),
            (g = null),
            cn(y) === p &&
              ((E = new E(l, a + "enter", x, n, y)),
              (E.target = f),
              (E.relatedTarget = m),
              (g = E)),
            (m = g),
            C && x)
          )
            t: {
              for (E = C, l = x, a = 0, f = E; f; f = _n(f)) a++;
              for (f = 0, g = l; g; g = _n(g)) f++;
              for (; 0 < a - f; ) (E = _n(E)), a--;
              for (; 0 < f - a; ) (l = _n(l)), f--;
              for (; a--; ) {
                if (E === l || (l !== null && E === l.alternate)) break t;
                (E = _n(E)), (l = _n(l));
              }
              E = null;
            }
          else E = null;
          C !== null && Tu(w, c, C, E, !1),
            x !== null && m !== null && Tu(w, m, x, E, !0);
        }
      }
      e: {
        if (
          ((c = p ? An(p) : window),
          (C = c.nodeName && c.nodeName.toLowerCase()),
          C === "select" || (C === "input" && c.type === "file"))
        )
          var N = ug;
        else if (Cu(c))
          if (kd) N = pg;
          else {
            N = dg;
            var _ = cg;
          }
        else
          (C = c.nodeName) &&
            C.toLowerCase() === "input" &&
            (c.type === "checkbox" || c.type === "radio") &&
            (N = fg);
        if (N && (N = N(e, p))) {
          Sd(w, N, n, y);
          break e;
        }
        _ && _(e, c, p),
          e === "focusout" &&
            (_ = c._wrapperState) &&
            _.controlled &&
            c.type === "number" &&
            Ws(c, "number", c.value);
      }
      switch (((_ = p ? An(p) : window), e)) {
        case "focusin":
          (Cu(_) || _.contentEditable === "true") &&
            ((Mn = _), (tl = p), (Tr = null));
          break;
        case "focusout":
          Tr = tl = Mn = null;
          break;
        case "mousedown":
          nl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (nl = !1), ku(w, n, y);
          break;
        case "selectionchange":
          if (gg) break;
        case "keydown":
        case "keyup":
          ku(w, n, y);
      }
      var S;
      if (la)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        On
          ? _d(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (Ed &&
          n.locale !== "ko" &&
          (On || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && On && (S = Cd())
            : ((It = y),
              (ia = "value" in It ? It.value : It.textContent),
              (On = !0))),
        (_ = to(p, k)),
        0 < _.length &&
          ((k = new vu(k, e, null, n, y)),
          w.push({ event: k, listeners: _ }),
          S ? (k.data = S) : ((S = Nd(n)), S !== null && (k.data = S)))),
        (S = ig ? og(e, n) : sg(e, n)) &&
          ((p = to(p, "onBeforeInput")),
          0 < p.length &&
            ((y = new vu("onBeforeInput", "beforeinput", null, n, y)),
            w.push({ event: y, listeners: p }),
            (y.data = S)));
    }
    zd(w, t);
  });
}
function Wr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function to(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = zr(e, n)),
      o != null && r.unshift(Wr(e, o, i)),
      (o = zr(e, t)),
      o != null && r.push(Wr(e, o, i))),
      (e = e.return);
  }
  return r;
}
function _n(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Tu(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var u = n,
      d = u.alternate,
      p = u.stateNode;
    if (d !== null && d === r) break;
    u.tag === 5 &&
      p !== null &&
      ((u = p),
      i
        ? ((d = zr(n, o)), d != null && s.unshift(Wr(n, d, u)))
        : i || ((d = zr(n, o)), d != null && s.push(Wr(n, d, u)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var xg = /\r\n?/g,
  Cg = /\u0000|\uFFFD/g;
function Ou(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      xg,
      `
`
    )
    .replace(Cg, "");
}
function _i(e, t, n) {
  if (((t = Ou(t)), Ou(e) !== t && n)) throw Error(R(425));
}
function no() {}
var rl = null,
  il = null;
function ol(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var sl = typeof setTimeout == "function" ? setTimeout : void 0,
  Eg = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Mu = typeof Promise == "function" ? Promise : void 0,
  _g =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Mu < "u"
      ? function (e) {
          return Mu.resolve(null).then(e).catch(Ng);
        }
      : sl;
function Ng(e) {
  setTimeout(function () {
    throw e;
  });
}
function ys(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Br(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Br(t);
}
function Wt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Pu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ir = Math.random().toString(36).slice(2),
  at = "__reactFiber$" + ir,
  Hr = "__reactProps$" + ir,
  Nt = "__reactContainer$" + ir,
  ll = "__reactEvents$" + ir,
  Sg = "__reactListeners$" + ir,
  kg = "__reactHandles$" + ir;
function cn(e) {
  var t = e[at];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Nt] || n[at])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Pu(e); e !== null; ) {
          if ((n = e[at])) return n;
          e = Pu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ii(e) {
  return (
    (e = e[at] || e[Nt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function An(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function To(e) {
  return e[Hr] || null;
}
var al = [],
  Ln = -1;
function Jt(e) {
  return { current: e };
}
function se(e) {
  0 > Ln || ((e.current = al[Ln]), (al[Ln] = null), Ln--);
}
function ie(e, t) {
  Ln++, (al[Ln] = e.current), (e.current = t);
}
var Yt = {},
  je = Jt(Yt),
  De = Jt(!1),
  mn = Yt;
function Gn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Yt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ze(e) {
  return (e = e.childContextTypes), e != null;
}
function ro() {
  se(De), se(je);
}
function Au(e, t, n) {
  if (je.current !== Yt) throw Error(R(168));
  ie(je, t), ie(De, n);
}
function $d(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(R(108, cm(e) || "Unknown", i));
  return ce({}, n, r);
}
function io(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Yt),
    (mn = je.current),
    ie(je, e),
    ie(De, De.current),
    !0
  );
}
function Lu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = $d(e, t, mn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      se(De),
      se(je),
      ie(je, e))
    : se(De),
    ie(De, n);
}
var gt = null,
  Oo = !1,
  ws = !1;
function Bd(e) {
  gt === null ? (gt = [e]) : gt.push(e);
}
function jg(e) {
  (Oo = !0), Bd(e);
}
function qt() {
  if (!ws && gt !== null) {
    ws = !0;
    var e = 0,
      t = ee;
    try {
      var n = gt;
      for (ee = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (gt = null), (Oo = !1);
    } catch (i) {
      throw (gt !== null && (gt = gt.slice(e + 1)), cd(ea, qt), i);
    } finally {
      (ee = t), (ws = !1);
    }
  }
  return null;
}
var Dn = [],
  zn = 0,
  oo = null,
  so = 0,
  He = [],
  Ve = 0,
  gn = null,
  yt = 1,
  wt = "";
function on(e, t) {
  (Dn[zn++] = so), (Dn[zn++] = oo), (oo = e), (so = t);
}
function Fd(e, t, n) {
  (He[Ve++] = yt), (He[Ve++] = wt), (He[Ve++] = gn), (gn = e);
  var r = yt;
  e = wt;
  var i = 32 - rt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - rt(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (yt = (1 << (32 - rt(t) + i)) | (n << i) | r),
      (wt = o + e);
  } else (yt = (1 << o) | (n << i) | r), (wt = e);
}
function ua(e) {
  e.return !== null && (on(e, 1), Fd(e, 1, 0));
}
function ca(e) {
  for (; e === oo; )
    (oo = Dn[--zn]), (Dn[zn] = null), (so = Dn[--zn]), (Dn[zn] = null);
  for (; e === gn; )
    (gn = He[--Ve]),
      (He[Ve] = null),
      (wt = He[--Ve]),
      (He[Ve] = null),
      (yt = He[--Ve]),
      (He[Ve] = null);
}
var Fe = null,
  Be = null,
  le = !1,
  tt = null;
function Ud(e, t) {
  var n = Qe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Du(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Fe = e), (Be = Wt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Fe = e), (Be = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = gn !== null ? { id: yt, overflow: wt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Qe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Fe = e),
            (Be = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ul(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function cl(e) {
  if (le) {
    var t = Be;
    if (t) {
      var n = t;
      if (!Du(e, t)) {
        if (ul(e)) throw Error(R(418));
        t = Wt(n.nextSibling);
        var r = Fe;
        t && Du(e, t)
          ? Ud(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (Fe = e));
      }
    } else {
      if (ul(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (le = !1), (Fe = e);
    }
  }
}
function zu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Fe = e;
}
function Ni(e) {
  if (e !== Fe) return !1;
  if (!le) return zu(e), (le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ol(e.type, e.memoizedProps))),
    t && (t = Be))
  ) {
    if (ul(e)) throw (bd(), Error(R(418)));
    for (; t; ) Ud(e, t), (t = Wt(t.nextSibling));
  }
  if ((zu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Be = Wt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Be = null;
    }
  } else Be = Fe ? Wt(e.stateNode.nextSibling) : null;
  return !0;
}
function bd() {
  for (var e = Be; e; ) e = Wt(e.nextSibling);
}
function Yn() {
  (Be = Fe = null), (le = !1);
}
function da(e) {
  tt === null ? (tt = [e]) : tt.push(e);
}
var Rg = jt.ReactCurrentBatchConfig;
function qe(e, t) {
  if (e && e.defaultProps) {
    (t = ce({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var lo = Jt(null),
  ao = null,
  In = null,
  fa = null;
function pa() {
  fa = In = ao = null;
}
function ha(e) {
  var t = lo.current;
  se(lo), (e._currentValue = t);
}
function dl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Vn(e, t) {
  (ao = e),
    (fa = In = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Le = !0), (e.firstContext = null));
}
function Xe(e) {
  var t = e._currentValue;
  if (fa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), In === null)) {
      if (ao === null) throw Error(R(308));
      (In = e), (ao.dependencies = { lanes: 0, firstContext: e });
    } else In = In.next = e;
  return t;
}
var dn = null;
function ma(e) {
  dn === null ? (dn = [e]) : dn.push(e);
}
function Wd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), ma(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    St(e, r)
  );
}
function St(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var At = !1;
function ga(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Hd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ct(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ht(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Q & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      St(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), ma(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    St(e, n)
  );
}
function Bi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ta(e, n);
  }
}
function Iu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function uo(e, t, n, r) {
  var i = e.updateQueue;
  At = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    u = i.shared.pending;
  if (u !== null) {
    i.shared.pending = null;
    var d = u,
      p = d.next;
    (d.next = null), s === null ? (o = p) : (s.next = p), (s = d);
    var y = e.alternate;
    y !== null &&
      ((y = y.updateQueue),
      (u = y.lastBaseUpdate),
      u !== s &&
        (u === null ? (y.firstBaseUpdate = p) : (u.next = p),
        (y.lastBaseUpdate = d)));
  }
  if (o !== null) {
    var w = i.baseState;
    (s = 0), (y = p = d = null), (u = o);
    do {
      var c = u.lane,
        C = u.eventTime;
      if ((r & c) === c) {
        y !== null &&
          (y = y.next =
            {
              eventTime: C,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var x = e,
            E = u;
          switch (((c = t), (C = n), E.tag)) {
            case 1:
              if (((x = E.payload), typeof x == "function")) {
                w = x.call(C, w, c);
                break e;
              }
              w = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = E.payload),
                (c = typeof x == "function" ? x.call(C, w, c) : x),
                c == null)
              )
                break e;
              w = ce({}, w, c);
              break e;
            case 2:
              At = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (c = i.effects),
          c === null ? (i.effects = [u]) : c.push(u));
      } else
        (C = {
          eventTime: C,
          lane: c,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          y === null ? ((p = y = C), (d = w)) : (y = y.next = C),
          (s |= c);
      if (((u = u.next), u === null)) {
        if (((u = i.shared.pending), u === null)) break;
        (c = u),
          (u = c.next),
          (c.next = null),
          (i.lastBaseUpdate = c),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (y === null && (d = w),
      (i.baseState = d),
      (i.firstBaseUpdate = p),
      (i.lastBaseUpdate = y),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (yn |= s), (e.lanes = s), (e.memoizedState = w);
  }
}
function $u(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(R(191, i));
        i.call(r);
      }
    }
}
var Vd = new Wc.Component().refs;
function fl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ce({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Mo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Cn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Oe(),
      i = Qt(e),
      o = Ct(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Ht(e, o, i)),
      t !== null && (it(t, e, i, r), Bi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Oe(),
      i = Qt(e),
      o = Ct(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Ht(e, o, i)),
      t !== null && (it(t, e, i, r), Bi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Oe(),
      r = Qt(e),
      i = Ct(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Ht(e, i, r)),
      t !== null && (it(t, e, r, n), Bi(t, e, r));
  },
};
function Bu(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ur(n, r) || !Ur(i, o)
      : !0
  );
}
function Qd(e, t, n) {
  var r = !1,
    i = Yt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Xe(o))
      : ((i = ze(t) ? mn : je.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Gn(e, i) : Yt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Mo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Fu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Mo.enqueueReplaceState(t, t.state, null);
}
function pl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Vd), ga(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Xe(o))
    : ((o = ze(t) ? mn : je.current), (i.context = Gn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (fl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Mo.enqueueReplaceState(i, i.state, null),
      uo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function mr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var u = i.refs;
            u === Vd && (u = i.refs = {}),
              s === null ? delete u[o] : (u[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Si(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Uu(e) {
  var t = e._init;
  return t(e._payload);
}
function Kd(e) {
  function t(l, a) {
    if (e) {
      var f = l.deletions;
      f === null ? ((l.deletions = [a]), (l.flags |= 16)) : f.push(a);
    }
  }
  function n(l, a) {
    if (!e) return null;
    for (; a !== null; ) t(l, a), (a = a.sibling);
    return null;
  }
  function r(l, a) {
    for (l = new Map(); a !== null; )
      a.key !== null ? l.set(a.key, a) : l.set(a.index, a), (a = a.sibling);
    return l;
  }
  function i(l, a) {
    return (l = Kt(l, a)), (l.index = 0), (l.sibling = null), l;
  }
  function o(l, a, f) {
    return (
      (l.index = f),
      e
        ? ((f = l.alternate),
          f !== null
            ? ((f = f.index), f < a ? ((l.flags |= 2), a) : f)
            : ((l.flags |= 2), a))
        : ((l.flags |= 1048576), a)
    );
  }
  function s(l) {
    return e && l.alternate === null && (l.flags |= 2), l;
  }
  function u(l, a, f, g) {
    return a === null || a.tag !== 6
      ? ((a = ks(f, l.mode, g)), (a.return = l), a)
      : ((a = i(a, f)), (a.return = l), a);
  }
  function d(l, a, f, g) {
    var N = f.type;
    return N === Tn
      ? y(l, a, f.props.children, g, f.key)
      : a !== null &&
        (a.elementType === N ||
          (typeof N == "object" &&
            N !== null &&
            N.$$typeof === Pt &&
            Uu(N) === a.type))
      ? ((g = i(a, f.props)), (g.ref = mr(l, a, f)), (g.return = l), g)
      : ((g = Vi(f.type, f.key, f.props, null, l.mode, g)),
        (g.ref = mr(l, a, f)),
        (g.return = l),
        g);
  }
  function p(l, a, f, g) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== f.containerInfo ||
      a.stateNode.implementation !== f.implementation
      ? ((a = js(f, l.mode, g)), (a.return = l), a)
      : ((a = i(a, f.children || [])), (a.return = l), a);
  }
  function y(l, a, f, g, N) {
    return a === null || a.tag !== 7
      ? ((a = hn(f, l.mode, g, N)), (a.return = l), a)
      : ((a = i(a, f)), (a.return = l), a);
  }
  function w(l, a, f) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = ks("" + a, l.mode, f)), (a.return = l), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case hi:
          return (
            (f = Vi(a.type, a.key, a.props, null, l.mode, f)),
            (f.ref = mr(l, null, a)),
            (f.return = l),
            f
          );
        case Rn:
          return (a = js(a, l.mode, f)), (a.return = l), a;
        case Pt:
          var g = a._init;
          return w(l, g(a._payload), f);
      }
      if (xr(a) || cr(a))
        return (a = hn(a, l.mode, f, null)), (a.return = l), a;
      Si(l, a);
    }
    return null;
  }
  function c(l, a, f, g) {
    var N = a !== null ? a.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return N !== null ? null : u(l, a, "" + f, g);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case hi:
          return f.key === N ? d(l, a, f, g) : null;
        case Rn:
          return f.key === N ? p(l, a, f, g) : null;
        case Pt:
          return (N = f._init), c(l, a, N(f._payload), g);
      }
      if (xr(f) || cr(f)) return N !== null ? null : y(l, a, f, g, null);
      Si(l, f);
    }
    return null;
  }
  function C(l, a, f, g, N) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (l = l.get(f) || null), u(a, l, "" + g, N);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case hi:
          return (l = l.get(g.key === null ? f : g.key) || null), d(a, l, g, N);
        case Rn:
          return (l = l.get(g.key === null ? f : g.key) || null), p(a, l, g, N);
        case Pt:
          var _ = g._init;
          return C(l, a, f, _(g._payload), N);
      }
      if (xr(g) || cr(g)) return (l = l.get(f) || null), y(a, l, g, N, null);
      Si(a, g);
    }
    return null;
  }
  function x(l, a, f, g) {
    for (
      var N = null, _ = null, S = a, k = (a = 0), D = null;
      S !== null && k < f.length;
      k++
    ) {
      S.index > k ? ((D = S), (S = null)) : (D = S.sibling);
      var T = c(l, S, f[k], g);
      if (T === null) {
        S === null && (S = D);
        break;
      }
      e && S && T.alternate === null && t(l, S),
        (a = o(T, a, k)),
        _ === null ? (N = T) : (_.sibling = T),
        (_ = T),
        (S = D);
    }
    if (k === f.length) return n(l, S), le && on(l, k), N;
    if (S === null) {
      for (; k < f.length; k++)
        (S = w(l, f[k], g)),
          S !== null &&
            ((a = o(S, a, k)), _ === null ? (N = S) : (_.sibling = S), (_ = S));
      return le && on(l, k), N;
    }
    for (S = r(l, S); k < f.length; k++)
      (D = C(S, l, k, f[k], g)),
        D !== null &&
          (e && D.alternate !== null && S.delete(D.key === null ? k : D.key),
          (a = o(D, a, k)),
          _ === null ? (N = D) : (_.sibling = D),
          (_ = D));
    return (
      e &&
        S.forEach(function (z) {
          return t(l, z);
        }),
      le && on(l, k),
      N
    );
  }
  function E(l, a, f, g) {
    var N = cr(f);
    if (typeof N != "function") throw Error(R(150));
    if (((f = N.call(f)), f == null)) throw Error(R(151));
    for (
      var _ = (N = null), S = a, k = (a = 0), D = null, T = f.next();
      S !== null && !T.done;
      k++, T = f.next()
    ) {
      S.index > k ? ((D = S), (S = null)) : (D = S.sibling);
      var z = c(l, S, T.value, g);
      if (z === null) {
        S === null && (S = D);
        break;
      }
      e && S && z.alternate === null && t(l, S),
        (a = o(z, a, k)),
        _ === null ? (N = z) : (_.sibling = z),
        (_ = z),
        (S = D);
    }
    if (T.done) return n(l, S), le && on(l, k), N;
    if (S === null) {
      for (; !T.done; k++, T = f.next())
        (T = w(l, T.value, g)),
          T !== null &&
            ((a = o(T, a, k)), _ === null ? (N = T) : (_.sibling = T), (_ = T));
      return le && on(l, k), N;
    }
    for (S = r(l, S); !T.done; k++, T = f.next())
      (T = C(S, l, k, T.value, g)),
        T !== null &&
          (e && T.alternate !== null && S.delete(T.key === null ? k : T.key),
          (a = o(T, a, k)),
          _ === null ? (N = T) : (_.sibling = T),
          (_ = T));
    return (
      e &&
        S.forEach(function (U) {
          return t(l, U);
        }),
      le && on(l, k),
      N
    );
  }
  function m(l, a, f, g) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === Tn &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case hi:
          e: {
            for (var N = f.key, _ = a; _ !== null; ) {
              if (_.key === N) {
                if (((N = f.type), N === Tn)) {
                  if (_.tag === 7) {
                    n(l, _.sibling),
                      (a = i(_, f.props.children)),
                      (a.return = l),
                      (l = a);
                    break e;
                  }
                } else if (
                  _.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === Pt &&
                    Uu(N) === _.type)
                ) {
                  n(l, _.sibling),
                    (a = i(_, f.props)),
                    (a.ref = mr(l, _, f)),
                    (a.return = l),
                    (l = a);
                  break e;
                }
                n(l, _);
                break;
              } else t(l, _);
              _ = _.sibling;
            }
            f.type === Tn
              ? ((a = hn(f.props.children, l.mode, g, f.key)),
                (a.return = l),
                (l = a))
              : ((g = Vi(f.type, f.key, f.props, null, l.mode, g)),
                (g.ref = mr(l, a, f)),
                (g.return = l),
                (l = g));
          }
          return s(l);
        case Rn:
          e: {
            for (_ = f.key; a !== null; ) {
              if (a.key === _)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === f.containerInfo &&
                  a.stateNode.implementation === f.implementation
                ) {
                  n(l, a.sibling),
                    (a = i(a, f.children || [])),
                    (a.return = l),
                    (l = a);
                  break e;
                } else {
                  n(l, a);
                  break;
                }
              else t(l, a);
              a = a.sibling;
            }
            (a = js(f, l.mode, g)), (a.return = l), (l = a);
          }
          return s(l);
        case Pt:
          return (_ = f._init), m(l, a, _(f._payload), g);
      }
      if (xr(f)) return x(l, a, f, g);
      if (cr(f)) return E(l, a, f, g);
      Si(l, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        a !== null && a.tag === 6
          ? (n(l, a.sibling), (a = i(a, f)), (a.return = l), (l = a))
          : (n(l, a), (a = ks(f, l.mode, g)), (a.return = l), (l = a)),
        s(l))
      : n(l, a);
  }
  return m;
}
var Zn = Kd(!0),
  Xd = Kd(!1),
  oi = {},
  ct = Jt(oi),
  Vr = Jt(oi),
  Qr = Jt(oi);
function fn(e) {
  if (e === oi) throw Error(R(174));
  return e;
}
function va(e, t) {
  switch ((ie(Qr, t), ie(Vr, e), ie(ct, oi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Vs(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Vs(t, e));
  }
  se(ct), ie(ct, t);
}
function Jn() {
  se(ct), se(Vr), se(Qr);
}
function Gd(e) {
  fn(Qr.current);
  var t = fn(ct.current),
    n = Vs(t, e.type);
  t !== n && (ie(Vr, e), ie(ct, n));
}
function ya(e) {
  Vr.current === e && (se(ct), se(Vr));
}
var ae = Jt(0);
function co(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var xs = [];
function wa() {
  for (var e = 0; e < xs.length; e++)
    xs[e]._workInProgressVersionPrimary = null;
  xs.length = 0;
}
var Fi = jt.ReactCurrentDispatcher,
  Cs = jt.ReactCurrentBatchConfig,
  vn = 0,
  ue = null,
  me = null,
  ve = null,
  fo = !1,
  Or = !1,
  Kr = 0,
  Tg = 0;
function _e() {
  throw Error(R(321));
}
function xa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ot(e[n], t[n])) return !1;
  return !0;
}
function Ca(e, t, n, r, i, o) {
  if (
    ((vn = o),
    (ue = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Fi.current = e === null || e.memoizedState === null ? Ag : Lg),
    (e = n(r, i)),
    Or)
  ) {
    o = 0;
    do {
      if (((Or = !1), (Kr = 0), 25 <= o)) throw Error(R(301));
      (o += 1),
        (ve = me = null),
        (t.updateQueue = null),
        (Fi.current = Dg),
        (e = n(r, i));
    } while (Or);
  }
  if (
    ((Fi.current = po),
    (t = me !== null && me.next !== null),
    (vn = 0),
    (ve = me = ue = null),
    (fo = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function Ea() {
  var e = Kr !== 0;
  return (Kr = 0), e;
}
function lt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ve === null ? (ue.memoizedState = ve = e) : (ve = ve.next = e), ve;
}
function Ge() {
  if (me === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = me.next;
  var t = ve === null ? ue.memoizedState : ve.next;
  if (t !== null) (ve = t), (me = e);
  else {
    if (e === null) throw Error(R(310));
    (me = e),
      (e = {
        memoizedState: me.memoizedState,
        baseState: me.baseState,
        baseQueue: me.baseQueue,
        queue: me.queue,
        next: null,
      }),
      ve === null ? (ue.memoizedState = ve = e) : (ve = ve.next = e);
  }
  return ve;
}
function Xr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Es(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = me,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var u = (s = null),
      d = null,
      p = o;
    do {
      var y = p.lane;
      if ((vn & y) === y)
        d !== null &&
          (d = d.next =
            {
              lane: 0,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null,
            }),
          (r = p.hasEagerState ? p.eagerState : e(r, p.action));
      else {
        var w = {
          lane: y,
          action: p.action,
          hasEagerState: p.hasEagerState,
          eagerState: p.eagerState,
          next: null,
        };
        d === null ? ((u = d = w), (s = r)) : (d = d.next = w),
          (ue.lanes |= y),
          (yn |= y);
      }
      p = p.next;
    } while (p !== null && p !== o);
    d === null ? (s = r) : (d.next = u),
      ot(r, t.memoizedState) || (Le = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = d),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (ue.lanes |= o), (yn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function _s(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    ot(o, t.memoizedState) || (Le = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Yd() {}
function Zd(e, t) {
  var n = ue,
    r = Ge(),
    i = t(),
    o = !ot(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Le = !0)),
    (r = r.queue),
    _a(ef.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ve !== null && ve.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Gr(9, qd.bind(null, n, r, i, t), void 0, null),
      ye === null)
    )
      throw Error(R(349));
    vn & 30 || Jd(n, t, i);
  }
  return i;
}
function Jd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function qd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), tf(t) && nf(e);
}
function ef(e, t, n) {
  return n(function () {
    tf(t) && nf(e);
  });
}
function tf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ot(e, n);
  } catch {
    return !0;
  }
}
function nf(e) {
  var t = St(e, 1);
  t !== null && it(t, e, 1, -1);
}
function bu(e) {
  var t = lt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Pg.bind(null, ue, e)),
    [t.memoizedState, e]
  );
}
function Gr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function rf() {
  return Ge().memoizedState;
}
function Ui(e, t, n, r) {
  var i = lt();
  (ue.flags |= e),
    (i.memoizedState = Gr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Po(e, t, n, r) {
  var i = Ge();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (me !== null) {
    var s = me.memoizedState;
    if (((o = s.destroy), r !== null && xa(r, s.deps))) {
      i.memoizedState = Gr(t, n, o, r);
      return;
    }
  }
  (ue.flags |= e), (i.memoizedState = Gr(1 | t, n, o, r));
}
function Wu(e, t) {
  return Ui(8390656, 8, e, t);
}
function _a(e, t) {
  return Po(2048, 8, e, t);
}
function of(e, t) {
  return Po(4, 2, e, t);
}
function sf(e, t) {
  return Po(4, 4, e, t);
}
function lf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function af(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Po(4, 4, lf.bind(null, t, e), n)
  );
}
function Na() {}
function uf(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function cf(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function df(e, t, n) {
  return vn & 21
    ? (ot(n, t) || ((n = pd()), (ue.lanes |= n), (yn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Le = !0)), (e.memoizedState = n));
}
function Og(e, t) {
  var n = ee;
  (ee = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Cs.transition;
  Cs.transition = {};
  try {
    e(!1), t();
  } finally {
    (ee = n), (Cs.transition = r);
  }
}
function ff() {
  return Ge().memoizedState;
}
function Mg(e, t, n) {
  var r = Qt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    pf(e))
  )
    hf(t, n);
  else if (((n = Wd(e, t, n, r)), n !== null)) {
    var i = Oe();
    it(n, e, r, i), mf(n, t, r);
  }
}
function Pg(e, t, n) {
  var r = Qt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (pf(e)) hf(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          u = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = u), ot(u, s))) {
          var d = t.interleaved;
          d === null
            ? ((i.next = i), ma(t))
            : ((i.next = d.next), (d.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Wd(e, t, i, r)),
      n !== null && ((i = Oe()), it(n, e, r, i), mf(n, t, r));
  }
}
function pf(e) {
  var t = e.alternate;
  return e === ue || (t !== null && t === ue);
}
function hf(e, t) {
  Or = fo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function mf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ta(e, n);
  }
}
var po = {
    readContext: Xe,
    useCallback: _e,
    useContext: _e,
    useEffect: _e,
    useImperativeHandle: _e,
    useInsertionEffect: _e,
    useLayoutEffect: _e,
    useMemo: _e,
    useReducer: _e,
    useRef: _e,
    useState: _e,
    useDebugValue: _e,
    useDeferredValue: _e,
    useTransition: _e,
    useMutableSource: _e,
    useSyncExternalStore: _e,
    useId: _e,
    unstable_isNewReconciler: !1,
  },
  Ag = {
    readContext: Xe,
    useCallback: function (e, t) {
      return (lt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Xe,
    useEffect: Wu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ui(4194308, 4, lf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ui(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ui(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = lt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = lt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Mg.bind(null, ue, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = lt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: bu,
    useDebugValue: Na,
    useDeferredValue: function (e) {
      return (lt().memoizedState = e);
    },
    useTransition: function () {
      var e = bu(!1),
        t = e[0];
      return (e = Og.bind(null, e[1])), (lt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ue,
        i = lt();
      if (le) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), ye === null)) throw Error(R(349));
        vn & 30 || Jd(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Wu(ef.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Gr(9, qd.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = lt(),
        t = ye.identifierPrefix;
      if (le) {
        var n = wt,
          r = yt;
        (n = (r & ~(1 << (32 - rt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Kr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Tg++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Lg = {
    readContext: Xe,
    useCallback: uf,
    useContext: Xe,
    useEffect: _a,
    useImperativeHandle: af,
    useInsertionEffect: of,
    useLayoutEffect: sf,
    useMemo: cf,
    useReducer: Es,
    useRef: rf,
    useState: function () {
      return Es(Xr);
    },
    useDebugValue: Na,
    useDeferredValue: function (e) {
      var t = Ge();
      return df(t, me.memoizedState, e);
    },
    useTransition: function () {
      var e = Es(Xr)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: Yd,
    useSyncExternalStore: Zd,
    useId: ff,
    unstable_isNewReconciler: !1,
  },
  Dg = {
    readContext: Xe,
    useCallback: uf,
    useContext: Xe,
    useEffect: _a,
    useImperativeHandle: af,
    useInsertionEffect: of,
    useLayoutEffect: sf,
    useMemo: cf,
    useReducer: _s,
    useRef: rf,
    useState: function () {
      return _s(Xr);
    },
    useDebugValue: Na,
    useDeferredValue: function (e) {
      var t = Ge();
      return me === null ? (t.memoizedState = e) : df(t, me.memoizedState, e);
    },
    useTransition: function () {
      var e = _s(Xr)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: Yd,
    useSyncExternalStore: Zd,
    useId: ff,
    unstable_isNewReconciler: !1,
  };
function qn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += um(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ns(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function hl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var zg = typeof WeakMap == "function" ? WeakMap : Map;
function gf(e, t, n) {
  (n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      mo || ((mo = !0), (Nl = r)), hl(e, t);
    }),
    n
  );
}
function vf(e, t, n) {
  (n = Ct(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        hl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        hl(e, t),
          typeof r != "function" &&
            (Vt === null ? (Vt = new Set([this])) : Vt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Hu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new zg();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Yg.bind(null, e, t, n)), t.then(e, e));
}
function Vu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Qu(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ct(-1, 1)), (t.tag = 2), Ht(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ig = jt.ReactCurrentOwner,
  Le = !1;
function Te(e, t, n, r) {
  t.child = e === null ? Xd(t, null, n, r) : Zn(t, e.child, n, r);
}
function Ku(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Vn(t, i),
    (r = Ca(e, t, n, r, o, i)),
    (n = Ea()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        kt(e, t, i))
      : (le && n && ua(t), (t.flags |= 1), Te(e, t, r, i), t.child)
  );
}
function Xu(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Pa(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), yf(e, t, o, r, i))
      : ((e = Vi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ur), n(s, r) && e.ref === t.ref)
    )
      return kt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Kt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function yf(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ur(o, r) && e.ref === t.ref)
      if (((Le = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Le = !0);
      else return (t.lanes = e.lanes), kt(e, t, i);
  }
  return ml(e, t, n, r, i);
}
function wf(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ie(Bn, $e),
        ($e |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ie(Bn, $e),
          ($e |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ie(Bn, $e),
        ($e |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ie(Bn, $e),
      ($e |= r);
  return Te(e, t, i, n), t.child;
}
function xf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ml(e, t, n, r, i) {
  var o = ze(n) ? mn : je.current;
  return (
    (o = Gn(t, o)),
    Vn(t, i),
    (n = Ca(e, t, n, r, o, i)),
    (r = Ea()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        kt(e, t, i))
      : (le && r && ua(t), (t.flags |= 1), Te(e, t, n, i), t.child)
  );
}
function Gu(e, t, n, r, i) {
  if (ze(n)) {
    var o = !0;
    io(t);
  } else o = !1;
  if ((Vn(t, i), t.stateNode === null))
    bi(e, t), Qd(t, n, r), pl(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      u = t.memoizedProps;
    s.props = u;
    var d = s.context,
      p = n.contextType;
    typeof p == "object" && p !== null
      ? (p = Xe(p))
      : ((p = ze(n) ? mn : je.current), (p = Gn(t, p)));
    var y = n.getDerivedStateFromProps,
      w =
        typeof y == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    w ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((u !== r || d !== p) && Fu(t, s, r, p)),
      (At = !1);
    var c = t.memoizedState;
    (s.state = c),
      uo(t, r, s, i),
      (d = t.memoizedState),
      u !== r || c !== d || De.current || At
        ? (typeof y == "function" && (fl(t, n, y, r), (d = t.memoizedState)),
          (u = At || Bu(t, n, u, r, c, d, p))
            ? (w ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = d)),
          (s.props = r),
          (s.state = d),
          (s.context = p),
          (r = u))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Hd(e, t),
      (u = t.memoizedProps),
      (p = t.type === t.elementType ? u : qe(t.type, u)),
      (s.props = p),
      (w = t.pendingProps),
      (c = s.context),
      (d = n.contextType),
      typeof d == "object" && d !== null
        ? (d = Xe(d))
        : ((d = ze(n) ? mn : je.current), (d = Gn(t, d)));
    var C = n.getDerivedStateFromProps;
    (y =
      typeof C == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((u !== w || c !== d) && Fu(t, s, r, d)),
      (At = !1),
      (c = t.memoizedState),
      (s.state = c),
      uo(t, r, s, i);
    var x = t.memoizedState;
    u !== w || c !== x || De.current || At
      ? (typeof C == "function" && (fl(t, n, C, r), (x = t.memoizedState)),
        (p = At || Bu(t, n, p, r, c, x, d) || !1)
          ? (y ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, x, d),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, x, d)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (u === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (s.props = r),
        (s.state = x),
        (s.context = d),
        (r = p))
      : (typeof s.componentDidUpdate != "function" ||
          (u === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return gl(e, t, n, r, o, i);
}
function gl(e, t, n, r, i, o) {
  xf(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Lu(t, n, !1), kt(e, t, o);
  (r = t.stateNode), (Ig.current = t);
  var u =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Zn(t, e.child, null, o)), (t.child = Zn(t, null, u, o)))
      : Te(e, t, u, o),
    (t.memoizedState = r.state),
    i && Lu(t, n, !0),
    t.child
  );
}
function Cf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Au(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Au(e, t.context, !1),
    va(e, t.containerInfo);
}
function Yu(e, t, n, r, i) {
  return Yn(), da(i), (t.flags |= 256), Te(e, t, n, r), t.child;
}
var vl = { dehydrated: null, treeContext: null, retryLane: 0 };
function yl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ef(e, t, n) {
  var r = t.pendingProps,
    i = ae.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    u;
  if (
    ((u = s) ||
      (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ie(ae, i & 1),
    e === null)
  )
    return (
      cl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Do(s, r, 0, null)),
              (e = hn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = yl(n)),
              (t.memoizedState = vl),
              e)
            : Sa(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((u = i.dehydrated), u !== null)))
    return $g(e, t, s, r, u, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (u = i.sibling);
    var d = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = d),
          (t.deletions = null))
        : ((r = Kt(i, d)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      u !== null ? (o = Kt(u, o)) : ((o = hn(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? yl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = vl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Kt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Sa(e, t) {
  return (
    (t = Do({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ki(e, t, n, r) {
  return (
    r !== null && da(r),
    Zn(t, e.child, null, n),
    (e = Sa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function $g(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ns(Error(R(422)))), ki(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Do({ mode: "visible", children: r.children }, i, 0, null)),
        (o = hn(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Zn(t, e.child, null, s),
        (t.child.memoizedState = yl(s)),
        (t.memoizedState = vl),
        o);
  if (!(t.mode & 1)) return ki(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(R(419))), (r = Ns(o, r, void 0)), ki(e, t, s, r);
  }
  if (((u = (s & e.childLanes) !== 0), Le || u)) {
    if (((r = ye), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), St(e, i), it(r, e, i, -1));
    }
    return Ma(), (r = Ns(Error(R(421)))), ki(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Zg.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Be = Wt(i.nextSibling)),
      (Fe = t),
      (le = !0),
      (tt = null),
      e !== null &&
        ((He[Ve++] = yt),
        (He[Ve++] = wt),
        (He[Ve++] = gn),
        (yt = e.id),
        (wt = e.overflow),
        (gn = t)),
      (t = Sa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Zu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), dl(e.return, t, n);
}
function Ss(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function _f(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Te(e, t, r.children, n), (r = ae.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Zu(e, n, t);
        else if (e.tag === 19) Zu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ie(ae, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && co(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ss(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && co(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ss(t, !0, n, null, o);
        break;
      case "together":
        Ss(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function bi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function kt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (yn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Kt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Kt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Bg(e, t, n) {
  switch (t.tag) {
    case 3:
      Cf(t), Yn();
      break;
    case 5:
      Gd(t);
      break;
    case 1:
      ze(t.type) && io(t);
      break;
    case 4:
      va(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ie(lo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ie(ae, ae.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ef(e, t, n)
          : (ie(ae, ae.current & 1),
            (e = kt(e, t, n)),
            e !== null ? e.sibling : null);
      ie(ae, ae.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return _f(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ie(ae, ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), wf(e, t, n);
  }
  return kt(e, t, n);
}
var Nf, wl, Sf, kf;
Nf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
wl = function () {};
Sf = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), fn(ct.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Us(e, i)), (r = Us(e, r)), (o = []);
        break;
      case "select":
        (i = ce({}, i, { value: void 0 })),
          (r = ce({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Hs(e, i)), (r = Hs(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = no);
    }
    Qs(n, r);
    var s;
    n = null;
    for (p in i)
      if (!r.hasOwnProperty(p) && i.hasOwnProperty(p) && i[p] != null)
        if (p === "style") {
          var u = i[p];
          for (s in u) u.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          p !== "dangerouslySetInnerHTML" &&
            p !== "children" &&
            p !== "suppressContentEditableWarning" &&
            p !== "suppressHydrationWarning" &&
            p !== "autoFocus" &&
            (Lr.hasOwnProperty(p)
              ? o || (o = [])
              : (o = o || []).push(p, null));
    for (p in r) {
      var d = r[p];
      if (
        ((u = i != null ? i[p] : void 0),
        r.hasOwnProperty(p) && d !== u && (d != null || u != null))
      )
        if (p === "style")
          if (u) {
            for (s in u)
              !u.hasOwnProperty(s) ||
                (d && d.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in d)
              d.hasOwnProperty(s) &&
                u[s] !== d[s] &&
                (n || (n = {}), (n[s] = d[s]));
          } else n || (o || (o = []), o.push(p, n)), (n = d);
        else
          p === "dangerouslySetInnerHTML"
            ? ((d = d ? d.__html : void 0),
              (u = u ? u.__html : void 0),
              d != null && u !== d && (o = o || []).push(p, d))
            : p === "children"
            ? (typeof d != "string" && typeof d != "number") ||
              (o = o || []).push(p, "" + d)
            : p !== "suppressContentEditableWarning" &&
              p !== "suppressHydrationWarning" &&
              (Lr.hasOwnProperty(p)
                ? (d != null && p === "onScroll" && oe("scroll", e),
                  o || u === d || (o = []))
                : (o = o || []).push(p, d));
    }
    n && (o = o || []).push("style", n);
    var p = o;
    (t.updateQueue = p) && (t.flags |= 4);
  }
};
kf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function gr(e, t) {
  if (!le)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Fg(e, t, n) {
  var r = t.pendingProps;
  switch ((ca(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ne(t), null;
    case 1:
      return ze(t.type) && ro(), Ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Jn(),
        se(De),
        se(je),
        wa(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ni(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), tt !== null && (jl(tt), (tt = null)))),
        wl(e, t),
        Ne(t),
        null
      );
    case 5:
      ya(t);
      var i = fn(Qr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Sf(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return Ne(t), null;
        }
        if (((e = fn(ct.current)), Ni(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[at] = t), (r[Hr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              oe("cancel", r), oe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              oe("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Er.length; i++) oe(Er[i], r);
              break;
            case "source":
              oe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              oe("error", r), oe("load", r);
              break;
            case "details":
              oe("toggle", r);
              break;
            case "input":
              su(r, o), oe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                oe("invalid", r);
              break;
            case "textarea":
              au(r, o), oe("invalid", r);
          }
          Qs(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var u = o[s];
              s === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      _i(r.textContent, u, e),
                    (i = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      _i(r.textContent, u, e),
                    (i = ["children", "" + u]))
                : Lr.hasOwnProperty(s) &&
                  u != null &&
                  s === "onScroll" &&
                  oe("scroll", r);
            }
          switch (n) {
            case "input":
              mi(r), lu(r, o, !0);
              break;
            case "textarea":
              mi(r), uu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = no);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Jc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[at] = t),
            (e[Hr] = r),
            Nf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Ks(n, r)), n)) {
              case "dialog":
                oe("cancel", e), oe("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                oe("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Er.length; i++) oe(Er[i], e);
                i = r;
                break;
              case "source":
                oe("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                oe("error", e), oe("load", e), (i = r);
                break;
              case "details":
                oe("toggle", e), (i = r);
                break;
              case "input":
                su(e, r), (i = Us(e, r)), oe("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ce({}, r, { value: void 0 })),
                  oe("invalid", e);
                break;
              case "textarea":
                au(e, r), (i = Hs(e, r)), oe("invalid", e);
                break;
              default:
                i = r;
            }
            Qs(n, i), (u = i);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var d = u[o];
                o === "style"
                  ? td(e, d)
                  : o === "dangerouslySetInnerHTML"
                  ? ((d = d ? d.__html : void 0), d != null && qc(e, d))
                  : o === "children"
                  ? typeof d == "string"
                    ? (n !== "textarea" || d !== "") && Dr(e, d)
                    : typeof d == "number" && Dr(e, "" + d)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Lr.hasOwnProperty(o)
                      ? d != null && o === "onScroll" && oe("scroll", e)
                      : d != null && Gl(e, o, d, s));
              }
            switch (n) {
              case "input":
                mi(e), lu(e, r, !1);
                break;
              case "textarea":
                mi(e), uu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Gt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Un(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Un(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = no);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ne(t), null;
    case 6:
      if (e && t.stateNode != null) kf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = fn(Qr.current)), fn(ct.current), Ni(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[at] = t),
            (o = r.nodeValue !== n) && ((e = Fe), e !== null))
          )
            switch (e.tag) {
              case 3:
                _i(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  _i(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[at] = t),
            (t.stateNode = r);
      }
      return Ne(t), null;
    case 13:
      if (
        (se(ae),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && Be !== null && t.mode & 1 && !(t.flags & 128))
          bd(), Yn(), (t.flags |= 98560), (o = !1);
        else if (((o = Ni(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(R(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(R(317));
            o[at] = t;
          } else
            Yn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ne(t), (o = !1);
        } else tt !== null && (jl(tt), (tt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ae.current & 1 ? ge === 0 && (ge = 3) : Ma())),
          t.updateQueue !== null && (t.flags |= 4),
          Ne(t),
          null);
    case 4:
      return (
        Jn(), wl(e, t), e === null && br(t.stateNode.containerInfo), Ne(t), null
      );
    case 10:
      return ha(t.type._context), Ne(t), null;
    case 17:
      return ze(t.type) && ro(), Ne(t), null;
    case 19:
      if ((se(ae), (o = t.memoizedState), o === null)) return Ne(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) gr(o, !1);
        else {
          if (ge !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = co(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    gr(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ie(ae, (ae.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            pe() > er &&
            ((t.flags |= 128), (r = !0), gr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = co(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              gr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !le)
            )
              return Ne(t), null;
          } else
            2 * pe() - o.renderingStartTime > er &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), gr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = pe()),
          (t.sibling = null),
          (n = ae.current),
          ie(ae, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ne(t), null);
    case 22:
    case 23:
      return (
        Oa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? $e & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function Ug(e, t) {
  switch ((ca(t), t.tag)) {
    case 1:
      return (
        ze(t.type) && ro(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Jn(),
        se(De),
        se(je),
        wa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ya(t), null;
    case 13:
      if (
        (se(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        Yn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return se(ae), null;
    case 4:
      return Jn(), null;
    case 10:
      return ha(t.type._context), null;
    case 22:
    case 23:
      return Oa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ji = !1,
  Se = !1,
  bg = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function $n(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        de(e, t, r);
      }
    else n.current = null;
}
function xl(e, t, n) {
  try {
    n();
  } catch (r) {
    de(e, t, r);
  }
}
var Ju = !1;
function Wg(e, t) {
  if (((rl = qi), (e = Td()), aa(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            u = -1,
            d = -1,
            p = 0,
            y = 0,
            w = e,
            c = null;
          t: for (;;) {
            for (
              var C;
              w !== n || (i !== 0 && w.nodeType !== 3) || (u = s + i),
                w !== o || (r !== 0 && w.nodeType !== 3) || (d = s + r),
                w.nodeType === 3 && (s += w.nodeValue.length),
                (C = w.firstChild) !== null;

            )
              (c = w), (w = C);
            for (;;) {
              if (w === e) break t;
              if (
                (c === n && ++p === i && (u = s),
                c === o && ++y === r && (d = s),
                (C = w.nextSibling) !== null)
              )
                break;
              (w = c), (c = w.parentNode);
            }
            w = C;
          }
          n = u === -1 || d === -1 ? null : { start: u, end: d };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (il = { focusedElem: e, selectionRange: n }, qi = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var E = x.memoizedProps,
                    m = x.memoizedState,
                    l = t.stateNode,
                    a = l.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? E : qe(t.type, E),
                      m
                    );
                  l.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (g) {
          de(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (x = Ju), (Ju = !1), x;
}
function Mr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && xl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ao(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Cl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function jf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), jf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[at], delete t[Hr], delete t[ll], delete t[Sg], delete t[kg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Rf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function qu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Rf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function El(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = no));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (El(e, t, n), e = e.sibling; e !== null; ) El(e, t, n), (e = e.sibling);
}
function _l(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_l(e, t, n), e = e.sibling; e !== null; ) _l(e, t, n), (e = e.sibling);
}
var xe = null,
  et = !1;
function Mt(e, t, n) {
  for (n = n.child; n !== null; ) Tf(e, t, n), (n = n.sibling);
}
function Tf(e, t, n) {
  if (ut && typeof ut.onCommitFiberUnmount == "function")
    try {
      ut.onCommitFiberUnmount(So, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Se || $n(n, t);
    case 6:
      var r = xe,
        i = et;
      (xe = null),
        Mt(e, t, n),
        (xe = r),
        (et = i),
        xe !== null &&
          (et
            ? ((e = xe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : xe.removeChild(n.stateNode));
      break;
    case 18:
      xe !== null &&
        (et
          ? ((e = xe),
            (n = n.stateNode),
            e.nodeType === 8
              ? ys(e.parentNode, n)
              : e.nodeType === 1 && ys(e, n),
            Br(e))
          : ys(xe, n.stateNode));
      break;
    case 4:
      (r = xe),
        (i = et),
        (xe = n.stateNode.containerInfo),
        (et = !0),
        Mt(e, t, n),
        (xe = r),
        (et = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Se &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && xl(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Mt(e, t, n);
      break;
    case 1:
      if (
        !Se &&
        ($n(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          de(n, t, u);
        }
      Mt(e, t, n);
      break;
    case 21:
      Mt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Se = (r = Se) || n.memoizedState !== null), Mt(e, t, n), (Se = r))
        : Mt(e, t, n);
      break;
    default:
      Mt(e, t, n);
  }
}
function ec(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new bg()),
      t.forEach(function (r) {
        var i = Jg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Je(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          u = s;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (xe = u.stateNode), (et = !1);
              break e;
            case 3:
              (xe = u.stateNode.containerInfo), (et = !0);
              break e;
            case 4:
              (xe = u.stateNode.containerInfo), (et = !0);
              break e;
          }
          u = u.return;
        }
        if (xe === null) throw Error(R(160));
        Tf(o, s, i), (xe = null), (et = !1);
        var d = i.alternate;
        d !== null && (d.return = null), (i.return = null);
      } catch (p) {
        de(i, t, p);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Of(t, e), (t = t.sibling);
}
function Of(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Je(t, e), st(e), r & 4)) {
        try {
          Mr(3, e, e.return), Ao(3, e);
        } catch (E) {
          de(e, e.return, E);
        }
        try {
          Mr(5, e, e.return);
        } catch (E) {
          de(e, e.return, E);
        }
      }
      break;
    case 1:
      Je(t, e), st(e), r & 512 && n !== null && $n(n, n.return);
      break;
    case 5:
      if (
        (Je(t, e),
        st(e),
        r & 512 && n !== null && $n(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Dr(i, "");
        } catch (E) {
          de(e, e.return, E);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          u = e.type,
          d = e.updateQueue;
        if (((e.updateQueue = null), d !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Yc(i, o),
              Ks(u, s);
            var p = Ks(u, o);
            for (s = 0; s < d.length; s += 2) {
              var y = d[s],
                w = d[s + 1];
              y === "style"
                ? td(i, w)
                : y === "dangerouslySetInnerHTML"
                ? qc(i, w)
                : y === "children"
                ? Dr(i, w)
                : Gl(i, y, w, p);
            }
            switch (u) {
              case "input":
                bs(i, o);
                break;
              case "textarea":
                Zc(i, o);
                break;
              case "select":
                var c = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var C = o.value;
                C != null
                  ? Un(i, !!o.multiple, C, !1)
                  : c !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Un(i, !!o.multiple, o.defaultValue, !0)
                      : Un(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Hr] = o;
          } catch (E) {
            de(e, e.return, E);
          }
      }
      break;
    case 6:
      if ((Je(t, e), st(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (E) {
          de(e, e.return, E);
        }
      }
      break;
    case 3:
      if (
        (Je(t, e), st(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Br(t.containerInfo);
        } catch (E) {
          de(e, e.return, E);
        }
      break;
    case 4:
      Je(t, e), st(e);
      break;
    case 13:
      Je(t, e),
        st(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Ra = pe())),
        r & 4 && ec(e);
      break;
    case 22:
      if (
        ((y = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Se = (p = Se) || y), Je(t, e), (Se = p)) : Je(t, e),
        st(e),
        r & 8192)
      ) {
        if (
          ((p = e.memoizedState !== null),
          (e.stateNode.isHidden = p) && !y && e.mode & 1)
        )
          for (O = e, y = e.child; y !== null; ) {
            for (w = O = y; O !== null; ) {
              switch (((c = O), (C = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Mr(4, c, c.return);
                  break;
                case 1:
                  $n(c, c.return);
                  var x = c.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = c), (n = c.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (E) {
                      de(r, n, E);
                    }
                  }
                  break;
                case 5:
                  $n(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    nc(w);
                    continue;
                  }
              }
              C !== null ? ((C.return = c), (O = C)) : nc(w);
            }
            y = y.sibling;
          }
        e: for (y = null, w = e; ; ) {
          if (w.tag === 5) {
            if (y === null) {
              y = w;
              try {
                (i = w.stateNode),
                  p
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = w.stateNode),
                      (d = w.memoizedProps.style),
                      (s =
                        d != null && d.hasOwnProperty("display")
                          ? d.display
                          : null),
                      (u.style.display = ed("display", s)));
              } catch (E) {
                de(e, e.return, E);
              }
            }
          } else if (w.tag === 6) {
            if (y === null)
              try {
                w.stateNode.nodeValue = p ? "" : w.memoizedProps;
              } catch (E) {
                de(e, e.return, E);
              }
          } else if (
            ((w.tag !== 22 && w.tag !== 23) ||
              w.memoizedState === null ||
              w === e) &&
            w.child !== null
          ) {
            (w.child.return = w), (w = w.child);
            continue;
          }
          if (w === e) break e;
          for (; w.sibling === null; ) {
            if (w.return === null || w.return === e) break e;
            y === w && (y = null), (w = w.return);
          }
          y === w && (y = null), (w.sibling.return = w.return), (w = w.sibling);
        }
      }
      break;
    case 19:
      Je(t, e), st(e), r & 4 && ec(e);
      break;
    case 21:
      break;
    default:
      Je(t, e), st(e);
  }
}
function st(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Rf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Dr(i, ""), (r.flags &= -33));
          var o = qu(e);
          _l(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            u = qu(e);
          El(e, u, s);
          break;
        default:
          throw Error(R(161));
      }
    } catch (d) {
      de(e, e.return, d);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Hg(e, t, n) {
  (O = e), Mf(e);
}
function Mf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var i = O,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || ji;
      if (!s) {
        var u = i.alternate,
          d = (u !== null && u.memoizedState !== null) || Se;
        u = ji;
        var p = Se;
        if (((ji = s), (Se = d) && !p))
          for (O = i; O !== null; )
            (s = O),
              (d = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? rc(i)
                : d !== null
                ? ((d.return = s), (O = d))
                : rc(i);
        for (; o !== null; ) (O = o), Mf(o), (o = o.sibling);
        (O = i), (ji = u), (Se = p);
      }
      tc(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (O = o)) : tc(e);
  }
}
function tc(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Se || Ao(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Se)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : qe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && $u(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                $u(t, s, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var d = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    d.autoFocus && n.focus();
                    break;
                  case "img":
                    d.src && (n.src = d.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var p = t.alternate;
                if (p !== null) {
                  var y = p.memoizedState;
                  if (y !== null) {
                    var w = y.dehydrated;
                    w !== null && Br(w);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        Se || (t.flags & 512 && Cl(t));
      } catch (c) {
        de(t, t.return, c);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function nc(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function rc(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ao(4, t);
          } catch (d) {
            de(t, n, d);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (d) {
              de(t, i, d);
            }
          }
          var o = t.return;
          try {
            Cl(t);
          } catch (d) {
            de(t, o, d);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Cl(t);
          } catch (d) {
            de(t, s, d);
          }
      }
    } catch (d) {
      de(t, t.return, d);
    }
    if (t === e) {
      O = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (O = u);
      break;
    }
    O = t.return;
  }
}
var Vg = Math.ceil,
  ho = jt.ReactCurrentDispatcher,
  ka = jt.ReactCurrentOwner,
  Ke = jt.ReactCurrentBatchConfig,
  Q = 0,
  ye = null,
  he = null,
  Ce = 0,
  $e = 0,
  Bn = Jt(0),
  ge = 0,
  Yr = null,
  yn = 0,
  Lo = 0,
  ja = 0,
  Pr = null,
  Ae = null,
  Ra = 0,
  er = 1 / 0,
  mt = null,
  mo = !1,
  Nl = null,
  Vt = null,
  Ri = !1,
  $t = null,
  go = 0,
  Ar = 0,
  Sl = null,
  Wi = -1,
  Hi = 0;
function Oe() {
  return Q & 6 ? pe() : Wi !== -1 ? Wi : (Wi = pe());
}
function Qt(e) {
  return e.mode & 1
    ? Q & 2 && Ce !== 0
      ? Ce & -Ce
      : Rg.transition !== null
      ? (Hi === 0 && (Hi = pd()), Hi)
      : ((e = ee),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : xd(e.type))),
        e)
    : 1;
}
function it(e, t, n, r) {
  if (50 < Ar) throw ((Ar = 0), (Sl = null), Error(R(185)));
  ni(e, n, r),
    (!(Q & 2) || e !== ye) &&
      (e === ye && (!(Q & 2) && (Lo |= n), ge === 4 && zt(e, Ce)),
      Ie(e, r),
      n === 1 && Q === 0 && !(t.mode & 1) && ((er = pe() + 500), Oo && qt()));
}
function Ie(e, t) {
  var n = e.callbackNode;
  Rm(e, t);
  var r = Ji(e, e === ye ? Ce : 0);
  if (r === 0)
    n !== null && fu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && fu(n), t === 1))
      e.tag === 0 ? jg(ic.bind(null, e)) : Bd(ic.bind(null, e)),
        _g(function () {
          !(Q & 6) && qt();
        }),
        (n = null);
    else {
      switch (hd(r)) {
        case 1:
          n = ea;
          break;
        case 4:
          n = dd;
          break;
        case 16:
          n = Zi;
          break;
        case 536870912:
          n = fd;
          break;
        default:
          n = Zi;
      }
      n = Bf(n, Pf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Pf(e, t) {
  if (((Wi = -1), (Hi = 0), Q & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (Qn() && e.callbackNode !== n) return null;
  var r = Ji(e, e === ye ? Ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = vo(e, r);
  else {
    t = r;
    var i = Q;
    Q |= 2;
    var o = Lf();
    (ye !== e || Ce !== t) && ((mt = null), (er = pe() + 500), pn(e, t));
    do
      try {
        Xg();
        break;
      } catch (u) {
        Af(e, u);
      }
    while (!0);
    pa(),
      (ho.current = o),
      (Q = i),
      he !== null ? (t = 0) : ((ye = null), (Ce = 0), (t = ge));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Js(e)), i !== 0 && ((r = i), (t = kl(e, i)))), t === 1)
    )
      throw ((n = Yr), pn(e, 0), zt(e, r), Ie(e, pe()), n);
    if (t === 6) zt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Qg(i) &&
          ((t = vo(e, r)),
          t === 2 && ((o = Js(e)), o !== 0 && ((r = o), (t = kl(e, o)))),
          t === 1))
      )
        throw ((n = Yr), pn(e, 0), zt(e, r), Ie(e, pe()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          sn(e, Ae, mt);
          break;
        case 3:
          if (
            (zt(e, r), (r & 130023424) === r && ((t = Ra + 500 - pe()), 10 < t))
          ) {
            if (Ji(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Oe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = sl(sn.bind(null, e, Ae, mt), t);
            break;
          }
          sn(e, Ae, mt);
          break;
        case 4:
          if ((zt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - rt(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = pe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Vg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = sl(sn.bind(null, e, Ae, mt), r);
            break;
          }
          sn(e, Ae, mt);
          break;
        case 5:
          sn(e, Ae, mt);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Ie(e, pe()), e.callbackNode === n ? Pf.bind(null, e) : null;
}
function kl(e, t) {
  var n = Pr;
  return (
    e.current.memoizedState.isDehydrated && (pn(e, t).flags |= 256),
    (e = vo(e, t)),
    e !== 2 && ((t = Ae), (Ae = n), t !== null && jl(t)),
    e
  );
}
function jl(e) {
  Ae === null ? (Ae = e) : Ae.push.apply(Ae, e);
}
function Qg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!ot(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function zt(e, t) {
  for (
    t &= ~ja,
      t &= ~Lo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - rt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ic(e) {
  if (Q & 6) throw Error(R(327));
  Qn();
  var t = Ji(e, 0);
  if (!(t & 1)) return Ie(e, pe()), null;
  var n = vo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Js(e);
    r !== 0 && ((t = r), (n = kl(e, r)));
  }
  if (n === 1) throw ((n = Yr), pn(e, 0), zt(e, t), Ie(e, pe()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    sn(e, Ae, mt),
    Ie(e, pe()),
    null
  );
}
function Ta(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && ((er = pe() + 500), Oo && qt());
  }
}
function wn(e) {
  $t !== null && $t.tag === 0 && !(Q & 6) && Qn();
  var t = Q;
  Q |= 1;
  var n = Ke.transition,
    r = ee;
  try {
    if (((Ke.transition = null), (ee = 1), e)) return e();
  } finally {
    (ee = r), (Ke.transition = n), (Q = t), !(Q & 6) && qt();
  }
}
function Oa() {
  ($e = Bn.current), se(Bn);
}
function pn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Eg(n)), he !== null))
    for (n = he.return; n !== null; ) {
      var r = n;
      switch ((ca(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ro();
          break;
        case 3:
          Jn(), se(De), se(je), wa();
          break;
        case 5:
          ya(r);
          break;
        case 4:
          Jn();
          break;
        case 13:
          se(ae);
          break;
        case 19:
          se(ae);
          break;
        case 10:
          ha(r.type._context);
          break;
        case 22:
        case 23:
          Oa();
      }
      n = n.return;
    }
  if (
    ((ye = e),
    (he = e = Kt(e.current, null)),
    (Ce = $e = t),
    (ge = 0),
    (Yr = null),
    (ja = Lo = yn = 0),
    (Ae = Pr = null),
    dn !== null)
  ) {
    for (t = 0; t < dn.length; t++)
      if (((n = dn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    dn = null;
  }
  return e;
}
function Af(e, t) {
  do {
    var n = he;
    try {
      if ((pa(), (Fi.current = po), fo)) {
        for (var r = ue.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        fo = !1;
      }
      if (
        ((vn = 0),
        (ve = me = ue = null),
        (Or = !1),
        (Kr = 0),
        (ka.current = null),
        n === null || n.return === null)
      ) {
        (ge = 1), (Yr = t), (he = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          u = n,
          d = t;
        if (
          ((t = Ce),
          (u.flags |= 32768),
          d !== null && typeof d == "object" && typeof d.then == "function")
        ) {
          var p = d,
            y = u,
            w = y.tag;
          if (!(y.mode & 1) && (w === 0 || w === 11 || w === 15)) {
            var c = y.alternate;
            c
              ? ((y.updateQueue = c.updateQueue),
                (y.memoizedState = c.memoizedState),
                (y.lanes = c.lanes))
              : ((y.updateQueue = null), (y.memoizedState = null));
          }
          var C = Vu(s);
          if (C !== null) {
            (C.flags &= -257),
              Qu(C, s, u, o, t),
              C.mode & 1 && Hu(o, p, t),
              (t = C),
              (d = p);
            var x = t.updateQueue;
            if (x === null) {
              var E = new Set();
              E.add(d), (t.updateQueue = E);
            } else x.add(d);
            break e;
          } else {
            if (!(t & 1)) {
              Hu(o, p, t), Ma();
              break e;
            }
            d = Error(R(426));
          }
        } else if (le && u.mode & 1) {
          var m = Vu(s);
          if (m !== null) {
            !(m.flags & 65536) && (m.flags |= 256),
              Qu(m, s, u, o, t),
              da(qn(d, u));
            break e;
          }
        }
        (o = d = qn(d, u)),
          ge !== 4 && (ge = 2),
          Pr === null ? (Pr = [o]) : Pr.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var l = gf(o, d, t);
              Iu(o, l);
              break e;
            case 1:
              u = d;
              var a = o.type,
                f = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (Vt === null || !Vt.has(f))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var g = vf(o, u, t);
                Iu(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      zf(n);
    } catch (N) {
      (t = N), he === n && n !== null && (he = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Lf() {
  var e = ho.current;
  return (ho.current = po), e === null ? po : e;
}
function Ma() {
  (ge === 0 || ge === 3 || ge === 2) && (ge = 4),
    ye === null || (!(yn & 268435455) && !(Lo & 268435455)) || zt(ye, Ce);
}
function vo(e, t) {
  var n = Q;
  Q |= 2;
  var r = Lf();
  (ye !== e || Ce !== t) && ((mt = null), pn(e, t));
  do
    try {
      Kg();
      break;
    } catch (i) {
      Af(e, i);
    }
  while (!0);
  if ((pa(), (Q = n), (ho.current = r), he !== null)) throw Error(R(261));
  return (ye = null), (Ce = 0), ge;
}
function Kg() {
  for (; he !== null; ) Df(he);
}
function Xg() {
  for (; he !== null && !wm(); ) Df(he);
}
function Df(e) {
  var t = $f(e.alternate, e, $e);
  (e.memoizedProps = e.pendingProps),
    t === null ? zf(e) : (he = t),
    (ka.current = null);
}
function zf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ug(n, t)), n !== null)) {
        (n.flags &= 32767), (he = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ge = 6), (he = null);
        return;
      }
    } else if (((n = Fg(n, t, $e)), n !== null)) {
      he = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      he = t;
      return;
    }
    he = t = e;
  } while (t !== null);
  ge === 0 && (ge = 5);
}
function sn(e, t, n) {
  var r = ee,
    i = Ke.transition;
  try {
    (Ke.transition = null), (ee = 1), Gg(e, t, n, r);
  } finally {
    (Ke.transition = i), (ee = r);
  }
  return null;
}
function Gg(e, t, n, r) {
  do Qn();
  while ($t !== null);
  if (Q & 6) throw Error(R(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Tm(e, o),
    e === ye && ((he = ye = null), (Ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ri ||
      ((Ri = !0),
      Bf(Zi, function () {
        return Qn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ke.transition), (Ke.transition = null);
    var s = ee;
    ee = 1;
    var u = Q;
    (Q |= 4),
      (ka.current = null),
      Wg(e, n),
      Of(n, e),
      mg(il),
      (qi = !!rl),
      (il = rl = null),
      (e.current = n),
      Hg(n),
      xm(),
      (Q = u),
      (ee = s),
      (Ke.transition = o);
  } else e.current = n;
  if (
    (Ri && ((Ri = !1), ($t = e), (go = i)),
    (o = e.pendingLanes),
    o === 0 && (Vt = null),
    _m(n.stateNode),
    Ie(e, pe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (mo) throw ((mo = !1), (e = Nl), (Nl = null), e);
  return (
    go & 1 && e.tag !== 0 && Qn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Sl ? Ar++ : ((Ar = 0), (Sl = e))) : (Ar = 0),
    qt(),
    null
  );
}
function Qn() {
  if ($t !== null) {
    var e = hd(go),
      t = Ke.transition,
      n = ee;
    try {
      if (((Ke.transition = null), (ee = 16 > e ? 16 : e), $t === null))
        var r = !1;
      else {
        if (((e = $t), ($t = null), (go = 0), Q & 6)) throw Error(R(331));
        var i = Q;
        for (Q |= 4, O = e.current; O !== null; ) {
          var o = O,
            s = o.child;
          if (O.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var d = 0; d < u.length; d++) {
                var p = u[d];
                for (O = p; O !== null; ) {
                  var y = O;
                  switch (y.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mr(8, y, o);
                  }
                  var w = y.child;
                  if (w !== null) (w.return = y), (O = w);
                  else
                    for (; O !== null; ) {
                      y = O;
                      var c = y.sibling,
                        C = y.return;
                      if ((jf(y), y === p)) {
                        O = null;
                        break;
                      }
                      if (c !== null) {
                        (c.return = C), (O = c);
                        break;
                      }
                      O = C;
                    }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var E = x.child;
                if (E !== null) {
                  x.child = null;
                  do {
                    var m = E.sibling;
                    (E.sibling = null), (E = m);
                  } while (E !== null);
                }
              }
              O = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (O = s);
          else
            e: for (; O !== null; ) {
              if (((o = O), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Mr(9, o, o.return);
                }
              var l = o.sibling;
              if (l !== null) {
                (l.return = o.return), (O = l);
                break e;
              }
              O = o.return;
            }
        }
        var a = e.current;
        for (O = a; O !== null; ) {
          s = O;
          var f = s.child;
          if (s.subtreeFlags & 2064 && f !== null) (f.return = s), (O = f);
          else
            e: for (s = a; O !== null; ) {
              if (((u = O), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ao(9, u);
                  }
                } catch (N) {
                  de(u, u.return, N);
                }
              if (u === s) {
                O = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (O = g);
                break e;
              }
              O = u.return;
            }
        }
        if (
          ((Q = i), qt(), ut && typeof ut.onPostCommitFiberRoot == "function")
        )
          try {
            ut.onPostCommitFiberRoot(So, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ee = n), (Ke.transition = t);
    }
  }
  return !1;
}
function oc(e, t, n) {
  (t = qn(n, t)),
    (t = gf(e, t, 1)),
    (e = Ht(e, t, 1)),
    (t = Oe()),
    e !== null && (ni(e, 1, t), Ie(e, t));
}
function de(e, t, n) {
  if (e.tag === 3) oc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        oc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Vt === null || !Vt.has(r)))
        ) {
          (e = qn(n, e)),
            (e = vf(t, e, 1)),
            (t = Ht(t, e, 1)),
            (e = Oe()),
            t !== null && (ni(t, 1, e), Ie(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Yg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Oe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ye === e &&
      (Ce & n) === n &&
      (ge === 4 || (ge === 3 && (Ce & 130023424) === Ce && 500 > pe() - Ra)
        ? pn(e, 0)
        : (ja |= n)),
    Ie(e, t);
}
function If(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = yi), (yi <<= 1), !(yi & 130023424) && (yi = 4194304))
      : (t = 1));
  var n = Oe();
  (e = St(e, t)), e !== null && (ni(e, t, n), Ie(e, n));
}
function Zg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), If(e, n);
}
function Jg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), If(e, n);
}
var $f;
$f = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || De.current) Le = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Le = !1), Bg(e, t, n);
      Le = !!(e.flags & 131072);
    }
  else (Le = !1), le && t.flags & 1048576 && Fd(t, so, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      bi(e, t), (e = t.pendingProps);
      var i = Gn(t, je.current);
      Vn(t, n), (i = Ca(null, t, r, e, i, n));
      var o = Ea();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ze(r) ? ((o = !0), io(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            ga(t),
            (i.updater = Mo),
            (t.stateNode = i),
            (i._reactInternals = t),
            pl(t, r, e, n),
            (t = gl(null, t, r, !0, o, n)))
          : ((t.tag = 0), le && o && ua(t), Te(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (bi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = ev(r)),
          (e = qe(r, e)),
          i)
        ) {
          case 0:
            t = ml(null, t, r, e, n);
            break e;
          case 1:
            t = Gu(null, t, r, e, n);
            break e;
          case 11:
            t = Ku(null, t, r, e, n);
            break e;
          case 14:
            t = Xu(null, t, r, qe(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : qe(r, i)),
        ml(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : qe(r, i)),
        Gu(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Cf(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Hd(e, t),
          uo(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = qn(Error(R(423)), t)), (t = Yu(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = qn(Error(R(424)), t)), (t = Yu(e, t, r, n, i));
            break e;
          } else
            for (
              Be = Wt(t.stateNode.containerInfo.firstChild),
                Fe = t,
                le = !0,
                tt = null,
                n = Xd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Yn(), r === i)) {
            t = kt(e, t, n);
            break e;
          }
          Te(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Gd(t),
        e === null && cl(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        ol(r, i) ? (s = null) : o !== null && ol(r, o) && (t.flags |= 32),
        xf(e, t),
        Te(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && cl(t), null;
    case 13:
      return Ef(e, t, n);
    case 4:
      return (
        va(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Zn(t, null, r, n)) : Te(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : qe(r, i)),
        Ku(e, t, r, i, n)
      );
    case 7:
      return Te(e, t, t.pendingProps, n), t.child;
    case 8:
      return Te(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Te(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          ie(lo, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (ot(o.value, s)) {
            if (o.children === i.children && !De.current) {
              t = kt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                s = o.child;
                for (var d = u.firstContext; d !== null; ) {
                  if (d.context === r) {
                    if (o.tag === 1) {
                      (d = Ct(-1, n & -n)), (d.tag = 2);
                      var p = o.updateQueue;
                      if (p !== null) {
                        p = p.shared;
                        var y = p.pending;
                        y === null
                          ? (d.next = d)
                          : ((d.next = y.next), (y.next = d)),
                          (p.pending = d);
                      }
                    }
                    (o.lanes |= n),
                      (d = o.alternate),
                      d !== null && (d.lanes |= n),
                      dl(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  d = d.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(R(341));
                (s.lanes |= n),
                  (u = s.alternate),
                  u !== null && (u.lanes |= n),
                  dl(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Te(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Vn(t, n),
        (i = Xe(i)),
        (r = r(i)),
        (t.flags |= 1),
        Te(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = qe(r, t.pendingProps)),
        (i = qe(r.type, i)),
        Xu(e, t, r, i, n)
      );
    case 15:
      return yf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : qe(r, i)),
        bi(e, t),
        (t.tag = 1),
        ze(r) ? ((e = !0), io(t)) : (e = !1),
        Vn(t, n),
        Qd(t, r, i),
        pl(t, r, i, n),
        gl(null, t, r, !0, e, n)
      );
    case 19:
      return _f(e, t, n);
    case 22:
      return wf(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function Bf(e, t) {
  return cd(e, t);
}
function qg(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Qe(e, t, n, r) {
  return new qg(e, t, n, r);
}
function Pa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function ev(e) {
  if (typeof e == "function") return Pa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Zl)) return 11;
    if (e === Jl) return 14;
  }
  return 2;
}
function Kt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Qe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Vi(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Pa(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Tn:
        return hn(n.children, i, o, t);
      case Yl:
        (s = 8), (i |= 8);
        break;
      case Is:
        return (
          (e = Qe(12, n, t, i | 2)), (e.elementType = Is), (e.lanes = o), e
        );
      case $s:
        return (e = Qe(13, n, t, i)), (e.elementType = $s), (e.lanes = o), e;
      case Bs:
        return (e = Qe(19, n, t, i)), (e.elementType = Bs), (e.lanes = o), e;
      case Kc:
        return Do(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Vc:
              s = 10;
              break e;
            case Qc:
              s = 9;
              break e;
            case Zl:
              s = 11;
              break e;
            case Jl:
              s = 14;
              break e;
            case Pt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Qe(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function hn(e, t, n, r) {
  return (e = Qe(7, e, r, t)), (e.lanes = n), e;
}
function Do(e, t, n, r) {
  return (
    (e = Qe(22, e, r, t)),
    (e.elementType = Kc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ks(e, t, n) {
  return (e = Qe(6, e, null, t)), (e.lanes = n), e;
}
function js(e, t, n) {
  return (
    (t = Qe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function tv(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ls(0)),
    (this.expirationTimes = ls(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ls(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Aa(e, t, n, r, i, o, s, u, d) {
  return (
    (e = new tv(e, t, n, u, d)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Qe(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ga(o),
    e
  );
}
function nv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Rn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ff(e) {
  if (!e) return Yt;
  e = e._reactInternals;
  e: {
    if (Cn(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ze(n)) return $d(e, n, t);
  }
  return t;
}
function Uf(e, t, n, r, i, o, s, u, d) {
  return (
    (e = Aa(n, r, !0, e, i, o, s, u, d)),
    (e.context = Ff(null)),
    (n = e.current),
    (r = Oe()),
    (i = Qt(n)),
    (o = Ct(r, i)),
    (o.callback = t ?? null),
    Ht(n, o, i),
    (e.current.lanes = i),
    ni(e, i, r),
    Ie(e, r),
    e
  );
}
function zo(e, t, n, r) {
  var i = t.current,
    o = Oe(),
    s = Qt(i);
  return (
    (n = Ff(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ct(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ht(i, t, s)),
    e !== null && (it(e, i, s, o), Bi(e, i, s)),
    s
  );
}
function yo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function sc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function La(e, t) {
  sc(e, t), (e = e.alternate) && sc(e, t);
}
function rv() {
  return null;
}
var bf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Da(e) {
  this._internalRoot = e;
}
Io.prototype.render = Da.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  zo(e, t, null, null);
};
Io.prototype.unmount = Da.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    wn(function () {
      zo(null, e, null, null);
    }),
      (t[Nt] = null);
  }
};
function Io(e) {
  this._internalRoot = e;
}
Io.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = vd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Dt.length && t !== 0 && t < Dt[n].priority; n++);
    Dt.splice(n, 0, e), n === 0 && wd(e);
  }
};
function za(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function $o(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function lc() {}
function iv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var p = yo(s);
        o.call(p);
      };
    }
    var s = Uf(t, r, e, 0, null, !1, !1, "", lc);
    return (
      (e._reactRootContainer = s),
      (e[Nt] = s.current),
      br(e.nodeType === 8 ? e.parentNode : e),
      wn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var p = yo(d);
      u.call(p);
    };
  }
  var d = Aa(e, 0, !1, null, null, !1, !1, "", lc);
  return (
    (e._reactRootContainer = d),
    (e[Nt] = d.current),
    br(e.nodeType === 8 ? e.parentNode : e),
    wn(function () {
      zo(t, d, n, r);
    }),
    d
  );
}
function Bo(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var u = i;
      i = function () {
        var d = yo(s);
        u.call(d);
      };
    }
    zo(t, s, e, i);
  } else s = iv(n, t, e, i, r);
  return yo(s);
}
md = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Cr(t.pendingLanes);
        n !== 0 &&
          (ta(t, n | 1), Ie(t, pe()), !(Q & 6) && ((er = pe() + 500), qt()));
      }
      break;
    case 13:
      wn(function () {
        var r = St(e, 1);
        if (r !== null) {
          var i = Oe();
          it(r, e, 1, i);
        }
      }),
        La(e, 1);
  }
};
na = function (e) {
  if (e.tag === 13) {
    var t = St(e, 134217728);
    if (t !== null) {
      var n = Oe();
      it(t, e, 134217728, n);
    }
    La(e, 134217728);
  }
};
gd = function (e) {
  if (e.tag === 13) {
    var t = Qt(e),
      n = St(e, t);
    if (n !== null) {
      var r = Oe();
      it(n, e, t, r);
    }
    La(e, t);
  }
};
vd = function () {
  return ee;
};
yd = function (e, t) {
  var n = ee;
  try {
    return (ee = e), t();
  } finally {
    ee = n;
  }
};
Gs = function (e, t, n) {
  switch (t) {
    case "input":
      if ((bs(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = To(r);
            if (!i) throw Error(R(90));
            Gc(r), bs(r, i);
          }
        }
      }
      break;
    case "textarea":
      Zc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Un(e, !!n.multiple, t, !1);
  }
};
id = Ta;
od = wn;
var ov = { usingClientEntryPoint: !1, Events: [ii, An, To, nd, rd, Ta] },
  vr = {
    findFiberByHostInstance: cn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  sv = {
    bundleType: vr.bundleType,
    version: vr.version,
    rendererPackageName: vr.rendererPackageName,
    rendererConfig: vr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: jt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ad(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: vr.findFiberByHostInstance || rv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ti.isDisabled && Ti.supportsFiber)
    try {
      (So = Ti.inject(sv)), (ut = Ti);
    } catch {}
}
be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ov;
be.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!za(t)) throw Error(R(200));
  return nv(e, t, null, n);
};
be.createRoot = function (e, t) {
  if (!za(e)) throw Error(R(299));
  var n = !1,
    r = "",
    i = bf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Aa(e, 1, !1, null, null, n, !1, r, i)),
    (e[Nt] = t.current),
    br(e.nodeType === 8 ? e.parentNode : e),
    new Da(t)
  );
};
be.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = ad(t)), (e = e === null ? null : e.stateNode), e;
};
be.flushSync = function (e) {
  return wn(e);
};
be.hydrate = function (e, t, n) {
  if (!$o(t)) throw Error(R(200));
  return Bo(null, e, t, !0, n);
};
be.hydrateRoot = function (e, t, n) {
  if (!za(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = bf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Uf(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[Nt] = t.current),
    br(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Io(t);
};
be.render = function (e, t, n) {
  if (!$o(t)) throw Error(R(200));
  return Bo(null, e, t, !1, n);
};
be.unmountComponentAtNode = function (e) {
  if (!$o(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (wn(function () {
        Bo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Nt] = null);
        });
      }),
      !0)
    : !1;
};
be.unstable_batchedUpdates = Ta;
be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!$o(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return Bo(e, t, n, !1, r);
};
be.version = "18.2.0-next-9e3b772b8-20220608";
function Wf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wf);
    } catch (e) {
      console.error(e);
    }
}
Wf(), (Fc.exports = be);
var Hf = Fc.exports;
const Fn = ei(Hf);
var ac = Hf;
(Ds.createRoot = ac.createRoot), (Ds.hydrateRoot = ac.hydrateRoot);
/**
 * @remix-run/router v1.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Zr() {
  return (
    (Zr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zr.apply(this, arguments)
  );
}
var Bt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Bt || (Bt = {}));
const uc = "popstate";
function lv(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: s, hash: u } = r.location;
    return Rl(
      "",
      { pathname: o, search: s, hash: u },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : wo(i);
  }
  return uv(t, n, null, e);
}
function fe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Vf(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function av() {
  return Math.random().toString(36).substr(2, 8);
}
function cc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Rl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Zr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? or(t) : t,
      { state: n, key: (t && t.key) || r || av() }
    )
  );
}
function wo(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function or(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function uv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    u = Bt.Pop,
    d = null,
    p = y();
  p == null && ((p = 0), s.replaceState(Zr({}, s.state, { idx: p }), ""));
  function y() {
    return (s.state || { idx: null }).idx;
  }
  function w() {
    u = Bt.Pop;
    let m = y(),
      l = m == null ? null : m - p;
    (p = m), d && d({ action: u, location: E.location, delta: l });
  }
  function c(m, l) {
    u = Bt.Push;
    let a = Rl(E.location, m, l);
    n && n(a, m), (p = y() + 1);
    let f = cc(a, p),
      g = E.createHref(a);
    try {
      s.pushState(f, "", g);
    } catch (N) {
      if (N instanceof DOMException && N.name === "DataCloneError") throw N;
      i.location.assign(g);
    }
    o && d && d({ action: u, location: E.location, delta: 1 });
  }
  function C(m, l) {
    u = Bt.Replace;
    let a = Rl(E.location, m, l);
    n && n(a, m), (p = y());
    let f = cc(a, p),
      g = E.createHref(a);
    s.replaceState(f, "", g),
      o && d && d({ action: u, location: E.location, delta: 0 });
  }
  function x(m) {
    let l = i.location.origin !== "null" ? i.location.origin : i.location.href,
      a = typeof m == "string" ? m : wo(m);
    return (
      (a = a.replace(/ $/, "%20")),
      fe(
        l,
        "No window.location.(origin|href) available to create URL for href: " +
          a
      ),
      new URL(a, l)
    );
  }
  let E = {
    get action() {
      return u;
    },
    get location() {
      return e(i, s);
    },
    listen(m) {
      if (d) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(uc, w),
        (d = m),
        () => {
          i.removeEventListener(uc, w), (d = null);
        }
      );
    },
    createHref(m) {
      return t(i, m);
    },
    createURL: x,
    encodeLocation(m) {
      let l = x(m);
      return { pathname: l.pathname, search: l.search, hash: l.hash };
    },
    push: c,
    replace: C,
    go(m) {
      return s.go(m);
    },
  };
  return E;
}
var dc;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(dc || (dc = {}));
function cv(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? or(t) : t,
    i = tr(r.pathname || "/", n);
  if (i == null) return null;
  let o = Qf(e);
  dv(o);
  let s = null;
  for (let u = 0; s == null && u < o.length; ++u) {
    let d = Ev(i);
    s = xv(o[u], d);
  }
  return s;
}
function Qf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, u) => {
    let d = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    d.relativePath.startsWith("/") &&
      (fe(
        d.relativePath.startsWith(r),
        'Absolute route path "' +
          d.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (d.relativePath = d.relativePath.slice(r.length)));
    let p = Xt([r, d.relativePath]),
      y = n.concat(d);
    o.children &&
      o.children.length > 0 &&
      (fe(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + p + '".')
      ),
      Qf(o.children, t, y, p)),
      !(o.path == null && !o.index) &&
        t.push({ path: p, score: yv(p, o.index), routesMeta: y });
  };
  return (
    e.forEach((o, s) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) i(o, s);
      else for (let d of Kf(o.path)) i(o, s, d);
    }),
    t
  );
}
function Kf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = Kf(r.join("/")),
    u = [];
  return (
    u.push(...s.map((d) => (d === "" ? o : [o, d].join("/")))),
    i && u.push(...s),
    u.map((d) => (e.startsWith("/") && d === "" ? "/" : d))
  );
}
function dv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : wv(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const fv = /^:[\w-]+$/,
  pv = 3,
  hv = 2,
  mv = 1,
  gv = 10,
  vv = -2,
  fc = (e) => e === "*";
function yv(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(fc) && (r += vv),
    t && (r += hv),
    n
      .filter((i) => !fc(i))
      .reduce((i, o) => i + (fv.test(o) ? pv : o === "" ? mv : gv), r)
  );
}
function wv(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function xv(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let s = 0; s < n.length; ++s) {
    let u = n[s],
      d = s === n.length - 1,
      p = i === "/" ? t : t.slice(i.length) || "/",
      y = Tl(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: d },
        p
      );
    if (!y) return null;
    Object.assign(r, y.params);
    let w = u.route;
    o.push({
      params: r,
      pathname: Xt([i, y.pathname]),
      pathnameBase: kv(Xt([i, y.pathnameBase])),
      route: w,
    }),
      y.pathnameBase !== "/" && (i = Xt([i, y.pathnameBase]));
  }
  return o;
}
function Tl(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Cv(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    u = i.slice(1);
  return {
    params: r.reduce((p, y, w) => {
      let { paramName: c, isOptional: C } = y;
      if (c === "*") {
        let E = u[w] || "";
        s = o.slice(0, o.length - E.length).replace(/(.)\/+$/, "$1");
      }
      const x = u[w];
      return (
        C && !x ? (p[c] = void 0) : (p[c] = (x || "").replace(/%2F/g, "/")), p
      );
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function Cv(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Vf(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, u, d) => (
            r.push({ paramName: u, isOptional: d != null }),
            d ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function Ev(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Vf(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function tr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function _v(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? or(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Nv(n, t)) : t,
    search: jv(r),
    hash: Rv(i),
  };
}
function Nv(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Rs(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Sv(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Xf(e, t) {
  let n = Sv(e);
  return t
    ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Gf(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = or(e))
    : ((i = Zr({}, e)),
      fe(
        !i.pathname || !i.pathname.includes("?"),
        Rs("?", "pathname", "search", i)
      ),
      fe(
        !i.pathname || !i.pathname.includes("#"),
        Rs("#", "pathname", "hash", i)
      ),
      fe(!i.search || !i.search.includes("#"), Rs("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    s = o ? "/" : i.pathname,
    u;
  if (s == null) u = n;
  else {
    let w = t.length - 1;
    if (!r && s.startsWith("..")) {
      let c = s.split("/");
      for (; c[0] === ".."; ) c.shift(), (w -= 1);
      i.pathname = c.join("/");
    }
    u = w >= 0 ? t[w] : "/";
  }
  let d = _v(i, u),
    p = s && s !== "/" && s.endsWith("/"),
    y = (o || s === ".") && n.endsWith("/");
  return !d.pathname.endsWith("/") && (p || y) && (d.pathname += "/"), d;
}
const Xt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  kv = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  jv = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Rv = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Tv(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Yf = ["post", "put", "patch", "delete"];
new Set(Yf);
const Ov = ["get", ...Yf];
new Set(Ov);
/**
 * React Router v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Jr() {
  return (
    (Jr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Jr.apply(this, arguments)
  );
}
const Fo = v.createContext(null),
  Zf = v.createContext(null),
  en = v.createContext(null),
  Uo = v.createContext(null),
  tn = v.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Jf = v.createContext(null);
function Mv(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  si() || fe(!1);
  let { basename: r, navigator: i } = v.useContext(en),
    { hash: o, pathname: s, search: u } = bo(e, { relative: n }),
    d = s;
  return (
    r !== "/" && (d = s === "/" ? r : Xt([r, s])),
    i.createHref({ pathname: d, search: u, hash: o })
  );
}
function si() {
  return v.useContext(Uo) != null;
}
function li() {
  return si() || fe(!1), v.useContext(Uo).location;
}
function qf(e) {
  v.useContext(en).static || v.useLayoutEffect(e);
}
function ep() {
  let { isDataRoute: e } = v.useContext(tn);
  return e ? Vv() : Pv();
}
function Pv() {
  si() || fe(!1);
  let e = v.useContext(Fo),
    { basename: t, future: n, navigator: r } = v.useContext(en),
    { matches: i } = v.useContext(tn),
    { pathname: o } = li(),
    s = JSON.stringify(Xf(i, n.v7_relativeSplatPath)),
    u = v.useRef(!1);
  return (
    qf(() => {
      u.current = !0;
    }),
    v.useCallback(
      function (p, y) {
        if ((y === void 0 && (y = {}), !u.current)) return;
        if (typeof p == "number") {
          r.go(p);
          return;
        }
        let w = Gf(p, JSON.parse(s), o, y.relative === "path");
        e == null &&
          t !== "/" &&
          (w.pathname = w.pathname === "/" ? t : Xt([t, w.pathname])),
          (y.replace ? r.replace : r.push)(w, y.state, y);
      },
      [t, r, s, o, e]
    )
  );
}
function Av() {
  let { matches: e } = v.useContext(tn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function bo(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = v.useContext(en),
    { matches: i } = v.useContext(tn),
    { pathname: o } = li(),
    s = JSON.stringify(Xf(i, r.v7_relativeSplatPath));
  return v.useMemo(() => Gf(e, JSON.parse(s), o, n === "path"), [e, s, o, n]);
}
function Lv(e, t) {
  return Dv(e, t);
}
function Dv(e, t, n, r) {
  si() || fe(!1);
  let { navigator: i } = v.useContext(en),
    { matches: o } = v.useContext(tn),
    s = o[o.length - 1],
    u = s ? s.params : {};
  s && s.pathname;
  let d = s ? s.pathnameBase : "/";
  s && s.route;
  let p = li(),
    y;
  if (t) {
    var w;
    let m = typeof t == "string" ? or(t) : t;
    d === "/" || ((w = m.pathname) != null && w.startsWith(d)) || fe(!1),
      (y = m);
  } else y = p;
  let c = y.pathname || "/",
    C = c;
  if (d !== "/") {
    let m = d.replace(/^\//, "").split("/");
    C = "/" + c.replace(/^\//, "").split("/").slice(m.length).join("/");
  }
  let x = cv(e, { pathname: C }),
    E = Fv(
      x &&
        x.map((m) =>
          Object.assign({}, m, {
            params: Object.assign({}, u, m.params),
            pathname: Xt([
              d,
              i.encodeLocation
                ? i.encodeLocation(m.pathname).pathname
                : m.pathname,
            ]),
            pathnameBase:
              m.pathnameBase === "/"
                ? d
                : Xt([
                    d,
                    i.encodeLocation
                      ? i.encodeLocation(m.pathnameBase).pathname
                      : m.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && E
    ? v.createElement(
        Uo.Provider,
        {
          value: {
            location: Jr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              y
            ),
            navigationType: Bt.Pop,
          },
        },
        E
      )
    : E;
}
function zv() {
  let e = Hv(),
    t = Tv(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return v.createElement(
    v.Fragment,
    null,
    v.createElement("h2", null, "Unexpected Application Error!"),
    v.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? v.createElement("pre", { style: i }, n) : null,
    o
  );
}
const Iv = v.createElement(zv, null);
class $v extends v.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? v.createElement(
          tn.Provider,
          { value: this.props.routeContext },
          v.createElement(Jf.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Bv(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = v.useContext(Fo);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    v.createElement(tn.Provider, { value: t }, r)
  );
}
function Fv(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let s = e,
    u = (i = n) == null ? void 0 : i.errors;
  if (u != null) {
    let y = s.findIndex(
      (w) => w.route.id && (u == null ? void 0 : u[w.route.id])
    );
    y >= 0 || fe(!1), (s = s.slice(0, Math.min(s.length, y + 1)));
  }
  let d = !1,
    p = -1;
  if (n && r && r.v7_partialHydration)
    for (let y = 0; y < s.length; y++) {
      let w = s[y];
      if (
        ((w.route.HydrateFallback || w.route.hydrateFallbackElement) && (p = y),
        w.route.id)
      ) {
        let { loaderData: c, errors: C } = n,
          x =
            w.route.loader &&
            c[w.route.id] === void 0 &&
            (!C || C[w.route.id] === void 0);
        if (w.route.lazy || x) {
          (d = !0), p >= 0 ? (s = s.slice(0, p + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((y, w, c) => {
    let C,
      x = !1,
      E = null,
      m = null;
    n &&
      ((C = u && w.route.id ? u[w.route.id] : void 0),
      (E = w.route.errorElement || Iv),
      d &&
        (p < 0 && c === 0
          ? (Qv("route-fallback", !1), (x = !0), (m = null))
          : p === c &&
            ((x = !0), (m = w.route.hydrateFallbackElement || null))));
    let l = t.concat(s.slice(0, c + 1)),
      a = () => {
        let f;
        return (
          C
            ? (f = E)
            : x
            ? (f = m)
            : w.route.Component
            ? (f = v.createElement(w.route.Component, null))
            : w.route.element
            ? (f = w.route.element)
            : (f = y),
          v.createElement(Bv, {
            match: w,
            routeContext: { outlet: y, matches: l, isDataRoute: n != null },
            children: f,
          })
        );
      };
    return n && (w.route.ErrorBoundary || w.route.errorElement || c === 0)
      ? v.createElement($v, {
          location: n.location,
          revalidation: n.revalidation,
          component: E,
          error: C,
          children: a(),
          routeContext: { outlet: null, matches: l, isDataRoute: !0 },
        })
      : a();
  }, null);
}
var tp = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(tp || {}),
  xo = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(xo || {});
function Uv(e) {
  let t = v.useContext(Fo);
  return t || fe(!1), t;
}
function bv(e) {
  let t = v.useContext(Zf);
  return t || fe(!1), t;
}
function Wv(e) {
  let t = v.useContext(tn);
  return t || fe(!1), t;
}
function np(e) {
  let t = Wv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || fe(!1), n.route.id;
}
function Hv() {
  var e;
  let t = v.useContext(Jf),
    n = bv(xo.UseRouteError),
    r = np(xo.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Vv() {
  let { router: e } = Uv(tp.UseNavigateStable),
    t = np(xo.UseNavigateStable),
    n = v.useRef(!1);
  return (
    qf(() => {
      n.current = !0;
    }),
    v.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Jr({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const pc = {};
function Qv(e, t, n) {
  !t && !pc[e] && (pc[e] = !0);
}
function ln(e) {
  fe(!1);
}
function Kv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Bt.Pop,
    navigator: o,
    static: s = !1,
    future: u,
  } = e;
  si() && fe(!1);
  let d = t.replace(/^\/*/, "/"),
    p = v.useMemo(
      () => ({
        basename: d,
        navigator: o,
        static: s,
        future: Jr({ v7_relativeSplatPath: !1 }, u),
      }),
      [d, u, o, s]
    );
  typeof r == "string" && (r = or(r));
  let {
      pathname: y = "/",
      search: w = "",
      hash: c = "",
      state: C = null,
      key: x = "default",
    } = r,
    E = v.useMemo(() => {
      let m = tr(y, d);
      return m == null
        ? null
        : {
            location: { pathname: m, search: w, hash: c, state: C, key: x },
            navigationType: i,
          };
    }, [d, y, w, c, C, x, i]);
  return E == null
    ? null
    : v.createElement(
        en.Provider,
        { value: p },
        v.createElement(Uo.Provider, { children: n, value: E })
      );
}
function Xv(e) {
  let { children: t, location: n } = e;
  return Lv(Ol(t), n);
}
new Promise(() => {});
function Ol(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    v.Children.forEach(e, (r, i) => {
      if (!v.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === v.Fragment) {
        n.push.apply(n, Ol(r.props.children, o));
        return;
      }
      r.type !== ln && fe(!1), !r.props.index || !r.props.children || fe(!1);
      let s = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = Ol(r.props.children, o)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Co() {
  return (
    (Co = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Co.apply(this, arguments)
  );
}
function rp(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Gv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Yv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Gv(e);
}
const Zv = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Jv = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  qv = "6";
try {
  window.__reactRouterVersion = qv;
} catch {}
const ey = v.createContext({ isTransitioning: !1 }),
  ty = "startTransition",
  hc = Zh[ty];
function ny(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = v.useRef();
  o.current == null && (o.current = lv({ window: i, v5Compat: !0 }));
  let s = o.current,
    [u, d] = v.useState({ action: s.action, location: s.location }),
    { v7_startTransition: p } = r || {},
    y = v.useCallback(
      (w) => {
        p && hc ? hc(() => d(w)) : d(w);
      },
      [d, p]
    );
  return (
    v.useLayoutEffect(() => s.listen(y), [s, y]),
    v.createElement(Kv, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: s,
      future: r,
    })
  );
}
const ry =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  iy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  oy = v.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: s,
        state: u,
        target: d,
        to: p,
        preventScrollReset: y,
        unstable_viewTransition: w,
      } = t,
      c = rp(t, Zv),
      { basename: C } = v.useContext(en),
      x,
      E = !1;
    if (typeof p == "string" && iy.test(p) && ((x = p), ry))
      try {
        let f = new URL(window.location.href),
          g = p.startsWith("//") ? new URL(f.protocol + p) : new URL(p),
          N = tr(g.pathname, C);
        g.origin === f.origin && N != null
          ? (p = N + g.search + g.hash)
          : (E = !0);
      } catch {}
    let m = Mv(p, { relative: i }),
      l = ly(p, {
        replace: s,
        state: u,
        target: d,
        preventScrollReset: y,
        relative: i,
        unstable_viewTransition: w,
      });
    function a(f) {
      r && r(f), f.defaultPrevented || l(f);
    }
    return v.createElement(
      "a",
      Co({}, c, { href: x || m, onClick: E || o ? r : a, ref: n, target: d })
    );
  }),
  jn = v.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: o = "",
        end: s = !1,
        style: u,
        to: d,
        unstable_viewTransition: p,
        children: y,
      } = t,
      w = rp(t, Jv),
      c = bo(d, { relative: w.relative }),
      C = li(),
      x = v.useContext(Zf),
      { navigator: E, basename: m } = v.useContext(en),
      l = x != null && ay(c) && p === !0,
      a = E.encodeLocation ? E.encodeLocation(c).pathname : c.pathname,
      f = C.pathname,
      g =
        x && x.navigation && x.navigation.location
          ? x.navigation.location.pathname
          : null;
    i ||
      ((f = f.toLowerCase()),
      (g = g ? g.toLowerCase() : null),
      (a = a.toLowerCase())),
      g && m && (g = tr(g, m) || g);
    const N = a !== "/" && a.endsWith("/") ? a.length - 1 : a.length;
    let _ = f === a || (!s && f.startsWith(a) && f.charAt(N) === "/"),
      S =
        g != null &&
        (g === a || (!s && g.startsWith(a) && g.charAt(a.length) === "/")),
      k = { isActive: _, isPending: S, isTransitioning: l },
      D = _ ? r : void 0,
      T;
    typeof o == "function"
      ? (T = o(k))
      : (T = [
          o,
          _ ? "active" : null,
          S ? "pending" : null,
          l ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let z = typeof u == "function" ? u(k) : u;
    return v.createElement(
      oy,
      Co({}, w, {
        "aria-current": D,
        className: T,
        ref: n,
        style: z,
        to: d,
        unstable_viewTransition: p,
      }),
      typeof y == "function" ? y(k) : y
    );
  });
var Ml;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Ml || (Ml = {}));
var mc;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(mc || (mc = {}));
function sy(e) {
  let t = v.useContext(Fo);
  return t || fe(!1), t;
}
function ly(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: s,
      unstable_viewTransition: u,
    } = t === void 0 ? {} : t,
    d = ep(),
    p = li(),
    y = bo(e, { relative: s });
  return v.useCallback(
    (w) => {
      if (Yv(w, n)) {
        w.preventDefault();
        let c = r !== void 0 ? r : wo(p) === wo(y);
        d(e, {
          replace: c,
          state: i,
          preventScrollReset: o,
          relative: s,
          unstable_viewTransition: u,
        });
      }
    },
    [p, d, y, r, i, n, e, o, s, u]
  );
}
function ay(e, t) {
  t === void 0 && (t = {});
  let n = v.useContext(ey);
  n == null && fe(!1);
  let { basename: r } = sy(Ml.useViewTransitionState),
    i = bo(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = tr(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    s = tr(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Tl(i.pathname, s) != null || Tl(i.pathname, o) != null;
}
const ip = v.createContext({});
function Wo() {
  return v.useContext(ip);
}
const op = v.createContext({});
function ai() {
  return v.useContext(op);
}
const sp = v.createContext(void 0);
function sr() {
  return v.useContext(sp);
}
const uy = new Intl.NumberFormat(void 0, {
  currency: "MXN",
  style: "currency",
});
function Kn(e) {
  return uy.format(e);
}
var lp = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], i = 0; i < arguments.length; i++) {
        var o = arguments[i];
        if (o) {
          var s = typeof o;
          if (s === "string" || s === "number") r.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var u = n.apply(null, o);
              u && r.push(u);
            }
          } else if (s === "object") {
            if (
              o.toString !== Object.prototype.toString &&
              !o.toString.toString().includes("[native code]")
            ) {
              r.push(o.toString());
              continue;
            }
            for (var d in o) t.call(o, d) && o[d] && r.push(d);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(lp);
var cy = lp.exports;
const I = ei(cy);
function Pl() {
  return (
    (Pl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Pl.apply(this, arguments)
  );
}
function ap(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function gc(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function dy(e) {
  var t = fy(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function fy(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function py(e, t, n) {
  var r = v.useRef(e !== void 0),
    i = v.useState(t),
    o = i[0],
    s = i[1],
    u = e !== void 0,
    d = r.current;
  return (
    (r.current = u),
    !u && d && o !== t && s(t),
    [
      u ? e : o,
      v.useCallback(
        function (p) {
          for (
            var y = arguments.length, w = new Array(y > 1 ? y - 1 : 0), c = 1;
            c < y;
            c++
          )
            w[c - 1] = arguments[c];
          n && n.apply(void 0, [p].concat(w)), s(p);
        },
        [n]
      ),
    ]
  );
}
function Ia(e, t) {
  return Object.keys(t).reduce(function (n, r) {
    var i,
      o = n,
      s = o[gc(r)],
      u = o[r],
      d = ap(o, [gc(r), r].map(dy)),
      p = t[r],
      y = py(u, s, e[p]),
      w = y[0],
      c = y[1];
    return Pl({}, d, ((i = {}), (i[r] = w), (i[p] = c), i));
  }, e);
}
function Al(e, t) {
  return (
    (Al = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Al(e, t)
  );
}
function hy(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Al(e, t);
}
const up = ["xxl", "xl", "lg", "md", "sm", "xs"],
  cp = "xs",
  Ho = v.createContext({ prefixes: {}, breakpoints: up, minBreakpoint: cp });
function b(e, t) {
  const { prefixes: n } = v.useContext(Ho);
  return e || n[t] || t;
}
function $a() {
  const { breakpoints: e } = v.useContext(Ho);
  return e;
}
function Ba() {
  const { minBreakpoint: e } = v.useContext(Ho);
  return e;
}
function dp() {
  const { dir: e } = v.useContext(Ho);
  return e === "rtl";
}
function Vo(e) {
  return (e && e.ownerDocument) || document;
}
function my(e) {
  var t = Vo(e);
  return (t && t.defaultView) || window;
}
function gy(e, t) {
  return my(e).getComputedStyle(e, t);
}
var vy = /([A-Z])/g;
function yy(e) {
  return e.replace(vy, "-$1").toLowerCase();
}
var wy = /^ms-/;
function Oi(e) {
  return yy(e).replace(wy, "-ms-");
}
var xy =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function Cy(e) {
  return !!(e && xy.test(e));
}
function Et(e, t) {
  var n = "",
    r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(Oi(t)) || gy(e).getPropertyValue(Oi(t));
  Object.keys(t).forEach(function (i) {
    var o = t[i];
    !o && o !== 0
      ? e.style.removeProperty(Oi(i))
      : Cy(i)
      ? (r += i + "(" + o + ") ")
      : (n += Oi(i) + ": " + o + ";");
  }),
    r && (n += "transform: " + r + ";"),
    (e.style.cssText += ";" + n);
}
var fp = { exports: {} },
  Ey = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  _y = Ey,
  Ny = _y;
function pp() {}
function hp() {}
hp.resetWarningCache = pp;
var Sy = function () {
  function e(r, i, o, s, u, d) {
    if (d !== Ny) {
      var p = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((p.name = "Invariant Violation"), p);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: hp,
    resetWarningCache: pp,
  };
  return (n.PropTypes = n), n;
};
fp.exports = Sy();
var ky = fp.exports;
const Ts = ei(ky),
  vc = { disabled: !1 },
  mp = M.createContext(null);
var jy = function (t) {
    return t.scrollTop;
  },
  _r = "unmounted",
  Lt = "exited",
  nt = "entering",
  vt = "entered",
  qr = "exiting",
  Rt = (function (e) {
    hy(t, e);
    function t(r, i) {
      var o;
      o = e.call(this, r, i) || this;
      var s = i,
        u = s && !s.isMounting ? r.enter : r.appear,
        d;
      return (
        (o.appearStatus = null),
        r.in
          ? u
            ? ((d = Lt), (o.appearStatus = nt))
            : (d = vt)
          : r.unmountOnExit || r.mountOnEnter
          ? (d = _r)
          : (d = Lt),
        (o.state = { status: d }),
        (o.nextCallback = null),
        o
      );
    }
    t.getDerivedStateFromProps = function (i, o) {
      var s = i.in;
      return s && o.status === _r ? { status: Lt } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (i) {
        var o = null;
        if (i !== this.props) {
          var s = this.state.status;
          this.props.in
            ? s !== nt && s !== vt && (o = nt)
            : (s === nt || s === vt) && (o = qr);
        }
        this.updateStatus(!1, o);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var i = this.props.timeout,
          o,
          s,
          u;
        return (
          (o = s = u = i),
          i != null &&
            typeof i != "number" &&
            ((o = i.exit),
            (s = i.enter),
            (u = i.appear !== void 0 ? i.appear : s)),
          { exit: o, enter: s, appear: u }
        );
      }),
      (n.updateStatus = function (i, o) {
        if ((i === void 0 && (i = !1), o !== null))
          if ((this.cancelNextCallback(), o === nt)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef
                ? this.props.nodeRef.current
                : Fn.findDOMNode(this);
              s && jy(s);
            }
            this.performEnter(i);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Lt &&
            this.setState({ status: _r });
      }),
      (n.performEnter = function (i) {
        var o = this,
          s = this.props.enter,
          u = this.context ? this.context.isMounting : i,
          d = this.props.nodeRef ? [u] : [Fn.findDOMNode(this), u],
          p = d[0],
          y = d[1],
          w = this.getTimeouts(),
          c = u ? w.appear : w.enter;
        if ((!i && !s) || vc.disabled) {
          this.safeSetState({ status: vt }, function () {
            o.props.onEntered(p);
          });
          return;
        }
        this.props.onEnter(p, y),
          this.safeSetState({ status: nt }, function () {
            o.props.onEntering(p, y),
              o.onTransitionEnd(c, function () {
                o.safeSetState({ status: vt }, function () {
                  o.props.onEntered(p, y);
                });
              });
          });
      }),
      (n.performExit = function () {
        var i = this,
          o = this.props.exit,
          s = this.getTimeouts(),
          u = this.props.nodeRef ? void 0 : Fn.findDOMNode(this);
        if (!o || vc.disabled) {
          this.safeSetState({ status: Lt }, function () {
            i.props.onExited(u);
          });
          return;
        }
        this.props.onExit(u),
          this.safeSetState({ status: qr }, function () {
            i.props.onExiting(u),
              i.onTransitionEnd(s.exit, function () {
                i.safeSetState({ status: Lt }, function () {
                  i.props.onExited(u);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (i, o) {
        (o = this.setNextCallback(o)), this.setState(i, o);
      }),
      (n.setNextCallback = function (i) {
        var o = this,
          s = !0;
        return (
          (this.nextCallback = function (u) {
            s && ((s = !1), (o.nextCallback = null), i(u));
          }),
          (this.nextCallback.cancel = function () {
            s = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (i, o) {
        this.setNextCallback(o);
        var s = this.props.nodeRef
            ? this.props.nodeRef.current
            : Fn.findDOMNode(this),
          u = i == null && !this.props.addEndListener;
        if (!s || u) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var d = this.props.nodeRef
              ? [this.nextCallback]
              : [s, this.nextCallback],
            p = d[0],
            y = d[1];
          this.props.addEndListener(p, y);
        }
        i != null && setTimeout(this.nextCallback, i);
      }),
      (n.render = function () {
        var i = this.state.status;
        if (i === _r) return null;
        var o = this.props,
          s = o.children;
        o.in,
          o.mountOnEnter,
          o.unmountOnExit,
          o.appear,
          o.enter,
          o.exit,
          o.timeout,
          o.addEndListener,
          o.onEnter,
          o.onEntering,
          o.onEntered,
          o.onExit,
          o.onExiting,
          o.onExited,
          o.nodeRef;
        var u = ap(o, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return M.createElement(
          mp.Provider,
          { value: null },
          typeof s == "function"
            ? s(i, u)
            : M.cloneElement(M.Children.only(s), u)
        );
      }),
      t
    );
  })(M.Component);
Rt.contextType = mp;
Rt.propTypes = {};
function Nn() {}
Rt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Nn,
  onEntering: Nn,
  onEntered: Nn,
  onExit: Nn,
  onExiting: Nn,
  onExited: Nn,
};
Rt.UNMOUNTED = _r;
Rt.EXITED = Lt;
Rt.ENTERING = nt;
Rt.ENTERED = vt;
Rt.EXITING = qr;
const Ry = Rt,
  lr = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
var Ll = !1,
  Dl = !1;
try {
  var Os = {
    get passive() {
      return (Ll = !0);
    },
    get once() {
      return (Dl = Ll = !0);
    },
  };
  lr &&
    (window.addEventListener("test", Os, Os),
    window.removeEventListener("test", Os, !0));
} catch {}
function gp(e, t, n, r) {
  if (r && typeof r != "boolean" && !Dl) {
    var i = r.once,
      o = r.capture,
      s = n;
    !Dl &&
      i &&
      ((s =
        n.__once ||
        function u(d) {
          this.removeEventListener(t, u, o), n.call(this, d);
        }),
      (n.__once = s)),
      e.addEventListener(t, s, Ll ? r : o);
  }
  e.addEventListener(t, n, r);
}
function zl(e, t, n, r) {
  var i = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, i),
    n.__once && e.removeEventListener(t, n.__once, i);
}
function Eo(e, t, n, r) {
  return (
    gp(e, t, n, r),
    function () {
      zl(e, t, n, r);
    }
  );
}
function Ty(e, t, n, r) {
  if ((n === void 0 && (n = !1), r === void 0 && (r = !0), e)) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(t, n, r), e.dispatchEvent(i);
  }
}
function Oy(e) {
  var t = Et(e, "transitionDuration") || "",
    n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function My(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1,
    i = setTimeout(function () {
      r || Ty(e, "transitionend", !0);
    }, t + n),
    o = Eo(
      e,
      "transitionend",
      function () {
        r = !0;
      },
      { once: !0 }
    );
  return function () {
    clearTimeout(i), o();
  };
}
function vp(e, t, n, r) {
  n == null && (n = Oy(e) || 0);
  var i = My(e, n, r),
    o = Eo(e, "transitionend", t);
  return function () {
    i(), o();
  };
}
function yc(e, t) {
  const n = Et(e, t) || "",
    r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function Qo(e, t) {
  const n = yc(e, "transitionDuration"),
    r = yc(e, "transitionDelay"),
    i = vp(
      e,
      (o) => {
        o.target === e && (i(), t(o));
      },
      n + r
    );
}
function yr(...e) {
  return e
    .filter((t) => t != null)
    .reduce((t, n) => {
      if (typeof n != "function")
        throw new Error(
          "Invalid Argument Type, must only provide functions, undefined, or null."
        );
      return t === null
        ? n
        : function (...i) {
            t.apply(this, i), n.apply(this, i);
          };
    }, null);
}
function Fa(e) {
  e.offsetHeight;
}
const wc = (e) =>
  !e || typeof e == "function"
    ? e
    : (t) => {
        e.current = t;
      };
function Py(e, t) {
  const n = wc(e),
    r = wc(t);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function ui(e, t) {
  return v.useMemo(() => Py(e, t), [e, t]);
}
function Ay(e) {
  return e && "setState" in e ? Fn.findDOMNode(e) : e ?? null;
}
const Ly = M.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: i,
        onExited: o,
        addEndListener: s,
        children: u,
        childRef: d,
        ...p
      },
      y
    ) => {
      const w = v.useRef(null),
        c = ui(w, d),
        C = (_) => {
          c(Ay(_));
        },
        x = (_) => (S) => {
          _ && w.current && _(w.current, S);
        },
        E = v.useCallback(x(e), [e]),
        m = v.useCallback(x(t), [t]),
        l = v.useCallback(x(n), [n]),
        a = v.useCallback(x(r), [r]),
        f = v.useCallback(x(i), [i]),
        g = v.useCallback(x(o), [o]),
        N = v.useCallback(x(s), [s]);
      return h.jsx(Ry, {
        ref: y,
        ...p,
        onEnter: E,
        onEntered: l,
        onEntering: m,
        onExit: a,
        onExited: g,
        onExiting: f,
        addEndListener: N,
        nodeRef: w,
        children:
          typeof u == "function"
            ? (_, S) => u(_, { ...S, ref: C })
            : M.cloneElement(u, { ref: C }),
      });
    }
  ),
  Ko = Ly,
  Dy = {
    height: ["marginTop", "marginBottom"],
    width: ["marginLeft", "marginRight"],
  };
function zy(e, t) {
  const n = `offset${e[0].toUpperCase()}${e.slice(1)}`,
    r = t[n],
    i = Dy[e];
  return r + parseInt(Et(t, i[0]), 10) + parseInt(Et(t, i[1]), 10);
}
const Iy = {
    [Lt]: "collapse",
    [qr]: "collapsing",
    [nt]: "collapsing",
    [vt]: "collapse show",
  },
  $y = M.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: i,
        className: o,
        children: s,
        dimension: u = "height",
        in: d = !1,
        timeout: p = 300,
        mountOnEnter: y = !1,
        unmountOnExit: w = !1,
        appear: c = !1,
        getDimensionValue: C = zy,
        ...x
      },
      E
    ) => {
      const m = typeof u == "function" ? u() : u,
        l = v.useMemo(
          () =>
            yr((_) => {
              _.style[m] = "0";
            }, e),
          [m, e]
        ),
        a = v.useMemo(
          () =>
            yr((_) => {
              const S = `scroll${m[0].toUpperCase()}${m.slice(1)}`;
              _.style[m] = `${_[S]}px`;
            }, t),
          [m, t]
        ),
        f = v.useMemo(
          () =>
            yr((_) => {
              _.style[m] = null;
            }, n),
          [m, n]
        ),
        g = v.useMemo(
          () =>
            yr((_) => {
              (_.style[m] = `${C(m, _)}px`), Fa(_);
            }, r),
          [r, C, m]
        ),
        N = v.useMemo(
          () =>
            yr((_) => {
              _.style[m] = null;
            }, i),
          [m, i]
        );
      return h.jsx(Ko, {
        ref: E,
        addEndListener: Qo,
        ...x,
        "aria-expanded": x.role ? d : null,
        onEnter: l,
        onEntering: a,
        onEntered: f,
        onExit: g,
        onExiting: N,
        childRef: s.ref,
        in: d,
        timeout: p,
        mountOnEnter: y,
        unmountOnExit: w,
        appear: c,
        children: (_, S) =>
          M.cloneElement(s, {
            ...S,
            className: I(
              o,
              s.props.className,
              Iy[_],
              m === "width" && "collapse-horizontal"
            ),
          }),
      });
    }
  ),
  By = $y;
function yp(e) {
  const t = v.useRef(e);
  return (
    v.useEffect(() => {
      t.current = e;
    }, [e]),
    t
  );
}
function ke(e) {
  const t = yp(e);
  return v.useCallback(
    function (...n) {
      return t.current && t.current(...n);
    },
    [t]
  );
}
const Xo = (e) =>
  v.forwardRef((t, n) =>
    h.jsx("div", { ...t, ref: n, className: I(t.className, e) })
  );
function Fy() {
  return v.useState(null);
}
function wp() {
  const e = v.useRef(!0),
    t = v.useRef(() => e.current);
  return (
    v.useEffect(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    t.current
  );
}
function Uy(e) {
  const t = v.useRef(null);
  return (
    v.useEffect(() => {
      t.current = e;
    }),
    t.current
  );
}
const by =
    typeof global < "u" &&
    global.navigator &&
    global.navigator.product === "ReactNative",
  Wy = typeof document < "u",
  Il = Wy || by ? v.useLayoutEffect : v.useEffect,
  Hy = ["as", "disabled"];
function Vy(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Qy(e) {
  return !e || e.trim() === "#";
}
function Ua({
  tagName: e,
  disabled: t,
  href: n,
  target: r,
  rel: i,
  role: o,
  onClick: s,
  tabIndex: u = 0,
  type: d,
}) {
  e || (n != null || r != null || i != null ? (e = "a") : (e = "button"));
  const p = { tagName: e };
  if (e === "button") return [{ type: d || "button", disabled: t }, p];
  const y = (c) => {
      if (((t || (e === "a" && Qy(n))) && c.preventDefault(), t)) {
        c.stopPropagation();
        return;
      }
      s == null || s(c);
    },
    w = (c) => {
      c.key === " " && (c.preventDefault(), y(c));
    };
  return (
    e === "a" && (n || (n = "#"), t && (n = void 0)),
    [
      {
        role: o ?? "button",
        disabled: void 0,
        tabIndex: t ? void 0 : u,
        href: n,
        target: e === "a" ? r : void 0,
        "aria-disabled": t || void 0,
        rel: e === "a" ? i : void 0,
        onClick: y,
        onKeyDown: w,
      },
      p,
    ]
  );
}
const xp = v.forwardRef((e, t) => {
  let { as: n, disabled: r } = e,
    i = Vy(e, Hy);
  const [o, { tagName: s }] = Ua(Object.assign({ tagName: n, disabled: r }, i));
  return h.jsx(s, Object.assign({}, i, o, { ref: t }));
});
xp.displayName = "Button";
const Ky = ["onKeyDown"];
function Xy(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Gy(e) {
  return !e || e.trim() === "#";
}
const Cp = v.forwardRef((e, t) => {
  let { onKeyDown: n } = e,
    r = Xy(e, Ky);
  const [i] = Ua(Object.assign({ tagName: "a" }, r)),
    o = ke((s) => {
      i.onKeyDown(s), n == null || n(s);
    });
  return Gy(r.href) || r.role === "button"
    ? h.jsx("a", Object.assign({ ref: t }, r, i, { onKeyDown: o }))
    : h.jsx("a", Object.assign({ ref: t }, r, { onKeyDown: n }));
});
Cp.displayName = "Anchor";
const $l = Cp,
  Yy = { [nt]: "show", [vt]: "show" },
  Ep = v.forwardRef(
    (
      {
        className: e,
        children: t,
        transitionClasses: n = {},
        onEnter: r,
        ...i
      },
      o
    ) => {
      const s = {
          in: !1,
          timeout: 300,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          ...i,
        },
        u = v.useCallback(
          (d, p) => {
            Fa(d), r == null || r(d, p);
          },
          [r]
        );
      return h.jsx(Ko, {
        ref: o,
        addEndListener: Qo,
        ...s,
        onEnter: u,
        childRef: t.ref,
        children: (d, p) =>
          v.cloneElement(t, {
            ...p,
            className: I("fade", e, t.props.className, Yy[d], n[d]),
          }),
      });
    }
  );
Ep.displayName = "Fade";
const ba = Ep,
  Zy = {
    "aria-label": Ts.string,
    onClick: Ts.func,
    variant: Ts.oneOf(["white"]),
  },
  Wa = v.forwardRef(
    ({ className: e, variant: t, "aria-label": n = "Close", ...r }, i) =>
      h.jsx("button", {
        ref: i,
        type: "button",
        className: I("btn-close", t && `btn-close-${t}`, e),
        "aria-label": n,
        ...r,
      })
  );
Wa.displayName = "CloseButton";
Wa.propTypes = Zy;
const Jy = Wa,
  _p = v.forwardRef(
    (
      {
        as: e,
        bsPrefix: t,
        variant: n = "primary",
        size: r,
        active: i = !1,
        disabled: o = !1,
        className: s,
        ...u
      },
      d
    ) => {
      const p = b(t, "btn"),
        [y, { tagName: w }] = Ua({ tagName: e, disabled: o, ...u }),
        c = w;
      return h.jsx(c, {
        ...y,
        ...u,
        ref: d,
        disabled: o,
        className: I(
          s,
          p,
          i && "active",
          n && `${p}-${n}`,
          r && `${p}-${r}`,
          u.href && o && "disabled"
        ),
      });
    }
  );
_p.displayName = "Button";
const xt = _p,
  Np = v.forwardRef(
    ({ className: e, bsPrefix: t, as: n = "div", ...r }, i) => (
      (t = b(t, "card-body")), h.jsx(n, { ref: i, className: I(e, t), ...r })
    )
  );
Np.displayName = "CardBody";
const Sp = Np,
  kp = v.forwardRef(
    ({ className: e, bsPrefix: t, as: n = "div", ...r }, i) => (
      (t = b(t, "card-footer")), h.jsx(n, { ref: i, className: I(e, t), ...r })
    )
  );
kp.displayName = "CardFooter";
const qy = kp,
  jp = v.createContext(null);
jp.displayName = "CardHeaderContext";
const Rp = jp,
  Tp = v.forwardRef(({ bsPrefix: e, className: t, as: n = "div", ...r }, i) => {
    const o = b(e, "card-header"),
      s = v.useMemo(() => ({ cardHeaderBsPrefix: o }), [o]);
    return h.jsx(Rp.Provider, {
      value: s,
      children: h.jsx(n, { ref: i, ...r, className: I(t, o) }),
    });
  });
Tp.displayName = "CardHeader";
const e0 = Tp,
  Op = v.forwardRef(
    ({ bsPrefix: e, className: t, variant: n, as: r = "img", ...i }, o) => {
      const s = b(e, "card-img");
      return h.jsx(r, { ref: o, className: I(n ? `${s}-${n}` : s, t), ...i });
    }
  );
Op.displayName = "CardImg";
const t0 = Op,
  Mp = v.forwardRef(
    ({ className: e, bsPrefix: t, as: n = "div", ...r }, i) => (
      (t = b(t, "card-img-overlay")),
      h.jsx(n, { ref: i, className: I(e, t), ...r })
    )
  );
Mp.displayName = "CardImgOverlay";
const n0 = Mp,
  Pp = v.forwardRef(
    ({ className: e, bsPrefix: t, as: n = "a", ...r }, i) => (
      (t = b(t, "card-link")), h.jsx(n, { ref: i, className: I(e, t), ...r })
    )
  );
Pp.displayName = "CardLink";
const r0 = Pp,
  i0 = Xo("h6"),
  Ap = v.forwardRef(
    ({ className: e, bsPrefix: t, as: n = i0, ...r }, i) => (
      (t = b(t, "card-subtitle")),
      h.jsx(n, { ref: i, className: I(e, t), ...r })
    )
  );
Ap.displayName = "CardSubtitle";
const o0 = Ap,
  Lp = v.forwardRef(
    ({ className: e, bsPrefix: t, as: n = "p", ...r }, i) => (
      (t = b(t, "card-text")), h.jsx(n, { ref: i, className: I(e, t), ...r })
    )
  );
Lp.displayName = "CardText";
const s0 = Lp,
  l0 = Xo("h5"),
  Dp = v.forwardRef(
    ({ className: e, bsPrefix: t, as: n = l0, ...r }, i) => (
      (t = b(t, "card-title")), h.jsx(n, { ref: i, className: I(e, t), ...r })
    )
  );
Dp.displayName = "CardTitle";
const a0 = Dp,
  zp = v.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        bg: n,
        text: r,
        border: i,
        body: o = !1,
        children: s,
        as: u = "div",
        ...d
      },
      p
    ) => {
      const y = b(e, "card");
      return h.jsx(u, {
        ref: p,
        ...d,
        className: I(
          t,
          y,
          n && `bg-${n}`,
          r && `text-${r}`,
          i && `border-${i}`
        ),
        children: o ? h.jsx(Sp, { children: s }) : s,
      });
    }
  );
zp.displayName = "Card";
const Mi = Object.assign(zp, {
  Img: t0,
  Title: a0,
  Subtitle: o0,
  Body: Sp,
  Link: r0,
  Text: s0,
  Header: e0,
  Footer: qy,
  ImgOverlay: n0,
});
function u0(e, t) {
  const n = v.useRef(!0);
  v.useEffect(() => {
    if (n.current) {
      n.current = !1;
      return;
    }
    return e();
  }, t);
}
function c0(e) {
  const t = v.useRef(e);
  return (t.current = e), t;
}
function Ha(e) {
  const t = c0(e);
  v.useEffect(() => () => t.current(), []);
}
const Bl = 2 ** 31 - 1;
function Ip(e, t, n) {
  const r = n - Date.now();
  e.current = r <= Bl ? setTimeout(t, r) : setTimeout(() => Ip(e, t, n), Bl);
}
function d0() {
  const e = wp(),
    t = v.useRef();
  return (
    Ha(() => clearTimeout(t.current)),
    v.useMemo(() => {
      const n = () => clearTimeout(t.current);
      function r(i, o = 0) {
        e() &&
          (n(),
          o <= Bl ? (t.current = setTimeout(i, o)) : Ip(t, i, Date.now() + o));
      }
      return { set: r, clear: n };
    }, [])
  );
}
const $p = v.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "div", ...r }, i) => (
    (t = b(t, "carousel-caption")),
    h.jsx(n, { ref: i, className: I(e, t), ...r })
  )
);
$p.displayName = "CarouselCaption";
const f0 = $p,
  Bp = v.forwardRef(({ as: e = "div", bsPrefix: t, className: n, ...r }, i) => {
    const o = I(n, b(t, "carousel-item"));
    return h.jsx(e, { ref: i, ...r, className: o });
  });
Bp.displayName = "CarouselItem";
const p0 = Bp;
function xc(e, t) {
  let n = 0;
  return v.Children.map(e, (r) => (v.isValidElement(r) ? t(r, n++) : r));
}
function h0(e, t) {
  let n = 0;
  v.Children.forEach(e, (r) => {
    v.isValidElement(r) && t(r, n++);
  });
}
const m0 = 40;
function g0(e) {
  if (!e || !e.style || !e.parentNode || !e.parentNode.style) return !1;
  const t = getComputedStyle(e);
  return (
    t.display !== "none" &&
    t.visibility !== "hidden" &&
    getComputedStyle(e.parentNode).display !== "none"
  );
}
const Fp = v.forwardRef(({ defaultActiveIndex: e = 0, ...t }, n) => {
  const {
      as: r = "div",
      bsPrefix: i,
      slide: o = !0,
      fade: s = !1,
      controls: u = !0,
      indicators: d = !0,
      indicatorLabels: p = [],
      activeIndex: y,
      onSelect: w,
      onSlide: c,
      onSlid: C,
      interval: x = 5e3,
      keyboard: E = !0,
      onKeyDown: m,
      pause: l = "hover",
      onMouseOver: a,
      onMouseOut: f,
      wrap: g = !0,
      touch: N = !0,
      onTouchStart: _,
      onTouchMove: S,
      onTouchEnd: k,
      prevIcon: D = h.jsx("span", {
        "aria-hidden": "true",
        className: "carousel-control-prev-icon",
      }),
      prevLabel: T = "Previous",
      nextIcon: z = h.jsx("span", {
        "aria-hidden": "true",
        className: "carousel-control-next-icon",
      }),
      nextLabel: U = "Next",
      variant: q,
      className: B,
      children: W,
      ...J
    } = Ia({ defaultActiveIndex: e, ...t }, { activeIndex: "onSelect" }),
    K = b(i, "carousel"),
    j = dp(),
    P = v.useRef(null),
    [L, $] = v.useState("next"),
    [V, ne] = v.useState(!1),
    [te, X] = v.useState(!1),
    [G, Ye] = v.useState(y || 0);
  v.useEffect(() => {
    !te &&
      y !== G &&
      (P.current ? $(P.current) : $((y || 0) > G ? "next" : "prev"),
      o && X(!0),
      Ye(y || 0));
  }, [y, te, G, o]),
    v.useEffect(() => {
      P.current && (P.current = null);
    });
  let Ze = 0,
    Tt;
  h0(W, (F, re) => {
    ++Ze, re === y && (Tt = F.props.interval);
  });
  const dt = yp(Tt),
    Re = v.useCallback(
      (F) => {
        if (te) return;
        let re = G - 1;
        if (re < 0) {
          if (!g) return;
          re = Ze - 1;
        }
        (P.current = "prev"), w == null || w(re, F);
      },
      [te, G, w, g, Ze]
    ),
    we = ke((F) => {
      if (te) return;
      let re = G + 1;
      if (re >= Ze) {
        if (!g) return;
        re = 0;
      }
      (P.current = "next"), w == null || w(re, F);
    }),
    ft = v.useRef();
  v.useImperativeHandle(n, () => ({ element: ft.current, prev: Re, next: we }));
  const pt = ke(() => {
      !document.hidden && g0(ft.current) && (j ? Re() : we());
    }),
    Y = L === "next" ? "start" : "end";
  u0(() => {
    o || (c == null || c(G, Y), C == null || C(G, Y));
  }, [G]);
  const En = `${K}-item-${L}`,
    nn = `${K}-item-${Y}`,
    Yo = v.useCallback(
      (F) => {
        Fa(F), c == null || c(G, Y);
      },
      [c, G, Y]
    ),
    Zo = v.useCallback(() => {
      X(!1), C == null || C(G, Y);
    }, [C, G, Y]),
    Jo = v.useCallback(
      (F) => {
        if (E && !/input|textarea/i.test(F.target.tagName))
          switch (F.key) {
            case "ArrowLeft":
              F.preventDefault(), j ? we(F) : Re(F);
              return;
            case "ArrowRight":
              F.preventDefault(), j ? Re(F) : we(F);
              return;
          }
        m == null || m(F);
      },
      [E, m, Re, we, j]
    ),
    qo = v.useCallback(
      (F) => {
        l === "hover" && ne(!0), a == null || a(F);
      },
      [l, a]
    ),
    es = v.useCallback(
      (F) => {
        ne(!1), f == null || f(F);
      },
      [f]
    ),
    ci = v.useRef(0),
    rn = v.useRef(0),
    di = d0(),
    Z = v.useCallback(
      (F) => {
        (ci.current = F.touches[0].clientX),
          (rn.current = 0),
          l === "hover" && ne(!0),
          _ == null || _(F);
      },
      [l, _]
    ),
    Ot = v.useCallback(
      (F) => {
        F.touches && F.touches.length > 1
          ? (rn.current = 0)
          : (rn.current = F.touches[0].clientX - ci.current),
          S == null || S(F);
      },
      [S]
    ),
    fi = v.useCallback(
      (F) => {
        if (N) {
          const re = rn.current;
          Math.abs(re) > m0 && (re > 0 ? Re(F) : we(F));
        }
        l === "hover" &&
          di.set(() => {
            ne(!1);
          }, x || void 0),
          k == null || k(F);
      },
      [N, l, Re, we, di, x, k]
    ),
    Ja = x != null && !V && !te,
    ts = v.useRef();
  v.useEffect(() => {
    var F, re;
    if (!Ja) return;
    const ht = j ? Re : we;
    return (
      (ts.current = window.setInterval(
        document.visibilityState ? pt : ht,
        (F = (re = dt.current) != null ? re : x) != null ? F : void 0
      )),
      () => {
        ts.current !== null && clearInterval(ts.current);
      }
    );
  }, [Ja, Re, we, dt, x, pt, j]);
  const qa = v.useMemo(
    () =>
      d &&
      Array.from({ length: Ze }, (F, re) => (ht) => {
        w == null || w(re, ht);
      }),
    [d, Ze, w]
  );
  return h.jsxs(r, {
    ref: ft,
    ...J,
    onKeyDown: Jo,
    onMouseOver: qo,
    onMouseOut: es,
    onTouchStart: Z,
    onTouchMove: Ot,
    onTouchEnd: fi,
    className: I(B, K, o && "slide", s && `${K}-fade`, q && `${K}-${q}`),
    children: [
      d &&
        h.jsx("div", {
          className: `${K}-indicators`,
          children: xc(W, (F, re) =>
            h.jsx(
              "button",
              {
                type: "button",
                "data-bs-target": "",
                "aria-label": p != null && p.length ? p[re] : `Slide ${re + 1}`,
                className: re === G ? "active" : void 0,
                onClick: qa ? qa[re] : void 0,
                "aria-current": re === G,
              },
              re
            )
          ),
        }),
      h.jsx("div", {
        className: `${K}-inner`,
        children: xc(W, (F, re) => {
          const ht = re === G;
          return o
            ? h.jsx(Ko, {
                in: ht,
                onEnter: ht ? Yo : void 0,
                onEntered: ht ? Zo : void 0,
                addEndListener: Qo,
                children: (ur, Ah) =>
                  v.cloneElement(F, {
                    ...Ah,
                    className: I(
                      F.props.className,
                      ht && ur !== "entered" && En,
                      (ur === "entered" || ur === "exiting") && "active",
                      (ur === "entering" || ur === "exiting") && nn
                    ),
                  }),
              })
            : v.cloneElement(F, {
                className: I(F.props.className, ht && "active"),
              });
        }),
      }),
      u &&
        h.jsxs(h.Fragment, {
          children: [
            (g || y !== 0) &&
              h.jsxs($l, {
                className: `${K}-control-prev`,
                onClick: Re,
                children: [
                  D,
                  T &&
                    h.jsx("span", {
                      className: "visually-hidden",
                      children: T,
                    }),
                ],
              }),
            (g || y !== Ze - 1) &&
              h.jsxs($l, {
                className: `${K}-control-next`,
                onClick: we,
                children: [
                  z,
                  U &&
                    h.jsx("span", {
                      className: "visually-hidden",
                      children: U,
                    }),
                ],
              }),
          ],
        }),
    ],
  });
});
Fp.displayName = "Carousel";
const Fl = Object.assign(Fp, { Caption: f0, Item: p0 });
function v0({ as: e, bsPrefix: t, className: n, ...r }) {
  t = b(t, "col");
  const i = $a(),
    o = Ba(),
    s = [],
    u = [];
  return (
    i.forEach((d) => {
      const p = r[d];
      delete r[d];
      let y, w, c;
      typeof p == "object" && p != null
        ? ({ span: y, offset: w, order: c } = p)
        : (y = p);
      const C = d !== o ? `-${d}` : "";
      y && s.push(y === !0 ? `${t}${C}` : `${t}${C}-${y}`),
        c != null && u.push(`order${C}-${c}`),
        w != null && u.push(`offset${C}-${w}`);
    }),
    [
      { ...r, className: I(n, ...s, ...u) },
      { as: e, bsPrefix: t, spans: s },
    ]
  );
}
const Up = v.forwardRef((e, t) => {
  const [{ className: n, ...r }, { as: i = "div", bsPrefix: o, spans: s }] =
    v0(e);
  return h.jsx(i, { ...r, ref: t, className: I(n, !s.length && o) });
});
Up.displayName = "Col";
const Va = Up,
  bp = v.forwardRef(
    ({ bsPrefix: e, fluid: t = !1, as: n = "div", className: r, ...i }, o) => {
      const s = b(e, "container"),
        u = typeof t == "string" ? `-${t}` : "-fluid";
      return h.jsx(n, { ref: o, ...i, className: I(r, t ? `${s}${u}` : s) });
    }
  );
bp.displayName = "Container";
const y0 = bp;
var w0 = Function.prototype.bind.call(Function.prototype.call, [].slice);
function an(e, t) {
  return w0(e.querySelectorAll(t));
}
function x0() {
  const [, e] = v.useReducer((t) => !t, !1);
  return e;
}
function Cc(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition)
    return e === t || !!(e.compareDocumentPosition(t) & 16);
}
const C0 = v.createContext(null),
  Qa = (e, t = null) => (e != null ? String(e) : t || null),
  _o = C0,
  Wp = v.createContext(null);
Wp.displayName = "NavContext";
const Hp = Wp,
  E0 = "data-rr-ui-",
  _0 = "rrUi";
function Go(e) {
  return `${E0}${e}`;
}
function N0(e) {
  return `${_0}${e}`;
}
const Vp = v.createContext(lr ? window : void 0);
Vp.Provider;
function Ka() {
  return v.useContext(Vp);
}
const Qp = v.createContext(null);
Qp.displayName = "NavbarContext";
const ar = Qp,
  S0 = v.createContext(null),
  Kp = S0,
  k0 = ["as", "active", "eventKey"];
function j0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Xp({ key: e, onClick: t, active: n, id: r, role: i, disabled: o }) {
  const s = v.useContext(_o),
    u = v.useContext(Hp),
    d = v.useContext(Kp);
  let p = n;
  const y = { role: i };
  if (u) {
    !i && u.role === "tablist" && (y.role = "tab");
    const w = u.getControllerId(e ?? null),
      c = u.getControlledId(e ?? null);
    (y[Go("event-key")] = e),
      (y.id = w || r),
      (p = n == null && e != null ? u.activeKey === e : n),
      (p ||
        (!(d != null && d.unmountOnExit) && !(d != null && d.mountOnEnter))) &&
        (y["aria-controls"] = c);
  }
  return (
    y.role === "tab" &&
      ((y["aria-selected"] = p),
      p || (y.tabIndex = -1),
      o && ((y.tabIndex = -1), (y["aria-disabled"] = !0))),
    (y.onClick = ke((w) => {
      o ||
        (t == null || t(w),
        e != null && s && !w.isPropagationStopped() && s(e, w));
    })),
    [y, { isActive: p }]
  );
}
const Gp = v.forwardRef((e, t) => {
  let { as: n = xp, active: r, eventKey: i } = e,
    o = j0(e, k0);
  const [s, u] = Xp(Object.assign({ key: Qa(i, o.href), active: r }, o));
  return (
    (s[Go("active")] = u.isActive),
    h.jsx(n, Object.assign({}, o, s, { ref: t }))
  );
});
Gp.displayName = "NavItem";
const R0 = Gp,
  T0 = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function O0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
const Ec = () => {},
  _c = Go("event-key"),
  Yp = v.forwardRef((e, t) => {
    let { as: n = "div", onSelect: r, activeKey: i, role: o, onKeyDown: s } = e,
      u = O0(e, T0);
    const d = x0(),
      p = v.useRef(!1),
      y = v.useContext(_o),
      w = v.useContext(Kp);
    let c, C;
    w &&
      ((o = o || "tablist"),
      (i = w.activeKey),
      (c = w.getControlledId),
      (C = w.getControllerId));
    const x = v.useRef(null),
      E = (f) => {
        const g = x.current;
        if (!g) return null;
        const N = an(g, `[${_c}]:not([aria-disabled=true])`),
          _ = g.querySelector("[aria-selected=true]");
        if (!_ || _ !== document.activeElement) return null;
        const S = N.indexOf(_);
        if (S === -1) return null;
        let k = S + f;
        return k >= N.length && (k = 0), k < 0 && (k = N.length - 1), N[k];
      },
      m = (f, g) => {
        f != null && (r == null || r(f, g), y == null || y(f, g));
      },
      l = (f) => {
        if ((s == null || s(f), !w)) return;
        let g;
        switch (f.key) {
          case "ArrowLeft":
          case "ArrowUp":
            g = E(-1);
            break;
          case "ArrowRight":
          case "ArrowDown":
            g = E(1);
            break;
          default:
            return;
        }
        g &&
          (f.preventDefault(),
          m(g.dataset[N0("EventKey")] || null, f),
          (p.current = !0),
          d());
      };
    v.useEffect(() => {
      if (x.current && p.current) {
        const f = x.current.querySelector(`[${_c}][aria-selected=true]`);
        f == null || f.focus();
      }
      p.current = !1;
    });
    const a = ui(t, x);
    return h.jsx(_o.Provider, {
      value: m,
      children: h.jsx(Hp.Provider, {
        value: {
          role: o,
          activeKey: Qa(i),
          getControlledId: c || Ec,
          getControllerId: C || Ec,
        },
        children: h.jsx(
          n,
          Object.assign({}, u, { onKeyDown: l, ref: a, role: o })
        ),
      }),
    });
  });
Yp.displayName = "Nav";
const M0 = Object.assign(Yp, { Item: R0 });
var Pi;
function Nc(e) {
  if (((!Pi && Pi !== 0) || e) && lr) {
    var t = document.createElement("div");
    (t.style.position = "absolute"),
      (t.style.top = "-9999px"),
      (t.style.width = "50px"),
      (t.style.height = "50px"),
      (t.style.overflow = "scroll"),
      document.body.appendChild(t),
      (Pi = t.offsetWidth - t.clientWidth),
      document.body.removeChild(t);
  }
  return Pi;
}
function Ms(e) {
  e === void 0 && (e = Vo());
  try {
    var t = e.activeElement;
    return !t || !t.nodeName ? null : t;
  } catch {
    return e.body;
  }
}
function P0(e = document) {
  const t = e.defaultView;
  return Math.abs(t.innerWidth - e.documentElement.clientWidth);
}
const Sc = Go("modal-open");
class A0 {
  constructor({
    ownerDocument: t,
    handleContainerOverflow: n = !0,
    isRTL: r = !1,
  } = {}) {
    (this.handleContainerOverflow = n),
      (this.isRTL = r),
      (this.modals = []),
      (this.ownerDocument = t);
  }
  getScrollbarWidth() {
    return P0(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(t) {}
  removeModalAttributes(t) {}
  setContainerStyle(t) {
    const n = { overflow: "hidden" },
      r = this.isRTL ? "paddingLeft" : "paddingRight",
      i = this.getElement();
    (t.style = { overflow: i.style.overflow, [r]: i.style[r] }),
      t.scrollBarWidth &&
        (n[r] = `${parseInt(Et(i, r) || "0", 10) + t.scrollBarWidth}px`),
      i.setAttribute(Sc, ""),
      Et(i, n);
  }
  reset() {
    [...this.modals].forEach((t) => this.remove(t));
  }
  removeContainerStyle(t) {
    const n = this.getElement();
    n.removeAttribute(Sc), Object.assign(n.style, t.style);
  }
  add(t) {
    let n = this.modals.indexOf(t);
    return (
      n !== -1 ||
        ((n = this.modals.length),
        this.modals.push(t),
        this.setModalAttributes(t),
        n !== 0) ||
        ((this.state = { scrollBarWidth: this.getScrollbarWidth(), style: {} }),
        this.handleContainerOverflow && this.setContainerStyle(this.state)),
      n
    );
  }
  remove(t) {
    const n = this.modals.indexOf(t);
    n !== -1 &&
      (this.modals.splice(n, 1),
      !this.modals.length &&
        this.handleContainerOverflow &&
        this.removeContainerStyle(this.state),
      this.removeModalAttributes(t));
  }
  isTopModal(t) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === t;
  }
}
const Xa = A0,
  Ps = (e, t) =>
    lr
      ? e == null
        ? (t || Vo()).body
        : (typeof e == "function" && (e = e()),
          e && "current" in e && (e = e.current),
          e && ("nodeType" in e || e.getBoundingClientRect) ? e : null)
      : null;
function L0(e, t) {
  const n = Ka(),
    [r, i] = v.useState(() => Ps(e, n == null ? void 0 : n.document));
  if (!r) {
    const o = Ps(e);
    o && i(o);
  }
  return (
    v.useEffect(() => {
      t && r && t(r);
    }, [t, r]),
    v.useEffect(() => {
      const o = Ps(e);
      o !== r && i(o);
    }, [e, r]),
    r
  );
}
function D0({
  children: e,
  in: t,
  onExited: n,
  mountOnEnter: r,
  unmountOnExit: i,
}) {
  const o = v.useRef(null),
    s = v.useRef(t),
    u = ke(n);
  v.useEffect(() => {
    t ? (s.current = !0) : u(o.current);
  }, [t, u]);
  const d = ui(o, e.ref),
    p = v.cloneElement(e, { ref: d });
  return t ? p : i || (!s.current && r) ? null : p;
}
function z0({ in: e, onTransition: t }) {
  const n = v.useRef(null),
    r = v.useRef(!0),
    i = ke(t);
  return (
    Il(() => {
      if (!n.current) return;
      let o = !1;
      return (
        i({ in: e, element: n.current, initial: r.current, isStale: () => o }),
        () => {
          o = !0;
        }
      );
    }, [e, i]),
    Il(
      () => (
        (r.current = !1),
        () => {
          r.current = !0;
        }
      ),
      []
    ),
    n
  );
}
function I0({ children: e, in: t, onExited: n, onEntered: r, transition: i }) {
  const [o, s] = v.useState(!t);
  t && o && s(!1);
  const u = z0({
      in: !!t,
      onTransition: (p) => {
        const y = () => {
          p.isStale() ||
            (p.in
              ? r == null || r(p.element, p.initial)
              : (s(!0), n == null || n(p.element)));
        };
        Promise.resolve(i(p)).then(y, (w) => {
          throw (p.in || s(!0), w);
        });
      },
    }),
    d = ui(u, e.ref);
  return o && !t ? null : v.cloneElement(e, { ref: d });
}
function kc(e, t, n) {
  return e
    ? h.jsx(e, Object.assign({}, n))
    : t
    ? h.jsx(I0, Object.assign({}, n, { transition: t }))
    : h.jsx(D0, Object.assign({}, n));
}
function $0(e) {
  return e.code === "Escape" || e.keyCode === 27;
}
const B0 = [
  "show",
  "role",
  "className",
  "style",
  "children",
  "backdrop",
  "keyboard",
  "onBackdropClick",
  "onEscapeKeyDown",
  "transition",
  "runTransition",
  "backdropTransition",
  "runBackdropTransition",
  "autoFocus",
  "enforceFocus",
  "restoreFocus",
  "restoreFocusOptions",
  "renderDialog",
  "renderBackdrop",
  "manager",
  "container",
  "onShow",
  "onHide",
  "onExit",
  "onExited",
  "onExiting",
  "onEnter",
  "onEntering",
  "onEntered",
];
function F0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
let As;
function U0(e) {
  return (
    As || (As = new Xa({ ownerDocument: e == null ? void 0 : e.document })), As
  );
}
function b0(e) {
  const t = Ka(),
    n = e || U0(t),
    r = v.useRef({ dialog: null, backdrop: null });
  return Object.assign(r.current, {
    add: () => n.add(r.current),
    remove: () => n.remove(r.current),
    isTopModal: () => n.isTopModal(r.current),
    setDialogRef: v.useCallback((i) => {
      r.current.dialog = i;
    }, []),
    setBackdropRef: v.useCallback((i) => {
      r.current.backdrop = i;
    }, []),
  });
}
const Zp = v.forwardRef((e, t) => {
  let {
      show: n = !1,
      role: r = "dialog",
      className: i,
      style: o,
      children: s,
      backdrop: u = !0,
      keyboard: d = !0,
      onBackdropClick: p,
      onEscapeKeyDown: y,
      transition: w,
      runTransition: c,
      backdropTransition: C,
      runBackdropTransition: x,
      autoFocus: E = !0,
      enforceFocus: m = !0,
      restoreFocus: l = !0,
      restoreFocusOptions: a,
      renderDialog: f,
      renderBackdrop: g = (Y) => h.jsx("div", Object.assign({}, Y)),
      manager: N,
      container: _,
      onShow: S,
      onHide: k = () => {},
      onExit: D,
      onExited: T,
      onExiting: z,
      onEnter: U,
      onEntering: q,
      onEntered: B,
    } = e,
    W = F0(e, B0);
  const J = Ka(),
    K = L0(_),
    j = b0(N),
    P = wp(),
    L = Uy(n),
    [$, V] = v.useState(!n),
    ne = v.useRef(null);
  v.useImperativeHandle(t, () => j, [j]),
    lr && !L && n && (ne.current = Ms(J == null ? void 0 : J.document)),
    n && $ && V(!1);
  const te = ke(() => {
      if (
        (j.add(),
        (dt.current = Eo(document, "keydown", Ze)),
        (Tt.current = Eo(document, "focus", () => setTimeout(G), !0)),
        S && S(),
        E)
      ) {
        var Y, En;
        const nn = Ms(
          (Y = (En = j.dialog) == null ? void 0 : En.ownerDocument) != null
            ? Y
            : J == null
            ? void 0
            : J.document
        );
        j.dialog &&
          nn &&
          !Cc(j.dialog, nn) &&
          ((ne.current = nn), j.dialog.focus());
      }
    }),
    X = ke(() => {
      if (
        (j.remove(),
        dt.current == null || dt.current(),
        Tt.current == null || Tt.current(),
        l)
      ) {
        var Y;
        (Y = ne.current) == null || Y.focus == null || Y.focus(a),
          (ne.current = null);
      }
    });
  v.useEffect(() => {
    !n || !K || te();
  }, [n, K, te]),
    v.useEffect(() => {
      $ && X();
    }, [$, X]),
    Ha(() => {
      X();
    });
  const G = ke(() => {
      if (!m || !P() || !j.isTopModal()) return;
      const Y = Ms(J == null ? void 0 : J.document);
      j.dialog && Y && !Cc(j.dialog, Y) && j.dialog.focus();
    }),
    Ye = ke((Y) => {
      Y.target === Y.currentTarget && (p == null || p(Y), u === !0 && k());
    }),
    Ze = ke((Y) => {
      d &&
        $0(Y) &&
        j.isTopModal() &&
        (y == null || y(Y), Y.defaultPrevented || k());
    }),
    Tt = v.useRef(),
    dt = v.useRef(),
    Re = (...Y) => {
      V(!0), T == null || T(...Y);
    };
  if (!K) return null;
  const we = Object.assign(
    {
      role: r,
      ref: j.setDialogRef,
      "aria-modal": r === "dialog" ? !0 : void 0,
    },
    W,
    { style: o, className: i, tabIndex: -1 }
  );
  let ft = f
    ? f(we)
    : h.jsx(
        "div",
        Object.assign({}, we, {
          children: v.cloneElement(s, { role: "document" }),
        })
      );
  ft = kc(w, c, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!n,
    onExit: D,
    onExiting: z,
    onExited: Re,
    onEnter: U,
    onEntering: q,
    onEntered: B,
    children: ft,
  });
  let pt = null;
  return (
    u &&
      ((pt = g({ ref: j.setBackdropRef, onClick: Ye })),
      (pt = kc(C, x, {
        in: !!n,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: pt,
      }))),
    h.jsx(h.Fragment, {
      children: Fn.createPortal(h.jsxs(h.Fragment, { children: [pt, ft] }), K),
    })
  );
});
Zp.displayName = "Modal";
const Jp = Object.assign(Zp, { Manager: Xa });
function W0(e, t) {
  return e.classList
    ? !!t && e.classList.contains(t)
    : (" " + (e.className.baseVal || e.className) + " ").indexOf(
        " " + t + " "
      ) !== -1;
}
function H0(e, t) {
  e.classList
    ? e.classList.add(t)
    : W0(e, t) ||
      (typeof e.className == "string"
        ? (e.className = e.className + " " + t)
        : e.setAttribute(
            "class",
            ((e.className && e.className.baseVal) || "") + " " + t
          ));
}
function jc(e, t) {
  return e
    .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function V0(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == "string"
    ? (e.className = jc(e.className, t))
    : e.setAttribute(
        "class",
        jc((e.className && e.className.baseVal) || "", t)
      );
}
const Sn = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler",
};
class qp extends Xa {
  adjustAndStore(t, n, r) {
    const i = n.style[t];
    (n.dataset[t] = i), Et(n, { [t]: `${parseFloat(Et(n, t)) + r}px` });
  }
  restore(t, n) {
    const r = n.dataset[t];
    r !== void 0 && (delete n.dataset[t], Et(n, { [t]: r }));
  }
  setContainerStyle(t) {
    super.setContainerStyle(t);
    const n = this.getElement();
    if ((H0(n, "modal-open"), !t.scrollBarWidth)) return;
    const r = this.isRTL ? "paddingLeft" : "paddingRight",
      i = this.isRTL ? "marginLeft" : "marginRight";
    an(n, Sn.FIXED_CONTENT).forEach((o) =>
      this.adjustAndStore(r, o, t.scrollBarWidth)
    ),
      an(n, Sn.STICKY_CONTENT).forEach((o) =>
        this.adjustAndStore(i, o, -t.scrollBarWidth)
      ),
      an(n, Sn.NAVBAR_TOGGLER).forEach((o) =>
        this.adjustAndStore(i, o, t.scrollBarWidth)
      );
  }
  removeContainerStyle(t) {
    super.removeContainerStyle(t);
    const n = this.getElement();
    V0(n, "modal-open");
    const r = this.isRTL ? "paddingLeft" : "paddingRight",
      i = this.isRTL ? "marginLeft" : "marginRight";
    an(n, Sn.FIXED_CONTENT).forEach((o) => this.restore(r, o)),
      an(n, Sn.STICKY_CONTENT).forEach((o) => this.restore(i, o)),
      an(n, Sn.NAVBAR_TOGGLER).forEach((o) => this.restore(i, o));
  }
}
let Ls;
function eh(e) {
  return Ls || (Ls = new qp(e)), Ls;
}
const Q0 = qp,
  th = v.forwardRef(
    ({ className: e, bsPrefix: t, as: n = "div", ...r }, i) => (
      (t = b(t, "modal-body")), h.jsx(n, { ref: i, className: I(e, t), ...r })
    )
  );
th.displayName = "ModalBody";
const K0 = th,
  X0 = v.createContext({ onHide() {} }),
  Ga = X0,
  nh = v.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        contentClassName: n,
        centered: r,
        size: i,
        fullscreen: o,
        children: s,
        scrollable: u,
        ...d
      },
      p
    ) => {
      e = b(e, "modal");
      const y = `${e}-dialog`,
        w = typeof o == "string" ? `${e}-fullscreen-${o}` : `${e}-fullscreen`;
      return h.jsx("div", {
        ...d,
        ref: p,
        className: I(
          y,
          t,
          i && `${e}-${i}`,
          r && `${y}-centered`,
          u && `${y}-scrollable`,
          o && w
        ),
        children: h.jsx("div", {
          className: I(`${e}-content`, n),
          children: s,
        }),
      });
    }
  );
nh.displayName = "ModalDialog";
const rh = nh,
  ih = v.forwardRef(
    ({ className: e, bsPrefix: t, as: n = "div", ...r }, i) => (
      (t = b(t, "modal-footer")), h.jsx(n, { ref: i, className: I(e, t), ...r })
    )
  );
ih.displayName = "ModalFooter";
const G0 = ih,
  Y0 = v.forwardRef(
    (
      {
        closeLabel: e = "Close",
        closeVariant: t,
        closeButton: n = !1,
        onHide: r,
        children: i,
        ...o
      },
      s
    ) => {
      const u = v.useContext(Ga),
        d = ke(() => {
          u == null || u.onHide(), r == null || r();
        });
      return h.jsxs("div", {
        ref: s,
        ...o,
        children: [
          i,
          n && h.jsx(Jy, { "aria-label": e, variant: t, onClick: d }),
        ],
      });
    }
  ),
  oh = Y0,
  sh = v.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        closeLabel: n = "Close",
        closeButton: r = !1,
        ...i
      },
      o
    ) => (
      (e = b(e, "modal-header")),
      h.jsx(oh, {
        ref: o,
        ...i,
        className: I(t, e),
        closeLabel: n,
        closeButton: r,
      })
    )
  );
sh.displayName = "ModalHeader";
const Z0 = sh,
  J0 = Xo("h4"),
  lh = v.forwardRef(
    ({ className: e, bsPrefix: t, as: n = J0, ...r }, i) => (
      (t = b(t, "modal-title")), h.jsx(n, { ref: i, className: I(e, t), ...r })
    )
  );
lh.displayName = "ModalTitle";
const q0 = lh;
function ew(e) {
  return h.jsx(ba, { ...e, timeout: null });
}
function tw(e) {
  return h.jsx(ba, { ...e, timeout: null });
}
const ah = v.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      style: n,
      dialogClassName: r,
      contentClassName: i,
      children: o,
      dialogAs: s = rh,
      "data-bs-theme": u,
      "aria-labelledby": d,
      "aria-describedby": p,
      "aria-label": y,
      show: w = !1,
      animation: c = !0,
      backdrop: C = !0,
      keyboard: x = !0,
      onEscapeKeyDown: E,
      onShow: m,
      onHide: l,
      container: a,
      autoFocus: f = !0,
      enforceFocus: g = !0,
      restoreFocus: N = !0,
      restoreFocusOptions: _,
      onEntered: S,
      onExit: k,
      onExiting: D,
      onEnter: T,
      onEntering: z,
      onExited: U,
      backdropClassName: q,
      manager: B,
      ...W
    },
    J
  ) => {
    const [K, j] = v.useState({}),
      [P, L] = v.useState(!1),
      $ = v.useRef(!1),
      V = v.useRef(!1),
      ne = v.useRef(null),
      [te, X] = Fy(),
      G = ui(J, X),
      Ye = ke(l),
      Ze = dp();
    e = b(e, "modal");
    const Tt = v.useMemo(() => ({ onHide: Ye }), [Ye]);
    function dt() {
      return B || eh({ isRTL: Ze });
    }
    function Re(Z) {
      if (!lr) return;
      const Ot = dt().getScrollbarWidth() > 0,
        fi = Z.scrollHeight > Vo(Z).documentElement.clientHeight;
      j({
        paddingRight: Ot && !fi ? Nc() : void 0,
        paddingLeft: !Ot && fi ? Nc() : void 0,
      });
    }
    const we = ke(() => {
      te && Re(te.dialog);
    });
    Ha(() => {
      zl(window, "resize", we), ne.current == null || ne.current();
    });
    const ft = () => {
        $.current = !0;
      },
      pt = (Z) => {
        $.current && te && Z.target === te.dialog && (V.current = !0),
          ($.current = !1);
      },
      Y = () => {
        L(!0),
          (ne.current = vp(te.dialog, () => {
            L(!1);
          }));
      },
      En = (Z) => {
        Z.target === Z.currentTarget && Y();
      },
      nn = (Z) => {
        if (C === "static") {
          En(Z);
          return;
        }
        if (V.current || Z.target !== Z.currentTarget) {
          V.current = !1;
          return;
        }
        l == null || l();
      },
      Yo = (Z) => {
        x ? E == null || E(Z) : (Z.preventDefault(), C === "static" && Y());
      },
      Zo = (Z, Ot) => {
        Z && Re(Z), T == null || T(Z, Ot);
      },
      Jo = (Z) => {
        ne.current == null || ne.current(), k == null || k(Z);
      },
      qo = (Z, Ot) => {
        z == null || z(Z, Ot), gp(window, "resize", we);
      },
      es = (Z) => {
        Z && (Z.style.display = ""),
          U == null || U(Z),
          zl(window, "resize", we);
      },
      ci = v.useCallback(
        (Z) =>
          h.jsx("div", {
            ...Z,
            className: I(`${e}-backdrop`, q, !c && "show"),
          }),
        [c, q, e]
      ),
      rn = { ...n, ...K };
    rn.display = "block";
    const di = (Z) =>
      h.jsx("div", {
        role: "dialog",
        ...Z,
        style: rn,
        className: I(t, e, P && `${e}-static`, !c && "show"),
        onClick: C ? nn : void 0,
        onMouseUp: pt,
        "data-bs-theme": u,
        "aria-label": y,
        "aria-labelledby": d,
        "aria-describedby": p,
        children: h.jsx(s, {
          ...W,
          onMouseDown: ft,
          className: r,
          contentClassName: i,
          children: o,
        }),
      });
    return h.jsx(Ga.Provider, {
      value: Tt,
      children: h.jsx(Jp, {
        show: w,
        ref: G,
        backdrop: C,
        container: a,
        keyboard: !0,
        autoFocus: f,
        enforceFocus: g,
        restoreFocus: N,
        restoreFocusOptions: _,
        onEscapeKeyDown: Yo,
        onShow: m,
        onHide: l,
        onEnter: Zo,
        onEntering: qo,
        onEntered: S,
        onExit: Jo,
        onExiting: D,
        onExited: es,
        manager: dt(),
        transition: c ? ew : void 0,
        backdropTransition: c ? tw : void 0,
        renderBackdrop: ci,
        renderDialog: di,
      }),
    });
  }
);
ah.displayName = "Modal";
const nw = Object.assign(ah, {
  Body: K0,
  Header: Z0,
  Title: q0,
  Footer: G0,
  Dialog: rh,
  TRANSITION_DURATION: 300,
  BACKDROP_TRANSITION_DURATION: 150,
});
var Rc = { exports: {} },
  Ul = { exports: {} };
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
  function n(r) {
    function i(s, u, d, p, y, w) {
      var c = p || "<<anonymous>>",
        C = w || d;
      if (u[d] == null)
        return s
          ? new Error(
              "Required " +
                y +
                " `" +
                C +
                "` was not specified " +
                ("in `" + c + "`.")
            )
          : null;
      for (
        var x = arguments.length, E = Array(x > 6 ? x - 6 : 0), m = 6;
        m < x;
        m++
      )
        E[m - 6] = arguments[m];
      return r.apply(void 0, [u, d, c, y, C].concat(E));
    }
    var o = i.bind(null, !1);
    return (o.isRequired = i.bind(null, !0)), o;
  }
  e.exports = t.default;
})(Ul, Ul.exports);
var rw = Ul.exports;
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o);
  var n = rw,
    r = i(n);
  function i(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function o() {
    for (var s = arguments.length, u = Array(s), d = 0; d < s; d++)
      u[d] = arguments[d];
    function p() {
      for (var y = arguments.length, w = Array(y), c = 0; c < y; c++)
        w[c] = arguments[c];
      var C = null;
      return (
        u.forEach(function (x) {
          if (C == null) {
            var E = x.apply(void 0, w);
            E != null && (C = E);
          }
        }),
        C
      );
    }
    return (0, r.default)(p);
  }
  e.exports = t.default;
})(Rc, Rc.exports);
const uh = v.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "div", ...r }, i) => (
    (t = b(t, "nav-item")), h.jsx(n, { ref: i, className: I(e, t), ...r })
  )
);
uh.displayName = "NavItem";
const iw = uh,
  ch = v.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        as: n = $l,
        active: r,
        eventKey: i,
        disabled: o = !1,
        ...s
      },
      u
    ) => {
      e = b(e, "nav-link");
      const [d, p] = Xp({ key: Qa(i, s.href), active: r, disabled: o, ...s });
      return h.jsx(n, {
        ...s,
        ...d,
        ref: u,
        disabled: o,
        className: I(t, e, o && "disabled", p.isActive && "active"),
      });
    }
  );
ch.displayName = "NavLink";
const ow = ch,
  dh = v.forwardRef((e, t) => {
    const {
        as: n = "div",
        bsPrefix: r,
        variant: i,
        fill: o = !1,
        justify: s = !1,
        navbar: u,
        navbarScroll: d,
        className: p,
        activeKey: y,
        ...w
      } = Ia(e, { activeKey: "onSelect" }),
      c = b(r, "nav");
    let C,
      x,
      E = !1;
    const m = v.useContext(ar),
      l = v.useContext(Rp);
    return (
      m
        ? ((C = m.bsPrefix), (E = u ?? !0))
        : l && ({ cardHeaderBsPrefix: x } = l),
      h.jsx(M0, {
        as: n,
        ref: t,
        activeKey: y,
        className: I(p, {
          [c]: !E,
          [`${C}-nav`]: E,
          [`${C}-nav-scroll`]: E && d,
          [`${x}-${i}`]: !!x,
          [`${c}-${i}`]: !!i,
          [`${c}-fill`]: o,
          [`${c}-justified`]: s,
        }),
        ...w,
      })
    );
  });
dh.displayName = "Nav";
const kn = Object.assign(dh, { Item: iw, Link: ow }),
  fh = v.forwardRef(({ bsPrefix: e, className: t, as: n, ...r }, i) => {
    e = b(e, "navbar-brand");
    const o = n || (r.href ? "a" : "span");
    return h.jsx(o, { ...r, ref: i, className: I(t, e) });
  });
fh.displayName = "NavbarBrand";
const sw = fh,
  ph = v.forwardRef(({ children: e, bsPrefix: t, ...n }, r) => {
    t = b(t, "navbar-collapse");
    const i = v.useContext(ar);
    return h.jsx(By, {
      in: !!(i && i.expanded),
      ...n,
      children: h.jsx("div", { ref: r, className: t, children: e }),
    });
  });
ph.displayName = "NavbarCollapse";
const lw = ph,
  hh = v.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        children: n,
        label: r = "Toggle navigation",
        as: i = "button",
        onClick: o,
        ...s
      },
      u
    ) => {
      e = b(e, "navbar-toggler");
      const { onToggle: d, expanded: p } = v.useContext(ar) || {},
        y = ke((w) => {
          o && o(w), d && d();
        });
      return (
        i === "button" && (s.type = "button"),
        h.jsx(i, {
          ...s,
          ref: u,
          onClick: y,
          "aria-label": r,
          className: I(t, e, !p && "collapsed"),
          children: n || h.jsx("span", { className: `${e}-icon` }),
        })
      );
    }
  );
hh.displayName = "NavbarToggle";
const aw = hh,
  bl = new WeakMap(),
  Tc = (e, t) => {
    if (!e || !t) return;
    const n = bl.get(t) || new Map();
    bl.set(t, n);
    let r = n.get(e);
    return r || ((r = t.matchMedia(e)), (r.refCount = 0), n.set(r.media, r)), r;
  };
function uw(e, t = typeof window > "u" ? void 0 : window) {
  const n = Tc(e, t),
    [r, i] = v.useState(() => (n ? n.matches : !1));
  return (
    Il(() => {
      let o = Tc(e, t);
      if (!o) return i(!1);
      let s = bl.get(t);
      const u = () => {
        i(o.matches);
      };
      return (
        o.refCount++,
        o.addListener(u),
        u(),
        () => {
          o.removeListener(u),
            o.refCount--,
            o.refCount <= 0 && (s == null || s.delete(o.media)),
            (o = void 0);
        }
      );
    }, [e]),
    r
  );
}
function cw(e) {
  const t = Object.keys(e);
  function n(u, d) {
    return u === d ? d : u ? `${u} and ${d}` : d;
  }
  function r(u) {
    return t[Math.min(t.indexOf(u) + 1, t.length - 1)];
  }
  function i(u) {
    const d = r(u);
    let p = e[d];
    return (
      typeof p == "number" ? (p = `${p - 0.2}px`) : (p = `calc(${p} - 0.2px)`),
      `(max-width: ${p})`
    );
  }
  function o(u) {
    let d = e[u];
    return typeof d == "number" && (d = `${d}px`), `(min-width: ${d})`;
  }
  function s(u, d, p) {
    let y;
    typeof u == "object"
      ? ((y = u), (p = d), (d = !0))
      : ((d = d || !0), (y = { [u]: d }));
    let w = v.useMemo(
      () =>
        Object.entries(y).reduce(
          (c, [C, x]) => (
            (x === "up" || x === !0) && (c = n(c, o(C))),
            (x === "down" || x === !0) && (c = n(c, i(C))),
            c
          ),
          ""
        ),
      [JSON.stringify(y)]
    );
    return uw(w, p);
  }
  return s;
}
const dw = cw({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 }),
  mh = v.forwardRef(
    ({ className: e, bsPrefix: t, as: n = "div", ...r }, i) => (
      (t = b(t, "offcanvas-body")),
      h.jsx(n, { ref: i, className: I(e, t), ...r })
    )
  );
mh.displayName = "OffcanvasBody";
const fw = mh,
  pw = { [nt]: "show", [vt]: "show" },
  gh = v.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        children: n,
        in: r = !1,
        mountOnEnter: i = !1,
        unmountOnExit: o = !1,
        appear: s = !1,
        ...u
      },
      d
    ) => (
      (e = b(e, "offcanvas")),
      h.jsx(Ko, {
        ref: d,
        addEndListener: Qo,
        in: r,
        mountOnEnter: i,
        unmountOnExit: o,
        appear: s,
        ...u,
        childRef: n.ref,
        children: (p, y) =>
          v.cloneElement(n, {
            ...y,
            className: I(
              t,
              n.props.className,
              (p === nt || p === qr) && `${e}-toggling`,
              pw[p]
            ),
          }),
      })
    )
  );
gh.displayName = "OffcanvasToggling";
const hw = gh,
  vh = v.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        closeLabel: n = "Close",
        closeButton: r = !1,
        ...i
      },
      o
    ) => (
      (e = b(e, "offcanvas-header")),
      h.jsx(oh, {
        ref: o,
        ...i,
        className: I(t, e),
        closeLabel: n,
        closeButton: r,
      })
    )
  );
vh.displayName = "OffcanvasHeader";
const mw = vh,
  gw = Xo("h5"),
  yh = v.forwardRef(
    ({ className: e, bsPrefix: t, as: n = gw, ...r }, i) => (
      (t = b(t, "offcanvas-title")),
      h.jsx(n, { ref: i, className: I(e, t), ...r })
    )
  );
yh.displayName = "OffcanvasTitle";
const vw = yh;
function yw(e) {
  return h.jsx(hw, { ...e });
}
function ww(e) {
  return h.jsx(ba, { ...e });
}
const wh = v.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      children: n,
      "aria-labelledby": r,
      placement: i = "start",
      responsive: o,
      show: s = !1,
      backdrop: u = !0,
      keyboard: d = !0,
      scroll: p = !1,
      onEscapeKeyDown: y,
      onShow: w,
      onHide: c,
      container: C,
      autoFocus: x = !0,
      enforceFocus: E = !0,
      restoreFocus: m = !0,
      restoreFocusOptions: l,
      onEntered: a,
      onExit: f,
      onExiting: g,
      onEnter: N,
      onEntering: _,
      onExited: S,
      backdropClassName: k,
      manager: D,
      renderStaticNode: T = !1,
      ...z
    },
    U
  ) => {
    const q = v.useRef();
    e = b(e, "offcanvas");
    const { onToggle: B } = v.useContext(ar) || {},
      [W, J] = v.useState(!1),
      K = dw(o || "xs", "up");
    v.useEffect(() => {
      J(o ? s && !K : s);
    }, [s, o, K]);
    const j = ke(() => {
        B == null || B(), c == null || c();
      }),
      P = v.useMemo(() => ({ onHide: j }), [j]);
    function L() {
      return (
        D ||
        (p
          ? (q.current || (q.current = new Q0({ handleContainerOverflow: !1 })),
            q.current)
          : eh())
      );
    }
    const $ = (X, ...G) => {
        X && (X.style.visibility = "visible"), N == null || N(X, ...G);
      },
      V = (X, ...G) => {
        X && (X.style.visibility = ""), S == null || S(...G);
      },
      ne = v.useCallback(
        (X) => h.jsx("div", { ...X, className: I(`${e}-backdrop`, k) }),
        [k, e]
      ),
      te = (X) =>
        h.jsx("div", {
          ...X,
          ...z,
          className: I(t, o ? `${e}-${o}` : e, `${e}-${i}`),
          "aria-labelledby": r,
          children: n,
        });
    return h.jsxs(h.Fragment, {
      children: [
        !W && (o || T) && te({}),
        h.jsx(Ga.Provider, {
          value: P,
          children: h.jsx(Jp, {
            show: W,
            ref: U,
            backdrop: u,
            container: C,
            keyboard: d,
            autoFocus: x,
            enforceFocus: E && !p,
            restoreFocus: m,
            restoreFocusOptions: l,
            onEscapeKeyDown: y,
            onShow: w,
            onHide: j,
            onEnter: $,
            onEntering: _,
            onEntered: a,
            onExit: f,
            onExiting: g,
            onExited: V,
            manager: L(),
            transition: yw,
            backdropTransition: ww,
            renderBackdrop: ne,
            renderDialog: te,
          }),
        }),
      ],
    });
  }
);
wh.displayName = "Offcanvas";
const Nr = Object.assign(wh, { Body: fw, Header: mw, Title: vw }),
  xh = v.forwardRef((e, t) => {
    const n = v.useContext(ar);
    return h.jsx(Nr, {
      ref: t,
      show: !!(n != null && n.expanded),
      ...e,
      renderStaticNode: !0,
    });
  });
xh.displayName = "NavbarOffcanvas";
const xw = xh,
  Ch = v.forwardRef(
    ({ className: e, bsPrefix: t, as: n = "span", ...r }, i) => (
      (t = b(t, "navbar-text")), h.jsx(n, { ref: i, className: I(e, t), ...r })
    )
  );
Ch.displayName = "NavbarText";
const Cw = Ch,
  Eh = v.forwardRef((e, t) => {
    const {
        bsPrefix: n,
        expand: r = !0,
        variant: i = "light",
        bg: o,
        fixed: s,
        sticky: u,
        className: d,
        as: p = "nav",
        expanded: y,
        onToggle: w,
        onSelect: c,
        collapseOnSelect: C = !1,
        ...x
      } = Ia(e, { expanded: "onToggle" }),
      E = b(n, "navbar"),
      m = v.useCallback(
        (...f) => {
          c == null || c(...f), C && y && (w == null || w(!1));
        },
        [c, C, y, w]
      );
    x.role === void 0 && p !== "nav" && (x.role = "navigation");
    let l = `${E}-expand`;
    typeof r == "string" && (l = `${l}-${r}`);
    const a = v.useMemo(
      () => ({
        onToggle: () => (w == null ? void 0 : w(!y)),
        bsPrefix: E,
        expanded: !!y,
        expand: r,
      }),
      [E, y, r, w]
    );
    return h.jsx(ar.Provider, {
      value: a,
      children: h.jsx(_o.Provider, {
        value: m,
        children: h.jsx(p, {
          ref: t,
          ...x,
          className: I(
            d,
            E,
            r && l,
            i && `${E}-${i}`,
            o && `bg-${o}`,
            u && `sticky-${u}`,
            s && `fixed-${s}`
          ),
        }),
      }),
    });
  });
Eh.displayName = "Navbar";
const Qi = Object.assign(Eh, {
    Brand: sw,
    Collapse: lw,
    Offcanvas: xw,
    Text: Cw,
    Toggle: aw,
  }),
  _h = v.forwardRef(({ bsPrefix: e, className: t, as: n = "div", ...r }, i) => {
    const o = b(e, "row"),
      s = $a(),
      u = Ba(),
      d = `${o}-cols`,
      p = [];
    return (
      s.forEach((y) => {
        const w = r[y];
        delete r[y];
        let c;
        w != null && typeof w == "object" ? ({ cols: c } = w) : (c = w);
        const C = y !== u ? `-${y}` : "";
        c != null && p.push(`${d}${C}-${c}`);
      }),
      h.jsx(n, { ref: i, ...r, className: I(t, o, ...p) })
    );
  });
_h.displayName = "Row";
const Ya = _h;
function Ew(e, t = up, n = cp) {
  const r = [];
  return (
    Object.entries(e).forEach(([i, o]) => {
      o != null &&
        (typeof o == "object"
          ? t.forEach((s) => {
              const u = o[s];
              if (u != null) {
                const d = s !== n ? `-${s}` : "";
                r.push(`${i}${d}-${u}`);
              }
            })
          : r.push(`${i}-${o}`));
    }),
    r
  );
}
const Nh = v.forwardRef(
  (
    { as: e = "div", bsPrefix: t, className: n, direction: r, gap: i, ...o },
    s
  ) => {
    t = b(t, r === "horizontal" ? "hstack" : "vstack");
    const u = $a(),
      d = Ba();
    return h.jsx(e, {
      ...o,
      ref: s,
      className: I(n, t, ...Ew({ gap: i }, u, d)),
    });
  }
);
Nh.displayName = "Stack";
const Sh = Nh,
  _w = ({
    perfumeID: e,
    quantity: t,
    setTriggerEffect: n,
    triggerEffect: r,
  }) => {
    const { perfumes: i } = ai(),
      o = sr(),
      {
        removeFromCart: s,
        increaseQuantity: u,
        decreaseQuantity: d,
        itemQuantity: p,
      } = Wo(),
      [y, w] = v.useState(t);
    v.useEffect(() => {
      w(t);
    }, [t]);
    const c = i.find((m) => m._id === e);
    if (!c || !o) return null;
    const C = async () => {
        await u(e, o.username);
        const m = await p(e, o.username);
        w(m), n(!r);
      },
      x = async () => {
        await d(e, o.username);
        const m = await p(e, o.username);
        w(m), n(!r);
      },
      E = async () => {
        await s(c._id, o.username);
        const m = await p(e, o.username);
        w(m), n(!r);
      };
    return y > 0
      ? h.jsxs(Sh, {
          direction: "horizontal",
          gap: 2,
          className: "d-flex align-items-center",
          children: [
            h.jsx("img", {
              src: c.imgUrl,
              style: { width: "125px", height: "100px", objectFit: "cover" },
            }),
            h.jsxs("div", {
              className: "me-auto",
              children: [
                h.jsxs("div", {
                  children: [
                    c.name,
                    " ",
                    y > 1 &&
                      h.jsxs("span", {
                        className: "text-muted",
                        style: { fontSize: "0.9rem" },
                        children: ["x", y],
                      }),
                  ],
                }),
                h.jsx("div", {
                  className: "text-muted",
                  style: { fontSize: "0.75rem" },
                  children: Kn(c.price),
                }),
              ],
            }),
            h.jsxs("div", {
              style: { display: "flex", flexDirection: "column", gap: "1vh" },
              children: [
                h.jsxs("div", {
                  style: {
                    display: "flex",
                    gap: "0.5vw",
                    alignItems: "center",
                  },
                  children: [
                    h.jsx("div", { children: Kn(c.price * y) }),
                    h.jsx(xt, {
                      variant: "outline-danger",
                      size: "sm",
                      style: { height: "2rem" },
                      onClick: E,
                      children: "x",
                    }),
                  ],
                }),
                h.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "0.5vw",
                  },
                  children: [
                    h.jsx(xt, {
                      size: "sm",
                      style: { fontSize: "1vw" },
                      onClick: C,
                      children: "+",
                    }),
                    h.jsx(xt, {
                      size: "sm",
                      style: { fontSize: "1vw" },
                      onClick: x,
                      children: "-",
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      : null;
  },
  Nw = ({ isOpen: e }) => {
    const {
        closeCart: t,
        cartItems: n,
        increaseQuantity: r,
        decreaseQuantity: i,
        removeFromCart: o,
      } = Wo(),
      [s, u] = v.useState([]),
      [d, p] = v.useState(!1),
      { perfumes: y } = ai(),
      w = sr();
    v.useEffect(() => {
      (async () => {
        if (w) {
          const x = await n(w.username);
          u(x);
        } else u([]);
      })();
    }, [w, n, d, r, i, o]);
    const c = () => {
      let C = `Cart Details:
`;
      s == null ||
        s.forEach((m) => {
          const l = y.find((a) => a._id === m.perfumeID);
          l &&
            (C += `${l.name}: ${m.quantity} x ${Kn(l.price)}
`);
        });
      const x =
        s == null
          ? void 0
          : s.reduce((m, l) => {
              const a = y.find((f) => f._id === l.perfumeID);
              return m + ((a == null ? void 0 : a.price) || 0) * l.quantity;
            }, 0);
      s &&
        (C += `
Total: ${Kn(x)}`);
      const E = `https://api.whatsapp.com/send?phone=17789176729&text=${encodeURIComponent(
        C
      )}`;
      window.open(E, "_blank");
    };
    return h.jsxs(Nr, {
      show: e,
      onHide: t,
      placement: "end",
      children: [
        h.jsx(Nr.Header, {
          closeButton: !0,
          children: h.jsx(Nr.Title, { children: "Cart" }),
        }),
        h.jsx(Nr.Body, {
          children: h.jsxs(Sh, {
            gap: 3,
            children: [
              s == null
                ? void 0
                : s.map((C) =>
                    h.jsx(
                      _w,
                      { ...C, triggerEffect: d, setTriggerEffect: p },
                      C.perfumeID
                    )
                  ),
              h.jsxs("div", {
                className: "ms-auto fw-bold fs-5",
                children: [
                  "Total ",
                  " ",
                  Kn(
                    s.reduce((C, x) => {
                      const E = y.find((m) => m._id === x.perfumeID);
                      return (
                        C + ((E == null ? void 0 : E.price) || 0) * x.quantity
                      );
                    }, 0)
                  ),
                ],
              }),
              h.jsx(xt, {
                variant: "primary",
                onClick: c,
                children: "Send WhatsApp Message",
              }),
            ],
          }),
        }),
      ],
    });
  };
function Sw({ children: e }) {
  const [t, n] = v.useState(!1),
    r = sr(),
    i = async (x) => {
      if (!x) return console.log("User not found"), 0;
      try {
        const E = await fetch(
          `https://shopping-cart-production-4ea1.up.railway.app/cart/totalQuantity/${x}`
        );
        if (!E.ok)
          throw new Error("Failed to fetch total quantity from server");
        return await E.json();
      } catch (E) {
        return console.log("Error fetching total quantity", E), 0;
      }
    },
    [o, s] = v.useState(0);
  v.useEffect(() => {
    (async () => {
      if (r)
        try {
          const E = await i(r.username);
          s(E);
        } catch (E) {
          console.error("Error fetching quantity cart", E);
        }
    })();
  }, [r]);
  const u = () => n(!0),
    d = () => n(!1),
    p = async (x) => {
      try {
        if (!x) return console.log("User not found"), [];
        const E = await fetch(
          `https://shopping-cart-production-4ea1.up.railway.app/cart/${x}`
        );
        if (!E.ok) throw new Error("Failed to fetch cart from server");
        return await E.json();
      } catch (E) {
        throw (console.log("Error fetching cart items", E), E);
      }
    },
    y = async (x, E) => {
      try {
        if (!E) return console.log("User not found"), 0;
        const m = await fetch(
          `https://shopping-cart-production-4ea1.up.railway.app/cart/itemQuantity/${E}/${x}`
        );
        if (!m.ok) throw new Error("Failed to fetch item quantity from server");
        return (await m.json()).totalQuantity;
      } catch (m) {
        return console.log("Error fetching item quantity", m), 0;
      }
    },
    w = async (x, E) => {
      try {
        if (!E) {
          console.log("User not found");
          return;
        }
        const m = await fetch(
          `https://shopping-cart-production-4ea1.up.railway.app/cart/increase/${x}/${E}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!m.ok) throw new Error("Failed to increase quantity on server");
        const l = await m.json();
        return s((a) => a + l), o;
      } catch (m) {
        console.log("Error increasing quantity", m);
      }
    },
    c = async (x, E) => {
      try {
        if (!E) {
          console.log("User not found");
          return;
        }
        const m = await fetch(
          `https://shopping-cart-production-4ea1.up.railway.app/cart/decrease/${x}/${E}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!m.ok) throw new Error("Failed to decrease quantity on server");
        const l = await m.json();
        return s((a) => a - l), o;
      } catch (m) {
        console.log("Error decreasing quantity", m);
      }
    },
    C = async (x, E) => {
      try {
        if (!E) {
          console.log("User not found");
          return;
        }
        const m = await fetch(
          `https://shopping-cart-production-4ea1.up.railway.app/cart/delete/${x}/${E}`,
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (!m.ok) throw new Error("Failed to remove item from cart on server");
        const l = await m.json();
        return s((a) => a - l), o;
      } catch (m) {
        console.log("Error removing item from cart", m);
      }
    };
  return h.jsxs(ip.Provider, {
    value: {
      itemQuantity: y,
      increaseQuantity: w,
      decreaseQuantity: c,
      removeFromCart: C,
      openCart: u,
      closeCart: d,
      cartItems: p,
      quantity: o,
    },
    children: [e, h.jsx(Nw, { isOpen: t })],
  });
}
function kw({ children: e }) {
  const [t, n] = v.useState([]),
    [r, i] = v.useState(!1);
  return (
    v.useEffect(() => {
      (async () => {
        i(!0);
        try {
          const s = await fetch(
            "https://shopping-cart-production-4ea1.up.railway.app/perfumes/"
          );
          if (!s.ok) throw new Error("Failed to fetch perfums from the server");
          const u = await s.json();
          n(u.data);
        } catch (s) {
          console.error("Error fetching store items:", s);
        } finally {
          i(!1);
        }
      })();
    }, []),
    h.jsx(op.Provider, { value: { perfumes: t, loading: r }, children: e })
  );
}
function jw({ children: e }) {
  const [t, n] = v.useState(void 0);
  return (
    v.useEffect(() => {
      (() => {
        fetch(
          "https://shopping-cart-production-4ea1.up.railway.app/auth/login/success",
          {
            method: "GET",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
          .then((i) => {
            if (i.status === 200) return i.json();
            throw new Error("Authentication has failed!");
          })
          .then((i) => {
            n(i.user);
            const o = i.token;
            localStorage.setItem("jwtToken", o);
          })
          .catch((i) => {
            console.log(i);
          });
      })();
    }, []),
    h.jsx(sp.Provider, { value: t, children: e })
  );
}
const Rw = [
    {
      id: 1,
      name: "Daisy Eau So Intense Eau de Parfum",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      price: 28,
      imgUrl:
        "https://cdn.media.amplience.net/i/Marc_Jacobs/MJI_3616301776017_000_F8F8F8_1-1_ALT1?fmt=auto&sm=aspect&aspect=3:3.4&w=1592&qlt=68&img404=NOIMAGEMEDIUM_1-1&unsharp=0%2C1%2C1%2C20",
    },
    {
      id: 2,
      name: "Good Girl Line by Carolina Herrera",
      description:
        "Un aroma sofisticado y delicioso. Representa totalmente una colonia Italiana, con acordes cítricos, amaderados y de tabaco ligeramente dulce. Perfecta como fragancia firma.",
      price: 28,
      imgUrl:
        "https://ifragranceofficial.com/wp-content/uploads/2023/05/the-original-good-girl-carolina-herrera.jpg",
    },
    {
      id: 3,
      name: "SAUVAGE DIOR",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      price: 28,
      imgUrl:
        "https://thedrum-media.imgix.net/thedrum-prod/s3/news/tmp/77017/maxresdefault_55.jpg?w=1280&ar=default&fit=crop&crop=faces,edges&auto=format",
    },
    {
      id: 4,
      name: " Mayar Perfume / Eau De Perfume",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      price: 28,
      imgUrl: "https://pbs.twimg.com/media/F5v2ON4WMAALroo.jpg",
    },
    {
      id: 5,
      name: "La vida es Bella / La vie est belle de Lancôme",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      price: 28,
      imgUrl:
        "https://i.pinimg.com/originals/00/f7/8b/00f78ba07ebfe556afc202314bae3457.jpg",
    },
    {
      id: 6,
      name: "VALENTINO UOMO INTENSE",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      price: 28,
      imgUrl:
        "https://lajolieperfumes.com/wp-content/uploads/2022/08/Valentino-Uomo-Intense-EDP-100ml-la-jolie-perfumes-03.jpg",
    },
    {
      id: 7,
      name: "Calvin Klein Eternity For Men Eau De Toilette",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      price: 28,
      imgUrl:
        "https://http2.mlstatic.com/D_NQ_NP_832162-MLM51361545805_082022-O.webp",
    },
  ],
  Tw = ({ name: e, imgUrl: t }) =>
    h.jsxs("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      children: [
        h.jsx("img", { src: t, style: { maxWidth: "640px", height: "419px" } }),
        h.jsx(Fl.Caption, {
          style: { fontSize: "1rem", backgroundColor: "rgba(0, 0, 0, 0.4)" },
          children: h.jsx("h3", { children: e }),
        }),
      ],
    });
function Ow() {
  return h.jsx(Fl, {
    nextIcon: h.jsx("span", {
      style: {
        color: "black",
        backgroundColor: "transparent",
        fontSize: "2rem",
      },
      children: h.jsx("i", { className: "bi bi-arrow-right-circle-fill" }),
    }),
    prevIcon: h.jsx("span", {
      style: {
        color: "black",
        backgroundColor: "transparent",
        fontSize: "2rem",
      },
      children: h.jsx("i", { className: "bi bi-arrow-left-circle-fill" }),
    }),
    children: Rw.map((e) =>
      h.jsx(
        Fl.Item,
        {
          children: h.jsx("div", {
            children: h.jsx("div", {
              children: h.jsx(Tw, {
                id: e.id,
                name: e.name,
                description: e.description,
                price: e.price,
                imgUrl: e.imgUrl,
              }),
            }),
          }),
        },
        e.id
      )
    ),
  });
}
const Mw = () =>
  h.jsx("div", {
    className: "col-sm-12 my-3",
    style: {
      backgroundColor: "black",
      color: "white",
      fontSize: "18px",
      textAlign: "center",
      padding: "1rem",
      margin: "5px",
      display: "inline",
    },
    children: "PERFUMES 100% ORIGINALES - ENVIO GRATIS - LOS MEJORES PRECIOS",
  });
var kh = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r(v);
  })(Dh, function (n) {
    var r = "default" in n ? n.default : n;
    /*! *****************************************************************************
	    Copyright (c) Microsoft Corporation. All rights reserved.
	    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	    this file except in compliance with the License. You may obtain a copy of the
	    License at http://www.apache.org/licenses/LICENSE-2.0

	    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	    MERCHANTABLITY OR NON-INFRINGEMENT.

	    See the Apache Version 2.0 License for specific language governing permissions
	    and limitations under the License.
	    ***************************************************************************** */ var i =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (c, C) {
          c.__proto__ = C;
        }) ||
      function (c, C) {
        for (var x in C) C.hasOwnProperty(x) && (c[x] = C[x]);
      };
    function o(c, C) {
      i(c, C);
      function x() {
        this.constructor = c;
      }
      c.prototype =
        C === null ? Object.create(C) : ((x.prototype = C.prototype), new x());
    }
    var s =
      Object.assign ||
      function (C) {
        for (var x, E = 1, m = arguments.length; E < m; E++) {
          x = arguments[E];
          for (var l in x)
            Object.prototype.hasOwnProperty.call(x, l) && (C[l] = x[l]);
        }
        return C;
      };
    function u(c, C) {
      var x = {};
      for (var E in c)
        Object.prototype.hasOwnProperty.call(c, E) &&
          C.indexOf(E) < 0 &&
          (x[E] = c[E]);
      if (c != null && typeof Object.getOwnPropertySymbols == "function")
        for (var m = 0, E = Object.getOwnPropertySymbols(c); m < E.length; m++)
          C.indexOf(E[m]) < 0 && (x[E[m]] = c[E[m]]);
      return x;
    }
    (function (c, C, x, E) {
      function m(l, a) {
        (this.settings = null),
          (this.options = c.extend({}, m.Defaults, a)),
          (this.$element = c(l)),
          (this._handlers = {}),
          (this._plugins = {}),
          (this._supress = {}),
          (this._current = null),
          (this._speed = null),
          (this._coordinates = []),
          (this._breakpoint = null),
          (this._width = null),
          (this._items = []),
          (this._clones = []),
          (this._mergers = []),
          (this._widths = []),
          (this._invalidated = {}),
          (this._pipe = []),
          (this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: { start: null, current: null },
            direction: null,
          }),
          (this._states = {
            current: {},
            tags: {
              initializing: ["busy"],
              animating: ["busy"],
              dragging: ["interacting"],
            },
          }),
          c.each(
            ["onResize", "onThrottledResize"],
            c.proxy(function (f, g) {
              this._handlers[g] = c.proxy(this[g], this);
            }, this)
          ),
          c.each(
            m.Plugins,
            c.proxy(function (f, g) {
              this._plugins[f.charAt(0).toLowerCase() + f.slice(1)] = new g(
                this
              );
            }, this)
          ),
          c.each(
            m.Workers,
            c.proxy(function (f, g) {
              this._pipe.push({ filter: g.filter, run: c.proxy(g.run, this) });
            }, this)
          ),
          this.setup(),
          this.initialize();
      }
      (m.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: C,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab",
      }),
        (m.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
        (m.Type = { Event: "event", State: "state" }),
        (m.Plugins = {}),
        (m.Workers = [
          {
            filter: ["width", "settings"],
            run: function () {
              this._width = this.$element.width();
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function (l) {
              l.current =
                this._items && this._items[this.relative(this._current)];
            },
          },
          {
            filter: ["items", "settings"],
            run: function () {
              this.$stage.children(".cloned").remove();
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function (l) {
              var a = this.settings.margin || "",
                f = !this.settings.autoWidth,
                g = this.settings.rtl,
                N = {
                  width: "auto",
                  "margin-left": g ? a : "",
                  "margin-right": g ? "" : a,
                };
              !f && this.$stage.children().css(N), (l.css = N);
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function (l) {
              var a =
                  (this.width() / this.settings.items).toFixed(3) -
                  this.settings.margin,
                f = null,
                g = this._items.length,
                N = !this.settings.autoWidth,
                _ = [];
              for (l.items = { merge: !1, width: a }; g--; )
                (f = this._mergers[g]),
                  (f =
                    (this.settings.mergeFit &&
                      Math.min(f, this.settings.items)) ||
                    f),
                  (l.items.merge = f > 1 || l.items.merge),
                  (_[g] = N ? a * f : this._items[g].width());
              this._widths = _;
            },
          },
          {
            filter: ["items", "settings"],
            run: function () {
              var l = [],
                a = this._items,
                f = this.settings,
                g = Math.max(f.items * 2, 4),
                N = Math.ceil(a.length / 2) * 2,
                _ = f.loop && a.length ? (f.rewind ? g : Math.max(g, N)) : 0,
                S = "",
                k = "";
              for (_ /= 2; _ > 0; )
                l.push(this.normalize(l.length / 2, !0)),
                  (S = S + a[l[l.length - 1]][0].outerHTML),
                  l.push(this.normalize(a.length - 1 - (l.length - 1) / 2, !0)),
                  (k = a[l[l.length - 1]][0].outerHTML + k),
                  (_ -= 1);
              (this._clones = l),
                c(S).addClass("cloned").appendTo(this.$stage),
                c(k).addClass("cloned").prependTo(this.$stage);
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function () {
              for (
                var l = this.settings.rtl ? 1 : -1,
                  a = this._clones.length + this._items.length,
                  f = -1,
                  g = 0,
                  N = 0,
                  _ = [];
                ++f < a;

              )
                (g = _[f - 1] || 0),
                  (N = this._widths[this.relative(f)] + this.settings.margin),
                  _.push(g + N * l);
              this._coordinates = _;
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function () {
              var l = this.settings.stagePadding,
                a = this._coordinates,
                f = {
                  width: Math.ceil(Math.abs(a[a.length - 1])) + l * 2,
                  "padding-left": l || "",
                  "padding-right": l || "",
                };
              this.$stage.css(f);
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function (l) {
              var a = this._coordinates.length,
                f = !this.settings.autoWidth,
                g = this.$stage.children();
              if (f && l.items.merge)
                for (; a--; )
                  (l.css.width = this._widths[this.relative(a)]),
                    g.eq(a).css(l.css);
              else f && ((l.css.width = l.items.width), g.css(l.css));
            },
          },
          {
            filter: ["items"],
            run: function () {
              this._coordinates.length < 1 && this.$stage.removeAttr("style");
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function (l) {
              (l.current = l.current
                ? this.$stage.children().index(l.current)
                : 0),
                (l.current = Math.max(
                  this.minimum(),
                  Math.min(this.maximum(), l.current)
                )),
                this.reset(l.current);
            },
          },
          {
            filter: ["position"],
            run: function () {
              this.animate(this.coordinates(this._current));
            },
          },
          {
            filter: ["width", "position", "items", "settings"],
            run: function () {
              var l = this.settings.rtl ? 1 : -1,
                a = this.settings.stagePadding * 2,
                f = this.coordinates(this.current()) + a,
                g = f + this.width() * l,
                N,
                _,
                S = [],
                k,
                D;
              for (k = 0, D = this._coordinates.length; k < D; k++)
                (N = this._coordinates[k - 1] || 0),
                  (_ = Math.abs(this._coordinates[k]) + a * l),
                  ((this.op(N, "<=", f) && this.op(N, ">", g)) ||
                    (this.op(_, "<", f) && this.op(_, ">", g))) &&
                    S.push(k);
              this.$stage.children(".active").removeClass("active"),
                this.$stage
                  .children(":eq(" + S.join("), :eq(") + ")")
                  .addClass("active"),
                this.$stage.children(".center").removeClass("center"),
                this.settings.center &&
                  this.$stage.children().eq(this.current()).addClass("center");
            },
          },
        ]),
        (m.prototype.initializeStage = function () {
          (this.$stage = this.$element.find("." + this.settings.stageClass)),
            !this.$stage.length &&
              (this.$element.addClass(this.options.loadingClass),
              (this.$stage = c("<" + this.settings.stageElement + ">", {
                class: this.settings.stageClass,
              }).wrap(c("<div/>", { class: this.settings.stageOuterClass }))),
              this.$element.append(this.$stage.parent()));
        }),
        (m.prototype.initializeItems = function () {
          var l = this.$element.find(".owl-item");
          if (l.length) {
            (this._items = l.get().map(function (a) {
              return c(a);
            })),
              (this._mergers = this._items.map(function () {
                return 1;
              })),
              this.refresh();
            return;
          }
          this.replace(this.$element.children().not(this.$stage.parent())),
            this.isVisible() ? this.refresh() : this.invalidate("width"),
            this.$element
              .removeClass(this.options.loadingClass)
              .addClass(this.options.loadedClass);
        }),
        (m.prototype.initialize = function () {
          if (
            (this.enter("initializing"),
            this.trigger("initialize"),
            this.$element.toggleClass(
              this.settings.rtlClass,
              this.settings.rtl
            ),
            this.settings.autoWidth && !this.is("pre-loading"))
          ) {
            var l, a, f;
            (l = this.$element.find("img")),
              (a = this.settings.nestedItemSelector
                ? "." + this.settings.nestedItemSelector
                : E),
              (f = this.$element.children(a).width()),
              l.length && f <= 0 && this.preloadAutoWidthImages(l);
          }
          this.initializeStage(),
            this.initializeItems(),
            this.registerEventHandlers(),
            this.leave("initializing"),
            this.trigger("initialized");
        }),
        (m.prototype.isVisible = function () {
          return this.settings.checkVisibility
            ? this.$element.is(":visible")
            : !0;
        }),
        (m.prototype.setup = function () {
          var l = this.viewport(),
            a = this.options.responsive,
            f = -1,
            g = null;
          a
            ? (c.each(a, function (N) {
                N <= l && N > f && (f = Number(N));
              }),
              (g = c.extend({}, this.options, a[f])),
              typeof g.stagePadding == "function" &&
                (g.stagePadding = g.stagePadding()),
              delete g.responsive,
              g.responsiveClass &&
                this.$element.attr(
                  "class",
                  this.$element
                    .attr("class")
                    .replace(
                      new RegExp(
                        "(" + this.options.responsiveClass + "-)\\S+\\s",
                        "g"
                      ),
                      "$1" + f
                    )
                ))
            : (g = c.extend({}, this.options)),
            this.trigger("change", {
              property: { name: "settings", value: g },
            }),
            (this._breakpoint = f),
            (this.settings = g),
            this.invalidate("settings"),
            this.trigger("changed", {
              property: { name: "settings", value: this.settings },
            });
        }),
        (m.prototype.optionsLogic = function () {
          this.settings.autoWidth &&
            ((this.settings.stagePadding = !1), (this.settings.merge = !1));
        }),
        (m.prototype.prepare = function (l) {
          var a = this.trigger("prepare", { content: l });
          return (
            a.data ||
              (a.data = c("<" + this.settings.itemElement + "/>")
                .addClass(this.options.itemClass)
                .append(l)),
            this.trigger("prepared", { content: a.data }),
            a.data
          );
        }),
        (m.prototype.update = function () {
          for (
            var l = 0,
              a = this._pipe.length,
              f = c.proxy(function (N) {
                return this[N];
              }, this._invalidated),
              g = {};
            l < a;

          )
            (this._invalidated.all ||
              c.grep(this._pipe[l].filter, f).length > 0) &&
              this._pipe[l].run(g),
              l++;
          (this._invalidated = {}), !this.is("valid") && this.enter("valid");
        }),
        (m.prototype.width = function (l) {
          switch (((l = l || m.Width.Default), l)) {
            case m.Width.Inner:
            case m.Width.Outer:
              return this._width;
            default:
              return (
                this._width -
                this.settings.stagePadding * 2 +
                this.settings.margin
              );
          }
        }),
        (m.prototype.refresh = function () {
          this.enter("refreshing"),
            this.trigger("refresh"),
            this.setup(),
            this.optionsLogic(),
            this.$element.addClass(this.options.refreshClass),
            this.update(),
            this.$element.removeClass(this.options.refreshClass),
            this.leave("refreshing"),
            this.trigger("refreshed");
        }),
        (m.prototype.onThrottledResize = function () {
          C.clearTimeout(this.resizeTimer),
            (this.resizeTimer = C.setTimeout(
              this._handlers.onResize,
              this.settings.responsiveRefreshRate
            ));
        }),
        (m.prototype.onResize = function () {
          if (
            !this._items.length ||
            this._width === this.$element.width() ||
            !this.isVisible()
          )
            return !1;
          if (
            (this.enter("resizing"),
            this.trigger("resize").isDefaultPrevented())
          )
            return this.leave("resizing"), !1;
          this.invalidate("width"),
            this.refresh(),
            this.leave("resizing"),
            this.trigger("resized");
        }),
        (m.prototype.registerEventHandlers = function () {
          c.support.transition &&
            this.$stage.on(
              c.support.transition.end + ".owl.core",
              c.proxy(this.onTransitionEnd, this)
            ),
            this.settings.responsive !== !1 &&
              this.on(C, "resize", this._handlers.onThrottledResize),
            this.settings.mouseDrag &&
              (this.$element.addClass(this.options.dragClass),
              this.$stage.on(
                "mousedown.owl.core",
                c.proxy(this.onDragStart, this)
              ),
              this.$stage.on(
                "dragstart.owl.core selectstart.owl.core",
                function () {
                  return !1;
                }
              )),
            this.settings.touchDrag &&
              (this.$stage.on(
                "touchstart.owl.core",
                c.proxy(this.onDragStart, this)
              ),
              this.$stage.on(
                "touchcancel.owl.core",
                c.proxy(this.onDragEnd, this)
              ));
        }),
        (m.prototype.onDragStart = function (l) {
          var a = null;
          l.which !== 3 &&
            (c.support.transform
              ? ((a = this.$stage
                  .css("transform")
                  .replace(/.*\(|\)| /g, "")
                  .split(",")),
                (a = {
                  x: a[a.length === 16 ? 12 : 4],
                  y: a[a.length === 16 ? 13 : 5],
                }))
              : ((a = this.$stage.position()),
                (a = {
                  x: this.settings.rtl
                    ? a.left +
                      this.$stage.width() -
                      this.width() +
                      this.settings.margin
                    : a.left,
                  y: a.top,
                })),
            this.is("animating") &&
              (c.support.transform ? this.animate(a.x) : this.$stage.stop(),
              this.invalidate("position")),
            this.$element.toggleClass(
              this.options.grabClass,
              l.type === "mousedown"
            ),
            this.speed(0),
            (this._drag.time = new Date().getTime()),
            (this._drag.target = c(l.target)),
            (this._drag.stage.start = a),
            (this._drag.stage.current = a),
            (this._drag.pointer = this.pointer(l)),
            c(x).on(
              "mouseup.owl.core touchend.owl.core",
              c.proxy(this.onDragEnd, this)
            ),
            c(x).one(
              "mousemove.owl.core touchmove.owl.core",
              c.proxy(function (f) {
                var g = this.difference(this._drag.pointer, this.pointer(f));
                c(x).on(
                  "mousemove.owl.core touchmove.owl.core",
                  c.proxy(this.onDragMove, this)
                ),
                  !(Math.abs(g.x) < Math.abs(g.y) && this.is("valid")) &&
                    (f.preventDefault(),
                    this.enter("dragging"),
                    this.trigger("drag"));
              }, this)
            ));
        }),
        (m.prototype.onDragMove = function (l) {
          var a = null,
            f = null,
            g = null,
            N = this.difference(this._drag.pointer, this.pointer(l)),
            _ = this.difference(this._drag.stage.start, N);
          this.is("dragging") &&
            (l.preventDefault(),
            this.settings.loop
              ? ((a = this.coordinates(this.minimum())),
                (f = this.coordinates(this.maximum() + 1) - a),
                (_.x = ((((_.x - a) % f) + f) % f) + a))
              : ((a = this.settings.rtl
                  ? this.coordinates(this.maximum())
                  : this.coordinates(this.minimum())),
                (f = this.settings.rtl
                  ? this.coordinates(this.minimum())
                  : this.coordinates(this.maximum())),
                (g = this.settings.pullDrag ? (-1 * N.x) / 5 : 0),
                (_.x = Math.max(Math.min(_.x, a + g), f + g))),
            (this._drag.stage.current = _),
            this.animate(_.x));
        }),
        (m.prototype.onDragEnd = function (l) {
          var a = this.difference(this._drag.pointer, this.pointer(l)),
            f = this._drag.stage.current,
            g = (a.x > 0) ^ this.settings.rtl ? "left" : "right";
          c(x).off(".owl.core"),
            this.$element.removeClass(this.options.grabClass),
            ((a.x !== 0 && this.is("dragging")) || !this.is("valid")) &&
              (this.speed(
                this.settings.dragEndSpeed || this.settings.smartSpeed
              ),
              this.current(
                this.closest(f.x, a.x !== 0 ? g : this._drag.direction)
              ),
              this.invalidate("position"),
              this.update(),
              (this._drag.direction = g),
              (Math.abs(a.x) > 3 ||
                new Date().getTime() - this._drag.time > 300) &&
                this._drag.target.one("click.owl.core", function () {
                  return !1;
                })),
            this.is("dragging") &&
              (this.leave("dragging"), this.trigger("dragged"));
        }),
        (m.prototype.closest = function (l, a) {
          var f = -1,
            g = 30,
            N = this.width(),
            _ = this.coordinates();
          return (
            this.settings.freeDrag ||
              c.each(
                _,
                c.proxy(function (S, k) {
                  return (
                    a === "left" && l > k - g && l < k + g
                      ? (f = S)
                      : a === "right" && l > k - N - g && l < k - N + g
                      ? (f = S + 1)
                      : this.op(l, "<", k) &&
                        this.op(l, ">", _[S + 1] !== E ? _[S + 1] : k - N) &&
                        (f = a === "left" ? S + 1 : S),
                    f === -1
                  );
                }, this)
              ),
            this.settings.loop ||
              (this.op(l, ">", _[this.minimum()])
                ? (f = l = this.minimum())
                : this.op(l, "<", _[this.maximum()]) &&
                  (f = l = this.maximum())),
            f
          );
        }),
        (m.prototype.animate = function (l) {
          var a = this.speed() > 0;
          this.is("animating") && this.onTransitionEnd(),
            a && (this.enter("animating"), this.trigger("translate")),
            c.support.transform3d && c.support.transition
              ? this.$stage.css({
                  transform: "translate3d(" + l + "px,0px,0px)",
                  transition:
                    this.speed() / 1e3 +
                    "s" +
                    (this.settings.slideTransition
                      ? " " + this.settings.slideTransition
                      : ""),
                })
              : a
              ? this.$stage.animate(
                  { left: l + "px" },
                  this.speed(),
                  this.settings.fallbackEasing,
                  c.proxy(this.onTransitionEnd, this)
                )
              : this.$stage.css({ left: l + "px" });
        }),
        (m.prototype.is = function (l) {
          return this._states.current[l] && this._states.current[l] > 0;
        }),
        (m.prototype.current = function (l) {
          if (l === E) return this._current;
          if (this._items.length === 0) return E;
          if (((l = this.normalize(l)), this._current !== l)) {
            var a = this.trigger("change", {
              property: { name: "position", value: l },
            });
            a.data !== E && (l = this.normalize(a.data)),
              (this._current = l),
              this.invalidate("position"),
              this.trigger("changed", {
                property: { name: "position", value: this._current },
              });
          }
          return this._current;
        }),
        (m.prototype.invalidate = function (l) {
          return (
            c.type(l) === "string" &&
              ((this._invalidated[l] = !0),
              this.is("valid") && this.leave("valid")),
            c.map(this._invalidated, function (a, f) {
              return f;
            })
          );
        }),
        (m.prototype.reset = function (l) {
          (l = this.normalize(l)),
            l !== E &&
              ((this._speed = 0),
              (this._current = l),
              this.suppress(["translate", "translated"]),
              this.animate(this.coordinates(l)),
              this.release(["translate", "translated"]));
        }),
        (m.prototype.normalize = function (l, a) {
          var f = this._items.length,
            g = a ? 0 : this._clones.length;
          return (
            !this.isNumeric(l) || f < 1
              ? (l = E)
              : (l < 0 || l >= f + g) &&
                (l = ((((l - g / 2) % f) + f) % f) + g / 2),
            l
          );
        }),
        (m.prototype.relative = function (l) {
          return (l -= this._clones.length / 2), this.normalize(l, !0);
        }),
        (m.prototype.maximum = function (l) {
          var a = this.settings,
            f = this._coordinates.length,
            g,
            N,
            _;
          if (a.loop) f = this._clones.length / 2 + this._items.length - 1;
          else if (a.autoWidth || a.merge) {
            if (((g = this._items.length), g))
              for (
                N = this._items[--g].width(), _ = this.$element.width();
                g-- &&
                ((N += this._items[g].width() + this.settings.margin),
                !(N > _));

              );
            f = g + 1;
          } else
            a.center
              ? (f = this._items.length - 1)
              : (f = this._items.length - a.items);
          return l && (f -= this._clones.length / 2), Math.max(f, 0);
        }),
        (m.prototype.minimum = function (l) {
          return l ? 0 : this._clones.length / 2;
        }),
        (m.prototype.items = function (l) {
          return l === E
            ? this._items.slice()
            : ((l = this.normalize(l, !0)), this._items[l]);
        }),
        (m.prototype.mergers = function (l) {
          return l === E
            ? this._mergers.slice()
            : ((l = this.normalize(l, !0)), this._mergers[l]);
        }),
        (m.prototype.clones = function (l) {
          var a = this._clones.length / 2,
            f = a + this._items.length,
            g = function (N) {
              return N % 2 === 0 ? f + N / 2 : a - (N + 1) / 2;
            };
          return l === E
            ? c.map(this._clones, function (N, _) {
                return g(_);
              })
            : c.map(this._clones, function (N, _) {
                return N === l ? g(_) : null;
              });
        }),
        (m.prototype.speed = function (l) {
          return l !== E && (this._speed = l), this._speed;
        }),
        (m.prototype.coordinates = function (l) {
          var a = 1,
            f = l - 1,
            g;
          return l === E
            ? c.map(
                this._coordinates,
                c.proxy(function (N, _) {
                  return this.coordinates(_);
                }, this)
              )
            : (this.settings.center
                ? (this.settings.rtl && ((a = -1), (f = l + 1)),
                  (g = this._coordinates[l]),
                  (g +=
                    ((this.width() - g + (this._coordinates[f] || 0)) / 2) * a))
                : (g = this._coordinates[f] || 0),
              (g = Math.ceil(g)),
              g);
        }),
        (m.prototype.duration = function (l, a, f) {
          return f === 0
            ? 0
            : Math.min(Math.max(Math.abs(a - l), 1), 6) *
                Math.abs(f || this.settings.smartSpeed);
        }),
        (m.prototype.to = function (l, a) {
          var f = this.current(),
            g = null,
            N = l - this.relative(f),
            _ = (N > 0) - (N < 0),
            S = this._items.length,
            k = this.minimum(),
            D = this.maximum();
          this.settings.loop
            ? (!this.settings.rewind &&
                Math.abs(N) > S / 2 &&
                (N += _ * -1 * S),
              (l = f + N),
              (g = ((((l - k) % S) + S) % S) + k),
              g !== l &&
                g - N <= D &&
                g - N > 0 &&
                ((f = g - N), (l = g), this.reset(f)))
            : this.settings.rewind
            ? ((D += 1), (l = ((l % D) + D) % D))
            : (l = Math.max(k, Math.min(D, l))),
            this.speed(this.duration(f, l, a)),
            this.current(l),
            this.isVisible() && this.update();
        }),
        (m.prototype.next = function (l) {
          (l = l || !1), this.to(this.relative(this.current()) + 1, l);
        }),
        (m.prototype.prev = function (l) {
          (l = l || !1), this.to(this.relative(this.current()) - 1, l);
        }),
        (m.prototype.onTransitionEnd = function (l) {
          if (
            l !== E &&
            (l.stopPropagation(),
            (l.target || l.srcElement || l.originalTarget) !==
              this.$stage.get(0))
          )
            return !1;
          this.leave("animating"), this.trigger("translated");
        }),
        (m.prototype.viewport = function () {
          var l;
          return (
            this.options.responsiveBaseElement !== C
              ? (l = c(this.options.responsiveBaseElement).width())
              : C.innerWidth
              ? (l = C.innerWidth)
              : x.documentElement && x.documentElement.clientWidth
              ? (l = x.documentElement.clientWidth)
              : console.warn("Can not detect viewport width."),
            l
          );
        }),
        (m.prototype.replace = function (l) {
          this.$stage.empty(),
            (this._items = []),
            l && (l = l instanceof jQuery ? l : c(l)),
            this.settings.nestedItemSelector &&
              (l = l.find("." + this.settings.nestedItemSelector)),
            l
              .filter(function () {
                return this.nodeType === 1;
              })
              .each(
                c.proxy(function (a, f) {
                  (f = this.prepare(f)),
                    this.$stage.append(f),
                    this._items.push(f),
                    this._mergers.push(
                      f
                        .find("[data-merge]")
                        .addBack("[data-merge]")
                        .attr("data-merge") * 1 || 1
                    );
                }, this)
              ),
            this.reset(
              this.isNumeric(this.settings.startPosition)
                ? this.settings.startPosition
                : 0
            ),
            this.invalidate("items");
        }),
        (m.prototype.add = function (l, a) {
          var f = this.relative(this._current);
          (a = a === E ? this._items.length : this.normalize(a, !0)),
            (l = l instanceof jQuery ? l : c(l)),
            this.trigger("add", { content: l, position: a }),
            (l = this.prepare(l)),
            this._items.length === 0 || a === this._items.length
              ? (this._items.length === 0 && this.$stage.append(l),
                this._items.length !== 0 && this._items[a - 1].after(l),
                this._items.push(l),
                this._mergers.push(
                  l
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") * 1 || 1
                ))
              : (this._items[a].before(l),
                this._items.splice(a, 0, l),
                this._mergers.splice(
                  a,
                  0,
                  l
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") * 1 || 1
                )),
            this._items[f] && this.reset(this._items[f].index()),
            this.invalidate("items"),
            this.trigger("added", { content: l, position: a });
        }),
        (m.prototype.remove = function (l) {
          (l = this.normalize(l, !0)),
            l !== E &&
              (this.trigger("remove", { content: this._items[l], position: l }),
              this._items[l].remove(),
              this._items.splice(l, 1),
              this._mergers.splice(l, 1),
              this.invalidate("items"),
              this.trigger("removed", { content: null, position: l }));
        }),
        (m.prototype.preloadAutoWidthImages = function (l) {
          l.each(
            c.proxy(function (a, f) {
              this.enter("pre-loading"),
                (f = c(f)),
                c(new Image())
                  .one(
                    "load",
                    c.proxy(function (g) {
                      f.attr("src", g.target.src),
                        f.css("opacity", 1),
                        this.leave("pre-loading"),
                        !this.is("pre-loading") &&
                          !this.is("initializing") &&
                          this.refresh();
                    }, this)
                  )
                  .attr(
                    "src",
                    f.attr("src") ||
                      f.attr("data-src") ||
                      f.attr("data-src-retina")
                  );
            }, this)
          );
        }),
        (m.prototype.destroy = function () {
          this.$element.off(".owl.core"),
            this.$stage.off(".owl.core"),
            c(x).off(".owl.core"),
            this.settings.responsive !== !1 &&
              (C.clearTimeout(this.resizeTimer),
              this.off(C, "resize", this._handlers.onThrottledResize));
          for (var l in this._plugins) this._plugins[l].destroy();
          this.$stage.children(".cloned").remove(),
            this.$stage.unwrap(),
            this.$stage.children().contents().unwrap(),
            this.$stage.children().unwrap(),
            this.$stage.remove(),
            this.$element
              .removeClass(this.options.refreshClass)
              .removeClass(this.options.loadingClass)
              .removeClass(this.options.loadedClass)
              .removeClass(this.options.rtlClass)
              .removeClass(this.options.dragClass)
              .removeClass(this.options.grabClass)
              .attr(
                "class",
                this.$element
                  .attr("class")
                  .replace(
                    new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                    ""
                  )
              )
              .removeData("owl.carousel");
        }),
        (m.prototype.op = function (l, a, f) {
          var g = this.settings.rtl;
          switch (a) {
            case "<":
              return g ? l > f : l < f;
            case ">":
              return g ? l < f : l > f;
            case ">=":
              return g ? l <= f : l >= f;
            case "<=":
              return g ? l >= f : l <= f;
          }
        }),
        (m.prototype.on = function (l, a, f, g) {
          l.addEventListener
            ? l.addEventListener(a, f, g)
            : l.attachEvent && l.attachEvent("on" + a, f);
        }),
        (m.prototype.off = function (l, a, f, g) {
          l.removeEventListener
            ? l.removeEventListener(a, f, g)
            : l.detachEvent && l.detachEvent("on" + a, f);
        }),
        (m.prototype.trigger = function (l, a, f, g, N) {
          var _ = {
              item: { count: this._items.length, index: this.current() },
            },
            S = c.camelCase(
              c
                .grep(["on", l, f], function (D) {
                  return D;
                })
                .join("-")
                .toLowerCase()
            ),
            k = c.Event(
              [l, "owl", f || "carousel"].join(".").toLowerCase(),
              c.extend({ relatedTarget: this }, _, a)
            );
          return (
            this._supress[l] ||
              (c.each(this._plugins, function (D, T) {
                T.onTrigger && T.onTrigger(k);
              }),
              this.register({ type: m.Type.Event, name: l }),
              this.$element.trigger(k),
              this.settings &&
                typeof this.settings[S] == "function" &&
                this.settings[S].call(this, k)),
            k
          );
        }),
        (m.prototype.enter = function (l) {
          c.each(
            [l].concat(this._states.tags[l] || []),
            c.proxy(function (a, f) {
              this._states.current[f] === E && (this._states.current[f] = 0),
                this._states.current[f]++;
            }, this)
          );
        }),
        (m.prototype.leave = function (l) {
          c.each(
            [l].concat(this._states.tags[l] || []),
            c.proxy(function (a, f) {
              this._states.current[f]--;
            }, this)
          );
        }),
        (m.prototype.register = function (l) {
          if (l.type === m.Type.Event) {
            if (
              (c.event.special[l.name] || (c.event.special[l.name] = {}),
              !c.event.special[l.name].owl)
            ) {
              var a = c.event.special[l.name]._default;
              (c.event.special[l.name]._default = function (f) {
                return a &&
                  a.apply &&
                  (!f.namespace || f.namespace.indexOf("owl") === -1)
                  ? a.apply(this, arguments)
                  : f.namespace && f.namespace.indexOf("owl") > -1;
              }),
                (c.event.special[l.name].owl = !0);
            }
          } else
            l.type === m.Type.State &&
              (this._states.tags[l.name]
                ? (this._states.tags[l.name] = this._states.tags[l.name].concat(
                    l.tags
                  ))
                : (this._states.tags[l.name] = l.tags),
              (this._states.tags[l.name] = c.grep(
                this._states.tags[l.name],
                c.proxy(function (f, g) {
                  return c.inArray(f, this._states.tags[l.name]) === g;
                }, this)
              )));
        }),
        (m.prototype.suppress = function (l) {
          c.each(
            l,
            c.proxy(function (a, f) {
              this._supress[f] = !0;
            }, this)
          );
        }),
        (m.prototype.release = function (l) {
          c.each(
            l,
            c.proxy(function (a, f) {
              delete this._supress[f];
            }, this)
          );
        }),
        (m.prototype.pointer = function (l) {
          var a = { x: null, y: null };
          return (
            (l = l.originalEvent || l || C.event),
            (l =
              l.touches && l.touches.length
                ? l.touches[0]
                : l.changedTouches && l.changedTouches.length
                ? l.changedTouches[0]
                : l),
            l.pageX
              ? ((a.x = l.pageX), (a.y = l.pageY))
              : ((a.x = l.clientX), (a.y = l.clientY)),
            a
          );
        }),
        (m.prototype.isNumeric = function (l) {
          return !isNaN(parseFloat(l));
        }),
        (m.prototype.difference = function (l, a) {
          return { x: l.x - a.x, y: l.y - a.y };
        }),
        (c.fn.owlCarousel = function (l) {
          var a = Array.prototype.slice.call(arguments, 1);
          return this.each(function () {
            var f = c(this),
              g = f.data("owl.carousel");
            g ||
              ((g = new m(this, typeof l == "object" && l)),
              f.data("owl.carousel", g),
              c.each(
                [
                  "next",
                  "prev",
                  "to",
                  "destroy",
                  "refresh",
                  "replace",
                  "add",
                  "remove",
                ],
                function (N, _) {
                  g.register({ type: m.Type.Event, name: _ }),
                    g.$element.on(
                      _ + ".owl.carousel.core",
                      c.proxy(function (S) {
                        S.namespace &&
                          S.relatedTarget !== this &&
                          (this.suppress([_]),
                          g[_].apply(this, [].slice.call(arguments, 1)),
                          this.release([_]));
                      }, g)
                    );
                }
              )),
              typeof l == "string" && l.charAt(0) !== "_" && g[l].apply(g, a);
          });
        }),
        (c.fn.owlCarousel.Constructor = m);
    })(window.Zepto || window.jQuery, window, document),
      (function (c, C, x, E) {
        var m = function (l) {
          (this._core = l),
            (this._interval = null),
            (this._visible = null),
            (this._handlers = {
              "initialized.owl.carousel": c.proxy(function (a) {
                a.namespace && this._core.settings.autoRefresh && this.watch();
              }, this),
            }),
            (this._core.options = c.extend({}, m.Defaults, this._core.options)),
            this._core.$element.on(this._handlers);
        };
        (m.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
          (m.prototype.watch = function () {
            this._interval ||
              ((this._visible = this._core.isVisible()),
              (this._interval = C.setInterval(
                c.proxy(this.refresh, this),
                this._core.settings.autoRefreshInterval
              )));
          }),
          (m.prototype.refresh = function () {
            this._core.isVisible() !== this._visible &&
              ((this._visible = !this._visible),
              this._core.$element.toggleClass("owl-hidden", !this._visible),
              this._visible &&
                this._core.invalidate("width") &&
                this._core.refresh());
          }),
          (m.prototype.destroy = function () {
            var l, a;
            C.clearInterval(this._interval);
            for (l in this._handlers)
              this._core.$element.off(l, this._handlers[l]);
            for (a in Object.getOwnPropertyNames(this))
              typeof this[a] != "function" && (this[a] = null);
          }),
          (c.fn.owlCarousel.Constructor.Plugins.AutoRefresh = m);
      })(window.Zepto || window.jQuery, window),
      (function (c, C, x, E) {
        var m = function (l) {
          (this._core = l),
            (this._loaded = []),
            (this._handlers = {
              "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
                c.proxy(function (a) {
                  if (
                    a.namespace &&
                    !(!this._core.settings || !this._core.settings.lazyLoad) &&
                    ((a.property && a.property.name == "position") ||
                      a.type == "initialized")
                  ) {
                    var f = this._core.settings,
                      g = (f.center && Math.ceil(f.items / 2)) || f.items,
                      N = (f.center && g * -1) || 0,
                      _ =
                        (a.property && a.property.value !== E
                          ? a.property.value
                          : this._core.current()) + N,
                      S = this._core.clones().length,
                      k = c.proxy(function (D, T) {
                        this.load(T);
                      }, this);
                    for (
                      f.lazyLoadEager > 0 &&
                      ((g += f.lazyLoadEager),
                      f.loop && ((_ -= f.lazyLoadEager), g++));
                      N++ < g;

                    )
                      this.load(S / 2 + this._core.relative(_)),
                        S &&
                          c.each(this._core.clones(this._core.relative(_)), k),
                        _++;
                  }
                }, this),
            }),
            (this._core.options = c.extend({}, m.Defaults, this._core.options)),
            this._core.$element.on(this._handlers);
        };
        (m.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
          (m.prototype.load = function (l) {
            var a = this._core.$stage.children().eq(l),
              f = a && a.find(".owl-lazy");
            !f ||
              c.inArray(a.get(0), this._loaded) > -1 ||
              (f.each(
                c.proxy(function (g, N) {
                  var _ = c(N),
                    S,
                    k =
                      (C.devicePixelRatio > 1 && _.attr("data-src-retina")) ||
                      _.attr("data-src") ||
                      _.attr("data-srcset");
                  this._core.trigger("load", { element: _, url: k }, "lazy"),
                    _.is("img")
                      ? _.one(
                          "load.owl.lazy",
                          c.proxy(function () {
                            _.css("opacity", 1),
                              this._core.trigger(
                                "loaded",
                                { element: _, url: k },
                                "lazy"
                              );
                          }, this)
                        ).attr("src", k)
                      : _.is("source")
                      ? _.one(
                          "load.owl.lazy",
                          c.proxy(function () {
                            this._core.trigger(
                              "loaded",
                              { element: _, url: k },
                              "lazy"
                            );
                          }, this)
                        ).attr("srcset", k)
                      : ((S = new Image()),
                        (S.onload = c.proxy(function () {
                          _.css({
                            "background-image": 'url("' + k + '")',
                            opacity: "1",
                          }),
                            this._core.trigger(
                              "loaded",
                              { element: _, url: k },
                              "lazy"
                            );
                        }, this)),
                        (S.src = k));
                }, this)
              ),
              this._loaded.push(a.get(0)));
          }),
          (m.prototype.destroy = function () {
            var l, a;
            for (l in this.handlers)
              this._core.$element.off(l, this.handlers[l]);
            for (a in Object.getOwnPropertyNames(this))
              typeof this[a] != "function" && (this[a] = null);
          }),
          (c.fn.owlCarousel.Constructor.Plugins.Lazy = m);
      })(window.Zepto || window.jQuery, window),
      (function (c, C, x, E) {
        var m = function (l) {
          (this._core = l),
            (this._previousHeight = null),
            (this._handlers = {
              "initialized.owl.carousel refreshed.owl.carousel": c.proxy(
                function (f) {
                  f.namespace &&
                    this._core.settings.autoHeight &&
                    this.update();
                },
                this
              ),
              "changed.owl.carousel": c.proxy(function (f) {
                f.namespace &&
                  this._core.settings.autoHeight &&
                  f.property.name === "position" &&
                  this.update();
              }, this),
              "loaded.owl.lazy": c.proxy(function (f) {
                f.namespace &&
                  this._core.settings.autoHeight &&
                  f.element
                    .closest("." + this._core.settings.itemClass)
                    .index() === this._core.current() &&
                  this.update();
              }, this),
            }),
            (this._core.options = c.extend({}, m.Defaults, this._core.options)),
            this._core.$element.on(this._handlers),
            (this._intervalId = null);
          var a = this;
          c(C).on("load", function () {
            a._core.settings.autoHeight && a.update();
          }),
            c(C).resize(function () {
              a._core.settings.autoHeight &&
                (a._intervalId != null && clearTimeout(a._intervalId),
                (a._intervalId = setTimeout(function () {
                  a.update();
                }, 250)));
            });
        };
        (m.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
          (m.prototype.update = function () {
            var l = this._core._current,
              a = l + this._core.settings.items,
              f = this._core.settings.lazyLoad,
              g = this._core.$stage.children().toArray().slice(l, a),
              N = [],
              _ = 0;
            c.each(g, function (S, k) {
              N.push(c(k).height());
            }),
              (_ = Math.max.apply(null, N)),
              _ <= 1 && f && this._previousHeight && (_ = this._previousHeight),
              (this._previousHeight = _),
              this._core.$stage
                .parent()
                .height(_)
                .addClass(this._core.settings.autoHeightClass);
          }),
          (m.prototype.destroy = function () {
            var l, a;
            for (l in this._handlers)
              this._core.$element.off(l, this._handlers[l]);
            for (a in Object.getOwnPropertyNames(this))
              typeof this[a] != "function" && (this[a] = null);
          }),
          (c.fn.owlCarousel.Constructor.Plugins.AutoHeight = m);
      })(window.Zepto || window.jQuery, window),
      (function (c, C, x, E) {
        var m = function (l) {
          (this._core = l),
            (this._videos = {}),
            (this._playing = null),
            (this._handlers = {
              "initialized.owl.carousel": c.proxy(function (a) {
                a.namespace &&
                  this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"],
                  });
              }, this),
              "resize.owl.carousel": c.proxy(function (a) {
                a.namespace &&
                  this._core.settings.video &&
                  this.isInFullScreen() &&
                  a.preventDefault();
              }, this),
              "refreshed.owl.carousel": c.proxy(function (a) {
                a.namespace &&
                  this._core.is("resizing") &&
                  this._core.$stage.find(".cloned .owl-video-frame").remove();
              }, this),
              "changed.owl.carousel": c.proxy(function (a) {
                a.namespace &&
                  a.property.name === "position" &&
                  this._playing &&
                  this.stop();
              }, this),
              "prepared.owl.carousel": c.proxy(function (a) {
                if (a.namespace) {
                  var f = c(a.content).find(".owl-video");
                  f.length &&
                    (f.css("display", "none"), this.fetch(f, c(a.content)));
                }
              }, this),
            }),
            (this._core.options = c.extend({}, m.Defaults, this._core.options)),
            this._core.$element.on(this._handlers),
            this._core.$element.on(
              "click.owl.video",
              ".owl-video-play-icon",
              c.proxy(function (a) {
                this.play(a);
              }, this)
            );
        };
        (m.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
          (m.prototype.fetch = function (l, a) {
            var f = (function () {
                return l.attr("data-vimeo-id")
                  ? "vimeo"
                  : l.attr("data-vzaar-id")
                  ? "vzaar"
                  : "youtube";
              })(),
              g =
                l.attr("data-vimeo-id") ||
                l.attr("data-youtube-id") ||
                l.attr("data-vzaar-id"),
              N = l.attr("data-width") || this._core.settings.videoWidth,
              _ = l.attr("data-height") || this._core.settings.videoHeight,
              S = l.attr("href");
            if (S) {
              if (
                ((g = S.match(
                  /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                )),
                g[3].indexOf("youtu") > -1)
              )
                f = "youtube";
              else if (g[3].indexOf("vimeo") > -1) f = "vimeo";
              else if (g[3].indexOf("vzaar") > -1) f = "vzaar";
              else throw new Error("Video URL not supported.");
              g = g[6];
            } else throw new Error("Missing video URL.");
            (this._videos[S] = { type: f, id: g, width: N, height: _ }),
              a.attr("data-video", S),
              this.thumbnail(l, this._videos[S]);
          }),
          (m.prototype.thumbnail = function (l, a) {
            var f,
              g,
              N,
              _ =
                a.width && a.height
                  ? "width:" + a.width + "px;height:" + a.height + "px;"
                  : "",
              S = l.find("img"),
              k = "src",
              D = "",
              T = this._core.settings,
              z = function (U) {
                (g = '<div class="owl-video-play-icon"></div>'),
                  T.lazyLoad
                    ? (f = c("<div/>", {
                        class: "owl-video-tn " + D,
                        srcType: U,
                      }))
                    : (f = c("<div/>", {
                        class: "owl-video-tn",
                        style: "opacity:1;background-image:url(" + U + ")",
                      })),
                  l.after(f),
                  l.after(g);
              };
            if (
              (l.wrap(c("<div/>", { class: "owl-video-wrapper", style: _ })),
              this._core.settings.lazyLoad &&
                ((k = "data-src"), (D = "owl-lazy")),
              S.length)
            )
              return z(S.attr(k)), S.remove(), !1;
            a.type === "youtube"
              ? ((N = "//img.youtube.com/vi/" + a.id + "/hqdefault.jpg"), z(N))
              : a.type === "vimeo"
              ? c.ajax({
                  type: "GET",
                  url: "//vimeo.com/api/v2/video/" + a.id + ".json",
                  jsonp: "callback",
                  dataType: "jsonp",
                  success: function (U) {
                    (N = U[0].thumbnail_large), z(N);
                  },
                })
              : a.type === "vzaar" &&
                c.ajax({
                  type: "GET",
                  url: "//vzaar.com/api/videos/" + a.id + ".json",
                  jsonp: "callback",
                  dataType: "jsonp",
                  success: function (U) {
                    (N = U.framegrab_url), z(N);
                  },
                });
          }),
          (m.prototype.stop = function () {
            this._core.trigger("stop", null, "video"),
              this._playing.find(".owl-video-frame").remove(),
              this._playing.removeClass("owl-video-playing"),
              (this._playing = null),
              this._core.leave("playing"),
              this._core.trigger("stopped", null, "video");
          }),
          (m.prototype.play = function (l) {
            var a = c(l.target),
              f = a.closest("." + this._core.settings.itemClass),
              g = this._videos[f.attr("data-video")],
              N = g.width || "100%",
              _ = g.height || this._core.$stage.height(),
              S;
            this._playing ||
              (this._core.enter("playing"),
              this._core.trigger("play", null, "video"),
              (f = this._core.items(this._core.relative(f.index()))),
              this._core.reset(f.index()),
              (S = c(
                '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
              )),
              S.attr("height", _),
              S.attr("width", N),
              g.type === "youtube"
                ? S.attr(
                    "src",
                    "//www.youtube.com/embed/" +
                      g.id +
                      "?autoplay=1&rel=0&v=" +
                      g.id
                  )
                : g.type === "vimeo"
                ? S.attr(
                    "src",
                    "//player.vimeo.com/video/" + g.id + "?autoplay=1"
                  )
                : g.type === "vzaar" &&
                  S.attr(
                    "src",
                    "//view.vzaar.com/" + g.id + "/player?autoplay=true"
                  ),
              c(S)
                .wrap('<div class="owl-video-frame" />')
                .insertAfter(f.find(".owl-video")),
              (this._playing = f.addClass("owl-video-playing")));
          }),
          (m.prototype.isInFullScreen = function () {
            var l =
              x.fullscreenElement ||
              x.mozFullScreenElement ||
              x.webkitFullscreenElement;
            return l && c(l).parent().hasClass("owl-video-frame");
          }),
          (m.prototype.destroy = function () {
            var l, a;
            this._core.$element.off("click.owl.video");
            for (l in this._handlers)
              this._core.$element.off(l, this._handlers[l]);
            for (a in Object.getOwnPropertyNames(this))
              typeof this[a] != "function" && (this[a] = null);
          }),
          (c.fn.owlCarousel.Constructor.Plugins.Video = m);
      })(window.Zepto || window.jQuery, window, document),
      (function (c, C, x, E) {
        var m = function (l) {
          (this.core = l),
            (this.core.options = c.extend({}, m.Defaults, this.core.options)),
            (this.swapping = !0),
            (this.previous = E),
            (this.next = E),
            (this.handlers = {
              "change.owl.carousel": c.proxy(function (a) {
                a.namespace &&
                  a.property.name == "position" &&
                  ((this.previous = this.core.current()),
                  (this.next = a.property.value));
              }, this),
              "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
                c.proxy(function (a) {
                  a.namespace && (this.swapping = a.type == "translated");
                }, this),
              "translate.owl.carousel": c.proxy(function (a) {
                a.namespace &&
                  this.swapping &&
                  (this.core.options.animateOut ||
                    this.core.options.animateIn) &&
                  this.swap();
              }, this),
            }),
            this.core.$element.on(this.handlers);
        };
        (m.Defaults = { animateOut: !1, animateIn: !1 }),
          (m.prototype.swap = function () {
            if (
              this.core.settings.items === 1 &&
              !(!c.support.animation || !c.support.transition)
            ) {
              this.core.speed(0);
              var l,
                a = c.proxy(this.clear, this),
                f = this.core.$stage.children().eq(this.previous),
                g = this.core.$stage.children().eq(this.next),
                N = this.core.settings.animateIn,
                _ = this.core.settings.animateOut;
              this.core.current() !== this.previous &&
                (_ &&
                  ((l =
                    this.core.coordinates(this.previous) -
                    this.core.coordinates(this.next)),
                  f
                    .one(c.support.animation.end, a)
                    .css({ left: l + "px" })
                    .addClass("animated owl-animated-out")
                    .addClass(_)),
                N &&
                  g
                    .one(c.support.animation.end, a)
                    .addClass("animated owl-animated-in")
                    .addClass(N));
            }
          }),
          (m.prototype.clear = function (l) {
            c(l.target)
              .css({ left: "" })
              .removeClass("animated owl-animated-out owl-animated-in")
              .removeClass(this.core.settings.animateIn)
              .removeClass(this.core.settings.animateOut),
              this.core.onTransitionEnd();
          }),
          (m.prototype.destroy = function () {
            var l, a;
            for (l in this.handlers)
              this.core.$element.off(l, this.handlers[l]);
            for (a in Object.getOwnPropertyNames(this))
              typeof this[a] != "function" && (this[a] = null);
          }),
          (c.fn.owlCarousel.Constructor.Plugins.Animate = m);
      })(window.Zepto || window.jQuery),
      (function (c, C, x, E) {
        var m = function (l) {
          (this._core = l),
            (this._call = null),
            (this._time = 0),
            (this._timeout = 0),
            (this._paused = !0),
            (this._handlers = {
              "changed.owl.carousel": c.proxy(function (a) {
                a.namespace && a.property.name === "settings"
                  ? this._core.settings.autoplay
                    ? this.play()
                    : this.stop()
                  : a.namespace &&
                    a.property.name === "position" &&
                    this._paused &&
                    (this._time = 0);
              }, this),
              "initialized.owl.carousel": c.proxy(function (a) {
                a.namespace && this._core.settings.autoplay && this.play();
              }, this),
              "play.owl.autoplay": c.proxy(function (a, f, g) {
                a.namespace && this.play(f, g);
              }, this),
              "stop.owl.autoplay": c.proxy(function (a) {
                a.namespace && this.stop();
              }, this),
              "mouseover.owl.autoplay": c.proxy(function () {
                this._core.settings.autoplayHoverPause &&
                  this._core.is("rotating") &&
                  this.pause();
              }, this),
              "mouseleave.owl.autoplay": c.proxy(function () {
                this._core.settings.autoplayHoverPause &&
                  this._core.is("rotating") &&
                  this.play();
              }, this),
              "touchstart.owl.core": c.proxy(function () {
                this._core.settings.autoplayHoverPause &&
                  this._core.is("rotating") &&
                  this.pause();
              }, this),
              "touchend.owl.core": c.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play();
              }, this),
            }),
            this._core.$element.on(this._handlers),
            (this._core.options = c.extend({}, m.Defaults, this._core.options));
        };
        (m.Defaults = {
          autoplay: !1,
          autoplayTimeout: 5e3,
          autoplayHoverPause: !1,
          autoplaySpeed: !1,
        }),
          (m.prototype._next = function (l) {
            (this._call = C.setTimeout(
              c.proxy(this._next, this, l),
              this._timeout * (Math.round(this.read() / this._timeout) + 1) -
                this.read()
            )),
              !(this._core.is("interacting") || x.hidden) &&
                this._core.next(l || this._core.settings.autoplaySpeed);
          }),
          (m.prototype.read = function () {
            return new Date().getTime() - this._time;
          }),
          (m.prototype.play = function (l, a) {
            var f;
            this._core.is("rotating") || this._core.enter("rotating"),
              (l = l || this._core.settings.autoplayTimeout),
              (f = Math.min(this._time % (this._timeout || l), l)),
              this._paused
                ? ((this._time = this.read()), (this._paused = !1))
                : C.clearTimeout(this._call),
              (this._time += (this.read() % l) - f),
              (this._timeout = l),
              (this._call = C.setTimeout(c.proxy(this._next, this, a), l - f));
          }),
          (m.prototype.stop = function () {
            this._core.is("rotating") &&
              ((this._time = 0),
              (this._paused = !0),
              C.clearTimeout(this._call),
              this._core.leave("rotating"));
          }),
          (m.prototype.pause = function () {
            this._core.is("rotating") &&
              !this._paused &&
              ((this._time = this.read()),
              (this._paused = !0),
              C.clearTimeout(this._call));
          }),
          (m.prototype.destroy = function () {
            var l, a;
            this.stop();
            for (l in this._handlers)
              this._core.$element.off(l, this._handlers[l]);
            for (a in Object.getOwnPropertyNames(this))
              typeof this[a] != "function" && (this[a] = null);
          }),
          (c.fn.owlCarousel.Constructor.Plugins.autoplay = m);
      })(window.Zepto || window.jQuery, window, document),
      (function (c, C, x, E) {
        var m = function (l) {
          (this._core = l),
            (this._initialized = !1),
            (this._pages = []),
            (this._controls = {}),
            (this._templates = []),
            (this.$element = this._core.$element),
            (this._overrides = {
              next: this._core.next,
              prev: this._core.prev,
              to: this._core.to,
            }),
            (this._handlers = {
              "prepared.owl.carousel": c.proxy(function (a) {
                a.namespace &&
                  this._core.settings.dotsData &&
                  this._templates.push(
                    '<div class="' +
                      this._core.settings.dotClass +
                      '">' +
                      c(a.content)
                        .find("[data-dot]")
                        .addBack("[data-dot]")
                        .attr("data-dot") +
                      "</div>"
                  );
              }, this),
              "added.owl.carousel": c.proxy(function (a) {
                a.namespace &&
                  this._core.settings.dotsData &&
                  this._templates.splice(a.position, 0, this._templates.pop());
              }, this),
              "remove.owl.carousel": c.proxy(function (a) {
                a.namespace &&
                  this._core.settings.dotsData &&
                  this._templates.splice(a.position, 1);
              }, this),
              "changed.owl.carousel": c.proxy(function (a) {
                a.namespace && a.property.name == "position" && this.draw();
              }, this),
              "initialized.owl.carousel": c.proxy(function (a) {
                a.namespace &&
                  !this._initialized &&
                  (this._core.trigger("initialize", null, "navigation"),
                  this.initialize(),
                  this.update(),
                  this.draw(),
                  (this._initialized = !0),
                  this._core.trigger("initialized", null, "navigation"));
              }, this),
              "refreshed.owl.carousel": c.proxy(function (a) {
                a.namespace &&
                  this._initialized &&
                  (this._core.trigger("refresh", null, "navigation"),
                  this.update(),
                  this.draw(),
                  this._core.trigger("refreshed", null, "navigation"));
              }, this),
            }),
            (this._core.options = c.extend({}, m.Defaults, this._core.options)),
            this.$element.on(this._handlers);
        };
        (m.Defaults = {
          nav: !1,
          navText: [
            '<span aria-label="Previous">&#x2039;</span>',
            '<span aria-label="Next">&#x203a;</span>',
          ],
          navSpeed: !1,
          navElement: 'button type="button" role="presentation"',
          navContainer: !1,
          navContainerClass: "owl-nav",
          navClass: ["owl-prev", "owl-next"],
          slideBy: 1,
          dotClass: "owl-dot",
          dotsClass: "owl-dots",
          dots: !0,
          dotsEach: !1,
          dotsData: !1,
          dotsSpeed: !1,
          dotsContainer: !1,
        }),
          (m.prototype.initialize = function () {
            var l,
              a = this._core.settings;
            (this._controls.$relative = (
              a.navContainer
                ? c(a.navContainer)
                : c("<div>")
                    .addClass(a.navContainerClass)
                    .appendTo(this.$element)
            ).addClass("disabled")),
              (this._controls.$previous = c("<" + a.navElement + ">")
                .addClass(a.navClass[0])
                .html(a.navText[0])
                .prependTo(this._controls.$relative)
                .on(
                  "click",
                  c.proxy(function (f) {
                    this.prev(a.navSpeed);
                  }, this)
                )),
              (this._controls.$next = c("<" + a.navElement + ">")
                .addClass(a.navClass[1])
                .html(a.navText[1])
                .appendTo(this._controls.$relative)
                .on(
                  "click",
                  c.proxy(function (f) {
                    this.next(a.navSpeed);
                  }, this)
                )),
              a.dotsData ||
                (this._templates = [
                  c('<button role="button">')
                    .addClass(a.dotClass)
                    .append(c("<span>"))
                    .prop("outerHTML"),
                ]),
              (this._controls.$absolute = (
                a.dotsContainer
                  ? c(a.dotsContainer)
                  : c("<div>").addClass(a.dotsClass).appendTo(this.$element)
              ).addClass("disabled")),
              this._controls.$absolute.on(
                "click",
                "button",
                c.proxy(function (f) {
                  var g = c(f.target).parent().is(this._controls.$absolute)
                    ? c(f.target).index()
                    : c(f.target).parent().index();
                  f.preventDefault(), this.to(g, a.dotsSpeed);
                }, this)
              );
            for (l in this._overrides) this._core[l] = c.proxy(this[l], this);
          }),
          (m.prototype.destroy = function () {
            var l, a, f, g, N;
            N = this._core.settings;
            for (l in this._handlers) this.$element.off(l, this._handlers[l]);
            for (a in this._controls)
              a === "$relative" && N.navContainer
                ? this._controls[a].html("")
                : this._controls[a].remove();
            for (g in this.overides) this._core[g] = this._overrides[g];
            for (f in Object.getOwnPropertyNames(this))
              typeof this[f] != "function" && (this[f] = null);
          }),
          (m.prototype.update = function () {
            var l,
              a,
              f = this._core.clones().length / 2,
              g = f + this._core.items().length,
              N = this._core.maximum(!0),
              _ = this._core.settings,
              S =
                _.center || _.autoWidth || _.dotsData
                  ? 1
                  : _.dotsEach || _.items;
            if (
              (_.slideBy !== "page" &&
                (_.slideBy = Math.min(_.slideBy, _.items)),
              _.dots || _.slideBy == "page")
            )
              for (this._pages = [], l = f, a = 0, 0; l < g; l++) {
                if (a >= S || a === 0) {
                  if (
                    (this._pages.push({
                      start: Math.min(N, l - f),
                      end: l - f + S - 1,
                    }),
                    Math.min(N, l - f) === N)
                  )
                    break;
                  a = 0;
                }
                a += this._core.mergers(this._core.relative(l));
              }
          }),
          (m.prototype.draw = function () {
            var l,
              a = this._core.settings,
              f = this._core.items().length <= a.items,
              g = this._core.relative(this._core.current()),
              N = a.loop || a.rewind;
            this._controls.$relative.toggleClass("disabled", !a.nav || f),
              a.nav &&
                (this._controls.$previous.toggleClass(
                  "disabled",
                  !N && g <= this._core.minimum(!0)
                ),
                this._controls.$next.toggleClass(
                  "disabled",
                  !N && g >= this._core.maximum(!0)
                )),
              this._controls.$absolute.toggleClass("disabled", !a.dots || f),
              a.dots &&
                ((l =
                  this._pages.length -
                  this._controls.$absolute.children().length),
                a.dotsData && l !== 0
                  ? this._controls.$absolute.html(this._templates.join(""))
                  : l > 0
                  ? this._controls.$absolute.append(
                      new Array(l + 1).join(this._templates[0])
                    )
                  : l < 0 &&
                    this._controls.$absolute.children().slice(l).remove(),
                this._controls.$absolute.find(".active").removeClass("active"),
                this._controls.$absolute
                  .children()
                  .eq(c.inArray(this.current(), this._pages))
                  .addClass("active"));
          }),
          (m.prototype.onTrigger = function (l) {
            var a = this._core.settings;
            l.page = {
              index: c.inArray(this.current(), this._pages),
              count: this._pages.length,
              size:
                a &&
                (a.center || a.autoWidth || a.dotsData
                  ? 1
                  : a.dotsEach || a.items),
            };
          }),
          (m.prototype.current = function () {
            var l = this._core.relative(this._core.current());
            return c
              .grep(
                this._pages,
                c.proxy(function (a, f) {
                  return a.start <= l && a.end >= l;
                }, this)
              )
              .pop();
          }),
          (m.prototype.getPosition = function (l) {
            var a,
              f,
              g = this._core.settings;
            return (
              g.slideBy == "page"
                ? ((a = c.inArray(this.current(), this._pages)),
                  (f = this._pages.length),
                  l ? ++a : --a,
                  (a = this._pages[((a % f) + f) % f].start))
                : ((a = this._core.relative(this._core.current())),
                  (f = this._core.items().length),
                  l ? (a += g.slideBy) : (a -= g.slideBy)),
              a
            );
          }),
          (m.prototype.next = function (l) {
            c.proxy(this._overrides.to, this._core)(this.getPosition(!0), l);
          }),
          (m.prototype.prev = function (l) {
            c.proxy(this._overrides.to, this._core)(this.getPosition(!1), l);
          }),
          (m.prototype.to = function (l, a, f) {
            var g;
            !f && this._pages.length
              ? ((g = this._pages.length),
                c.proxy(this._overrides.to, this._core)(
                  this._pages[((l % g) + g) % g].start,
                  a
                ))
              : c.proxy(this._overrides.to, this._core)(l, a);
          }),
          (c.fn.owlCarousel.Constructor.Plugins.Navigation = m);
      })(window.Zepto || window.jQuery),
      (function (c, C, x, E) {
        var m = function (l) {
          (this._core = l),
            (this._hashes = {}),
            (this.$element = this._core.$element),
            (this._handlers = {
              "initialized.owl.carousel": c.proxy(function (a) {
                a.namespace &&
                  this._core.settings.startPosition === "URLHash" &&
                  c(C).trigger("hashchange.owl.navigation");
              }, this),
              "prepared.owl.carousel": c.proxy(function (a) {
                if (a.namespace) {
                  var f = c(a.content)
                    .find("[data-hash]")
                    .addBack("[data-hash]")
                    .attr("data-hash");
                  if (!f) return;
                  this._hashes[f] = a.content;
                }
              }, this),
              "changed.owl.carousel": c.proxy(function (a) {
                if (a.namespace && a.property.name === "position") {
                  var f = this._core.items(
                      this._core.relative(this._core.current())
                    ),
                    g = c
                      .map(this._hashes, function (N, _) {
                        return N === f ? _ : null;
                      })
                      .join();
                  if (!g || C.location.hash.slice(1) === g) return;
                  C.location.hash = g;
                }
              }, this),
            }),
            (this._core.options = c.extend({}, m.Defaults, this._core.options)),
            this.$element.on(this._handlers),
            c(C).on(
              "hashchange.owl.navigation",
              c.proxy(function (a) {
                var f = C.location.hash.substring(1),
                  g = this._core.$stage.children(),
                  N = this._hashes[f] && g.index(this._hashes[f]);
                N === E ||
                  N === this._core.current() ||
                  this._core.to(this._core.relative(N), !1, !0);
              }, this)
            );
        };
        (m.Defaults = { URLhashListener: !1 }),
          (m.prototype.destroy = function () {
            var l, a;
            c(C).off("hashchange.owl.navigation");
            for (l in this._handlers)
              this._core.$element.off(l, this._handlers[l]);
            for (a in Object.getOwnPropertyNames(this))
              typeof this[a] != "function" && (this[a] = null);
          }),
          (c.fn.owlCarousel.Constructor.Plugins.Hash = m);
      })(window.Zepto || window.jQuery, window),
      (function (c, C, x, E) {
        var m = c("<support>").get(0).style,
          l = "Webkit Moz O ms".split(" "),
          a = {
            transition: {
              end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend",
              },
            },
            animation: {
              end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend",
              },
            },
          },
          f = {
            csstransforms: function () {
              return !!g("transform");
            },
            csstransforms3d: function () {
              return !!g("perspective");
            },
            csstransitions: function () {
              return !!g("transition");
            },
            cssanimations: function () {
              return !!g("animation");
            },
          };
        function g(_, S) {
          var k = !1,
            D = _.charAt(0).toUpperCase() + _.slice(1);
          return (
            c.each((_ + " " + l.join(D + " ") + D).split(" "), function (T, z) {
              if (m[z] !== E) return (k = S ? z : !0), !1;
            }),
            k
          );
        }
        function N(_) {
          return g(_, !0);
        }
        f.csstransitions() &&
          ((c.support.transition = new String(N("transition"))),
          (c.support.transition.end = a.transition.end[c.support.transition])),
          f.cssanimations() &&
            ((c.support.animation = new String(N("animation"))),
            (c.support.animation.end = a.animation.end[c.support.animation])),
          f.csstransforms() &&
            ((c.support.transform = new String(N("transform"))),
            (c.support.transform3d = f.csstransforms3d()));
      })(window.Zepto || window.jQuery);
    var d = window.jQuery,
      p = (function (c) {
        o(C, c);
        function C(x) {
          var E = c.call(this, x) || this;
          E.containerRef = function (f) {
            E.container = f;
          };
          var m = w(E.props),
            l = m[0],
            a = m[1];
          return (E.options = l), (E.propsWithoutOptions = a), E;
        }
        return (
          (C.prototype.componentDidMount = function () {
            (this.$ele = d(this.container)), this.create();
          }),
          (C.prototype.UNSAFE_componentWillReceiveProps = function () {
            this.destory();
          }),
          (C.prototype.componentDidUpdate = function () {
            var x = w(this.props),
              E = x[0],
              m = x[1];
            (this.options = E), (this.propsWithoutOptions = m), this.create();
          }),
          (C.prototype.next = function (x) {
            if (!this.$ele) throw new Error("OwlCarousel is not created");
            typeof x == "number"
              ? this.$ele.trigger("next.owl.carousel", [x])
              : this.$ele.trigger("next.owl.carousel", x);
          }),
          (C.prototype.prev = function (x) {
            if (!this.$ele) throw new Error("OwlCarousel is not created");
            typeof x == "number"
              ? this.$ele.trigger("prev.owl.carousel", [x])
              : this.$ele.trigger("prev.owl.carousel", x);
          }),
          (C.prototype.to = function (x, E) {
            if (!this.$ele) throw new Error("OwlCarousel is not created");
            typeof x == "number" && typeof E == "number"
              ? this.$ele.trigger("to.owl.carousel", [x, E])
              : this.$ele.trigger("to.owl.carousel");
          }),
          (C.prototype.create = function (x) {
            if (!this.$ele) throw new Error("OwlCarousel is not created");
            this.$ele.owlCarousel(x || this.options);
          }),
          (C.prototype.destory = function () {
            if (!this.$ele) throw new Error("OwlCarousel is not created");
            this.$ele.trigger("destroy.owl.carousel");
          }),
          (C.prototype.play = function (x, E) {
            if (!this.$ele) throw new Error("OwlCarousel is not created");
            typeof x == "number" && typeof E == "number"
              ? this.$ele.trigger("play.owl.autoplay", [x, E])
              : this.$ele.trigger("play.owl.autoplay");
          }),
          (C.prototype.stop = function () {
            if (!this.$ele) throw new Error("OwlCarousel is not created");
            this.$ele.trigger("stop.owl.autoplay");
          }),
          (C.prototype.render = function () {
            var x = this.propsWithoutOptions,
              E = x.className,
              m = u(x, ["className"]);
            return r.createElement(
              "div",
              s({ className: "owl-carousel " + E, ref: this.containerRef }, m)
            );
          }),
          C
        );
      })(n.Component),
      y = new Set([
        "items",
        "margin",
        "loop",
        "center",
        "mouseDrag",
        "touchDrag",
        "pullDrag",
        "freeDrag",
        "stagePadding",
        "merge",
        "mergeFit",
        "autoWidth",
        "startPosition",
        "URLhashListener",
        "nav",
        "rewind",
        "navText",
        "navElement",
        "slideBy",
        "dots",
        "dotsEach",
        "dotData",
        "lazyLoad",
        "lazyContent",
        "autoplay",
        "autoplayTimeout",
        "autoplayHoverPause",
        "smartSpeed",
        "fluidSpeed",
        "autoplaySpeed",
        "navSpeed",
        "dotsSpeed",
        "dragEndSpeed",
        "callbacks",
        "responsive",
        "responsiveRefreshRate",
        "responsiveBaseElement",
        "video",
        "videoHeight",
        "videoWidth",
        "animateOut",
        "animateIn",
        "fallbackEasing",
        "info",
        "nestedItemSelector",
        "itemElement",
        "stageElement",
        "navContainer",
        "dotsContainer",
        "refreshClass",
        "loadingClass",
        "loadedClass",
        "rtlClass",
        "dragClass",
        "grabClass",
        "stageClass",
        "stageOuterClass",
        "navContainerClass",
        "navClass",
        "controlsClass",
        "dotClass",
        "dotsClass",
        "autoHeightClass",
        "responsiveClass",
        "onInitialize",
        "onInitialized",
        "onResize",
        "onResized",
        "onRefresh",
        "onRefreshed",
        "onDrag",
        "onDragged",
        "onTranslate",
        "onTranslated",
        "onChange",
        "onChanged",
        "onLoadLazy",
        "onLoadedLazy",
        "onStopVideo",
        "onPlayVideo",
      ]);
    function w(c) {
      var C = {},
        x = {};
      return (
        Object.keys(c).forEach(function (E) {
          y.has(E) ? (C[E] = c[E]) : (x[E] = c[E]);
        }),
        [C, x]
      );
    }
    return p;
  });
})(kh);
var Pw = kh.exports;
const Aw = ei(Pw),
  Lw = [
    {
      id: 7,
      marca: "Versace",
      imgUrl:
        "https://github.com/Blasnjacobo/external-files/blob/main/shoppin-cart-mom/marcas/versace.jpg?raw=true",
    },
    {
      id: 8,
      marca: "Halloween",
      imgUrl:
        "https://github.com/Blasnjacobo/external-files/blob/main/shoppin-cart-mom/marcas/Halloween.png?raw=true",
    },
    {
      id: 9,
      marca: "Jean Paul Gaultier",
      imgUrl:
        "https://github.com/Blasnjacobo/external-files/blob/main/shoppin-cart-mom/marcas/JeanPaulGaultier.png?raw=true",
    },
    {
      id: 10,
      marca: "MontBlanc",
      imgUrl:
        "https://github.com/Blasnjacobo/external-files/blob/main/shoppin-cart-mom/marcas/MontBlanc.png?raw=true",
    },
    {
      id: 11,
      marca: "Nautica",
      imgUrl:
        "https://github.com/Blasnjacobo/external-files/blob/main/shoppin-cart-mom/marcas/Nautica.png?raw=true",
    },
    {
      id: 12,
      marca: "Calvin Klein",
      imgUrl:
        "https://github.com/Blasnjacobo/external-files/blob/main/shoppin-cart-mom/marcas/calvinKlein.png?raw=true",
    },
    {
      id: 1,
      marca: "Paris Hilton",
      imgUrl:
        "https://github.com/Blasnjacobo/external-files/blob/main/shoppin-cart-mom/marcas/Paris_hilton.jpg?raw=true",
    },
    {
      id: 2,
      marca: "Carolina Herrera",
      imgUrl:
        "https://github.com/Blasnjacobo/external-files/blob/main/shoppin-cart-mom/marcas/carolina_herrera.jpg?raw=true",
    },
    {
      id: 3,
      marca: "Dior",
      imgUrl:
        "https://github.com/Blasnjacobo/external-files/blob/main/shoppin-cart-mom/marcas/dior.jpg?raw=true",
    },
    {
      id: 4,
      marca: "Paco Rabanne",
      imgUrl:
        "https://github.com/Blasnjacobo/external-files/blob/main/shoppin-cart-mom/marcas/paco_rabanne.jpg?raw=true",
    },
    {
      id: 6,
      marca: "Prada",
      imgUrl:
        "https://github.com/Blasnjacobo/external-files/blob/main/shoppin-cart-mom/marcas/prada.jpg?raw=true",
    },
  ];
class Dw extends v.Component {
  render() {
    const t = { 0: { items: 1 }, 600: { items: 3 }, 1e3: { items: 5 } };
    return h.jsxs("div", {
      children: [
        h.jsx("div", {
          className: "container-fluid",
          children: h.jsx("div", {
            className: "row title",
            style: { marginBottom: "20px", padding: "20px" },
            children: h.jsx("div", {
              className: "col-sm-12",
              style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: "3vh",
              },
              children: "LAS MEJORES MARCAS",
            }),
          }),
        }),
        h.jsx("div", {
          className: "container-fluid",
          children: h.jsx(Aw, {
            className: "owl-theme",
            loop: !0,
            nav: !0,
            margin: 8,
            responsive: t,
            children: Lw.map((n) =>
              h.jsx(
                "div",
                {
                  children: h.jsx("img", {
                    className: "img",
                    src: n.imgUrl,
                    style: { height: "260px", width: "100%" },
                    alt: n.marca,
                  }),
                },
                n.id
              )
            ),
          }),
        }),
      ],
    });
  }
}
const zw = () =>
    h.jsxs("div", {
      children: [
        h.jsx("div", { className: "row", children: h.jsx(Mw, {}) }),
        h.jsxs("div", {
          className: "container",
          children: [h.jsx(Ow, {}), h.jsx(Dw, {})],
        }),
      ],
    }),
  Iw = () =>
    h.jsx("div", {
      children: h.jsxs(kn, {
        className:
          "me-auto d-flex gap-4 align-items-center justify-content-center",
        children: [
          h.jsx(kn.Link, {
            to: "/shopping-cart",
            as: jn,
            style: { color: "red" },
            children: "Home",
          }),
          h.jsx(kn.Link, {
            to: "/shopping-cart/dama",
            as: jn,
            style: { fontWeight: "bold" },
            children: "Dama",
          }),
          h.jsx(kn.Link, {
            to: "/shopping-cart/caballero",
            as: jn,
            style: { fontWeight: "bold" },
            children: "Caballero",
          }),
          h.jsx(kn.Link, {
            to: "/shopping-cart/unisex",
            as: jn,
            style: { fontWeight: "bold" },
            children: "Unisex",
          }),
          h.jsx(kn.Link, {
            to: "/shopping-cart/about",
            as: jn,
            style: { fontWeight: "bold" },
            children: "About",
          }),
        ],
      }),
    }),
  $w = () => {
    const e = sr(),
      { openCart: t, quantity: n } = Wo();
    return (
      v.useEffect(() => {
        console.log("Quantity changed:", n);
      }, [n]),
      h.jsx("div", {
        children: e
          ? h.jsx("div", {
              children:
                n > 0 &&
                h.jsxs(xt, {
                  onClick: t,
                  style: {
                    width: "3rem",
                    height: "3rem",
                    position: "relative",
                  },
                  variant: "outline-primary",
                  className: "rounded-circle",
                  children: [
                    h.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 576 512",
                      fill: "pink",
                      children: h.jsx("path", {
                        d: "M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z",
                      }),
                    }),
                    h.jsx("div", {
                      className:
                        "rounded-circle bg-black d-flex justify-content-center align-items-center",
                      style: {
                        color: "white",
                        width: "1.8rem",
                        height: "1.8rem",
                        position: "absolute",
                        bottom: 35,
                        right: 0,
                        transform: "translate(35%, 35%)",
                      },
                      children: n,
                    }),
                  ],
                }),
            })
          : h.jsx("div", {}),
      })
    );
  },
  Bw =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQflCwcOLTKCOQ9cAAACqUlEQVRYw71XS0tqURhdWy2LHlRE5izLWYERZE8IbBZBNQhq1E8Jgsi5RVT/ocekWeKgk4+i17zEBpUQlZqQVnvdgfdSt3vO8RzNu8DRd856fHv7nb0FDIKyoQFichL0+SA8HqCjA2hqAt7egIcH8O4OIhYDQiHw4EBYUimj3PrCdDrJ9XUym6VhpNNkIEDpdpchXFtLLi1RvrwYF/6OXI5cXKSsrjYnLt1u8vKydOHvWFw0kby3l0wmf0xbnp6SNTUmkv+gOJ+eyK4uPU3b1zUHtreBtja9/gCKAuzugrEYkExCvL8D7e2A1wtMTwNjY5/PLiwIcXVlsPVLS/ppjo7IwcHiPH19lJEI6febWHenU3+3r65S2mzG+axW0mo1YWB9XVs8EDBMVAooGxq0h4yimElemgHOz2v8fyQ5NFRRcQC2wmxXKymKEOFw8QDNzeUZEB6PemlnxxjF42M5Biygy6Ue7eSkHGLjBkRjo3rp9vb/GNCEEMZpSkUuZwHTafWi01l5A6mUBSIeVy96vRXX5/W1BTw/Vy2KqSljLC0txX/Hx+oaFxcg5+a0x/DwcNkhZX+/9llhdlZ/FMtwuJxRXPgoRaPq6pkMWVf32+XWlnYX1tZKNxAIaPNubHxpk9tN5vN6Jiirqswl1xN/feX3AUj6/dSDjETIkRFjax6L6XJxefnP8+LzRbsdIhgEim08RQH39oBoFLi/h/j4KBzJBgaAmRlgdFT//cNDcHxcWPJ5FfcOB3lzw4ohkaB0OIq0sKenMiYSCbK729gmkq2tZCj0c+KKUjT5vybsdnJlpXC9KhW5HLm8bPpq9pcRdnZSbm6auyNmMuTGBrXOGl9g+JNLWV8PMTEB+Hxgby+Ey1W4ngPA8zMYj0OcnYHBIMT+vhDZrBHeX+eMeZ3sZX7fAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTExLTA3VDE0OjQ1OjUwKzAwOjAwF258GwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0xMS0wN1QxNDo0NTo1MCswMDowMGYzxKcAAAAASUVORK5CYII=",
  Fw =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQflCwcOMTX6KseiAAACD0lEQVRYw+2VvUsDQRTEZ0O+wEKOhBAiFioYBREJ2kr+Ae0srGwlFoKVbQoLsbERSwsLEQT7WNjYBoyFYsAI2oX4VSUq98bi0EPUc/dc0MLp7njvzW9nd++Af/1lkf395NERub5OGR836pVYjJydJXd3ye3tr+pUMECpBGxsvD6Be3tQ5TLoOMDYGFRPD+A4wNMTcHcHXlxAVatgXx+wtgY1NOT1ui6QTit1f2+YwOoqbUlGRj7ziAQjtNt2NhMAHh9DAJyd2THvdICrK6MWSiJBnp5a2wKurJgBcGHBnjlJtttkLmewBTMzduJ/VTIJTk0ZAAwP2wUA/GupBRCLWQdAImEA0GrZB2g2DQAaDfsAl5cGAJWKXXMSODjQL5dMhnx4sHcN9/dDMM/P2zFvtciBgZDBLS6SnU5480aDLBQMDItFslQis1n/XT5Pbm6SzaaeqQhZq5FLS2RXl9mKpbeXPD4mb24oExPv4ZTyYLa2Pjd2XXJujkylQsXtQ3R3k+fn5PU1JZ1+D5FMBh/OnZ0fmftG09PewJMTyuSk93fMZsnl5eD4b28tAShFOTwMde4kHrcEkUpRKhVzgI/f/K+kdIoog4NAPg+QUIUCUC4HN8TjKvL8rDM7qkUZqdeBet2DcZxvsZWIbgIR3UJ/uOtqZEbdcVoJvI2VaBTIZIBqNbhydJSs1ZTSB/nXr+kFWWiA7cYk6NAAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMTEtMDdUMTQ6NDk6NTMrMDA6MDA8uoYIAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTExLTA3VDE0OjQ5OjUzKzAwOjAwTec+tAAAAABJRU5ErkJggg==",
  Uw = ({ show: e, handleClose: t }) => {
    const n = () => {
        window.open(
          "https://shopping-cart-production-4ea1.up.railway.app/auth/google",
          "_self"
        );
      },
      r = () => {
        window.open(
          "https://shopping-cart-production-4ea1.up.railway.app/auth/github",
          "_self"
        );
      };
    return h.jsx(h.Fragment, {
      children: h.jsx(nw, {
        show: e,
        onHide: t,
        children: h.jsx("div", {
          className: "login",
          children: h.jsxs("div", {
            className: "wrapper",
            children: [
              h.jsxs("div", {
                className: "left",
                children: [
                  h.jsxs("div", {
                    className: "loginButton google",
                    onClick: n,
                    children: [
                      h.jsx("img", { src: Bw, alt: "", className: "icon" }),
                      "Google",
                    ],
                  }),
                  h.jsxs("div", {
                    className: "loginButton github",
                    onClick: r,
                    children: [
                      h.jsx("img", { src: Fw, alt: "", className: "icon" }),
                      "Github",
                    ],
                  }),
                ],
              }),
              h.jsxs("div", {
                className: "center",
                children: [
                  h.jsx("div", { className: "line" }),
                  h.jsx("div", { className: "or", children: "OR" }),
                ],
              }),
              h.jsxs("div", {
                className: "inputs",
                children: [
                  h.jsx("input", { type: "text", placeholder: "Username" }),
                  h.jsx("input", { type: "text", placeholder: "Password" }),
                  h.jsx("button", { className: "submit", children: "Login" }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  },
  bw = () => {
    const [e, t] = v.useState(!1),
      n = () => t(!1),
      r = () => t(!0);
    return h.jsxs(h.Fragment, {
      children: [
        h.jsx(Qi, {
          as: jn,
          to: "/shopping-cart/",
          children: h.jsx("i", {
            className: "bi bi-person",
            onClick: r,
            style: {
              fontSize: "1.5rem",
              marginLeft: "2rem",
              cursor: "pointer",
              color: "black",
            },
          }),
        }),
        h.jsx(Uw, { show: e, handleClose: n }),
      ],
    });
  },
  Ww = ({ user: e }) => {
    const t = () => {
      window.open(
        "https://shopping-cart-production-4ea1.up.railway.app/auth/logout",
        "_self"
      );
    };
    return (
      console.log(e),
      h.jsx("div", {
        children: h.jsxs("ul", {
          className: "list",
          children: [
            h.jsx("li", {
              className: "listItem",
              children: h.jsx("img", {
                src: e.photos[0].value,
                alt: e.name,
                className: "avatar",
              }),
            }),
            h.jsx("li", {
              className: "listItem",
              onClick: t,
              children: "Logout",
            }),
          ],
        }),
      })
    );
  },
  Hw = () => {
    const e = sr();
    return h.jsx(Qi, {
      sticky: "top",
      expand: "md",
      className: "bg-white shadow-sm mb-3",
      children: h.jsxs(y0, {
        children: [
          h.jsx(Qi.Toggle, { "aria-controls": "navbarNav" }),
          h.jsx(Qi.Collapse, { id: "navbarNav", children: h.jsx(Iw, {}) }),
          h.jsx($w, {}),
          e ? h.jsx(Ww, { user: e }) : h.jsx(bw, {}),
        ],
      }),
    });
  };
function jh(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = jh(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function A() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = jh(t)) && (r && (r += " "), (r += n));
  return r;
}
(function () {
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(
        document.createTextNode(
          ".dropdown-menu .active:not(.form-control){color:#16181b;background-color:#eee}.dropdown-menu [data-active=true] a.dropdown-item,.dropdown-menu .dropdown-item:focus,.dropdown-menu li:focus .dropdown-item :not(.disabled){color:#16181b;background-color:#eee}.dropdown-menu li:focus{outline:none}.dropdown-menu.dropdown-menu-dark [data-active=true] a.dropdown-item,.dropdown-menu.dropdown-menu-dark .dropdown-item:focus,.dropdown-menu.dropdown-menu-dark li:focus .dropdown-item{color:#fff;background-color:#1266f1}.btn-group.dropstart>.dropdown-menu{right:0!important}"
        )
      ),
        document.head.appendChild(e);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
const Rh = M.forwardRef(
  (
    {
      breakpoint: e,
      fluid: t,
      children: n,
      className: r,
      tag: i = "div",
      ...o
    },
    s
  ) => {
    const u = A(`${t ? "container-fluid" : `container${e ? "-" + e : ""}`}`, r);
    return h.jsx(i, { className: u, ...o, ref: s, children: n });
  }
);
Rh.displayName = "MDBContainer";
const un = M.forwardRef(
  (
    {
      center: e,
      children: t,
      className: n,
      end: r,
      lg: i,
      md: o,
      offsetLg: s,
      offsetMd: u,
      offsetSm: d,
      order: p,
      size: y,
      sm: w,
      start: c,
      tag: C = "div",
      xl: x,
      xxl: E,
      xs: m,
      ...l
    },
    a
  ) => {
    const f = A(
      y && `col-${y}`,
      m && `col-xs-${m}`,
      w && `col-sm-${w}`,
      o && `col-md-${o}`,
      i && `col-lg-${i}`,
      x && `col-xl-${x}`,
      E && `col-xxl-${E}`,
      !y && !m && !w && !o && !i && !x && !E ? "col" : "",
      p && `order-${p}`,
      c && "align-self-start",
      e && "align-self-center",
      r && "align-self-end",
      d && `offset-sm-${d}`,
      u && `offset-md-${u}`,
      s && `offset-lg-${s}`,
      n
    );
    return h.jsx(C, { className: f, ref: a, ...l, children: t });
  }
);
un.displayName = "MDBCol";
const Vw = M.forwardRef(
  (
    {
      className: e,
      color: t = "primary",
      pill: n,
      light: r,
      dot: i,
      tag: o = "span",
      children: s,
      notification: u,
      ...d
    },
    p
  ) => {
    const y = A(
      "badge",
      r ? t && `badge-${t}` : t && `bg-${t}`,
      i && "badge-dot",
      n && "rounded-pill",
      u && "badge-notification",
      e
    );
    return h.jsx(o, { className: y, ref: p, ...d, children: s });
  }
);
Vw.displayName = "MDBBadge";
const Qw = ({ ...e }) => {
    const [t, n] = v.useState(!1),
      r = A("ripple-wave", t && "active");
    return (
      v.useEffect(() => {
        const i = setTimeout(() => {
          n(!0);
        }, 50);
        return () => {
          clearTimeout(i);
        };
      }, []),
      h.jsx("div", { className: r, ...e })
    );
  },
  Kw = (...e) => {
    const t = M.useRef();
    return (
      M.useEffect(() => {
        e.forEach((n) => {
          n &&
            (typeof n == "function" ? n(t.current) : (n.current = t.current));
        });
      }, [e]),
      t
    );
  },
  Th = M.forwardRef(
    (
      {
        className: e,
        rippleTag: t = "div",
        rippleCentered: n,
        rippleDuration: r = 500,
        rippleUnbound: i,
        rippleRadius: o = 0,
        rippleColor: s = "dark",
        children: u,
        onMouseDown: d,
        ...p
      },
      y
    ) => {
      const w = v.useRef(null),
        c = Kw(y, w),
        C =
          "rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%",
        x = [0, 0, 0],
        E = [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
        ],
        [m, l] = v.useState([]),
        [a, f] = v.useState(!1),
        g = A(
          "ripple",
          "ripple-surface",
          i && "ripple-surface-unbound",
          a && `ripple-surface-${s}`,
          e
        ),
        N = () => {
          if (E.find((T) => T === (s == null ? void 0 : s.toLowerCase())))
            return f(!0);
          {
            const T = _(s).join(",");
            return `radial-gradient(circle, ${C.split("{{color}}").join(
              `${T}`
            )})`;
          }
        },
        _ = (T) => {
          const z = (B) => (
              B.length < 7 &&
                (B = `#${B[1]}${B[1]}${B[2]}${B[2]}${B[3]}${B[3]}`),
              [
                parseInt(B.substr(1, 2), 16),
                parseInt(B.substr(3, 2), 16),
                parseInt(B.substr(5, 2), 16),
              ]
            ),
            U = (B) => {
              const W = document.body.appendChild(
                  document.createElement("fictum")
                ),
                J = "rgb(1, 2, 3)";
              return (
                (W.style.color = J),
                W.style.color !== J ||
                ((W.style.color = B),
                W.style.color === J || W.style.color === "")
                  ? x
                  : ((B = getComputedStyle(W).color),
                    document.body.removeChild(W),
                    B)
              );
            },
            q = (B) => (
              (B = B.match(/[.\d]+/g).map((W) => +Number(W))), (B.length = 3), B
            );
          return T.toLowerCase() === "transparent"
            ? x
            : T[0] === "#"
            ? z(T)
            : (T.indexOf("rgb") === -1 && (T = U(T)),
              T.indexOf("rgb") === 0 ? q(T) : x);
        },
        S = (T) => {
          const { offsetX: z, offsetY: U, height: q, width: B } = T,
            W = U <= q / 2,
            J = z <= B / 2,
            K = (V, ne) => Math.sqrt(V ** 2 + ne ** 2),
            j = U === q / 2 && z === B / 2,
            P = {
              first: W === !0 && J === !1,
              second: W === !0 && J === !0,
              third: W === !1 && J === !0,
              fourth: W === !1 && J === !1,
            },
            L = {
              topLeft: K(z, U),
              topRight: K(B - z, U),
              bottomLeft: K(z, q - U),
              bottomRight: K(B - z, q - U),
            };
          let $ = 0;
          return (
            j || P.fourth
              ? ($ = L.topLeft)
              : P.third
              ? ($ = L.topRight)
              : P.second
              ? ($ = L.bottomRight)
              : P.first && ($ = L.bottomLeft),
            $ * 2
          );
        },
        k = (T) => {
          var z;
          const U =
              (z = c.current) == null ? void 0 : z.getBoundingClientRect(),
            q = T.clientX - U.left,
            B = T.clientY - U.top,
            W = U.height,
            J = U.width,
            K = {
              offsetX: n ? W / 2 : q,
              offsetY: n ? J / 2 : B,
              height: W,
              width: J,
            },
            j = { delay: r && r * 0.5, duration: r && r - r * 0.5 },
            P = S(K),
            L = o || P / 2,
            $ = {
              left: n ? `${J / 2 - L}px` : `${q - L}px`,
              top: n ? `${W / 2 - L}px` : `${B - L}px`,
              height: o ? `${o * 2}px` : `${P}px`,
              width: o ? `${o * 2}px` : `${P}px`,
              transitionDelay: `0s, ${j.delay}ms`,
              transitionDuration: `${r}ms, ${j.duration}ms`,
            };
          return a ? $ : { ...$, backgroundImage: `${N()}` };
        },
        D = (T) => {
          const z = k(T),
            U = m.concat(z);
          l(U), d && d(T);
        };
      return (
        v.useEffect(() => {
          const T = setTimeout(() => {
            m.length > 0 && l(m.splice(1, m.length - 1));
          }, r);
          return () => {
            clearTimeout(T);
          };
        }, [r, m]),
        h.jsxs(t, {
          className: g,
          onMouseDown: (T) => D(T),
          ref: c,
          ...p,
          children: [u, m.map((T, z) => h.jsx(Qw, { style: T }, z))],
        })
      );
    }
  );
Th.displayName = "MDBRipple";
const Xw = M.forwardRef(
  (
    {
      className: e,
      color: t = "primary",
      outline: n,
      children: r,
      rounded: i,
      disabled: o,
      floating: s,
      size: u,
      href: d,
      block: p,
      active: y,
      toggle: w,
      noRipple: c,
      tag: C = "button",
      role: x = "button",
      ...E
    },
    m
  ) => {
    const [l, a] = v.useState(y || !1);
    let f;
    const g = (t && ["light", "link"].includes(t)) || n ? "dark" : "light";
    t !== "none"
      ? n
        ? t
          ? (f = `btn-outline-${t}`)
          : (f = "btn-outline-primary")
        : t
        ? (f = `btn-${t}`)
        : (f = "btn-primary")
      : (f = "");
    const N = A(
      t !== "none" && "btn",
      f,
      i && "btn-rounded",
      s && "btn-floating",
      u && `btn-${u}`,
      `${(d || C !== "button") && o ? "disabled" : ""}`,
      p && "btn-block",
      l && "active",
      e
    );
    return (
      d && C !== "a" && (C = "a"),
      ["hr", "img", "input"].includes(C) || c
        ? h.jsx(C, {
            className: N,
            onClick: w
              ? () => {
                  a(!l);
                }
              : void 0,
            disabled: o && C === "button" ? !0 : void 0,
            href: d,
            ref: m,
            role: x,
            ...E,
            children: r,
          })
        : h.jsx(Th, {
            rippleTag: C,
            rippleColor: g,
            className: N,
            onClick: w
              ? () => {
                  a(!l);
                }
              : void 0,
            disabled: o && C === "button" ? !0 : void 0,
            href: d,
            ref: m,
            role: x,
            ...E,
            children: r,
          })
    );
  }
);
Xw.displayName = "MDBBtn";
const Gw = M.forwardRef(
  (
    {
      className: e,
      children: t,
      shadow: n,
      toolbar: r,
      size: i,
      vertical: o,
      tag: s = "div",
      role: u = "group",
      ...d
    },
    p
  ) => {
    let y;
    r
      ? (y = "btn-toolbar")
      : o
      ? (y = "btn-group-vertical")
      : (y = "btn-group");
    const w = A(y, n && `shadow-${n}`, i && `btn-group-${i}`, e);
    return h.jsx(s, { className: w, ref: p, role: u, ...d, children: t });
  }
);
Gw.displayName = "MDBBtnGroup";
const Yw = M.forwardRef(
  (
    {
      className: e,
      children: t,
      tag: n = "div",
      color: r,
      grow: i,
      size: o,
      ...s
    },
    u
  ) => {
    const d = A(
      `${i ? "spinner-grow" : "spinner-border"}`,
      r && `text-${r}`,
      `${o ? (i ? "spinner-grow-" + o : "spinner-border-" + o) : ""}`,
      e
    );
    return h.jsx(n, { className: d, ref: u, ...s, children: t });
  }
);
Yw.displayName = "MDBSpinner";
const Zw = M.forwardRef(
  (
    {
      className: e,
      children: t,
      border: n,
      background: r,
      tag: i = "div",
      shadow: o,
      alignment: s,
      ...u
    },
    d
  ) => {
    const p = A(
      "card",
      n && `border border-${n}`,
      r && `bg-${r}`,
      o && `shadow-${o}`,
      s && `text-${s}`,
      e
    );
    return h.jsx(i, { className: p, ref: d, ...u, children: t });
  }
);
Zw.displayName = "MDBCard";
const Jw = M.forwardRef(
  (
    {
      className: e,
      children: t,
      border: n,
      background: r,
      tag: i = "div",
      ...o
    },
    s
  ) => {
    const u = A("card-header", n && `border-${n}`, r && `bg-${r}`, e);
    return h.jsx(i, { className: u, ...o, ref: s, children: t });
  }
);
Jw.displayName = "MDBCardHeader";
const qw = M.forwardRef(
  ({ className: e, children: t, tag: n = "p", ...r }, i) => {
    const o = A("card-subtitle", e);
    return h.jsx(n, { className: o, ...r, ref: i, children: t });
  }
);
qw.displayName = "MDBCardSubTitle";
const e1 = M.forwardRef(
  ({ className: e, children: t, tag: n = "h5", ...r }, i) => {
    const o = A("card-title", e);
    return h.jsx(n, { className: o, ...r, ref: i, children: t });
  }
);
e1.displayName = "MDBCardTitle";
const t1 = M.forwardRef(
  ({ className: e, children: t, tag: n = "p", ...r }, i) => {
    const o = A("card-text", e);
    return h.jsx(n, { className: o, ...r, ref: i, children: t });
  }
);
t1.displayName = "MDBCardText";
const n1 = M.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...r }, i) => {
    const o = A("card-body", e);
    return h.jsx(n, { className: o, ...r, ref: i, children: t });
  }
);
n1.displayName = "MDBCardBody";
const r1 = M.forwardRef(
  (
    {
      className: e,
      children: t,
      border: n,
      background: r,
      tag: i = "div",
      ...o
    },
    s
  ) => {
    const u = A("card-footer", n && `border-${n}`, r && `bg-${r}`, e);
    return h.jsx(i, { className: u, ...o, ref: s, children: t });
  }
);
r1.displayName = "MDBCardFooter";
const i1 = M.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...r }, i) => {
    const o = A("card-img-overlay", e);
    return h.jsx(n, { className: o, ...r, ref: i, children: t });
  }
);
i1.displayName = "MDBCardOverlay";
const o1 = M.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...r }, i) => {
    const o = A("card-group", e);
    return h.jsx(n, { className: o, ...r, ref: i, children: t });
  }
);
o1.displayName = "MDBCardGroup";
const s1 = M.forwardRef(
  (
    {
      className: e,
      tag: t = "ul",
      horizontal: n,
      horizontalSize: r,
      light: i,
      numbered: o,
      children: s,
      small: u,
      ...d
    },
    p
  ) => {
    const y = A(
      "list-group",
      n && (r ? `list-group-horizontal-${r}` : "list-group-horizontal"),
      i && "list-group-light",
      o && "list-group-numbered",
      u && "list-group-small",
      e
    );
    return h.jsx(t, { className: y, ref: p, ...d, children: s });
  }
);
s1.displayName = "MDBListGroup";
const l1 = M.forwardRef(
  (
    {
      className: e,
      tag: t = "li",
      active: n,
      disabled: r,
      action: i,
      color: o,
      children: s,
      noBorders: u,
      ...d
    },
    p
  ) => {
    const y = t === "button",
      w = A(
        "list-group-item",
        n && "active",
        r && !y && "disabled",
        i && "list-group-item-action",
        o && `list-group-item-${o}`,
        u && "border-0",
        e
      );
    return h.jsx(t, {
      className: w,
      disabled: y && r,
      ref: p,
      ...d,
      children: s,
    });
  }
);
l1.displayName = "MDBListGroupItem";
const Ki = M.forwardRef(
  (
    {
      around: e,
      between: t,
      bottom: n,
      center: r,
      children: i,
      className: o,
      evenly: s,
      end: u,
      middle: d,
      start: p,
      tag: y = "div",
      top: w,
      ...c
    },
    C
  ) => {
    const x = A(
      "row",
      e && "justify-content-around",
      t && "justify-content-between",
      n && "align-self-end",
      r && "justify-content-center",
      s && "justifty-content-evenly",
      u && "justify-content-end",
      d && "align-self-center",
      p && "justify-content-start",
      w && "align-self-start",
      o
    );
    return h.jsx(y, { className: x, ...c, ref: C, children: i });
  }
);
Ki.displayName = "MDBRow";
const Ai = ({
    animate: e,
    className: t,
    icon: n,
    fab: r,
    fas: i,
    fal: o,
    far: s,
    flag: u,
    spin: d,
    fixed: p,
    flip: y,
    list: w,
    size: c,
    pull: C,
    pulse: x,
    color: E,
    border: m,
    rotate: l,
    inverse: a,
    stack: f,
    iconType: g,
    children: N,
    ..._
  }) => {
    let S;
    u
      ? (S = "flag")
      : r
      ? (S = "fab")
      : i
      ? (S = "fas")
      : s
      ? (S = "far")
      : o
      ? (S = "fal")
      : (S = "fa");
    const k = A(
      g ? `fa-${g}` : S,
      e && `fa-${e}`,
      u ? `flag-${u}` : n && `fa-${n}`,
      c && `fa-${c}`,
      E && `text-${E}`,
      m && "fa-border",
      l && `fa-rotate-${l}`,
      C && `fa-pull-${C}`,
      d && !e && "fa-spin",
      w && "fa-li",
      p && "fa-fw",
      x && !e && "fa-pulse",
      a && "fa-inverse",
      y && `fa-flip-${y}`,
      f && `fa-stack-${f}`,
      t
    );
    return h.jsx("i", { className: k, ..._, children: N });
  },
  a1 = M.forwardRef(
    (
      {
        className: e,
        children: t,
        tag: n = "p",
        variant: r,
        color: i,
        blockquote: o,
        note: s,
        noteColor: u,
        listUnStyled: d,
        listInLine: p,
        ...y
      },
      w
    ) => {
      const c = A(
        r && r,
        o && "blockquote",
        s && "note",
        i && `text-${i}`,
        u && `note-${u}`,
        d && "list-unstyled",
        p && "list-inline",
        e
      );
      return (
        o && (n = "blockquote"),
        (d || p) && (n = "ul"),
        h.jsx(n, { className: c, ref: w, ...y, children: t })
      );
    }
  );
a1.displayName = "MDBTypography";
const u1 = M.forwardRef(
  ({ className: e, color: t, uppercase: n, bold: r, children: i, ...o }, s) => {
    const u = A(
      "breadcrumb",
      r && "font-weight-bold",
      t && `text-${t}`,
      n && "text-uppercase",
      e
    );
    return h.jsx("nav", {
      "aria-label": "breadcrumb",
      children: h.jsx("ol", { className: u, ref: s, ...o, children: i }),
    });
  }
);
u1.displayName = "MDBBreadcrumb";
const c1 = M.forwardRef(
  ({ className: e, active: t, current: n = "page", children: r, ...i }, o) => {
    const s = A("breadcrumb-item", t && "active", e);
    return h.jsx("li", {
      className: s,
      ref: o,
      "aria-current": t && n,
      ...i,
      children: r,
    });
  }
);
c1.displayName = "MDBBreadcrumbItem";
const d1 = (e) => {
    if (e !== !1) return `navbar-expand-${e}`;
  },
  f1 = M.forwardRef(
    (
      {
        className: e,
        children: t,
        light: n,
        dark: r,
        scrolling: i,
        fixed: o,
        sticky: s,
        scrollingNavbarOffset: u,
        color: d,
        transparent: p,
        expand: y,
        tag: w = "nav",
        bgColor: c,
        ...C
      },
      x
    ) => {
      const [E, m] = v.useState(!1),
        l = A(
          {
            "navbar-light": n,
            "navbar-dark": r,
            "scrolling-navbar": i || u,
            "top-nav-collapse": E,
            [`text-${d}`]: d && p ? E : d,
          },
          o && `fixed-${o}`,
          s && "sticky-top",
          "navbar",
          y && d1(y),
          c && `bg-${c}`,
          e
        ),
        a = v.useCallback(() => {
          u && window.pageYOffset > u ? m(!0) : m(!1);
        }, [u]);
      return (
        v.useEffect(
          () => (
            (i || u) && window.addEventListener("scroll", a),
            () => {
              window.removeEventListener("scroll", a);
            }
          ),
          [a, i, u]
        ),
        h.jsx(w, {
          className: l,
          role: "navigation",
          ...C,
          ref: x,
          children: t,
        })
      );
    }
  );
f1.displayName = "MDBNavbar";
const p1 = M.forwardRef(
  (
    {
      children: e,
      className: t = "",
      disabled: n = !1,
      active: r = !1,
      tag: i = "a",
      ...o
    },
    s
  ) => {
    const u = A("nav-link", n ? "disabled" : r ? "active" : "", t);
    return h.jsx(i, {
      "data-test": "nav-link",
      className: u,
      style: { cursor: "pointer" },
      ref: s,
      ...o,
      children: e,
    });
  }
);
p1.displayName = "MDBNavbarLink";
const h1 = M.forwardRef(
  ({ className: e, children: t, tag: n = "a", ...r }, i) => {
    const o = A("navbar-brand", e);
    return h.jsx(n, { className: o, ref: i, ...r, children: t });
  }
);
h1.displayName = "MDBNavbarBrand";
const m1 = M.forwardRef(
  (
    { children: e, className: t, active: n, text: r, tag: i = "li", ...o },
    s
  ) => {
    const u = A("nav-item", n && "active", r && "navbar-text", t);
    return h.jsx(i, { ...o, className: u, ref: s, children: e });
  }
);
m1.displayName = "MDBNavbarItem";
const g1 = M.forwardRef(
  (
    {
      children: e,
      className: t,
      right: n,
      fullWidth: r = !0,
      left: i,
      tag: o = "ul",
      ...s
    },
    u
  ) => {
    const d = A("navbar-nav", r && "w-100", n && "ms-auto", i && "me-auto", t);
    return h.jsx(o, { className: d, ref: u, ...s, children: e });
  }
);
g1.displayName = "MDBNavbarNav";
const v1 = M.forwardRef(
  ({ children: e, className: t, tag: n = "button", ...r }, i) => {
    const o = A("navbar-toggler", t);
    return h.jsx(n, { ...r, className: o, ref: i, children: e });
  }
);
v1.displayName = "MDBNavbarToggler";
const Oh = M.forwardRef(
  ({ children: e, bgColor: t, color: n, className: r, ...i }, o) => {
    const s = A(t && `bg-${t}`, n && `text-${n}`, r);
    return h.jsx("footer", { className: s, ...i, ref: o, children: e });
  }
);
Oh.displayName = "MDBFooter";
const y1 = M.forwardRef(
  (
    {
      children: e,
      size: t,
      circle: n,
      center: r,
      end: i,
      start: o,
      className: s,
      ...u
    },
    d
  ) => {
    const p = A(
      "pagination",
      r && "justify-content-center",
      n && "pagination-circle",
      i && "justify-content-end",
      t && `pagination-${t}`,
      o && "justify-content-start",
      s
    );
    return h.jsx("ul", { className: p, ...u, ref: d, children: e });
  }
);
y1.displayName = "MDBPagination";
const w1 = M.forwardRef(
  ({ children: e, className: t, tag: n = "a", ...r }, i) => {
    const o = A("page-link", t);
    return h.jsx(n, { className: o, ...r, ref: i, children: e });
  }
);
w1.displayName = "MDBPaginationLink";
const x1 = M.forwardRef(
  ({ children: e, className: t, active: n, disabled: r, ...i }, o) => {
    const s = A("page-item", n && "active", r && "disabled", t);
    return h.jsx("li", { className: s, ...i, ref: o, children: e });
  }
);
x1.displayName = "MDBPaginationItem";
const Mh = M.forwardRef(
  (
    {
      animated: e,
      children: t,
      className: n,
      style: r,
      tag: i = "div",
      valuenow: o,
      valuemax: s,
      striped: u,
      bgColor: d,
      valuemin: p,
      width: y,
      ...w
    },
    c
  ) => {
    const C = A(
        "progress-bar",
        d && `bg-${d}`,
        u && "progress-bar-striped",
        e && "progress-bar-animated",
        n
      ),
      x = { width: `${y}%`, ...r };
    return h.jsx(i, {
      className: C,
      style: x,
      ref: c,
      role: "progressbar",
      ...w,
      "aria-valuenow": Number(y) ?? o,
      "aria-valuemin": Number(p),
      "aria-valuemax": Number(s),
      children: t,
    });
  }
);
Mh.displayName = "MDBProgressBar";
const C1 = M.forwardRef(
  (
    { className: e, children: t, tag: n = "div", height: r, style: i, ...o },
    s
  ) => {
    const u = A("progress", e),
      d = { height: `${r}px`, ...i };
    return h.jsx(n, {
      className: u,
      ref: s,
      style: d,
      ...o,
      children: M.Children.map(t, (p) => {
        if (!M.isValidElement(p) || p.type !== Mh) {
          console.error("Progress component only allows ProgressBar as child");
          return;
        } else return p;
      }),
    });
  }
);
C1.displayName = "MDBProgress";
const E1 = (e) => {
    const [t, n] = v.useState(!1),
      [r, i] = v.useState(null);
    return (
      v.useEffect(() => {
        i(
          () =>
            new IntersectionObserver(([o]) => {
              n(o.isIntersecting);
            })
        );
      }, []),
      v.useEffect(() => {
        if (!(!e.current || !r))
          return r.observe(e.current), () => r.disconnect();
      }, [r, e]),
      t
    );
  },
  _1 = M.forwardRef(
    (
      {
        className: e,
        size: t,
        contrast: n,
        value: r,
        defaultValue: i,
        id: o,
        labelClass: s,
        wrapperClass: u,
        wrapperStyle: d,
        wrapperTag: p = "div",
        label: y,
        onChange: w,
        children: c,
        labelRef: C,
        labelStyle: x,
        type: E,
        onBlur: m,
        readonly: l = !1,
        showCounter: a = !1,
        ...f
      },
      g
    ) => {
      var N;
      const [_, S] = v.useState(i),
        k = v.useMemo(() => (r !== void 0 ? r : _), [r, _]),
        [D, T] = v.useState(0),
        [z, U] = v.useState(!1),
        [q, B] = v.useState(0),
        W = v.useRef(null),
        J = E1(W),
        K = v.useRef(null),
        j = C || K;
      v.useImperativeHandle(g, () => W.current);
      const P = A("form-outline", n && "form-white", u),
        L = A(
          "form-control",
          z && "active",
          E === "date" && "active",
          t && `form-control-${t}`,
          e
        ),
        $ = A("form-label", s),
        V = v.useCallback(() => {
          var X;
          (X = j.current) != null &&
            X.clientWidth &&
            T(j.current.clientWidth * 0.8 + 8);
        }, [j]),
        ne = (X) => {
          S(X.target.value), a && B(X.target.value.length), w == null || w(X);
        },
        te = v.useCallback(
          (X) => {
            W.current && (U(!!k), m && m(X));
          },
          [k, m]
        );
      return (
        v.useEffect(() => {
          V();
        }, [(N = j.current) == null ? void 0 : N.clientWidth, V, J]),
        v.useEffect(() => {
          if (k) return U(!0);
          U(!1);
        }, [k]),
        h.jsxs(p, {
          className: P,
          style: d,
          children: [
            h.jsx("input", {
              type: E,
              readOnly: l,
              className: L,
              onBlur: te,
              onChange: ne,
              onFocus: V,
              value: r,
              defaultValue: i,
              id: o,
              ref: W,
              ...f,
            }),
            y &&
              h.jsx("label", {
                className: $,
                style: x,
                htmlFor: o,
                ref: j,
                children: y,
              }),
            h.jsxs("div", {
              className: "form-notch",
              children: [
                h.jsx("div", { className: "form-notch-leading" }),
                h.jsx("div", {
                  className: "form-notch-middle",
                  style: { width: D },
                }),
                h.jsx("div", { className: "form-notch-trailing" }),
              ],
            }),
            c,
            a &&
              f.maxLength &&
              h.jsx("div", {
                className: "form-helper",
                children: h.jsx("div", {
                  className: "form-counter",
                  children: `${q}/${f.maxLength}`,
                }),
              }),
          ],
        })
      );
    }
  );
_1.displayName = "MDBInput";
const N1 = v.forwardRef(
  (
    {
      className: e,
      inputRef: t,
      labelClass: n,
      wrapperClass: r,
      labelStyle: i,
      wrapperTag: o = "div",
      wrapperStyle: s,
      label: u,
      inline: d,
      btn: p,
      id: y,
      btnColor: w,
      disableWrapper: c,
      toggleSwitch: C,
      ...x
    },
    E
  ) => {
    let m = "form-check-input",
      l = "form-check-label";
    p &&
      ((m = "btn-check"), w ? (l = `btn btn-${w}`) : (l = "btn btn-primary"));
    const a = A(
        u && !p && "form-check",
        d && !p && "form-check-inline",
        C && "form-switch",
        r
      ),
      f = A(m, e),
      g = A(l, n),
      N = h.jsxs(h.Fragment, {
        children: [
          h.jsx("input", { className: f, id: y, ref: t, ...x }),
          u &&
            h.jsx("label", { className: g, style: i, htmlFor: y, children: u }),
        ],
      });
    return h.jsx(h.Fragment, {
      children: c
        ? N
        : h.jsx(o, { style: s, className: a, ref: E, children: N }),
    });
  }
);
N1.displayName = "InputTemplate";
const S1 = ({
  className: e,
  children: t,
  open: n = !1,
  id: r,
  navbar: i,
  tag: o = "div",
  collapseRef: s,
  style: u,
  onOpen: d,
  onClose: p,
  ...y
}) => {
  const [w, c] = v.useState(!1),
    [C, x] = v.useState(void 0),
    [E, m] = v.useState(!1),
    l = A(
      E ? "collapsing" : "collapse",
      !E && w && "show",
      i && "navbar-collapse",
      e
    ),
    a = v.useRef(null),
    f = s ?? a,
    g = v.useCallback(() => {
      w && x(void 0);
    }, [w]);
  return (
    v.useEffect(() => {
      var N;
      C === void 0 &&
        w &&
        x(
          (N = f == null ? void 0 : f.current) == null ? void 0 : N.scrollHeight
        );
    }, [C, w, f]),
    v.useEffect(() => {
      w !== n && (n ? d == null || d() : p == null || p(), c(n)), w && m(!0);
      const N = setTimeout(() => {
        m(!1);
      }, 350);
      return () => {
        clearTimeout(N);
      };
    }, [n, w, d, p]),
    v.useEffect(() => {
      var N;
      x(
        w
          ? (N = f == null ? void 0 : f.current) == null
            ? void 0
            : N.scrollHeight
          : 0
      );
    }, [w, f, t]),
    v.useEffect(
      () => (
        window.addEventListener("resize", g),
        () => {
          window.removeEventListener("resize", g);
        }
      ),
      [g]
    ),
    h.jsx(o, {
      style: { height: C, ...u },
      id: r,
      className: l,
      ...y,
      ref: f,
      children: t,
    })
  );
};
v.createContext(null);
const k1 = M.forwardRef(
  (
    {
      className: e,
      centered: t,
      children: n,
      size: r,
      scrollable: i,
      tag: o = "div",
      ...s
    },
    u
  ) => {
    const d = A(
      "modal-dialog",
      i && "modal-dialog-scrollable",
      t && "modal-dialog-centered",
      r && `modal-${r}`,
      e
    );
    return h.jsx(o, { className: d, ...s, ref: u, children: n });
  }
);
k1.displayName = "MDBModalDialog";
const j1 = M.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...r }, i) => {
    const o = A("modal-content", e);
    return h.jsx(n, { className: o, ...r, ref: i, children: t });
  }
);
j1.displayName = "MDBModalContent";
const R1 = M.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...r }, i) => {
    const o = A("modal-header", e);
    return h.jsx(n, { className: o, ...r, ref: i, children: t });
  }
);
R1.displayName = "MDBModalHeader";
const T1 = M.forwardRef(
  ({ className: e, children: t, tag: n = "h5", ...r }, i) => {
    const o = A("modal-title", e);
    return h.jsx(n, { className: o, ...r, ref: i, children: t });
  }
);
T1.displayName = "MDBModalTitle";
const O1 = M.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...r }, i) => {
    const o = A("modal-body", e);
    return h.jsx(n, { className: o, ...r, ref: i, children: t });
  }
);
O1.displayName = "MDBModalBody";
const M1 = M.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...r }, i) => {
    const o = A("modal-footer", e);
    return h.jsx(n, { className: o, ...r, ref: i, children: t });
  }
);
M1.displayName = "MDBModalFooter";
M.createContext({ activeElement: null, setTargets: null });
const P1 = v.forwardRef(
  (
    {
      className: e,
      labelClass: t,
      labelStyle: n,
      inputRef: r,
      size: i,
      label: o,
      id: s,
      ...u
    },
    d
  ) => {
    const p = A("form-control", `form-control-${i}`, e),
      y = A("form-label", t),
      w = v.useRef(null);
    return (
      v.useImperativeHandle(
        d,
        () => w.current || (r == null ? void 0 : r.current)
      ),
      h.jsxs(h.Fragment, {
        children: [
          o &&
            h.jsx("label", { className: y, style: n, htmlFor: s, children: o }),
          h.jsx("input", { className: p, type: "file", id: s, ref: w, ...u }),
        ],
      })
    );
  }
);
P1.displayName = "MDBFile";
const A1 = M.forwardRef(
  (
    {
      className: e,
      children: t,
      noBorder: n,
      textBefore: r,
      textAfter: i,
      noWrap: o,
      tag: s = "div",
      textTag: u = "span",
      textClass: d,
      size: p,
      textProps: y,
      ...w
    },
    c
  ) => {
    const C = A("input-group", o && "flex-nowrap", p && `input-group-${p}`, e),
      x = A("input-group-text", n && "border-0", d),
      E = (m) =>
        h.jsx(h.Fragment, {
          children:
            m && Array.isArray(m)
              ? m.map((l, a) =>
                  h.jsx(u, { className: x, ...y, children: l }, a)
                )
              : h.jsx(u, { className: x, ...y, children: m }),
        });
    return h.jsxs(s, {
      className: C,
      ref: c,
      ...w,
      children: [r && E(r), t, i && E(i)],
    });
  }
);
A1.displayName = "MDBInputGroup";
const L1 = M.forwardRef(
  (
    {
      className: e,
      children: t,
      isValidated: n = !1,
      onReset: r,
      onSubmit: i,
      noValidate: o = !0,
      ...s
    },
    u
  ) => {
    const [d, p] = v.useState(n),
      y = A("needs-validation", d && "was-validated", e),
      w = (C) => {
        C.preventDefault(), p(!0), i && i(C);
      },
      c = (C) => {
        C.preventDefault(), p(!1), r && r(C);
      };
    return (
      v.useEffect(() => {
        p(n);
      }, [n]),
      h.jsx("form", {
        className: y,
        onSubmit: w,
        onReset: c,
        ref: u,
        noValidate: o,
        ...s,
        children: t,
      })
    );
  }
);
L1.displayName = "MDBValidation";
const D1 = M.forwardRef(
  ({ className: e, fill: t, pills: n, justify: r, children: i, ...o }, s) => {
    const u = A(
      "nav",
      n ? "nav-pills" : "nav-tabs",
      t && "nav-fill",
      r && "nav-justified",
      e
    );
    return h.jsx("ul", { className: u, ref: s, ...o, children: i });
  }
);
D1.displayName = "MDBTabs";
const z1 = M.forwardRef(
  ({ className: e, children: t, style: n, tag: r = "li", ...i }, o) => {
    const s = A("nav-item", e);
    return h.jsx(r, {
      className: s,
      style: { cursor: "pointer", ...n },
      role: "presentation",
      ref: o,
      ...i,
      children: t,
    });
  }
);
z1.displayName = "MDBTabsItem";
const I1 = M.forwardRef(
  (
    {
      className: e,
      color: t,
      active: n,
      onOpen: r,
      onClose: i,
      children: o,
      ...s
    },
    u
  ) => {
    const d = A("nav-link", n && "active", t && `bg-${t}`, e);
    return (
      v.useEffect(() => {
        n ? r == null || r() : i == null || i();
      }, [n]),
      h.jsx("a", { className: d, ref: u, ...s, children: o })
    );
  }
);
I1.displayName = "MDBTabsLink";
const $1 = M.forwardRef(
  ({ className: e, tag: t = "div", children: n, ...r }, i) => {
    const o = A("tab-content", e);
    return h.jsx(t, { className: o, ref: i, ...r, children: n });
  }
);
$1.displayName = "MDBTabsContent";
const B1 = M.forwardRef(
  ({ className: e, tag: t = "div", open: n, children: r, ...i }, o) => {
    const [s, u] = v.useState(!1),
      d = A("tab-pane", "fade", s && "show", n && "active", e);
    return (
      v.useEffect(() => {
        let p;
        return (
          n
            ? (p = setTimeout(() => {
                u(!0);
              }, 100))
            : u(!1),
          () => {
            clearTimeout(p);
          }
        );
      }, [n]),
      h.jsx(t, { className: d, role: "tabpanel", ref: o, ...i, children: r })
    );
  }
);
B1.displayName = "MDBTabsPane";
v.createContext({ active: 0 });
const Ph = M.createContext({
    activeItem: 0,
    setActiveItem: null,
    alwaysOpen: !1,
    initialActive: 0,
  }),
  F1 = M.forwardRef(
    (
      {
        alwaysOpen: e,
        borderless: t,
        className: n,
        flush: r,
        active: i,
        initialActive: o = 0,
        tag: s = "div",
        children: u,
        onChange: d,
        ...p
      },
      y
    ) => {
      const w = v.useMemo(() => typeof i < "u", [i]),
        c = A(
          "accordion",
          r && "accordion-flush",
          t && "accordion-borderless",
          n
        ),
        [C, x] = v.useState(o);
      return h.jsx(s, {
        className: c,
        ref: y,
        ...p,
        children: h.jsx(Ph.Provider, {
          value: {
            activeItem: w ? i : C,
            setActiveItem: x,
            alwaysOpen: e,
            initialActive: o,
            onChange: d,
          },
          children: u,
        }),
      });
    }
  );
F1.displayName = "MDBAccordion";
const U1 = M.forwardRef(
  (
    {
      className: e,
      bodyClassName: t,
      bodyStyle: n,
      headerClassName: r,
      collapseId: i,
      headerTitle: o,
      headerStyle: s,
      btnClassName: u,
      tag: d = "div",
      children: p,
      ...y
    },
    w
  ) => {
    const {
        activeItem: c,
        setActiveItem: C,
        alwaysOpen: x,
        onChange: E,
      } = v.useContext(Ph),
      m = v.useMemo(() => (Array.isArray(c) ? c.includes(i) : c === i), [c, i]),
      l = A("accordion-item", e),
      a = A("accordion-header", r),
      f = A("accordion-body", t),
      g = A("accordion-button", !m && "collapsed", u),
      N = v.useCallback(
        (_) => {
          let S = _;
          Array.isArray(c)
            ? c.includes(_)
              ? (S = c.filter((k) => k !== _))
              : (S = x ? [...c, _] : [_])
            : ((S = c === _ ? 0 : _), x && (S = [S])),
            E == null || E(S),
            C(S);
        },
        [E, c, C, x]
      );
    return h.jsxs(d, {
      className: l,
      ref: w,
      ...y,
      children: [
        h.jsx("h2", {
          className: a,
          style: s,
          children: h.jsx("button", {
            onClick: () => N(i),
            className: g,
            type: "button",
            children: o,
          }),
        }),
        h.jsx(S1, {
          id: i.toString(),
          open: m,
          children: h.jsx("div", { className: f, style: n, children: p }),
        }),
      ],
    });
  }
);
U1.displayName = "MDBAccordionItem";
function b1() {
  return h.jsxs(Oh, {
    className: "text-center text-lg-start",
    children: [
      h.jsx("section", {
        style: {
          backgroundColor: "black",
          color: "white",
          marginTop: "3rem",
          paddingTop: "1rem",
        },
        children: h.jsx(Rh, {
          className: "text-center ",
          children: h.jsxs(Ki, {
            style: { display: "flex", justifyContent: "center" },
            children: [
              h.jsxs(un, {
                sm: "12",
                md: "6",
                lg: "4",
                xl: "4",
                children: [
                  h.jsxs("h6", {
                    className: "text-uppercase fw-bold mb-3",
                    children: [
                      h.jsx(Ai, { icon: "gem", className: "me-3" }),
                      "SayMi Perfumes",
                    ],
                  }),
                  h.jsx("p", {
                    children:
                      "Cualquier duda, aclaracion o negociacion no dudes en contactarnos en el numero de whatsapp mostrado en este apartado.",
                  }),
                ],
              }),
              h.jsx(un, {
                sm: "12",
                md: "6",
                lg: "6",
                xl: "6",
                children: h.jsxs(Ki, {
                  children: [
                    h.jsxs(un, {
                      children: [
                        h.jsx("h6", {
                          className: "text-uppercase fw-bold mb-3",
                          children: "Products",
                        }),
                        h.jsxs(Ki, {
                          children: [
                            h.jsxs(un, {
                              l: "1",
                              children: [
                                h.jsx("p", {
                                  children: h.jsx("a", {
                                    href: "#!",
                                    className: "text-reset",
                                    style: { textDecoration: "none" },
                                    children: "Dama",
                                  }),
                                }),
                                h.jsx("p", {
                                  children: h.jsx("a", {
                                    href: "#!",
                                    className: "text-reset",
                                    style: { textDecoration: "none" },
                                    children: "Caballero",
                                  }),
                                }),
                              ],
                            }),
                            h.jsxs(un, {
                              children: [
                                h.jsx("p", {
                                  children: h.jsx("a", {
                                    href: "#!",
                                    className: "text-reset",
                                    style: { textDecoration: "none" },
                                    children: "Juveniles",
                                  }),
                                }),
                                h.jsx("p", {
                                  children: h.jsx("a", {
                                    href: "#!",
                                    className: "text-reset",
                                    style: { textDecoration: "none" },
                                    children: "Nuevos productos",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    h.jsxs(un, {
                      children: [
                        h.jsx("h6", {
                          className: "text-uppercase fw-bold mb-3",
                          children: "Contact",
                        }),
                        h.jsxs("p", {
                          children: [
                            h.jsx(Ai, { icon: "home", className: "me-2" }),
                            "Culiacan, Sinaloa, MX",
                          ],
                        }),
                        h.jsxs("p", {
                          children: [
                            h.jsx(Ai, { icon: "phone", className: "me-3" }),
                            " +52 667 327 3363",
                          ],
                        }),
                        h.jsxs("p", {
                          children: [
                            h.jsx(Ai, { icon: "envelope", className: "me-3" }),
                            "my_sandia@hotmail.com",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
      h.jsx("div", {
        className: "text-center p-3",
        style: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
        children: "© 2024 Copyright",
      }),
    ],
  });
}
const Za = ({ _id: e, name: t, price: n, imgUrl: r, transfer: i }) => {
    const o = ep(),
      s = sr(),
      u = () => {
        e && o(`/shopping-cart/${e}`);
      },
      {
        itemQuantity: d,
        increaseQuantity: p,
        decreaseQuantity: y,
        removeFromCart: w,
      } = Wo(),
      c = async () => (s ? await d(e, s.username) : 0),
      [C, x] = v.useState(null);
    if (
      (v.useEffect(() => {
        c()
          .then((a) => {
            x(a);
          })
          .catch((a) => {
            console.error("Error fetching quantity:", a), x(0);
          });
      }, [p, y, w]),
      C === null)
    )
      return h.jsx("div", {});
    const E = async () => {
        if (s) {
          await p(e, s.username);
          const a = await c();
          await x(a);
        }
      },
      m = async () => {
        if (s) {
          await y(e, s.username);
          const a = await c();
          await x(a);
        }
      },
      l = async () => {
        if (s) {
          await w(e, s.username), await i();
          const a = await c();
          await x(a);
        }
      };
    return h.jsxs(Mi, {
      className: "h-100 m-3",
      children: [
        h.jsx(Mi.Img, {
          variant: "top",
          src: r,
          height: "200px",
          style: { objectFit: "contain", marginTop: "1rem" },
          onClick: () => u(),
        }),
        h.jsxs(Mi.Body, {
          className: "d-flex flex-column",
          children: [
            h.jsxs(Mi.Title, {
              className:
                "d-flex justify-content-space-between align-items-center mb-2 gap-2",
              children: [
                h.jsx("span", { className: "fs-0.5 w-100", children: t }),
                h.jsx("span", { className: "ms-2", children: Kn(n) }),
              ],
            }),
            s
              ? h.jsx("div", {
                  className: "w-100",
                  children:
                    C === 0
                      ? h.jsxs(xt, {
                          className: "w-100",
                          onClick: E,
                          children: [
                            "+ Añadir al carrito ",
                            h.jsx("i", { className: "bi bi-cart" }),
                          ],
                        })
                      : h.jsxs("div", {
                          className: "d-flex align-items-center flex-column",
                          style: { gap: "0.5rem" },
                          children: [
                            h.jsxs("div", {
                              className:
                                "d-flex align-items-center justify-content-center",
                              style: { gap: "0.5rem" },
                              children: [
                                h.jsx(xt, { onClick: m, children: "-" }),
                                h.jsxs("div", {
                                  children: [
                                    h.jsxs("span", {
                                      className: "fs-3",
                                      children: [C, " "],
                                    }),
                                    "en el ",
                                    h.jsx("i", { className: "bi bi-cart" }),
                                  ],
                                }),
                                h.jsx(xt, { onClick: E, children: "+" }),
                              ],
                            }),
                            h.jsx(xt, {
                              variant: "danger",
                              size: "sm",
                              style: { borderRadius: 10 },
                              onClick: l,
                              children: "Remove",
                            }),
                          ],
                        }),
                })
              : h.jsx("div", {}),
          ],
        }),
      ],
    });
  },
  W1 = () => {
    const { perfumes: e, loading: t } = ai(),
      [n, r] = v.useState(!0);
    function i() {
      r(!n), console.log(n);
    }
    return h.jsx("div", {
      children: t
        ? h.jsx("h1", {})
        : h.jsxs("div", {
            children: [
              h.jsx("h1", {
                className: "container-fluid",
                style: {
                  textAlign: "center",
                  backgroundColor: "rgba(255, 192, 203, 0.8)",
                  color: "white",
                },
                children: "- Dama -",
              }),
              h.jsx("h3", {
                style: { marginLeft: "1rem", textAlign: "center" },
                children: "Encuentra tu esencia única en cada gota",
              }),
              h.jsx("iframe", {
                width: "97%",
                height: "315",
                src: "https://www.youtube.com/embed/e2FvWGSSXTY?si=UkSXYBKUswWATKUU",
                style: { display: "block", margin: "2rem auto" },
              }),
              h.jsx("h2", {
                style: { marginLeft: "1rem" },
                children: "Descubre nuestra nueva coleccion",
              }),
              h.jsx(Ya, {
                xs: 1,
                md: 2,
                lg: 3,
                className: "g-3",
                children: e
                  .filter((o) => o.categoria === "dama")
                  .map((o) =>
                    h.jsx(
                      Va,
                      { children: h.jsx(Za, { ...o, transfer: i }) },
                      o._id
                    )
                  ),
              }),
            ],
          }),
    });
  },
  H1 = () => {
    const { perfumes: e, loading: t } = ai(),
      [n, r] = v.useState(!0);
    function i() {
      r(!n), console.log(n);
    }
    return h.jsx("div", {
      children: t
        ? h.jsx("h1", {})
        : h.jsxs("div", {
            children: [
              h.jsx("h1", {
                style: { marginLeft: "1rem", textAlign: "center" },
                children: "- Caballero -",
              }),
              h.jsx("iframe", {
                width: "97%",
                height: "315",
                src: "https://www.youtube.com/embed/e2FvWGSSXTY?si=UkSXYBKUswWATKUU",
                style: { display: "block", margin: " 2rem auto" },
              }),
              h.jsx("h2", {
                style: { marginLeft: "1rem" },
                children: "There is a variety of products to choose from",
              }),
              h.jsx(Ya, {
                xs: 1,
                md: 2,
                lg: 3,
                className: "g-3",
                children: e
                  .filter((o) => o.categoria === "caballero")
                  .map((o) =>
                    h.jsx(
                      Va,
                      { children: h.jsx(Za, { ...o, transfer: i }) },
                      o._id
                    )
                  ),
              }),
            ],
          }),
    });
  },
  V1 = () => {
    const { perfumes: e, loading: t } = ai(),
      [n, r] = v.useState(!0);
    function i() {
      r(!n), console.log(n);
    }
    return h.jsx("div", {
      children: t
        ? h.jsx("h1", {})
        : h.jsxs("div", {
            children: [
              h.jsx("h1", {
                style: { marginLeft: "1rem", textAlign: "center" },
                children: "- Unisex -",
              }),
              h.jsx("iframe", {
                width: "97%",
                height: "315",
                src: "https://www.youtube.com/embed/e2FvWGSSXTY?si=UkSXYBKUswWATKUU",
                style: { display: "block", margin: " 2rem auto" },
              }),
              h.jsx("h2", {
                style: { marginLeft: "1rem" },
                children: "From boardgames to apparels",
              }),
              h.jsx(Ya, {
                xs: 1,
                md: 2,
                lg: 3,
                className: "g-3",
                children: e
                  .filter((o) => o.categoria === "unisex")
                  .map((o) =>
                    h.jsx(
                      Va,
                      { children: h.jsx(Za, { ...o, transfer: i }) },
                      o._id
                    )
                  ),
              }),
            ],
          }),
    });
  },
  Q1 = () => h.jsx("div", {}),
  K1 = () => {
    const [e, t] = v.useState(),
      { _id: n } = Av();
    return (
      v.useEffect(() => {
        (async () => {
          try {
            const i = await fetch(
              `https://shopping-cart-production-4ea1.up.railway.app/perfumes/${n}`
            );
            if (!i.ok) throw new Error("Failed to fetch data from the server");
            const o = await i.json();
            t(o);
          } catch (i) {
            console.error("Error fetching store perfumes:", i);
          }
        })();
      }, [n]),
      e
        ? h.jsx("div", {
            className: "container",
            children: h.jsx("div", {
              className: "card mb-3",
              style: { maxWidth: "90vw" },
              children: h.jsxs("div", {
                className: "row g-0",
                children: [
                  h.jsx("div", {
                    className:
                      "col-md-5 d-flex justify-content-center align-items-center",
                    children: h.jsx("img", {
                      src: e.imgUrl,
                      className: "rounded-start item-page",
                      alt: "...",
                      style: { maxHeight: "500px" },
                    }),
                  }),
                  h.jsx("div", {
                    className: "col-md-7 bg-light",
                    children: h.jsxs("div", {
                      className: "card-body",
                      children: [
                        h.jsxs("div", {
                          className: "text-center",
                          children: [
                            h.jsx("h5", {
                              className: "card-title",
                              children: e.name,
                            }),
                            h.jsx("p", {
                              className: "card-text text-start",
                              style: { margin: "auto" },
                              children:
                                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt sit veniam, aspernatur modi enim excepturi ex ullam, dicta delectus distinctio iusto officia mollitia eius eveniet totam ad! Consequuntur, aspernatur atque.",
                            }),
                          ],
                        }),
                        h.jsxs("div", {
                          className: "perfume-description-carrito",
                          children: [
                            h.jsxs("div", {
                              children: [
                                h.jsxs("h6", {
                                  children: [
                                    "Categoria: ",
                                    e.categoria.charAt(0).toUpperCase() +
                                      e.categoria.slice(1),
                                  ],
                                }),
                                h.jsxs("h6", { children: ["Tipo: ", e.type] }),
                                h.jsxs("h6", {
                                  children: ["Aroma: ", e.aroma],
                                }),
                                h.jsxs("h6", {
                                  className: "bg-secondary text-light p-2",
                                  children: ["Precio: $", e.price, " MXN"],
                                }),
                              ],
                            }),
                            h.jsxs("button", {
                              children: [
                                "Añadir al carrito ",
                                h.jsx("i", { className: "bi bi-cart" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          })
        : h.jsx("div", { children: "Loading..." })
    );
  };
function X1() {
  return h.jsx(kw, {
    children: h.jsx(jw, {
      children: h.jsxs(Sw, {
        children: [
          h.jsx(Hw, {}),
          h.jsxs("div", {
            children: [
              h.jsxs(Xv, {
                children: [
                  h.jsx(ln, { path: "/shopping-cart", element: h.jsx(zw, {}) }),
                  h.jsx(ln, {
                    path: "/shopping-cart/dama",
                    element: h.jsx(W1, {}),
                  }),
                  h.jsx(ln, {
                    path: "/shopping-cart/caballero",
                    element: h.jsx(H1, {}),
                  }),
                  h.jsx(ln, {
                    path: "/shopping-cart/Unisex",
                    element: h.jsx(V1, {}),
                  }),
                  h.jsx(ln, {
                    path: "/shopping-cart/about",
                    element: h.jsx(Q1, {}),
                  }),
                  h.jsx(ln, {
                    path: "/shopping-cart/:_id",
                    element: h.jsx(K1, {}),
                  }),
                ],
              }),
              h.jsx(b1, {}),
            ],
          }),
        ],
      }),
    }),
  });
}
Ds.createRoot(document.getElementById("root")).render(
  h.jsx(ny, { children: h.jsx(X1, {}) })
);
