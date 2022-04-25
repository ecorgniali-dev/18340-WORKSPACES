const app = require('../app')
const request = require('supertest')
const productsRouterUrl = '/api/productos'
const expect = require('chai').expect
const productscontroller = require('../controllers/products.controller')


describe('TEST APIRestFul', () => {

    const productCaseTest = {
        title: 'Product test case',
        price: 999,
        thumbnail: 'http://imagetest.com'
    }

    const responseProductNotFound = { error: 'Producto no encontrado' }

    before(() => {
        productscontroller.save(productCaseTest)
    })

    describe('GET', () => {
        it('/api/productos', async () => {
            const response = await request(app).get(productsRouterUrl)
            expect(response.body).to.be.an('array')
                .to.deep.include({ id: 1, ...productCaseTest })
        })
        it('/api/productos/:id', async () => {
            const idCase = 1
            const response = await request(app).get(`${productsRouterUrl}/${idCase}`)
            expect(response.body).to.be.an('object')
        })
        it('/api/productos/:id (product not exist)', async () => {
            const idCase = null
            const response = await request(app).get(`${productsRouterUrl}/${idCase}`)
            expect(response.body).to.be.an('object')
                .to.deep.equal(responseProductNotFound)
        })
    })

    describe('POST', () => {
        it('/api/productos', async () => {
            const response = await request(app)
                .post(productsRouterUrl)
                .send(productCaseTest)
            expect(response.body).to.be.an('object')
        })
    })

    describe('PUT', () => {
        it('/api/productos/:id', async () => {
            const idCase = 1
            const newDataProduct = {
                title: 'New Product test case',
                price: 11111,
                thumbnail: 'http://imagetest.com (updated)'
            }
            const response = await request(app)
                .put(`${productsRouterUrl}/${idCase}`)
                .send(newDataProduct)
            expect(response.body).to.be.an('object')
                .to.deep.equal({ id: idCase, ...newDataProduct })
        })
        it('/api/productos/:id (product not exist)', async () => {
            const idCase = null
            const newDataProduct = {
                title: 'New Product test case',
                price: 11111,
                thumbnail: 'http://imagetest.com (updated)'
            }
            const response = await request(app)
                .put(`${productsRouterUrl}/${idCase}`)
                .send(newDataProduct)
            expect(response.body).to.be.an('object')
                .to.deep.equal(responseProductNotFound)
        })
    })

    describe('DELETE', () => {
        it('/api/productos/:id', async () => {
            const idCase = 1
            const response = await request(app)
                .delete(`${productsRouterUrl}/${idCase}`)
            expect(response.body).to.be.eql(idCase)
        })
    })

})