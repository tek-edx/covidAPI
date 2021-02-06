
const displayResult = document.querySelector("#display-result");
const inputField = document.querySelector("#country-name");
const recentUpdate = document.querySelector('#recent-update');

const sumbitEvent = document.querySelector('form');

sumbitEvent.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    let country = inputField.value;
    country = country.trim();
     country = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase()
     console.log(country);

    seriesCall(country)

        .then((data) => {
            console.log(data);
            
            displayResult.innerHTML += `<li>
                                         
                                        <h3>Case : ${data[0].cases}</h3>
                                        <h3>Death : ${data[0].deaths}</h3>
                                        <h3> Recover : ${data[0].recovered}</h3>
                                        <hr>
                                        <h3> New Cases: ${data[1].new_cases}</h3>
                                        <h3> New Case Percentage : ${data[1].new_cases_percentage}</h3>
                                        <h3> New Death : ${data[1].new_deaths}</h3>
                                        <h3> New Death Percentage : ${data[1].new_deaths_percentage}</h3>
                                        <h3> New Recovered: ${data[1].new_recovered}</h3>
                                        <h3> New Recovered Percentage : ${data[1].new_recovered_percentage}</h3>
                                        </li>`

       

         })
        .catch((error) => { console.log(error.message) });

    

});

