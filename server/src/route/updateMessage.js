const prisma = require('../lib/prisma')

async function UpdateMessage(app) {
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
}

module.exports = UpdateMessage