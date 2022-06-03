// Require Express to run server and routes
import express from 'express';
import bodyParser from 'body-parser';
// Cors for cross origin allowance
import cors from 'cors';
// Setup empty JS object to act as endpoint for all routes
const projectData = {
    temp: '',
    feel: '',
    date: '',
    loc: '',
    wind: '',
    humid: '',
};
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// Initialize the main project folder
app.use(express.static('./'));
// Setup Server
// First we define the port
const port = 8000;
// Then the server should start listening at the port defined, and send a staring confirmation message
const server = app.listen(port, InitiateServer);
function InitiateServer() {
    console.log(`Server is running @ port: ${port}`);
}
// Define a GET Route
app.get('/getdata', function getReq(_req, res) {
    console.log('GET Request Received..');
    res.send(projectData);
});
// Define a POST Route
app.post('/savedata', function postReq(req, res) {
    console.log('POST Request Received..');
    const dataObj = req.body;
    projectData['temp'] = dataObj.temp;
    projectData['feel'] = dataObj.feel;
    projectData['date'] = dataObj.date;
    projectData['loc'] = dataObj.loc;
    projectData['wind'] = dataObj.wind;
    projectData['humid'] = dataObj.humid;
    console.log('POST Request Has been performed..');
    res.send(projectData); // Properly Terminating the POST Request
});
