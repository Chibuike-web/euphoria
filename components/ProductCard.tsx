import { AllProductsType } from "@/app/types";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ id, name, image, brand, price, gender }: AllProductsType) {
	return (
		<article className="relative">
			<button className="absolute right-3 top-3 md:right-6 md:top-6 size-8 flex items-center justify-center bg-white rounded-full">
				<Heart className="size-4" />
			</button>
			<Link href={`/${gender}/${id}`}>
				<Image src={image} alt={name} className="w-full rounded-[16px]" width={270} height={393} />
				<div className="flex items-center justify-between w-full">
					<div className="flex flex-col gap-1 mt-2">
						<h4 className="font-bold text-[20px]">{name}</h4>
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
