let express = require('express');
let router = express.Router();
let NewsModel = require('../libs/mongoose').NewsModel;


router.get('/articles', (req, res, next) => {
    NewsModel.find((err, articles) => {
        if (!err) {
            res.json(articles);
        } else {
            res.statusCode = 500;
            return res.send({error: 'Server error'});
        }
    });
});

router.get('/articles/:id', (req, res, next) => {
    NewsModel.findOne({_id: req.params.id}, (err, article) => {
        if (!err) {
            return res.json(article);
        } else {
            res.statusCode = 500;
            return res.json({
                error: `Server error. ${err}`
            });
        }
    });
});

router.post('/articles', (req, res, next) => {
    let news = new NewsModel({
        title: req.body.title,
        text: req.body.text,
        author: req.body.author,
        img: req.body.img
    });
    news.save((err, article) => {
        if (!err) {
            return res.json(article);
        } else {
            res.statusCode = 500;
            return res.json({
                error: `Server error. ${err}`
            });
        }
    });
});

router.put('/articles/:id', (req, res, next) => {
    let news = {
        title: req.body.title,
        text: req.body.text,
        author: req.body.author,
        img: req.body.img
    };

    NewsModel.update({_id: req.params.id}, news, {}, (err, article) => {
        if (!err) {
            return res.json(article);
        } else {
            res.statusCode = 500;
            return res.json({
                error: `Server error. ${err}`
            });
        }
    });
});

router.delete('/articles/:id', (req, res, next) => {
    NewsModel.remove({_id: req.params.id}, (err, article) => {
        if (!err) {
            return res.json(article);
        } else {
            res.statusCode = 500;
            return res.json({
                error: `Server error. ${err}`
            });
        }
    });

});

module.exports = router;
