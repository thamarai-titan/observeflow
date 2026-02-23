import type { Request, Response } from "express";
import { ProjectSchema, type ProjectType } from "./project.schema";

export const CreateProjectController = async (req: Request, res: Response) => {
    try {
        const data: ProjectType = ProjectSchema.parse(req.body)
    } catch (error) {
        
    }
} 