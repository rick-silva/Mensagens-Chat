const { fastify } = require('fastify')

const createMessage = require('./route/createMessage')
const getAllMessage = require('./route/getAllMessage')
const updateMessage = require('./route/updateMessage')
const deleteMessage = require('./route/deleteMessage')
const GetMessageById = require('./route/getMessageById')

const app = fastify({
  logger: true
})

app.register(createMessage)
app.register(getAllMessage)
app.register(updateMessage)
app.register(deleteMessage)
app.register(GetMessageById)





app.listen({
  port: 3333,
}).then(() => {
  console.log(`HTTP Server running on http://localhost:3333`)
})