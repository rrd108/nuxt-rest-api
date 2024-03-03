import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async event => {
  if (event.node.req.method == 'GET') {
    const products = await prisma.products.findMany()
    return products
  }

  if (event.node.req.method == 'POST') {
    const data = await readBody(event)
    const product = await prisma.products.create({ data })
    if (!product) {
      throw createError({ status: 401, message: 'Product creation error' })
    }

    return product
  }
})
