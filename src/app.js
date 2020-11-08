const express = require('express')
const path = require('path')
const productoRouter = require('./routers/producto')
const usuarioRouter = require('./routers/usuario')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname,'../public')))
app.use(express.json())
app.use('/producto', productoRouter)
app.use('/usuario', usuarioRouter)


app.get('*', (req,res) => {
    res.status(404).send("Not Found")
})

app.listen(port, () => {
    console.log("listening port " + port)
})
