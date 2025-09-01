import { FaGithub, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

function LinkIcons({githubLink}) {
    const iconStyle = {
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
        transition: 'transform 0.2s ease',
    };

    return <div className="side-panel-icons">
        <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
            title="GitHub Repo"
        >
            <FaGithub />
        </a>
        <a
            href="https://www.youtube.com/@EldritchPlays"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...iconStyle, color: 'red' }}
            title="YouTube"
        >
            <FaYoutube />
        </a>
        <a
            href="https://x.com/EldritchTools"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
            title="Twitter / X"
        >
            <FaXTwitter />
        </a>
    </div>
}

function KoFiButton() {
    return <div className="kofi-container">
        <a href='https://ko-fi.com/J3J31IBV7N' target='_blank' rel='noreferrer' >
            <img height='36' style={{ border: '0px', height: "36px" }} src='https://storage.ko-fi.com/cdn/kofi6.png?v=6' border='0' alt='Buy Me a Coffee at ko-fi.com' />
        </a>
    </div>
}

function LinksComponent({githubLink}) {
    return <div style={{ display: "flex", justifyContent: "center" }}>
        <LinkIcons githubLink={githubLink}/>
        <KoFiButton />
    </div>
}

const footerStyle = { width: "100%", boxSizing: "border-box", borderTop: "1px solid #aaa", padding: "1rem 1rem", textAlign: "center", fontSize: "0.9rem", color: "#ddd", background: "black" }

function Footer({description, gameName, developerName, githubLink}) {
    return (
        <footer style={footerStyle}>
            <div style={{ maxWidth: "700px", margin: "0 auto" }}>
                <p>
                    {description}
                    <br /><br />
                    This project is designed as a free fan-made project for the community. 
                    I create web tools for various games that will hopefully be useful to people. If you'd like
                    to support me, you can check out my ko-fi page or other socials. Thank you!
                </p>

                <div style={{ marginTop: "0.75rem" }}>
                    <LinksComponent githubLink={githubLink}/>
                </div>

                <p style={{ fontSize: "0.8rem" }}>
                    This tool is a fan-made project and is not affiliated with or endorsed by {developerName}.
                    {gameName} and all related assets are © {developerName}. All rights reserved to their respective owners.
                    The tool is free to use, and any donations go directly to supporting development of this tool and other free tools.
                </p>
            </div>
        </footer>
    );
}

export default Footer;