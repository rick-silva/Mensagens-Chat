const prisma = require('../lib/prisma')

async function GetAllMessage(app) {
    app.get('/message', async (request, response) => {
        const message = await prisma.message.findMany()

        return { message }
    })
}

module.exports = GetAllMessage