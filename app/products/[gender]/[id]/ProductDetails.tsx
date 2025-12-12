"use client";

import { Button } from "@/components/ui/button";
import { useProductById } from "@/lib/api/fetchData";
import videoImage from "@/app/assets/video-image.png";
import {
	ArrowRight,
	ChevronRight,
	MessageSquareText,
	PlayIcon,
	ShoppingCart,
	Star,
	StarHalf,
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Colors, ProductHighlights, Sizes } from "./components";

import { cn, getStars, toSentenceCase } from "@/lib/utils";
import { useCartItems } from "@/store/useCart";
import { useSize } from "@/store/useSizeStore";
import { useColor } from "@/store/useColorStore";
import { useState } from "react";
import { AllProductsType } from "@/lib/types";
import { useActive } from "@/lib/hooks/useActive";

export type NewProduct = AllProductsType & {
	quantity: number;
	shipping: number | "FREE";
};

export default function ProductDetail() {
	const { gender, id } = useParams() as { gender: string; id: string };
	const { updateCartItems, cartItems } = useCartItems();
	const { sizeIndex } = useSize();
	const { colorIndex } = useColor();
	const { data: product, isPending, error } = useProductById(id);
	const [status, setStatus] = useState<"idle" | "added">("idle");

	if (isPending) return <h1>Loading....</h1>;
	if (!product || error) return <h1>Product not found</h1>;

	const { full, half, empty } = getStars(product.rating ?? 0) || { full: 0, half: 0, empty: 0 };
	const selectedSize = product.sizes?.[sizeIndex as number];
	const selectedColor = product.colors?.[colorIndex as number].name;

	const handleAddToCart = () => {
		if (!selectedSize || !selectedColor || !product.price) return;
		if (isExist) return;
		updateCartItems({
			id: product.id,
			image: product.images[0],
			name: product.name,
			color: selectedColor,
			size: selectedSize,
			price: product.price,
			quantity: 1,
			shipping: "FREE",
			gender,
		});
		setStatus("added");

		setTimeout(() => {
			setStatus("idle");
		}, 2000);
	};
	const isExist = cartItems.some(
		(item) => item.id === product.id && item.size === selectedSize && item.color === selectedColor
	);

	let cartButtonLabel = null;

	if (isExist) {
		if (status === "added") {
			cartButtonLabel = "Added to cart";
		} else {
			cartButtonLabel = "Already in cart";
		}
	} else {
		cartButtonLabel = "Add to cart";
	}
	return (
		<main>
			<section className=" max-w-[1240px] mx-auto px-6 xl:px-0 mb-[100px] flex flex-col lg:flex-row items-start gap-[74px]">
				<DesktopCarousel product={product} />
				<div className="w-full max-w-[534px]">
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
								<Star key={`full-${i}`} className="fill-current" />
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
						<Button
							className="has-[>svg]:px-6 disabled:opacity-50"
							size="md"
							disabled={isExist}
							onClick={handleAddToCart}
						>
							<ShoppingCart />
							<span>{cartButtonLabel}</span>
						</Button>
						<span className="flex px-10 h-10 rounded-[8px] border border-primary items-center justify-center">
							${product.price}
						</span>
					</div>
					<span className="w-full h-[1px] bg-muted flex my-10" />

					<ProductHighlights />
				</div>
			</section>

			<ProductDescription product={product} />
		</main>
	);
}

function DesktopCarousel({ product }: { product: AllProductsType }) {
	const [imageIndex, setImageIndex] = useState(0);
	return (
		<div className="flex flex-col-reverse lg:flex-row gap-6 w-full lg:max-w-[630px] ">
			<div className="w-full lg:max-w-[185px] flex flex-row lg:flex-col gap-4 overflow-auto lg:h-[612px]">
				{product.images.map((image, index) => (
					<button
						key={index}
						onClick={() => setImageIndex(index)}
						className={cn(
							"w-full lg:min-h-[150px] flex items-center justify-center bg-[#F5F5F5]",
							imageIndex !== index && "opacity-25"
						)}
					>
						<Image
							src={image}
							alt={product.name}
							width={80}
							height={80}
							className="w-full h-full object-cover"
						/>
					</button>
				))}
			</div>

			<div className="w-full lg:max-w-[520px] overflow-hidden">
				<Image
					src={product.images[imageIndex]}
					alt={product.name}
					width={282}
					height={370}
					className="w-full h-full object-cover object-top"
				/>
			</div>
		</div>
	);
}

function ProductDescription({ product }: { product: AllProductsType }) {
	return (
		<section className=" max-w-[1240px] mx-auto px-6 xl:px-0 mb-[100px]">
			<h3 className="flex items-center gap-[20px] mb-[30px]">
				<span className="block h-[30px] w-[6px] rounded-full bg-[#8a33fd]" />
				<span className=" text-[clamp(1.25rem,2vh,1.8rem)] font-semibold">Product Description</span>
			</h3>
			<div className="flex flex-col lg:flex-row gap-[95px] items-start">
				<ProductDescriptionTabs product={product} />

				<div
					className="w-full lg:w-[532px] h-[328px] bg-cover bg-center rounded-[20px] overflow-hidden relative flex-col"
					style={{ backgroundImage: `url(${videoImage.src})` }}
				>
					<div className="bg-black/25 inset-0 absolute top-0" />
					<span className="absolute left-1/2  top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full size-14 flex items-center justify-center ">
						<PlayIcon strokeWidth="0" className="fill-gray-700" />
					</span>
					<span className="absolute top-4 right-4 text-white z-[10]">1:00M</span>
					<span className="absolute left-1/2 -translate-x-1/2 text-white z-[10] bottom-8 text-nowrap text-[22px] font-medium">
						Raven Hoodie with black colored design
					</span>
				</div>
			</div>
		</section>
	);
}

function ProductDescriptionTabs({ product }: { product: AllProductsType }) {
	const { active, setActive } = useActive(0);

	const renderActiveTabContent = () => {
		switch (active) {
			case 0:
				return <Description product={product} />;
			case 1:
				return <UserComments product={product} />;
			case 2:
				return <QuestionAndAnswer product={product} />;
			default:
				return null;
		}
	};
	return (
		<div className="flex flex-col w-full lg:w-[610px]">
			<div className="flex flex-col gap-6 lg:flex-row lg:items-center">
				{["Description", "UserComments", "Question & Answer"].map((item, index) => (
					<button onClick={() => setActive(index)} key={index} className="">
						<div className="flex items-center text-left leading-[1.2] gap-1.5 relative">
							<span
								className={cn(
									"text-gray-500 text-[18px]",
									active == index && "text-gray-700 font-medium"
								)}
							>
								{item}
							</span>
							{index === 1 ? (
								<span className="text-[10px] size-5 flex items-center justify-center text-white bg-[#8A33FD] rounded-[4px] flex-shrink-0">
									{product.userComments?.length ?? 0}
								</span>
							) : index === 2 ? (
								<span className="text-[10px] size-5 flex items-center justify-center text-white bg-primary rounded-[4px] flex-shrink-0">
									{product.questionAndAnswer?.length ?? 0}
								</span>
							) : null}
							{active === index && (
								<span className="absolute bottom-[-8px] block w-[32px] h-[2px] bg-primary flex-shrink-0" />
							)}
						</div>
					</button>
				))}
			</div>
			<div className="mt-6">{renderActiveTabContent()}</div>
		</div>
	);
}

const Description = ({ product }: { product: AllProductsType }) => {
	return (
		<div>
			{product.productDesc}

			<div className="grid grid-cols-3 mt-6 rounded-[12px] overflow-hidden">
				{product.extra?.map(({ id, label, info }, index) => {
					let borderStyle = null;
					if (index === 0 || index === 1) {
						borderStyle = "border-r border-muted-foreground/15 ";
					} else if (index === 3 || index === 4) {
						borderStyle = "border-r border-muted-foreground/15 border-t";
					} else if (index === 5) {
						borderStyle = " border-muted-foreground/15 border-t ";
					}

					return (
						<div
							key={id}
							className={cn(
								"flex flex-col gap-[12px] text-[14px] px-[min(2rem,20%)] py-6 bg-muted",
								borderStyle
							)}
						>
							<span className="text-muted-foreground">{label}</span>
							<span className="font-medium">{info}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

const UserComments = ({ product }: { product: AllProductsType }) => {
	return (
		<>
			{product.userComments?.map(({ id, comment }) => (
				<div key={id}>
					<p>{comment}</p>
				</div>
			))}
		</>
	);
};

const QuestionAndAnswer = ({ product }: { product: AllProductsType }) => {
	return (
		<>
			{product.questionAndAnswer?.map(({ id, question, answer }) => (
				<div key={id}>
					<p>{question}</p>
					<p>{answer}</p>
				</div>
			))}
		</>
	);
};
