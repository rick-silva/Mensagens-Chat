const prisma = require("../lib/prisma")
const { randomUUID } = require('node:crypto')

async function CreateCategory(app) {
    app.post('/category', async (request, response) => {
        const { title } = request.body

        await prisma.category.create({
            data: {
                id: randomUUID(),
                title,
            }
        })

        return response.status(200).send()
    })
}

module.exports = CreateCategory