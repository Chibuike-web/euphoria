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
	images: (StaticImageData | string)[];
	gender: "men" | "women" | "unisex";
	price?: number;
	promo?: string;
	desc?: string;
	brand?: string;
	rating?: number;
	sizes?: string[];
	colors?: Color[];
	productDesc?: string;
	userComments?: { id: string; comment: string }[];
	questionAndAnswer?: { id: string; question: string; answer: string }[];
	extra?: { id: string; label: string; info: string }[];
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
export type Color = {
	name: string;
	colorCode: string;
};

export type Feedback = {
	id: string;
	image: StaticImageData;
	name: string;
	star: number;
	review: string;
};

export type CartItemType = {
	id: string;
	image: StaticImageData | string;
	name: string;
	size: string;
	color: string;
	price: number;
	quantity: number;
	shipping?: "FREE" | number;
	gender: string;
};
