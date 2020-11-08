const express = require('express')
const productos = require('../models/producto')
const productoRouter = express.Router() 

productoRouter.get('/', (req, res) => {
    productos.findAll().then(producto => {
        res.json(producto)
    })
})

productoRouter.get('/:id', (req, res) => {
    productos.findOne({ where: req.params }).then(producto => {
        res.json(producto)
    }).catch(error => res.json(error))
})


productoRouter.patch('/:id', (req,res) => {
    productos.update({ where: req.params }).then(producto => {
        res.json(producto)
    })
})

productoRouter.delete('/:id', (req,res) => {
    productos.destroy({ where: req.params }).then(producto => {
        res.json(producto)
    })
})

productoRouter.post('/', (req, res) => {
    if(req.body.nombreProducto){
        productos.create(req.body)
        res.send({ Status: "Success" })
    } else {
        res.send({ Status: "Error" })
    }
})

module.exports = productoRouter;
