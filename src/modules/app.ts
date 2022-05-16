import { getApiData } from './call.js';
import { getAndUpdate } from './update.js';
import { displayAnimation } from './animation.js';

/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = `&appid=66b54eb14f7a27fafbb9773c230b063c&units=imperial`;

// Define the POST Async function
const postData = async (url: string = '', data: object = {}): Promise<void> => {
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

// Define the main function that runs after the DOM has successfuly loaded
const init = (): void => {
  // Defining The social animation listener Callback
  const socialAnimation = (evt: Event) => {
    if (
      (evt.target! as HTMLLIElement).nodeName === 'I' &&
      (evt.target! as HTMLLIElement).classList.contains('fa-brands')
    ) {
      (evt.target! as HTMLLIElement).classList.toggle('fa-beat-fade');
      (evt.target! as HTMLLIElement).classList.toggle('fa-style');
    }
  };

  // Defining The listener Callback
  const processClick = () => {
    // Create a new date instance dynamically with JS
    const d: Date = new Date();
    const newDate: string =
      d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

    displayAnimation();
    // First, collect user's zipcode, feeling & country selection
    const zipCode = (document.getElementById('zipcode')! as HTMLInputElement)
      .value;
    const userFeel = (document.getElementById('feelings')! as HTMLInputElement)
      .value;
    const userSelec = (document.getElementById('country')! as HTMLInputElement)
      .value;
    // Prepare the country string that will be added to the url
    const country = `,${userSelec}`;
    // make sure that the user has already entered the country & zipcode selections, then proceed.
    if (zipCode !== '' && country !== ',') {
      getApiData(baseURL, zipCode, country, apiKey)
        .then((data: object) => {
          postData('/savedata', {
            //@ts-ignore
            temp: data['main'].temp,
            feel: userFeel,
            date: newDate, //@ts-ignore
            loc: data['name'], //@ts-ignore
            humid: data['main'].humidity, //@ts-ignore
            wind: data['wind'].speed,
          });
        })
        .then(() => {
          /* There isn't an instance of 'data' here because 'getAndUpdate()' doesen't need it, as it already has a
           *  defined GET route declared inside of it that retreive the data object from the server.
           */
          getAndUpdate();
        });
    }
  };

  // Adding a click event listener for the button.
  document.getElementById('generate')!.addEventListener('click', processClick);
  const socialIcons = document.querySelectorAll('i.fa-brands');

  for (const icon of socialIcons) {
    icon.addEventListener('mouseenter', socialAnimation);
    icon.addEventListener('mouseleave', socialAnimation);
  }
};

// Making sure that the DOM is ready First
document.addEventListener('DOMContentLoaded', init);
