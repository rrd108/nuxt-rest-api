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
})
