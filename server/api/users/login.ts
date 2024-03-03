import { PrismaClient } from '@prisma/client'
import md5 from 'md5'

const prisma = new PrismaClient()

export default defineEventHandler(async event => {
  if (event.node.req.method != 'POST') {
    throw createError({ status: 405, message: 'Method Not Allowed' })
  }

  const data = await readBody(event)

  const user = await prisma.users.findUnique({
    where: {
      email: data.email,
      password: md5(data.password),
    },
  })

  if (!user) {
    throw createError({ status: 401, message: 'User can not be identified' })
  }

  delete user.password
  return user
})
