const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const app = express()

const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}))




app.listen(PORT, () => {
    console.log(`Servidor funcionando en puerto: ${PORT}`)
})


