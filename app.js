const express = require('express')

const app = express()

const port = 8000

app.get('/', (req, res) => {
    res.send("Hello world from Alura from Brazil!")
})

app.listen(port, () => {
    console.log(`Listening the Door ${port}`)
})