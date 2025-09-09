"use client";

import { useUser } from "@/lib/Hooks";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { maskEmail, toSentenceCase } from "../utils";
import { cn } from "@/lib/utils";
import Wishlist from "./Wishlist";

import MyInfo from "./MyInfo";
import { useState } from "react";
import { ChevronRight, LogOut, Menu, X } from "lucide-react";
import { tabs } from "./data";
import { UserType } from "@/lib/userSchema";
import dynamic from "next/dynamic";
const MyOrders = dynamic(() => import("./MyOrders"), { ssr: false });

export default function AccountPageContent() {
	const searchParams = useSearchParams();
	const tab = searchParams.get("tab") || "my-orders";
	const user = useUser();
	const [sidebar, setSideBar] = useState(false);

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
		default:
			mainContent = <MyOrders />;
	}

	const handleLogOut = () => {
		localStorage.removeItem("userInfo");
		sessionStorage.clear();
		window.location.href = "/login";
	};

	return (
		<main>
			<div className=" max-w-[1240px] mx-auto px-6 xl:px-0 my-8 flex items-center gap-2">
				<button className="lg:hidden" onClick={() => setSideBar(true)}>
					<Menu />
				</button>
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
				<div className="w-[310px] hidden lg:block">
					<h3 className="flex items-center gap-[20px] mb-2 text-[clamp(1.25rem,2vh,1.5rem)]">
						<span className="block h-[30px] w-[6px] rounded-full bg-[#8a33fd]" />
						<span className="font-semibold">
							Hello{" "}
							{user
								? maskEmail(user.provider === "google" ? user.name.split(" ")[0] : "")
								: "Guest"}
						</span>
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
										"flex items-center px-10 py-3 gap-4 relative rounded-r-[8px] text-muted-foreground hover:bg-muted",
										isActive &&
											"bg-muted after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-[4px] after:bg-primary text-primary font-semibold"
									)}
								>
									<Icon />
									{label}
								</Link>
							);
						})}

						<li>
							<button
								onClick={handleLogOut}
								className="flex items-center w-full px-10 py-3 gap-4 relative rounded-r-[8px] text-muted-foreground hover:bg-muted cursor-pointer"
							>
								<LogOut />
								<span>Sign out</span>
							</button>
						</li>
					</ul>
				</div>

				<div className="w-full">{mainContent}</div>
			</section>

			{sidebar && user && <SideBar tab={tab} user={user} setSidebar={setSideBar} />}
		</main>
	);
}

const SideBar = ({
	tab,
	user,
	setSidebar,
}: {
	tab: string;
	user: UserType;
	setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<div className="fixed bg-black/50 inset-0 z-[100]" onClick={() => setSidebar(false)}>
			<div className="w-[310px] bg-white py-12 h-screen px-6" onClick={(e) => e.stopPropagation()}>
				<button onClick={() => setSidebar(false)} className="mb-8">
					<X />
				</button>
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
		</div>
	);
};
