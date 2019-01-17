const express = require('express')
const postController = require('./controllers/post')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('./views/'))

postController(app)

app.listen(3000)
