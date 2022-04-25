const ContenedorMemory = require('../contenedores/MemoryContainer')
const contenetorProductos = new ContenedorMemory()

class ProductsController {

    getAll() {
        return contenetorProductos.getAll()
    }

    getById(id) {
        const product = contenetorProductos.getById(id)
        if (!product) throw new Error('Producto no encontrado')
        return product
    }

    save(newProduct) {
        return contenetorProductos.save(newProduct)
    }

    update(idProduct, newDataProduct) {
        const productUpdated = contenetorProductos.update(idProduct, newDataProduct)
        if (!productUpdated) throw new Error('Producto no encontrado')
        return productUpdated
    }

    deleteById(idProduct) {
        return contenetorProductos.deleteById(idProduct)
    }

}

module.exports = new ProductsController()