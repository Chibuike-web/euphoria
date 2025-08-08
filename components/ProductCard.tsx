"use client";

import { useColor } from "@/app/store/useColorStore";
import { useSize } from "@/app/store/useSizeStore";
import { useWishlist } from "@/app/store/useWishlist";
import { AllProductsType } from "@/app/types";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
	id,
	name,
	image,
	brand,
	price,
	gender,
	colors,
	sizes,
}: AllProductsType) {
	const { addToWishlist } = useWishlist();
	const { colorIndex } = useColor();
	const { sizeIndex } = useSize();
	const selectedColor = colors?.[colorIndex as number].name;
	const selectedSize = sizes?.[sizeIndex as number];
	if (!selectedSize || !selectedColor || !price) return;
	return (
		<article className="relative">
			<button
				onClick={() =>
					addToWishlist({
						id: id,
						image: image,
						name: name,
						color: selectedColor,
						size: selectedSize,
						price: price,
						quantity: 1,
					})
				}
				className="absolute right-3 top-3 md:right-6 md:top-6 size-8 flex items-center justify-center bg-white rounded-full"
			>
				<Heart className="size-4" />
			</button>
			<Link href={`/products/${gender}/${id}`}>
				<figure className="w-full xl:h-[370px] overflow-hidden rounded-[12px]">
					<Image
						src={image}
						alt={name}
						className="w-full rounded-[16px] object-cover"
						width={270}
						height={393}
					/>
				</figure>
				<div className="flex items-center mt-2 justify-between w-full">
					<div className="flex flex-col gap-1 ">
						<h4 className="font-bold text-[clamp(1rem,2vh,1.25rem)] w-[174px] truncate overflow-hidden whitespace-nowrap">
							{name}
						</h4>{" "}
						<p className="font-medium text-muted-foreground">{brand}</p>
					</div>
					<span className="text-[14px] w-[83px] h-[37px] rounded-[8px] bg-muted font-semibold flex items-center justify-center">
						${price?.toFixed(2)}
					</span>
				</div>
			</Link>
		</article>
	);
}
