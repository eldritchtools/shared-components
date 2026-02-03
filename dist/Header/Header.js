function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { useState } from "react";
import HeaderDropdown from "./HeaderDropdown";
import { useBreakpoint } from "../utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var logob64 = "data:image/png;base64,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";
function formatLastUpdated(isoString) {
  if (!isoString) return null;
  var date = new Date(isoString);
  return date.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "shortOffset"
  });
}
function DesktopHeader(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? null : _ref$title,
    _ref$linkSet = _ref.linkSet,
    linkSet = _ref$linkSet === void 0 ? null : _ref$linkSet,
    _ref$lastUpdated = _ref.lastUpdated,
    lastUpdated = _ref$lastUpdated === void 0 ? null : _ref$lastUpdated,
    _ref$sidebarButton = _ref.sidebarButton,
    sidebarButton = _ref$sidebarButton === void 0 ? null : _ref$sidebarButton;
  return /*#__PURE__*/_jsxs("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingRight: "1rem"
    },
    children: [/*#__PURE__*/_jsxs("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        gap: "0.75rem",
        alignItems: "center"
      },
      children: [sidebarButton, /*#__PURE__*/_jsx("a", {
        href: "https://eldritchtools.com/",
        children: /*#__PURE__*/_jsx("img", {
          src: logob64,
          alt: "logo",
          width: 32,
          height: 32,
          style: {
            borderRadius: "50%"
          }
        })
      }), linkSet && linkSet.links.length > 1 ? /*#__PURE__*/_jsx(HeaderDropdown, {
        name: linkSet.name,
        links: linkSet.links
      }) : null]
    }), /*#__PURE__*/_jsx("h1", {
      style: {
        margin: 0,
        fontSize: "1.25rem",
        fontWeight: "bold",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        textAlign: "center"
      },
      children: title
    }), /*#__PURE__*/_jsx("div", {
      style: {
        fontWeight: "normal",
        fontSize: "0.85rem",
        opacity: 0.75,
        textAlign: "right"
      },
      children: lastUpdated ? "Last updated: ".concat(formatLastUpdated(lastUpdated)) : null
    })]
  });
}
function MoreIcon(_ref2) {
  var _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? 14 : _ref2$size;
  return /*#__PURE__*/_jsxs("svg", {
    width: size * 0.75,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    children: [/*#__PURE__*/_jsx("circle", {
      cx: "12",
      cy: "5",
      r: "2"
    }), /*#__PURE__*/_jsx("circle", {
      cx: "12",
      cy: "12",
      r: "2"
    }), /*#__PURE__*/_jsx("circle", {
      cx: "12",
      cy: "19",
      r: "2"
    })]
  });
}
function MobileHeader(_ref3) {
  var _ref3$title = _ref3.title,
    title = _ref3$title === void 0 ? null : _ref3$title,
    _ref3$linkSet = _ref3.linkSet,
    linkSet = _ref3$linkSet === void 0 ? null : _ref3$linkSet,
    _ref3$lastUpdated = _ref3.lastUpdated,
    lastUpdated = _ref3$lastUpdated === void 0 ? null : _ref3$lastUpdated,
    _ref3$sidebarButton = _ref3.sidebarButton,
    sidebarButton = _ref3$sidebarButton === void 0 ? null : _ref3$sidebarButton;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    submenuOpen = _useState2[0],
    setSubmenuOpen = _useState2[1];
  return /*#__PURE__*/_jsxs("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    children: [/*#__PURE__*/_jsxs("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        gap: "0.75rem",
        alignItems: "center"
      },
      children: [sidebarButton, /*#__PURE__*/_jsx("a", {
        href: "https://eldritchtools.com/",
        children: /*#__PURE__*/_jsx("img", {
          src: logob64,
          alt: "logo",
          width: 32,
          height: 32,
          style: {
            borderRadius: "50%"
          }
        })
      })]
    }), /*#__PURE__*/_jsx("h1", {
      style: {
        margin: 0,
        fontSize: "1.25rem",
        fontWeight: "bold",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        textAlign: "center"
      },
      children: title
    }), /*#__PURE__*/_jsxs("div", {
      style: {
        display: "relative"
      },
      children: [/*#__PURE__*/_jsx("button", {
        onClick: function onClick() {
          return setSubmenuOpen(!submenuOpen);
        },
        children: /*#__PURE__*/_jsx(MoreIcon, {})
      }), submenuOpen ? /*#__PURE__*/_jsxs("div", {
        style: {
          position: "absolute",
          right: "10px",
          marginTop: "0.5rem",
          width: "12rem",
          padding: "6px 4px",
          background: "#111111",
          border: "1px #777 solid",
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          zIndex: 1001
        },
        children: [linkSet && linkSet.links.length > 1 ? /*#__PURE__*/_jsx(HeaderDropdown, {
          name: linkSet.name,
          links: linkSet.links
        }) : null, /*#__PURE__*/_jsx("div", {
          style: {
            fontWeight: "normal",
            fontSize: "0.85rem",
            opacity: 0.75,
            textAlign: "right"
          },
          children: lastUpdated ? "Last updated: ".concat(formatLastUpdated(lastUpdated)) : null
        })]
      }) : null]
    })]
  });
}
function Header(_ref4) {
  var _ref4$title = _ref4.title,
    title = _ref4$title === void 0 ? null : _ref4$title,
    _ref4$linkSet = _ref4.linkSet,
    linkSet = _ref4$linkSet === void 0 ? null : _ref4$linkSet,
    _ref4$lastUpdated = _ref4.lastUpdated,
    lastUpdated = _ref4$lastUpdated === void 0 ? null : _ref4$lastUpdated,
    _ref4$sidebarButton = _ref4.sidebarButton,
    sidebarButton = _ref4$sidebarButton === void 0 ? null : _ref4$sidebarButton;
  var _useBreakpoint = useBreakpoint(),
    isDesktop = _useBreakpoint.isDesktop,
    ready = _useBreakpoint.ready;
  return /*#__PURE__*/_jsx("header", {
    style: {
      position: "sticky",
      top: 0,
      height: "48px",
      padding: "0.25rem 1rem",
      background: "#111111",
      color: "#ddd",
      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      boxSizing: "border-box",
      zIndex: 1000
    },
    children: ready ? isDesktop ? /*#__PURE__*/_jsx(DesktopHeader, {
      title: title,
      linkSet: linkSet,
      lastUpdated: lastUpdated,
      sidebarButton: sidebarButton
    }) : /*#__PURE__*/_jsx(MobileHeader, {
      title: title,
      linkSet: linkSet,
      lastUpdated: lastUpdated,
      sidebarButton: sidebarButton
    }) : null
  });
}
export default Header;