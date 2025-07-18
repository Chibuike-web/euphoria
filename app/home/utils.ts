import type { AllProductsType, Feedback, PromoCardType } from "./types";
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
import menShirts from "@/app/assets/men/t-shirts.png";
import menPrinted from "@/app/assets/men/printed.png";
import menPlain from "@/app/assets/men/plain.png";
import menPolo from "@/app/assets/men/polo.png";
import menHoodiesAndSweatShirt from "@/app/assets/men/hoodies-and-sweatshirt.png";
import menJeans from "@/app/assets/men/jeans.png";
import menActivewear from "@/app/assets/men/activewear.png";
import menBoxers from "@/app/assets/men/boxers.png";
import womenHoodiesAndSweatshirts from "@/app/assets/women/hoodies-and-sweatshirt.png";
import womenCoatsAndParkas from "@/app/assets/women/coats-and-parkas.png";
import womenTeesAndTshirts from "@/app/assets/women/tees-and-t-shirt.png";
import womenBoxers from "@/app/assets/women/boxers.png";
import nike from "@/app/assets/home/brand-logos/nike.png";
import hAndM from "@/app/assets/home/brand-logos/h-and-m.png";
import levis from "@/app/assets/home/brand-logos/levi's.png";
import assn from "@/app/assets/home/brand-logos/assn.png";
import puma from "@/app/assets/home/brand-logos/puma.png";
import blackSweatshirt from "@/app/assets/women/black-sweatshirt.png";
import linePatternBlack from "@/app/assets/women/line-pattern-black.png";
import blackShort from "@/app/assets/women/black-short.png";
import levenderHoodies from "@/app/assets/women/levender-hoodie.png";
import firstReview from "@/app/assets/home/reviews/first.png";
import secondReview from "@/app/assets/home/reviews/second.png";
import thirdReview from "@/app/assets/home/reviews/third.png";
import { v4 as uuidv4 } from "uuid";
import { StaticImageData } from "next/image";

export function getStars(rating: number) {
	const full = Math.floor(rating);
	const half = rating % 1 >= 0.5 ? 1 : 0;
	const empty = 5 - full - half;

	return { full, half, empty };
}

const id = uuidv4();

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
		id: uuidv4(),
		name: "Knitted Joggers",
		image: newArrivalOne,
		gender: "unisex",
		tags: [{ section: "NewArrival", type: "curated" }],
	},
	{
		id: uuidv4(),
		name: "Full Sleeve",
		image: newArrivalTwo,
		gender: "unisex",
		tags: [{ section: "NewArrival", type: "curated" }],
	},
	{
		id: uuidv4(),
		name: "Active T-Shirts",
		image: newArrivalThree,
		gender: "unisex",
		tags: [{ section: "NewArrival", type: "curated" }],
	},
	{
		id: uuidv4(),
		name: "Urban Shirts",
		image: newArrivalFour,
		gender: "unisex",
		tags: [{ section: "NewArrival", type: "curated" }],
	},
	{
		id: uuidv4(),
		name: "Hawaiian Shirts",
		image: bigSavingZoneOne,
		gender: "unisex",
		promo: "UP TO 50% OFF",
		desc: "Dress up in summer vibe",
		tags: [
			{
				section: "BigSavingZone",
				type: "promotional",
			},
		],
	},
	{
		id: uuidv4(),
		name: "Printed T-Shirts",
		image: bigSavingZoneTwo,
		gender: "unisex",
		promo: "UP TO 40% OFF",
		desc: "New Designs Every Week",
		custom: "limited",
		tags: [
			{
				section: "BigSavingZone",
				type: "promotional",
			},
		],
	},
	{
		id: uuidv4(),
		name: "Cargo Joggers",
		image: bigSavingZoneThree,
		gender: "unisex",
		promo: "UP TO 50% OFF",
		desc: "Move with style & comfort",
		tags: [
			{
				section: "BigSavingZone",
				type: "promotional",
			},
		],
	},
	{
		id: uuidv4(),
		name: "Urban Shirts",
		image: bigSavingZoneFour,
		gender: "unisex",
		promo: "FLAT 60% OFF",
		desc: "Live in Comfort",
		tags: [
			{
				section: "BigSavingZone",
				type: "promotional",
			},
		],
	},
	{
		id: uuidv4(),
		name: "Oversized T-shirts",
		image: bigSavingZoneFive,
		gender: "unisex",
		promo: "FLAT 60% OFF",
		desc: "Street Style Icon",
		tags: [
			{
				section: "BigSavingZone",
				type: "promotional",
			},
		],
	},
	{
		id: uuidv4(),
		name: "Shirts",
		image: menShirts,
		gender: "men",
		price: 100,
		category: "shirts",
	},
	{
		id: uuidv4(),
		name: "Printed T-shirts",
		image: menPrinted,
		gender: "men",
		price: 100,
		category: "printed-tees",
	},
	{
		id: uuidv4(),
		name: "Plain T-Shirts",
		image: menPlain,
		gender: "men",
		price: 100,
		category: "plain-tees",
	},
	{
		id: uuidv4(),
		name: "Polo T-shirts",
		image: menPolo,
		gender: "men",
		price: 100,
		category: "polo",
	},
	{
		id: uuidv4(),
		name: "Hoodies & Sweatshirt",
		image: menHoodiesAndSweatShirt,
		gender: "men",
		price: 100,
		category: "hoodies",
	},
	{
		id: uuidv4(),
		name: "Jeans",
		image: menJeans,
		gender: "men",
		price: 100,
		category: "jeans",
	},
	{
		id: uuidv4(),
		name: "Activewear",
		image: menActivewear,
		gender: "men",
		price: 100,
		category: "activewear",
	},
	{
		id: uuidv4(),
		name: "Boxers",
		image: menBoxers,
		gender: "men",
		price: 100,
		category: "boxers",
	},
	{
		id: uuidv4(),
		name: "Hoodies & Sweatshirt",
		image: womenHoodiesAndSweatshirts,
		gender: "women",
		price: 123,
		category: "hoodies",
	},
	{
		id: uuidv4(),
		name: "Coats & Jackets",
		image: womenCoatsAndParkas,
		gender: "women",
		price: 123,
		category: "coats",
	},

	{
		id: uuidv4(),
		name: "Tees & T-shirt",
		image: womenTeesAndTshirts,
		gender: "women",
		price: 123,
		category: "tees",
	},
	{
		id: uuidv4(),
		name: "Boxers",
		image: womenBoxers,
		gender: "women",
		price: 123,
		category: "boxers",
	},
	{
		id: uuidv4(),
		name: "Black Sweatshirt",
		image: blackSweatshirt,
		gender: "women",
		price: 123,
		brand: "Jhanvi's Brand",
		tags: [
			{
				section: "InTheLimelight",
				type: "curated",
			},
		],
	},
	{
		id: uuidv4(),
		name: "Line Pattern Black",
		image: linePatternBlack,
		gender: "women",
		price: 123,
		brand: "AS's Brand",
		tags: [
			{
				section: "InTheLimelight",
				type: "curated",
			},
		],
	},
	{
		id: uuidv4(),
		name: "Black Shorts",
		image: blackShort,
		gender: "women",
		price: 123,
		brand: "MM's Brand",
		tags: [
			{
				section: "InTheLimelight",
				type: "curated",
			},
		],
	},
	{
		id: uuidv4(),
		name: "Levender Hoodie",
		image: levenderHoodies,
		gender: "women",
		price: 123,
		brand: "Nike's Brand",
		tags: [
			{
				section: "InTheLimelight",
				type: "curated",
			},
		],
	},
];

export const brandLogos = [
	{
		id: "nike",
		image: nike,
		alt: "Logo for Nike",
	},
	{
		id: "h&m",
		image: hAndM,
		alt: "Logo for H&M",
	},
	{
		id: "levi's",
		image: levis,
		alt: "Logo for Levi's",
	},
	{
		id: "us-polo-assn",
		image: assn,
		alt: "Logo for U.S. POLO ASSN.",
	},
	{
		id: "puma",
		image: puma,
		alt: "Logo for Puma",
	},
];

export const feedback: Feedback[] = [
	{
		id: uuidv4(),
		image: firstReview,
		name: "Floyd Miles",
		star: 3.5,
		review: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
	},
	{
		id: uuidv4(),
		image: secondReview,
		name: "Ronald Richards",
		star: 4,
		review: `ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
	},
	{
		id: uuidv4(),
		image: thirdReview,
		name: "Savannah Nguyen",
		star: 3.5,
		review: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
	},
];
