import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'tiago@email.com' },
    update: {},
    create: {
      email: 'tiago@email.com',
      name: 'Tiago Ponce',
      password: '$2a$10$ELtbi2ZDbjw3UZIwXk9ny.W3DgF1u6NzxizoL.1q5l0YJwxmJ/w5.',
      role: 'admin'
    },
  })
  const bob = await prisma.user.upsert({
    where: { email: 'dheniarley@email.com' },
    update: {},
    create: {
      email: 'dheniarley@email.com',
      name: 'Dheniarley Cruz',
      password: '$2a$10$ELtbi2ZDbjw3UZIwXk9ny.W3DgF1u6NzxizoL.1q5l0YJwxmJ/w5.',
      role: 'admin'
    },
  })
  const coach = await prisma.user.upsert({
    where: { email: 'coach@email.com' },
    update: {},
    create: {
      email: 'coach@email.com',
      name: 'Coach',
      password: '$2a$10$ELtbi2ZDbjw3UZIwXk9ny.W3DgF1u6NzxizoL.1q5l0YJwxmJ/w5.',
      role: 'coach'
    },
  })
 

  const Company1 = await prisma.company.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Amazon',
      country: 'Brasil',
      city: 'São Paulo - SP',
      email: 'amazon@email.com',
      userId: 3,
    }
  });


  const Leader1 = await prisma.leader.upsert({
    where: { id: 1 },
    update: {},
    create: {
      firstName: 'Julia',
      lastName: 'Alves',
      age: 25,
      gender: 'Female',
      country: 'Brasil',
      city: 'Brasília - DF',
      email: 'julia@email.com',
      Phone: '61988888888',
      functionalArea: '',
      OrganizationalLevel: '',
      leadershipGrowthArea1: '',
      leadershipGrowthArea2: '',
      companyId: 1
    }
  });


  const Employee1 = await prisma.employee.upsert({
    where: { id: 1 },
    update: {},
    create: {
      firstName: 'Lucas',
      lastName: 'Alves',
      country: 'Brasil',
      city: 'São Paulo - SP',
      email: 'lucas@email.com',
      Phone: '61988888888',
      surveyLanguage: 'Portugues',
      organizationalRelationship: 'Manager',
      companyId: 1
    }
  });

  const Employee2 = await prisma.employee.upsert({
    where: { id: 2 },
    update: {},
    create: {
      firstName: 'Pedro',
      lastName: 'Souza',
      country: 'Brasil',
      city: 'Recife - PE',
      email: 'pedro@email.com',
      Phone: '61988888888',
      surveyLanguage: 'Portugues',
      organizationalRelationship: 'Manager',
      companyId: 1
    }
  });

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