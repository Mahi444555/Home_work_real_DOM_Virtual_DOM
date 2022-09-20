//firstly select the target element 
let country = document.getElementById("countryy")
let flag = document.getElementById("flagg")
let region = document.getElementById("regionn")
let currencies=document.getElementById("currencyy")
let capital = document.getElementById("capitall")
let output= document.getElementById("output")
//we have to create a asyc fucntion which fetch, async, await, try,catch,finally keyword containing
//wher it will executes here only when we call it and insert all data to input fields

//create arrow function with async keyword 

const restCountry=async ()=>{

    try {

        //fetch the api 
    let response = await fetch("https://restcountries.com/v3.1/all")    //here using await keyword because async function always return promies to handle that use it...
    let data= await response.json();     //converting all data from stringify data to json 
    console.log(data);
        console.log(data[0].capital[0])
        console.log(data[0].currencies.BGN.name)
        console.log(data[0].flags)
        country.innerHTML=` <p>${data[150].name.common}</p>` 
         flag.innerHTML=`  <img src="${data[150].flags.png}">`
         region.innerHTML=` ${data[150].region}`
         capital.innerHTML=`${data[150].capital}`
         currencies.innerHTML=`${data[150].currencies.INR.name}`
    //now just insert that all data one-by-one into html input fileds using DOM manipulation
    //use templet literals but data is in form of array of object then use for loop to iterate over it
    //where data is array of objet which contain all data
    
    for(let i=0;i<data.length;i++) {
        output.innerHTML+= ` <br>
        <div class="container">
         <label for="" class="form-control country">country Name:</label> <br>
         <div id="capital" >${data[i].name.common}</div> <br>
         
         <label for="" class="form-control flag">Flag:</label>  <br>
            <img class="" height="200px" width="400px" src="${data[i].flags.png}"> <br> <br>

        <label for="" class="form-control region">Region: </label> <br>
            <div id="region" >${data[i].region}</div>      <br>
        
         <label for="" class="form-control capital">Capital: </label> <br>
            <div id="capital" >${data[i].capital}</div> <br>
        </div>
            `
         }

    } catch (error) {
        console.log(error);
    }
}

restCountry();