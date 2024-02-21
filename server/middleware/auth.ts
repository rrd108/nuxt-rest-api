import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const noAuthRoutes = ['POST:/api/users/login', 'GET:/api/products']

export default defineEventHandler(async event => {
  if (noAuthRoutes.includes(`${event.req.method}:${event.req.url}`)) {
    return
  }

  const token = getHeader(event, 'token')
  if (!token) {
    throw createError({ status: 401, message: 'Missing authentication header' })
  }

  const user = await prisma.users.findFirst({ where: { token } })
  if (!user) {
    throw createError({ status: 401, message: 'Authentication error' })
  }
})
