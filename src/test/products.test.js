const { URL_PROTOCOL, URL_DOMAIN, PORT } = require('../config/config')
const request = require('supertest')(`${URL_PROTOCOL}${URL_DOMAIN}:${PORT}`)
const expect = require('chai').expect
const fs = require('fs')


describe('TEST APIRestFul', () => {
    describe('GET /productos', () => {
        it('return status 200', async () => {
            const response = await request.get('/productos')
            expect(response.status).to.eql(200)
        })
        it('debe retornar un array', async () => {
            const response = await request.get('/productos')
            expect(response.body).to.be.an('array')
        })
    })
    describe('GET /productosRandom', () => {
        it('return status 200', async () => {
            const response = await request.get('/productosRandom')
            expect(response.status).to.eql(200)
        })
        it('return un producto aleatorio del array', async () => {
            const contentFile = JSON.parse(fs.readFileSync('src/productos.txt'))
            const response = await request.get('/productosRandom')
            expect(response.body).to.be.an('object')
            expect(contentFile).to.be.an('array').to.deep.include(response.body)
        })
    })
})