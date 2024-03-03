import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async event => {
  if (event.node.req.method == 'PATCH') {
    const id = Number(getRouterParam(event, 'id'))
    const data = await readBody(event)

    const product = await prisma.products.update({
      where: { id },
      data,
    })
    if (!product) {
      throw createError({ status: 401, message: 'Product modification error' })
    }
    return product
  }

  if (event.node.req.method == 'DELETE') {
    const id = Number(getRouterParam(event, 'id'))
    try {
      const product = await prisma.products.delete({ where: { id } })
    } catch (error) {
      throw createError({ status: 404, message: 'Product deletion error' })
    }

    return { id }
  }
})
