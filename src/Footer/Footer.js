import styles from "./Footer.module.css";

export default function Footer({ gameName, developerName, topComponent, leftComponent, rightComponent }) {
    const disclaimer =
        `This tool is a fan-made project and is not affiliated with or endorsed by ${developerName}. ` +
        `${gameName} and all related assets are © ${developerName}. ` +
        `All rights reserved to their respective owners.`;

    return (
        <footer style={{
            width: "100%", boxSizing: "border-box", borderTop: "1px solid var(--border-secondary-color, #777)",
            padding: "1rem 1rem", textAlign: "center", fontSize: "0.9rem", color: "var(--primary-text-color, #ddd)",
            background: "var(--bg-secondary, #000)"
        }}>
            <div className={styles.footerLayout}>
                <div className={styles.footerLeft}>
                    {leftComponent}
                </div>

                <div className={styles.footerCenter}>
                    {topComponent}

                    <p style={{ fontSize: "0.8rem" }}>
                        {disclaimer}
                    </p>
                </div>

                <div className={styles.footerRight}>
                    {rightComponent}
                </div>
            </div>
        </footer>
    );
}