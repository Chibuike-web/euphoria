type ClassValue = string | number | false | null | undefined | Record<string, boolean>;

export function cn(...args: ClassValue[]): string {
	return args
		.flatMap((arg) => {
			if (!arg) return [];
			if (typeof arg === "string" || typeof arg === "number") return [arg];
			if (typeof arg === "object") {
				return Object.entries(arg)
					.filter(([, value]) => Boolean(value))
					.map(([key]) => key);
			}
			return [];
		})
		.join(" ");
}
