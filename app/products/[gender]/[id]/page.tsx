"use client";
import { getStars, toSentenceCase } from "@/app/utils";
import { useAllProducts } from "@/lib/product";
import { ArrowRight, ChevronRight, MessageSquareText, Star, StarHalf } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

const ALL_SIZES = ["XS", "S", "M", "L", "XL"];

export default function ProductDetail() {
	const { gender, id } = useParams();
	const { data, isPending, error } = useAllProducts();

	const product = data?.find((u) => u.id === id);

	if (isPending) return <h1>Loading....</h1>;
	if (!product) return <h1>Product not found</h1>;

	const { full, half, empty } = getStars(product.rating ?? 0) || { full: 0, half: 0, empty: 0 };
	return (
		<main>
			<section className=" max-w-[1240px] mx-auto px-6 xl:px-0 mb-[100px] flex items-start gap-[74px]">
				<aside className="flex items-center gap-6 w-full max-w-[630px]">
					<div></div>

					<figure className="w-full max-w-[520px] h-[785px] overflow-hidden">
						<Image
							src={product.image}
							alt={product.name}
							width={282}
							height={370}
							className="w-full h-full object-cover"
						/>
					</figure>
				</aside>
				<aside className="w-full max-w-[534px]">
					<div className="flex items-center gap-2 mt-8">
						<span>Shop</span>
						<ChevronRight />
						<span>{gender && toSentenceCase(gender.toString())}</span>
						<ChevronRight />
						<span>Top</span>
					</div>
					<h1 className="text-[34px] leading-[1.4] font-semibold mt-8">{product.name}</h1>

					<div className="flex items-center gap-4 mt-8">
						<div className="flex items-center gap-1 text-yellow-500">
							{Array.from({ length: full }).map((_, i) => (
								<Star key={`full-${i}`} className="fill-current stroke-none" />
							))}
							{half === 1 && (
								<div className="relative">
									<StarHalf className="fill-current stroke-none" />
									<Star className="absolute top-0 z-[-10]" />
								</div>
							)}
							{Array.from({ length: empty }).map((_, i) => (
								<Star key={`empty-${i}`} />
							))}
						</div>
						<p>{product.rating}</p>
						<div className="flex items-center gap-4">
							<MessageSquareText />
							<p>120 comments</p>
						</div>
					</div>
					<div className="mt-8">
						<div className="flex items-center gap-6 mb-6 text-[18px] font-semibold]">
							<span className="text-gray-700">Select Size</span>
							<div className="flex items-center gap-4">
								<span className="text-gray-500">Size Guide</span>
								<ArrowRight />
							</div>
						</div>
						<div className="flex items-center gap-4 mb-6">
							{ALL_SIZES.map((size, index) => {
								const isAvailable = product.sizes && product.sizes.includes(size);
								return (
									<button
										key={index}
										className={`size-10 flex items-center justify-center text-[14px] text-gray-700 font-medium border border-gray-400 rounded-[12px] ${
											!isAvailable && "opacity-50"
										}`}
									>
										{size}
									</button>
								);
							})}
						</div>
						<div>
							<p>Colours Available</p>
							<div></div>
						</div>
					</div>
				</aside>
			</section>
		</main>
	);
}
