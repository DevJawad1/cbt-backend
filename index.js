const express = require('express')
const app = express()
const env = require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter=require("./Routers/user.router")
PORT = process.env.PORT
URI = process.env.URI
// let url= "mongodb+srv://codist:devjawad52923@cluster0.fbows12.mongodb.net/Gomal_db?retryWrites=true&w=majority"
mongoose.connect(URI).then(() => {
    console.log('CBT connected to database');
    // console.log(URI);
}).catch((err) => {
    console.log('cant connect to dabase ', err);
})

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json({ limit: '10mb' }))
app.use('/user', userRouter)

app.listen(PORT, (req, res) => {
    console.log(PORT);
})