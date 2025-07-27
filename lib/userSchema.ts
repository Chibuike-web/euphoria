import { z } from "zod";
import { authSchema } from "./authSchema";

export const userSchema = authSchema.extend({});

export type UserType = z.infer<typeof userSchema>;
