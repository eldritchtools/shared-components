import { useBreakpoint } from "../utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function DesktopFooter(_ref) {
  var disclaimer = _ref.disclaimer,
    topComponent = _ref.topComponent,
    leftComponent = _ref.leftComponent,
    rightComponent = _ref.rightComponent;
  return /*#__PURE__*/_jsxs("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr minmax(0, 700px) 1fr",
      alignItems: "start",
      width: "100%",
      maxWidth: "1400px",
      margin: "0 auto"
    },
    children: [/*#__PURE__*/_jsx("div", {
      style: {
        justifySelf: "start"
      },
      children: leftComponent
    }), /*#__PURE__*/_jsxs("div", {
      style: {
        textAlign: "center"
      },
      children: [topComponent, /*#__PURE__*/_jsx("p", {
        style: {
          fontSize: "0.8rem"
        },
        children: disclaimer
      })]
    }), /*#__PURE__*/_jsx("div", {
      style: {
        justifySelf: "end"
      },
      children: rightComponent
    })]
  });
}
function MobileFooter(_ref2) {
  var disclaimer = _ref2.disclaimer,
    topComponent = _ref2.topComponent;
  return /*#__PURE__*/_jsxs("div", {
    style: {
      maxWidth: "700px",
      margin: "0 auto"
    },
    children: [topComponent, /*#__PURE__*/_jsx("p", {
      style: {
        fontSize: "0.8rem"
      },
      children: disclaimer
    })]
  });
}
export default function Footer(_ref3) {
  var gameName = _ref3.gameName,
    developerName = _ref3.developerName,
    topComponent = _ref3.topComponent,
    leftComponent = _ref3.leftComponent,
    rightComponent = _ref3.rightComponent;
  var _useBreakpoint = useBreakpoint(),
    isDesktop = _useBreakpoint.isDesktop,
    ready = _useBreakpoint.ready;
  var disclaimer = "This tool is a fan-made project and is not affiliated with or endorsed by ".concat(developerName, ". ").concat(gameName, " and all related assets are \xA9 ").concat(developerName, ". All rights reserved to their respective owners.");
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
    children: ready ? isDesktop ? /*#__PURE__*/_jsx(DesktopFooter, {
      disclaimer: disclaimer,
      topComponent: topComponent,
      leftComponent: leftComponent,
      rightComponent: rightComponent
    }) : /*#__PURE__*/_jsx(MobileFooter, {
      disclaimer: disclaimer,
      topComponent: topComponent
    }) : null
  });
}