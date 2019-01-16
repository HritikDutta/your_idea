const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({extended: false})

module.exports = function (app) {

    app.get('/post', (req, res) => {
        res.render('post')
    })

}