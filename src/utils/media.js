import { useEffect, useState } from 'react';

export const useMediaQuery = (query) => {
    const [matches, setMatches] = useState();
    useEffect(() => {
        const mediaMatch = window.matchMedia(query);
        const handler = (e) => setMatches(e.matches);
        mediaMatch.addEventListener('e', handler);
        return () => mediaMatch.removeEventListener(handler);
    }, []);

    return matches;
};
