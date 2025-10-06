import { z } from "zod";

export const passwordSchema = z
	.string()
	.min(1, { message: "Password is required" })
	.min(8, { message: "Password must be at least 8 characters" })
	.refine((val) => /[a-zA-Z]/.test(val) && /\d/.test(val) && /[^a-zA-Z0-9]/.test(val), {
		message: "Use 8 or more characters with a mix of letters, numbers & symbols",
	});

const baseSchema = z.object({
	email: z
		.string()
		.min(1, { message: "Email is required" })
		.min(6, { message: "Email must be at least 6 characters" })
		.refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
			message: "Email must be valid",
		}),
	terms: z.boolean().refine((val) => val === true, {
		message: "Please accept the terms and conditions",
	}),
	subscribe: z.boolean().optional(),
	provider: z.enum(["email", "google"]),
});

export const emailSignupSchema = baseSchema.extend({
	password: passwordSchema,
	provider: z.literal("email"),
});

export const googleSignupSchema = baseSchema.extend({
	name: z.string(),
	provider: z.literal("google"),
});

export type FormData = z.infer<typeof emailSignupSchema>;

export const loginSchema = z.object({
	email: z
		.string()
		.min(1, { message: "Email is required" })
		.refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
			message: "Email must be valid",
		}),
	password: passwordSchema,
});

export type LoginType = z.infer<typeof loginSchema>;
