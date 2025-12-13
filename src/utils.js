import { useEffect, useState } from "react";

function useBreakpoint() {
    const [width, setWidth] = useState(null);

    useEffect(() => {
        const update = () => setWidth(window.innerWidth);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const isDesktop = width !== null && width >= 1024;
    const isTablet = width !== null && width >= 768 && width < 1024;
    const isMobile = width !== null && width < 768;

    return { isDesktop, isTablet, isMobile, ready: width !== null };
}

export { useBreakpoint };