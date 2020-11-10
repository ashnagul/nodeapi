const express = require('express')
const path = require('path')
const usuarios = require('./models/usuario')
const productoRouter = require('./routers/producto')
const usuarioRouter = require('./routers/usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const app = express()
const port = process.env.PORT || 3000

require('dotenv').config()

console.log(process.env.TOKEN_SECRET)
app.use(express.static(path.join(__dirname,'../public')))
app.use(express.json())
app.use('/producto', productoRouter)
app.use('/usuario', usuarioRouter)


app.get('/login', (req, res) => {
    if(req.body.userName !== undefined){
        usuarios.findOne({ where: { userName: req.body.userName } }).then(async (usuario) => {
            if(usuario === null){
                res.json({ Status: "No existe usuario" })
            } else {
                const valid = await bcrypt.compare(req.body.password, usuario.password)
                if(valid){
                    res.json({ token: jwt.sign({ id: usuario.id }, process.env.TOKEN_SECRET, { expiresIn: 60 * 60 })})
                } else {
                    res.json({ Status: "Password Error" })
                }
            }
        }).catch(e => {
        res.json(e)
        })
    } else {
        res.status(404).json({ Status: "Input sin userName" })
    }
})


app.get('*', (req,res) => {
    res.status(404).send("Not Found")
})


app.listen(port, () => {
    console.log("listening port " + port)
})
