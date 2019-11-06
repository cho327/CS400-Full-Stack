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
console.log('This is the URL we are using Get to : ' + responseUrl);

/* GET users listing. */
router.get('/get-weather', function(req, res, next) {
    const request = require("request");

    const options = { method: 'GET',
        url: 'http://api.weatherunlocked.com/api/current/us.02215',
        qs:
            { app_id: 'f8e83847',
                app_key: 'abf793dea5efeee55e23c588ffe173a4' },
        headers:
            { 'cache-control': 'no-cache',
                Connection: 'keep-alive',
                'Accept-Encoding': 'gzip, deflate',
                Host: 'api.weatherunlocked.com',
                'Postman-Token': 'd5030d25-8b68-4943-8ff1-497a6eaaa384,96fb1875-be2d-42a2-9071-37fc375c6730',
                'Cache-Control': 'no-cache',
                Accept: '*/*',
                'User-Agent': 'PostmanRuntime/7.19.0' } };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        res.send(body);
    });
});

module.exports = router;
