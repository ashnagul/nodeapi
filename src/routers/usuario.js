const express = require('express')
const usuarios = require('../models/usuario')
const { Op } = require("sequelize");
const usuarioRouter = express.Router() 

usuarioRouter.get('/', (req, res) => {
    usuarios.findAll().then(usuario => {
        res.json(usuario)
    })
})

usuarioRouter.get('/:id', (req, res) => {
    usuarios.findOne({ where: req.params }).then(usuario => {
        res.json(usuario)
    }).catch(error => res.json(error))
})


usuarioRouter.patch('/:id', (req,res) => {
    usuarios.update({ where: req.params }).then(usuario => {
        res.json(usuario)
    })
})

usuarioRouter.delete('/:id', (req,res) => {
    usuarios.destroy({ where: req.params }).then(usuario => {
        res.json(usuario)
    })
})

usuarioRouter.post('/', (req, res) => {
    if(req.body.username){
        usuarios.findOne({ where: { [Op.or] : [{username: req.body.username},{email: req.body.email}]}}).then(usuario =>{
            const usuarioEncontrado = usuario
            if(usuarioEncontrado === null){
                usuarios.create(req.body)
                res.send({ Status: "Success" })
            } else {
                res.send({ Status: "Ya existe usuario o email"})
            }
        })
    } else {
        res.send({ Status: "Input no tiene formato requerido" })
    }
})


module.exports = usuarioRouter;
