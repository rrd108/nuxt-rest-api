import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async event => {
  if (event.req.method != 'GET') {
    throw createError({ status: 405, message: 'Method not Allowed' })
  }

  const token = getHeader(event, 'token')
  if (!token) {
    throw createError({ status: 401, message: 'Missing authentication header' })
  }

  const user = await prisma.users.findFirst({ where: { token } })
  if (!user) {
    throw createError({ status: 401, message: 'Authentication error' })
  }

  const users = await prisma.users.findMany()
  return users
})
