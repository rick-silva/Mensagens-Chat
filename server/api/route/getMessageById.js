const prisma = require("../lib/prisma")

async function GetMessageById(app) {
    app.get('/message/:id', async (request, response) => {
        const { id } = request.params

        const message = await prisma.message.findUniqueOrThrow({
            where: {
                id
            }
        })

        return { message }
    })
}

module.exports = GetMessageById