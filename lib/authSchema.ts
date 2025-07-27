import { z } from "zod";

export const passwordSchema = z
	.string()
	.min(1, { message: "Password is required" })
	.min(8, { message: "Password must be at least 8 characters" })
	.refine((val) => /[a-zA-Z]/.test(val) && /\d/.test(val) && /[^a-zA-Z0-9]/.test(val), {
		message: "Use 8 or more characters with a mix of letters, numbers & symbols",
	});

export const authSchema = z.object({
	email: z
		.string()
		.min(1, { message: "Email is required" })
		.min(6, { message: "Email must be at least 6 characters" })
		.refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
			message: "Email must be valid",
		}),
	password: passwordSchema,
	terms: z.boolean().refine((val) => val === true, {
		message: "Please accept the terms and conditions",
	}),
	subscribe: z.boolean().optional(),
});

export type FormData = z.infer<typeof authSchema>;
