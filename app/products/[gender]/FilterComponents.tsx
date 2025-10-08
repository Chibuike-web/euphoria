import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight, SlidersVertical } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { colors, dressStyle, filter, sizes } from "./data";
import * as Slider from "@radix-ui/react-slider";

const dropdownVariants = {
	hidden: { opacity: 0, height: 0 },
	visible: { opacity: 1, height: "auto" },
	exit: { opacity: 0, height: 0 },
};

export const DressStyle = () => {
	const [isShow, setIsShow] = useState(false);

	return (
		<button
			className="border-b border-l border-r border-muted"
			onClick={() => setIsShow((prev) => !prev)}
		>
			<div className="flex items-center justify-between w-full py-[20px] px-[24px] border-shadow">
				<p className="text-[22px]">Dress Styles</p>
				<ChevronDown className={cn("transition-transform duration-300", isShow && "rotate-180")} />
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

export const Filter = () => {
	const [isShow, setIsShow] = useState(false);
	return (
		<button className=" border border-muted" onClick={() => setIsShow((prev) => !prev)}>
			<div className="flex items-center justify-between w-full py-[20px] px-[24px] border-shadow">
				<p className="text-[22px]">Filter By</p>
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

export const Price = () => {
	const [price, setPrice] = useState([25, 75]);
	const [isShow, setIsShow] = useState(false);
	return (
		<button
			className="border-b border-l border-r border-muted"
			onClick={() => setIsShow((prev) => !prev)}
		>
			<div className="flex items-center justify-between w-full py-[20px] px-[24px] border-shadow">
				<p className="text-[22px]">Price</p>
				<ChevronDown className={cn("transition-transform duration-300", isShow && "rotate-180")} />
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

export const Colors = () => {
	const [isShow, setIsShow] = useState(false);
	return (
		<button
			className="border-b border-l border-r border-muted flex flex-col"
			onClick={() => setIsShow((prev) => !prev)}
		>
			<div className="flex items-center justify-between w-full py-[20px] px-[24px] border-shadow">
				<p className="text-[22px]">Colors</p>
				<ChevronDown className={cn("transition-transform duration-300", isShow && "rotate-180")} />
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

export const Size = () => {
	const [isShow, setIsShow] = useState(false);
	return (
		<button
			className="border-b border-l border-r border-muted"
			onClick={() => setIsShow((prev) => !prev)}
		>
			<div className="flex items-center justify-between w-full py-[20px] px-[24px] border-shadow">
				<p className="text-[22px]">Sizes</p>
				<ChevronDown className={cn("transition-transform duration-300", isShow && "rotate-180")} />
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
