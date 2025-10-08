"use client";

import { ArrowRight } from "lucide-react";
import { DressStyle, Price, Size, Colors, Filter } from "./FilterComponents";
import { useCallback, useEffect } from "react";
import { useDropdown } from "@/lib/hooks/useDropdown";
import { motion } from "motion/react";

export const SideBar = () => {
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
		<motion.div
			initial={{ x: -100, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ duration: 0.4, ease: "easeOut" }}
		>
			<DeskstopSidebar />
			<button
				className="flex md:hidden font-sans text-[24px] py-4 items-center justify-between w-full"
				onClick={handleClick}
			>
				Filters <ArrowRight />
			</button>
			{isShow && <MobileSidebar handleClick={handleClick} />}
		</motion.div>
	);
};

const DeskstopSidebar = () => {
	return (
		<div className="min-w-[295px] max-w-[295px] hidden md:flex flex-col sticky top-[68.49px] md:top-[108.45px] h-[calc(100vh-108px)] overflow-y-auto  ">
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
