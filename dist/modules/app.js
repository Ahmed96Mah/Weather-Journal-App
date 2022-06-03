import { getApiData } from './call.js';
import { getAndUpdate } from './update.js';
import { displayAnimation } from './animation.js';
/* API URL */
export const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
export const apiKey = `&appid=<Your-API-Key-Goes-HERE>&units=imperial`;
// Define the POST Async function
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const savedData = await response.json();
        if (savedData !== {}) {
            console.log(savedData);
        }
    }
    catch (err) {
        throw new Error(`Error: ${err}`);
    }
};
// Define the main function that runs after the DOM has successfuly loaded
const init = () => {
    // Defining The social animation listener Callback
    const socialAnimation = (evt) => {
        if (evt.target.nodeName === 'I' &&
            evt.target.classList.contains('fa-brands')) {
            evt.target.classList.toggle('fa-beat-fade');
            evt.target.classList.toggle('fa-style');
        }
    };
    // Defining The listener Callback
    const processClick = () => {
        // Create a new date instance dynamically with JS
        const d = new Date();
        const newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();
        displayAnimation();
        // First, collect user's zipcode, feeling & country selection
        const zipCode = document.getElementById('zipcode')
            .value;
        const userFeel = document.getElementById('feelings')
            .value;
        const userSelec = document.getElementById('country')
            .value;
        // Prepare the country string that will be added to the url
        const country = `,${userSelec}`;
        // make sure that the user has already entered the country & zipcode selections, then proceed.
        if (zipCode !== '' && country !== ',') {
            getApiData(baseURL, zipCode, country, apiKey)
                .then((data) => {
                postData('/savedata', {
                    //@ts-ignore
                    temp: data['main'].temp,
                    feel: userFeel,
                    date: newDate,
                    loc: data['name'],
                    humid: data['main'].humidity,
                    wind: data['wind'].speed,
                });
            })
                .then(() => {
                /* There isn't an instance of 'data' here because 'getAndUpdate()' doesen't need it, as it already has a
                 *  defined GET route declared inside of it that retreive the data object from the server.
                 */
                setTimeout(() => {
                    getAndUpdate();
                }, 3500);
            });
        }
    };
    // Adding a click event listener for the button.
    document.getElementById('generate').addEventListener('click', processClick);
    const socialIcons = document.querySelectorAll('i.fa-brands');
    for (const icon of socialIcons) {
        icon.addEventListener('mouseenter', socialAnimation);
        icon.addEventListener('mouseleave', socialAnimation);
    }
};
// Making sure that the DOM is ready First
document.addEventListener('DOMContentLoaded', init);
