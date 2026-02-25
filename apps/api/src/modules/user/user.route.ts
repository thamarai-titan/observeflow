import { Router } from "express";
import { verifyToken } from "../../middleware/auth.middleware";
import { UserDetailsController } from "./user.controller";


const router = Router()

router.get("/auth/profile", verifyToken, UserDetailsController)

export default router