function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
  return /*#__PURE__*/_jsxs("div", {
    className: "side-panel-icons",
    children: [/*#__PURE__*/_jsx("a", {
      href: githubLink,
      target: "_blank",
      rel: "noopener noreferrer",
      style: iconStyle,
      title: "GitHub Repo",
      children: /*#__PURE__*/_jsx(FaGithub, {})
    }), /*#__PURE__*/_jsx("a", {
      href: "https://www.youtube.com/@EldritchPlays",
      target: "_blank",
      rel: "noopener noreferrer",
      style: _objectSpread(_objectSpread({}, iconStyle), {}, {
        color: 'red'
      }),
      title: "YouTube",
      children: /*#__PURE__*/_jsx(FaYoutube, {})
    }), /*#__PURE__*/_jsx("a", {
      href: "https://x.com/EldritchTools",
      target: "_blank",
      rel: "noopener noreferrer",
      style: iconStyle,
      title: "Twitter / X",
      children: /*#__PURE__*/_jsx(FaXTwitter, {})
    })]
  });
}
function KoFiButton() {
  return /*#__PURE__*/_jsx("div", {
    className: "kofi-container",
    children: /*#__PURE__*/_jsx("a", {
      href: "https://ko-fi.com/J3J31IBV7N",
      target: "_blank",
      rel: "noreferrer",
      children: /*#__PURE__*/_jsx("img", {
        height: "36",
        style: {
          border: '0px',
          height: "36px"
        },
        src: "https://storage.ko-fi.com/cdn/kofi6.png?v=6",
        border: "0",
        alt: "Buy Me a Coffee at ko-fi.com"
      })
    })
  });
}
function LinksComponent(_ref2) {
  var githubLink = _ref2.githubLink;
  return /*#__PURE__*/_jsxs("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    },
    children: [/*#__PURE__*/_jsx(LinkIcons, {
      githubLink: githubLink
    }), /*#__PURE__*/_jsx(KoFiButton, {})]
  });
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
  return /*#__PURE__*/_jsx("footer", {
    style: footerStyle,
    children: /*#__PURE__*/_jsxs("div", {
      style: {
        maxWidth: "700px",
        margin: "0 auto"
      },
      children: [/*#__PURE__*/_jsxs("p", {
        children: [description, /*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("br", {}), "This project is designed as a free fan-made project for the community. I create web tools for various games that will hopefully be useful to people. If you'd like to support me, you can check out my ko-fi page or other socials. Thank you!"]
      }), /*#__PURE__*/_jsx("div", {
        style: {
          marginTop: "0.75rem"
        },
        children: /*#__PURE__*/_jsx(LinksComponent, {
          githubLink: githubLink
        })
      }), /*#__PURE__*/_jsxs("p", {
        style: {
          fontSize: "0.8rem"
        },
        children: ["This tool is a fan-made project and is not affiliated with or endorsed by ", developerName, ". ", gameName, " and all related assets are \xA9 ", developerName, ". All rights reserved to their respective owners. The tool is free to use, and any donations go directly to supporting development of this tool and other free tools."]
      })]
    })
  });
}
export default Footer;