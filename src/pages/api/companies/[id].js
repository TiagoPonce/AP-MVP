import { PrismaClient } from "@prisma/client"
import { getToken } from "next-auth/jwt"

const prisma = new PrismaClient()
const secret = process.env.SECRET

export default async function handler(req, res) {
    const { method } =  req
    const { id } = req.query

    const token = await getToken({ req, secret })

    if (token) {
        if (method === "GET") {
            const company = await prisma.company.findUnique({
                where: {
                    id: Number(id)
                },
                select: {
                    name: true,
                    country: true,
                    city: true,
                    email: true,
                    employees: true,
                    leaders: true
                }
            })

            return res.status(200).json({ data: company })
        } else if (method === "PUT") {
            const { body } = req
            
            await prisma.user.update({
                where: {
                    id: Number(id)
                },
                data: body
            })

            return res.status(200).json({ message: 'Company update successfully' })
        } else if (method === "DELETE") {
            await prisma.company.delete({
                where: {
                    id: Number(id)
                }
            })

            return res.status(200).json({ message: "Company delete successfully" })
        }

        return res.status(404).json({ message: 'Route not found.'})
    }

    return res.status(401).json({ message: 'unauthorized' })
}