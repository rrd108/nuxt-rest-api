import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async event => {
  if (event.req.method == 'PATCH') {
    const id = Number(getRouterParam(event, 'id'))
    const data = await readBody(event)

    const product = await prisma.products.update({ where: { id }, data })
    if (!product) {
      throw createError({ status: 401, message: 'Product modification error' })
    }
    return product
  }

  if (event.req.method == 'DELETE') {
    const id = Number(getRouterParam(event, 'id'))
    try {
      const product = await prisma.products.delete({ where: { id } })
    } catch (e) {
      // TODO do the same at the other endpoints
      throw createError({ status: 404, message: 'Product not found' })
    }
    return product
  }
})
