import prisma from "@/libs/prisma";
import bcrypt from "bcryptjs"



export default async function handler(req, res) {
    const { method } = req;

    if (method === "GET") {
        const users = await prisma.user.findMany({
            select: {
                name: true,
                email: true,
                password: false
            }
        });
        return res.status(200).json({ data: users })

    } else if (method === "POST") {
        const { name, email, password} = req.body;

        const salt = await bcrypt.genSalt(10);
        const newPassword = await bcrypt.hash(password, salt);

        const user = await prisma.user.create({
            data: {
                name, email, password: newPassword
            }
        });

        delete user.password

        return res.status(201).json(user);
    }

    return res.status(404).json({ message: 'Route not found.'})
}