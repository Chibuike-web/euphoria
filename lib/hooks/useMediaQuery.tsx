import { useEffect, useState } from "react";

export const useMediaQuery = (query: string): boolean => {
	const [matches, setMatches] = useState<boolean>(() =>
		typeof window === "undefined" ? false : window.matchMedia(query).matches
	);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const media = window.matchMedia(query);
		const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

		setMatches(media.matches);
		media.addEventListener("change", listener);

		return () => media.removeEventListener("change", listener);
	}, [query]);

	return matches;
};
