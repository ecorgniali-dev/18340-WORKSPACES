const express = require('express')
const app = express()
const productsRouter = require('./routers/products.routes')

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(process.cwd() + '/public'))

// Routers
app.use('/api/productos', productsRouter)


module.exports = app;