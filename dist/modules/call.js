// Define the GET Async function that is assigned to retreive the weather info
export const getApiData = async (url, zip, country, key) => {
  //call the Open Weather Map API
  const request = await fetch(url + zip + country + key);
  try {
    const apiData = await request.json();
    return apiData;
  } catch (err) {
    throw new Error(`Error: ${err}`);
  }
};
