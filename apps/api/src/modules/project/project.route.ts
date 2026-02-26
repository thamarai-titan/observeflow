import { Router } from "express";
import { verifyToken } from "../../middleware/auth.middleware";
import { CreateProjectController, DeleteProjectController, GetallProjectsController, RotateApiKeyController } from "./project.controller";

const router = Router()

router.post("/projects", verifyToken, CreateProjectController)
router.get("/projects", verifyToken, GetallProjectsController)
router.delete("/projects/:id", verifyToken, DeleteProjectController)
router.post("/projects/:id/regenerate-key", verifyToken, RotateApiKeyController)
export default router