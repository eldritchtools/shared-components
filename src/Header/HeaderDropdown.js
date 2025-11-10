import { useState } from "react";
import "./HeaderDropdown.css";

export default function HeaderDropdown({ name, links }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            style={{
                position: "relative",
                display: "inline-block",
            }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <div style={{ cursor: "pointer", fontSize: "1rem" }}>
                {name} ▼
            </div>

            {open && (
                <div
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        background: "#070707",
                        padding: "6px 0",
                        minWidth: "160px",
                        width: "auto",
                        zIndex: 100,
                    }}
                >
                    {
                        links.map((link, i) => <a href={`https://${link.subdomain}.eldritchtools.com`} key={i} className="header-menu-item">{link.name}</a>)
                    }
                </div>
            )}
        </div>
    );
}
