const express = require('express')
const usuarios = require('../models/usuario')
const { Op } = require("sequelize");
const usuarioRouter = express.Router() 

usuarioRouter.get('/', (req, res) => {
    usuarios.findAll().then(usuario => {
        res.json(usuario)
    }).catch(e => {
        res.json(e)
    })
})

usuarioRouter.get('/:id', (req, res) => {
    usuarios.findOne({ where: req.params }).then(usuario => {
        res.json(usuario)
    }).catch(e => {
        res.json(e)
    })
})


usuarioRouter.patch('/:id', (req,res) => {
    usuarios.update({ where: req.params }).then(usuario => {
        res.json(usuario)
    }).catch(e => {
        res.json(e)
    })
})

usuarioRouter.delete('/:id', (req,res) => {
    usuarios.destroy({ where: req.params }).then(usuario => {
        res.json(usuario)
    }).catch(e => {
        res.json(e)
    })
})

usuarioRouter.post('/', (req, res) => {
    usuarios.create(req.body).then(usuario => {
        res.json(usuario)
    }).catch(e => {
        res.json(e)
    })
})


module.exports = usuarioRouter;
