const express = require('express')
const productos = require('../models/producto')
const productoRouter = express.Router() 
const auth = require('../auth/auth')


productoRouter.get('/', auth, (req, res) => {
    productos.findAll().then(producto => {
        res.json(producto)
    }).catch(e => {
        res.json(e)
    })
})


productoRouter.get('/:id', (req, res) => {
    productos.findOne({ where: req.params }).then(producto => {
        res.json(producto)
    }).catch(e => {
        res.json(error)
    })
})


productoRouter.patch('/:id', (req,res) => {
    productos.update({ where: req.params }).then(producto => {
        res.json(producto)
    }).catch(e => {
        res.json(e)
    })
})


productoRouter.delete('/:id', (req,res) => {
    productos.destroy({ where: req.params }).then(producto => {
        res.json(producto)
    }).catch(e => {
        res.json(e)
    })
})


productoRouter.post('/', (req, res) => {
    productos.create(req.body).then(producto => {
        res.json(producto)
    }).catch(e => {
        res.json(e)
    })
})


module.exports = productoRouter;
