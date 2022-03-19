// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('./'));

// Setup Server
// First we define the port
const port = 8000;

// Then the server should start listening at the port defined, and send a staring confirmation message
const server = app.listen(port, InitiateServer);

function InitiateServer(){
    console.log(`Server is running @ port: ${port}`);
}

// Define a GET Route 
app.get('/getdata', function getReq(req, res){
    console.log('GET Request Received..');
    res.send(projectData);
});

// Define a POST Route
app.post('/savedata', function postReq(req, res){
    console.log('POST Request Received..');
    let dataObj = req.body;
    projectData['temp'] = dataObj.temp;
    projectData['feel'] = dataObj.feel;
    projectData['date'] = dataObj.date;
    projectData['loc'] = dataObj.loc;
    projectData['wind'] = dataObj.wind;
    projectData['humid'] = dataObj.humid;
    console.log('POST Request Has been performed..');
    res.send(projectData);// Properly Terminating the POST Request
});