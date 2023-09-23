const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

require('dotenv').config()


const URI = process.env.ATLAS_URI
mongoose.connect(URI)
const connection = mongoose.connection
connection.once('open', () => console.log('Mongodb database connection extablished successfully'))





const productsRouter = require('./routes/products')
app.use('/products', productsRouter)





PORT = 4444
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
