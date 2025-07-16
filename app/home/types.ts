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

export type NewArrivalType = {
	id: string;
	label: string;
	image: StaticImageData;
};
