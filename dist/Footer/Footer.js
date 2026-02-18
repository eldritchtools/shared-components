import { DiscordIcon, EmailIcon, GithubIcon, KoFiButton, XIcon, YoutubeIcon } from "../LinkIcons";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function LinksComponent(_ref) {
  var githubLink = _ref.githubLink;
  return /*#__PURE__*/_jsxs("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: "1rem"
    },
    children: [/*#__PURE__*/_jsx(EmailIcon, {}), /*#__PURE__*/_jsx(GithubIcon, {
      githubLink: githubLink
    }), /*#__PURE__*/_jsx(DiscordIcon, {}), /*#__PURE__*/_jsx(YoutubeIcon, {}), /*#__PURE__*/_jsx(XIcon, {}), /*#__PURE__*/_jsx(KoFiButton, {})]
  });
}
var footerStyle = {
  width: "100%",
  boxSizing: "border-box",
  borderTop: "1px solid #777",
  padding: "1rem 1rem",
  textAlign: "center",
  fontSize: "0.9rem",
  color: "#ddd",
  background: "black"
};
function Footer(_ref2) {
  var description = _ref2.description,
    gameName = _ref2.gameName,
    developerName = _ref2.developerName,
    githubLink = _ref2.githubLink;
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