import { z } from "zod";
import { emailSignupSchema, googleSignupSchema } from "./authSchema";

export const userSchema = z.union([emailSignupSchema, googleSignupSchema]);

export type UserType = z.infer<typeof userSchema>;
