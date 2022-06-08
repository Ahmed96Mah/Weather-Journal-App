// Defining the update UI function
export const getAndUpdate = async () => {
  const valueSecs = document
    .querySelector('.section')
    .querySelectorAll('.value');
  const request = await fetch('/getdata');
  try {
    const retreivedData = await request.json();
    for (const sec of valueSecs) {
      console.log('next');
      switch (sec.id) {
        case 'cityLoc':
          if (sec.textContent === '') {
            // If this is the 1st Iteration
            sec.classList.toggle('hide');
            sec.textContent = `${retreivedData.loc}`;
          } else {
            // If this is 2nd & onward
            sec.classList.toggle('hide');
            setTimeout(() => {
              sec.textContent = `${retreivedData.loc}`;
              sec.classList.toggle('hide');
            }, 3000);
          }
          break;
        case 'temp':
          if (sec.textContent === '') {
            // If this is the 1st Iteration
            sec.classList.toggle('hide');
            sec.textContent = `${retreivedData.temp} °F`;
          } else {
            // If this is 2nd & onward
            sec.classList.toggle('hide');
            setTimeout(() => {
              sec.textContent = `${retreivedData.temp} °F`;
              sec.classList.toggle('hide');
            }, 3000);
          }
          break;
        case 'windSpeed':
          if (sec.textContent === '') {
            // If this is the 1st Iteration
            sec.classList.toggle('hide');
            sec.textContent = `${retreivedData.wind}`;
          } else {
            // If this is 2nd & onward
            sec.classList.toggle('hide');
            setTimeout(() => {
              sec.textContent = `${retreivedData.wind}`;
              sec.classList.toggle('hide');
            }, 3000);
          }
          break;
        case 'humidity':
          if (sec.textContent === '') {
            // If this is the 1st Iteration
            sec.classList.toggle('hide');
            sec.textContent = `${retreivedData.humid}%`;
          } else {
            // If this is 2nd & onward
            sec.classList.toggle('hide');
            setTimeout(() => {
              sec.textContent = `${retreivedData.humid}%`;
              sec.classList.toggle('hide');
            }, 3000);
          }
          break;
        case 'feel':
          if (sec.textContent === '') {
            // If this is the 1st Iteration
            sec.classList.toggle('hide');
            sec.textContent = `${retreivedData.feel}`;
          } else {
            // If this is 2nd & onward
            sec.classList.toggle('hide');
            setTimeout(() => {
              sec.textContent = `${retreivedData.feel}`;
              sec.classList.toggle('hide');
            }, 3000);
          }
          break;
        default:
      }
    }
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};
