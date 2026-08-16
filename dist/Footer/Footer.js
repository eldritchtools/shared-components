import styles from "./Footer.module.css";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Footer(_ref) {
  var gameName = _ref.gameName,
    developerName = _ref.developerName,
    topComponent = _ref.topComponent,
    leftComponent = _ref.leftComponent,
    rightComponent = _ref.rightComponent;
  var disclaimer = "This tool is a fan-made project and is not affiliated with or endorsed by ".concat(developerName, ". ") + "".concat(gameName, " and all related assets are \xA9 ").concat(developerName, ". ") + "All rights reserved to their respective owners.";
  return /*#__PURE__*/_jsx("footer", {
    style: {
      width: "100%",
      boxSizing: "border-box",
      borderTop: "1px solid var(--border-secondary-color, #777)",
      padding: "1rem 1rem",
      textAlign: "center",
      fontSize: "0.9rem",
      color: "var(--primary-text-color, #ddd)",
      background: "var(--bg-secondary, #000)"
    },
    children: /*#__PURE__*/_jsxs("div", {
      className: styles.footerLayout,
      children: [/*#__PURE__*/_jsx("div", {
        className: styles.footerLeft,
        children: leftComponent
      }), /*#__PURE__*/_jsxs("div", {
        className: styles.footerCenter,
        children: [topComponent, /*#__PURE__*/_jsx("p", {
          style: {
            fontSize: "0.8rem"
          },
          children: disclaimer
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: styles.footerRight,
        children: rightComponent
      })]
    })
  });
}