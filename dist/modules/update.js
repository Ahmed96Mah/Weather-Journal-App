// Defining the update UI function
export const getAndUpdate = async () => {
  const request = await fetch('/getdata');
  try {
    const retreivedData = await request.json();
    document.getElementById('cityLoc').textContent = `${retreivedData.loc}`;
    document.getElementById('date').textContent = `${retreivedData.date}`;
    document.getElementById('temp').textContent = `${retreivedData.temp} °F`;
    document.getElementById('windSpeed').textContent = `${retreivedData.wind}`;
    document.getElementById('humidity').textContent = `${retreivedData.humid}%`;
    document.getElementById('feel').textContent = `${retreivedData.feel}`;
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};
