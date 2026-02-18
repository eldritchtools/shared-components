import { DiscordIcon, EmailIcon, GithubIcon, KoFiButton, XIcon, YoutubeIcon } from "../LinkIcons";

function LinksComponent({ githubLink }) {
    return <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <EmailIcon />
        <GithubIcon githubLink={githubLink} />
        <DiscordIcon />
        <YoutubeIcon />
        <XIcon />
        <KoFiButton />
    </div>
}

const footerStyle = { width: "100%", boxSizing: "border-box", borderTop: "1px solid #777", padding: "1rem 1rem", textAlign: "center", fontSize: "0.9rem", color: "#ddd", background: "black" }

function Footer({ description, gameName, developerName, githubLink }) {
    return (
        <footer style={footerStyle}>
            <div style={{ maxWidth: "700px", margin: "0 auto" }}>
                <p>
                    {description}
                    <br /><br />
                    This project is designed as a free fan-made project for the community. I create web tools for various games that will hopefully be useful to people. If you'd like to support me, you can check out my ko-fi page or other socials. Thank you!
                </p>

                <div style={{ marginTop: "0.75rem" }}>
                    <LinksComponent githubLink={githubLink} />
                </div>

                <p style={{ fontSize: "0.8rem" }}>
                    This tool is a fan-made project and is not affiliated with or endorsed by {developerName}. {gameName} and all related assets are © {developerName}. All rights reserved to their respective owners. The tool is free to use, and any donations go directly to supporting development of this tool and other free tools.
                </p>
            </div>
        </footer>
    );
}

export default Footer;