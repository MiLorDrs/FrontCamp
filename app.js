let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let passport = require('passport');
let passportProcess = require('./libs/passport');
let expressSession = require('express-session');

let api = require('./routes/api');
let auth = require('./routes/auth');

let app = express();

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressSession({
    secret: 'SECRET_KEY'
}));

// Passport:
app.use(passport.initialize());
app.use(passport.session());

app.all(['/admin', '/admin/*'], (req, res, next) => {
    req.isAuthenticated()
        ? next()
        : res.redirect('/');
});

app.use('/api', api);
app.use('/auth', auth);

app.get('/*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.json({error: res.locals.message});
});

passportProcess();

module.exports = app;
