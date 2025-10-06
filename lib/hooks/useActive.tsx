import { useState } from "react";

export const useActive = (value: number | boolean | string | null) => {
	const [active, setActive] = useState(value);

	return {
		active,
		setActive,
	};
};
