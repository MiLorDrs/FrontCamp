let express = require('express');
let router = express.Router();
let NewsModel = require('../libs/mongoose').NewsModel;

router.get('/', (req, res, next) => {
    NewsModel.find((err, articles) => {
        if (!err) {
            res.render('articles', {articles: articles});
        } else {
            res.statusCode = 500;
            return res.send({error: 'Server error'});
        }
    });
});

router.get('/register', (req, res, next) => {
    res.render('register');
});

router.get('/login', (req, res, next) => {
    res.render('login');
});

router.get('/user-view', (req, res, next) => {
    NewsModel.find((err, articles) => {
        if (!err) {
            res.render('user-view', {articles: articles, username: req.user.username});
        } else {
            res.statusCode = 500;
            return res.send({error: 'Server error'});
        }
    });
});

module.exports = router;
