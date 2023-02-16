import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"
import { getToken } from "next-auth/jwt";

const prisma = new PrismaClient();
const secret = process.env.SECRET;

export default async function handler(req, res) {
    const { method } = req;

    const token = await getToken({ req, secret });

    if (token) {
        if (method === "GET") {
            const users = await prisma.user.findMany({
                select: {
                    name: true,
                    email: true,
                    password: false,
                    enterprises: {
                        select: {
                            name: true
                        }
                    }
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

    return res.status(401).json({ message: 'unauthorized' });
}