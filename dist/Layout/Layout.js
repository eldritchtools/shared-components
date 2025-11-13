function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { useState } from "react";
import styles from "./Layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function Sidebar(_ref) {
  var open = _ref.open,
    paths = _ref.paths,
    _ref$LinkComponent = _ref.LinkComponent,
    LinkComponent = _ref$LinkComponent === void 0 ? "a" : _ref$LinkComponent,
    topComponent = _ref.topComponent,
    bottomComponent = _ref.bottomComponent;
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
      justifyContent: "space-between",
      borderRight: open ? "1px #777 solid" : "transparent",
      transform: open ? "translateX(0)" : "translateX(-100%)"
    },
    children: [/*#__PURE__*/_jsxs("div", {
      style: {
        marginTop: "20px",
        display: "flex",
        flexDirection: "column"
      },
      children: [topComponent ? topComponent : null, /*#__PURE__*/_jsx("nav", {
        style: {
          display: "flex",
          flexDirection: "column"
        },
        children: paths.map(function (path) {
          return /*#__PURE__*/_jsx(LinkComponent, {
            className: styles.sidebarButton,
            href: path.path,
            children: path.title
          }, path.path);
        })
      })]
    }), bottomComponent ? bottomComponent : null]
  });
}
export default function Layout(_ref2) {
  var _ref2$title = _ref2.title,
    title = _ref2$title === void 0 ? null : _ref2$title,
    _ref2$linkSet = _ref2.linkSet,
    linkSet = _ref2$linkSet === void 0 ? null : _ref2$linkSet,
    _ref2$lastUpdated = _ref2.lastUpdated,
    lastUpdated = _ref2$lastUpdated === void 0 ? null : _ref2$lastUpdated,
    _ref2$description = _ref2.description,
    description = _ref2$description === void 0 ? null : _ref2$description,
    _ref2$gameName = _ref2.gameName,
    gameName = _ref2$gameName === void 0 ? null : _ref2$gameName,
    _ref2$developerName = _ref2.developerName,
    developerName = _ref2$developerName === void 0 ? null : _ref2$developerName,
    _ref2$githubLink = _ref2.githubLink,
    githubLink = _ref2$githubLink === void 0 ? null : _ref2$githubLink,
    _ref2$paths = _ref2.paths,
    paths = _ref2$paths === void 0 ? [] : _ref2$paths,
    _ref2$LinkComponent = _ref2.LinkComponent,
    LinkComponent = _ref2$LinkComponent === void 0 ? "a" : _ref2$LinkComponent,
    topComponent = _ref2.topComponent,
    bottomComponent = _ref2.bottomComponent,
    children = _ref2.children;
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    sidebarOpen = _useState2[0],
    setSidebarOpen = _useState2[1];
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
      topComponent: topComponent,
      bottomComponent: bottomComponent
    }), /*#__PURE__*/_jsxs("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        marginLeft: sidebarOpen ? "240px" : "0px",
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
    })]
  });
}