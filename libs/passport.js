let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let UserModel = require('./mongoose').UserModel;

module.exports = () => {
    passport.use(new LocalStrategy({}, function (username, password, done) {
        UserModel.findOne({username: username}, function (err, user) {
            return err
                ? done(err)
                : user
                ? password === user.password
                ? done(null, user)
                : done(null, false, {message: 'Incorrect password.'})
                : done(null, false, {message: 'Incorrect username.'});
        });
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });


    passport.deserializeUser((id, done) => {
        UserModel.findById(id, (err, user) => {
            err
                ? done(err)
                : done(null, user);
        });
    });
};