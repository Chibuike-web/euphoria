import { ArrowDown } from "lucide-react";
import type { AllProductsType } from "@/app/types";
import { cn } from "@/lib/utils";

export default async function BigSavingZoneSection() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products`, {
		cache: "no-store",
	});
	const json = await res.json();
	const allProductsList: AllProductsType[] = json.data;
	return (
		<section className="flex flex-col gap-6 w-full max-w-[1240px] mx-auto mt-[130px] px-6 xl:px-0">
			<h3 className="flex items-center gap-[20px]">
				<span className="block h-[30px] w-[6px] rounded-full bg-[#8a33fd]" />{" "}
				<span className=" text-[24px] md:text-[34px] font-semibold">Big Saving Zone</span>
			</h3>

			<div className="flex flex-wrap gap-6">
				{allProductsList
					.filter((item) => item.tags?.[0].section === "BigSavingZone")
					.map((i, index) => (
						<BigSavingZoneCard key={i.id} {...i} index={index} />
					))}
			</div>
		</section>
	);
}

type BigSavingZoneProps = AllProductsType & {
	index: number;
};

function BigSavingZoneCard({ name, desc, images, promo, custom, index }: BigSavingZoneProps) {
	const articleStyles = [
		" px-8 text-white",
		"items-end  px-8 text-white",
		"items-end  px-8 text-black",
		"items-end px-8 md:px-16 text-black",
		"items-end px-8 md:px-16 text-black",
	];

	const styles = articleStyles[index];

	return (
		<article
			className={cn(
				"w-full relative flex flex-col justify-center flex-1 h-[393px] min-w-[200px] md:min-w-[300px] overflow-hidden rounded-[16px] bg-cover bg-center bg-no-repeat",
				styles
			)}
			style={{
				backgroundImage: `url(${typeof images[0] === "string" ? images[0] : images[0].src})`,
			}}
		>
			<div className="flex flex-col w-[164px]">
				{custom && (
					<span className="bg-foreground w-[104px] h-[34px] rounded-[4px] flex items-center text-[12px] justify-center mb-6">
						Limited Stock
					</span>
				)}
				<h3 className="font-semibold text-[28px] mb-[8px]">{name}</h3>
				<p className="font-semibold mb-[6px] text-[12px]">{desc}</p>
				<p className="font-bold text-[18px] mb-8">{promo}</p>
				<ArrowDown className="ml-12 " />
				<button
					className={cn(
						"w-[111px] h-[34px] rounded-[4px] border border-white mt-10",
						{
							"border-black": index === 2 || index === 3 || index === 4,
						},
						{
							"mt-6": custom,
						}
					)}
				>
					SHOP NOW
				</button>
			</div>
		</article>
	);
}
