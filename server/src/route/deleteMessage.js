const prisma = require('../lib/prisma')

async function DeleteMessage(app) {
    app.delete('/message/:id', async (request, response) => {
        const { id } = request.params

        await prisma.message.delete({
            where: {
                id
            }
        })
        return response.status(202).send()
    })

}

module.exports = DeleteMessage