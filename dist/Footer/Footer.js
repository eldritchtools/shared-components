import { DiscordIcon, EmailIcon, GithubIcon, KoFiButton, XIcon, YoutubeIcon } from "../LinkIcons";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function LinksComponent(_ref) {
  var githubLink = _ref.githubLink,
    sharedUrls = _ref.sharedUrls;
  return /*#__PURE__*/_jsxs("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "1rem"
    },
    children: [/*#__PURE__*/_jsx(EmailIcon, {}), /*#__PURE__*/_jsx(GithubIcon, {
      githubLink: githubLink
    }), "discord" in sharedUrls ? /*#__PURE__*/_jsx(DiscordIcon, {
      url: sharedUrls["discord"]
    }) : null, /*#__PURE__*/_jsx(YoutubeIcon, {}), /*#__PURE__*/_jsx(XIcon, {}), /*#__PURE__*/_jsx(KoFiButton, {})]
  });
}
var footerStyle = {
  width: "100%",
  boxSizing: "border-box",
  borderTop: "1px solid var(--border-secondary-color, #777)",
  padding: "1rem 1rem",
  textAlign: "center",
  fontSize: "0.9rem",
  color: "var(--primary-text-color, #ddd)",
  background: "var(--bg-secondary, #000)"
};
function Footer(_ref2) {
  var description = _ref2.description,
    gameName = _ref2.gameName,
    developerName = _ref2.developerName,
    githubLink = _ref2.githubLink,
    sharedUrls = _ref2.sharedUrls;
  return /*#__PURE__*/_jsx("footer", {
    style: footerStyle,
    children: /*#__PURE__*/_jsx("div", {
      style: {
        maxWidth: "700px",
        margin: "0 auto"
      },
      children: /*#__PURE__*/_jsxs("p", {
        style: {
          fontSize: "0.8rem"
        },
        children: ["This tool is a fan-made project and is not affiliated with or endorsed by ", developerName, ". ", gameName, " and all related assets are \xA9 ", developerName, ". All rights reserved to their respective owners."]
      })
    })
  });
}
export default Footer;