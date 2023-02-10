import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { method } = req;

    if (method === "GET") {
        const users = await prisma.user.findMany();
        return res.status(200).json({ data: users })
    } else if (method === "POST") {
        const { name, email } = req.body;

        const user = await prisma.user.create({
            data: {
                name, email
            }
        });

        return res.status(201).json(user);
    }

    return res.status(404).json({ message: 'Route not found.'})
}