"use client";

import { useUser } from "@/lib/Hooks";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { useSearchParams } from "next/navigation";
import { ChevronRight, Heart, LogOut, LucideIcon, ShoppingBag, UserRound, X } from "lucide-react";
import { maskEmail, toSentenceCase } from "../utils";
import { cn } from "@/lib/utils";
import Wishlist from "./Wishlist";
import MyOrders from "./MyOrders";
import MyInfo from "./MyInfo";

export default function Account() {
	const searchParams = useSearchParams();
	const tab = searchParams.get("tab") || "my-orders";
	const user = useUser();

	let mainContent = null;

	switch (tab) {
		case "my-orders":
			mainContent = <MyOrders />;
			break;
		case "wishlist":
			mainContent = <Wishlist />;
			break;
		case "my-info":
			mainContent = <MyInfo />;
			break;
		case "sign-out":
			mainContent = <div>Signing out...</div>;
			break;
		default:
			mainContent = <MyOrders />;
	}

	return (
		<main>
			<div className=" max-w-[1240px] mx-auto px-6 xl:px-0 my-8 flex items-center gap-2">
				<span className="text-muted-foreground">Home</span>
				<span className="text-muted-foreground">
					<ChevronRight />
				</span>
				<span className="text-muted-foreground">My Account</span>
				<span className="text-muted-foreground">
					<ChevronRight />
				</span>
				<span className="font-medium">{toSentenceCase(tab).replace("-", " ")}</span>
			</div>
			<section className="flex gap-12 max-w-[1240px] mx-auto px-6 xl:px-0 mb-[100px]">
				<div className="w-[310px]">
					<h3 className="flex items-center gap-[20px] mb-2 text-[clamp(1.25rem,2vh,1.5rem)]">
						<span className="block h-[30px] w-[6px] rounded-full bg-[#8a33fd]" />
						<span className="font-semibold">Hello {user ? maskEmail(user.email) : "Guest"}</span>
					</h3>
					<span className="mb-6 block">Welcome to your Account</span>

					<ul className="flex flex-col gap-4 w-full">
						{tabs.map(({ id, link, label, tabKey, icon: Icon }) => {
							const isActive = tab === tabKey;
							return (
								<Link
									href={link}
									key={id}
									className={cn(
										"flex items-center px-10 py-3 gap-4 relative rounded-r-[8px] text-muted-foreground",
										isActive &&
											"bg-muted after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-[4px] after:bg-primary text-primary font-semibold"
									)}
								>
									<Icon />
									{label}
								</Link>
							);
						})}
					</ul>
				</div>

				<div className="w-full">{mainContent}</div>
			</section>
		</main>
	);
}

type TabItem = {
	id: string;
	label: string;
	icon: LucideIcon;
	link: string;
	tabKey: string;
};
const tabs: TabItem[] = [
	{
		id: uuidv4(),
		label: "My orders",
		icon: ShoppingBag,
		link: "/account?tab=my-orders",
		tabKey: "my-orders",
	},
	{
		id: uuidv4(),
		label: "Wishlist",
		icon: Heart,
		link: "/account?tab=wishlist",
		tabKey: "wishlist",
	},
	{
		id: uuidv4(),
		label: "My Info",
		icon: UserRound,
		link: "/account?tab=my-info",
		tabKey: "my-info",
	},
	{
		id: uuidv4(),
		label: "Sign Out",
		icon: LogOut,
		link: "/account?tab=sign-out",
		tabKey: "sign-out",
	},
];
