class ContenedorMemory {

    constructor() {
        this.elements = []
    }

    save(data) {
        const elements = this.getAll()
        data.id = elements.length == 0 ? 1 : elements[elements.length - 1].id + 1
        elements.push(data)
        const newProduct = elements[elements.length - 1]
        return newProduct
    }

    getAll() {
        return this.elements
    }

    getById(id) {
        const elements = this.getAll()
        const idParsed = parseInt(id.replace(/\s+/g, ''), 10)
        const searchedItem = elements.find(item => item.id === idParsed)
        if (searchedItem) return searchedItem
        return null
    }

    update(id, newData) {
        const product = this.getById(id)
        if (!product) return null
        const productUpdated = Object.assign(product, newData)
        return productUpdated
    }

    deleteById(id) {
        const elements = this.getAll()
        const idParsed = parseInt(id.replace(/\s+/g, ''), 10)
        const indexToDelete = elements.findIndex(item => item.id === idParsed)
        if (indexToDelete === -1) return null
        elements.splice(indexToDelete, 1)
        return idParsed
    }

    deleteAll() {
        this.elements = []
        return
    }

}

module.exports = ContenedorMemory;