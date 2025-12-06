"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import AuthNavbar from "@/app/(auth)/AuthNavbar";
import Footer from "@/components/Footer";
import { ReactNode, Suspense } from "react";

export default function ConditionalLayout({ children }: { children: ReactNode }) {
	return (
		<Suspense>
			<Main>{children}</Main>
		</Suspense>
	);
}

function Main({ children }: { children: ReactNode }) {
	const pathname = usePathname();

	const noFooterPaths = [
		"/check-email",
		"/create-new-password",
		"/login",
		"/reset-password",
		"/signup",
		"/verification",
	];
	const authNavbarPaths = [
		"/check-email",
		"/create-new-password",
		"/login",
		"/reset-password",
		"/signup",
		"/verification",
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
