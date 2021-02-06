// Async function to request  by country 


const getLatestData = async () => {

    const data = await fetch("https://covid19-api.org/api/status");
    const dataJson = await data.json();

    return dataJson;
};

//getLatestData().then((data) =>{ console.log(data)}).catch((error) => { console.log(error.message)});

const getCountries = async ()=> {

    const countries = await fetch("https://covid19-api.org/api/countries");
    const countriesData = await countries.json();

    return countriesData

};

//getCountries().then((data) =>{console.log(data)}).catch((error) => console.log(error.message));

const getCountryData = async (country) =>{

    const getEndpoint = await fetch(`https://covid19-api.org/api/status/${country}`);
    const endpointData = await getEndpoint.json();
    return endpointData;
};

// getCountryData('Ukrain').then((data) =>{
//     console.log(data);
// }).catch((error) => console.log(error.message));