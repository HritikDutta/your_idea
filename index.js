const express = require('express')
const postController = require('./controllers/post')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('./views/'))

app.post('/post', urlencodedParser, (req, res) => {
    console.log(req.body)
})

app.listen(3000)