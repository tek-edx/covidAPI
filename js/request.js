

/* Async function to get the status of covid from all countries Started 

const getLatestData = async () => {

    const data = await fetch("https://covid19-api.org/api/status");
    const dataJson = await data.json();

    return dataJson;
};  

*/

// Async function to API request and return the info of all countries 

const getCountries = async ()=> {

    const countries = await fetch("https://covid19-api.org/api/countries");
    const countriesData = await countries.json();

    return countriesData

};

// Async function to API request and return the data of the specific country

const getCountryData = async (country) =>{

    const getEndpoint = await fetch(`https://covid19-api.org/api/status/${country}`);

    console.log(getEndpoint);
    
    
    const endpointData = await getEndpoint.json();
    return endpointData;
};


// Async function take an country name as argument and return country code 

const searchCountry = async (countryName) => {

    const countriesInfo = await getCountries();
    let countryCode ;
    
    console.log(countriesInfo);
    
    countriesInfo.find((country) => {
         
        if(country.name === countryName){
            console.log(country.alpha2);
            console.log( `I am inside country name `);
            countryCode = country.alpha2;
        }

        

    });
    


    return countryCode;
}

// Async function to take the country  id and return the new Cases 
const newCaseByCountry =  async (country) => {

    const newCase =  await fetch(`https://covid19-api.org/api/diff/${country}`);
    const newCaseData = await newCase.json();
    return newCaseData;
};


// Async function to take the country name and return the country data and latest changes 

const seriesCall = async (country) => {

const getCountryId = await searchCountry(country);

const getCountryDataArray= await getCountryData(getCountryId);
const getCountryDiffArray = await newCaseByCountry(getCountryId);

return [getCountryDataArray,getCountryDiffArray];


};

