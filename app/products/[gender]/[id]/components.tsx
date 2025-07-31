import { Color } from "@/app/types";
import { cn } from "@/lib/utils";
import { useState } from "react";

const ALL_SIZES = ["XS", "S", "M", "L", "XL"];

export function Colors({ colors }: { colors: Color[] }) {
	const [active, setActive] = useState(0);
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
	const [active, setActive] = useState<number>(2);
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
