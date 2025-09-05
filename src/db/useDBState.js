import { useState, useEffect } from "react";
import db from "./db";
import useDebouncedEffect from "use-debounced-effect";

function useDBState(dbName, key, defaultValue, settings = {}) {
    const [state, setState] = useState(defaultValue);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        (async () => {
            try {
                const value = await db.getItem(dbName, key);
                if (isMounted) {
                    if (value === undefined) {
                        await db.setItem(dbName, key, defaultValue);
                        setState(defaultValue);
                    } else {
                        setState(value);
                    }
                }
            } finally {
                if (isMounted) setLoading(false);
            }
        })();

        return () => {isMounted = false;};
    }, [dbName, key]);

    useDebouncedEffect(() => {
        (async () => {
            if (!loading) {
                await db.setItem(dbName, key, state);
            }
        })();
    }, settings.debounced ?? 0, [dbName, key, state, loading]);

    return [state, setState, loading];
}

export default useDBState;