import { response, type Request, type Response } from "express";
import { ProjectSchema, type ProjectType } from "./project.schema";
import { CreateProjectService } from "./project.service";
import { responses } from "../../lib/responses";
import { Prisma } from "@prisma/client";

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
