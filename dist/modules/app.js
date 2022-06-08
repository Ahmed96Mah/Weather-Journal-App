import { getApiData } from './call.js';
import { getAndUpdate } from './update.js';
/* API URL */
export const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
export const apiKey = `&appid=<Your-API-Key-Goes-Here>&units=imperial`;
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
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};
const setDate_Time = () => {
  const time_parag = document.getElementById('time');
  const date_parag = document.getElementById('date');
  // Create a new date instance dynamically with JS
  const date = new Date();
  const dateStr = date.toString();
  const time = `${dateStr.slice(16, 21)}`;
  const fullDate = `${dateStr.slice(0, 3)}, ${dateStr.slice(
    4,
    7
  )} ${dateStr.slice(8, 10)}, ${dateStr.slice(11, 15)}`;
  date_parag.textContent = fullDate;
  time_parag.textContent = time;
  setInterval(setDate_Time, 60000);
};
// Define the main function that runs after the DOM has successfuly loaded
const init = () => {
  // Defining The social animation listener Callback
  const socialAnimation = (evt) => {
    if (
      evt.target.nodeName === 'I' &&
      evt.target.classList.contains('fa-brands')
    ) {
      evt.target.classList.toggle('fa-beat-fade');
      evt.target.classList.toggle('fa-style');
    }
  };
  // Set date and time for the current page
  setDate_Time();
  // Defining The listener Callback
  const processClick = () => {
    // First, collect user's zipcode, feeling & country selection
    const zipCode = document.getElementById('zipcode').value;
    const userFeel = document.getElementById('feelings').value;
    const userSelec = document.getElementById('country').value;
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
            loc: data['name'],
            humid: data['main'].humidity,
            wind: data['wind'].speed,
          });
        })
        .then(() => {
          /* There isn't an instance of 'data' here because 'getAndUpdate()' doesen't need it, as it already has a
           *  defined GET route declared inside of it that retreive the data object from the server.
           */
          getAndUpdate();
        });
    } else {
      alert('Please make sure to select a country & Enter a zipcode!');
    }
  };
  // Adding a click event listener for the button.
  document.getElementById('generate').addEventListener('click', processClick);
  // Adding Mouse-Related events for social icons
  const socialIcons = document.querySelectorAll('i.fa-brands');
  for (const icon of socialIcons) {
    icon.addEventListener('mouseenter', socialAnimation);
    icon.addEventListener('mouseleave', socialAnimation);
  }
};
// Making sure that the DOM is ready First
document.addEventListener('DOMContentLoaded', init);
