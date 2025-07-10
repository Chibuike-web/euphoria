import Image from "next/image";
import logo from "@/app/assets/Logo.svg";
import { Button } from "@/components/ui/button";
import { ChevronDown, Search } from "lucide-react";

export default function Navbar() {
	return (
		<nav className="py-8">
			<header className="w-full max-w-[1240px] mx-auto flex items-center justify-between px-6 xl:px-0">
				<div className="flex items-center gap-10">
					<Image
						src={logo}
						alt="Brand Logo"
						className="w-full max-w-[92px]"
						width={92}
						height={45}
					/>
					<div className="flex items-center">
						<select className="appearance-none border-0 outline-0">
							<option value="English(United States)">English (United States)</option>
							<option value="English(United States)">English (United States)</option>
						</select>
						<ChevronDown />
					</div>
				</div>
				<div className="bg-gray-100 px-2 h-10 rounded-[8px] flex items-center gap-3">
					<Search className="size-5" />
					<input
						type="search"
						name="search"
						id="search"
						placeholder="search"
						className="border-none outline-none"
					/>
				</div>

				<div className="flex items-center gap-4">
					<Button variant="default" size="md">
						Login
					</Button>
					<Button variant="outline" size="md">
						Sign up
					</Button>
				</div>
			</header>
		</nav>
	);
}
