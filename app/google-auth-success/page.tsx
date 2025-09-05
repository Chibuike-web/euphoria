"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GoogleAuthSuccess() {
	const router = useRouter();
	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const userParam = params.get("user");
		if (userParam) {
			try {
				const user = JSON.parse(userParam);
				sessionStorage.setItem("userInfo", JSON.stringify(user));
			} catch (error) {
				console.error("Failed to parse user from URL:", error);
				sessionStorage.clear();
			}
		}

		const storedUser = sessionStorage.getItem("userInfo");
		if (!storedUser) {
			router.push("/auth/signup");
			return;
		}
		router.push("/");
	}, [router]);

	return <div>Loading...</div>;
}
