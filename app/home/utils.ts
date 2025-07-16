import type { NewArrivalType, PromoCardType } from "./types";
import promoOne from "@/app/assets/home/promo/promo-one.jpg";
import promoSecond from "@/app/assets/home/promo/promo-two.jpg";
import newArrivalOne from "@/app/assets/home/new-arrival/new-arrival-one.png";
import newArrivalTwo from "@/app/assets/home/new-arrival/new-arrival-two.png";
import newArrivalThree from "@/app/assets/home/new-arrival/new-arrival-three.png";
import newArrivalFour from "@/app/assets/home/new-arrival/new-arrival-four.png";

import { v4 as uuidv4 } from "uuid";

export const promoCardItems: PromoCardType[] = [
	{
		id: uuidv4(),
		image: promoOne,
		label: "Low Price",
		title: "High Coziness",
		promo: "UP TO 50% OFF",
		cta: {
			label: "Explore Items",
			link: "/products",
		},
	},
	{
		id: uuidv4(),
		image: promoSecond,
		label: "Beyoung Presents",
		title: "Breezy Summer Style",
		promo: "UP TO 50% OFF",
		cta: {
			label: "Explore Items",
			link: "/products",
		},
	},
];

export const newArrivalItems: NewArrivalType[] = [
	{
		id: uuidv4(),
		label: "Knitted Joggers",
		image: newArrivalOne,
	},
	{
		id: uuidv4(),
		label: "Full Sleeve",
		image: newArrivalTwo,
	},
	{
		id: uuidv4(),
		label: "Active T-Shirts",
		image: newArrivalThree,
	},
	{
		id: uuidv4(),
		label: "Urban Shirts",
		image: newArrivalFour,
	},
];
