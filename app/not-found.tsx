import { Button } from "@/components/ui/button";
import Link from "next/link";
import image from "./assets/404-image.png";

export default function NotFound() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen text-center py-10">
			<h1 className="text-6xl font-bold ">
				<div
					style={{
						backgroundImage: `url(${image.src})`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "contain",
						backgroundPosition: "bottom center",
					}}
					className="w-full md:h-[clamp(180px,25vw,257px)] flex items-end justify-center gap-2"
				>
					<span className="text-[clamp(80px,20vw,200px)] font-semibold inline-block ">4</span>
					<span className="text-[clamp(80px,20vw,200px)] font-semibold inline-block text-white">
						0
					</span>
					<span className="text-[clamp(80px,20vw,200px)] font-semibold inline-block rotate-[28deg]">
						4
					</span>
				</div>
			</h1>
			<div className="max-w-[450px] text-center my-6">
				<p className="font-semibold text-[34px]">Oops! Page not found</p>
				<p className="mt-2 text-lg text-gray-600 font-medium">
					The page you are looking for might have been removed or temporarily unavailable.
				</p>
			</div>
			<Link href="/" className="">
				<Button className="text-[18px] font-semibold px-8" size="lg">
					Back to HomePage
				</Button>
			</Link>
		</main>
	);
}
