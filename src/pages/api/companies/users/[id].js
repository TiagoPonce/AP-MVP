import { PrismaClient } from "@prisma/client"
import { getToken } from "next-auth/jwt"

const prisma = new PrismaClient()
const secret = process.env.SECRET

export default async function handler(req, res) {
    const { method } = req
    const { id } = req.query

    const token = await getToken({ req, secret })

    if (token) {
        if (method === "GET"){
            const companies = await prisma.company.findMany({
                where: {
                    userId: Number(id)
                },
                select: {
                    userId: true,
                    name: true,
                    country: true,
                    city: true,
                    email: true,
                    employees: true,
                    leaders: true
                }
            })

            return res.status(200).json({ data: companies })
        }

        return res.status(404).json({ message: 'Route not found.' })
    }

    return res.status(401).json({ message: 'unauthorized' })
}