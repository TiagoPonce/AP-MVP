import { PrismaClient } from "@prisma/client"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()


export default NextAuth({
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            async authorize({ email, password }, req) {
                const user = await prisma.user.findUnique({
                    where: {
                        email,
                    }
                })


                if (!user) throw new Error('User not found')

                const verifyPassword = bcrypt.compareSync(password, user.password)

                if (!verifyPassword) throw new Error('Password invalid')

                return user
            }
        })
    ],
    callbacks: {
        session: async ({ session, token }) => {
          if (session?.user) {
            session.user.id = token.uid
            session.user.role = token.role
          }
          return session
        },
        jwt: async ({ user, token }) => {
          if (user) {
            token.uid = user.id
            token.role = user.role
          }
          return token
        },
    },
    session: {
        jwt: true
    },
    jwt: {
        secret: process.env.SECRET,
    }
})
