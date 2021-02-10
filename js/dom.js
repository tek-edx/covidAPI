
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
     sumbitEvent.reset();
   
    displayResult.innerHTML =` <div class="donutSpinner"></div>`;
    document.querySelector('#exampleModalLabel').innerHTML="";
    seriesCall(country)
    

        .then((data) => {
            console.log(data);
           
            document.querySelector('#exampleModalLabel').innerHTML =`<h2> ${country} </h2>`;
            
            displayResult.innerHTML = `<li>   
                                                <h3>Death : ${data.deaths}</h3>
                                                <h3>Case : ${data.cases}</h3>
                                                <h3> Recover : ${data.recovered}</h3>
                                                                
                                        
                                        </li>`

       

         })
        .catch((error) => {

            displayResult.innerHTML = `<li>   
                                               <h2>${error.message}</h2>
                                                                
                                        
                                        </li>`

        });

    

});

