import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getStars(rating: number) {
	const full = Math.floor(rating);
	const half = rating % 1 >= 0.5 ? 1 : 0;
	const empty = 5 - full - half;

	return { full, half, empty };
}

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

export function formatTime(time: number) {
	return new Intl.DateTimeFormat("en-US", {
		dateStyle: "long",
		timeStyle: "short",
	}).format(new Date(time));
}
