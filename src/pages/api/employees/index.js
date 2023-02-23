import { PrismaClient } from "@prisma/client"
import { getToken } from "next-auth/jwt"

const prisma = new PrismaClient()
const secret = process.env.SECRET

export default async function handler(req, res) {
    const { method } = req
    
    const token = await getToken({ req, secret })

    if (token) {
        if (method === "GET") {
            const employees = await prisma.employee.findMany()

            return res.status(200).json({ data: employees })
        } else if (method === "POST") {
            const { body } = req

            const employee = await prisma.user.create({
                data: body
            })

            return res.status(201).json(employee)
        }

        return res.status(404).json({ message: 'Route not found.'})
    }

    return res.status(401).json({ message: 'unauthorized'})
}