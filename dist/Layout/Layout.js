function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
import { GithubIcon, KoFiIcon, XIcon, YoutubeIcon } from "../LinkIcons";
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
    LinkComponent = _ref2.LinkComponent;
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
        children: path.title
      })
    });
  } else {
    return /*#__PURE__*/_jsx(LinkComponent, {
      className: styles.sidebarButton,
      style: styleOverride,
      href: path.path,
      children: path.title
    });
  }
}
function MultiPath(_ref3) {
  var path = _ref3.path,
    LinkComponent = _ref3.LinkComponent;
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
        LinkComponent: LinkComponent
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
          LinkComponent: LinkComponent
        }, i);
      })
    })]
  });
}
function Navigation(_ref4) {
  var paths = _ref4.paths,
    LinkComponent = _ref4.LinkComponent;
  return /*#__PURE__*/_jsx("nav", {
    style: {
      display: "flex",
      flexDirection: "column"
    },
    children: paths.map(function (path, i) {
      if ("subpaths" in path) {
        return /*#__PURE__*/_jsx(MultiPath, {
          path: path,
          LinkComponent: LinkComponent
        }, i);
      } else {
        return /*#__PURE__*/_jsx(PathLink, {
          path: path,
          LinkComponent: LinkComponent
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
    githubLink = _ref5.githubLink;
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
      transform: open ? "translateX(0)" : "translateX(-100%)"
    },
    children: [topComponent ? topComponent : null, /*#__PURE__*/_jsx(Navigation, {
      paths: paths,
      LinkComponent: LinkComponent
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
        }) : null, /*#__PURE__*/_jsx(YoutubeIcon, {}), /*#__PURE__*/_jsx(XIcon, {}), /*#__PURE__*/_jsx(KoFiIcon, {})]
      })]
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
  return /*#__PURE__*/_jsxs("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    },
    children: [/*#__PURE__*/_jsx(Header, {
      title: title,
      linkSet: linkSet,
      lastUpdated: lastUpdated,
      sidebarButton: sidebarButton
    }), /*#__PURE__*/_jsx(Sidebar, {
      open: sidebarOpen,
      paths: paths,
      LinkComponent: LinkComponent,
      githubLink: githubLink,
      topComponent: topComponent
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
    }), /*#__PURE__*/_jsx(Tooltip, {
      id: "sidebarNavTooltip",
      render: function render(_ref7) {
        var content = _ref7.content;
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