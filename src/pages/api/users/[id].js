import { PrismaClient } from "@prisma/client"
import { getToken } from "next-auth/jwt"

const prisma = new PrismaClient()
const secret = process.env.SECRET

export default async function handler(req, res) {
    const { method } = req
    const { id } = req.query

    const token = await getToken({ req, secret })

    if (token && token.role === 'admin') {
        if (method === "GET") {
            const user = await prisma.user.findUnique({
                where: {
                    id: Number(id)
                },
                select: {
                    name: true,
                    email: true,
                    password: false,
                    role: true,
                    companies: {
                        select: {
                            name: true,
                            email: true
                        }
                    }
                }
            })

            return res.status(200).json({ data: user })
        } else if (method === "PUT") {
            const { body } = req

            await prisma.user.update({
                where: {
                    id: Number(id)
                },
                data: body
            })

            return res.status(200).json({ message: 'User update successfully'})
        } else if (method === "DELETE") {
            await prisma.user.delete({
                where: {
                    id: Number(id)
                }
            })

            return res.status(200).json({ message: "User delete successfully"})
        } else {
            return res.status(404).json({ message: 'Route not found.'})
        }
    }
    return res.status(401).json({ message: 'unauthorized' })
}