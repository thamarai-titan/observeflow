import jwt from "jsonwebtoken"

export const SignJwt = async (payload: {userId: string, role: string}): Promise<string> => {
    return jwt.sign(payload,process.env.SECRET_KEY!)
}