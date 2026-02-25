import type {Request, Response, NextFunction} from "express"
import { responses } from "../lib/responses";
import jwt from "jsonwebtoken"

declare global {
    namespace Express {
        interface Request {
            userId: string,
    
        }
    }
}

export const verifyToken = (req: Request, res: Response, next: NextFunction)=>{
    const authToken = req.headers.authorization;

    if(!authToken || !authToken.startsWith("Bearer")){
        return res.status(401).json(responses.error("UNAUTHORIZED"))
    }

    const token = authToken.split(" ")[1] as string
    console.log(token)
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY!) as {
            userId: string,
            role: string
        }
        req.userId = decoded.userId
        next()
        
    } catch (error) {
        return res.status(401).json(responses.error("UNAUTHORIZED"))
    }
}
