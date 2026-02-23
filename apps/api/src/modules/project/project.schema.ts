import z from "zod"

export const ProjectSchema = z.object({
    name: z.string().min(3),
    description: z.string()
})

export type ProjectType = z.infer<typeof ProjectSchema>