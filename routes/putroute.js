const express = require('express');
const router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    res.send(`Foo has the value ${req.body.Foo} with a string length of ${req.body.Foo.length}`);
});

module.exports = router;
