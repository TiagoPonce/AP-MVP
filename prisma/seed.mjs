import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'tiago@email.com' },
    update: {},
    create: {
      email: 'tiago@email.com',
      name: 'Tiago Ponce',
      password: '$2a$10$ELtbi2ZDbjw3UZIwXk9ny.W3DgF1u6NzxizoL.1q5l0YJwxmJ/w5.'
    },
  })
  const bob = await prisma.user.upsert({
    where: { email: 'dheniarley@email.com' },
    update: {},
    create: {
      email: 'dheniarley@email.com',
      name: 'Dheniarley Cruz',
      password: '$2a$10$ELtbi2ZDbjw3UZIwXk9ny.W3DgF1u6NzxizoL.1q5l0YJwxmJ/w5.'
    },
  })
  console.log({ alice, bob })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })