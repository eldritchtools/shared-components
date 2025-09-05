function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { createContext, useContext } from "react";
import db from "../db/db";
import useDBState from "../db/useDBState";
import { jsx as _jsx } from "react/jsx-runtime";
var ProfileContext = /*#__PURE__*/createContext();
function encodeB64(str) {
  var encoder = new TextEncoder();
  var data = encoder.encode(str);
  var binary = "";
  data.forEach(function (_byte) {
    return binary += String.fromCharCode(_byte);
  });
  return btoa(binary);
}
function decodeB64(b64) {
  try {
    var binary = atob(b64);
    var bytes = new Uint8Array(binary.length);
    for (var i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    var decoder = new TextDecoder();
    return decoder.decode(bytes);
  } catch (e) {
    return null;
  }
}
export function ProfileProvider(_ref) {
  var dbName = _ref.dbName,
    migrateProfile = _ref.migrateProfile,
    _ref$debounceTimer = _ref.debounceTimer,
    debounceTimer = _ref$debounceTimer === void 0 ? 1000 : _ref$debounceTimer,
    children = _ref.children;
  var _useDBState = useDBState(dbName, "profiles", ["default"]),
    _useDBState2 = _slicedToArray(_useDBState, 2),
    profiles = _useDBState2[0],
    setProfiles = _useDBState2[1];
  var _useDBState3 = useDBState(dbName, "currentProfile", "default"),
    _useDBState4 = _slicedToArray(_useDBState3, 2),
    currentProfile = _useDBState4[0],
    setCurrentProfile = _useDBState4[1];
  var _useDBState5 = useDBState(dbName, "profile-".concat(currentProfile), migrateProfile(), {
      debounced: debounceTimer
    }),
    _useDBState6 = _slicedToArray(_useDBState5, 2),
    profileData = _useDBState6[0],
    setProfileData = _useDBState6[1];
  var addProfile = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(name) {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (name) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            if (!profiles.includes(name)) {
              _context.n = 2;
              break;
            }
            return _context.a(2);
          case 2:
            setProfiles(function (profiles) {
              return [].concat(_toConsumableArray(profiles), [name]);
            });
            _context.n = 3;
            return db.setItem(dbName, "profile-".concat(name), migrateProfile());
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function addProfile(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var switchProfile = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(name) {
      var loadedProfile;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (name) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            if (profiles.includes(name)) {
              _context2.n = 2;
              break;
            }
            return _context2.a(2);
          case 2:
            db.setItem(dbName, "profile-".concat(currentProfile), profileData);
            _context2.n = 3;
            return db.getItem(dbName, "profile-".concat(name));
          case 3:
            loadedProfile = _context2.v;
            setProfileData(migrateProfile(loadedProfile));
            setCurrentProfile(name);
          case 4:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function switchProfile(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  var copyProfile = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(oldName, newName) {
      var _t, _t2, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            if (!(!oldName || !newName)) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            if (!(profiles.includes(newName) || !profiles.includes(oldName))) {
              _context3.n = 2;
              break;
            }
            return _context3.a(2);
          case 2:
            setProfiles(function (profiles) {
              return [].concat(_toConsumableArray(profiles), [newName]);
            });
            _t = db;
            _t2 = dbName;
            _t3 = "profile-".concat(newName);
            _context3.n = 3;
            return db.getItem(dbName, "profile-".concat(oldName));
          case 3:
            _context3.n = 4;
            return _t.setItem.call(_t, _t2, _t3, _context3.v);
          case 4:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function copyProfile(_x3, _x4) {
      return _ref4.apply(this, arguments);
    };
  }();
  var deleteProfile = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(name) {
      var defaultProfile;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            if (name) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2);
          case 1:
            if (!(name === "default")) {
              _context4.n = 2;
              break;
            }
            // Return default profile to its default state instead of deleteing
            defaultProfile = migrateProfile();
            db.setItem(dbName, "profile-default", defaultProfile);
            if (currentProfile === "default") {
              setProfileData(defaultProfile);
            }
            return _context4.a(2);
          case 2:
            _context4.n = 3;
            return db.removeItem(dbName, "profile-".concat(name));
          case 3:
            setProfiles(function (profiles) {
              return profiles.filter(function (p) {
                return p !== name;
              });
            });
            if (!(name === currentProfile)) {
              _context4.n = 4;
              break;
            }
            _context4.n = 4;
            return switchProfile("default");
          case 4:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return function deleteProfile(_x5) {
      return _ref5.apply(this, arguments);
    };
  }();
  var exportProfile = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(name) {
      var type,
        data,
        _args5 = arguments;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            type = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : "base64";
            if (name) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2, null);
          case 1:
            if (profiles.includes(name)) {
              _context5.n = 2;
              break;
            }
            return _context5.a(2, null);
          case 2:
            _context5.n = 3;
            return db.getItem(dbName, "profile-".concat(name));
          case 3:
            data = _context5.v;
            if (!(type === "base64")) {
              _context5.n = 4;
              break;
            }
            return _context5.a(2, encodeB64(JSON.stringify(data)));
          case 4:
            if (!(type === "json")) {
              _context5.n = 5;
              break;
            }
            return _context5.a(2, JSON.stringify(data));
          case 5:
            return _context5.a(2, null);
          case 6:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return function exportProfile(_x6) {
      return _ref6.apply(this, arguments);
    };
  }();
  var importProfile = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(name, importedData) {
      var type,
        data,
        decoded,
        _args6 = arguments,
        _t4,
        _t5,
        _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            type = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : "base64";
            if (name) {
              _context6.n = 1;
              break;
            }
            return _context6.a(2);
          case 1:
            if (!profiles.includes(name)) {
              _context6.n = 2;
              break;
            }
            return _context6.a(2);
          case 2:
            _context6.p = 2;
            if (!(type === "base64")) {
              _context6.n = 6;
              break;
            }
            decoded = decodeB64(importedData);
            if (decoded) {
              _context6.n = 3;
              break;
            }
            throw new Error("Invalid data: not a valid Base64 string.");
          case 3:
            _context6.p = 3;
            data = JSON.parse(decoded);
            _context6.n = 5;
            break;
          case 4:
            _context6.p = 4;
            _t4 = _context6.v;
            throw new Error("Invalid data: decoded value is not a valid JSON.");
          case 5:
            _context6.n = 11;
            break;
          case 6:
            if (!(type === "json")) {
              _context6.n = 10;
              break;
            }
            _context6.p = 7;
            data = JSON.parse(importedData);
            _context6.n = 9;
            break;
          case 8:
            _context6.p = 8;
            _t5 = _context6.v;
            throw new Error("Invalid data: provided value is not a valid JSON.");
          case 9:
            _context6.n = 11;
            break;
          case 10:
            return _context6.a(2);
          case 11:
            // Migrate to latest version in case it's an old profile
            data = migrateProfile(data);
            setProfiles(function (profiles) {
              return [].concat(_toConsumableArray(profiles), [name]);
            });
            _context6.n = 12;
            return db.setItem(dbName, "profile-".concat(name), data);
          case 12:
            _context6.n = 14;
            break;
          case 13:
            _context6.p = 13;
            _t6 = _context6.v;
            console.error(_t6.message);
          case 14:
            return _context6.a(2);
        }
      }, _callee6, null, [[7, 8], [3, 4], [2, 13]]);
    }));
    return function importProfile(_x7, _x8) {
      return _ref7.apply(this, arguments);
    };
  }();
  var value = {
    profiles: profiles,
    currentProfile: currentProfile,
    profileData: profileData,
    setProfileData: setProfileData,
    addProfile: addProfile,
    switchProfile: switchProfile,
    copyProfile: copyProfile,
    deleteProfile: deleteProfile,
    exportProfile: exportProfile,
    importProfile: importProfile
  };
  return /*#__PURE__*/_jsx(ProfileContext.Provider, {
    value: value,
    children: children
  });
}
export var useProfiles = function useProfiles() {
  return useContext(ProfileContext);
};