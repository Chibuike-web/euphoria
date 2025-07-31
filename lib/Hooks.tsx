import { useState, useEffect } from "react";

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
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
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
