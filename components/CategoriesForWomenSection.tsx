import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { AllProductsType } from "@/app/types";
import { categories } from "@/app/utils";

export default async function CategoriesForWomenSection() {
	const res = await fetch("http://localhost:3000/api/products", {
		cache: "no-store",
	});
	const json = await res.json();
	const allProducts: AllProductsType[] = json.data;

	return (
		<section className="flex flex-col gap-6 w-full max-w-[1240px] mx-auto mt-[130px] px-6 xl:px-0">
			<h3 className="flex items-center gap-[20px]">
				<span className="block h-[30px] w-[6px] rounded-full bg-[#8a33fd]" />{" "}
				<span className=" text-[24px] md:text-[34px] font-semibold">Categories For Women</span>
			</h3>

			<div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-12">
				{allProducts
					.filter((item) => item.gender === "women")
					.slice(0, 4)
					.map((i) => (
						<HomeProductCard key={i.id} {...i} />
					))}
			</div>
		</section>
	);
}

function HomeProductCard({ name, image, category }: AllProductsType) {
	let title = "";

	for (const c of categories) {
		if (c.id === category) {
			title = c.label;
			break;
		}
	}
	return (
		<article>
			<Image src={image} alt={name} className="w-full rounded-[16px]" width={270} height={393} />
			<div className="flex items-center justify-between w-full">
				<div className="flex flex-col gap-1 mt-2">
					<h4 className="font-bold text-[20px]">{title}</h4>
					<p className="font-medium text-muted-foreground">Explore Now!</p>
				</div>
				<ArrowRight />
			</div>
		</article>
	);
}
