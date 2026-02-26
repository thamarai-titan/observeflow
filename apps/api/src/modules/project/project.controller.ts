import type { Request, Response } from "express";
import { ProjectSchema, type ProjectType } from "./project.schema";
import { CreateProjectService, DeleteProjectService, GetallProjectService } from "./project.service";
import { responses } from "../../lib/responses";
import { Prisma } from "@prisma/client";

type Params = {
  projectId: string
}

export const CreateProjectController = async (req: Request, res: Response) => {
    try {
        const data: ProjectType = ProjectSchema.parse(req.body)

        const userId = req.userId

        const project = await CreateProjectService(data, userId)

        res.status(200).json(responses.success({
            project
        }))
    } catch (error: any) {
        if (error.name === "ZodError") {
      return res.status(400).json(responses.error("INVALID_INPUT"));
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return res.status(409).json(responses.error("TOOL_ALREADY_EXISTS"));
      }

      if (error.code === "P2003") {
        return res.status(400).json(responses.error("INVALID_CATEGORY"));
      }
    }

    return res.status(500).json(responses.error("INTERNAL_SERVER_ERROR"));
  }
}


export const GetallProjectsController = async (req: Request, res: Response) => {
  try {
    const userId = req.userId

    const projects = await GetallProjectService(userId)

    if(!projects.length){
      return res.status(400).json(responses.error("NO_RPOJECTS"))
    }

    return res.status(200).json({
      projects
    }) 
  } catch (error) {
    return res.status(500).json(responses.error("INTERNEL_SERVER"))
  }
}

export const DeleteProjectController = async (req: Request<Params>, res: Response) => {
  try {
    const userId = req.userId
    const projectId = req.params.projectId as string

    const project = await DeleteProjectService(userId, projectId)

    if (project){
      return res.status(200).json(responses.success({
        "message": "Project deleted Successfully"
      }))
    }
  } catch (error: any) {
    if(error instanceof Prisma.PrismaClientKnownRequestError){
      if(error.code === "P2025"){
        return res.status(400).json(responses.error("NO_ITEM_TO_DELETE"))
      }
    }

    return res.status(500).json(responses.error("INTERNEL_SERVER_ERROR"))
  }
}

export const RotateApiKeyController = async (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    
  }
}