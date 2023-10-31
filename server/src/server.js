const { fastify } = require('fastify')
const Cors = require('@fastify/cors')

const createMessage = require('./route/createMessage')
const getAllMessage = require('./route/getAllMessage')
const updateMessage = require('./route/updateMessage')
const deleteMessage = require('./route/deleteMessage')
const getMessageById = require('./route/getMessageById')
const createCategory = require('./route/createCategory')
const getAllCategory = require('./route/GetAllCategory')
const getCategoryId = require('./route/getCategoryId')

const app = fastify({
  logger: true
})

app.register(Cors, {
  origin: true
})

app.register(createMessage)
app.register(getAllMessage)
app.register(updateMessage)
app.register(deleteMessage)
app.register(getMessageById)
app.register(createCategory)
app.register(getAllCategory)
app.register(getCategoryId)


app.listen({
  port: 3333,
}).then(() => {
  console.log(`HTTP Server running on http://localhost:3333`)
})