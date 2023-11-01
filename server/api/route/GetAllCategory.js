const prisma = require("../lib/prisma")

async function GetAllCategory(app) {
    app.get('/category', async () => {
        const category = await prisma.category.findMany()

        return { category }
    })
}

module.exports = GetAllCategory