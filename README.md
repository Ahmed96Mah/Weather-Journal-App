# Weather Journal App Project

## Project Description

**Responsive** Weather Journal Application that accepts the user inputs and uses it to contact the **Open Weather Map API** to retreive the current weather data and the location corresponding to the zipcode entered by the user and then display that data to the user.

### Project's details:

1- Inputs: <br>
    - Country Selection. <br>
    - zipcode. <br>
    - User Feel. <br>

2- Output: <br>
    - Location. <br>
    - Date. <br>
    - Temperature. <br>
    - Wind Speed. <br>
    - Humidity. <br>
    - User Feel. <br>

### Operational Steps:

To test the project, you could use one of the following methods:

1- Using Live Server: <br>
    - This will **ONLY** allow you to test the design and its responsitivity Since the data fetched suppose to be saved 
      in a local server. which is coded using Node.js.

2- Using a local server: <br>
    - This will enable you to test the full design and operational behavior of the application. <br>
    - To be able to use a local server, you should install Node and npm on your local machine. <br>
    - After that, you should install express, body-parser and cors using npm in the project directory. <br>
    - Then, run the command **node server.js** in the **terminal** after you navigate to the project folder. <br>
    - As stated in the server.js file, the port used is **port 8000**. <br>
    - After you run the command in the terminal, open **localhost:8000** in the browser to use the application. <br>

3- Using both at the same time: <br>
    This will allow you to test the application on any device, while the machine on which the code runs will act as the 
    server itself. To acheive this, you need to do the following: <br>
    - First, you need to change the path of both the GET and POST requests inside the app.js file. <br>
    - The path should be changed to 'http://yourIPv4Address:8000/getdata(or /savedata)' on lines 45 & 141 based on the type of the method. <br>
    - Then, when you run the command **node server.js** in the terminal and run the live-server the app.js will be instructed to post and fetch data from the 8000 port which is conntected to our local server.