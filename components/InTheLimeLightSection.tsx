import ProductCard from "./ProductCard";
import { allProducts } from "@/app/api/products/products";

export default async function InTheLimeLightSection() {
	const allProductsList = allProducts;

	return (
		<section className="flex flex-col gap-6 w-full max-w-[1240px] mx-auto mt-[130px] px-6 xl:px-0">
			<h3 className="flex items-center gap-[20px]">
				<span className="block h-[30px] w-[6px] rounded-full bg-[#8a33fd]" />{" "}
				<span className=" text-[24px] md:text-[34px] font-semibold">In The Limelight</span>
			</h3>

			<div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-12">
				{allProductsList
					.filter((item) => item.tags?.[0].section === "InTheLimelight")
					.map((i) => (
						<ProductCard key={i.id} {...i} />
					))}
			</div>
		</section>
	);
}
