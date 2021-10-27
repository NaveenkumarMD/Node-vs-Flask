const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 7000
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{
    console.log("Connected to mongodb successfully")
})
mongoose.connection.on('error',(err)=>{
    console.log("An error occured :",err)
})
require('./Models/index')
app.use(require('./Routers/index'))

app.listen(PORT, () => {
    console.log("App is running successfully at ", PORT)
})