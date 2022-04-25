const app = require('./app')
const { PORT } = require('./config/config')

const server = app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`)
})

server.on('error', (err) => console.log(err.message))
