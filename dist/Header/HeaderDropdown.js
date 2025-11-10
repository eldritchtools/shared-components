function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { useState } from "react";
import "./HeaderDropdown.css";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
export default function HeaderDropdown(_ref) {
  var name = _ref.name,
    links = _ref.links;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  return /*#__PURE__*/_jsxs("div", {
    style: {
      position: "relative",
      display: "inline-block"
    },
    onMouseEnter: function onMouseEnter() {
      return setOpen(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setOpen(false);
    },
    children: [/*#__PURE__*/_jsxs("div", {
      style: {
        cursor: "pointer",
        fontSize: "1rem"
      },
      children: [name, " \u25BC"]
    }), open && /*#__PURE__*/_jsx("div", {
      style: {
        position: "absolute",
        top: "100%",
        left: 0,
        background: "#070707",
        padding: "6px 0",
        minWidth: "160px",
        width: "auto",
        zIndex: 100
      },
      children: links.map(function (link, i) {
        return /*#__PURE__*/_jsx("a", {
          href: "https://".concat(link.subdomain, ".eldritchtools.com"),
          className: "header-menu-item",
          children: link.name
        }, i);
      })
    })]
  });
}