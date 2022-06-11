// Require Express to run server and routes
import express from 'express';
import bodyParser from 'body-parser';
// Cors for cross origin allowance
import cors from 'cors';
import { weatherRoutes } from './handlers/weather.js';
import { dashboardRoutes } from './handlers/dashboards.js';
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// Initialize the main project folder
app.use(express.static('./'));
weatherRoutes(app);
dashboardRoutes(app);
// Setup Server
// First, we define the port
const port = 8000;
// Then the server should start listening at the port defined, and send a staring confirmation message
const server = app.listen(port, () => {
    console.log(`Server is running @ port: ${port}`);
});
