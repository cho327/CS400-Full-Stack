const express = require('express');
const router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    const foo = req.body.Foo;
    res.render('Foo', { title:foo});
    res.render(`Length`, {title: Foo.length});
});

module.exports = router;

/*
this is comment
 */