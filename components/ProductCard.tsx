import { Products } from "@/app/home/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ProductCard(item: Products) {
	const { name, image } = item;
	return (
		<article>
			<Image src={image} alt={name} className="w-full rounded-[16px]" />
			<div className="flex items-center justify-between w-full">
				<div className="flex flex-col gap-1 mt-2">
					<h4 className="font-bold text-[20px]">{name}</h4>
					<p className="font-medium text-muted-foreground">Explore Now!</p>
				</div>
				<ArrowRight />
			</div>
		</article>
	);
}
