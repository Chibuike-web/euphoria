import type { Feedback, PromoCardType } from "./types";
import promoOne from "@/app/assets/home/promo/promo-one.jpg";
import promoSecond from "@/app/assets/home/promo/promo-two.jpg";
import nike from "@/app/assets/home/brand-logos/nike.png";
import hAndM from "@/app/assets/home/brand-logos/h-and-m.png";
import levis from "@/app/assets/home/brand-logos/levi's.png";
import assn from "@/app/assets/home/brand-logos/assn.png";
import puma from "@/app/assets/home/brand-logos/puma.png";
import firstReview from "@/app/assets/home/reviews/first.png";
import secondReview from "@/app/assets/home/reviews/second.png";
import thirdReview from "@/app/assets/home/reviews/third.png";
import { v4 as uuidv4 } from "uuid";

export function getStars(rating: number) {
	const full = Math.floor(rating);
	const half = rating % 1 >= 0.5 ? 1 : 0;
	const empty = 5 - full - half;

	return { full, half, empty };
}

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

export function toSentenceCase(str: string): string {
	if (!str) return "";
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function maskEmail(email: string): string {
	const [name, domain] = email.split("@");
	if (!name || !domain) return email;
	const visible = name.slice(0, 2); // keep first 2 chars
	return `${visible}****@${domain}`;
}

export const categories = [
	{ id: "shirts", label: "Shirts" },
	{ id: "printed-tees", label: "Printed T-shirts" },
	{ id: "plain-tees", label: "Plain T-shirts" },
	{ id: "polo", label: "Polo Shirts" },
	{ id: "hoodies", label: "Hoodies & Sweatshirtss" },
	{ id: "shorts", label: "Shorts" },
	{ id: "jeans", label: "Jeans" },
	{ id: "activewear", label: "Activewear" },
	{ id: "coats", label: "Coats & Jackets" },
	{ id: "tees", label: "Tees & T-shirts " },
	{ id: "boxers", label: "Boxers" },
	{ id: "joggers", label: "Joggers" },
];
