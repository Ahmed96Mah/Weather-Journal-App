// Defining the update UI function
export const getAndUpdate = async () => {
    const request = await fetch('/getdata');
    try {
        const retreivedData = await request.json();
        document.getElementById('cityLoc').textContent = `Location: ${retreivedData.loc}`;
        document.getElementById('date').textContent = `Date: ${retreivedData.date}`;
        document.getElementById('temp').textContent = `Temperature: ${retreivedData.temp} °F`;
        document.getElementById('windSpeed').textContent = `Wind Speed: ${retreivedData.wind}`;
        document.getElementById('humidity').textContent = `Humidity: ${retreivedData.humid}%`;
        document.getElementById('content').textContent = `Your Feeling: ${retreivedData.feel}`;
    }
    catch (err) {
        throw new Error(`Error: ${err}`);
    }
};
