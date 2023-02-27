import { PrismaClient } from "@prisma/client"
import { getToken } from "next-auth/jwt"

const prisma = new PrismaClient()
const secret = process.env.SECRET

export default async function handler(req, res) {
    const { method } = req
    const token = await getToken({ req, secret })

    if (token) {
        if (method === "GET") {
            const companies = await prisma.company.findMany({
                select: {
                    name: true,
                    country: true,
                    city: true,
                    email: true,
                    employees: true,
                    leaders: true
                }
            })

            return res.status(200).json({ data: companies })
        } else if (method === "POST") {
            console.log(body);
            const { body } = req
            const company = await prisma.company.create({
                data: body
            })

            return res.status(201).json(company)
        }

        return res.status(404).json({ message: 'Route not found.'})
    }

    return res.status(401).json({ message: 'unauthorized' })
}