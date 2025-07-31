"use client";
import { getStars, toSentenceCase } from "@/app/utils";
import { Button } from "@/components/ui/button";
import { useAllProducts } from "@/lib/product";
import {
	ArrowRight,
	ChevronRight,
	MessageSquareText,
	ShoppingCart,
	Star,
	StarHalf,
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Colors, Sizes } from "./Components";

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
					<div className="w-[80px] bg-red-500 h-[80px]"></div>

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
						<Sizes sizes={product.sizes || []} />
						<div>
							<p className="mb-6">Colours Available</p>
							<Colors colors={product.colors || []} />
						</div>
					</div>
					<div className="flex items-center gap-4 mt-10 font-semibold">
						<Button className="has-[>svg]:px-10" size="md">
							<ShoppingCart />
							<span>Add to cart</span>
						</Button>
						<span className="flex px-10 h-10 rounded-[8px] border border-primary items-center justify-center">
							${product.price}
						</span>
					</div>
					<span className="w-full h-[1px] bg-muted flex my-10" />
				</aside>
			</section>
		</main>
	);
}
