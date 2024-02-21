export default defineEventHandler(event => {
  console.log('event', event)
  if (event.req.method != 'POST') {
    throw createError({ status: 405, message: 'Method not Allowed' })
  }

  return {
    user: 'rrd',
  }
})
