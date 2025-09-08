import React from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
function Header(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? null : _ref$title,
    _ref$lastUpdated = _ref.lastUpdated,
    lastUpdated = _ref$lastUpdated === void 0 ? null : _ref$lastUpdated;
  return /*#__PURE__*/_jsxs("header", {
    style: {
      position: "sticky",
      top: 0,
      minHeight: "3rem",
      padding: "1rem 2rem",
      background: "#111111",
      color: "#ddd",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      paddingRight: "1rem",
      boxSizing: "border-box",
      zIndex: 1000
    },
    children: [/*#__PURE__*/_jsx("div", {}), /*#__PURE__*/_jsx("div", {
      style: {
        margin: 0,
        fontSize: "1.25rem",
        fontWeight: "bold",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)"
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
export default Header;