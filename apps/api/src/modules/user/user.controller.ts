import type { Request, Response } from "express";
import { UserDetailsService } from "./user.service";
import { responses } from "../../lib/responses";


export const UserDetailsController = async (req: Request, res: Response) => {
    try {
        const userId = req.userId
        const user = await UserDetailsService(userId)

        if(!user){
            return res.status(400).json(responses.error("NO_USER_FOUND"))
        }

        res.status(200).json(responses.success({
            user
        }))
    } catch (error) {
        res.status(500).json(responses.error("INTERNEL_SERVER_ERROR"))
    }
}