import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import { randomUUID } from 'node:crypto'

const prisma = new PrismaClient()

const app = Fastify({
  logger: true
})

app.post('/message', async (request, response) => {
  const { title, content } = request.body

  await prisma.message.create({
    data: {
      id: randomUUID(),
      title,
      content
    }
  })

  return response.status(201).send('create')
})

app.get('/message', async (request, response) => {
  const message = await prisma.message.findMany()

  return { message }
})

app.put('/message/:id', async (request, response) => {
  const { title, content } = request.body
  const { id } = request.params

  await prisma.message.update({
    where: {
      id
    },
    data: {
      title,
      content
    }
  })

  return response.status(204).send()
})

app.delete('/message/:id', async (request, response) => {
  const { id } = request.params

  await prisma.message.delete({
    where: {
      id
    }
  })
})


app.listen({
  port: 3333,
}).then(() => {
  console.log(`HTTP Server running on http://localhost:3333`)
})