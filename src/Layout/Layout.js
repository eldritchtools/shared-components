import { useState } from "react";
import styles from "./Layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Sidebar({ open, paths, LinkComponent = "a", topComponent, bottomComponent }) {
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
                justifyContent: "space-between",
                borderRight: open ? "1px #777 solid" : "transparent",
                transform: open ? "translateX(0)" : "translateX(-100%)"
            }}
        >
            <div style={{ marginTop: "20px", display: "flex", flexDirection: "column" }}>
                {topComponent ? topComponent : null}
                <nav style={{ display: "flex", flexDirection: "column" }}>
                    {paths.map(path =>
                        <LinkComponent className={styles.sidebarButton} key={path.path} href={path.path}>
                            {path.title}
                        </LinkComponent>)
                    }
                </nav>
            </div>
            {bottomComponent ? bottomComponent : null}
        </div>
    );
}

export default function Layout({ title = null, linkSet = null, lastUpdated = null, description = null, gameName = null, developerName = null, githubLink = null, paths = [], LinkComponent = "a", topComponent, bottomComponent, children }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const sidebarButton = <button onClick={() => setSidebarOpen(prev => !prev)}>
        ☰
    </button>

    return <div style={{ display: "flex", flexDirection: "column" }}>
        <Header title={title} linkSet={linkSet} lastUpdated={lastUpdated} sidebarButton={sidebarButton} />
        <Sidebar open={sidebarOpen} paths={paths} LinkComponent={LinkComponent} topComponent={topComponent} bottomComponent={bottomComponent} />
        <div style={{ display: "flex", flexDirection: "column", marginLeft: sidebarOpen ? "240px" : "0px", overflowY: "auto", transition: "margin-left 0.3s ease" }} >
            <main style={{ minHeight: "calc(100vh - 48px)", padding: "20px", backgroundColor: "#1f1f1f", color: "white" }}>
                {children}
            </main>
            <Footer description={description} gameName={gameName} developerName={developerName} githubLink={githubLink} />
        </div>
    </div>
}