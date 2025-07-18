import type { StaticImageData } from "next/image";

export type PromoCardType = {
	id: string;
	image: StaticImageData;
	label: string;
	title: string;
	promo?: string;
	cta: {
		label: string;
		link: string;
	};
};

export type Products = {
	id: string;
	name: string;
	image: StaticImageData;
	desc?: string;
	tags?: string[];
	price?: string;
	promo?: string;
};

export type AllProductsType = {
	id: string;
	title: string;
	type: "curated" | "category" | "promotional";
	products: Products[];
};
