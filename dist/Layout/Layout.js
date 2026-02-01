function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { useEffect, useRef, useState } from "react";
import styles from "./Layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { DiscordIcon, GithubIcon, KoFiIcon, XIcon, YoutubeIcon } from "../LinkIcons";
import { Tooltip } from "react-tooltip";
import { useBreakpoint } from "../utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var ArrowIcon = function ArrowIcon(_ref) {
  var open = _ref.open;
  return /*#__PURE__*/_jsx("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    style: {
      transform: open ? "rotate(90deg)" : "rotate(0deg)",
      transition: "transform 0.2s ease",
      transformOrigin: "50% 50%",
      display: "block"
    },
    children: /*#__PURE__*/_jsx("polygon", {
      points: "8,5 20,12 8,19",
      fill: "currentColor"
    })
  });
};
function PathLink(_ref2) {
  var path = _ref2.path,
    styleOverride = _ref2.styleOverride,
    LinkComponent = _ref2.LinkComponent,
    closeSidebar = _ref2.closeSidebar;
  if ("tooltip" in path) {
    return /*#__PURE__*/_jsx("div", {
      "data-tooltip-id": "sidebarNavTooltip",
      "data-tooltip-content": path.tooltip,
      style: {
        display: "flex",
        width: "100%",
        height: "auto"
      },
      children: /*#__PURE__*/_jsx(LinkComponent, {
        className: styles.sidebarButton,
        style: _objectSpread(_objectSpread({}, styleOverride), {}, {
          width: "100%",
          height: "auto"
        }),
        href: path.path,
        onClick: closeSidebar,
        children: path.title
      })
    });
  } else {
    return /*#__PURE__*/_jsx(LinkComponent, {
      className: styles.sidebarButton,
      style: styleOverride,
      href: path.path,
      onClick: closeSidebar,
      children: path.title
    });
  }
}
function MultiPath(_ref3) {
  var path = _ref3.path,
    LinkComponent = _ref3.LinkComponent,
    closeSidebar = _ref3.closeSidebar;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var toggleStyle = {
    width: "22px",
    height: "22px",
    border: "none",
    background: "none",
    cursor: "pointer",
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
  return /*#__PURE__*/_jsxs("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    },
    children: [/*#__PURE__*/_jsxs("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      },
      children: [/*#__PURE__*/_jsx(PathLink, {
        path: path,
        styleOverride: {
          flex: 1
        },
        LinkComponent: LinkComponent,
        closeSidebar: closeSidebar
      }), /*#__PURE__*/_jsx("button", {
        style: toggleStyle,
        onClick: function onClick(e) {
          e.stopPropagation();
          setOpen(function (o) {
            return !o;
          });
        },
        children: /*#__PURE__*/_jsx(ArrowIcon, {
          open: open
        })
      })]
    }), /*#__PURE__*/_jsx("div", {
      style: {
        display: open ? "flex" : "none",
        flexDirection: "column",
        paddingLeft: "16px"
      },
      children: path.subpaths.map(function (subpath, i) {
        return /*#__PURE__*/_jsx(PathLink, {
          path: subpath,
          styleOverride: {
            fontSize: "1rem",
            fontWeight: "500",
            padding: "4px 6px"
          },
          LinkComponent: LinkComponent,
          closeSidebar: closeSidebar
        }, i);
      })
    })]
  });
}
function Navigation(_ref4) {
  var paths = _ref4.paths,
    LinkComponent = _ref4.LinkComponent,
    closeSidebar = _ref4.closeSidebar;
  return /*#__PURE__*/_jsx("nav", {
    style: {
      display: "flex",
      flexDirection: "column"
    },
    children: paths.map(function (path, i) {
      if ("subpaths" in path) {
        return /*#__PURE__*/_jsx(MultiPath, {
          path: path,
          LinkComponent: LinkComponent,
          closeSidebar: closeSidebar
        }, i);
      } else {
        return /*#__PURE__*/_jsx(PathLink, {
          path: path,
          LinkComponent: LinkComponent,
          closeSidebar: closeSidebar
        }, i);
      }
    })
  });
}
function Sidebar(_ref5) {
  var open = _ref5.open,
    paths = _ref5.paths,
    _ref5$LinkComponent = _ref5.LinkComponent,
    LinkComponent = _ref5$LinkComponent === void 0 ? "a" : _ref5$LinkComponent,
    topComponent = _ref5.topComponent,
    githubLink = _ref5.githubLink,
    closeSidebar = _ref5.closeSidebar,
    sharedUrls = _ref5.sharedUrls;
  return /*#__PURE__*/_jsxs("div", {
    style: {
      position: "fixed",
      top: "48px",
      alignSelf: "flex-start",
      height: "calc(100vh - 48px)",
      overflowY: "auto",
      overflowX: "hidden",
      width: "240px",
      transition: "transform 0.3s ease",
      backgroundColor: "#070707",
      color: "#ddd",
      display: "flex",
      flexDirection: "column",
      borderRight: open ? "1px #777 solid" : "transparent",
      transform: open ? "translateX(0)" : "translateX(-100%)",
      zIndex: "999"
    },
    children: [topComponent ? topComponent : null, /*#__PURE__*/_jsx(Navigation, {
      paths: paths,
      LinkComponent: LinkComponent,
      closeSidebar: closeSidebar
    }), /*#__PURE__*/_jsxs("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderTop: "1px #777 solid",
        gap: "0.5rem"
      },
      children: [/*#__PURE__*/_jsx("span", {
        style: {
          marginTop: "1rem"
        },
        children: "Follow / Contact / Support"
      }), /*#__PURE__*/_jsxs("div", {
        style: {
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "0.5rem"
        },
        children: [githubLink ? /*#__PURE__*/_jsx(GithubIcon, {
          githubLink: githubLink
        }) : null, "discord" in sharedUrls ? /*#__PURE__*/_jsx(DiscordIcon, {
          url: sharedUrls["discord"]
        }) : null, /*#__PURE__*/_jsx(YoutubeIcon, {}), /*#__PURE__*/_jsx(XIcon, {}), /*#__PURE__*/_jsx(KoFiIcon, {})]
      }), "discord" in sharedUrls ? /*#__PURE__*/_jsx("span", {
        style: {
          fontSize: "0.8rem",
          textAlign: "center",
          width: "80%"
        },
        children: "Join the Discord for updates, bug reports, suggestions, and feedback."
      }) : null]
    })]
  });
}
export default function Layout(_ref6) {
  var _ref6$title = _ref6.title,
    title = _ref6$title === void 0 ? null : _ref6$title,
    _ref6$linkSet = _ref6.linkSet,
    linkSet = _ref6$linkSet === void 0 ? null : _ref6$linkSet,
    _ref6$lastUpdated = _ref6.lastUpdated,
    lastUpdated = _ref6$lastUpdated === void 0 ? null : _ref6$lastUpdated,
    _ref6$description = _ref6.description,
    description = _ref6$description === void 0 ? null : _ref6$description,
    _ref6$gameName = _ref6.gameName,
    gameName = _ref6$gameName === void 0 ? null : _ref6$gameName,
    _ref6$developerName = _ref6.developerName,
    developerName = _ref6$developerName === void 0 ? null : _ref6$developerName,
    _ref6$githubLink = _ref6.githubLink,
    githubLink = _ref6$githubLink === void 0 ? null : _ref6$githubLink,
    _ref6$paths = _ref6.paths,
    paths = _ref6$paths === void 0 ? [] : _ref6$paths,
    _ref6$LinkComponent = _ref6.LinkComponent,
    LinkComponent = _ref6$LinkComponent === void 0 ? "a" : _ref6$LinkComponent,
    topComponent = _ref6.topComponent,
    children = _ref6.children;
  var _useBreakpoint = useBreakpoint(),
    isDesktop = _useBreakpoint.isDesktop,
    ready = _useBreakpoint.ready;
  var initialized = useRef(false);
  var _useState3 = useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    sidebarOpen = _useState4[0],
    setSidebarOpen = _useState4[1];
  var _useState5 = useState({}),
    _useState6 = _slicedToArray(_useState5, 2),
    sharedUrls = _useState6[0],
    setSharedUrls = _useState6[1];
  useEffect(function () {
    var attempt = 0;
    var _fetchData = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, result, delay, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return fetch("https://shared.eldritchtools.com/links.json");
            case 1:
              response = _context.v;
              if (response.ok) {
                _context.n = 2;
                break;
              }
              throw new Error("HTTP error! status: ".concat(response.status));
            case 2:
              _context.n = 3;
              return response.json();
            case 3:
              result = _context.v;
              setSharedUrls(result);
              _context.n = 5;
              break;
            case 4:
              _context.p = 4;
              _t = _context.v;
              if (attempt < 5) {
                attempt++;
                delay = retryDelay * Math.pow(2, attempt - 1);
                setTimeout(_fetchData, delay);
              } else {
                console.error(_t.message);
              }
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[0, 4]]);
      }));
      return function fetchData() {
        return _ref7.apply(this, arguments);
      };
    }();
    _fetchData();
  }, []);
  useEffect(function () {
    if (!ready || initialized.current) return;
    setSidebarOpen(isDesktop);
    initialized.current = true;
  }, [ready, isDesktop]);
  var sidebarButton = /*#__PURE__*/_jsx("button", {
    onClick: function onClick() {
      return setSidebarOpen(function (prev) {
        return !prev;
      });
    },
    children: "\u2630"
  });
  var closeSidebar = function closeSidebar() {
    return setSidebarOpen(false);
  };
  var linksetObject = "linksets" in sharedUrls && linkSet in sharedUrls.linksets ? sharedUrls.linksets[linkSet] : null;
  return /*#__PURE__*/_jsxs("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    },
    children: [/*#__PURE__*/_jsx(Header, {
      title: title,
      linkSet: linksetObject,
      lastUpdated: lastUpdated,
      sidebarButton: sidebarButton
    }), /*#__PURE__*/_jsx(Sidebar, {
      open: sidebarOpen,
      paths: paths,
      LinkComponent: LinkComponent,
      githubLink: githubLink,
      topComponent: topComponent,
      closeSidebar: ready && !isDesktop ? closeSidebar : undefined,
      sharedUrls: sharedUrls
    }), /*#__PURE__*/_jsxs("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        marginLeft: sidebarOpen && isDesktop ? "240px" : "0px",
        overflowY: "auto",
        transition: "margin-left 0.3s ease"
      },
      children: [/*#__PURE__*/_jsx("main", {
        style: {
          minHeight: "calc(100vh - 48px)",
          padding: "20px",
          backgroundColor: "#1f1f1f",
          color: "white"
        },
        children: children
      }), /*#__PURE__*/_jsx(Footer, {
        description: description,
        gameName: gameName,
        developerName: developerName,
        githubLink: githubLink
      })]
    }), ready && !isDesktop && sidebarOpen ? /*#__PURE__*/_jsx("div", {
      style: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        zIndex: "998"
      },
      onClick: closeSidebar
    }) : null, /*#__PURE__*/_jsx(Tooltip, {
      id: "sidebarNavTooltip",
      render: function render(_ref8) {
        var content = _ref8.content;
        return /*#__PURE__*/_jsx("div", {
          style: {
            whiteSpace: "pre-wrap"
          },
          children: content
        });
      },
      style: {
        outline: "1px #ddd solid",
        backgroundColor: "#000000",
        borderRadius: "1rem",
        zIndex: "9999"
      }
    })]
  });
}