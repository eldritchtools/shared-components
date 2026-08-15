import { useBreakpoint } from "../utils";

function DesktopFooter({ disclaimer, topComponent, leftComponent, rightComponent }) {
    return <div
        style={{
            display: "grid", gridTemplateColumns: "1fr minmax(0, 700px) 1fr", alignItems: "start",
            width: "100%", maxWidth: "1400px", margin: "0 auto",
        }}
    >
        <div style={{ justifySelf: "start" }}>
            {leftComponent}
        </div>

        <div style={{ textAlign: "center" }}>
            {topComponent}

            <p style={{ fontSize: "0.8rem" }}>
                {disclaimer}
            </p>
        </div>

        <div style={{ justifySelf: "end" }}>
            {rightComponent}
        </div>
    </div>
}

function MobileFooter({ disclaimer, topComponent }) {
    return <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        {topComponent}

        <p style={{ fontSize: "0.8rem" }}>
            {disclaimer}
        </p>
    </div>
}

export default function Footer({ gameName, developerName, topComponent, leftComponent, rightComponent }) {
    const { isDesktop, ready } = useBreakpoint();

    const disclaimer = `This tool is a fan-made project and is not affiliated with or endorsed by ${developerName}. ${gameName} and all related assets are © ${developerName}. All rights reserved to their respective owners.`

    return (
        <footer style={{
            width: "100%", boxSizing: "border-box", borderTop: "1px solid var(--border-secondary-color, #777)",
            padding: "1rem 1rem", textAlign: "center", fontSize: "0.9rem", color: "var(--primary-text-color, #ddd)",
            background: "var(--bg-secondary, #000)"
        }}>
            {ready ? (
                isDesktop
                    ? <DesktopFooter
                        disclaimer={disclaimer}
                        topComponent={topComponent} leftComponent={leftComponent} rightComponent={rightComponent}
                    />
                    : <MobileFooter disclaimer={disclaimer} topComponent={topComponent}
                    />
            ) : null}
        </footer>
    );
}