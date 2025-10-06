import { useCallback, useEffect, useState } from "react";

type UseMobileNavReturn = {
	isOpen: boolean;
	handleClick: () => void;
	close: () => void;
};

export function useMobileNav(): UseMobileNavReturn {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	const handleClick = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);

	const close = useCallback(() => {
		setIsOpen(false);
	}, []);

	return {
		isOpen,
		handleClick,
		close,
	};
}
