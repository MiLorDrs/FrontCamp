let express = require('express');
let router = express.Router();
let NewsModel = require('../libs/mongoose').NewsModel;

router.post('/add', (req, res, next) => {
    console.log(req.body.title);
    let news = new NewsModel({
        title: req.body.title,
        text: req.body.description,
        author: req.body.author,
        img: req.body.img
    });
    news.save((err, news) => {
        if (!err) {
            res.redirect('/user-view');
        } else {
            res.statusCode = 500;
            return res.send({error: 'Server error'});
        }
    });

});

router.post('/del', (req, res, next) => {
    console.log(req.body.id);
    NewsModel.remove({_id: req.body.id}, (err) => {
        if (!err) {
            res.redirect('/user-view');
        }
        else {
            res.statusCode = 500;
            return res.send({error: 'Server error'});
        }
    });

});

module.exports = router;
