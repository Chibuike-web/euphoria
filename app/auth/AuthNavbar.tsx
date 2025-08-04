"use client";

import Image from "next/image";
import logo from "@/app/assets/Logo.svg";
import { Button } from "@/components/ui/button";
import { Menu, Search, X } from "lucide-react";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useMobileNav } from "@/lib/Hooks";
import Link from "next/link";

export default function Navbar() {
	const { isOpen, handleClick } = useMobileNav();
	return (
		<header className="py-3 md:py-8">
			<nav className="w-full max-w-[1240px] mx-auto flex items-center justify-between px-6 xl:px-0">
				<div className="flex items-center gap-10">
					<Image
						src={logo}
						alt="Brand Logo"
						className="w-full max-w-[92px]"
						width={92}
						height={45}
					/>

					<Select defaultValue="en-US">
						<SelectTrigger className="w-[250px] hidden lg:flex">
							<SelectValue />
						</SelectTrigger>
						<SelectContent className="w-[var(--radix-select-trigger-width)]">
							<SelectItem value="en-US">English (United States)</SelectItem>
							<SelectItem value="en-UK">English (United Kingdom)</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<label className="bg-gray-100 px-2 h-10 rounded-[8px] hidden lg:flex items-center gap-3">
					<Search className="size-5" />
					<input
						type="search"
						name="search"
						id="search"
						placeholder="search"
						className="border-none outline-none w-full"
					/>
				</label>
				<div className="hidden lg:flex items-center gap-4 ">
					<Link href="/auth/login">
						<Button variant="default" size="md">
							Login
						</Button>
					</Link>
					<Link href="/auth/signup">
						<Button variant="outline" size="md">
							Sign up
						</Button>
					</Link>
				</div>

				<button type="button" className="lg:hidden" onClick={handleClick}>
					{isOpen ? <X /> : <Menu />}
				</button>
			</nav>
			{isOpen && <MobileNav />}
		</header>
	);
}

function MobileNav() {
	return (
		<nav className="fixed top-[68.5px] z-[100] inset-0 bg-white px-6 py-10 flex flex-col justify-between">
			<div className="flex flex-col gap-6">
				<Select defaultValue="en-US">
					<SelectTrigger className="w-full">
						<SelectValue />
					</SelectTrigger>
					<SelectContent className="w-[var(--radix-select-trigger-width)]">
						<SelectItem value="en-US">English (United States)</SelectItem>
						<SelectItem value="en-UK">English (United Kingdom)</SelectItem>
					</SelectContent>
				</Select>

				<label className="bg-gray-100 px-2 h-10 rounded-[8px] flex items-center gap-3">
					<Search className="size-5" />
					<input
						type="search"
						name="search"
						id="search"
						placeholder="search"
						className="border-none outline-none w-full"
					/>
				</label>
			</div>

			<div className="flex flex-col items-center gap-2 ">
				<Button variant="default" size="md" className="w-full">
					Login
				</Button>
				<Button variant="outline" size="md" className="w-full">
					Sign up
				</Button>
			</div>
		</nav>
	);
}
