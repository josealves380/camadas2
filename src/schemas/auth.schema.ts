import { z } from "zod";

export const loginSchema = z.object({
 body: z.object({
    email: 
    z.string()
    .email({
      message: "Email is invalid"
    }),

    password: 
    z.string()
    .min(6, "Password with minimum 6 characters")
 })
});