const express = require('express')
const app = express()
const ContenedorFileSystem = require('./contenedores/FileSystemContainer')
const apiProductos = new ContenedorFileSystem('src/productos.txt')
const utils = require('./utils/numRandom')


app.get('/productos', async (req, res) => {
    try {
        const productos = await apiProductos.getAll()
        res.json(productos)
    } catch (error) {
        res.json({ error: error.message })
    }
})

app.get('/productosRandom', async (req, res) => {
    try {
        const products = await apiProductos.getAll()
        const random = utils.generarNumRandom(0, products.length - 1)
        res.json(products[random])
    } catch (error) {
        res.json({ error: error.message })
    }
})

module.exports = app;