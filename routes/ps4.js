const express = require('express');
const router = express.Router();

const apiID = 'f8e83847';
const apikey = 'abf793dea5efeee55e23c588ffe173a4';
const BostonZIP = 'us.02215';
const appurl = 'http://api.weatherunlocked.com/api/current/';


const build_url = (id, key, zip) => {
    let final_url = appurl+zip+'?app_id='+id+'&app_key=' + key;
    return final_url;
}

const responseUrl = build_url(apiID,apikey,BostonZIP);

/* GET users listing. */
router.get('/get-weather', function(req, res, next) {
    fetch(responseUrl)
        .
    res.send('respond with a resource');
});



module.exports = router;
