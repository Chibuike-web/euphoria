import { useState } from "react";

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
