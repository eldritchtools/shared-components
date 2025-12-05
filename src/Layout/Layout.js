import { useState } from "react";
import styles from "./Layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { GithubIcon, KoFiIcon, XIcon, YoutubeIcon } from "../LinkIcons";

function Sidebar({ open, paths, LinkComponent = "a", topComponent, githubLink }) {
    return (
        <div
            style={{
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
            }}
        >
            {topComponent ? topComponent : null}
            <nav style={{ display: "flex", flexDirection: "column" }}>
                {paths.map(path =>
                    <LinkComponent className={styles.sidebarButton} key={path.path} href={path.path}>
                        {path.title}
                    </LinkComponent>)
                }
            </nav>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", borderTop: "1px #777 solid", gap: "0.5rem" }}>
                <span style={{ marginTop: "1rem" }}>Follow / Contact / Support</span>
                <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0.5rem" }}>
                    {githubLink ? <GithubIcon githubLink={githubLink} /> : null}
                    {/* <DiscordIcon /> */}
                    <YoutubeIcon />
                    <XIcon />
                    <KoFiIcon />
                </div>
            </div>
        </div>
    );
}

export default function Layout({ title = null, linkSet = null, lastUpdated = null, description = null, gameName = null, developerName = null, githubLink = null, paths = [], LinkComponent = "a", topComponent, children }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const sidebarButton = <button onClick={() => setSidebarOpen(prev => !prev)}>
        ☰
    </button>

    return <div style={{ display: "flex", flexDirection: "column" }}>
        <Header title={title} linkSet={linkSet} lastUpdated={lastUpdated} sidebarButton={sidebarButton} />
        <Sidebar open={sidebarOpen} paths={paths} LinkComponent={LinkComponent} githubLink={githubLink} topComponent={topComponent} />
        <div style={{ display: "flex", flexDirection: "column", marginLeft: sidebarOpen ? "240px" : "0px", overflowY: "auto", transition: "margin-left 0.3s ease" }} >
            <main style={{ minHeight: "calc(100vh - 48px)", padding: "20px", backgroundColor: "#1f1f1f", color: "white" }}>
                {children}
            </main>
            <Footer description={description} gameName={gameName} developerName={developerName} githubLink={githubLink} />
        </div>
    </div>
}