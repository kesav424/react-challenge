import z from "zod";


export const loginForm = z.object({
    email: z.email("Enter a valid email"),
    password: z.string().min(6, "minimum 6 character needed")
})

export type LoginSchema = z.infer<typeof loginForm>