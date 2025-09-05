// components/ConditionalLayout.tsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import AuthNavbar from "@/app/(auth)/AuthNavbar";
import Footer from "@/components/Footer";
import { ReactNode, Suspense } from "react";

export default function ConditionalLayout({ children }: { children: ReactNode }) {
	const pathname = usePathname();

	const noFooterPaths = [
		"/auth/check-email",
		"/auth/create-new-password",
		"/auth/login",
		"/auth/reset-password",
		"/auth/signup",
		"auth/verification",
	];
	const authNavbarPaths = [
		"/auth/check-email",
		"/auth/create-new-password",
		"/auth/login",
		"/auth/reset-password",
		"/auth/signup",
		"auth/verification",
	];

	const shouldShowFooter = !noFooterPaths.includes(pathname);
	const useAuthNavbar = authNavbarPaths.includes(pathname);

	return (
		<>
			{useAuthNavbar ? (
				<AuthNavbar />
			) : (
				<Suspense fallback={null}>
					<Navbar />
				</Suspense>
			)}
			{children}
			{shouldShowFooter && <Footer />}
		</>
	);
}
