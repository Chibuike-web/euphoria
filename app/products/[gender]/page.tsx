"use client";

import ProductCard from "@/components/ProductCard";
import { useParams } from "next/navigation";
import { toSentenceCase } from "../../utils";
import { useAllProducts } from "@/lib/product";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Colors, DressStyle, Filter, Price, Size } from "./filter-components";
import { ArrowRight, ChevronDown, X } from "lucide-react";
import { useDropdown } from "@/lib/Hooks";

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
		<section className=" max-w-[1240px] mx-auto px-6 xl:px-0 mb-[100px]">
			<div className="flex flex-col items-center md:flex-row gap-x-6 md:items-start w-full">
				<SideBar />
				<div className="w-full">
					<div className="w-full flex items-center justify-between my-[50px]">
						<h1 className="text-2xl font-bold capitalize">{toSentenceCase(gender)}'s Clothing</h1>
						<div className="flex items-center gap-4 text-[18px]">
							<p className="font-semibold">New</p>
							<p>Recommended</p>
						</div>
					</div>
					<div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-6">
						{filtered.map((item) => (
							<ProductCard key={item.id} {...item} />
						))}
					</div>
				</div>
			</div>
			{gender === "women" && <ClothingForWomenOnline />}
			{gender === "women" && <BuyWomensClothing />}
		</section>
	);
}

const SideBar = () => {
	const { isShow, setIsShow } = useDropdown();

	useEffect(() => {
		if (isShow) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isShow]);
	const handleClick = useCallback(() => {
		setIsShow((prev) => !prev);
	}, []);

	return (
		<>
			<DeskstopSidebar />
			<button
				className="flex md:hidden font-sans text-[24px] py-4 items-center justify-between w-full"
				onClick={handleClick}
			>
				Filters <ArrowRight />
			</button>
			{isShow && <MobileSidebar handleClick={handleClick} />}
		</>
	);
};

const DeskstopSidebar = () => {
	return (
		<div className="min-w-[295px] max-w-[295px] hidden md:flex flex-col sticky top-[68.49px] md:top-[108.45px] h-[calc(100vh-108px)] xl:h-auto overflow-y-auto  ">
			<Filter />
			<Price />
			<Colors />
			<Size />
			<DressStyle />
		</div>
	);
};

const MobileSidebar = ({ handleClick }: { handleClick: () => void }) => {
	return (
		<div className="w-full flex flex-col fixed z-[100] bg-white top-[68.49px] h-[calc(100vh-68.49px)] xl:h-auto overflow-y-auto ">
			<button
				onClick={handleClick}
				className="py-2 bg-gray-300 rounded-full px-4 w-max self-center my-4"
			>
				Close
			</button>
			<Filter />
			<Price />
			<Colors />
			<Size />
			<DressStyle />
		</div>
	);
};

const ClothingForWomenOnline = () => {
	return (
		<div className="mt-[100px]">
			<h3 className="flex items-center gap-[20px] mb-[30px]">
				<span className="block h-[30px] w-[6px] rounded-full bg-[#8a33fd]" />
				<span className=" text-[clamp(1.25rem,2vh,1.8rem)] font-semibold">
					Clothing for Women Online in India
				</span>
			</h3>
			<h4 className="text-[20px] text-gray-500 font-semibold">
				Reexplore Women's Clothing Collection Online at Euphoria
			</h4>
			<p className="text-[20px] text-gray-400 mt-6 leading-[1.6]">
				Women's Clothing – Are you searching for the best website to buy Clothing for Women online
				in India? Well, your search for the coolest and most stylish womens clothing ends here. From
				trendy Casual Womens Wear Online shopping to premium quality cotton women's apparel,
				<span className="font-semibold text-gray-500"> Euphoria</span> has closet of Women
				Collection covered with the latest and best designs of Women's Clothing Online.
			</p>
			<p className="text-[20px] text-gray-400 leading-[1.6]">
				Our collection of clothes for women will make you the trendsetter with an iconic resemblance
				of choice in Womens Wear.{" "}
			</p>
			<h4 className="text-[20px] text-gray-500 font-semibold mt-3 mb-6">
				One-Stop Destination to Shop Every Clothing for Women: Euphoria
			</h4>
			<p className="text-[20px] text-gray-400 mt-6 leading-[1.6]">
				Today, Clothing for Women is gaining more popularity above all. This is because gone are the
				days when women were used to carrying uncomfortable fashion. Today, a lady looks prettier
				when she is in Casual Womens Wear which is a comfortable outfit. Concerning this,
				<span className="font-semibold text-gray-500"> Euphoria</span> has a big fat range of
				Stylish Women's Clothing that would make her the winner wherever she goes.
			</p>
			<p className="text-[20px] text-gray-400 mt-6 leading-[1.6]">
				Our collection of clothes for women will make you the trendsetter with an iconic resemblance
				of choice in Womens Wear. It is quite evident to say that there are very few Womens Clothing
				online stores where you can buy Western Wear for Women comprising the premium material and
				elegant design that you are always seeking for. Basically,{" "}
			</p>
			<button className="font-semibold text-[20px]">See More</button>
		</div>
	);
};

const BuyWomensClothing = () => {
	return (
		<div className="my-[100px]">
			<h3 className="flex items-center gap-[20px]">
				<span className="block h-[30px] w-[6px] rounded-full bg-[#8a33fd]" />
				<span className=" text-[clamp(1.25rem,2vh,1.8rem)] font-semibold">
					Buy Women's Clothing at Best Price
				</span>
			</h3>
			<div className="w-full flex flex-col bg-gray-50 text-[clamp(1.2rem,2vh,1.5rem)] font-medium text-gray-400 mt-9">
				<div className="flex w-full">
					<div className="border-r w-full flex justify-center items-center max-w-[963px] border-b border-gray-200 text-center md:text-left px-6 md:px-20 py-10 text-gray-500 ">
						Women's Clothing
					</div>
					<div className="text-center py-10 w-full max-w-[257px] flex justify-center items-center text-gray-500 border-b border-gray-200">
						Best Price
					</div>
				</div>

				<div className="w-full ">
					{womenClothing.map((item, index) => (
						<div key={index} className="flex">
							<span className="w-full max-w-[963px] flex flex-col justify-center gap-y-13 px-6 md:px-20 py-5 md:py-10 border-r border-gray-200">
								{item.label}
							</span>
							<span className="flex flex-col justify-center text-center py-5 md:py-10 gap-y-13 w-full max-w-[257px]">
								₹{item.price}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

const womenClothing = [
	{ label: "Pick Any 4- Womens Plain T-shirt Combo", price: 1099 },
	{ label: "Pick Any 4- Plain Womens Boxer Combo", price: 1099 },
	{ label: "Pick Any 4 - Women Plain Full Sleeve T-shirt Combo", price: 1399 },
	{ label: "Multicolor Checkered Long Casual Shirts for Women", price: 499 },
	{ label: "Pick Any 2: Plain Boxy Casual Shirts for Women Combo", price: 799 },
	{ label: "Blue Floral Anarkali Kurti", price: 599 },
	{ label: "Jade Black Narrow Cut Flexible Women Jeggings", price: 998 },
	{ label: "Mustard-yellow Solid Straight-Fit Women Pant", price: 499 },
	{ label: "Women Pants Combo - Pick Any 2", price: 800 },
	{ label: "Pista Green Solid Boxy Casual Shirts for Women", price: 449 },
	{ label: "Plain Burgundy Womens Boxer", price: 349 },
	{ label: "Striped Front Tie Casual Shirts for Women", price: 449 },
];
