const app = require('./app')
const { PORT } = require('./config/config')

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`)
})
