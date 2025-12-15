import { useEffect, useRef, useState } from "react";
import styles from "./Layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { DiscordIcon, GithubIcon, KoFiIcon, XIcon, YoutubeIcon } from "../LinkIcons";
import { Tooltip } from "react-tooltip";
import { useBreakpoint } from "../utils";

const ArrowIcon = ({ open }) => (
    <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        style={{
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
            transformOrigin: "50% 50%",
            display: "block"
        }}
    >
        <polygon points="8,5 20,12 8,19" fill="currentColor" />
    </svg>
);

function PathLink({ path, styleOverride, LinkComponent, closeSidebar }) {
    if ("tooltip" in path) {
        return <div data-tooltip-id="sidebarNavTooltip" data-tooltip-content={path.tooltip} style={{ display: "flex", width: "100%", height: "auto" }}>
            <LinkComponent className={styles.sidebarButton} style={{ ...styleOverride, width: "100%", height: "auto" }} href={path.path} onClick={closeSidebar}>
                {path.title}
            </LinkComponent>
        </div>
    } else {
        return <LinkComponent className={styles.sidebarButton} style={styleOverride} href={path.path} onClick={closeSidebar}>
            {path.title}
        </LinkComponent>
    }
}

function MultiPath({ path, LinkComponent, closeSidebar }) {
    const [open, setOpen] = useState(false);

    const toggleStyle = {
        width: "22px",
        height: "22px",
        border: "none",
        background: "none",
        cursor: "pointer",
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };

    return <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <PathLink path={path} styleOverride={{ flex: 1 }} LinkComponent={LinkComponent} closeSidebar={closeSidebar} />
            <button style={toggleStyle} onClick={(e) => { e.stopPropagation(); setOpen((o) => !o); }}><ArrowIcon open={open} /></button>
        </div>

        <div style={{ display: open ? "flex" : "none", flexDirection: "column", paddingLeft: "16px" }}>
            {path.subpaths.map((subpath, i) =>
                <PathLink key={i} path={subpath} styleOverride={{ fontSize: "1rem", fontWeight: "500", padding: "4px 6px" }} LinkComponent={LinkComponent} closeSidebar={closeSidebar} />
            )}
        </div>
    </div>
}

function Navigation({ paths, LinkComponent, closeSidebar }) {
    return <nav style={{ display: "flex", flexDirection: "column" }}>
        {paths.map((path, i) => {
            if ("subpaths" in path) {
                return <MultiPath key={i} path={path} LinkComponent={LinkComponent} closeSidebar={closeSidebar} />;
            } else {
                return <PathLink key={i} path={path} LinkComponent={LinkComponent} closeSidebar={closeSidebar} />;
            }
        })}
    </nav>
}

function Sidebar({ open, paths, LinkComponent = "a", topComponent, githubLink, closeSidebar }) {
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
                transform: open ? "translateX(0)" : "translateX(-100%)",
                zIndex: "999"
            }}
        >
            {topComponent ? topComponent : null}
            <Navigation paths={paths} LinkComponent={LinkComponent} closeSidebar={closeSidebar} />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", borderTop: "1px #777 solid", gap: "0.5rem" }}>
                <span style={{ marginTop: "1rem" }}>Follow / Contact / Support</span>
                <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0.5rem" }}>
                    {githubLink ? <GithubIcon githubLink={githubLink} /> : null}
                    <DiscordIcon />
                    <YoutubeIcon />
                    <XIcon />
                    <KoFiIcon />
                </div>
                <span style={{ fontSize: "0.8rem", textAlign: "center", width: "80%" }}>Site updates and community feedback on Discord.</span>
            </div>
        </div>
    );
}

export default function Layout({ title = null, linkSet = null, lastUpdated = null, description = null, gameName = null, developerName = null, githubLink = null, paths = [], LinkComponent = "a", topComponent, children }) {
    const { isDesktop, ready } = useBreakpoint();
    const initialized = useRef(false);

    const [sidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        if (!ready || initialized.current) return;

        setSidebarOpen(isDesktop);
        initialized.current = true;
    }, [ready, isDesktop]);

    const sidebarButton = <button onClick={() => setSidebarOpen(prev => !prev)}>
        ☰
    </button>

    const closeSidebar = () => setSidebarOpen(false);

    return <div style={{ display: "flex", flexDirection: "column" }}>
        <Header title={title} linkSet={linkSet} lastUpdated={lastUpdated} sidebarButton={sidebarButton} />
        <Sidebar open={sidebarOpen} paths={paths} LinkComponent={LinkComponent} githubLink={githubLink} topComponent={topComponent} closeSidebar={(ready && !isDesktop) ? closeSidebar : undefined} />
        <div style={{ display: "flex", flexDirection: "column", marginLeft: (sidebarOpen && isDesktop) ? "240px" : "0px", overflowY: "auto", transition: "margin-left 0.3s ease" }} >
            <main style={{ minHeight: "calc(100vh - 48px)", padding: "20px", backgroundColor: "#1f1f1f", color: "white" }}>
                {children}
            </main>
            <Footer description={description} gameName={gameName} developerName={developerName} githubLink={githubLink} />
        </div>
        {(ready && !isDesktop && sidebarOpen) ? <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: "998" }} onClick={closeSidebar} /> : null}

        <Tooltip
            id={"sidebarNavTooltip"}
            render={({ content }) => <div style={{ whiteSpace: "pre-wrap" }}>{content}</div>}
            style={{ outline: "1px #ddd solid", backgroundColor: "#000000", borderRadius: "1rem", zIndex: "9999" }}
        />
    </div>
}