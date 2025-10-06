import { useState } from "react";

export const useDropdown = () => {
	const [isShow, setIsShow] = useState(false);
	return {
		isShow,
		setIsShow,
	};
};
