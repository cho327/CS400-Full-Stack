const express = require('express');
const router = express.Router();

/* GET home page. */
router.put('/', function(req, res, next) {
    res.render('index', { title: 'Put me in Coach' });
});

module.exports = router;
