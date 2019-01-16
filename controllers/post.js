const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({extended: false})

var postList = [
    {
        title: 'Title 1',
        description: 'Description 1.',
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