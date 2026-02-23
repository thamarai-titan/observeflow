import z from "zod"

export const RegisterSchema = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6)
})

export type RegisterType = z.infer<typeof RegisterSchema>


export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export type LoginType = z.infer<typeof LoginSchema>

