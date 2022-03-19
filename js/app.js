/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=efb5fafc3ea73755840316f1ed858c9e&units=imperial';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

// Making sure that the DOM is ready First
document.addEventListener('DOMContentLoaded',init);

// Define the POST Async function
const postData = async (url='', data={}) =>{
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    try{
        let newData = await response.json();
        return newData;
    }catch(error){
        console.log('error', error);
    }
};

// Define the GET Async function that is assigned to retreive the weather info
const getApiData = async (url, zip, country, key) =>{
    //call the Open Weather Map API
    const request = await fetch(url+zip+country+key);
    try{
        let apiData = await request.json();
        return apiData;
    }catch(error){
        console.log('error', error);
    }
};

// Defining the update UI function 
const getAndUpdate = async () =>{
    const request = await fetch('/getdata');

    try{
        const retreivedData = await request.json();
        document.getElementById('cityLoc').textContent = `Location: ${retreivedData.loc}`;
        document.getElementById('date').textContent = `Date: ${retreivedData.date}`;
        document.getElementById('temp').textContent = `Temperature: ${retreivedData.temp} °F`;
        document.getElementById('windSpeed').textContent = `Wind Speed: ${retreivedData.wind}`;
        document.getElementById('humidity').textContent = `Humidity: ${retreivedData.humid}%`;
        document.getElementById('content').textContent = `Your Feeling: ${retreivedData.feel}`;
    }catch(error){
        console.log('error', error);
    }
};

// Add the animation to the icons and display div
const displayAnimation = () => {
    const display = document.querySelector('.display');
    const divList = display.querySelectorAll('div');
    
    if (!divList[0].querySelector('i').classList.contains('fa-beat-fade')){
        for (const div of divList){
            div.querySelector('i').classList.toggle('fa-beat-fade');
        }
        // Wait for data to be fetched by the API before continuing with the animation
        if (display.classList.contains('felx-row')) {
            // Set a reasonable time FOR the first iteration
            setTimeout(displayAnimation, 5000);
        }else {
            // Set a lower delay AFTER the 1st iteration
            setTimeout(displayAnimation, 1000);
        }
        
    }else {
        for (const div of divList){
            div.querySelector('i').classList.toggle('fa-beat-fade');
        }
        // Determine if this is the 1st iteration of the application
        if (display.classList.contains('felx-row')) {
            extndDisplay();
        }
    }
}

// Extend the display data div
const extndDisplay = () => {
    const display = document.querySelector('.display');
    if (!display.classList.contains('extend')) {
        display.classList.toggle('extend');
        setTimeout(extndDisplay, 2000);
    }else {
        display.classList.toggle('extend');
        ChangeLayout();
    }
}

// Change the layout of the display div from flex-row to flex-column (inherted)
const ChangeLayout = () => {
    const display = document.querySelector('.display');
    const divList = display.querySelectorAll('div');
    
    if (!divList[0].classList.contains('hide')) {
        for (const div of divList){
            div.classList.toggle('hide');
        }
        setTimeout(ChangeLayout,0);
    }else {
        display.classList.toggle('felx-row');
        for (const div of divList){
            div.querySelector('p').classList.toggle('hide');
            div.classList.toggle('hide');
            div.classList.toggle('limitWidth');
        }
    }
}

// Define the main function that runs after the DOM has successfuly loaded
function init(){
    // Adding a click event listener for the button.
    document.getElementById('generate').addEventListener('click', processClick);
    const socialIcons = document.querySelectorAll('i.fa-brands');

    for(let icon of socialIcons){
        icon.addEventListener('mouseenter', socialAnimation);
        icon.addEventListener('mouseleave', socialAnimation);
    }
    // Defining The listener Callback
    function processClick(){
        displayAnimation();
        // First, collect user's zipcode, feeling & country selection
        const zipCode = document.getElementById('zipcode').value;
        const userFeel = document.getElementById('feelings').value;
        const userSelec = document.getElementById('country').value;
        // Prepare the country string that will be added to the url
        const country = `,${userSelec}`;
        // make sure that the user has already entered the country & zipcode selections, then proceed.
        if ((zipCode !== '') && (country !== ',')){
            getApiData(baseURL, zipCode, country, apiKey)
            .then(function(data){
                let savedObj = postData('/savedata',
                {temp:data['main'].temp, feel:userFeel, date:newDate, loc:data['name'], humid:data['main'].humidity, 
                 wind:data['wind'].speed});
                return savedObj; // Call getAndUpdate function after the POST request is successfuly performed.
                // The Status is known by the returning the Project's Data object that has been saved on the server
            })
            .then(function(){
                /* There isn't an instance of 'data' here because 'getAndUpdate()' doesen't need it, as it already has a 
                *  defined GET route declared inside of it that retreive the data object from the server.
                */
                getAndUpdate();
            })
        }
    }

    function socialAnimation (evt){
        if((evt.target.nodeName === 'I') && evt.target.classList.contains('fa-brands')){
            evt.target.classList.toggle('fa-beat-fade');
            evt.target.classList.toggle('fa-style');
        }
    }

}