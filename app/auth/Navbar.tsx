"use client";

import Image from "next/image";
import logo from "@/app/assets/Logo.svg";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<nav className="py-3 md:py-8">
			<header className="w-full max-w-[1240px] mx-auto flex items-center justify-between px-6 xl:px-0">
				<div className="flex items-center gap-10">
					<Image
						src={logo}
						alt="Brand Logo"
						className="w-full max-w-[92px]"
						width={92}
						height={45}
					/>
					<div className="relative hidden lg:inline-block w-[190px]">
						<select
							id="select"
							name="language"
							className="w-full appearance-none bg-white p-2 text-sm outline-none"
						>
							<option value="en-US">English (United States)</option>
							<option value="en-UK">English (United Kingdom)</option>
						</select>
						<div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-500">
							<ChevronDown />
						</div>
					</div>
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
					<Button variant="default" size="md">
						Login
					</Button>
					<Button variant="outline" size="md">
						Sign up
					</Button>
				</div>

				<button type="button" className="lg:hidden" onClick={handleClick}>
					{isOpen ? <X /> : <Menu />}
				</button>
			</header>
			{isOpen && <MobileNav isOpen={isOpen} />}
		</nav>
	);
}

function MobileNav({ isOpen }: { isOpen: boolean }) {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);
	return (
		<div className="fixed top-[68.5px] bg-black/80 inset-0">
			<div className="bg-white h-full px-6 py-10 flex flex-col justify-between">
				<div className="flex flex-col gap-6">
					<div className="relative inline-block w-full">
						<select
							id="select"
							name="language"
							className="w-full appearance-none bg-white p-2 text-sm outline-none"
						>
							<option value="en-US">English (United States)</option>
							<option value="en-UK">English (United Kingdom)</option>
						</select>
						<div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
							<ChevronDown />
						</div>
					</div>

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
			</div>
		</div>
	);
}
