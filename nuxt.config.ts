// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    'api/**': {
      cors: true,
      headers: {
        'access-control-allow-origin': 'http://localhost:3000',
        'access-control-allow-headers': ['Origin', 'Token', 'Content-Type'],
      },
    },
  },
})
