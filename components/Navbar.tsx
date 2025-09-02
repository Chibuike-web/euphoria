"use client";

import { Heart, Menu, Search, ShoppingCart, UserRound, X } from "lucide-react";
import logo from "@/app/assets/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { useMediaQuery, useMobileNav, useUser } from "@/lib/Hooks";
import { useEffect, useMemo } from "react";

export default function Navbar() {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const { isOpen, handleClick, close } = useMobileNav();
	const isDesktop = useMediaQuery("(min-width: 1024px)");
	const user = useUser();

	useEffect(() => {
		if (isOpen) {
			close();
		}
	}, [pathname]);

	const shouldShowMobileNav = useMemo(() => {
		return isOpen && !isDesktop;
	}, [isOpen, isDesktop]);

	const accountLink = user ? "/account?tab=my-orders" : "/auth/signup";
	const wishlist = user ? "/account?tab=wishlist" : "/auth/signup";
	const tab = searchParams.get("tab");
	const tabs = ["my-orders", "my-info", "my-cancellations", "sign-out"];
	const isAccount = pathname === "/account" && tabs.includes(tab || "");
	const isWishlist = pathname === "/account" && tab === "wishlist";

	const isCart = pathname === "/cart";

	return (
		<nav className="py-3 md:py-8 sticky top-0 bg-white z-[100] border-shadow">
			<header className="w-full max-w-[1240px] mx-auto flex items-center justify-between px-6 xl:px-0">
				<Link href="/">
					<Image
						src={logo}
						alt="Brand Logo"
						className="w-full max-w-[92px]"
						width={92}
						height={45}
					/>
				</Link>
				<div className="hidden lg:flex items-center gap-8">
					<NavLinks pathname={pathname} />
					<label className="bg-gray-100 px-2 h-10 rounded-[8px] hidden lg:flex items-center gap-3">
						<Search className="size-5 text-muted-foreground" />
						<input
							type="search"
							name="search"
							id="search"
							placeholder="search"
							className="border-none outline-none w-full"
						/>
					</label>
				</div>
				<div className="hidden lg:flex items-center gap-x-[12px] text-muted-foreground">
					<Link
						href={wishlist}
						className={cn(
							"p-[12px] rounded-[8px] bg-accent",
							isWishlist ? "bg-primary text-white" : "bg-accent"
						)}
					>
						<Heart className="size-[20px]" />
					</Link>
					<Link
						href={accountLink}
						className={cn(
							"p-[12px] rounded-[8px]",
							isAccount ? "bg-primary text-white" : "bg-accent"
						)}
					>
						<UserRound className="size-[20px]" />
					</Link>

					<Link
						href="/cart"
						className={cn("p-[12px] rounded-[8px]", isCart ? "bg-primary text-white" : "bg-accent")}
					>
						<ShoppingCart className="size-[20px]" />
					</Link>
				</div>

				<button type="button" className="lg:hidden" onClick={handleClick}>
					{isOpen ? <X /> : <Menu />}
				</button>
			</header>
			{shouldShowMobileNav && (
				<MobileNav
					isOpen={isOpen}
					handleClick={handleClick}
					pathname={pathname}
					isCart={isCart}
					isWishlist={isWishlist}
					isAccount={isAccount}
					accountLink={accountLink}
				/>
			)}
		</nav>
	);
}

const NavLinks = ({ pathname }: { pathname: string }) => {
	return (
		<ul className="flex items-center gap-10 text-muted-foreground">
			{navLinks.map((item) => {
				const href = item.id === "shop" ? "/" : `/products/${item.id}`;
				const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
				return (
					<li key={item.id}>
						<Link
							href={href}
							className={cn(
								"transition-colors hover:text-foreground",
								isActive && "text-foreground font-semibold"
							)}
						>
							{item.text}
						</Link>
					</li>
				);
			})}
			<li className="hover:text-foreground cursor-pointer">Combos</li>
			<li className="hover:text-foreground cursor-pointer">Joggers</li>
		</ul>
	);
};

type NavLinksType = {
	id: string;
	text: string;
};
const navLinks: NavLinksType[] = [
	{
		id: "shop",
		text: "Shop",
	},
	{
		id: "men",
		text: "Men",
	},
	{
		id: "women",
		text: "Women",
	},
];

function MobileNav({
	isOpen,
	handleClick,
	pathname,
	isCart,
	isAccount,
	isWishlist,
	accountLink,
}: {
	isOpen: boolean;
	handleClick: () => void;
	pathname: string;
	isCart: boolean;
	isWishlist: boolean;
	isAccount: boolean;
	accountLink: string;
}) {
	return (
		<div className="bg-white fixed top-[68.5px] md:top-[100px] bottom-0 left-0 right-0 z-[100] px-6 py-10">
			<div className="flex flex-col h-full justify-between gap-y-20 overflow-auto w-full">
				<div className="flex flex-col gap-12 w-full">
					<label className="bg-gray-100 px-2 h-10 rounded-[8px] flex items-center gap-3 w-full">
						<Search className="size-5 text-muted-foreground" />
						<input
							type="search"
							name="search"
							id="search"
							placeholder="search"
							className="border-none outline-none w-full"
						/>
					</label>
					<ul className="flex flex-col text-[24px] gap-12 text-muted-foreground">
						{navLinks.map((item) => {
							const href = item.id === "shop" ? "/" : `/products/${item.id}`;
							const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
							return (
								<li key={item.id}>
									<Link href={href} className={cn(isActive && "text-foreground font-semibold")}>
										{item.text}
									</Link>
								</li>
							);
						})}
						<li>Combos</li>
						<li>Joggers</li>
					</ul>
				</div>
				<div className="flex flex-col gap-y-[12px] text-muted-foreground">
					<Link
						href="/account?tab=wishlist"
						className={cn(
							"px-[24px] py-[20px] rounded-[16px] flex gap-4 items-center text-[32px]",
							isWishlist ? "bg-primary text-white" : "bg-accent"
						)}
						onClick={handleClick}
					>
						<span>
							<Heart className="size-[32px]" />
						</span>
						<span>Favorites</span>
					</Link>
					<Link
						href={accountLink}
						className={cn(
							"px-[24px] py-[20px] rounded-[16px] flex gap-4 items-center text-[32px]",
							isAccount ? "bg-primary text-white" : "bg-accent"
						)}
					>
						<span>
							<UserRound className="size-[32px]" />
						</span>
						<span>Profile</span>
					</Link>

					<Link
						href="/cart"
						className={cn(
							"px-[24px] py-[20px] rounded-[16px] bg-accent flex gap-4 items-center text-[32px]",
							isCart ? "bg-primary text-white" : "bg-accent"
						)}
					>
						<ShoppingCart className="size-[32px]" />
						<span>Cart</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
