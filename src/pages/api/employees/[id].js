import { PrismaClient } from "@prisma/client"
import { getToken } from "next-auth/jwt"

const prisma = new PrismaClient()
const secret = process.env.SECRET

export default async function handler(req, res) {
    const { method } = req
    const { id } = req.query

    const token = await getToken({ req, secret })

    if (token) {
        if (method === "GET") {
            const employee =  await prisma.employee.findUnique({
                where: {
                    id: Number(id)
                }
            })

            return res.status(200).json({ data: employee })
        } else if (method === "PUT") {
            const { body } = req

            await prisma.employee.update({
                where: {
                    id: Number(id)
                },
                data: body
            })

            return res.status(200).json({ message: 'Employee update successfully'})
        } else if (method === "DELETE") {
            await prisma.employee.delete({
                where: {
                    id: Number(id)
                }
            })

            return res.status(200).json({ message: 'Employee delete successfully' })
        }
        return res.status(404).json({ message: 'Route not found.' })
    }
    return res.status(401).json({ message: 'unauthorized' })
}
