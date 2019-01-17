const express = require('express')
const postController = require('./controllers/post')
const createProfileController = require('./controllers/profile')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('./views/'))

postController(app)
createProfileController(app)

app.listen(3000)