import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AllProductsType } from "@/lib/types";

export default async function NewArrivalSection() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products`, {
		cache: "no-store",
	});
	const json = await res.json();
	const allProductsList: AllProductsType[] = json.data;
	return (
		<section className="flex flex-col gap-6 w-full max-w-[1240px] mx-auto mt-[130px] px-6 xl:px-0">
			<h3 className="flex items-center gap-[20px]">
				<span className="block h-[30px] w-[6px] rounded-full bg-[#8a33fd]" />{" "}
				<span className=" text-[24px] md:text-[34px] font-semibold">New Arrival</span>
			</h3>
			<div className="w-full relative">
				<ArrowLeft className="flex-shrink-0 absolute left-0 top-[120px]" />
				<div className="flex w-full gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-8">
					{allProductsList
						.filter((item) => item.tags?.[0].section === "NewArrival")
						.map((i) => (
							<article key={i.id} className="w-full min-w-[220px] snap-center">
								<Image
									src={i.images[0]}
									alt={i.name}
									className="rounded-[24px] w-full"
									width={262}
									height={262}
								/>
								<p className="mt-5 font-semibold text-[16px] md:text-[20px]">{i.name}</p>
							</article>
						))}
				</div>
				<ArrowRight className="flex-shrink-0 absolute right-0 top-[120px]" />
			</div>
		</section>
	);
}
