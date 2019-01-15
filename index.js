const express = require('express')
const path = require('path')

const app = express()

app.get('/post', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/Post.html'))
})

app.listen(3000)