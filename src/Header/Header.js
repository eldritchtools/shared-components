import React from "react";

function formatLastUpdated(isoString) {
    if (!isoString) return null;

    const date = new Date(isoString);

    return date.toLocaleString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        timeZoneName: "shortOffset"
    });
}

function Header({ title = null, lastUpdated = null }) {
    return (
        <header
            style={{
                position: "sticky",
                top: 0,
                padding: "1rem 2rem",
                background: "#111111",
                color: "#ddd",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                paddingRight: "1rem",
                boxSizing: "border-box",
                zIndex: 1000
            }}
        >
            {/* Future link to landing page */}
            <div>
                
            </div>

            <div style={{ margin: 0, fontSize: "1.25rem", fontWeight: "bold", position: "absolute", left: "50%", transform: "translateX(-50%)", }}>{title}</div>

            <div style={{ fontWeight: "normal", fontSize: "0.85rem", opacity: 0.75, textAlign: "right" }}>
                {lastUpdated ? `Last updated: ${formatLastUpdated(lastUpdated)}` : null}
            </div>
        </header>
    );
}

export default Header;