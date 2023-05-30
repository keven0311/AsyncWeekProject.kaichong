const express = require('express')
const path = require('path')
const volleyball = require('volleyball')
const app = express()

app.use(express.static(path.join(__dirname,'..','public')))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',require('./api'))

app.use(volleyball)

app.use('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'))   
})

module.exports = app