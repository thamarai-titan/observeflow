import { prisma } from "../../lib/prisma"

export const UserDetailsService = async (userId: string) => {
    try {
        const user = prisma.user.findUnique({
            where: {
                id: userId
            },
            select: {
                id: true,
                email: true,
                name: true
            }
        })

        return user
    } catch (error) {
        throw error
    }
}