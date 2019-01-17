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
        //Don't push if title is empty
        if (req.body.title != '') {
            postList.push(req.body)
        }

        res.json(postList)
    })

}
