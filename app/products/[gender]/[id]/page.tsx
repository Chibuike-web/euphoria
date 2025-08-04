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
import { Colors, ProductHighlights, Sizes } from "./components";
import { AllProductsType } from "@/app/types";
import { useActive } from "@/lib/Hooks";
import { cn } from "@/lib/utils";

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
				<div className="flex items-center gap-6 w-full max-w-[630px]">
					<div className="w-[80px] bg-red-500 h-[80px]"></div>

					<div className="w-full max-w-[520px] h-[785px] overflow-hidden">
						<Image
							src={product.image}
							alt={product.name}
							width={282}
							height={370}
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
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

					<ProductHighlights />
				</div>
			</section>

			<ProductDescription product={product} />
		</main>
	);
}

function ProductDescription({ product }: { product: AllProductsType }) {
	return (
		<section className=" max-w-[1240px] mx-auto px-6 xl:px-0 mb-[100px]">
			<h3 className="flex items-center gap-[20px] mb-[30px]">
				<span className="block h-[30px] w-[6px] rounded-full bg-[#8a33fd]" />
				<span className=" text-[clamp(1.25rem,2vh,1.8rem)] font-semibold">Product Description</span>
			</h3>
			<div>
				<div>
					<ProductDescriptionTabs product={product} />
				</div>
				<div>
					<div></div>
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
		<div className="flex flex-col">
			<div className="flex gap-6 items-center">
				{["Description", "UserComments", "Question & Answer"].map((item, index) => (
					<button onClick={() => setActive(index)} key={index}>
						<div className="flex items-center gap-1.5">
							<span className={cn("text-gray-500", active == index && "text-gray-700 font-medium")}>
								{item}
							</span>
							{index === 1 ? (
								<span className="text-[10px] size-5 flex items-center justify-center text-white bg-[#8A33FD] rounded-[4px]">
									{product.userComments?.length ?? 0}
								</span>
							) : index === 2 ? (
								<span className="text-[10px] size-5 flex items-center justify-center text-white bg-primary rounded-[4px]">
									{product.questionAndAnswer?.length ?? 0}
								</span>
							) : null}
						</div>
					</button>
				))}
			</div>
			{renderActiveTabContent()}
		</div>
	);
}

const Description = ({ product }: { product: AllProductsType }) => {
	return <div>{product.productDesc}</div>;
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
