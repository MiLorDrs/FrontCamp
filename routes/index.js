let express = require('express');
let router = express.Router();

router.get('/hello-world', (req, res, next) => {
    res.render('hello-world', {msg: 'Hello World', title: 'Awesome Title!'});
});

module.exports = router;
