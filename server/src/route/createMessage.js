const prisma = require('../lib/prisma')
const { randomUUID } = require('node:crypto')

async function CreateMessage(app) {
    app.post('/message', async (request, reply) => {
        const { title, content } = request.body

        const message = await prisma.message.create({
            data: {
                id: randomUUID(),
                title,
                content
            }
        })

        return reply.status(201).send('sucess')
    })
}

module.exports = CreateMessage