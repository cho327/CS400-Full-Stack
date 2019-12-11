const express = require('express');
const router = express.Router();
const db = require('../mongo/mongo');
// const MongoClient = require('mongodb').MongoClient;
db.connect();

/* GET users listing. */
router.get('/get-weather', function(req, res, next) {

    const DBobj = db.getDB();
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
            //use datab

            DBobj.collection('weather').find().toArray(function (err, result) {
                if (err) throw err;
                console.log(result)
            })
            // if the find returns something, then skip this...

            DBobj.collection('weather').insertOne(body,function (err,res){
                if(err) throw error;
                console.log('inserted weather');
            })
        });

        /*db.collection('weather').insertOne(body,function (err,res)){
            if(err) throw error;
            console.log('inserted weather');
        }*/

        res.send(body);
    })


module.exports = router;
