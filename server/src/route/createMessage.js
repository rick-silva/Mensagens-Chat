import { prisma } from "../lib/prisma"
import { randomUUID } from 'node:crypto'
import { prisma } from "../lib/prisma"

export async function CreateMessage() {
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
}