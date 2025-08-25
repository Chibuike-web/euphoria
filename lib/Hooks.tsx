import { useState, useEffect } from "react";
import { useUserValue } from "@/app/store/useUserValue";

export const usePassword = () => {
	const [showPassword, setShowPassword] = useState(false);

	const handleShowPassword = () => {
		setShowPassword((prev) => !prev);
	};

	return {
		showPassword,
		handleShowPassword,
	};
};

export function useMobileNav() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((prev) => !prev);
	};

	useEffect(() => {
		const root = document.documentElement;
		if (isOpen) {
			root.classList.add("no-scroll");
		} else {
			root.classList.remove("no-scroll");
		}
		return () => root.classList.remove("no-scroll");
	}, [isOpen]);

	return {
		isOpen,
		handleClick,
	};
}

export const useDropdown = () => {
	const [isShow, setIsShow] = useState(false);
	return {
		isShow,
		setIsShow,
	};
};

export const useActive = (value: number | boolean | string | null) => {
	const [active, setActive] = useState(value);

	return {
		active,
		setActive,
	};
};

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

export const useUser = () => {
	const { user, setUser } = useUserValue();

	useEffect(() => {
		const storedUserInfo = sessionStorage.getItem("userInfo");
		if (storedUserInfo) {
			try {
				const parsed = JSON.parse(storedUserInfo);
				setUser(parsed);
			} catch (e) {
				console.error("Invalid user data in sessionStorage", e);
			}
		}
	}, []);

	return user;
};
