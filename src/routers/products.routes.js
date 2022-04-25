const { Router } = require('express')
const router = Router()
const apiProductos = require('../controllers/products.controller')

router.get('/', (req, res) => {
    try {
        const productos = apiProductos.getAll()
        res.json(productos)
    } catch (error) {
        res.json({ error: error.message })
    }
})

router.get('/:id', (req, res) => {
    try {
        const product = apiProductos.getById(req.params?.id)
        res.json(product)
    } catch (error) {
        res.json({ error: error.message })
    }
})

router.post('/', (req, res) => {
    try {
        const result = apiProductos.save(req.body)
        res.json(result)
    } catch (error) {
        res.json({ error: error.message })
    }
})

router.put('/:id', (req, res) => {
    try {
        const newProduct = apiProductos.update(req.params?.id, req.body)
        res.json(newProduct)
    } catch (error) {
        res.json({ error: error.message })
    }
})

router.delete('/:id', (req, res) => {
    try {
        const result = apiProductos.deleteById(req.params?.id)
        res.json(result)
    } catch (error) {
        res.json({ error: error.message })
    }
})

module.exports = router;