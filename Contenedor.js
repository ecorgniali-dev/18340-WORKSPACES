const { promises: fs } = require('fs')

class ContenedorFileSystem {

    constructor(fileName) {
        this.fileName = fileName
    }

    async save(data) {
        try {
            const fileContent = await this.getAll()
            data.id = fileContent.length == 0 ? 1 : fileContent[fileContent.length - 1].id + 1
            fileContent.push(data)
            await fs.writeFile(this.fileName, JSON.stringify(fileContent, null, 2))
            return data.id
        } catch (error) {
            return error
        }
    }

    async getAll() {
        try {
            const fileContent = await fs.readFile(this.fileName, 'utf-8')
            const fileContentParsed = JSON.parse(fileContent)
            return fileContentParsed
        } catch (error) {
            return error 
        }
    }

    async getById(id) {
        try {
            const fileContent = await this.getAll()
            const searchedItem = fileContent.find(item => item.id === id)
            if (searchedItem) return searchedItem
            return null
        } catch (error) {
            return error
        }
    }

    async deleteById(id) {
        try {
            const fileContent = await this.getAll()
            const indexToDelete = fileContent.findIndex(item => item.id === id)
            if (indexToDelete === -1) return null
            fileContent.splice(indexToDelete, 1)
            await fs.writeFile(this.fileName, JSON.stringify(fileContent, null, 2))
            return
        } catch (error) {
            return error
        }
    }

    async deleteAll() {
        try {
            await fs.writeFile(this.fileName, JSON.stringify([], null, 2))
            return
        } catch (error) {
            return error
        }
    }

}

module.exports = new ContenedorFileSystem('productos.txt');