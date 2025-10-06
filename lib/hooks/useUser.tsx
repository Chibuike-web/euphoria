import { useUserValue } from "@/store/useUserValue";
import { useEffect } from "react";

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
