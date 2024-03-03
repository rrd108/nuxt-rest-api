import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async event => {
  if (event.node.req.method != 'GET') {
    throw createError({ status: 405, message: 'Method Not Allowed' })
  }

  const users = await prisma.users.findMany()

  return users
})
