import type { BigSavingZoneType, NewArrivalType, PromoCardType } from "./types";
import promoOne from "@/app/assets/home/promo/promo-one.jpg";
import promoSecond from "@/app/assets/home/promo/promo-two.jpg";
import newArrivalOne from "@/app/assets/home/new-arrival/new-arrival-one.png";
import newArrivalTwo from "@/app/assets/home/new-arrival/new-arrival-two.png";
import newArrivalThree from "@/app/assets/home/new-arrival/new-arrival-three.png";
import newArrivalFour from "@/app/assets/home/new-arrival/new-arrival-four.png";
import bigSavingZoneOne from "@/app/assets/home/big-saving-zone/big-saving-zone-one.png";
import bigSavingZoneTwo from "@/app/assets/home/big-saving-zone/big-saving-zone-two.png";
import bigSavingZoneThree from "@/app/assets/home/big-saving-zone/big-saving-zone-three.png";
import bigSavingZoneFour from "@/app/assets/home/big-saving-zone/big-saving-zone-four.png";
import bigSavingZoneFive from "@/app/assets/home/big-saving-zone/big-saving-zone-five.png";

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

export const bigSavingZoneItems: BigSavingZoneType[] = [
	{
		id: uuidv4(),
		title: "Hawaiian Shirts",
		desc: "Dress up in summer vibe",
		image: bigSavingZoneOne,
		promo: "UP TO 50% OFF",
	},
	{
		id: uuidv4(),
		title: "Printed T-Shirts",
		desc: "New Designs Every Week",
		image: bigSavingZoneTwo,
		promo: "UP TO 40% OFF",
		limited: true,
	},
	{
		id: uuidv4(),
		title: "Cargo Joggers",
		desc: "Move with style & comfort",
		image: bigSavingZoneThree,
		promo: "UP TO 50% OFF",
	},
	{
		id: uuidv4(),
		title: "Urban Shirts",
		desc: "Live in Comfort",
		image: bigSavingZoneFour,
		promo: "FLAT 60% OFF",
	},
	{
		id: uuidv4(),
		title: "Oversized T-shirts",
		desc: "Street Style Icon",
		image: bigSavingZoneFive,
		promo: "FLAT 60% OFF",
	},
];
