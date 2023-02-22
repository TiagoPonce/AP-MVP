import { PrismaClient } from "@prisma/client"
import { getToken } from "next-auth/jwt"

const prisma = new PrismaClient()
const secret = process.env.SECRET

export default async function handler(req, res) {
    const { method } = req
    const token = await getToken({ req, secret })

    if (token) {
        if (method === "GET") {
            const leaders = await prisma.leader.findMany()

            return res.status(200).json({ data: leaders })
        } else if (method === "POST") {
            const { body } =  req
            const leader =  await prisma.leader.create({
                data: body
            })

            return res.status(201).json(leader)
        }
    }

    return res.status(401).json({ message: 'unauthorized' })
}
