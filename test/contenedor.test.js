const ContenedorFileSystem = require('../Contenedor')
const { assert } = require('chai')

describe('Contenedor FileSystem Tests', () => {

    it('Agregar un elem al archivo y devolver su id', async () => {
        const result = await ContenedorFileSystem.save({
            title: 'Escuadra',
            price: 123.45,
            thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'
        })
        assert.isNumber(result)
    })

    it('Listar todos los elem del archivo', async () => {
        const result = await ContenedorFileSystem.getAll()
        assert.isArray(result)
    })

    it('Obtener un elem por su id', async () => {
        const result1 = await ContenedorFileSystem.getById(1)
        const result2 = await ContenedorFileSystem.getById('asd')
        assert.isObject(result1)
        assert.isNull(result2)
    })

    it('Eliminar un elem por su id', async () => {
        const result1 = await ContenedorFileSystem.deleteById(1)
        const result2 = await ContenedorFileSystem.deleteById(-75)
        assert.isUndefined(result1)
        assert.isNull(result2)
    })

    it('Eliminar todos los elem del archivo', async () => {
        const result = await ContenedorFileSystem.deleteAll()
        assert.isUndefined(result)
    })

    after(async () => {
        await ContenedorFileSystem.deleteAll()
    })

})
