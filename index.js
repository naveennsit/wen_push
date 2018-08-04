var express = require('express'),
    webPush = require('web-push'),
    path = require('path'),
    bodyParser = require('body-parser');


var app = express();
// set static path

app.use(express.static(path.join(__dirname ,'client')));
app.use(bodyParser.json());

var publicVapidKey = "BDiSRpSSGIRHHq7i29GdGG1Rnr2G190E__H_-xQbFl-DmhEUVCXhmrHfLJpJmFAR1qGGwM3lbKEcvSuTTmTNGPY";
var privateVapidKey = "0N8e4IQpw2-FLtRLEhSLfiZFR4DELFOGNfBTGindIqU";

webPush.setVapidDetails('mailto:test@gmail.com', publicVapidKey, privateVapidKey);

app.post('/subscribe', (req, res) => {
    //get subscription object
    const subscription = req.body;

    // send response
    res.status(201).json({});

    // create payload
    const payload = JSON.stringify({title: 'push test'});
    webPush.sendNotification(subscription , payload).catch((err)=> console.error(err))
})

const  port = 3000;

app.listen(port ,()=>{
    console.log(`server is running ${port}`);
})
