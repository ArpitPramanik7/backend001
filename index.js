require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/twitter', (req, res) => {
    res.send("arpitpramanik.ar7")
})

app.get('/login', (req, res) => {
    res.send('<h1> please login at google.com </h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h1> logging to youtube.com </h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})