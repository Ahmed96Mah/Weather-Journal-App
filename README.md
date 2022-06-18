# Weather Journal App Project (Fullfillment of Udacity's Professional Nanodegree)

## Project Description

**Responsive** Weather Journal Application that accepts the user inputs and uses it to contact the **Open Weather Map API** to retreive the current weather data and the location corresponding to the zipcode entered by the user. Then, the data is saved in a postgreSQL database, and displayed to the user by fetching that data from the SQL DB. The App can also display previously saved data upon the user's request.

### Project Notes:

The openWeather Map API key has been generated from [openweathermap.org](https://openweathermap.org/) site, where you can subscribe to the **'current weather and forecast'** service with a **free plan**. After that, generate your key and place it in the app.ts file ('line 7'). **After that, make sure to build the Js files again**.

### Project's details:

1- User Inputs: <br> - Country Selection <br> - zipcode <br> - User Feel <br>

2- Output: <br> - Location <br> - Date and Time <br> - Temperature <br> - Wind Speed <br> - Humidity <br> - User Feel <br>

### Operational Steps:

To test the project, you could use one of the following methods:

1- Using Live Server (Extension): <br> - This will **ONLY** allow you to test the **design** and its **responsitivity** Since the app is supposed to run on a local server and have an access to a postgreSQL DB.

2- Using a local server: <br> - This will enable you to test the full design and operational behavior of the application. <br> - To be able to use a local server, you should install Node and npm on your local machine. <br> - After that, you should install the project's dependencies using the command **npm init**. <br> - Then, you should set up your postgreSQL DB and make sure to put the required data in your **.env** file. <br> -After that, you should utilize the docker-compose file provided in the project by running **docker-compose up -d** in your terminal to set up postgres and pgAdmin. <br> - Then, run the command **node server.js** in the **terminal** after you navigate to the project folder. <br> - As stated in the server.js file, the port used is **port 8000**. <br> - After you run the command in the terminal, open **localhost:8000** in the browser to use the application. <br>

### preparing the projects environment variables

There should be a .env file with the following data in your project folder:

- POSTGRES_HOST=(set your ip address) 

- POSTGRES_DB=(name your dev database) 

- POSTGRES_TEST_DB=(name your test database (required if you are going to perform integration tests)) 

- POSTGRES_USER=(name your postgres username)

- POSTGRES_PASSWORD=(set your postgres password)

- PGADMIN_DEFAULT_EMAIL=(set your login email for pgadmain)

- PGADMIN_DEFAULT_PASSWORD=(set your login password for pgadmin) 

- ENV=(should be set to dev, but changed to test if you want to run the **test** script)
