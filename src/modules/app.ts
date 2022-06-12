import { getApiData } from './call.js';
import { getAndUpdate } from './update.js';
import { listHistory } from './list.js';

/* API URL */
export const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
export const apiKey = `&appid=<Your-API-Keys-Goes-Here>&units=imperial`;

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
    await response.json();
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};

const setDate_Time = (): void => {
  const time_parag = document.getElementById('time')!;
  const date_parag = document.getElementById('date')!;
  // Create a new date instance dynamically with JS
  const date: Date = new Date();
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
const init = (): void => {
  // Defining The social animation listener Callback
  const socialAnimation = (evt: Event): void => {
    if (
      (evt.target! as HTMLLIElement).nodeName === 'I' &&
      (evt.target! as HTMLLIElement).classList.contains('fa-brands')
    ) {
      (evt.target! as HTMLLIElement).classList.toggle('fa-beat-fade');
      (evt.target! as HTMLLIElement).classList.toggle('fa-style');
    }
  };

  // Set date and time for the current page
  setDate_Time();

  // Defining The listener Callback
  const processClick = (): void => {
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
      getApiData(baseURL, zipCode, country, apiKey).then((data: object) => {
        postData('/weather/add', {
          //@ts-ignore
          temp: data['main'].temp,
          feel: userFeel, //@ts-ignore
          loc: data['name'], //@ts-ignore
          humid: data['main'].humidity, //@ts-ignore
          wind: data['wind'].speed,
        }).then(() => {
          /* There isn't an instance of 'data' here because 'getAndUpdate()' doesen't need it, as it already has a
           *  defined GET route declared inside of it that retreive the data object from the server.
           */
          getAndUpdate();
        });
      });
    } else {
      alert('Please make sure to select a country & Enter a zipcode!');
    }
  };

  // Defining The listener Callback
  const showHistory = async (): Promise<void> => {
    listHistory().then(() => {
      const instances = document.querySelectorAll('.instance');
      for (const instance of instances) {
        instance.classList.toggle('hide');
      }
    });
  };

  // Adding a click event listener for the generate button.
  document.getElementById('generate')!.addEventListener('click', processClick);

  // Adding a click event listener for the get button.
  document.getElementById('get')!.addEventListener('click', showHistory);

  // Adding Mouse-Related events for social icons
  const socialIcons = document.querySelectorAll('i.fa-brands');
  for (const icon of socialIcons) {
    icon.addEventListener('mouseenter', socialAnimation);
    icon.addEventListener('mouseleave', socialAnimation);
  }
};

// Making sure that the DOM is ready First
document.addEventListener('DOMContentLoaded', init);
