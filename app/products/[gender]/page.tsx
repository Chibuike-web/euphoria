"use client";

import ProductCard from "@/components/ProductCard";
import { useParams } from "next/navigation";
import { toSentenceCase } from "../../utils";
import { useAllProducts } from "@/lib/product";
import { useMemo, useState } from "react";
import { ChevronDown, ChevronRight, SlidersVertical } from "lucide-react";
import * as Slider from "@radix-ui/react-slider";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";

export default function Page() {
	const { gender } = useParams() as { gender: string };

	const { data, isLoading, error } = useAllProducts();

	const filtered = useMemo(
		() => data?.filter((item) => item.gender === gender) || [],
		[data, gender]
	);

	if (isLoading) return;
	if (error) return <p className="mt-20 text-center">Something went wrong</p>;

	return (
		<section className="flex gap-6 items-start w-full max-w-[1240px] mx-auto px-6 xl:px-0 mb-[100px]">
			<Sidebar />
			<aside className="w-full">
				<div className="w-full flex items-center justify-between my-[50px]">
					<h1 className="text-2xl font-bold capitalize">{toSentenceCase(gender)}'s Clothing</h1>
					<div className="flex items-center gap-8 text-[18px]">
						<p className="font-semibold">New</p>
						<p>Recommended</p>
					</div>
				</div>
				<div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-6">
					{filtered.map((item) => (
						<ProductCard key={item.id} {...item} />
					))}
				</div>
			</aside>
		</section>
	);
}

const dropdownVariants = {
	hidden: { opacity: 0, height: 0 },
	visible: { opacity: 1, height: "auto" },
	exit: { opacity: 0, height: 0 },
};

const Sidebar = () => {
	return (
		<aside className="min-w-[295px] max-w-[295px] flex flex-col sticky top-[68.49px] md:top-[108.45px] h-[calc(100vh-108px)] overflow-y-auto  ">
			<Filter />
			<Price />
			<Colors />
			<Size />
			<DressStyle />
		</aside>
	);
};

const filter = [
	"Tops",
	"Printed T-shirts",
	"Plain T-shirts",
	"Kurti",
	"Boxers",
	"Full sleeve Tshirts",
	"Joggers",
	"Pyjamas",
	"Jeans",
];
const Filter = () => {
	const [isShow, setIsShow] = useState(false);
	return (
		<button className=" border border-muted" onClick={() => setIsShow((prev) => !prev)}>
			<div className="flex items-center justify-between w-full py-[20px] px-[24px] border-shadow">
				<p className="text-[22px]">Filter</p>
				<span>
					<SlidersVertical />
				</span>
			</div>
			<AnimatePresence>
				{isShow && (
					<motion.div
						variants={dropdownVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						className="overflow-hidden"
						transition={{ duration: 0.3 }}
						onClick={(e) => e.stopPropagation()}
					>
						<div className="flex flex-col gap-4 p-6 ">
							{filter.map((item, index) => (
								<div key={index} className="flex items-center justify-between">
									<span>{item}</span>
									<span>
										<ChevronRight />
									</span>
								</div>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</button>
	);
};

const Price = () => {
	const [price, setPrice] = useState([25, 75]);
	const [isShow, setIsShow] = useState(false);
	return (
		<button
			className="border-b border-l border-r border-muted"
			onClick={() => setIsShow((prev) => !prev)}
		>
			<div className="flex items-center justify-between w-full py-[20px] px-[24px] border-shadow">
				<p className="text-[22px]">Price</p>
				<ChevronDown
					className={clsx("transition-transform duration-300", isShow && "rotate-180")}
				/>
			</div>
			<AnimatePresence>
				{isShow && (
					<motion.div
						variants={dropdownVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						className="overflow-hidden"
						onClick={(e) => e.stopPropagation()}
						transition={{ duration: 0.3 }}
					>
						<div className="flex flex-col gap-4 p-6">
							<Slider.Root
								className="relative flex items-center select-none touch-none w-full h-5"
								defaultValue={[25, 75]}
								value={price}
								onValueChange={(val) => setPrice(val)}
								max={100}
								step={1}
							>
								<Slider.Track className="bg-muted relative grow rounded-full h-2">
									<Slider.Range className="absolute bg-primary rounded-full h-full" />
								</Slider.Track>
								<Slider.Thumb className="block w-5 h-5 bg-white border border-border rounded-full" />
								<Slider.Thumb className="block w-5 h-5 bg-white border border-border rounded-full" />
							</Slider.Root>

							<div className="flex items-center gap-12">
								{price.map((value) => (
									<span
										key={value}
										className="w-[97px] h-8 rounded-[8px] border border-muted flex items-center justify-center "
									>
										${value}
									</span>
								))}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</button>
	);
};

const Colors = () => {
	const [isShow, setIsShow] = useState(false);
	return (
		<button
			className="border-b border-l border-r border-muted flex flex-col"
			onClick={() => setIsShow((prev) => !prev)}
		>
			<div className="flex items-center justify-between w-full py-[20px] px-[24px] border-shadow">
				<p className="text-[22px]">Colors</p>
				<ChevronDown
					className={clsx("transition-transform duration-300", isShow && "rotate-180")}
				/>
			</div>

			<AnimatePresence>
				{isShow && (
					<motion.div
						variants={dropdownVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						className="overflow-hidden"
						transition={{ duration: 0.3 }}
						onClick={(e) => e.stopPropagation()}
					>
						<div className="grid grid-cols-4 gap-[20px] p-6 overflow-hidden">
							{colors.map((color) => (
								<div key={color.id} className="flex flex-col gap-4 items-center">
									<span
										className={`block ${color.colorStyle} size-[36px] rounded-[12px] ${
											color.id === "white" && "border border-muted-foreground"
										}`}
									/>{" "}
									<span className="text-[12px] font-semibold">{color.label}</span>
								</div>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</button>
	);
};

const colors = [
	{
		id: "purple",
		label: "Purple",
		colorStyle: "bg-[#8434E1]",
	},
	{
		id: "black",
		label: "Black",
		colorStyle: "bg-[#000000]",
	},
	{
		id: "red",
		label: "Red",
		colorStyle: "bg-[#F35528]",
	},
	{
		id: "orange",
		label: "Orange",
		colorStyle: "bg-[#F16F2B]",
	},
	{
		id: "navy",
		label: "Navy",
		colorStyle: "bg-[#345EFF]",
	},
	{
		id: "white",
		label: "White",
		colorStyle: "bg-[#ffffff]",
	},
	{
		id: "broom",
		label: "Broom",
		colorStyle: "bg-[#D67E3B]",
	},
	{
		id: "green",
		label: "Green",
		colorStyle: "bg-[#48BC4E]",
	},
	{
		id: "yellow",
		label: "Yellow",
		colorStyle: "bg-[#FDC761]",
	},
	{
		id: "grey",
		label: "Grey",
		colorStyle: "bg-[#E4E5E8]",
	},
	{
		id: "pink",
		label: "Pink",
		colorStyle: "bg-[#E08D9D]",
	},
	{
		id: "blue",
		label: "Blue",
		colorStyle: "bg-[#3FDEFF]",
	},
];

const Size = () => {
	const [isShow, setIsShow] = useState(false);
	return (
		<button
			className="border-b border-l border-r border-muted"
			onClick={() => setIsShow((prev) => !prev)}
		>
			<div className="flex items-center justify-between w-full py-[20px] px-[24px] border-shadow">
				<p className="text-[22px]">Sizes</p>
				<ChevronDown
					className={clsx("transition-transform duration-300", isShow && "rotate-180")}
				/>
			</div>
			<AnimatePresence>
				{isShow && (
					<motion.div
						variants={dropdownVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						className="overflow-hidden"
						transition={{ duration: 0.3 }}
						onClick={(e) => e.stopPropagation()}
					>
						<div className="grid grid-cols-3 gap-[20px] py-[20px] px-[24px]">
							{sizes.map((size) => (
								<span
									key={size.label}
									className="text-[12px] font-semibold border border-muted rounded-[8px] w-[61px] h-8 flex items-center justify-center"
								>
									{size.label}
								</span>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</button>
	);
};

const sizes = [
	{
		id: "xxs",
		label: "XXS",
	},
	{
		id: "xl",
		label: "XL",
	},
	{
		id: "xs",
		label: "XS",
	},
	{
		id: "s",
		label: "S",
	},
	{
		id: "l",
		label: "L",
	},
	{
		id: "xxl",
		label: "XXL",
	},
	{
		id: "3xl",
		label: "3XL",
	},
	{
		id: "4xl",
		label: "4XL",
	},
];

const dressStyle = ["Classic", "Casual", "Business", "Sports", "Elegant", "Formal (evening)"];

const DressStyle = () => {
	const [isShow, setIsShow] = useState(false);

	return (
		<button
			className="border-b border-l border-r border-muted"
			onClick={() => setIsShow((prev) => !prev)}
		>
			<div className="flex items-center justify-between w-full py-[20px] px-[24px] border-shadow">
				<p className="text-[22px]">Dress Styles</p>
				<ChevronDown
					className={clsx("transition-transform duration-300", isShow && "rotate-180")}
				/>
			</div>
			<AnimatePresence>
				{isShow && (
					<motion.div
						variants={dropdownVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						className="overflow-hidden"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="flex flex-col gap-[20px] py-[20px] px-[24px]">
							{dressStyle.map((item, index) => (
								<div key={index} className="flex items-center justify-between">
									<span>{item}</span>
									<ChevronRight />
								</div>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</button>
	);
};
