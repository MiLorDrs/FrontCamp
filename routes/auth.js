let express = require('express');
let router = express.Router();
let passport = require('passport');

let UserModel = require('../libs/mongoose').UserModel;

router.post('/login', (req, res, next) => {
    passport.authenticate('local',
        (err, user, info) => {
            return err
                ? next(err)
                : user
                ? req.logIn(user, (err) => {
                return err
                    ? next(err)
                    : res.redirect('/admin');
            })
                : res.redirect('/');
        }
    )(req, res, next);

});

router.post('/register', (req, res, next) => {
    let user = new UserModel({username: req.body.username, password: req.body.password});
    user.save((err) => {
        return err
            ? next(err)
            : req.logIn(user, (err) => {
            return err
                ? next(err)
                : res.redirect('/admin');
        });
    });
});

router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;
