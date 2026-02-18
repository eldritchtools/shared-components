function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { FaGithub, FaYoutube, FaDiscord, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import KofiIconSvg from './KofiIconSvg';
import { jsx as _jsx } from "react/jsx-runtime";
var iconStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  borderRadius: '50%',
  width: '36px',
  height: '36px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  color: '#000',
  fontSize: '1.5rem',
  textDecoration: 'none',
  transition: 'transform 0.2s ease'
};
function EmailIcon() {
  return /*#__PURE__*/_jsx("a", {
    href: "mailto:contact@eldritchtools.com",
    style: _objectSpread(_objectSpread({}, iconStyle), {}, {
      color: "#4B5563"
    }),
    title: "Email",
    children: /*#__PURE__*/_jsx(FaEnvelope, {})
  });
}
function GithubIcon(_ref) {
  var githubLink = _ref.githubLink;
  return /*#__PURE__*/_jsx("a", {
    href: githubLink,
    target: "_blank",
    rel: "noopener noreferrer",
    style: iconStyle,
    title: "GitHub Repo",
    children: /*#__PURE__*/_jsx(FaGithub, {})
  });
}
function DiscordIcon(_ref2) {
  var url = _ref2.url;
  return /*#__PURE__*/_jsx("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    style: _objectSpread(_objectSpread({}, iconStyle), {}, {
      color: '#5865F2'
    }),
    title: "Discord",
    children: /*#__PURE__*/_jsx(FaDiscord, {})
  });
}
function YoutubeIcon() {
  return /*#__PURE__*/_jsx("a", {
    href: "https://www.youtube.com/@EldritchPlays",
    target: "_blank",
    rel: "noopener noreferrer",
    style: _objectSpread(_objectSpread({}, iconStyle), {}, {
      color: 'red'
    }),
    title: "YouTube",
    children: /*#__PURE__*/_jsx(FaYoutube, {})
  });
}
function XIcon() {
  return /*#__PURE__*/_jsx("a", {
    href: "https://x.com/EldritchTools",
    target: "_blank",
    rel: "noopener noreferrer",
    style: iconStyle,
    title: "Twitter / X",
    children: /*#__PURE__*/_jsx(FaXTwitter, {})
  });
}
function KoFiButton() {
  return /*#__PURE__*/_jsx("a", {
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
  });
}
function KoFiIcon() {
  return /*#__PURE__*/_jsx("a", {
    href: "https://ko-fi.com/J3J31IBV7N",
    target: "_blank",
    rel: "noopener noreferrer",
    style: iconStyle,
    title: "Ko-Fi",
    children: /*#__PURE__*/_jsx(KofiIconSvg, {})
  });
}
export { EmailIcon, GithubIcon, DiscordIcon, YoutubeIcon, XIcon, KoFiButton, KoFiIcon };