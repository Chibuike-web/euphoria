"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function page() {
	const router = useRouter();
	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const userParam = params.get("user");
		if (userParam) {
			try {
				const user = JSON.parse(decodeURIComponent(userParam));
				sessionStorage.setItem("user", JSON.stringify(user));
			} catch (e) {
				console.error("Failed to parse user from URL:", e);
				localStorage.clear();
			}
		}

		const storedUser = sessionStorage.getItem("user");
		if (!storedUser) {
			router.push("/auth/signup");
			return;
		}
		router.push("/");
	}, [router]);

	return <div>Loading...</div>;
}
