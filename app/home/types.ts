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

export type BigSavingZoneType = {
	id: string;
	title: string;
	desc: string;
	image: StaticImageData;
	promo: string;
	limited?: boolean;
};
