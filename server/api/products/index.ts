import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async event => {
  if (event.req.method != 'GET') {
    throw createError({ status: 405, message: 'Method not Allowed' })
  }

  const products = await prisma.products.findMany()
  return products
})
