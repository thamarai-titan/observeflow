import { Router } from "express";
import { LoginController, RegisterController } from "./auth.controller";

const router = Router()


router.post("/auth/register", RegisterController)
router.post("/auth/login", LoginController)


export default router