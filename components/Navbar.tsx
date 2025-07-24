"use client";

import { Heart, Menu, Search, ShoppingCart, UserRound, X } from "lucide-react";
import logo from "@/app/assets/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useMobileNav } from "@/lib/Hooks";

export default function Navbar() {
	const pathname = usePathname();
	const { isOpen, handleClick } = useMobileNav();
	return (
		<nav className="py-3 md:py-8 sticky top-0 bg-white z-[100] border-shadow">
			<header className="w-full max-w-[1240px] mx-auto flex items-center justify-between px-6 xl:px-0">
				<Image src={logo} alt="Brand Logo" className="w-full max-w-[92px]" width={92} height={45} />
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
					<button className="p-[12px] rounded-[8px] bg-accent">
						<Heart className="size-[20px]" />
					</button>
					<button className="p-[12px] rounded-[8px] bg-accent">
						<UserRound className="size-[20px]" />
					</button>
					<button className="p-[12px] rounded-[8px] bg-accent">
						<ShoppingCart className="size-[20px]" />
					</button>
				</div>

				<button type="button" className="lg:hidden" onClick={handleClick}>
					{isOpen ? <X /> : <Menu />}
				</button>
			</header>
			{isOpen && <MobileNav handleClick={handleClick} pathname={pathname} />}
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
	{
		id: "combos",
		text: "Combos",
	},
	{
		id: "joggers",
		text: "Joggers",
	},
];

function MobileNav({ handleClick, pathname }: { handleClick: () => void; pathname: string }) {
	return (
		<div className="bg-white fixed top-[68.5px] z-[100] w-full px-6 py-10 h-[calc(100vh-68.5px)] ">
			<div className="flex flex-col h-full justify-between gap-y-20 overflow-auto">
				<div className="flex flex-col gap-12">
					<label className="bg-gray-100 px-2 h-10 rounded-[8px] flex items-center gap-3">
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
							const href = item.id === "shop" ? "/" : `/${item.id}`;
							const isActive = pathname === href;
							return (
								<li key={item.id}>
									<Link
										href={href}
										className={cn(
											"transition-colors hover:text-foreground",
											isActive && "text-foreground font-semibold"
										)}
										onClick={handleClick}
									>
										{item.text}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="flex flex-col gap-y-[12px] text-muted-foreground">
					<button className="px-[24px] py-[20px] rounded-[16px] bg-accent flex gap-4 items-center text-[32px]">
						<span>
							<Heart className="size-[32px]" />
						</span>
						<span>Favorites</span>
					</button>
					<button className="px-[24px] py-[20px] rounded-[16px] bg-accent flex gap-4 items-center text-[32px]">
						<span>
							<UserRound className="size-[32px]" />
						</span>
						<span>Profile</span>
					</button>
					<button className="px-[24px] py-[20px] rounded-[16px] bg-accent flex gap-4 items-center text-[32px]">
						<span>
							<ShoppingCart className="size-[32px]" />
						</span>
						<span>Cart</span>
					</button>
				</div>
			</div>
		</div>
	);
}
