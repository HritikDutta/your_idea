const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({extended: false})

module.exports = function(app) {

    app.get('/profile', (req, res) => {
        res.render('profile')
    })

    app.post('/profile', urlencodedParser, (req, res) => {
        console.log(req.body)
    })
    
}