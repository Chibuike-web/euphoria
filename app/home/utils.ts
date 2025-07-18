import type { AllProductsType, PromoCardType } from "./types";
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
import menShirts from "@/app/assets/home/men/t-shirts.png";
import menPrinted from "@/app/assets/home/men/printed.png";
import menPlain from "@/app/assets/home/men/plain.png";
import menPolo from "@/app/assets/home/men/polo.png";
import menHoodiesAndSweatShirt from "@/app/assets/home/men/hoodies-and-sweatshirt.png";
import menJeans from "@/app/assets/home/men/jeans.png";
import menActivewear from "@/app/assets/home/men/activewear.png";
import menBoxers from "@/app/assets/home/men/boxers.png";
import womenHoodiesAndSweatshirts from "@/app/assets/home/women/hoodies-and-sweatshirt.png";
import womenCoatsAndParkas from "@/app/assets/home/women/coats-and-parkas.png";
import womenTeesAndTshirts from "@/app/assets/home/women/tees-and-t-shirt.png";
import womenBoxers from "@/app/assets/home/women/boxers.png";
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

export const allProducts: AllProductsType[] = [
	{
		id: "new-arrival",
		title: "NewArrival",
		type: "curated",
		products: [
			{
				id: uuidv4(),
				name: "Knitted Joggers",
				image: newArrivalOne,
			},
			{
				id: uuidv4(),
				name: "Full Sleeve",
				image: newArrivalTwo,
			},
			{
				id: uuidv4(),
				name: "Active T-Shirts",
				image: newArrivalThree,
			},
			{
				id: uuidv4(),
				name: "Urban Shirts",
				image: newArrivalFour,
			},
		],
	},
	{
		id: "big-saving-zone",
		title: "BigSavingZone",
		type: "promotional",
		products: [
			{
				id: uuidv4(),
				name: "Hawaiian Shirts",
				desc: "Dress up in summer vibe",
				image: bigSavingZoneOne,
				promo: "UP TO 50% OFF",
			},
			{
				id: uuidv4(),
				name: "Printed T-Shirts",
				desc: "New Designs Every Week",
				image: bigSavingZoneTwo,
				promo: "UP TO 40% OFF",
				tags: ["limited"],
			},
			{
				id: uuidv4(),
				name: "Cargo Joggers",
				desc: "Move with style & comfort",
				image: bigSavingZoneThree,
				promo: "UP TO 50% OFF",
			},
			{
				id: uuidv4(),
				name: "Urban Shirts",
				desc: "Live in Comfort",
				image: bigSavingZoneFour,
				promo: "FLAT 60% OFF",
			},
			{
				id: uuidv4(),
				name: "Oversized T-shirts",
				desc: "Street Style Icon",
				image: bigSavingZoneFive,
				promo: "FLAT 60% OFF",
			},
		],
	},
	{
		id: "men-category",
		title: "CateogoriesForMen",
		type: "category",
		products: [
			{
				id: uuidv4(),
				name: "Shirts",
				image: menShirts,
			},
			{
				id: uuidv4(),
				name: "Printed T-Shirts",
				image: menPrinted,
			},
			{
				id: uuidv4(),
				name: "Plain T-Shirts",
				image: menPlain,
			},
			{
				id: uuidv4(),
				name: "Polo Shirts",
				image: menPolo,
			},
			{
				id: uuidv4(),
				name: "Hoodies & Sweetshirt",
				image: menHoodiesAndSweatShirt,
			},
			{
				id: uuidv4(),
				name: "Jeans",
				image: menJeans,
			},
			{
				id: uuidv4(),
				name: "Activewear",
				image: menActivewear,
			},
			{
				id: uuidv4(),
				name: "Boxers",
				image: menBoxers,
			},
		],
	},
	{
		id: "women-category",
		title: "CateogoriesForWomen",
		type: "category",
		products: [
			{
				id: uuidv4(),
				name: "Hoodies & Sweatshirt",
				image: womenHoodiesAndSweatshirts,
			},
			{
				id: uuidv4(),
				name: "Coats & Parkas",
				image: womenCoatsAndParkas,
			},
			{
				id: uuidv4(),
				name: "Tees & T-shirt",
				image: womenTeesAndTshirts,
			},
			{
				id: uuidv4(),
				name: "Boxers",
				image: womenBoxers,
			},
		],
	},
];
