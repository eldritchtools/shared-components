import { useState } from "react";
import styles from "./HeaderDropdown.module.css";

export default function HeaderDropdown({ name, links }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            style={{
                position: "relative",
                display: "inline-block",
                padding: "6px 2px"
            }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <div style={{ cursor: "pointer", fontSize: "1rem" }}>
                {name} ▼
            </div>

            {open && (
                <div className={styles.headerMenu}>
                    {
                        links.map((link, i) =>
                            <a key={i} href={`https://${link.subdomain}.eldritchtools.com`} className={styles.headerMenuItem}>
                                {link.name}
                            </a>)
                    }
                </div>
            )}
        </div>
    );
}
