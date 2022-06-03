# Weather Journal App Project (Fullfillment of Udacity's Professional Nanodegree)

## Project Description

**Responsive** Weather Journal Application that accepts the user inputs and uses it to contact the **Open Weather Map API** to retreive the current weather data and the location corresponding to the zipcode entered by the user and then display that data to the user.

### Project Notes:

**Important Note** The openWeather Map API key included in the porject has been deactivated. So, to be able to use the
application you have to create an account on the 'openweathermap.org' site. <br>
Then, subscribe to the **'current weather and forecast'** service with a **free plan**. After that, generate your key and replace the deactivated key (located in the app.js 'line3') with yours.

### Project's details:

1- Inputs: <br> - Country Selection. <br> - zipcode. <br> - User Feel. <br>

2- Output: <br> - Location. <br> - Date. <br> - Temperature. <br> - Wind Speed. <br> - Humidity. <br> - User Feel. <br>

### Operational Steps:

To test the project, you could use one of the following methods:

1- Using Live Server (Extension): <br> - This will **ONLY** allow you to test the design and its responsitivity Since the data fetched suppose to be saved in a local server. which is coded using Node.js.

2- Using a local server: <br> - This will enable you to test the full design and operational behavior of the application. <br> - To be able to use a local server, you should install Node and npm on your local machine. <br> - After that, you should install express, body-parser and cors using npm in the project directory. <br> - Then, run the command **node server.js** in the **terminal** after you navigate to the project folder. <br> - As stated in the server.js file, the port used is **port 8000**. <br> - After you run the command in the terminal, open **localhost:8000** in the browser to use the application. <br>
