"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _fa = require("react-icons/fa");
var _fa2 = require("react-icons/fa6");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function LinkIcons(_ref) {
  var githubLink = _ref.githubLink;
  var iconStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    margin: '0 8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    color: '#000',
    fontSize: '1.5rem',
    textDecoration: 'none',
    transition: 'transform 0.2s ease'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "side-panel-icons"
  }, /*#__PURE__*/React.createElement("a", {
    href: githubLink,
    target: "_blank",
    rel: "noopener noreferrer",
    style: iconStyle,
    title: "GitHub Repo"
  }, /*#__PURE__*/React.createElement(_fa.FaGithub, null)), /*#__PURE__*/React.createElement("a", {
    href: "https://www.youtube.com/@EldritchPlays",
    target: "_blank",
    rel: "noopener noreferrer",
    style: _objectSpread(_objectSpread({}, iconStyle), {}, {
      color: 'red'
    }),
    title: "YouTube"
  }, /*#__PURE__*/React.createElement(_fa.FaYoutube, null)), /*#__PURE__*/React.createElement("a", {
    href: "https://x.com/EldritchTools",
    target: "_blank",
    rel: "noopener noreferrer",
    style: iconStyle,
    title: "Twitter / X"
  }, /*#__PURE__*/React.createElement(_fa2.FaXTwitter, null)));
}
function KoFiButton() {
  return /*#__PURE__*/React.createElement("div", {
    className: "kofi-container"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://ko-fi.com/J3J31IBV7N",
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/React.createElement("img", {
    height: "36",
    style: {
      border: '0px',
      height: "36px"
    },
    src: "https://storage.ko-fi.com/cdn/kofi6.png?v=6",
    border: "0",
    alt: "Buy Me a Coffee at ko-fi.com"
  })));
}
function LinksComponent(_ref2) {
  var githubLink = _ref2.githubLink;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(LinkIcons, {
    githubLink: githubLink
  }), /*#__PURE__*/React.createElement(KoFiButton, null));
}
var footerStyle = {
  width: "100%",
  boxSizing: "border-box",
  borderTop: "1px solid #aaa",
  padding: "1rem 1rem",
  textAlign: "center",
  fontSize: "0.9rem",
  color: "#ddd",
  background: "black"
};
function Footer(_ref3) {
  var description = _ref3.description,
    gameName = _ref3.gameName,
    developerName = _ref3.developerName,
    githubLink = _ref3.githubLink;
  return /*#__PURE__*/React.createElement("footer", {
    style: footerStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "700px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("p", null, description, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "This project is designed as a free fan-made project for the community. I create web tools for various games that will hopefully be useful to people. If you'd like to support me, you can check out my ko-fi page or other socials. Thank you!"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement(LinksComponent, {
    githubLink: githubLink
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.8rem"
    }
  }, "This tool is a fan-made project and is not affiliated with or endorsed by ", developerName, ".", gameName, " and all related assets are \xA9 ", developerName, ". All rights reserved to their respective owners. The tool is free to use, and any donations go directly to supporting development of this tool and other free tools.")));
}
var _default = exports["default"] = Footer;