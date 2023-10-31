const prisma = require("../lib/prisma")

async function GetCategoryId(app) {
    app.get('/category/:id', async (request) => {
        const { id } = request.params
        const category = await prisma.category.findMany({
            where: {
                id
            },
            select: {
                id: true,
                title: true,
                message: {
                    select: {
                        title: true,
                        id: true,
                        content: true
                    }
                }
            }
        })

        return { category }
    })
}

module.exports = GetCategoryId