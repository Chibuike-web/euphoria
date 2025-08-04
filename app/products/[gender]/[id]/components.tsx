import { CardIcon, ShirtIcon, TruckIcon, UndoIcon } from "@/app/assets/icons";
import { Color } from "@/app/types";
import { useActive } from "@/lib/Hooks";
import { cn } from "@/lib/utils";
import { useState } from "react";

const ALL_SIZES = ["XS", "S", "M", "L", "XL"];

export function Colors({ colors }: { colors: Color[] }) {
	const { active, setActive } = useActive(0);
	return (
		<div className="flex items-center gap-5">
			{colors?.map(({ name, colorCode }, index) => (
				<button
					onClick={() => setActive(index)}
					key={name}
					className={cn(
						`rounded-full size-6 flex border border-white ${colorCode}`,
						active === index && "ring ring-black"
					)}
				/>
			))}
		</div>
	);
}

export function Sizes({ sizes }: { sizes: string[] }) {
	const { active, setActive } = useActive(!sizes ? 0 : null);
	return (
		<div className="flex items-center gap-4 mb-6">
			{ALL_SIZES.map((size, index) => {
				const isAvailable = sizes && sizes.includes(size);
				return (
					<button
						onClick={() => setActive(index)}
						key={index}
						className={cn(
							"size-10 flex items-center justify-center text-[14px] text-gray-700 font-medium border border-gray-400 rounded-[12px]",
							!isAvailable && "opacity-50 pointer-events-none",
							active === index && "bg-gray-900 text-white border-0"
						)}
					>
						{size}
					</button>
				);
			})}
		</div>
	);
}

export function ProductHighlights() {
	return (
		<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-5">
			{highlights.map((item, index) => (
				<li key={index} className="flex items-center space-x-2">
					<span className="size-11 rounded-full flex items-center justify-center bg-muted">
						{" "}
						{item.icon}
					</span>
					<span className="text-sm text-muted-foreground">{item.label}</span>
				</li>
			))}
		</ul>
	);
}

export const highlights = [
	{
		label: "Secure payment",
		icon: <CardIcon />,
	},
	{
		label: "Size & Fit",
		icon: <ShirtIcon />,
	},
	{
		label: "Free shipping",
		icon: <TruckIcon />,
	},
	{
		label: "Free Shipping & Returns",
		icon: <UndoIcon />,
	},
];
