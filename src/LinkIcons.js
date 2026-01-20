import { FaGithub, FaYoutube, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import KofiIconSvg from './KofiIconSvg';
import { useEffect, useState } from 'react';

const iconStyle = {
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
    transition: 'transform 0.2s ease',
};

function GithubIcon({ githubLink }) {
    return <a href={githubLink} target="_blank" rel="noopener noreferrer" style={iconStyle} title="GitHub Repo" >
        <FaGithub />
    </a>;
}

function DiscordIcon() {
    const [url, setUrl] = useState(null);

    useEffect(() => {
        let attempt = 0;
        const fetchData = async () => {
            try {
                const response = await fetch("https://shared.eldritchtools.com/links.json");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setUrl(result.discord);
            } catch (error) {
                if (attempt < 5) {
                    attempt++;
                    const delay = retryDelay * Math.pow(2, attempt - 1);
                    setTimeout(fetchData, delay);
                } else {
                    console.error(error.message);
                }
            }
        };

        fetchData();
    }, []);

    if (!url) return null;
    return <a href={url} target="_blank" rel="noopener noreferrer" style={{ ...iconStyle, color: '#5865F2' }} title="Discord" >
        <FaDiscord />
    </a>
}

function YoutubeIcon() {
    return <a href="https://www.youtube.com/@EldritchPlays" target="_blank" rel="noopener noreferrer" style={{ ...iconStyle, color: 'red' }} title="YouTube" >
        <FaYoutube />
    </a>
}

function XIcon() {
    return <a href="https://x.com/EldritchTools" target="_blank" rel="noopener noreferrer" style={iconStyle} title="Twitter / X" >
        <FaXTwitter />
    </a>
}

function KoFiButton() {
    return <a href='https://ko-fi.com/J3J31IBV7N' target='_blank' rel='noreferrer' >
        <img height='36' style={{ border: '0px', height: "36px" }} src='https://storage.ko-fi.com/cdn/kofi6.png?v=6' border='0' alt='Buy Me a Coffee at ko-fi.com' />
    </a>
}

function KoFiIcon() {
    return <a href='https://ko-fi.com/J3J31IBV7N' target='_blank' rel='noopener noreferrer' style={iconStyle} title={"Ko-Fi"} >
        <KofiIconSvg />
    </a>
}

export { GithubIcon, DiscordIcon, YoutubeIcon, XIcon, KoFiButton, KoFiIcon };