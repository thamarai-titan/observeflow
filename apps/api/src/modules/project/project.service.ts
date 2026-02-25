import { prisma } from "../../lib/prisma";
import type { ProjectType } from "./project.schema";
import { randomBytes } from "crypto";

export const CreateProjectService = async (data: ProjectType, userId: string)=> {
    try {
        const{
            name,
            description
        } = data

        const apiKey = randomBytes(32).toString('hex')

        const project = await prisma.projects.create({
            data: {
                name,
                description,
                apiKey: apiKey,
                userId: userId
            },
            select: {
                id: true,
                name: true,
                description: true
            }
        })
        return project
    } catch (error) {
        throw error
    }
}