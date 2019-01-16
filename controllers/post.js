const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({extended: false})

var postList = [
    {
        title: 'Test Title',
        description: 'Test description.',
        pin: 'false'
    }
]

module.exports = function (app) {

    app.get('/post', (req, res) => {
        res.render('post', {posts: postList})
    })

    app.post('/post', urlencodedParser, (req, res) => {
        postList.push(req.body)
        res.json(postList)
    })

}