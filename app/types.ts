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

export type AllProductsType = {
	id: string;
	name: string;
	image: StaticImageData | string;
	gender?: "men" | "women" | "unisex";
	price?: number;
	promo?: string;
	desc?: string;
	brand?: string;
	rating?: number;
	sizes?: string[];
	colours?: string[];
	category?:
		| "joggers"
		| "printed-tees"
		| "plain-tees"
		| "shorts"
		| "hoodies"
		| "shirts"
		| "polo"
		| "jeans"
		| "activewear"
		| "boxers"
		| "coats"
		| "tees";
	custom?: string;
	tags?: Tags[];
};

type Tags = {
	section?: string;
	type?: string;
};

export type Feedback = {
	id: string;
	image: StaticImageData;
	name: string;
	star: number;
	review: string;
};
