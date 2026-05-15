import { DiscordIcon, EmailIcon, GithubIcon, KoFiButton, XIcon, YoutubeIcon } from "../LinkIcons";

function LinksComponent({ githubLink, sharedUrls }) {
    return <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
        <EmailIcon />
        <GithubIcon githubLink={githubLink} />
        {"discord" in sharedUrls ? <DiscordIcon url={sharedUrls["discord"]} /> : null}
        <YoutubeIcon />
        <XIcon />
        <KoFiButton />
    </div>
}

const footerStyle = {
    width: "100%", boxSizing: "border-box", borderTop: "1px solid var(--border-secondary-color, #777)",
    padding: "1rem 1rem", textAlign: "center", fontSize: "0.9rem", color: "var(--primary-text-color, #ddd)",
    background: "var(--bg-secondary, #000)"
};

function Footer({ description, gameName, developerName, githubLink, sharedUrls }) {
    return <footer style={footerStyle}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <p style={{ fontSize: "0.8rem" }}>
                This tool is a fan-made project and is not affiliated with or endorsed by {developerName}. {gameName} and all related assets are © {developerName}. All rights reserved to their respective owners.
            </p>
        </div>
    </footer>;
}

export default Footer;