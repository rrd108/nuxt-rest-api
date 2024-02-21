# Nuxt 3 REST API

## Endpoints

| URL          | HTTP method | Auth | JSON Response     |
| ------------ | ----------- | ---- | ----------------- |
| /users/login | POST        |      | user's token      |
| /users       | GET         | Y    | all users         |
| /products    | GET         |      | all products      |
| /products    | POST        | Y    | new product added |
| /products    | PATCH       | Y    | edited product    |
| /products    | DELETE      | Y    | id                |

## Steps

1. `npx nuxi@latest init nuxt-rest-api`
2. `yarn`
3. `yarn dev`
4. `yarn add -D prisma`
5. `npx prisma init`
6. `npx prisma db pull`
7. `npx prisma generate`
8. `yarn add md5`

`npx prisma migrate dev --name init`

## Notes

`const id = getRouterParam(event, 'id')`
CORS: https://www.youtube.com/watch?v=g6BVCBkRelw&t=849s
