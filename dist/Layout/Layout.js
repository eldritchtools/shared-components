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
import { GithubIcon, KoFiIcon, XIcon, YoutubeIcon } from "../LinkIcons";
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
function MultiPath(_ref2) {
  var path = _ref2.path,
    LinkComponent = _ref2.LinkComponent;
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
      children: [/*#__PURE__*/_jsx(LinkComponent, {
        className: styles.sidebarButton,
        style: {
          flex: 1
        },
        href: path.path,
        children: path.title
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
        return /*#__PURE__*/_jsx(LinkComponent, {
          className: styles.sidebarButton,
          href: subpath.path,
          style: {
            fontSize: "1rem",
            fontWeight: "500",
            padding: "4px 6px"
          },
          children: subpath.title
        }, i);
      })
    })]
  });
}
function Navigation(_ref3) {
  var paths = _ref3.paths,
    LinkComponent = _ref3.LinkComponent;
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
        return /*#__PURE__*/_jsx(LinkComponent, {
          className: styles.sidebarButton,
          href: path.path,
          children: path.title
        }, i);
      }
    })
  });
}
function Sidebar(_ref4) {
  var open = _ref4.open,
    paths = _ref4.paths,
    _ref4$LinkComponent = _ref4.LinkComponent,
    LinkComponent = _ref4$LinkComponent === void 0 ? "a" : _ref4$LinkComponent,
    topComponent = _ref4.topComponent,
    githubLink = _ref4.githubLink;
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
export default function Layout(_ref5) {
  var _ref5$title = _ref5.title,
    title = _ref5$title === void 0 ? null : _ref5$title,
    _ref5$linkSet = _ref5.linkSet,
    linkSet = _ref5$linkSet === void 0 ? null : _ref5$linkSet,
    _ref5$lastUpdated = _ref5.lastUpdated,
    lastUpdated = _ref5$lastUpdated === void 0 ? null : _ref5$lastUpdated,
    _ref5$description = _ref5.description,
    description = _ref5$description === void 0 ? null : _ref5$description,
    _ref5$gameName = _ref5.gameName,
    gameName = _ref5$gameName === void 0 ? null : _ref5$gameName,
    _ref5$developerName = _ref5.developerName,
    developerName = _ref5$developerName === void 0 ? null : _ref5$developerName,
    _ref5$githubLink = _ref5.githubLink,
    githubLink = _ref5$githubLink === void 0 ? null : _ref5$githubLink,
    _ref5$paths = _ref5.paths,
    paths = _ref5$paths === void 0 ? [] : _ref5$paths,
    _ref5$LinkComponent = _ref5.LinkComponent,
    LinkComponent = _ref5$LinkComponent === void 0 ? "a" : _ref5$LinkComponent,
    topComponent = _ref5.topComponent,
    children = _ref5.children;
  var _useState3 = useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    sidebarOpen = _useState4[0],
    setSidebarOpen = _useState4[1];
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