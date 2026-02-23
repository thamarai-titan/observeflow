import type { Request, Response } from "express"
import { LoginSchema, RegisterSchema, type LoginType, type RegisterType } from "./auth.schema"
import { checkEmail, LoginService, RegisterService } from "./auth.service"

import { responses } from "../../lib/responses"
import { SignJwt } from "../../lib/utils"

export const RegisterController = async (req:Request, res:Response)=> {
    try {
        const data: RegisterType = RegisterSchema.parse(req.body)
        const emailsExsists = await checkEmail(data.email)

        if(emailsExsists){
            res.status(400).json(responses.error("EMAIL ALREADY EXSISTS"))
        }
        const user = await RegisterService(data)

        res.status(201).json(responses.success(user))

    } catch (error: any) {
        if(error.name === "ZodError"){
            res.status(400).json(responses.error("Zod Validation Error"))
        }

        res.status(500).json(responses.error("Internal Server Error"))
    }
}

export const LoginController = async (req:Request, res:Response) => {
    try {
        const data: LoginType = LoginSchema.parse(req.body)

        const user = await LoginService(data);

        const token = await SignJwt({
            userId: user.id,
            role: user.role
        })

        return res.status(200).json(responses.success({
            token
        }))
    } catch (error: any) {
        if(error.name === "ZodError"){
            return res.status(400).json(responses.error("INVALID_REQUEST"))
        }

        if(error.message === "NO_USER_FOUND"){
            return res.status(401).json(responses.error("NO_USER_FOUND"))
        }

        if(error.message === "INVALID_CREDENTIALS"){
           return res.status(401).json(responses.error("INVALID_CREDENTIALS"))
        }

        return res.status(500).json(responses.error("INTERNEL_SERVER_ERROR"))
    }
}